import { diceRollerSimulator } from '../tool/dice-roller-simulator/entry';
import { boardGameTimer } from '../tool/board-game-timer/entry';
import { dungeonMapGenerator } from '../tool/dungeon-map-generator/entry';
import { encounterDifficultyCalculator } from '../tool/encounter-difficulty-calculator/entry';
import { tokenStampStudio } from '../tool/token-stamp-studio/entry';
import { musScoreboard } from '../tool/mus-scoreboard/entry';
import { rpgSettlementExplorationMapGenerator } from '../tool/rpg-settlement-exploration-map-generator/entry';
import type { CategoryLocaleContent, KnownLocale } from '../types';

export const tabletopCategory = {
  icon: 'mdi:dice-multiple-outline',
  tools: [
    diceRollerSimulator,
    boardGameTimer,
    dungeonMapGenerator,
    encounterDifficultyCalculator,
    tokenStampStudio,
    musScoreboard,
    rpgSettlementExplorationMapGenerator,
  ],
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
  } as Partial<Record<KnownLocale, () => Promise<CategoryLocaleContent>>>,
};
