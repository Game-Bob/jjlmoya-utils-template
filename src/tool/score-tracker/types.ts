export interface PlayerScore {
  id: string;
  name: string;
  rounds: number[];
  total: number;
}

export interface RoundEntry {
  round: number;
  scores: Record<string, number>;
}

export interface ScoreState {
  players: PlayerScore[];
  rounds: RoundEntry[];
  currentRound: number;
}
