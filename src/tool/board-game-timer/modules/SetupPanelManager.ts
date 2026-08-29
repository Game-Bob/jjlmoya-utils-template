import type { GameState } from './GameState';
import type { TimeControlMode, PlayerColor, PlayerConfig } from '../types';

export class SetupPanelManager {
  private state: GameState;
  private onStart: () => void;

  private minsInput: HTMLInputElement;
  private secsInput: HTMLInputElement;
  private modeSelect: HTMLSelectElement;
  private incrementInput: HTMLInputElement;
  private warningInput: HTMLInputElement;
  private soundToggle: HTMLInputElement;
  private nameInput: HTMLInputElement;
  private listContainer: HTMLElement;
  private hintEl: HTMLElement;
  private countBadge: HTMLElement;
  private startBtn: HTMLButtonElement;

  constructor(state: GameState, onStart: () => void) {
    this.state = state;
    this.onStart = onStart;

    this.minsInput = document.getElementById('setting-mins') as HTMLInputElement;
    this.secsInput = document.getElementById('setting-secs') as HTMLInputElement;
    this.modeSelect = document.getElementById('setting-mode') as HTMLSelectElement;
    this.incrementInput = document.getElementById('setting-increment') as HTMLInputElement;
    this.warningInput = document.getElementById('setting-warning') as HTMLInputElement;
    this.soundToggle = document.getElementById('toggle-sound') as HTMLInputElement;
    this.nameInput = document.getElementById('new-player-name') as HTMLInputElement;
    this.listContainer = document.getElementById('player-list-container') as HTMLElement;
    this.hintEl = document.getElementById('empty-players-hint') as HTMLElement;
    this.countBadge = document.getElementById('player-count') as HTMLElement;
    this.startBtn = document.getElementById('start-game-btn') as HTMLButtonElement;

    this.initEvents();
    this.render();
  }

  private initEvents() {
    this.modeSelect.addEventListener('change', () => this.updateIncrementVisibility());
    this.updateIncrementVisibility();
    this.initPresets();
    this.initAdjusters();
    this.initColorPicker();
    this.initPlayerActions();
  }

  private updateIncrementVisibility() {
    const val = this.modeSelect.value;
    const targets = document.querySelectorAll('.active-fischer, .active-bronstein');
    targets.forEach(t => {
      (t as HTMLElement).style.display = (val === 'fischer' || val === 'bronstein') ? 'flex' : 'none';
    });
  }

  private initPresets() {
    const presets = document.querySelectorAll('.preset-card');
    presets.forEach(preset => {
      preset.addEventListener('click', () => {
        presets.forEach(p => p.classList.remove('active'));
        preset.classList.add('active');
        this.applyPreset(preset);
      });
    });
  }

  private applyPreset(preset: Element) {
    const presetId = preset.getAttribute('data-preset');
    if (presetId === 'custom') return;
    const mode = preset.getAttribute('data-mode') || 'normal';
    const time = parseInt(preset.getAttribute('data-time') || '120');
    const inc = parseInt(preset.getAttribute('data-increment') || '0');

    this.modeSelect.value = mode;
    this.minsInput.value = Math.floor(time / 60).toString();
    this.secsInput.value = (time % 60).toString();
    this.incrementInput.value = inc.toString();
    this.updateIncrementVisibility();
  }

  private initAdjusters() {
    document.querySelector('.dec-min')?.addEventListener('click', () => this.adjustMins(-1));
    document.querySelector('.inc-min')?.addEventListener('click', () => this.adjustMins(1));
    document.querySelector('.dec-sec')?.addEventListener('click', () => this.adjustSecs(-5));
    document.querySelector('.inc-sec')?.addEventListener('click', () => this.adjustSecs(5));
  }

  private adjustMins(diff: number) {
    const val = Math.max(0, Math.min(99, (parseInt(this.minsInput.value) || 0) + diff));
    this.minsInput.value = val.toString();
  }

  private adjustSecs(diff: number) {
    const val = Math.max(0, Math.min(59, (parseInt(this.secsInput.value) || 0) + diff));
    this.secsInput.value = val.toString();
  }

  private initColorPicker() {
    const dots = document.querySelectorAll('.color-dot');
    dots.forEach(dot => {
      if (dot.getAttribute('data-color') === this.state.selectedColor) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.state.selectedColor = dot.getAttribute('data-color') as PlayerColor;
      });
    });
  }

  private initPlayerActions() {
    const addBtn = document.getElementById('add-player-btn');
    addBtn?.addEventListener('click', () => this.addPlayer());
    this.nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.addPlayer();
    });
    this.startBtn.addEventListener('click', () => {
      this.state.sound.setEnabled(this.soundToggle.checked);
      this.state.recreateEngine({
        mode: this.modeSelect.value as TimeControlMode,
        increment: parseInt(this.incrementInput.value) || 0,
        delay: parseInt(this.incrementInput.value) || 0,
        warningTime: parseInt(this.warningInput.value) || 30
      });
      this.onStart();
    });
  }

  public getBaseDuration(): number {
    const mins = parseInt(this.minsInput.value) || 0;
    const secs = parseInt(this.secsInput.value) || 0;
    return Math.max(1, mins * 60 + secs);
  }

  private addPlayer() {
    const name = this.nameInput.value.trim();
    if (!name) return;
    this.state.players.push({
      id: `p-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name,
      color: this.state.selectedColor,
      time: this.getBaseDuration()
    });
    this.nameInput.value = '';
    this.state.savePlayers();
    this.render();
  }

  public render() {
    this.listContainer.innerHTML = '';
    const hasPlayers = this.state.players.length > 0;
    this.hintEl.style.display = hasPlayers ? 'none' : 'flex';
    this.countBadge.textContent = this.state.players.length.toString();
    this.startBtn.disabled = this.state.players.length < 2;

    this.state.players.forEach((p, idx) => {
      const row = this.createPlayerRow(p, idx);
      this.listContainer.appendChild(row);
    });
  }

  private createPlayerRow(p: PlayerConfig, idx: number): HTMLElement {
    const row = document.createElement('div');
    row.className = 'player-row';
    row.innerHTML = `
      <div class="player-info-meta">
        <div class="player-badge-color" style="background-color: var(--color-${p.color}, ${p.color})"></div>
        <span class="player-row-name">${p.name}</span>
      </div>
      <div class="player-row-actions">
        <button type="button" class="btn-action order-up" data-index="${idx}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
        <button type="button" class="btn-action order-down" data-index="${idx}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <button type="button" class="btn-action danger delete-player" data-index="${idx}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `;
    this.bindRowEvents(row, idx);
    return row;
  }

  private bindRowEvents(row: HTMLElement, idx: number) {
    row.querySelector('.delete-player')?.addEventListener('click', () => {
      this.state.players.splice(idx, 1);
      this.state.savePlayers();
      this.render();
    });
    row.querySelector('.order-up')?.addEventListener('click', () => {
      if (idx > 0) this.swapPlayers(idx, idx - 1);
    });
    row.querySelector('.order-down')?.addEventListener('click', () => {
      if (idx < this.state.players.length - 1) this.swapPlayers(idx, idx + 1);
    });
  }

  private swapPlayers(i: number, j: number) {
    const temp = this.state.players[i];
    this.state.players[i] = this.state.players[j];
    this.state.players[j] = temp;
    this.state.savePlayers();
    this.render();
  }
}
