import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type InvestigationBoardUI = {
  title: string;
  addCard: string;
  searchPlaceholder: string;
  filterAll: string;
  filterCharacter: string;
  filterClue: string;
  filterLocation: string;
  filterItem: string;
  cardName: string;
  cardCategory: string;
  cardDescription: string;
  cardNotes: string;
  cardTags: string;
  cardColor: string;
  save: string;
  delete: string;
  cancel: string;
  clearBoard: string;
  connectionsTitle: string;
  addConnection: string;
  connectionLabel: string;
  connectionColor: string;
  sourceCard: string;
  targetCard: string;
  close: string;
  character: string;
  clue: string;
  location: string;
  item: string;
  custom: string;
  immersive: string;
};

export type InvestigationBoardLocaleContent = ToolLocaleContent<InvestigationBoardUI>;

export const investigationBoard: TabletopToolEntry<InvestigationBoardUI> = {
  id: 'investigation-board',
  icons: { bg: 'mdi:graph-outline', fg: 'mdi:graph' },
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
