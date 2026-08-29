import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type DiceRollerUI = {
  title: string;
  rollButton: string;
  clearButton: string;
  historyTitle: string;
  noHistory: string;
  totalRolls: string;
  averageRoll: string;
  lastRoll: string;
  modifierLabel: string;
  probabilityTitle: string;
  selectDice: string;
};

export type DiceRollerLocaleContent = ToolLocaleContent<DiceRollerUI>;

export const diceRollerSimulator: TabletopToolEntry<DiceRollerUI> = {
  id: 'dice-roller-simulator',
  icons: { bg: 'mdi:dice-multiple-outline', fg: 'mdi:dice-multiple' },
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
