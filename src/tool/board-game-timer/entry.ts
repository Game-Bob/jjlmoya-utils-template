import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type BoardGameTimerUI = {
  title: string;
  setupTitle: string;
  playerNamePlaceholder: string;
  addPlayer: string;
  removePlayer: string;
  startGame: string;
  pauseGame: string;
  resumeGame: string;
  resetGame: string;
  nextTurn: string;
  addTime: string;
  removeTime: string;
  playerLabel: string;
  minutesLabel: string;
  secondsLabel: string;
  expiredLabel: string;
  overtimeLabel: string;
  turnIndicator: string;
  warningLowTime: string;
  pausedOverlay: string;
  roundLabel: string;
  settingsTitle: string;
  baseTimeLabel: string;
  incrementLabel: string;
  warningTimeLabel: string;
  confirmLabel: string;
  cancelLabel: string;
  noPlayersHint: string;
  addPlayerHint: string;
  timeUpLabel: string;
  presetsTitle: string;
  timeControlTitle: string;
  modeLabel: string;
  modeNormal: string;
  modeFischer: string;
  modeBronstein: string;
  modeHourglass: string;
  modeTurn: string;
  audioTitle: string;
  soundAlerts: string;
  playersTitle: string;
  playersAdded: string;
  statsTitle: string;
  totalGameTime: string;
  totalRounds: string;
  slowestPlayer: string;
  playerPerformance: string;
  playAgain: string;
};

export type BoardGameTimerLocaleContent = ToolLocaleContent<BoardGameTimerUI>;

export const boardGameTimer: TabletopToolEntry<BoardGameTimerUI> = {
  id: 'board-game-timer',
  icons: { bg: 'mdi:timer-outline', fg: 'mdi:timer' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
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
