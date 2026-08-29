import { addPoints, closeGame, createMusState, setHand, undoLastAction, updateConfig, type MusConfig, type MusState, type Team } from './logic';
import { evaluateMusState } from './evaluator';
import { loadMusState, saveMusState } from './storage';
import { renderMusState } from './dom-views';
import type { MusScoreboardUI } from './ui';

interface ControllerContext {
  root: HTMLElement;
  ui: MusScoreboardUI;
  state: MusState;
  pendingConfirmation: (() => void) | null;
}

const getInput = (root: HTMLElement, selector: string): HTMLInputElement => {
  const input = root.querySelector<HTMLInputElement>(selector);
  if (!input) throw new Error(`Missing scoreboard input ${selector}`);
  return input;
};

const readConfig = (root: HTMLElement): MusConfig => ({
  pairNames: [
    getInput(root, '[data-pair-name="0"]').value.trim(),
    getInput(root, '[data-pair-name="1"]').value.trim(),
  ],
  targetPoints: Number(getInput(root, '[data-target-input]:checked').value),
  gamesToWin: Number(getInput(root, '[data-games-input]:checked').value),
  deck: getInput(root, '[data-deck-input]:checked').value as MusConfig['deck'],
});

const getMessages = (ui: MusScoreboardUI) => ({ waiting: ui.waitingForScore, ready: ui.closeGameHint, won: ui.vacaWon });

const refresh = (context: ControllerContext, message = context.ui.matchSaved, showPanel = true): void => {
  const evaluation = evaluateMusState(context.state, getMessages(context.ui));
  renderMusState(context.root, context.state, context.ui, message || evaluation.message);
  if (showPanel) context.root.querySelector<HTMLElement>('[data-match-panel]')?.removeAttribute('hidden');
  if (showPanel) saveMusState(context.state);
};

const setConfigMessage = (root: HTMLElement, message = ''): void => {
  const element = root.querySelector<HTMLElement>('[data-config-message]');
  if (!element) return;
  element.textContent = message;
  element.hidden = !message;
};

const setFrenchDeckNotice = (root: HTMLElement, deck: MusConfig['deck']): void => {
  const notice = root.querySelector<HTMLElement>('[data-french-deck-notice]');
  if (!notice) return;
  notice.hidden = deck !== 'french';
};

const closeConfirmation = (context: ControllerContext): void => {
  const dialog = context.root.querySelector<HTMLElement>('[data-confirmation]');
  if (!dialog) return;
  dialog.hidden = true;
  context.pendingConfirmation = null;
};

const showConfirmation = (context: ControllerContext, message: string, action: () => void): void => {
  const dialog = context.root.querySelector<HTMLElement>('[data-confirmation]');
  const messageElement = context.root.querySelector<HTMLElement>('[data-confirmation-message]');
  const acceptButton = context.root.querySelector<HTMLButtonElement>('[data-action="accept-confirmation"]');
  if (!dialog || !messageElement || !acceptButton) return;
  messageElement.textContent = message;
  context.pendingConfirmation = action;
  dialog.hidden = false;
  requestAnimationFrame(() => acceptButton.focus());
};

const setPairLabels = (root: HTMLElement, state: MusState): void => {
  state.config.pairNames.forEach((name, team) => {
    root.querySelector<HTMLElement>(`[data-pair-label="${team}"]`)!.textContent = name;
  });
};

const changeScore = (context: ControllerContext, team: Team, amount: 1 | 5): void => {
  if (context.state.games.some((games) => games >= context.state.config.gamesToWin)) return;
  context.state = addPoints(context.state, team, amount);
  refresh(context, `${context.state.config.pairNames[team]} ${context.ui.pointsAdded} +${amount}`);
};

const confirmClose = (context: ControllerContext, team: Team): void => {
  if (context.state.points[team] < context.state.config.targetPoints) return;
  showConfirmation(context, `${context.state.config.pairNames[team]}: ${context.ui.closeGamePrompt}`, () => {
    context.state = closeGame(context.state, team);
    const winner = context.state.games[team] >= context.state.config.gamesToWin;
    refresh(context, winner ? context.ui.vacaWon : `${context.state.config.pairNames[team]} ${context.ui.gameClosed}`);
  });
};

const applySettings = (context: ControllerContext): void => {
  const config = readConfig(context.root);
  if (config.pairNames.some((name) => !name)) {
    setConfigMessage(context.root, context.ui.pairNameRequired);
    getInput(context.root, '[data-pair-name="0"]').focus();
    return;
  }
  setConfigMessage(context.root);
  context.state = updateConfig(context.state, config);
  setPairLabels(context.root, context.state);
  refresh(context, context.ui.settingsApplied);
};

const handleUndo = (context: ControllerContext): void => {
  if (!context.state.history.length) return;
  context.state = undoLastAction(context.state);
  refresh(context, context.ui.undo);
};

const changeHand = (context: ControllerContext, team: Team): void => {
  if (context.state.hand === team) return;
  context.state = setHand(context.state, team);
  refresh(context, `${context.state.config.pairNames[team]} ${context.ui.handSelected}`);
};

const handleReset = (context: ControllerContext): void => {
  showConfirmation(context, context.ui.resetMatchPrompt, () => {
    context.state = createMusState(context.state.config);
    refresh(context, context.ui.resetMatch);
  });
};

const acceptConfirmation = (context: ControllerContext): void => {
  const action = context.pendingConfirmation;
  closeConfirmation(context);
  action?.();
};

type ActionHandler = (context: ControllerContext, element: HTMLElement) => void;

const actionHandlers: Record<string, ActionHandler> = {
  'add-one': (context, element) => changeScore(context, Number(element.dataset.team) as Team, 1),
  'add-five': (context, element) => changeScore(context, Number(element.dataset.team) as Team, 5),
  'close-game': (context, element) => confirmClose(context, Number(element.dataset.team) as Team),
  'set-hand': (context, element) => changeHand(context, Number(element.dataset.team) as Team),
  undo: (context) => handleUndo(context),
  'cancel-confirmation': (context) => closeConfirmation(context),
  'accept-confirmation': (context) => acceptConfirmation(context),
  reset: (context) => handleReset(context),
};

const handleAction = (context: ControllerContext, element: HTMLElement): void => {
  const action = element.dataset.action;
  if (action) actionHandlers[action]?.(context, element);
};

const bindClickActions = (context: ControllerContext): void => {
  context.root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const actionElement = target.closest<HTMLElement>('[data-action]');
    if (actionElement) handleAction(context, actionElement);
  });
};

export const mountMusScoreboard = (root: HTMLElement, ui: MusScoreboardUI): void => {
  const savedState = loadMusState();
  const context: ControllerContext = { root, ui, state: savedState || createMusState(), pendingConfirmation: null };
  getInput(root, '[data-pair-name="0"]').value = context.state.config.pairNames[0];
  getInput(root, '[data-pair-name="1"]').value = context.state.config.pairNames[1];
  getInput(root, `[data-target-input="${context.state.config.targetPoints}"]`).checked = true;
  getInput(root, `[data-games-input="${context.state.config.gamesToWin}"]`).checked = true;
  getInput(root, `[data-deck-input="${context.state.config.deck}"]`).checked = true;
  setPairLabels(root, context.state);
  setFrenchDeckNotice(root, context.state.config.deck);
  bindClickActions(context);
  root.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.matches('[data-deck-input]')) setFrenchDeckNotice(root, target.value as MusConfig['deck']);
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && context.pendingConfirmation) closeConfirmation(context);
  });
  root.querySelector<HTMLFormElement>('[data-config-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    applySettings(context);
  });
  refresh(context, context.ui.matchSaved, savedState !== null);
};
