export type MoonPhaseType =
  | 'new'
  | 'waxing_crescent'
  | 'first_quarter'
  | 'waxing_gibbous'
  | 'full'
  | 'waning_gibbous'
  | 'last_quarter'
  | 'waning_crescent';

export interface Moon {
  id: string;
  name: string;
  period: number;
  offset: number;
  color: string;
}

export interface TideState {
  level: number;
  name: string;
  modifier: string;
}

export interface MoonPhaseInfo {
  phase: MoonPhaseType;
  percentage: number;
  angle: number;
}

export interface ForecastItem {
  day: number;
  moons: {
    moonId: string;
    phase: MoonPhaseType;
    percentage: number;
  }[];
  tideLevel: number;
  tideName: string;
}

export interface LunarTideUI {
  title: string;
  moonsTitle: string;
  addMoon: string;
  removeMoon: string;
  moonName: string;
  orbitalPeriod: string;
  startingOffset: string;
  timelineTitle: string;
  currentDay: string;
  tideTitle: string;
  tideLevel: string;
  magicModifier: string;
  forecastTitle: string;
  dayLabel: string;
  resetButton: string;
  presetTitle: string;
  presetSingle: string;
  presetDouble: string;
  presetTriple: string;
  newMoon: string;
  waxingCrescent: string;
  firstQuarter: string;
  waxingGibbous: string;
  fullMoon: string;
  waningGibbous: string;
  lastQuarter: string;
  waningCrescent: string;
}
