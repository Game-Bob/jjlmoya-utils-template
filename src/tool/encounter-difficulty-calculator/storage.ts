import type { EncounterSettings } from './logic';

const STORAGE_KEY = 'jjlmoya-encounter-difficulty-settings-v1';

function isSettings(value: unknown): value is EncounterSettings {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return ['partyLevel', 'partySize', 'monsterCr', 'monsterCount'].every((key) => typeof candidate[key] === 'number');
}

export function readEncounterSettings(): EncounterSettings | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const value: unknown = JSON.parse(stored);
    return isSettings(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeEncounterSettings(settings: EncounterSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}
