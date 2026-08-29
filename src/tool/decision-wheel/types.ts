export interface WheelSegment {
  id: string;
  label: string;
  color: string;
  weight?: number;
}

export interface SpinResultEntry {
  segment: WheelSegment;
  index: number;
  timestamp: number;
}

export type PresetKey = 'yesno' | 'numbers' | 'actions' | 'custom' | 'd20' | 'alignment' | 'loot';
