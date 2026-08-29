import { evaluateMap } from './evaluator';
import type { DungeonEdit } from './document';
import type { Door, DungeonMap, Tile } from './logic';
import type { DungeonMapGeneratorUI } from './ui';

interface RenderContext {
  map: DungeonMap;
  root: HTMLElement;
  ui: DungeonMapGeneratorUI;
}

const CELL = 20;

export function buildMapSvg(map: DungeonMap, standalone = false, isPrint = false): string {
  const width = map.config.columns * CELL;
  const height = map.config.rows * CELL;
  const style = isPrint ? 'print' : map.config.style;
  const cells = map.tiles.flatMap((row, y) =>
    row.map((tile, x) => tileSvg(tile, x, y, style))).join('');
  const palette = standalone ? standaloneStyle(style) : '';
  const doors = map.doors.map(doorSvg).join('');
  const hitGrid = standalone ? '' : interactionGridSvg(map);
  return `<svg class="dmg-map dmg-map-${style}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Generated dungeon map" xmlns="http://www.w3.org/2000/svg">${palette}<rect class="dmg-map-void" width="${width}" height="${height}"/>${cells}${doors}${compassSvg(width, height)}${hitGrid}</svg>`;
}

function tileSvg(tile: Tile, x: number, y: number, style: string): string {
  if (tile === 0) return '';
  const px = x * CELL;
  const py = y * CELL;
  const radius = style === 'cavern' ? 7 : 1;
  return `<rect class="dmg-map-floor" x="${px}" y="${py}" width="${CELL + 0.5}" height="${CELL + 0.5}" rx="${radius}"/>`;
}

function doorSvg(door: Door): string {
  const x = door.x * CELL;
  const y = door.y * CELL;
  if (door.orientation === 'vertical') {
    return `<g class="dmg-map-door"><line x1="${x + 10}" y1="${y + 2}" x2="${x + 10}" y2="${y + 18}"/><circle cx="${x + 10}" cy="${y + 4}" r="1.5"/></g>`;
  }
  return `<g class="dmg-map-door"><line x1="${x + 2}" y1="${y + 10}" x2="${x + 18}" y2="${y + 10}"/><circle cx="${x + 4}" cy="${y + 10}" r="1.5"/></g>`;
}

function compassSvg(width: number, height: number): string {
  if (width < 400 || height < 300) return '';
  const x = width - 34;
  const y = height - 34;
  return `<g class="dmg-map-compass" transform="translate(${x} ${y})"><circle r="18"/><path d="M0 -14 L4 0 L0 14 L-4 0 Z"/><circle r="3"/></g>`;
}

function interactionGridSvg(map: DungeonMap): string {
  return map.tiles.flatMap((row, y) => row.map((_tile, x) =>
    `<rect class="dmg-map-hit" data-cell data-x="${x}" data-y="${y}" x="${x * CELL}" y="${y * CELL}" width="${CELL}" height="${CELL}"/>`)).join('');
}

function standaloneStyle(style: string): string {
  if (style === 'print') {
    return `<style>.dmg-map-void{fill:#ffffff}.dmg-map-floor{fill:#ffffff;stroke:#333333;stroke-width:.6}.dmg-map-door line{stroke:#000000;stroke-width:4}.dmg-map-door circle{fill:#000000}.dmg-map-compass circle{fill:#ffffff;stroke:#000000;stroke-width:1}.dmg-map-compass path{fill:#000000}</style>`;
  }
  const floor = style === 'scifi' ? '#d9f6f0' : '#ead9b7';
  const door = style === 'cavern' ? '#d7774f' : '#b98142';
  return `<style>.dmg-map-void{fill:#171b22}.dmg-map-floor{fill:${floor};stroke:#6d6253;stroke-width:.7}.dmg-map-door line{stroke:${door};stroke-width:4}.dmg-map-door circle{fill:#fff}.dmg-map-compass circle{fill:#171b22;stroke:#c5a25c;stroke-width:1}.dmg-map-compass path{fill:#c5a25c}</style>`;
}

export function renderMap(context: RenderContext): void {
  const { map, root } = context;
  root.dataset.style = map.config.style;
  const mapHost = root.querySelector<HTMLElement>('[data-map-host]');
  if (mapHost) mapHost.innerHTML = buildMapSvg(map);
  setText(root, '[data-map-seed]', map.config.seed);
  setText(root, '[data-room-count]', String(map.rooms.length));
  setText(root, '[data-door-count]', String(map.doorCount));
  renderEvaluation(context);
}

function renderEvaluation(context: RenderContext): void {
  const evaluation = evaluateMap(context.map, context.ui);
  setText(context.root, '[data-floor-percent]', `${evaluation.coverage}%`);
  setText(context.root, '[data-evaluation-label]', evaluation.label);
  setText(context.root, '[data-evaluation-hint]', evaluation.hint);
  const badge = context.root.querySelector<HTMLElement>('[data-evaluation]');
  if (badge) badge.dataset.pace = evaluation.pace;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function filename(map: DungeonMap, extension: string, suffix = ''): string {
  const seed = map.config.seed.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `dungeon-${seed || 'map'}${suffix}.${extension}`;
}

export function exportSvg(map: DungeonMap, isPrint = false): void {
  const svg = buildMapSvg(map, true, isPrint);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  downloadBlob(blob, filename(map, 'svg', isPrint ? '-print' : ''));
}

export function exportJson(map: DungeonMap, edits: DungeonEdit[]): void {
  const data = JSON.stringify({ version: 1, config: map.config, edits }, null, 2);
  downloadBlob(new Blob([data], { type: 'application/json' }), filename(map, 'json'));
}

export async function exportPng(map: DungeonMap, isPrint = false): Promise<void> {
  const svg = buildMapSvg(map, true, isPrint);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const source = URL.createObjectURL(blob);
  try {
    await drawPng(map, source, isPrint ? '-print' : '');
  } finally {
    URL.revokeObjectURL(source);
  }
}

async function drawPng(map: DungeonMap, source: string, suffix = ''): Promise<void> {
  const image = await loadImage(source);
  const canvas = document.createElement('canvas');
  canvas.width = map.config.columns * CELL * 2;
  canvas.height = map.config.rows * CELL * 2;
  const context = canvas.getContext('2d');
  if (!context) return;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
  if (blob) downloadBlob(blob, filename(map, 'png', suffix));
}

function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Unable to render map image'));
    image.src = source;
  });
}
