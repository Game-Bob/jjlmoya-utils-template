export interface Role {
  id: string;
  name: string;
  description: string;
  team: string;
  secretInfo: string;
  alignment: 'good' | 'evil' | 'neutral';
  quantity?: number | 'remaining';
}

export interface Player {
  id: string;
  name: string;
  role: Role | null;
  revealed: boolean;
}

export interface GamePreset {
  id: string;
  name: string;
  roles: Role[];
}

export type DealerState = 'setup' | 'distributing' | 'revealed' | 'complete';

export interface ImpostorValues {
  fixedVal: number;
  percentVal: number;
  minVal: number;
  maxVal: number;
}
