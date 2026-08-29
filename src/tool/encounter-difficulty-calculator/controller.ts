import { calculateEncounter, CR_OPTIONS, DEFAULT_SETTINGS, QUICK_CR_VALUES, type EncounterSettings } from './logic';
import { readEncounterSettings, writeEncounterSettings } from './storage';
import { renderResult } from './dom-views';

type Root = HTMLElement & { dataset: DOMStringMap };
type Labels = Record<string, string>;

function getUi(root: Root): Labels {
  try {
    return JSON.parse(root.dataset.ui ?? '{}') as Labels;
  } catch {
    return {};
  }
}

function query<T extends HTMLElement>(root: Root, selector: string): T {
  return root.querySelector(selector) as T;
}

function getSettings(root: Root): EncounterSettings {
  return {
    partyLevel: Number(query<HTMLInputElement>(root, '[data-input="partyLevel"]').value),
    partySize: Number(query<HTMLInputElement>(root, '[data-input="partySize"]').value),
    monsterCr: Number(root.querySelector<HTMLElement>('[data-cr].is-active')?.dataset.cr ?? 2),
    monsterCount: Number(query<HTMLInputElement>(root, '[data-input="monsterCount"]').value),
  };
}

function setRangeValue(root: Root, key: string, value: number): void {
  const input = query<HTMLInputElement>(root, '[data-input="' + key + '"]');
  const output = query<HTMLElement>(root, '[data-output="' + key + '"]');
  input.value = String(value);
  output.textContent = String(value);
}

function setCr(root: Root, cr: number): void {
  const list = query<HTMLElement>(root, '[data-cr-list]');
  if (!QUICK_CR_VALUES.includes(cr as typeof QUICK_CR_VALUES[number])) list.classList.add('is-expanded');
  root.querySelectorAll<HTMLElement>('[data-cr]').forEach((chip) => {
    const active = Number(chip.dataset.cr) === cr;
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  const output = root.querySelector<HTMLElement>('[data-cr-output]');
  if (output) output.textContent = formatCr(cr);
}

function formatCr(cr: number): string {
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}

function applySettings(root: Root, settings: EncounterSettings): void {
  setRangeValue(root, 'partyLevel', settings.partyLevel);
  setRangeValue(root, 'partySize', settings.partySize);
  setRangeValue(root, 'monsterCount', settings.monsterCount);
  setCr(root, settings.monsterCr);
}

function render(root: Root): void {
  const result = calculateEncounter(getSettings(root));
  const labels = getUi(root);
  query<HTMLElement>(root, '[data-result]').innerHTML = renderResult(result, labels);
  writeEncounterSettings(result.settings);
  root.dataset.difficulty = result.difficulty;
}

function bindRanges(root: Root): void {
  root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
    input.addEventListener('input', () => {
      query<HTMLElement>(root, '[data-output="' + input.dataset.input + '"]').textContent = input.value;
      render(root);
    });
  });
}

function bindCr(root: Root): void {
  root.querySelectorAll<HTMLElement>('[data-cr]').forEach((chip) => chip.addEventListener('click', () => {
    setCr(root, Number(chip.dataset.cr));
    render(root);
  }));
}

function bindCrMore(root: Root): void {
  const button = query<HTMLButtonElement>(root, '[data-cr-more]');
  button.addEventListener('click', () => {
    const list = query<HTMLElement>(root, '[data-cr-list]');
    const expanded = list.classList.toggle('is-expanded');
    const labels = getUi(root);
    button.textContent = expanded ? labels.lessCr : labels.moreCr;
  });
}

function bindPresets(root: Root): void {
  const presets: Record<string, EncounterSettings> = {
    classic: { partyLevel: 5, partySize: 4, monsterCr: 2, monsterCount: 2 },
    boss: { partyLevel: 8, partySize: 4, monsterCr: 10, monsterCount: 1 },
    swarm: { partyLevel: 3, partySize: 4, monsterCr: 0.25, monsterCount: 8 },
  };
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    applySettings(root, presets[button.dataset.preset ?? ''] ?? DEFAULT_SETTINGS);
    render(root);
  }));
}

function bindReset(root: Root): void {
  query<HTMLButtonElement>(root, '[data-reset]').addEventListener('click', () => {
    applySettings(root, DEFAULT_SETTINGS);
    render(root);
  });
}

function setupCrOptions(root: Root): void {
  const list = query<HTMLElement>(root, '[data-cr-list]');
  list.innerHTML = CR_OPTIONS.map((entry) => {
    const advanced = QUICK_CR_VALUES.includes(entry.value as typeof QUICK_CR_VALUES[number]);
    const attribute = advanced ? 'false' : 'true';
    return '<button type="button" class="cr-chip" data-cr="' + entry.value + '" data-advanced="' + attribute + '" aria-pressed="false">' + entry.label + '</button>';
  }).join('');
}

export function mountEncounterCalculator(root: Root): void {
  setupCrOptions(root);
  applySettings(root, readEncounterSettings() ?? DEFAULT_SETTINGS);
  bindRanges(root);
  bindCr(root);
  bindCrMore(root);
  bindPresets(root);
  bindReset(root);
  render(root);
}
