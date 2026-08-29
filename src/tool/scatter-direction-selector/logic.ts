export interface ScatterConfig {
  diceType: 'd6' | '2d6' | 'd10' | 'custom';
  customMax: number;
  hitChance: number;
}

export interface ScatterResult {
  isHit: boolean;
  angle: number;
  distance: number;
}

export function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollD10(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function calculateDistance(config: ScatterConfig): number {
  if (config.diceType === 'd6') {
    return rollD6();
  }
  if (config.diceType === '2d6') {
    return rollD6() + rollD6();
  }
  if (config.diceType === 'd10') {
    return rollD10();
  }
  return Math.floor(Math.random() * config.customMax) + 1;
}

export function rollScatter(config: ScatterConfig): ScatterResult {
  const hitRoll = Math.random() * 100;
  const isHit = hitRoll < config.hitChance;
  const angle = Math.floor(Math.random() * 360);
  const distance = isHit ? 0 : calculateDistance(config);

  return {
    isHit,
    angle,
    distance,
  };
}

export function getSectorIndex(angle: number, sectorsCount: number): number {
  const sectorSize = 360 / sectorsCount;
  const halfSector = sectorSize / 2;
  const adjustedAngle = (angle + halfSector) % 360;
  return Math.floor(adjustedAngle / sectorSize);
}
