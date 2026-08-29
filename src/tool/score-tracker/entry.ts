import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type ScoreTrackerUI = {
  title: string;
  addPlayer: string;
  removePlayer: string;
  renamePlayer: string;
  startRound: string;
  nextRound: string;
  resetGame: string;
  undoRound: string;
  playerLabel: string;
  scoreLabel: string;
  roundLabel: string;
  totalLabel: string;
  rankLabel: string;
  leaderboardTitle: string;
  historyTitle: string;
  noPlayersHint: string;
  playerNamePlaceholder: string;
  confirmLabel: string;
  cancelLabel: string;
  deleteRoundConfirm: string;
  playerAdded: string;
  playerRemoved: string;
  roundStarted: string;
  gameReset: string;
  noRoundsYet: string;
  currentRoundLabel: string;
  scoringTitle: string;
  resetAllLabel: string;
  confirmResetAll: string;
};

export type ScoreTrackerLocaleContent = ToolLocaleContent<ScoreTrackerUI>;

export const scoreTracker: TabletopToolEntry<ScoreTrackerUI> = {
  id: 'score-tracker',
  icons: { bg: 'mdi:scoreboard-outline', fg: 'mdi:scoreboard' },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
