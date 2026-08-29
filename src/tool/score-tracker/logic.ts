import type { PlayerScore, ScoreState } from './types';

export function createScoreState(): ScoreState {
  return {
    players: [],
    rounds: [],
    currentRound: 0,
  };
}

export function createBlankState(): ScoreState {
  return { players: [], rounds: [], currentRound: 0 };
}

export function addPlayer(state: ScoreState, name: string): ScoreState {
  const id = 'player_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
  const player: PlayerScore = {
    id,
    name,
    rounds: [],
    total: 0,
  };
  return {
    ...state,
    players: [...state.players, player],
  };
}

export function removePlayer(state: ScoreState, playerId: string): ScoreState {
  return {
    ...state,
    players: state.players.filter(p => p.id !== playerId),
    rounds: state.rounds.map(r => {
      const newScores = { ...r.scores };
      delete newScores[playerId];
      return { ...r, scores: newScores };
    }),
  };
}

export function renamePlayer(state: ScoreState, playerId: string, newName: string): ScoreState {
  return {
    ...state,
    players: state.players.map(p =>
      p.id === playerId ? { ...p, name: newName } : p
    ),
  };
}

export function startNewRound(state: ScoreState): ScoreState {
  const roundNumber = state.rounds.length + 1;
  const scores: Record<string, number> = {};
  state.players.forEach(p => { scores[p.id] = 0; });
  return {
    ...state,
    currentRound: roundNumber,
    rounds: [...state.rounds, { round: roundNumber, scores }],
  };
}

export function updateRoundScore(
  state: ScoreState,
  roundIndex: number,
  playerId: string,
  delta: number
): ScoreState {
  const round = state.rounds[roundIndex];
  if (!round) return state;
  const newScores = {
    ...round.scores,
    [playerId]: (round.scores[playerId] || 0) + delta,
  };
  const newRounds = state.rounds.map((r, i) =>
    i === roundIndex ? { ...r, scores: newScores } : r
  );
  const newPlayers = state.players.map(p => {
    if (p.id !== playerId) return p;
    const allRoundScores = newRounds.map(r => r.scores[p.id] || 0);
    return {
      ...p,
      rounds: allRoundScores,
      total: allRoundScores.reduce((a, b) => a + b, 0),
    };
  });
  return {
    ...state,
    players: newPlayers,
    rounds: newRounds,
  };
}

export function deleteLastRound(state: ScoreState): ScoreState {
  if (state.rounds.length === 0) return state;
  const newRounds = state.rounds.slice(0, -1);
  const newPlayers = state.players.map(p => {
    const allRoundScores = newRounds.map(r => r.scores[p.id] || 0);
    return {
      ...p,
      rounds: allRoundScores,
      total: allRoundScores.reduce((a, b) => a + b, 0),
    };
  });
  return {
    ...state,
    players: newPlayers,
    rounds: newRounds,
    currentRound: newRounds.length,
  };
}

export function resetGame(state: ScoreState): ScoreState {
  return {
    ...state,
    rounds: [],
    currentRound: 0,
    players: state.players.map(p => ({
      ...p,
      rounds: [],
      total: 0,
    })),
  };
}
