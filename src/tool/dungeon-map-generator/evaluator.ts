import type { DungeonMap } from './logic';
import type { DungeonMapGeneratorUI } from './ui';

export type MapPace = 'compact' | 'balanced' | 'sprawling';

export interface MapEvaluation {
  pace: MapPace;
  label: string;
  hint: string;
  coverage: number;
}

export function evaluateMap(map: DungeonMap, ui: DungeonMapGeneratorUI): MapEvaluation {
  const coverage = Math.round((map.floorCount / (map.config.columns * map.config.rows)) * 100);
  const pace = getPace(coverage);
  return {
    pace,
    coverage,
    label: getLabel(pace, ui),
    hint: getHint(pace, ui),
  };
}

function getPace(coverage: number): MapPace {
  if (coverage < 24) return 'compact';
  if (coverage > 38) return 'sprawling';
  return 'balanced';
}

function getLabel(pace: MapPace, ui: DungeonMapGeneratorUI): string {
  if (pace === 'compact') return ui.compactMap;
  if (pace === 'sprawling') return ui.sprawlingMap;
  return ui.balancedMap;
}

function getHint(pace: MapPace, ui: DungeonMapGeneratorUI): string {
  if (pace === 'compact') return ui.compactHint;
  if (pace === 'sprawling') return ui.sprawlingHint;
  return ui.balancedHint;
}
