export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { DICE_ROLLER_SIMULATOR_TOOL } from './tool/dice-roller-simulator';
import { BOARD_GAME_TIMER_TOOL } from './tool/board-game-timer';
import { FIRST_PLAYER_SELECTOR_TOOL } from './tool/first-player-selector';
import { SCORE_TRACKER_TOOL } from './tool/score-tracker';
import { INITIATIVE_TRACKER_TOOL } from './tool/rpg-initiative-tracker';
import { FANTASY_RUNES_TRANSLATOR_TOOL } from './tool/fantasy-runes-translator';
import { DECISION_WHEEL_TOOL } from './tool/decision-wheel';
import { INVESTIGATION_BOARD_TOOL } from './tool/investigation-board';
import { LUNAR_TIDE_TRACKER_TOOL } from './tool/lunar-tide-tracker';
import { HIDDEN_ROLE_DEALER_TOOL } from './tool/hidden-role-dealer';
import { SCATTER_DIRECTION_SELECTOR_TOOL } from './tool/scatter-direction-selector';
import { DUNGEON_MAP_GENERATOR_TOOL } from './tool/dungeon-map-generator';
import { ENCOUNTER_DIFFICULTY_CALCULATOR_TOOL } from './tool/encounter-difficulty-calculator';
import { TOKEN_STAMP_STUDIO_TOOL } from './tool/token-stamp-studio';
import { MUS_SCOREBOARD_TOOL } from './tool/mus-scoreboard';
import { RPG_SETTLEMENT_EXPLORATION_MAP_GENERATOR_TOOL } from './tool/rpg-settlement-exploration-map-generator';

export const ALL_TOOLS: ToolDefinition[] = [
  DICE_ROLLER_SIMULATOR_TOOL,
  BOARD_GAME_TIMER_TOOL,
  FIRST_PLAYER_SELECTOR_TOOL,
  SCORE_TRACKER_TOOL,
  INITIATIVE_TRACKER_TOOL,
  FANTASY_RUNES_TRANSLATOR_TOOL,
  DECISION_WHEEL_TOOL,
  INVESTIGATION_BOARD_TOOL,
  LUNAR_TIDE_TRACKER_TOOL,
  HIDDEN_ROLE_DEALER_TOOL,
  SCATTER_DIRECTION_SELECTOR_TOOL,
  DUNGEON_MAP_GENERATOR_TOOL,
  ENCOUNTER_DIFFICULTY_CALCULATOR_TOOL,
  TOKEN_STAMP_STUDIO_TOOL,
  MUS_SCOREBOARD_TOOL,
  RPG_SETTLEMENT_EXPLORATION_MAP_GENERATOR_TOOL,
];

