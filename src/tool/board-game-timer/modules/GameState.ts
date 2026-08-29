import type { PlayerConfig, PlayerColor, TimeControlMode } from '../types';
import { SoundManager } from './SoundManager';
import { StatsManager } from './StatsManager';
import { createTimerEngine } from '../logic';

export class GameState {
  public ui: Record<string, string> = {};
  public sound = new SoundManager();
  public stats = new StatsManager();
  public engine = createTimerEngine();
  public players: PlayerConfig[] = [];
  public selectedColor: PlayerColor = 'blue';
  public activePlayerIndex = 0;
  public isPaused = false;
  public roundNumber = 1;
  public activeMode: 'duel' | 'multi' = 'multi';

  constructor() {
    const el = document.querySelector('.timer-main-wrapper');
    if (el) {
      try {
        this.ui = JSON.parse(el.getAttribute('data-ui') || '{}');
      } catch {}
    }
    try {
      const saved = localStorage.getItem('board-game-timer-players');
      if (saved) {
        this.players = JSON.parse(saved);
      }
    } catch {}
  }

  public savePlayers() {
    try {
      localStorage.setItem('board-game-timer-players', JSON.stringify(this.players));
    } catch {}
  }

  public recreateEngine(options: { mode: TimeControlMode; increment: number; delay: number; warningTime: number }) {
    this.engine = createTimerEngine({
      tickInterval: 100,
      mode: options.mode,
      increment: options.increment,
      delay: options.delay,
      warningTime: options.warningTime
    });
  }
}
