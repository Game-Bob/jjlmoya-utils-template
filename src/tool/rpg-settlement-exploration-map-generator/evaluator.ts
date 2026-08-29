import type { SettlementMap } from './logic';
import type { SettlementMapUI } from './ui';

export interface SettlementEvaluation { buildingCount: number; pathCount: number; serviceCount: number; waterCount: number; badge: string; terrainLabel: string }

export function evaluateSettlement(map: SettlementMap, ui: SettlementMapUI): SettlementEvaluation {
  return { buildingCount: map.buildings.length, pathCount: map.paths.length, serviceCount: map.buildings.filter((building) => building.service).length, waterCount: map.water.length, badge: ui.readyBadge, terrainLabel: ui[map.config.environment] ?? map.config.environment };
}
