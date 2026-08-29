import type { GameState } from './GameState';
import { DuelViewManager } from './DuelViewManager';
import { MultiplayerViewManager } from './MultiplayerViewManager';
import { StatsModalManager } from './StatsModalManager';
import { spawnConfetti } from './particles';

export class GameRunner {
  private state: GameState;
  private setupPanel: HTMLElement;
  private duelPanel: HTMLElement;
  private multiPanel: HTMLElement;
  private duelView: DuelViewManager;
  private multiView: MultiplayerViewManager;
  private statsModalManager: StatsModalManager;

  constructor(state: GameState) {
    this.state = state;
    this.setupPanel = document.getElementById('setup-panel') as HTMLElement;
    this.duelPanel = document.getElementById('duel-timer-panel') as HTMLElement;
    this.multiPanel = document.getElementById('multiplayer-timer-panel') as HTMLElement;
    this.duelView = new DuelViewManager(state);
    this.multiView = new MultiplayerViewManager(state);
    this.statsModalManager = new StatsModalManager(state, () => {
      this.duelPanel.style.display = 'none';
      this.multiPanel.style.display = 'none';
      this.setupPanel.style.display = 'flex';
    });
    this.initEvents();
  }

  public startGame(baseDuration: number) {
    this.state.players.forEach(p => {
      this.state.engine.create(p.id, p.name, baseDuration);
    });
    this.setupPanel.style.display = 'none';
    this.state.isPaused = false;
    this.state.roundNumber = 1;
    this.state.activePlayerIndex = 0;
    this.state.stats.start();
    this.bindCallbacks();
    if (this.state.players.length === 2) {
      this.state.activeMode = 'duel';
      this.duelView.initView();
    } else {
      this.state.activeMode = 'multi';
      this.multiView.initView();
    }
    const firstPlayer = this.state.players[0]!;
    this.state.engine.start(firstPlayer.id);
    this.state.stats.startTurn();
  }

  private initEvents() {
    this.initDuelButtons();
    this.initMultiButtons();
  }

  private initDuelButtons() {
    document.getElementById('duel-pause-btn')?.addEventListener('click', () => this.pauseGame('duel'));
    document.getElementById('duel-resume-btn')?.addEventListener('click', () => this.resumeGame('duel'));
    document.getElementById('duel-reset-btn')?.addEventListener('click', () => this.resetToSetup(this.duelPanel));
    document.getElementById('duel-back-btn')?.addEventListener('click', () => this.resetToSetup(this.duelPanel));
  }

  private initMultiButtons() {
    document.getElementById('multi-pause-btn')?.addEventListener('click', () => this.pauseGame('multi'));
    document.getElementById('multi-resume-btn')?.addEventListener('click', () => this.resumeGame('multi'));
    document.getElementById('multi-reset-btn')?.addEventListener('click', () => this.resetToSetup(this.multiPanel));
    document.getElementById('multi-back-btn')?.addEventListener('click', () => this.resetToSetup(this.multiPanel));
  }

  private pauseGame(mode: 'duel' | 'multi') {
    this.state.isPaused = true;
    this.state.engine.pauseAll();
    this.state.stats.pauseTurn();
    document.getElementById(`${mode}-paused-overlay`)!.style.display = 'flex';
  }

  private resumeGame(mode: 'duel' | 'multi') {
    this.state.isPaused = false;
    this.state.stats.resumeTurn();
    this.state.engine.resumeAll(this.state.players.map(p => p.id), this.state.activePlayerIndex);
    document.getElementById(`${mode}-paused-overlay`)!.style.display = 'none';
  }

  private resetToSetup(panel: HTMLElement) {
    this.state.engine.destroy();
    panel.style.display = 'none';
    this.setupPanel.style.display = 'flex';
  }

  private handleExpired(id: string) {
    this.state.sound.playTimeUp();
    this.state.stats.end();
    if (this.state.activeMode === 'duel') {
      this.duelView.triggerExpired(id);
    } else {
      this.multiView.triggerExpired(id);
    }
    const panel = this.state.activeMode === 'duel' ? this.duelPanel : this.multiPanel;
    spawnConfetti(panel, 30);
    setTimeout(() => this.statsModalManager.show(this.state.roundNumber), 1200);
  }

  private bindCallbacks() {
    this.state.engine.onTick((id) => {
      if (this.state.activeMode === 'duel') {
        this.duelView.update();
      } else {
        this.multiView.update();
      }
      this.checkAudioTriggers(id);
    });
    this.state.engine.onWarning((id) => {
      if (this.state.activeMode === 'duel') {
        this.duelView.triggerWarning(id);
      } else {
        this.multiView.triggerWarning(id);
      }
    });
    this.state.engine.onExpired((id) => this.handleExpired(id));
  }

  private checkAudioTriggers(id: string) {
    const t = this.state.engine.getTimer(id);
    if (!t) return;
    if (Math.floor(t.remaining) === 5 && t.remaining > 4.8) {
      this.state.sound.playWarning();
    } else if (Math.floor(t.remaining) <= 5 && t.remaining > 0) {
      const exactSec = Math.ceil(t.remaining);
      if (exactSec > 0) {
        this.state.sound.playTick();
      }
    }
  }
}
