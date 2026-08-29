import { TimerEngineImpl } from './modules/TimerEngine';
import type { TimerEngine, TimerConfig } from './types';

export function createTimerEngine(config?: TimerConfig): TimerEngine {
  return new TimerEngineImpl(config);
}
