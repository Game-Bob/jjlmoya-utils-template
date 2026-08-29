import type { GameState } from './GameState';
import type { PlayerConfig } from '../types';

import { formatTime, formatFullTime } from './FormatHelper';
import { spawnConfetti } from './particles';

export class StatsModalManager {
  private state: GameState;
  private statsModal: HTMLElement;
  private onRestart: () => void;

  constructor(state: GameState, onRestart: () => void) {
    this.state = state;
    this.onRestart = onRestart;
    this.statsModal = document.getElementById('stats-modal') as HTMLElement;
    this.initEvents();
  }

  private initEvents() {
    document.getElementById('stats-close-btn')?.addEventListener('click', () => {
      this.statsModal.style.display = 'none';
    });
    document.getElementById('stats-restart-btn')?.addEventListener('click', () => {
      this.statsModal.style.display = 'none';
      this.onRestart();
    });
  }

  public show(roundNumber: number) {
    this.state.engine.pauseAll();
    this.state.stats.end();
    this.statsModal.style.display = 'flex';

    document.getElementById('stats-total-time')!.textContent = formatFullTime(this.state.stats.getTotalElapsedTime());
    document.getElementById('stats-total-rounds')!.textContent = roundNumber.toString();

    const slowestId = this.state.stats.getSlowestPlayerId(this.state.players.map(p => p.id));
    const slowestPlayer = this.state.players.find(p => p.id === slowestId);
    document.getElementById('stats-slowest-player')!.textContent = slowestPlayer ? slowestPlayer.name : '-';

    this.renderRankingList();

    const statsCard = this.statsModal.querySelector('.stats-modal-card') as HTMLElement;
    if (statsCard) spawnConfetti(statsCard, 60);
  }

  private renderRankingList() {
    const ranking = this.state.stats.getRanking(this.state.players.map(p => p.id));
    const container = document.getElementById('stats-players-ranking') as HTMLElement;
    container.innerHTML = '';

    const maxAvg = Math.max(...ranking.map(r => r.average), 1);
    ranking.forEach(r => {
      const p = this.state.players.find(x => x.id === r.id);
      if (p) this.appendRankingRow(container, p, r, maxAvg);
    });
  }

  private appendRankingRow(container: HTMLElement, p: PlayerConfig, r: { id: string; average: number; max: number }, maxAvg: number) {
    const pct = (r.average / maxAvg) * 100;
    const row = document.createElement('div');
    row.className = 'ranking-row';
    row.innerHTML = `
      <div class="ranking-info">
        <span style="color: var(--color-text-${p.color})">${p.name}</span>
        <span>Avg: ${formatTime(r.average)} (Max: ${formatTime(r.max)})</span>
      </div>
      <div class="ranking-bar-outer">
        <div class="ranking-bar-inner" style="width: ${pct}%; background-color: var(--color-${p.color})"></div>
      </div>
    `;
    container.appendChild(row);
  }
}
