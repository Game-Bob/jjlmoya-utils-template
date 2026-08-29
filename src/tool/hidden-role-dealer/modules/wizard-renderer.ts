import type { Player, Role } from '../types';
import { parseInputValue, getUIValue, isValidWriter, setWrapperDisplay } from './utils';

export interface SetupDOMOptions {
  container: HTMLElement;
  players: Player[];
  customRoles: Role[];
  activePreset: string;
  ui: Record<string, string>;
}

export function renderPlayersListHTML(players: Player[]): string {
  return players
    .map(
      (p) => `
    <div class="hrd-player-item">
      <span class="hrd-player-name">${p.name}</span>
      <button class="hrd-btn-delete" data-id="${p.id}" type="button">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `
    )
    .join('');
}

export function renderCustomRolesListHTML(customRoles: Role[]): string {
  return customRoles
    .map(
      (r) => `
    <div class="hrd-player-item">
      <span class="hrd-player-name">
        ${r.name} 
        <span class="hrd-role-badge ${r.alignment}">${r.alignment}</span>
      </span>
      <button class="hrd-btn-delete-role" data-id="${r.id}" type="button">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `
    )
    .join('');
}

function updatePresetToggles(container: HTMLElement, activePreset: string): void {
  container.querySelectorAll('.hrd-preset-card').forEach((card) => {
    card.classList.toggle('active', card.getAttribute('data-key') === activePreset);
  });
  const impSettings = container.querySelector('#impostor-settings') as HTMLElement;
  if (impSettings) impSettings.style.display = activePreset === 'impostor' ? 'block' : 'none';
  const editor = container.querySelector('#custom-roles-editor') as HTMLElement;
  if (editor) editor.style.display = activePreset === 'custom' ? 'block' : 'none';
}

function updateCustomRoles(container: HTMLElement, customRoles: Role[]): void {
  const rolesList = container.querySelector('#custom-roles-list') as HTMLElement;
  if (rolesList) rolesList.innerHTML = renderCustomRolesListHTML(customRoles);
}

function updateImpostorWriterSelect(container: HTMLElement, players: Player[], ui: Record<string, string>): void {
  const select = container.querySelector('#select-impostor-writer') as HTMLSelectElement;
  if (!select) return;
  const current = select.value;
  const host = getUIValue(ui, 'impostorWriterRandom', 'Non-player host');
  const pre = getUIValue(ui, 'impostorWriterPreround', 'Secret Pre-round (All players)');
  select.innerHTML = `<option value="random">${host}</option>` +
    `<option value="preround">${pre}</option>` +
    players.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  if (isValidWriter(current, players)) {
    select.value = current;
  }
  const secretWrap = container.querySelector('#impostor-secret-wrapper') as HTMLElement;
  if (secretWrap) {
    secretWrap.style.display = select.value === 'random' ? 'flex' : 'none';
  }
  const descEl = container.querySelector('#impostor-writer-desc') as HTMLElement;
  if (descEl) {
    if (select.value === 'random') {
      descEl.textContent = getUIValue(ui, 'impostorWriterDescHost', 'Non-player host uses a random word.');
    } else if (select.value === 'preround') {
      descEl.textContent = getUIValue(ui, 'impostorWriterDescPreround', 'Pre-round lets all players secretly write words, then picks one randomly.');
    } else {
      descEl.textContent = getUIValue(ui, 'impostorWriterDescPlayer', 'Selected player writes the word and cannot be the impostor.');
    }
  }
}

function getImpostorLimit(container: HTMLElement, mode: string, count: number): number {
  if (mode === 'fixed') {
    const el = container.querySelector('#select-impostor-fixed-count') as HTMLSelectElement;
    return parseInputValue(el, 1);
  }
  if (mode === 'percentage') {
    const el = container.querySelector('#input-impostor-percent') as HTMLInputElement;
    const pct = parseInputValue(el, 25);
    return Math.max(1, Math.round((pct / 100) * count));
  }
  const minEl = container.querySelector('#input-impostor-min') as HTMLInputElement;
  return parseInputValue(minEl, 1);
}

function checkImpostorInvalid(container: HTMLElement, players: Player[], ui: Record<string, string>): { invalid: boolean; msg: string } {
  const select = container.querySelector('#select-impostor-writer') as HTMLSelectElement;
  const writerId = select?.value || 'random';
  const count = players.length;
  const activeCount = (writerId === 'random' || writerId === 'preround') ? count : count - 1;
  const mode = (container.querySelector('#select-impostor-mode') as HTMLSelectElement)?.value || 'fixed';
  const limit = getImpostorLimit(container, mode, count);
  if (activeCount <= limit) {
    return { invalid: true, msg: ui.impostorWarning };
  }
  return { invalid: false, msg: '' };
}

function checkValidation(options: SetupDOMOptions): { invalid: boolean; msg: string } {
  const count = options.players.length;
  if (count < 3) {
    return { invalid: true, msg: options.ui.mismatchWarning };
  }
  if (options.activePreset === 'impostor') {
    return checkImpostorInvalid(options.container, options.players, options.ui);
  }
  if (options.activePreset === 'custom' && options.customRoles.length !== count) {
    return { invalid: true, msg: options.ui.customMismatchWarning };
  }
  return { invalid: false, msg: '' };
}

function updateValidationAndButton(options: SetupDOMOptions): void {
  const btn = options.container.querySelector('#btn-deal-roles') as HTMLButtonElement;
  const warn = options.container.querySelector('#deal-warning') as HTMLElement;
  if (!btn || !warn) return;
  const { invalid, msg } = checkValidation(options);
  btn.disabled = invalid;
  warn.style.display = invalid ? 'block' : 'none';
  warn.textContent = invalid ? msg : '';
}

function updateImpostorModeWrappers(container: HTMLElement): void {
  const modeEl = container.querySelector('#select-impostor-mode') as HTMLSelectElement;
  const mode = modeEl ? modeEl.value : 'fixed';
  setWrapperDisplay(container.querySelector('#impostor-fixed-wrapper') as HTMLElement, mode === 'fixed');
  setWrapperDisplay(container.querySelector('#impostor-percent-wrapper') as HTMLElement, mode === 'percentage');
  setWrapperDisplay(container.querySelector('#impostor-range-wrapper') as HTMLElement, mode === 'range');
}

export function updateSetupDOM(options: SetupDOMOptions): void {
  const list = options.container.querySelector('#players-list') as HTMLElement;
  if (list) list.innerHTML = renderPlayersListHTML(options.players);
  updatePresetToggles(options.container, options.activePreset);
  updateCustomRoles(options.container, options.customRoles);
  updateImpostorWriterSelect(options.container, options.players, options.ui);
  updateImpostorModeWrappers(options.container);
  updateValidationAndButton(options);
}
