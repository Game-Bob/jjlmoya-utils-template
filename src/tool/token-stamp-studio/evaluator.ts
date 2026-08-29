import { getStatus } from './logic';
import type { TokenStampState, TokenStampStatus } from './types';

export function evaluateTokenState(state: TokenStampState, ui: { statusReady: string; statusAddImage: string; statusAddText: string }): TokenStampStatus {
  return getStatus(state, ui);
}
