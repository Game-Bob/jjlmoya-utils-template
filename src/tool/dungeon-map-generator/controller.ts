import { exportJson, exportPng, exportSvg, renderMap } from './dom-views';
import {
  applyDungeonEdits,
  decodeDocument,
  editDungeonTile,
  encodeDocument,
  type DungeonDocument,
  type DungeonEdit,
} from './document';
import { bindContextEditor } from './editor';
import {
  DEFAULT_CONFIG,
  decodeConfig,
  generateDungeon,
  normalizeConfig,
  type DungeonConfig,
  type DungeonMap,
  type DungeonStyle,
} from './logic';
import { loadDocument, saveDocument } from './storage';
import type { DungeonMapGeneratorUI } from './ui';

interface GeneratorState {
  config: DungeonConfig;
  baseMap: DungeonMap;
  edits: DungeonEdit[];
  map: DungeonMap;
  root: HTMLElement;
  ui: DungeonMapGeneratorUI;
}

const WORDS = ['ember', 'ivory', 'moss', 'obsidian', 'quiet', 'scarlet', 'silver', 'sunken'];
const PLACES = ['archive', 'bastion', 'crypt', 'forge', 'gate', 'hollow', 'spire', 'vault'];

export function mountDungeonMapGenerators(): void {
  document.querySelectorAll<HTMLElement>('[data-dungeon-generator]').forEach(mountGenerator);
}

function mountGenerator(root: HTMLElement): void {
  const ui = readUi(root);
  if (!ui) return;
  const document = initialDocument();
  const baseMap = generateDungeon(document.config);
  const state: GeneratorState = {
    config: document.config,
    baseMap,
    edits: document.edits,
    map: applyDungeonEdits(baseMap, document.edits),
    root,
    ui,
  };
  syncControls(state);
  renderMap(state);
  bindControls(state);
  bindEditor(state);
  bindActions(state);
}

function readUi(root: HTMLElement): DungeonMapGeneratorUI | undefined {
  const data = root.querySelector<HTMLScriptElement>('[data-ui]')?.textContent;
  if (!data) return undefined;
  try {
    return JSON.parse(data) as DungeonMapGeneratorUI;
  } catch {
    return undefined;
  }
}

function initialDocument(): DungeonDocument {
  const shared = new URLSearchParams(window.location.search).get('dungeon');
  const document = shared ? decodeDocument(shared) : undefined;
  if (document) return document;
  const legacyConfig = shared ? decodeConfig(shared) : undefined;
  return loadDocument() || { version: 1, config: normalizeConfig(legacyConfig || DEFAULT_CONFIG), edits: [] };
}

function bindControls(state: GeneratorState): void {
  state.root.querySelector('[data-generate]')?.addEventListener('click', () => regenerate(state));
  state.root.querySelector('[data-random-seed]')?.addEventListener('click', () => randomizeSeed(state));
  state.root.querySelectorAll<HTMLInputElement>('[name="style"]').forEach((input) => {
    input.addEventListener('change', () => regenerate(state));
  });
  state.root.querySelectorAll<HTMLButtonElement>('[data-size]').forEach((button) => {
    button.addEventListener('click', () => applySizePreset(state, button));
  });
  state.root.querySelectorAll<HTMLInputElement>('[data-live-value]').forEach((input) => {
    input.addEventListener('input', () => updateOutput(state.root, input));
  });
}

function applySizePreset(state: GeneratorState, button: HTMLButtonElement): void {
  setInput(state.root, 'columns', button.dataset.columns || String(DEFAULT_CONFIG.columns));
  setInput(state.root, 'rows', button.dataset.rows || String(DEFAULT_CONFIG.rows));
  setInput(state.root, 'density', button.dataset.density || String(DEFAULT_CONFIG.density));
  state.root.querySelectorAll<HTMLInputElement>('[data-live-value]').forEach((input) => {
    updateOutput(state.root, input);
  });
  regenerate(state);
}

function bindActions(state: GeneratorState): void {
  state.root.querySelector('[data-copy-link]')?.addEventListener('click', () => void copyLink(state));
  state.root.querySelector('[data-export-svg]')?.addEventListener('click', () => exportSvg(state.map));
  state.root.querySelector('[data-export-png]')?.addEventListener('click', () => void exportPng(state.map));
  state.root.querySelector('[data-export-print]')?.addEventListener('click', () => void exportPng(state.map, true));
  state.root.querySelector('[data-export-json]')?.addEventListener('click', () => exportJson(state.map, state.edits));
  state.root.querySelector<HTMLInputElement>('[data-import-json]')?.addEventListener('change', (event) => {
    void importJson(state, event.currentTarget as HTMLInputElement);
  });
}

function bindEditor(state: GeneratorState): void {
  bindContextEditor(state.root, (x, y, tile) => applyCellEdit(state, x, y, tile));
}

function applyCellEdit(state: GeneratorState, x: number, y: number, tile: 0 | 1 | 2): void {
  state.map = editDungeonTile(state.map, x, y, tile);
  state.edits = updateEdits(state, x, y);
  saveState(state);
  renderMap(state);
}

function updateEdits(state: GeneratorState, x: number, y: number): DungeonEdit[] {
  const edits = state.edits.filter((edit) => edit.x !== x || edit.y !== y);
  const tile = state.map.tiles[y]?.[x];
  if (tile === undefined || tile === state.baseMap.tiles[y]?.[x]) return edits;
  return [...edits, { x, y, tile }];
}

function regenerate(state: GeneratorState): void {
  state.config = readConfig(state.root);
  state.baseMap = generateDungeon(state.config);
  state.map = state.baseMap;
  state.edits = [];
  saveState(state);
  syncSizePresets(state);
  renderMap(state);
}

function readConfig(root: HTMLElement): DungeonConfig {
  return normalizeConfig({
    columns: numberValue(root, '[name="columns"]') ?? DEFAULT_CONFIG.columns,
    rows: numberValue(root, '[name="rows"]') ?? DEFAULT_CONFIG.rows,
    density: numberValue(root, '[name="density"]') ?? DEFAULT_CONFIG.density,
    seed: root.querySelector<HTMLInputElement>('[name="seed"]')?.value || DEFAULT_CONFIG.seed,
    style: readStyle(root),
  });
}

function readStyle(root: HTMLElement): DungeonStyle {
  const value = root.querySelector<HTMLInputElement>('[name="style"]:checked')?.value;
  return value === 'cavern' || value === 'scifi' ? value : 'dungeon';
}

function numberValue(root: HTMLElement, selector: string): number | undefined {
  const value = root.querySelector<HTMLInputElement>(selector)?.valueAsNumber;
  return Number.isFinite(value) ? value : undefined;
}

function syncControls(state: GeneratorState): void {
  setInput(state.root, 'seed', state.config.seed);
  setInput(state.root, 'columns', String(state.config.columns));
  setInput(state.root, 'rows', String(state.config.rows));
  setInput(state.root, 'density', String(state.config.density));
  const style = state.root.querySelector<HTMLInputElement>(`[name="style"][value="${state.config.style}"]`);
  if (style) style.checked = true;
  syncSizePresets(state);
  state.root.querySelectorAll<HTMLInputElement>('[data-live-value]').forEach((input) => updateOutput(state.root, input));
}

function syncSizePresets(state: GeneratorState): void {
  state.root.querySelectorAll<HTMLButtonElement>('[data-size]').forEach((button) => {
    const matchesColumns = Number(button.dataset.columns) === state.config.columns;
    const matchesRows = Number(button.dataset.rows) === state.config.rows;
    const matchesDensity = Number(button.dataset.density) === state.config.density;
    button.setAttribute('aria-pressed', String(matchesColumns && matchesRows && matchesDensity));
  });
}

function setInput(root: HTMLElement, name: string, value: string): void {
  const input = root.querySelector<HTMLInputElement>(`[name="${name}"]`);
  if (input) input.value = value;
}

function updateOutput(root: HTMLElement, input: HTMLInputElement): void {
  const output = root.querySelector<HTMLOutputElement>(`[data-output="${input.name}"]`);
  if (output) output.value = input.value;
}

function randomizeSeed(state: GeneratorState): void {
  const values = new Uint32Array(2);
  crypto.getRandomValues(values);
  const seed = `${WORDS[values[0]! % WORDS.length]}-${PLACES[values[1]! % PLACES.length]}`;
  setInput(state.root, 'seed', seed);
  regenerate(state);
}

async function copyLink(state: GeneratorState): Promise<void> {
  const url = new URL(window.location.href);
  url.searchParams.set('dungeon', encodeDocument(documentFromState(state)));
  try {
    await navigator.clipboard.writeText(url.toString());
    showCopyStatus(state);
  } catch {
    window.prompt(state.ui.copyLink, url.toString());
  }
}

function showCopyStatus(state: GeneratorState): void {
  const button = state.root.querySelector<HTMLButtonElement>('[data-copy-link]');
  if (!button) return;
  const original = button.textContent || state.ui.copyLink;
  button.textContent = state.ui.linkCopied;
  window.setTimeout(() => { button.textContent = original; }, 1800);
}

async function importJson(state: GeneratorState, input: HTMLInputElement): Promise<void> {
  const file = input.files?.[0];
  if (!file) return;
  try {
    const document = decodeDocument(await file.text());
    if (!document) throw new Error('Invalid dungeon document');
    state.config = document.config;
    state.baseMap = generateDungeon(document.config);
    state.edits = document.edits;
    state.map = applyDungeonEdits(state.baseMap, state.edits);
    syncControls(state);
    saveState(state);
    renderMap(state);
  } catch {
    window.alert(state.ui.importError);
  } finally {
    input.value = '';
  }
}

function documentFromState(state: GeneratorState): DungeonDocument {
  return { version: 1, config: state.config, edits: state.edits };
}

function saveState(state: GeneratorState): void {
  saveDocument(documentFromState(state));
}
