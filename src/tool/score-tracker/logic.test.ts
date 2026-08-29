import { describe, it, expect } from 'vitest';
import {
  createScoreState,
  addPlayer,
  removePlayer,
  renamePlayer,
  startNewRound,
  updateRoundScore,
  deleteLastRound,
  resetGame,
} from './logic';

describe('score-tracker logic', () => {
  it('creates an initial empty state', () => {
    const state = createScoreState();
    expect(state.players).toEqual([]);
    expect(state.rounds).toEqual([]);
    expect(state.currentRound).toBe(0);
  });

  it('adds a player', () => {
    const state = addPlayer(createScoreState(), 'Alice');
    expect(state.players).toHaveLength(1);
    expect(state.players[0].name).toBe('Alice');
    expect(state.players[0].total).toBe(0);
  });

  it('removes a player', () => {
    const s1 = addPlayer(createScoreState(), 'Alice');
    const s2 = addPlayer(s1, 'Bob');
    const s3 = removePlayer(s2, s2.players[0].id);
    expect(s3.players).toHaveLength(1);
    expect(s3.players[0].name).toBe('Bob');
  });

  it('renames a player', () => {
    const s1 = addPlayer(createScoreState(), 'Alice');
    const s2 = renamePlayer(s1, s1.players[0].id, 'Alice B.');
    expect(s2.players[0].name).toBe('Alice B.');
  });

  it('starts a new round', () => {
    const s1 = addPlayer(createScoreState(), 'Alice');
    const s2 = addPlayer(s1, 'Bob');
    const s3 = startNewRound(s2);
    expect(s3.rounds).toHaveLength(1);
    expect(s3.currentRound).toBe(1);
    expect(s3.rounds[0].scores[s2.players[0].id]).toBe(0);
    expect(s3.rounds[0].scores[s2.players[1].id]).toBe(0);
  });

  it('updates round score and recalculates totals', () => {
    let s = addPlayer(createScoreState(), 'Alice');
    s = addPlayer(s, 'Bob');
    s = startNewRound(s);
    s = updateRoundScore(s, 0, s.players[0].id, 5);
    expect(s.rounds[0].scores[s.players[0].id]).toBe(5);
    expect(s.players[0].total).toBe(5);
    expect(s.players[1].total).toBe(0);
  });

  it('deletes the last round', () => {
    let s = addPlayer(createScoreState(), 'Alice');
    s = startNewRound(s);
    s = updateRoundScore(s, 0, s.players[0].id, 5);
    expect(s.players[0].total).toBe(5);
    s = deleteLastRound(s);
    expect(s.rounds).toHaveLength(0);
    expect(s.currentRound).toBe(0);
    expect(s.players[0].total).toBe(0);
  });

  it('resets the game while keeping players', () => {
    let s = addPlayer(createScoreState(), 'Alice');
    s = startNewRound(s);
    s = updateRoundScore(s, 0, s.players[0].id, 5);
    s = resetGame(s);
    expect(s.rounds).toHaveLength(0);
    expect(s.currentRound).toBe(0);
    expect(s.players).toHaveLength(1);
    expect(s.players[0].total).toBe(0);
  });
});
