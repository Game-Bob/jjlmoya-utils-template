import { normalizeConfig, type SettlementConfig, type SettlementMap } from './logic';

const STORAGE_KEY = 'jjlmoya:rpg-settlement-map-generator';
export interface SettlementState {
  map: SettlementMap;
  customServices: string[];
}

function cleanCustomServices(values: unknown): string[] { return Array.isArray(values) ? [...new Set(values.filter((value): value is string => typeof value === 'string' && value.trim().length > 0).map((value) => value.trim().slice(0, 28)))] : []; }

function stateFromUnknown(value: unknown): SettlementState | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Partial<SettlementState> & Partial<SettlementMap>;
  if (isSettlementMap(candidate.map)) return { map: candidate.map, customServices: cleanCustomServices(candidate.customServices) };
  if (isSettlementMap(value)) return { map: value, customServices: [] };
  return null;
}

export function saveSettlement(map: SettlementMap, customServices: string[] = []): void { try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ map, customServices: cleanCustomServices(customServices) })); } catch {} }
export function loadSettlement(): SettlementState | null { try { const raw = window.localStorage.getItem(STORAGE_KEY); return raw ? stateFromUnknown(JSON.parse(raw)) : null; } catch { return null; } }
export function encodeShareState(map: SettlementMap, customServices: string[] = []): string { const state = { map, customServices: cleanCustomServices(customServices) }; return btoa(unescape(encodeURIComponent(JSON.stringify(state)))).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', ''); }
export function decodeShareState(value: string): SettlementState | null { try { const padded = value.replaceAll('-', '+').replaceAll('_', '/') + '='.repeat((4 - value.length % 4) % 4); return stateFromUnknown(JSON.parse(decodeURIComponent(escape(atob(padded))))); } catch { return null; } }
export function configFromMap(map: SettlementMap): SettlementConfig { return normalizeConfig({ ...map.config, services: [...map.config.services] }); }
export function isSettlementMap(value: unknown): value is SettlementMap { if (!value || typeof value !== 'object') return false; const candidate = value as Partial<SettlementMap>; return typeof candidate.width === 'number' && typeof candidate.height === 'number' && !!candidate.config && Array.isArray(candidate.buildings) && Array.isArray(candidate.paths) && Array.isArray(candidate.water); }
