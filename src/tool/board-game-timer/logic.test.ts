import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createTimerEngine } from './logic';

describe('BoardGameTimerEngine', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('single timer', () => {
    it('creates a timer with correct initial state', () => {
      const engine = createTimerEngine();
      engine.create('player-1', 'Player 1', 60);

      const timer = engine.getTimer('player-1');
      expect(timer).toBeDefined();
      expect(timer!.id).toBe('player-1');
      expect(timer!.label).toBe('Player 1');
      expect(timer!.initialDuration).toBe(60);
      expect(timer!.remaining).toBe(60);
      expect(timer!.status).toBe('idle');
      expect(timer!.roundsPlayed).toBe(0);
      expect(timer!.overtime).toBe(0);
    });

    it('starts a timer and sets status to running', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      const timer = engine.getTimer('p1');
      expect(timer!.status).toBe('running');
      expect(engine.activeTimerId).toBe('p1');
    });

    it('pauses a running timer without losing remaining time', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      vi.advanceTimersByTime(1000);

      engine.pause('p1');

      const timer = engine.getTimer('p1');
      expect(timer!.status).toBe('paused');
      expect(timer!.remaining).toBeLessThan(60);
      expect(timer!.remaining).toBeGreaterThan(58);
      expect(engine.activeTimerId).toBeUndefined();
    });

    it('resumes a paused timer', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      vi.advanceTimersByTime(1000);

      engine.pause('p1');
      engine.resume('p1');
      expect(engine.getTimer('p1')!.status).toBe('running');
      expect(engine.activeTimerId).toBe('p1');
    });

    it('resets a timer to initial duration', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      vi.advanceTimersByTime(2000);

      engine.reset('p1');
      const timer = engine.getTimer('p1');
      expect(timer!.remaining).toBe(60);
      expect(timer!.status).toBe('idle');
      expect(engine.activeTimerId).toBeUndefined();
    });

    it('calls expired callback when timer reaches zero', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      const onExpired = vi.fn();
      engine.onExpired(onExpired);

      engine.create('p1', 'P1', 0.5);
      engine.start('p1');

      vi.advanceTimersByTime(1000);

      expect(onExpired).toHaveBeenCalledWith('p1', 0);
      const timer = engine.getTimer('p1');
      expect(timer!.remaining).toBe(0);
    });

    it('adds time to a timer', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.addTime('p1', 30);

      expect(engine.getTimer('p1')!.remaining).toBe(90);
    });

    it('removes time from a timer', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.removeTime('p1', 10);

      expect(engine.getTimer('p1')!.remaining).toBe(50);
    });
  });

  describe('overtime', () => {
    it('transitions to overtime when time runs out while running', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      engine.create('p1', 'P1', 0.5);
      engine.start('p1');

      vi.advanceTimersByTime(1000);

      const timer = engine.getTimer('p1');
      expect(timer!.status).toBe('overtime');
      expect(timer!.remaining).toBe(0);
      expect(timer!.overtime).toBeGreaterThan(0);
    });

    it('addTime can recover from overtime back to positive', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      engine.create('p1', 'P1', 0.3);
      engine.start('p1');

      vi.advanceTimersByTime(1000);

      let timer = engine.getTimer('p1');
      expect(timer!.status).toBe('overtime');

      const overtimeUsed = timer!.overtime;
      engine.addTime('p1', Math.ceil(overtimeUsed) + 10);

      timer = engine.getTimer('p1');
      expect(timer!.status).toBe('paused');
      expect(timer!.remaining).toBeGreaterThan(0);
      expect(timer!.overtime).toBe(0);
    });

    it('removeTime from running can push into overtime', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 10);
      engine.start('p1');
      engine.removeTime('p1', 15);

      const timer = engine.getTimer('p1');
      expect(timer!.status).toBe('overtime');
      expect(timer!.remaining).toBe(0);
      expect(timer!.overtime).toBeGreaterThan(0);
    });
  });

  describe('multi-player turn management', () => {
    it('starts a timer and pauses the previous active timer on switchTurn', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      engine.create('p1', 'P1', 60);
      engine.create('p2', 'P2', 60);

      engine.start('p1');
      vi.advanceTimersByTime(500);

      engine.switchTurn('p2');

      expect(engine.getTimer('p1')!.status).toBe('paused');
      expect(engine.getTimer('p2')!.status).toBe('running');
      expect(engine.activeTimerId).toBe('p2');
    });

    it('increments roundsPlayed on switchTurn', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.create('p2', 'P2', 60);

      engine.start('p1');
      engine.switchTurn('p2');
      engine.switchTurn('p1');
      engine.switchTurn('p2');

      expect(engine.getTimer('p1')!.roundsPlayed).toBe(1);
      expect(engine.getTimer('p2')!.roundsPlayed).toBe(2);
    });

    it('does not switch to an expired player', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.create('p2', 'P2', 10);

      engine.removeTime('p2', 15);
      expect(engine.getTimer('p2')!.status).toBe('expired');

      engine.switchTurn('p2');
      expect(engine.getTimer('p2')!.status).toBe('expired');
    });

    it('lists all timers', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.create('p2', 'P2', 120);
      engine.create('p3', 'P3', 90);

      const all = engine.getAllTimers();
      expect(all).toHaveLength(3);
    });

    it('switchToNextPlayer cycles through player IDs', () => {
      const engine = createTimerEngine();
      const ids = ['p1', 'p2', 'p3'];

      const result1 = engine.switchToNextPlayer(ids, 0);
      expect(result1.nextId).toBe('p2');
      expect(result1.nextIndex).toBe(1);

      const result2 = engine.switchToNextPlayer(ids, 1);
      expect(result2.nextId).toBe('p3');
      expect(result2.nextIndex).toBe(2);

      const result3 = engine.switchToNextPlayer(ids, 2);
      expect(result3.nextId).toBe('p1');
      expect(result3.nextIndex).toBe(0);
    });
  });

  describe('pauseAll / resumeAll', () => {
    it('pauseAll stops the active timer', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      engine.pauseAll();

      expect(engine.getTimer('p1')!.status).toBe('paused');
      expect(engine.activeTimerId).toBeUndefined();
    });

    it('resumeAll restarts the active timer', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      engine.pauseAll();
      engine.resumeAll(['p1', 'p2'], 0);

      expect(engine.getTimer('p1')!.status).toBe('running');
      expect(engine.activeTimerId).toBe('p1');
    });
  });

  describe('warning callback', () => {
    it('triggers onWarning when remaining is <= 30s', () => {
      const engine = createTimerEngine({ tickInterval: 50 });
      const onWarning = vi.fn();
      engine.onWarning(onWarning);

      engine.create('p1', 'P1', 31);
      engine.start('p1');

      vi.advanceTimersByTime(2000);

      expect(onWarning).toHaveBeenCalled();
    });
  });

  describe('engine lifecycle', () => {
    it('destroy clears all timers and stops clock', () => {
      const engine = createTimerEngine();
      engine.create('p1', 'P1', 60);
      engine.start('p1');

      engine.destroy();

      expect(engine.getTimer('p1')).toBeUndefined();
      expect(engine.getAllTimers()).toHaveLength(0);
    });
  });
});
