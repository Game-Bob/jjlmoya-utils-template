import { decomposeScore, getMatchWinner, isGameReadyToClose, remainingPoints, type MusState, type Team } from './logic';

export interface MusEvaluation {
  winner: Team | null;
  readyTeam: Team | null;
  badges: [string, string];
  message: string;
}

const findLeader = (points: [number, number]): Team | null => {
  if (points[0] === points[1]) return null;
  return points[0] > points[1] ? 0 : 1;
};

export const evaluateMusState = (state: MusState, messages: { waiting: string; ready: string; won: string }): MusEvaluation => {
  const winner = getMatchWinner(state);
  const readyTeam = state.points.findIndex((points) => points >= state.config.targetPoints);
  const badges = state.points.map((points) => {
    const parts = decomposeScore(points);
    return `${parts.amarracos} / ${parts.stones}`;
  }) as [string, string];
  if (winner !== null) return { winner, readyTeam: null, badges, message: messages.won };
  if (isGameReadyToClose(state)) return { winner: null, readyTeam: readyTeam as Team, badges, message: messages.ready };
  const lead = findLeader(state.points);
  const message = lead === null ? messages.waiting : `${messages.waiting} ${remainingPoints(state, lead as Team)}`;
  return { winner: null, readyTeam: null, badges, message };
};
