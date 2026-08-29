import { canCloseGame, decomposeScore, getMatchWinner, remainingPoints, type MusState, type Team } from './logic';
import type { MusScoreboardUI } from './ui';

const query = <T extends Element>(root: ParentNode, selector: string): T => {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing scoreboard element ${selector}`);
  return element;
};

const setText = (root: ParentNode, selector: string, value: string): void => {
  query<HTMLElement>(root, selector).textContent = value;
};

const setTeamProgress = (root: ParentNode, team: Team, points: number, target: number): void => {
  const progress = Math.min(100, points / target * 100);
  const track = query<HTMLElement>(root, `[data-score-track="${team}"]`);
  track.style.setProperty('--score-progress', String(progress / 100));
  track.setAttribute('aria-valuenow', String(points));
  const marker = query<HTMLElement>(root, `[data-score-marker="${team}"]`);
  marker.style.setProperty('--score-progress', String(progress / 100));
};

const renderTally = (root: ParentNode, team: Team, score: number, ui: MusScoreboardUI): void => {
  const target = query<HTMLElement>(root, `[data-tally="${team}"]`);
  target.replaceChildren();
  const parts = decomposeScore(score);
  for (let index = 0; index < parts.amarracos; index += 1) {
    const amarraco = document.createElement('span');
    amarraco.className = 'mus-tally-amarraco';
    amarraco.setAttribute('aria-label', ui.amarracoSingular);
    target.append(amarraco);
  }
  for (let index = 0; index < parts.stones; index += 1) {
    const stone = document.createElement('span');
    stone.className = 'mus-tally-stone';
    stone.setAttribute('aria-label', ui.stoneSingular);
    target.append(stone);
  }
};

const renderHistory = (root: ParentNode, state: MusState, ui: MusScoreboardUI): void => {
  const list = query<HTMLOListElement>(root, '[data-history-list]');
  list.replaceChildren();
  if (!state.history.length) {
    const empty = document.createElement('li');
    empty.className = 'mus-history-empty';
    empty.textContent = ui.noHistory;
    list.append(empty);
    return;
  }
  state.history.slice(-6).reverse().forEach((entry) => {
    const item = document.createElement('li');
    item.textContent = entry.team === null ? entry.action : `${state.config.pairNames[entry.team]} ${entry.action}`;
    list.append(item);
  });
};

export const renderMusState = (root: ParentNode, state: MusState, ui: MusScoreboardUI, message: string): void => {
  const felt = query<HTMLElement>(root, '[data-mus-felt]');
  felt.dataset.handTeam = String(state.hand);
  state.config.pairNames.forEach((name, team) => {
    setText(root, `[data-hand-choice-label="${team}"]`, name.slice(0, 1).toUpperCase());
    const handChoice = query<HTMLButtonElement>(root, `[data-hand-choice="${team}"]`);
    handChoice.setAttribute('aria-pressed', String(state.hand === team));
    handChoice.setAttribute('aria-label', `${ui.handLabel}: ${name}`);
  });
  state.points.forEach((score, team) => {
    const index = team as Team;
    const parts = decomposeScore(score);
    setText(root, `[data-score="${index}"]`, String(score));
    setText(root, `[data-breakdown="${index}"]`, `${parts.amarracos} ${parts.amarracos === 1 ? ui.amarracoSingular : ui.amarracoPlural} + ${parts.stones} ${parts.stones === 1 ? ui.stoneSingular : ui.stonePlural}`);
    setText(root, `[data-remaining="${index}"]`, `${remainingPoints(state, index)} ${ui.pointsToGo}`);
    setTeamProgress(root, index, score, state.config.targetPoints);
    renderTally(root, index, score, ui);
  });
  state.games.forEach((games, team) => setText(root, `[data-games="${team}"]`, String(games)));
  const matchWinner = getMatchWinner(state);
  state.points.forEach((_, team) => {
    const closeButton = query<HTMLButtonElement>(root, `[data-action="close-game"][data-team="${team}"]`);
    closeButton.disabled = !canCloseGame(state, team as Team) || matchWinner !== null;
  });
  query<HTMLButtonElement>(root, '[data-action="undo"]').disabled = state.history.length === 0;
  setText(root, '[data-target-points]', String(state.config.targetPoints));
  setText(root, '[data-games-to-win]', String(state.config.gamesToWin));
  setText(root, '[data-status-message]', message);
  renderHistory(root, state, ui);
};
