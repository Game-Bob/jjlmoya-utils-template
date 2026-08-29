import type { Player } from '../types';

export function parseInputValue(el: HTMLInputElement | HTMLSelectElement | null, defaultValue: number): number {
  if (!el) return defaultValue;
  return parseInt(el.value) || defaultValue;
}

export function getUIValue(ui: Record<string, string>, key: string, fallback: string): string {
  return ui[key] || fallback;
}

export function isValidWriter(current: string, players: Player[]): boolean {
  return current === 'random' || current === 'preround' || players.some(p => p.id === current);
}

export function setWrapperDisplay(el: HTMLElement | null, show: boolean): void {
  if (el) el.style.display = show ? 'flex' : 'none';
}
