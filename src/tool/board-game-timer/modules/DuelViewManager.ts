import type { GameState } from './GameState';
import { getContrastColorForBackground } from './ColorHelper';
import { formatTime } from './FormatHelper';
import { spawnTurnBurst, spawnExpiredBurst, spawnRippleEffect, spawnDigitSparkle, spawnWarningFlash } from './particles';

export class DuelViewManager {
  private state: GameState;
  private duelPanel: HTMLElement;

  constructor(state: GameState) {
    this.state = state;
    this.duelPanel = document.getElementById('duel-timer-panel') as HTMLElement;
    this.initEvents();
  }

  private initEvents() {
    const rotateBtns = document.querySelectorAll('.side-rotate-btn');
    rotateBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.closest('.duel-player-side')?.classList.toggle('rotated');
      });
    });
    document.getElementById('duel-p1')?.addEventListener('click', () => this.handleDuelClick(0, 1));
    document.getElementById('duel-p2')?.addEventListener('click', () => this.handleDuelClick(1, 0));
  }

  private handleDuelClick(currIdx: number, nextIdx: number) {
    if (this.state.isPaused) return;
    if (this.state.engine.activeTimerId === this.state.players[currIdx].id) {
      this.state.sound.playTurn();
      this.state.stats.endTurn(this.state.players[currIdx].id, this.state.roundNumber);
      this.state.engine.switchTurn(this.state.players[nextIdx].id);
      if (currIdx === 1) {
        this.state.roundNumber++;
        document.getElementById('duel-round-number')!.textContent = this.state.roundNumber.toString();
      }
      this.state.stats.startTurn();
      this.update();

      const nextSide = document.getElementById(`duel-p${nextIdx + 1}`) as HTMLElement;
      if (nextSide) {
        spawnTurnBurst(nextSide, `var(--color-${this.state.players[nextIdx].color})`);
        spawnRippleEffect(nextSide.querySelector('.duel-ripple-effect') || nextSide);
      }
    }
  }

  public initView() {
    this.duelPanel.style.display = 'grid';
    const p1 = this.state.players[0]!;
    const p2 = this.state.players[1]!;
    const d1 = document.getElementById('duel-p1') as HTMLElement;
    const d2 = document.getElementById('duel-p2') as HTMLElement;
    d1.setAttribute('data-player-id', p1.id);
    d2.setAttribute('data-player-id', p2.id);
    d1.style.background = `var(--color-${p1.color})`;
    d1.style.color = getContrastColorForBackground(p1.color);
    d2.style.background = `var(--color-${p2.color})`;
    d2.style.color = getContrastColorForBackground(p2.color);
    document.getElementById('duel-p1-name')!.textContent = p1.name;
    document.getElementById('duel-p2-name')!.textContent = p2.name;
    document.getElementById('duel-round-number')!.textContent = '1';
    document.getElementById('duel-paused-overlay')!.style.display = 'none';
    d1.classList.remove('rotated');
    d2.classList.remove('rotated');
    this.update();
  }

  private updateSide(p: { id: string }, t: { remaining: number; status: string; roundsPlayed: number }, els: { side: HTMLElement; time: HTMLElement; status: HTMLElement }) {
    const prev = els.time.textContent;
    els.time.textContent = formatTime(t.remaining);
    if (prev !== els.time.textContent) spawnDigitSparkle(els.time);

    const rotated = els.side.classList.contains('rotated');
    els.side.className = `duel-player-side ${t.status}`;
    if (rotated) els.side.classList.add('rotated');
    if (this.state.engine.activeTimerId === p.id) els.side.classList.add('active');

    els.status.textContent = t.status.toUpperCase();
    els.status.className = 'side-status-badge';
    if (t.status === 'overtime') {
      els.status.classList.add('warning');
      spawnExpiredBurst(els.side);
    }
  }

  public update() {
    const p1 = this.state.players[0]!;
    const p2 = this.state.players[1]!;
    const t1 = this.state.engine.getTimer(p1.id);
    const t2 = this.state.engine.getTimer(p2.id);
    if (!t1 || !t2) return;

    const d1 = document.getElementById('duel-p1') as HTMLElement;
    const d2 = document.getElementById('duel-p2') as HTMLElement;

    document.getElementById('duel-p1-rounds')!.textContent = `Turns: ${t1.roundsPlayed}`;
    document.getElementById('duel-p2-rounds')!.textContent = `Turns: ${t2.roundsPlayed}`;

    this.updateSide(p1, t1, { side: d1, time: document.getElementById('duel-p1-timer') as HTMLElement, status: document.getElementById('duel-p1-status') as HTMLElement });
    this.updateSide(p2, t2, { side: d2, time: document.getElementById('duel-p2-timer') as HTMLElement, status: document.getElementById('duel-p2-status') as HTMLElement });
  }

  public triggerWarning(playerId: string) {
    if (this.state.players[0]?.id === playerId) {
      spawnWarningFlash(document.getElementById('duel-p1') as HTMLElement);
    } else if (this.state.players[1]?.id === playerId) {
      spawnWarningFlash(document.getElementById('duel-p2') as HTMLElement);
    }
  }

  public triggerExpired(playerId: string) {
    if (this.state.players[0]?.id === playerId) {
      spawnExpiredBurst(document.getElementById('duel-p1') as HTMLElement);
    } else if (this.state.players[1]?.id === playerId) {
      spawnExpiredBurst(document.getElementById('duel-p2') as HTMLElement);
    }
  }
}
