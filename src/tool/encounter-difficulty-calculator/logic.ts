export type EncounterDifficulty = 'belowEasy' | 'easy' | 'medium' | 'hard' | 'deadly';

export interface EncounterSettings {
  partyLevel: number;
  partySize: number;
  monsterCr: number;
  monsterCount: number;
}

export interface EncounterThresholds {
  easy: number;
  medium: number;
  hard: number;
  deadly: number;
}

export interface EncounterResult {
  settings: EncounterSettings;
  monsterXp: number;
  baseXp: number;
  multiplier: number;
  adjustedXp: number;
  thresholds: EncounterThresholds;
  difficulty: EncounterDifficulty;
  crLabel: string;
  warnings: string[];
}

interface CrEntry {
  value: number;
  label: string;
  xp: number;
}

const CR_ENTRIES: CrEntry[] = [
  { value: 0, label: '0', xp: 10 },
  { value: 0.125, label: '1/8', xp: 25 },
  { value: 0.25, label: '1/4', xp: 50 },
  { value: 0.5, label: '1/2', xp: 100 },
  { value: 1, label: '1', xp: 200 },
  { value: 2, label: '2', xp: 450 },
  { value: 3, label: '3', xp: 700 },
  { value: 4, label: '4', xp: 1100 },
  { value: 5, label: '5', xp: 1800 },
  { value: 6, label: '6', xp: 2300 },
  { value: 7, label: '7', xp: 2900 },
  { value: 8, label: '8', xp: 3900 },
  { value: 9, label: '9', xp: 5000 },
  { value: 10, label: '10', xp: 5900 },
  { value: 11, label: '11', xp: 7200 },
  { value: 12, label: '12', xp: 8400 },
  { value: 13, label: '13', xp: 10000 },
  { value: 14, label: '14', xp: 11500 },
  { value: 15, label: '15', xp: 13000 },
  { value: 16, label: '16', xp: 15000 },
  { value: 17, label: '17', xp: 18000 },
  { value: 18, label: '18', xp: 20000 },
  { value: 19, label: '19', xp: 22000 },
  { value: 20, label: '20', xp: 25000 },
  { value: 21, label: '21', xp: 33000 },
  { value: 22, label: '22', xp: 41000 },
  { value: 23, label: '23', xp: 50000 },
  { value: 24, label: '24', xp: 62000 },
  { value: 25, label: '25', xp: 75000 },
  { value: 26, label: '26', xp: 90000 },
  { value: 27, label: '27', xp: 105000 },
  { value: 28, label: '28', xp: 120000 },
  { value: 29, label: '29', xp: 135000 },
  { value: 30, label: '30', xp: 155000 },
];

const THRESHOLDS = [
  [25, 50, 75, 100], [50, 100, 150, 200], [75, 150, 225, 400],
  [125, 250, 375, 500], [250, 500, 750, 1100], [300, 600, 900, 1400],
  [350, 750, 1100, 1700], [450, 900, 1400, 2100], [550, 1100, 1600, 2400],
  [600, 1200, 1900, 2800], [800, 1600, 2400, 3600], [1000, 2000, 3000, 4500],
  [1100, 2200, 3400, 5100], [1250, 2500, 3800, 5700], [1400, 2800, 4300, 6400],
  [1600, 3200, 4800, 7200], [2000, 3900, 5900, 8800], [2100, 4200, 6300, 9500],
  [2400, 4900, 7300, 10900], [2800, 5700, 8500, 12700],
] as const;

const MULTIPLIERS = [1, 1.5, 2, 2.5, 3, 4];

export const DEFAULT_SETTINGS: EncounterSettings = {
  partyLevel: 5,
  partySize: 4,
  monsterCr: 2,
  monsterCount: 2,
};

export const CR_OPTIONS = CR_ENTRIES;
export const QUICK_CR_VALUES = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 8, 10, 15];

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function findCrEntry(cr: number): CrEntry {
  return CR_ENTRIES.reduce((closest, entry) => (
    Math.abs(entry.value - cr) < Math.abs(closest.value - cr) ? entry : closest
  ));
}

function getBaseMultiplier(monsterCount: number): number {
  if (monsterCount === 1) return 1;
  if (monsterCount === 2) return 1.5;
  if (monsterCount <= 6) return 2;
  if (monsterCount <= 10) return 2.5;
  if (monsterCount <= 14) return 3;
  return 4;
}

function getPartyAdjustment(partySize: number): number {
  if (partySize < 3) return 1;
  if (partySize > 5) return -1;
  return 0;
}

function getMultiplier(monsterCount: number, partySize: number): number {
  const baseIndex = MULTIPLIERS.indexOf(getBaseMultiplier(monsterCount));
  const partyAdjustment = getPartyAdjustment(partySize);
  return MULTIPLIERS[clamp(baseIndex + partyAdjustment, 0, MULTIPLIERS.length - 1)];
}

function getThresholds(partyLevel: number, partySize: number): EncounterThresholds {
  const row = THRESHOLDS[clamp(partyLevel, 1, 20) - 1];
  return {
    easy: row[0] * partySize,
    medium: row[1] * partySize,
    hard: row[2] * partySize,
    deadly: row[3] * partySize,
  };
}

function getDifficulty(adjustedXp: number, thresholds: EncounterThresholds): EncounterDifficulty {
  if (adjustedXp < thresholds.easy) return 'belowEasy';
  if (adjustedXp < thresholds.medium) return 'easy';
  if (adjustedXp < thresholds.hard) return 'medium';
  if (adjustedXp < thresholds.deadly) return 'hard';
  return 'deadly';
}

function getWarnings(settings: EncounterSettings): string[] {
  const warnings: string[] = [];
  if (settings.partySize < 3 || settings.partySize > 5) warnings.push('partyAdjustment');
  if (settings.monsterCr > settings.partyLevel) warnings.push('highCr');
  if (settings.monsterCount >= 11) warnings.push('manyMonsters');
  return warnings;
}

export function calculateEncounter(rawSettings: EncounterSettings): EncounterResult {
  const settings: EncounterSettings = {
    partyLevel: clamp(Math.round(rawSettings.partyLevel), 1, 20),
    partySize: clamp(Math.round(rawSettings.partySize), 1, 8),
    monsterCr: findCrEntry(rawSettings.monsterCr).value,
    monsterCount: clamp(Math.round(rawSettings.monsterCount), 1, 15),
  };
  const crEntry = findCrEntry(settings.monsterCr);
  const thresholds = getThresholds(settings.partyLevel, settings.partySize);
  const baseXp = crEntry.xp * settings.monsterCount;
  const multiplier = getMultiplier(settings.monsterCount, settings.partySize);
  const adjustedXp = Math.round(baseXp * multiplier);
  return {
    settings,
    monsterXp: crEntry.xp,
    baseXp,
    multiplier,
    adjustedXp,
    thresholds,
    difficulty: getDifficulty(adjustedXp, thresholds),
    crLabel: crEntry.label,
    warnings: getWarnings(settings),
  };
}
