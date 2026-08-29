import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type InitiativeTrackerUI = {
  title: string;
  addCombatant: string;
  removeCombatant: string;
  playerLabel: string;
  npcLabel: string;
  initiativeLabel: string;
  modifierLabel: string;
  namePlaceholder: string;
  initiativePlaceholder: string;
  modifierPlaceholder: string;
  addButton: string;
  startCombat: string;
  endCombat: string;
  nextTurn: string;
  prevTurn: string;
  roundLabel: string;
  turnLabel: string;
  noCombatants: string;
  statusInput: string;
  combatStarted: string;
  combatEnded: string;
  yourTurn: string;
};

export type InitiativeTrackerLocaleContent = ToolLocaleContent<InitiativeTrackerUI>;

export const initiativeTracker: TabletopToolEntry<InitiativeTrackerUI> = {
  id: 'rpg-initiative-tracker',
  icons: { bg: 'mdi:sword-cross', fg: 'mdi:sword-cross' },
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
