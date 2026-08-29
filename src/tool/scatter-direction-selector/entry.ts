import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export type ScatterSelectorUI = {
  title: string;
  setupTitle: string;
  sectorsLabel: string;
  sectors8: string;
  sectors12: string;
  diceLabel: string;
  diceD6: string;
  dice2D6: string;
  diceD10: string;
  diceCustom: string;
  customMaxLabel: string;
  hitChanceLabel: string;
  rollButton: string;
  hitResult: string;
  scatterResult: string;
  distanceLabel: string;
  angleLabel: string;
  dragHint: string;
  historyTitle: string;
  clearHistory: string;
  presetTitle: string;
  soundOn: string;
  soundOff: string;
  guideStep1: string;
  guideStep2: string;
  guideStep3: string;
  guideStep3Scatter: string;
  scatterModeLabel: string;
  scatterModeRandom: string;
  scatterModeWind: string;
  scatterModeWindHint: string;
};

export type ScatterSelectorLocaleContent = ToolLocaleContent<ScatterSelectorUI>;

export const scatterDirectionSelector: TabletopToolEntry<ScatterSelectorUI> = {
  id: 'scatter-direction-selector',
  icons: { bg: 'mdi:compass-outline', fg: 'mdi:compass-rose' },
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
