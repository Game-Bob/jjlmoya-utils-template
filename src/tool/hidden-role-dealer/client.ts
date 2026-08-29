import { renderWizardDOM } from './modules/wizard-html';
import { updateSetupDOM } from './modules/wizard-renderer';
import { parseInputValue } from './modules/utils';
import { performRoleAssignment } from './modules/dealer-logic';
import { PlayerManager } from './modules/player-manager';
import { CustomRoleManager } from './modules/custom-role-manager';
import { HoldController } from './modules/hold-controller';
import { savePreroundWord, saveWriterWord } from './modules/writer-handler';
import type { Player, ImpostorValues } from './types';

class HiddenRoleDealerApp {
  private container: HTMLElement;
  private playerMgr: PlayerManager;
  private roleMgr: CustomRoleManager;
  private holdCtrl: HoldController;
  private activePreset: string = 'werewolf';
  private currentStep: number = 0;
  private ui: Record<string, string> = {};
  private impostorSecret: string = '';
  private preroundActive: boolean = false;
  private preroundContributors: Player[] = [];
  private preroundStep: number = 0;
  private preroundWords: string[] = [];

  constructor(container: HTMLElement) {
    this.container = container;
    this.ui = JSON.parse(container.getAttribute('data-ui') || '{}');
    this.playerMgr = new PlayerManager();
    this.roleMgr = new CustomRoleManager();
    this.holdCtrl = new HoldController(container, () => this.showScreen('revealed'));
    this.activePreset = localStorage.getItem('hidden-role-dealer-preset') || 'werewolf';
    this.bindEvents();
    this.render();
  }

  private bindEvents(): void {
    const cancel = () => this.holdCtrl.end();
    this.container.addEventListener('click', (e) => this.handleClick(e));
    this.container.addEventListener('keydown', (e) => this.handleKeydown(e));
    this.container.addEventListener('pointerdown', (e) => this.handlePointerdown(e));
    this.container.addEventListener('change', () => this.render());
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => {
      this.container.addEventListener(ev, cancel);
    });
  }

  private handleKeydown(e: KeyboardEvent): void {
    if (e.key !== 'Enter') return;
    const active = document.activeElement;
    if (active === this.container.querySelector('#input-player-name')) this.playerMgr.addFromInput(this.container);
    if (active === this.container.querySelector('#input-role-name')) this.roleMgr.addFromInput(this.container);
    this.render();
  }

  private handlePointerdown(e: PointerEvent): void {
    if ((e.target as HTMLElement).closest('#btn-hold-reveal')) this.holdCtrl.start(e.clientX, e.clientY);
  }

  private handleSetupClick(target: HTMLElement): boolean {
    if (target.closest('#btn-add-player')) {
      this.playerMgr.addFromInput(this.container);
      this.render();
      return true;
    }
    const btnDel = target.closest('.hrd-btn-delete') as HTMLElement;
    if (btnDel) {
      const id = btnDel.getAttribute('data-id');
      if (id) { this.playerMgr.delete(id); this.render(); }
      return true;
    }
    const card = target.closest('.hrd-preset-card') as HTMLElement;
    if (card) {
      const key = card.getAttribute('data-key');
      if (key) {
        this.activePreset = key;
        localStorage.setItem('hidden-role-dealer-preset', key);
        this.render();
      }
      return true;
    }
    return this.handleOtherSetupClick(target);
  }

  private handleOtherSetupClick(target: HTMLElement): boolean {
    if (target.closest('#btn-clear-players')) {
      this.playerMgr.clear();
      this.render();
      return true;
    }
    if (target.closest('#btn-deal-roles')) {
      this.startDealing();
      return true;
    }
    if (target.closest('#btn-add-role')) {
      this.roleMgr.addFromInput(this.container);
      this.render();
      return true;
    }
    const btnDelRole = target.closest('.hrd-btn-delete-role') as HTMLElement;
    if (btnDelRole) {
      const id = btnDelRole.getAttribute('data-id');
      if (id) { this.roleMgr.delete(id); this.render(); }
      return true;
    }
    return false;
  }

  private handleClick(e: Event): void {
    const target = e.target as HTMLElement;
    if (this.handleSetupClick(target)) return;
    if (target.closest('#btn-hide-role')) {
      this.nextStep();
    } else if (target.closest('#btn-restart')) {
      this.resetGame();
    } else if (target.closest('#btn-save-writer-word')) {
      this.handleSaveWriterWord();
    }
  }

  private getImpostorValues(): ImpostorValues {
    const fixedEl = this.container.querySelector('#select-impostor-fixed-count') as HTMLSelectElement;
    const percentEl = this.container.querySelector('#input-impostor-percent') as HTMLInputElement;
    const minEl = this.container.querySelector('#input-impostor-min') as HTMLInputElement;
    const maxEl = this.container.querySelector('#input-impostor-max') as HTMLInputElement;
    return {
      fixedVal: parseInputValue(fixedEl, 1),
      percentVal: parseInputValue(percentEl, 25),
      minVal: parseInputValue(minEl, 1),
      maxVal: parseInputValue(maxEl, 2)
    };
  }

  private getSelectorValue(selector: string, fallback: string): string {
    const el = this.container.querySelector(selector) as HTMLInputElement | HTMLSelectElement;
    return el ? el.value : fallback;
  }

  private startDealing(): void {
    const players = this.playerMgr.getPlayers();
    if (players.length < 3) return;
    this.impostorSecret = '';
    const mode = this.getSelectorValue('#select-impostor-mode', 'fixed');
    const result = performRoleAssignment({
      players,
      activePreset: this.activePreset,
      customRoles: this.roleMgr.getRoles(),
      ui: this.ui,
      vals: this.getImpostorValues(),
      mode,
      writerId: this.getSelectorValue('#select-impostor-writer', 'random'),
      secretInput: this.getSelectorValue('#input-impostor-secret', '')
    });
    this.playerMgr.setPlayers(result.players);
    this.preroundActive = result.preroundActive;
    this.impostorSecret = result.impostorSecret;
    if (this.preroundActive) {
      this.preroundContributors = [...result.players].sort(() => Math.random() - 0.5);
      this.preroundStep = 0;
      this.preroundWords = [];
    }
    this.currentStep = 0;
    this.showScreen('distributing');
  }

  private handleSavePreroundWord(secret: string): void {
    const mode = this.getSelectorValue('#select-impostor-mode', 'fixed');
    const result = savePreroundWord({
      secret,
      preroundWords: this.preroundWords,
      preroundStep: this.preroundStep,
      playerMgr: this.playerMgr,
      vals: this.getImpostorValues(),
      mode,
      ui: this.ui
    });
    this.preroundWords = result.preroundWords;
    this.preroundStep = result.preroundStep;
    this.preroundActive = result.preroundActive;
    this.impostorSecret = result.impostorSecret;
    this.currentStep = 0;
    this.showScreen('distributing');
  }

  private handleSaveWriterWord(): void {
    const input = this.container.querySelector('#input-writer-secret') as HTMLInputElement;
    const secret = input ? input.value : '';
    if (this.preroundActive) {
      this.handleSavePreroundWord(secret);
      return;
    }
    this.impostorSecret = saveWriterWord(secret, this.playerMgr, this.ui);
    this.nextStep();
  }

  private nextStep(): void {
    this.currentStep++;
    const players = this.playerMgr.getPlayers();
    if (this.currentStep >= players.length) {
      this.showScreen('complete');
    } else {
      this.showScreen('distributing');
    }
  }

  private resetGame(): void {
    const players = this.playerMgr.getPlayers();
    players.forEach(p => {
      p.role = null;
      p.revealed = false;
    });
    this.playerMgr.setPlayers(players);
    this.preroundActive = false;
    this.preroundContributors = [];
    this.preroundStep = 0;
    this.preroundWords = [];
    this.showScreen('setup');
  }

  private showScreen(state: 'setup' | 'distributing' | 'revealed' | 'complete'): void {
    const isSetup = state === 'setup';
    (this.container.querySelector('#view-setup') as HTMLElement).style.display = isSetup ? 'block' : 'none';
    (this.container.querySelector('#view-wizard') as HTMLElement).style.display = isSetup ? 'none' : 'block';
    if (isSetup) {
      this.render();
    } else {
      const wizardView = this.container.querySelector('#view-wizard') as HTMLElement;
      if (wizardView) {
        renderWizardDOM({
          state,
          wizardView,
          preroundActive: this.preroundActive,
          preroundContributors: this.preroundContributors,
          preroundStep: this.preroundStep,
          players: this.playerMgr.getPlayers(),
          currentStep: this.currentStep,
          impostorSecret: this.impostorSecret,
          ui: this.ui
        });
      }
    }
  }

  private render(): void {
    updateSetupDOM({
      container: this.container,
      players: this.playerMgr.getPlayers(),
      customRoles: this.roleMgr.getRoles(),
      activePreset: this.activePreset,
      ui: this.ui
    });
  }
}

function init(): void {
  const container = document.querySelector('.hrd-card[data-tool="hidden-role-dealer"]') as HTMLElement;
  if (container) {
    new HiddenRoleDealerApp(container);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
