import type { EncounterDifficulty, EncounterResult } from './logic';

export interface EncounterEvaluation {
  titleKey: EncounterDifficulty;
  ratio: number;
  warningKeys: string[];
}

export function evaluateEncounter(result: EncounterResult): EncounterEvaluation {
  const ratio = result.thresholds.deadly === 0 ? 1 : result.adjustedXp / result.thresholds.deadly;
  return { titleKey: result.difficulty, ratio: Math.min(ratio, 1.35), warningKeys: result.warnings };
}
