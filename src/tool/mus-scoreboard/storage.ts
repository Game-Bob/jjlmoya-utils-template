import type { MusState } from './logic';

const STORAGE_KEY = 'jjlmoya-mus-scoreboard-state';

export const loadMusState = (): MusState | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw) as MusState;
    if (!state.config.deck) state.config.deck = 'spanish';
    if (state.hand !== 0 && state.hand !== 1) state.hand = 0;
    state.history = state.history.map((entry) => ({ ...entry, hand: entry.hand === 1 ? 1 : 0 }));
    return state;
  } catch {
    return null;
  }
};

export const saveMusState = (state: MusState): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};

export const clearMusState = (): void => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
};
