export { diceRollerSimulator } from './tool/dice-roller-simulator/entry';
export type { DiceRollerUI, DiceRollerLocaleContent } from './tool/dice-roller-simulator/entry';
export { boardGameTimer } from './tool/board-game-timer/entry';
export type { BoardGameTimerUI, BoardGameTimerLocaleContent } from './tool/board-game-timer/entry';
export { firstPlayerSelector } from './tool/first-player-selector/entry';
export type { FirstPlayerSelectorUI, FirstPlayerSelectorLocaleContent } from './tool/first-player-selector/entry';
export { scoreTracker } from './tool/score-tracker/entry';
export type { ScoreTrackerUI, ScoreTrackerLocaleContent } from './tool/score-tracker/entry';
export { initiativeTracker } from './tool/rpg-initiative-tracker/entry';
export type { InitiativeTrackerUI, InitiativeTrackerLocaleContent } from './tool/rpg-initiative-tracker/entry';
export { fantasyRunesTranslator } from './tool/fantasy-runes-translator/entry';
export type { FantasyRunesTranslatorUI, FantasyRunesTranslatorLocaleContent } from './tool/fantasy-runes-translator/entry';
export { investigationBoard } from './tool/investigation-board/entry';
export type { InvestigationBoardUI, InvestigationBoardLocaleContent } from './tool/investigation-board/entry';
export { lunarTideTracker } from './tool/lunar-tide-tracker/entry';
export type { LunarTideUI, LunarTideLocaleContent } from './tool/lunar-tide-tracker/entry';
export { hiddenRoleDealer } from './tool/hidden-role-dealer/entry';
export type { HiddenRoleDealerUI, HiddenRoleDealerLocaleContent } from './tool/hidden-role-dealer/entry';
export { scatterDirectionSelector } from './tool/scatter-direction-selector/entry';
export type { ScatterSelectorUI, ScatterSelectorLocaleContent } from './tool/scatter-direction-selector/entry';
export { dungeonMapGenerator } from './tool/dungeon-map-generator/entry';
export type { DungeonMapGeneratorUI, DungeonMapGeneratorLocaleContent } from './tool/dungeon-map-generator/entry';
export { rpgSettlementExplorationMapGenerator } from './tool/rpg-settlement-exploration-map-generator/entry';
export type { SettlementMapUI, SettlementMapLocaleContent } from './tool/rpg-settlement-exploration-map-generator/entry';
export { tabletopCategory } from './category';

import { diceRollerSimulator } from './tool/dice-roller-simulator/entry';
import { boardGameTimer } from './tool/board-game-timer/entry';
import { firstPlayerSelector } from './tool/first-player-selector/entry';
import { scoreTracker } from './tool/score-tracker/entry';
import { initiativeTracker } from './tool/rpg-initiative-tracker/entry';
import { fantasyRunesTranslator } from './tool/fantasy-runes-translator/entry';
import { decisionWheel } from './tool/decision-wheel/entry';
import { investigationBoard } from './tool/investigation-board/entry';
import { lunarTideTracker } from './tool/lunar-tide-tracker/entry';
import { hiddenRoleDealer } from './tool/hidden-role-dealer/entry';
import { scatterDirectionSelector } from './tool/scatter-direction-selector/entry';
import { dungeonMapGenerator } from './tool/dungeon-map-generator/entry';
import { encounterDifficultyCalculator } from './tool/encounter-difficulty-calculator/entry';
import { tokenStampStudio } from './tool/token-stamp-studio/entry';
import { musScoreboard } from './tool/mus-scoreboard/entry';
import { rpgSettlementExplorationMapGenerator } from './tool/rpg-settlement-exploration-map-generator/entry';

export const ALL_ENTRIES = [
  diceRollerSimulator,
  boardGameTimer,
  firstPlayerSelector,
  scoreTracker,
  initiativeTracker,
  fantasyRunesTranslator,
  decisionWheel,
  investigationBoard,
  lunarTideTracker,
  hiddenRoleDealer,
  scatterDirectionSelector,
  dungeonMapGenerator,
  encounterDifficultyCalculator,
  tokenStampStudio,
  musScoreboard,
  rpgSettlementExplorationMapGenerator,
];

