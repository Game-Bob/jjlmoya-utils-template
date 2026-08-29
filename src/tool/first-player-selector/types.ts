export type SelectorMode = 'finger' | 'wheel';

export type SelectionState = 'idle' | 'waiting' | 'countdown' | 'selecting' | 'celebration';

export interface ContactPoint {
  id: string;
  x: number;
  y: number;
  color: string;
  isWinner?: boolean;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}
