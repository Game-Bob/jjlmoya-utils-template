import { describe, expect, it } from 'vitest';
import {
  addPoints,
  canCloseGame,
  closeGame,
  createMusState,
  decomposeScore,
  getMatchWinner,
  isGameReadyToClose,
  remainingPoints,
  setHand,
  undoLastAction,
  updateConfig,
} from './logic';

describe('mus scoreboard logic', () => {
  it('creates a clean match with the supplied rules', () => {
    const state = createMusState({ pairNames: ['North', 'South'], targetPoints: 30, gamesToWin: 3, deck: 'spanish' });
    expect(state.points).toEqual([0, 0]);
    expect(state.games).toEqual([0, 0]);
    expect(state.hand).toBe(0);
    expect(state.config.targetPoints).toBe(30);
  });

  it('adds stones and amarracos to one pair', () => {
    const state = addPoints(addPoints(createMusState(), 0, 5), 1, 1);
    expect(state.points).toEqual([5, 1]);
    expect(state.history).toHaveLength(2);
  });

  it('decomposes a score into amarracos and stones', () => {
    expect(decomposeScore(17)).toEqual({ amarracos: 3, stones: 2 });
    expect(decomposeScore(0)).toEqual({ amarracos: 0, stones: 0 });
  });

  it('allows closing only when a pair reaches the target', () => {
    const state = addPoints(createMusState(), 0, 5);
    expect(canCloseGame(state, 0)).toBe(false);
    expect(isGameReadyToClose(state)).toBe(false);
    const ready = { ...state, points: [40, 12] as [number, number] };
    expect(canCloseGame(ready, 0)).toBe(true);
    expect(isGameReadyToClose(ready)).toBe(true);
  });

  it('closes a game, resets points and records the winner', () => {
    const ready = { ...createMusState(), points: [40, 22] as [number, number] };
    const closed = closeGame(ready, 0);
    expect(closed.points).toEqual([0, 0]);
    expect(closed.games).toEqual([1, 0]);
    expect(closed.history.at(-1)?.action).toBe('Close game');
  });

  it('does not close a game for the wrong pair or after the match is won', () => {
    const ready = { ...createMusState({ pairNames: ['A', 'B'], targetPoints: 30, gamesToWin: 1, deck: 'spanish' }), points: [30, 20] as [number, number] };
    expect(closeGame(ready, 1)).toEqual(ready);
    const matchWon = closeGame(ready, 0);
    expect(getMatchWinner(matchWon)).toBe(0);
    expect(closeGame({ ...matchWon, points: [30, 30] as [number, number] }, 1).games).toEqual([1, 0]);
  });

  it('undoes the latest score and then returns to a clean match', () => {
    const first = addPoints(createMusState(), 0, 5);
    const second = addPoints(first, 1, 1);
    expect(undoLastAction(second).points).toEqual([5, 0]);
    expect(undoLastAction(undoLastAction(second)).points).toEqual([0, 0]);
  });

  it('moves mano between pairs and includes it in undo history', () => {
    const moved = setHand(createMusState(), 1);
    expect(moved.hand).toBe(1);
    expect(moved.history.at(-1)?.action).toBe('Hand');
    expect(undoLastAction(moved).hand).toBe(0);
  });

  it('calculates remaining points and resets when settings change', () => {
    const state = addPoints(createMusState(), 0, 5);
    expect(remainingPoints(state, 0)).toBe(35);
    const changed = updateConfig(state, { pairNames: ['A', 'B'], targetPoints: 50, gamesToWin: 1, deck: 'french' });
    expect(changed.points).toEqual([0, 0]);
    expect(changed.config.targetPoints).toBe(50);
  });
});
