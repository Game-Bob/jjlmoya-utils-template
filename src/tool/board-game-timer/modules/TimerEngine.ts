import type { TimerState, TimerEngine, TimerConfig } from '../types';
import { createTimerState, addTimerTime, removeTimerTime } from './TimerStateHelper';
import { TimerEngineClock } from './TimerEngineClock';

export class TimerEngineImpl extends TimerEngineClock implements TimerEngine {
  constructor(config?: TimerConfig) {
    super(config);
  }

  public create(id: string, label: string, duration: number) {
    this.timers.set(id, createTimerState(id, label, duration));
  }

  private pauseActiveTimer(active: TimerState) {
    if (active.status !== 'running' && active.status !== 'overtime') {
      return;
    }
    const now = this.getNow();
    const elapsed = (now - (active._lastTickAt ?? now)) / 1000;
    if (active.remaining <= 0) {
      active.overtime = +(active.overtime + elapsed).toFixed(3);
    } else {
      active.remaining = Math.max(0, +(active.remaining - elapsed).toFixed(3));
    }
    active._lastTickAt = 0;
    active.status = 'paused';
    if (this.currentMode === 'fischer') {
      active.remaining = +(active.remaining + this.currentIncrement).toFixed(3);
    }
  }

  public start(id: string) {
    const t = this.timers.get(id);
    if (!t || !this.canStart(t)) return;
    this.switchActiveTimer(id);
    this.setupTurnRemaining(t);
    t._lastTickAt = this.getNow();
    t.status = 'running';
    this.activeId = id;
    this.delayRemaining = this.currentDelay;
    this.startClock();
  }

  private canStart(t: TimerState): boolean {
    return t.status === 'idle' || t.status === 'paused';
  }

  private switchActiveTimer(id: string) {
    if (this.activeId && this.activeId !== id) {
      const active = this.timers.get(this.activeId);
      if (active) this.pauseActiveTimer(active);
    }
  }

  private setupTurnRemaining(t: TimerState) {
    if (this.currentMode === 'turn' && t.status === 'idle') {
      t.remaining = t.initialDuration;
    }
  }

  public pause(id: string) {
    const t = this.timers.get(id);
    if (!t || (t.status !== 'running' && t.status !== 'overtime')) {
      return;
    }
    if (this.activeId === id) {
      this.pauseActiveTimer(t);
      this.activeId = undefined;
      this.stopClock();
    } else {
      t.status = 'paused';
    }
  }

  public resume(id: string) {
    const t = this.timers.get(id);
    if (t && t.status === 'paused') {
      this.start(id);
    }
  }

  public reset(id: string) {
    const t = this.timers.get(id);
    if (!t) return;
    const wasActive = (t.status === 'running' || t.status === 'overtime') && this.activeId === id;
    t.remaining = t.initialDuration;
    t.overtime = 0;
    t.roundsPlayed = 0;
    t.status = 'idle';
    t._lastTickAt = 0;
    if (wasActive) {
      this.activeId = undefined;
      this.stopClock();
    }
  }

  public addTime(id: string, seconds: number) {
    const t = this.timers.get(id);
    if (t) {
      addTimerTime(t, seconds);
    }
  }

  public removeTime(id: string, seconds: number) {
    const t = this.timers.get(id);
    if (t) {
      removeTimerTime(t, seconds, () => this.notifyExpired(id));
    }
  }

  public switchTurn(nextId: string) {
    if (this.activeId) {
      const current = this.timers.get(this.activeId);
      if (current) this.pauseActiveTimer(current);
    }
    const next = this.timers.get(nextId);
    if (!next || next.status === 'expired') {
      return;
    }
    if (next.status === 'idle' || next.status === 'paused') {
      this.startNextPlayer(next);
    }
  }

  private startNextPlayer(next: TimerState) {
    if (this.currentMode === 'turn') {
      next.remaining = next.initialDuration;
    }
    next._lastTickAt = this.getNow();
    next.status = 'running';
    next.roundsPlayed += 1;
    this.activeId = next.id;
    this.delayRemaining = this.currentDelay;
    this.startClock();
  }

  public switchToNextPlayer(playerIds: string[], currentIndex: number) {
    const nextIndex = (currentIndex + 1) % playerIds.length;
    const nextId = playerIds[nextIndex]!;
    return { nextId, nextIndex };
  }

  public pauseAll() {
    if (this.activeId) {
      const active = this.timers.get(this.activeId);
      if (active) this.pauseActiveTimer(active);
    }
    this.stopClock();
    this.activeId = undefined;
  }

  public resumeAll(playerIds: string[], activeIndex: number) {
    const id = playerIds[activeIndex];
    if (id) this.resume(id);
  }

  public destroyTimer(id: string) {
    const t = this.timers.get(id);
    if (!t) return;
    if (this.activeId === id) {
      this.activeId = undefined;
      this.stopClock();
    }
    this.timers.delete(id);
  }

  public destroy() {
    this.stopClock();
    this.timers.clear();
    this.expiredCallbacks = [];
    this.tickCallbacks = [];
    this.warningCallbacks = [];
    this.activeId = undefined;
  }
}
