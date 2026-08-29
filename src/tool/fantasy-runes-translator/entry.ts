import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type FantasyRunesTranslatorUI = {
  title: string;
  inputPlaceholder: string;
  alphabetLabel: string;
  elderFuthark: string;
  angloSaxon: string;
  fantasy: string;
  theban: string;
  enochian: string;
  daemonic: string;
  ogham: string;
  translate: string;
  clear: string;
  copy: string;
  copied: string;
  runeName: string;
  runeMeaning: string;
  runePhonetic: string;
  clickHint: string;
  outputLabel: string;
  noInput: string;
  unknownChar: string;
  gmMode: string;
  exitGmMode: string;
  gmHint: string;
  seedLabel: string;
  seedPlaceholder: string;
  seedApplied: string;
  shuffleSeed: string;
};

export type FantasyRunesTranslatorLocaleContent = ToolLocaleContent<FantasyRunesTranslatorUI>;

export const fantasyRunesTranslator: TabletopToolEntry<FantasyRunesTranslatorUI> = {
  id: 'fantasy-runes-translator',
  icons: { bg: 'mdi:run-fast', fg: 'mdi:run-fast' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
