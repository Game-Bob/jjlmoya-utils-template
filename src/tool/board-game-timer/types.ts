export type TimerStatus = 'idle' | 'running' | 'paused' | 'expired' | 'overtime';

export interface TimerState {
  id: string;
  label: string;
  initialDuration: number;
  remaining: number;
  status: TimerStatus;
  _lastTickAt: number;
  roundsPlayed: number;
  overtime: number;
}

export type TimerEventCallback = (id: string, remaining: number) => void;

export type TimeControlMode = 'normal' | 'fischer' | 'bronstein' | 'hourglass' | 'turn';

export interface TimerConfig {
  tickInterval?: number;
  mode?: TimeControlMode;
  increment?: number;
  delay?: number;
  warningTime?: number;
}

export interface PlayerConfig {
  id: string;
  name: string;
  color: PlayerColor;
  avatar?: string;
  time: number;
}

export type PlayerColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange' | 'teal' | 'pink';

export const PLAYER_COLORS: Record<PlayerColor, string> = {
  blue: '#3b82f6',
  red: '#ef4444',
  green: '#22c55e',
  yellow: '#eab308',
  purple: '#a855f7',
  orange: '#f97316',
  teal: '#14b8a6',
  pink: '#ec4899',
};

export const PLAYER_COLOR_NAMES: Record<PlayerColor, string> = {
  blue: 'Blue',
  red: 'Red',
  green: 'Green',
  yellow: 'Yellow',
  purple: 'Purple',
  orange: 'Orange',
  teal: 'Teal',
  pink: 'Pink',
};

export interface GameConfig {
  players: PlayerConfig[];
  turnOrder: 'clockwise' | 'sequential';
  increment?: number;
  delay?: number;
  warningTime: number;
  mode: TimeControlMode;
  soundEnabled: boolean;
}

export interface GameState {
  activePlayerIndex: number;
  phase: 'setup' | 'playing' | 'paused' | 'finished';
  round: number;
}

export interface TimerEngine {
  create(id: string, label: string, duration: number): void;
  start(id: string): void;
  pause(id: string): void;
  resume(id: string): void;
  reset(id: string): void;
  addTime(id: string, seconds: number): void;
  removeTime(id: string, seconds: number): void;
  getTimer(id: string): TimerState | undefined;
  getAllTimers(): TimerState[];
  switchTurn(nextId: string): void;
  switchToNextPlayer(playerIds: string[], currentIndex: number): { nextId: string; nextIndex: number };
  pauseAll(): void;
  resumeAll(playerIds: string[], activeIndex: number): void;
  readonly activeTimerId: string | undefined;
  onExpired(cb: TimerEventCallback): void;
  onTick(cb: TimerEventCallback): void;
  onWarning(cb: TimerEventCallback): void;
  destroyTimer(id: string): void;
  destroy(): void;
  setMode(mode: TimeControlMode): void;
  setIncrement(seconds: number): void;
  setDelay(seconds: number): void;
}
