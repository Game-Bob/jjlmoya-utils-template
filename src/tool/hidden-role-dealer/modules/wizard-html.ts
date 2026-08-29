import type { Player, Role } from '../types';

export interface WizardRenderOptions {
  state: 'distributing' | 'revealed' | 'complete';
  wizardView: HTMLElement;
  preroundActive: boolean;
  preroundContributors: Player[];
  preroundStep: number;
  players: Player[];
  currentStep: number;
  impostorSecret: string;
  ui: Record<string, string>;
}

export function renderDistributing(player: Player, ui: Record<string, string>): string {
  return `
    <div class="hrd-pass-screen">
      <div class="hrd-pass-label">${ui.passTo}</div>
      <div class="hrd-player-highlight">${player.name}</div>
      <div class="hrd-hold-button-wrapper">
        <div class="hrd-hold-progress-ring"></div>
        <button class="hrd-hold-button" id="btn-hold-reveal" type="button">
          ${ui.holdToReveal}
        </button>
      </div>
      <div class="hrd-hold-hint">${ui.releasingResets}</div>
    </div>
  `;
}

function getSecretHTML(role: Role, ui: Record<string, string>, prefix: string): string {
  if (role.secretInfo.includes(prefix)) {
    const word = role.secretInfo.replace(prefix, '').trim();
    return `
      <div class="hrd-epic-secret-box good">
        <div class="hrd-epic-label">${prefix}</div>
        <div class="hrd-epic-word">${word}</div>
      </div>
    `;
  }
  const isImp = role.name === (ui.roleImpostorName || 'Impostor') || role.id.startsWith('imp-');
  if (role.alignment === 'evil' && isImp) {
    return `
      <div class="hrd-epic-secret-box evil">
        <div class="hrd-epic-label">${role.secretInfo}</div>
        <div class="hrd-epic-word">IMPOSTOR</div>
      </div>
    `;
  }
  return `<div class="hrd-secret-box">${role.secretInfo}</div>`;
}

export function renderRevealed(player: Player, ui: Record<string, string>): string {
  const role = player.role;
  if (!role) return '';
  const prefix = ui.roleCrewmateSecret || 'The Secret Word is:';
  const isImpostorPreset = role.id.startsWith('crew-') || role.id.startsWith('imp-');
  const secretHTML = getSecretHTML(role, ui, prefix);
  const badgeHTML = isImpostorPreset ? '' : `<div class="hrd-role-team hrd-role-badge ${role.alignment}">${role.team}</div>`;
  const descHTML = isImpostorPreset ? '' : `<p class="hrd-role-desc">${role.description}</p>`;
  return `
    <div class="hrd-reveal-screen">
      <div class="hrd-pass-label">${player.name}, ${ui.secretRoleIs}</div>
      <div class="hrd-card-container">
        <div class="hrd-role-card ${role.alignment} ${isImpostorPreset ? 'hrd-compact-card' : ''}">
          ${badgeHTML}
          <h3 class="hrd-role-name">${role.name}</h3>
          ${descHTML}
          ${secretHTML}
        </div>
      </div>
      <button class="hrd-btn-primary" id="btn-hide-role" type="button">
        ${ui.hideRole}
      </button>
    </div>
  `;
}

export function renderComplete(ui: Record<string, string>): string {
  return `
    <div class="hrd-complete-screen">
      <div class="hrd-complete-icon">
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="hrd-complete-title">${ui.finishedTitle}</h3>
      <p class="hrd-complete-desc">${ui.finishedDesc}</p>
      <button class="hrd-btn-primary" id="btn-restart" type="button">
        ${ui.restart}
      </button>
    </div>
  `;
}

export function renderWriterInputScreen(player: Player, ui: Record<string, string>): string {
  return `
    <div class="hrd-reveal-screen">
      <div class="hrd-pass-label">${player.name}</div>
      <p style="color: var(--dealer-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; text-align: center;">
        ${ui.writerInputPrompt}
      </p>
      <div class="hrd-input-row" style="margin-bottom: 1.5rem; width: 100%; max-width: 320px; margin-left: auto; margin-right: auto;">
        <input
          id="input-writer-secret"
          class="hrd-input"
          type="text"
          placeholder="${ui.writerInputPlaceholder}"
          maxlength="50"
          style="text-align: center;"
        />
      </div>
      <button class="hrd-btn-primary" id="btn-save-writer-word" type="button">
        ${ui.btnSetWord}
      </button>
    </div>
  `;
}

function renderPreroundWizard(options: WizardRenderOptions): void {
  const { state, wizardView, preroundContributors, preroundStep, ui } = options;
  if (state === 'distributing') {
    wizardView.innerHTML = renderDistributing(preroundContributors[preroundStep], ui);
  } else if (state === 'revealed') {
    const fakePlayer = {
      ...preroundContributors[preroundStep],
      role: {
        id: 'preround-writer',
        name: ui.roleWriterName || 'Writer',
        description: ui.preroundInputPrompt,
        team: '',
        secretInfo: '',
        alignment: 'good' as const
      },
      revealed: false
    };
    wizardView.innerHTML = renderWriterInputScreen(fakePlayer, ui);
  }
}

function renderGameWizard(options: WizardRenderOptions): void {
  const { state, wizardView, players, currentStep, impostorSecret, ui } = options;
  if (state === 'distributing') {
    const p = players[currentStep];
    wizardView.innerHTML = (p.role?.id === 'writer' && !impostorSecret)
      ? renderWriterInputScreen(p, ui)
      : renderDistributing(p, ui);
  } else if (state === 'revealed') {
    wizardView.innerHTML = renderRevealed(players[currentStep], ui);
  } else if (state === 'complete') {
    wizardView.innerHTML = renderComplete(ui);
  }
}

export function renderWizardDOM(options: WizardRenderOptions): void {
  if (options.preroundActive) {
    renderPreroundWizard(options);
  } else {
    renderGameWizard(options);
  }
}
