import type { TimerState } from '../types';

export function createTimerState(id: string, label: string, duration: number): TimerState {
  return {
    id,
    label,
    initialDuration: duration,
    remaining: duration,
    status: 'idle',
    _lastTickAt: 0,
    roundsPlayed: 0,
    overtime: 0,
  };
}

export function addTimerTime(t: TimerState, seconds: number) {
  if (t.status === 'overtime') {
    const remainingOvertime = t.overtime - seconds;
    if (remainingOvertime <= 0) {
      t.remaining = Math.abs(remainingOvertime);
      t.overtime = 0;
      t.status = 'paused';
    } else {
      t.overtime = +remainingOvertime.toFixed(3);
    }
  } else {
    t.remaining = Math.max(0, +(t.remaining + seconds).toFixed(3));
    if (t.status === 'expired' && t.remaining > 0) {
      t.status = 'paused';
    }
  }
}

export function removeTimerTime(t: TimerState, seconds: number, notifyExpired: () => void) {
  if (t.status === 'overtime') {
    t.overtime = +(t.overtime + seconds).toFixed(3);
  } else if (t.status === 'running') {
    if (seconds >= t.remaining) {
      t.overtime = +(seconds - t.remaining + (t.overtime || 0)).toFixed(3);
      t.remaining = 0;
      t.status = 'overtime';
      notifyExpired();
    } else {
      t.remaining = Math.max(0, +(t.remaining - seconds).toFixed(3));
    }
  } else {
    if (seconds >= t.remaining) {
      t.remaining = 0;
      t.status = 'expired';
      notifyExpired();
    } else {
      t.remaining = Math.max(0, +(t.remaining - seconds).toFixed(3));
    }
  }
}
