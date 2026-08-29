export type Team = 0 | 1;
export type MusDeck = 'spanish' | 'french';

export interface MusConfig {
  pairNames: [string, string];
  targetPoints: number;
  gamesToWin: number;
  deck: MusDeck;
}

export interface MusState {
  config: MusConfig;
  points: [number, number];
  games: [number, number];
  hand: Team;
  history: MusHistoryEntry[];
}

export interface MusHistoryEntry {
  action: string;
  team: Team | null;
  amount: number;
  points: [number, number];
  games: [number, number];
  hand: Team;
}

export interface ScoreParts {
  amarracos: number;
  stones: number;
}

export const DEFAULT_CONFIG: MusConfig = {
  pairNames: ['Pair One', 'Pair Two'],
  targetPoints: 40,
  gamesToWin: 2,
  deck: 'spanish',
};

const copyPair = (values: [number, number]): [number, number] => [values[0], values[1]];

const copyConfig = (config: MusConfig): MusConfig => ({
  pairNames: [config.pairNames[0], config.pairNames[1]],
  targetPoints: config.targetPoints,
  gamesToWin: config.gamesToWin,
  deck: config.deck,
});

export const createMusState = (config: MusConfig = DEFAULT_CONFIG): MusState => ({
  config: copyConfig(config),
  points: [0, 0],
  games: [0, 0],
  hand: 0,
  history: [],
});

const snapshot = (state: MusState, action: string, team: Team | null, amount: number): MusHistoryEntry => ({
  action,
  team,
  amount,
  points: copyPair(state.points),
  games: copyPair(state.games),
  hand: state.hand,
});

export const addPoints = (state: MusState, team: Team, amount: 1 | 5): MusState => ({
  ...state,
  points: state.points.map((value, index) => index === team ? value + amount : value) as [number, number],
  history: [...state.history, snapshot(state, `+${amount}`, team, amount)],
});

export const canCloseGame = (state: MusState, team: Team): boolean => state.points[team] >= state.config.targetPoints;

export const getMatchWinner = (state: MusState): Team | null => {
  const winner = state.games.findIndex((games) => games >= state.config.gamesToWin);
  return winner === -1 ? null : winner as Team;
};

export const closeGame = (state: MusState, team: Team): MusState => {
  if (!canCloseGame(state, team) || getMatchWinner(state) !== null) return state;
  return {
    ...state,
    points: [0, 0],
    games: state.games.map((value, index) => index === team ? value + 1 : value) as [number, number],
    history: [...state.history, snapshot(state, 'Close game', team, 0)],
  };
};

export const setHand = (state: MusState, team: Team): MusState => {
  if (state.hand === team) return state;
  return {
    ...state,
    hand: team,
    history: [...state.history, snapshot(state, 'Hand', team, 0)],
  };
};

export const undoLastAction = (state: MusState): MusState => {
  const previous = state.history.at(-1);
  const history = state.history.slice(0, -1);
  return previous ? {
    ...state,
    points: copyPair(previous.points),
    games: copyPair(previous.games),
    hand: previous.hand,
    history,
  } : createMusState(state.config);
};

export const updateConfig = (state: MusState, config: MusConfig): MusState => {
  void state;
  return createMusState(config);
};

export const decomposeScore = (points: number): ScoreParts => ({
  amarracos: Math.floor(points / 5),
  stones: points % 5,
});

export const remainingPoints = (state: MusState, team: Team): number => Math.max(0, state.config.targetPoints - state.points[team]);

export const isGameReadyToClose = (state: MusState): boolean => state.points.some((points) => points >= state.config.targetPoints);
