import { addBuilding, addPath, addTree, addWater, DEFAULT_CONFIG, eraseAt, generateSettlement, homeRange, normalizeConfig, settlementPreset, type EditTool, type ServiceType, type SettlementConfig, type SettlementMap, type SettlementSize } from './logic';
import { buildMapSvg, downloadFile, svgToDataUrl, updateMapHost } from './dom-views';
import { bindContextEditor } from './editor';
import { evaluateSettlement } from './evaluator';
import { configFromMap, decodeShareState, encodeShareState, isSettlementMap, loadSettlement, saveSettlement, type SettlementState } from './storage';
import type { SettlementMapUI } from './ui';

const BUILT_IN_SERVICES = ['tavern', 'smithy', 'temple', 'market', 'stable', 'hall'];
const NAME_FIRST = ['Willow', 'Red', 'Cedar', 'Briar', 'Ash', 'Silver', 'Moss', 'Oak', 'Raven', 'Fox', 'Amber', 'Thorn', 'Hollow', 'Maple', 'Stone', 'Meadow'];
const NAME_SECOND = ['Mere', 'Brook', 'Crossing', 'Hollow', 'Watch', 'Glen', 'Ford', 'Heath', 'Cairn', 'Reach', 'Meadow', 'Vale', 'Ridge', 'Marsh', 'Gate', 'Dell'];

function serviceLabel(service: ServiceType, ui: SettlementMapUI): string {
  const labels: Record<string, string> = { tavern: ui.serviceTavern, smithy: ui.serviceSmithy, temple: ui.serviceTemple, market: ui.serviceMarket, stable: ui.serviceStable, hall: ui.serviceHall };
  return labels[service] ?? service;
}

interface RuntimeState {
  current: SettlementMap;
  customServices: string[];
  regenerationTimer?: number;
}

function queryMapFromUrl(): SettlementState | null {
  const params = new URLSearchParams(window.location.search);
  const value = params.get('settlement') ?? params.get('map');
  return value ? decodeShareState(value) : null;
}

function randomName(): string {
  const values = new Uint32Array(2);
  crypto.getRandomValues(values);
  return `${NAME_FIRST[values[0]! % NAME_FIRST.length]} ${NAME_SECOND[values[1]! % NAME_SECOND.length]}`;
}

function selectedServices(root: HTMLElement): ServiceType[] { return [...root.querySelectorAll<HTMLInputElement>('[data-service-option]:checked')].map((input) => input.value); }

function activeData<T extends string>(root: HTMLElement, attr: string, fallback: T): T {
  const element = root.querySelector<HTMLElement>(`[data-${attr}].is-active`);
  return (element?.dataset[attr] as T | undefined) ?? fallback;
}

function readConfig(root: HTMLElement): SettlementConfig {
  const seed = root.querySelector<HTMLInputElement>('[name="seed"]')?.value ?? DEFAULT_CONFIG.seed;
  const environment = activeData(root, 'environment', DEFAULT_CONFIG.environment);
  const size = activeData(root, 'size', DEFAULT_CONFIG.size);
  const style = activeData(root, 'style', DEFAULT_CONFIG.style);
  const homes = Number(root.querySelector<HTMLInputElement>('[data-homes]')?.value ?? DEFAULT_CONFIG.homes);
  return normalizeConfig({ seed, environment, size, style, homes, services: selectedServices(root) });
}

function setPressed(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    const active = element.dataset.environment === value || element.dataset.size === value || element.dataset.style === value || element.dataset.tool === value;
    element.classList.toggle('is-active', active);
    element.setAttribute('aria-pressed', String(active));
  });
}

function findServiceEntry(root: HTMLElement, service: ServiceType): HTMLElement | null {
  return [...root.querySelectorAll<HTMLElement>('[data-service-entry]')].find((entry) => entry.dataset.serviceEntry === service) ?? null;
}

interface ServiceOption {
  service: ServiceType;
  ui: SettlementMapUI;
  checked: boolean;
  onRemove: (service: ServiceType) => void;
}

function appendServiceOption(root: HTMLElement, option: ServiceOption): void {
  const { service, ui, checked, onRemove } = option;
  const list = root.querySelector<HTMLElement>('[data-service-list]');
  if (!list || findServiceEntry(root, service)) return;
  const entry = document.createElement('div');
  entry.className = 'rsm-service-entry';
  entry.dataset.serviceEntry = service;
  const label = document.createElement('label');
  label.className = 'rsm-service-chip';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.value = service;
  input.checked = checked;
  input.dataset.serviceOption = '';
  const text = document.createElement('span');
  text.textContent = serviceLabel(service, ui);
  label.append(input, text);
  entry.append(label);
  if (!BUILT_IN_SERVICES.includes(service)) {
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'rsm-remove-service';
    remove.textContent = 'x';
    remove.setAttribute('aria-label', `${ui.removeService}: ${serviceLabel(service, ui)}`);
    remove.addEventListener('click', () => onRemove(service));
    entry.append(remove);
  }
  list.append(entry);
}

function syncControls(root: HTMLElement, config: SettlementConfig, ui: SettlementMapUI, onRemove: (service: ServiceType) => void): void {
  const seed = root.querySelector<HTMLInputElement>('[name="seed"]');
  const homes = root.querySelector<HTMLInputElement>('[data-homes]');
  const output = root.querySelector<HTMLOutputElement>('[data-homes-output]');
  if (seed) seed.value = config.seed;
  if (homes) { homes.min = String(homeRange(config.size).min); homes.max = String(homeRange(config.size).max); homes.value = String(config.homes); }
  if (output) output.value = String(config.homes);
  setPressed(root, '[data-environment]', config.environment);
  setPressed(root, '[data-style]', config.style);
  setPressed(root, '[data-size]', config.size);
  config.services.forEach((service) => appendServiceOption(root, { service, ui, checked: true, onRemove }));
  root.querySelectorAll<HTMLInputElement>('[data-service-option]').forEach((input) => { input.checked = config.services.includes(input.value); });
}

function updateSummary(root: HTMLElement, map: SettlementMap, ui: SettlementMapUI): void {
  const evaluation = evaluateSettlement(map, ui);
  root.querySelector('[data-terrain]')!.textContent = evaluation.terrainLabel;
  root.querySelector('[data-badge]')!.textContent = evaluation.badge;
  root.querySelector('[data-building-count]')!.textContent = String(evaluation.buildingCount);
  root.querySelector('[data-path-count]')!.textContent = String(evaluation.pathCount);
  root.querySelector('[data-service-count]')!.textContent = String(evaluation.serviceCount);
  root.querySelector('[data-water-count]')!.textContent = String(evaluation.waterCount);
}

function setStatus(root: HTMLElement, message: string): void { root.querySelector('[data-status]')!.textContent = message; }
function render(root: HTMLElement, map: SettlementMap, ui: SettlementMapUI, customServices: string[]): void { updateMapHost(root.querySelector<HTMLElement>('[data-map-host]')!, map, ui); updateSummary(root, map, ui); saveSettlement(map, customServices); }

function applyEdit(map: SettlementMap, tool: EditTool, point: { x: number; y: number }): SettlementMap {
  const actions: Partial<Record<EditTool, () => SettlementMap>> = {
    building: () => addBuilding(map, point),
    path: () => addPath(map, point),
    water: () => addWater(map, point),
    tree: () => addTree(map, point),
    erase: () => eraseAt(map, point),
  };
  return actions[tool]?.() ?? map;
}

function regenerate(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  state.current = generateSettlement(readConfig(root));
  syncControls(root, state.current.config, ui, (service) => removeCustomService(root, state, ui, service));
  render(root, state.current, ui, state.customServices);
}

function scheduleRegenerate(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  if (state.regenerationTimer) window.clearTimeout(state.regenerationTimer);
  state.regenerationTimer = window.setTimeout(() => { delete state.regenerationTimer; regenerate(root, state, ui); }, 180);
}

function applySizePreset(root: HTMLElement, size: SettlementSize): void {
  const homes = root.querySelector<HTMLInputElement>('[data-homes]');
  if (!homes) return;
  const range = homeRange(size);
  const preset = settlementPreset(size);
  homes.min = String(range.min);
  homes.max = String(range.max);
  homes.value = String(Math.min(range.max, Math.max(range.min, preset.homes)));
  root.querySelector<HTMLOutputElement>('[data-homes-output]')!.value = homes.value;
  root.querySelectorAll<HTMLInputElement>('[data-service-option]').forEach((input) => {
    if (BUILT_IN_SERVICES.includes(input.value)) input.checked = preset.services.includes(input.value);
  });
}

function addCustomService(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  const input = root.querySelector<HTMLInputElement>('[data-new-service]');
  const value = input?.value.trim();
  if (!input || !value || [...root.querySelectorAll<HTMLInputElement>('[data-service-option]')].some((item) => item.value.toLocaleLowerCase() === value.toLocaleLowerCase())) return;
  state.customServices.push(value);
  appendServiceOption(root, { service: value, ui, checked: true, onRemove: (service) => removeCustomService(root, state, ui, service) });
  findServiceEntry(root, value)?.querySelector<HTMLInputElement>('[data-service-option]')?.addEventListener('change', () => scheduleRegenerate(root, state, ui));
  input.value = '';
  saveSettlement(state.current, state.customServices);
  scheduleRegenerate(root, state, ui);
}

function removeCustomService(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI, service: ServiceType): void {
  if (BUILT_IN_SERVICES.includes(service)) return;
  state.customServices = state.customServices.filter((item) => item !== service);
  findServiceEntry(root, service)?.remove();
  saveSettlement(state.current, state.customServices);
  scheduleRegenerate(root, state, ui);
}

function attachChoiceEvents(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  root.querySelectorAll<HTMLElement>('[data-environment]').forEach((button) => button.addEventListener('click', () => { setPressed(root, '[data-environment]', button.dataset.environment ?? 'forest'); scheduleRegenerate(root, state, ui); }));
  root.querySelectorAll<HTMLElement>('[data-style]').forEach((button) => button.addEventListener('click', () => { setPressed(root, '[data-style]', button.dataset.style ?? 'timber'); scheduleRegenerate(root, state, ui); }));
  root.querySelectorAll<HTMLElement>('[data-size]').forEach((button) => button.addEventListener('click', () => { const size = button.dataset.size as SettlementSize ?? 'village'; setPressed(root, '[data-size]', size); applySizePreset(root, size); scheduleRegenerate(root, state, ui); }));
  root.querySelector<HTMLInputElement>('[data-homes]')?.addEventListener('input', (event) => { root.querySelector<HTMLOutputElement>('[data-homes-output]')!.value = String((event.target as HTMLInputElement).value); scheduleRegenerate(root, state, ui); });
  root.querySelector<HTMLInputElement>('[name="seed"]')?.addEventListener('input', () => scheduleRegenerate(root, state, ui));
  root.querySelector('[data-random-seed]')?.addEventListener('click', () => { root.querySelector<HTMLInputElement>('[name="seed"]')!.value = randomName(); scheduleRegenerate(root, state, ui); });
  root.querySelectorAll<HTMLInputElement>('[data-service-option]').forEach((input) => input.addEventListener('change', () => scheduleRegenerate(root, state, ui)));
  root.querySelector('[data-add-service]')?.addEventListener('click', () => addCustomService(root, state, ui));
  root.querySelector<HTMLInputElement>('[data-new-service]')?.addEventListener('keydown', (event) => { if (event.key === 'Enter') addCustomService(root, state, ui); });
}

function exportPng(map: SettlementMap, ui: SettlementMapUI): void { const image = new Image(); image.onload = () => { const canvas = document.createElement('canvas'); canvas.width = map.width * 32; canvas.height = map.height * 32; const context = canvas.getContext('2d'); if (!context) return; context.fillStyle = '#f8f0df'; context.fillRect(0, 0, canvas.width, canvas.height); context.drawImage(image, 0, 0, canvas.width, canvas.height); canvas.toBlob((blob) => { if (blob) downloadFile(blob, 'settlement-exploration-map.png'); }, 'image/png'); }; image.src = svgToDataUrl(buildMapSvg(map, ui)); }
function exportJson(map: SettlementMap): void { downloadFile(JSON.stringify(map, null, 2), 'settlement-exploration-map.json', 'application/json'); }

function attachActionEvents(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  root.querySelector('[data-generate]')?.addEventListener('click', () => regenerate(root, state, ui));
  root.querySelector('[data-share]')?.addEventListener('click', () => { const url = new URL(window.location.href); url.searchParams.set('settlement', encodeShareState(state.current, state.customServices)); window.history.replaceState({}, '', url); void navigator.clipboard?.writeText(url.toString()); setStatus(root, ui.linkCopied); });
  root.querySelector('[data-export-svg]')?.addEventListener('click', () => downloadFile(buildMapSvg(state.current, ui), 'settlement-exploration-map.svg', 'image/svg+xml'));
  root.querySelector('[data-export-png]')?.addEventListener('click', () => exportPng(state.current, ui));
  root.querySelector('[data-export-json]')?.addEventListener('click', () => exportJson(state.current));
  root.querySelector<HTMLInputElement>('[data-import-json]')?.addEventListener('change', (event) => { void importJson(root, state, ui, event.target as HTMLInputElement); });
}
async function importJson(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI, input: HTMLInputElement): Promise<void> { const file = input.files?.[0]; if (!file) return; try { const parsed: unknown = JSON.parse(await file.text()); if (!isSettlementMap(parsed)) throw new Error('invalid'); state.current = parsed; state.customServices = [...new Set([...state.customServices, ...parsed.config.services.filter((service) => !BUILT_IN_SERVICES.includes(service))])]; state.customServices.forEach((service) => appendServiceOption(root, { service, ui, checked: parsed.config.services.includes(service), onRemove: (item) => removeCustomService(root, state, ui, item) })); syncControls(root, configFromMap(parsed), ui, (service) => removeCustomService(root, state, ui, service)); render(root, state.current, ui, state.customServices); } catch { setStatus(root, ui.importError); } finally { input.value = ''; } }
function runtimeStateFromStorage(): RuntimeState { const loaded = queryMapFromUrl() ?? loadSettlement(); const initialMap = loaded?.map ?? generateSettlement(DEFAULT_CONFIG); const customServices = [...new Set([...(loaded?.customServices ?? []), ...initialMap.config.services.filter((service) => !BUILT_IN_SERVICES.includes(service))])]; return { current: initialMap, customServices }; }
function prepareControls(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  state.customServices.forEach((service) => appendServiceOption(root, { service, ui, checked: state.current.config.services.includes(service), onRemove: (item) => removeCustomService(root, state, ui, item) }));
  syncControls(root, state.current.config, ui, (service) => removeCustomService(root, state, ui, service));
  render(root, state.current, ui, state.customServices);
}

function bindEditor(root: HTMLElement, state: RuntimeState, ui: SettlementMapUI): void {
  bindContextEditor(root, (point, tool) => {
    state.current = applyEdit(state.current, tool, point);
    render(root, state.current, ui, state.customServices);
  });
}

export function mountSettlementMap(): void {
  const root = document.querySelector<HTMLElement>('[data-settlement-tool]');
  if (!root || root.dataset.mounted === 'true') return;
  root.dataset.mounted = 'true';
  const ui = JSON.parse(root.querySelector<HTMLScriptElement>('[data-ui]')?.textContent ?? '{}') as SettlementMapUI;
  const state = runtimeStateFromStorage();
  prepareControls(root, state, ui);
  attachChoiceEvents(root, state, ui);
  bindEditor(root, state, ui);
  attachActionEvents(root, state, ui);
}
