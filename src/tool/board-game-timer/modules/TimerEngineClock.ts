import type { TimerState, TimerConfig } from '../types';
import { TimerEngineBase } from './TimerEngineBase';

export class TimerEngineClock extends TimerEngineBase {
  protected intervalId: ReturnType<typeof setInterval> | undefined;
  protected lastWarningId: string | undefined;
  protected delayRemaining = 0;
  protected config: TimerConfig | undefined;

  constructor(config?: TimerConfig) {
    super();
    this.config = config;
    this.currentMode = config?.mode ?? 'normal';
    this.currentIncrement = config?.increment ?? 0;
    this.currentDelay = config?.delay ?? 0;
  }

  protected getNow(): number {
    return Date.now();
  }

  protected notifyTick(id: string) {
    const t = this.timers.get(id);
    if (!t) return;
    this.tickCallbacks.forEach(cb => cb(id, t.remaining));
    this.checkWarning(t);
  }

  private checkWarning(t: TimerState) {
    const limit = this.config?.warningTime ?? 30;
    if (t.remaining > limit) {
      this.resetWarning(t.id);
      return;
    }
    if (t.status === 'running' && t.remaining > 0 && this.lastWarningId !== t.id) {
      this.triggerWarning(t);
    }
  }

  private resetWarning(id: string) {
    if (this.lastWarningId === id) {
      this.lastWarningId = undefined;
    }
  }

  private triggerWarning(t: TimerState) {
    this.lastWarningId = t.id;
    this.warningCallbacks.forEach(cb => cb(t.id, t.remaining));
  }

  protected notifyExpired(id: string) {
    const t = this.timers.get(id);
    if (t) {
      this.expiredCallbacks.forEach(cb => cb(id, t.remaining));
    }
  }

  protected processTick() {
    if (!this.activeId) return;
    const t = this.timers.get(this.activeId);
    if (!t) return;
    const now = this.getNow();
    const elapsed = (now - (t._lastTickAt ?? now)) / 1000;
    t._lastTickAt = now;
    if (t.status === 'running') {
      this.tickRunning(t, elapsed);
    } else if (t.status === 'overtime') {
      this.tickOvertime(t, elapsed);
    }
  }

  private tickRunning(t: TimerState, elapsed: number) {
    if (this.delayRemaining > 0) {
      this.delayRemaining = Math.max(0, this.delayRemaining - elapsed);
      t._lastTickAt = this.getNow();
      this.notifyTick(t.id);
      return;
    }
    if (elapsed >= t.remaining) {
      this.handleExpiration(t, elapsed);
    } else {
      this.handleCountdown(t, elapsed);
    }
  }

  private handleExpiration(t: TimerState, elapsed: number) {
    t.overtime += elapsed - t.remaining;
    t.remaining = 0;
    t.status = 'overtime';
    this.notifyTick(t.id);
    this.notifyExpired(t.id);
  }

  private handleCountdown(t: TimerState, elapsed: number) {
    t.remaining = Math.max(0, +(t.remaining - elapsed).toFixed(3));
    this.notifyTick(t.id);
    if (this.currentMode === 'hourglass') {
      this.applyHourglass(elapsed);
    }
  }

  private applyHourglass(elapsed: number) {
    this.timers.forEach((other, id) => {
      if (id !== this.activeId && other.status !== 'expired') {
        other.remaining = +(other.remaining + elapsed).toFixed(3);
        this.notifyTick(id);
      }
    });
  }

  private tickOvertime(t: TimerState, elapsed: number) {
    t.overtime = +(t.overtime + elapsed).toFixed(3);
    this.notifyTick(t.id);
  }

  protected startClock() {
    this.stopClock();
    this.intervalId = setInterval(() => this.processTick(), this.config?.tickInterval ?? 100);
  }

  protected stopClock() {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
