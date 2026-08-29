import type { TimerState, TimerEventCallback, TimeControlMode } from '../types';

export class TimerEngineBase {
  protected timers = new Map<string, TimerState>();
  protected expiredCallbacks: TimerEventCallback[] = [];
  protected tickCallbacks: TimerEventCallback[] = [];
  protected warningCallbacks: TimerEventCallback[] = [];
  protected activeId: string | undefined;

  protected currentMode: TimeControlMode = 'normal';
  protected currentIncrement = 0;
  protected currentDelay = 0;

  public getTimer(id: string) {
    return this.timers.get(id);
  }

  public getAllTimers() {
    return Array.from(this.timers.values());
  }

  public onExpired(cb: TimerEventCallback) {
    this.expiredCallbacks.push(cb);
  }

  public onTick(cb: TimerEventCallback) {
    this.tickCallbacks.push(cb);
  }

  public onWarning(cb: TimerEventCallback) {
    this.warningCallbacks.push(cb);
  }

  public setMode(mode: TimeControlMode) {
    this.currentMode = mode;
  }

  public setIncrement(seconds: number) {
    this.currentIncrement = seconds;
  }

  public setDelay(seconds: number) {
    this.currentDelay = seconds;
  }

  public get activeTimerId() {
    return this.activeId;
  }
}
