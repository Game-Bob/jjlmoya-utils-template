import type { SavedMarker, TokenStampState } from './types';

const STORAGE_KEY = 'jjlmoya-token-stamp-studio';
const LIBRARY_KEY = 'jjlmoya-token-stamp-library';
const ACTIVE_MARKER_KEY = 'jjlmoya-token-stamp-active-marker';

export function saveTokenState(state: TokenStampState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function loadTokenState(): TokenStampState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as TokenStampState : null;
  } catch {
    return null;
  }
}

export function clearTokenState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export function listSavedMarkers(): SavedMarker[] {
  try {
    const raw = localStorage.getItem(LIBRARY_KEY);
    const markers = raw ? JSON.parse(raw) as SavedMarker[] : [];
    return Array.isArray(markers) ? markers : [];
  } catch {
    return [];
  }
}

export function saveMarker(marker: SavedMarker): SavedMarker[] {
  const markers = [marker, ...listSavedMarkers().filter((item) => item.id !== marker.id)].slice(0, 24);
  try {
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(markers));
  } catch {}
  return markers;
}

export function deleteMarker(id: string): SavedMarker[] {
  const markers = listSavedMarkers().filter((marker) => marker.id !== id);
  try {
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(markers));
  } catch {}
  return markers;
}

export function saveActiveMarkerId(id: string): void {
  try {
    localStorage.setItem(ACTIVE_MARKER_KEY, id);
  } catch {}
}

export function loadActiveMarkerId(): string | null {
  try {
    return localStorage.getItem(ACTIVE_MARKER_KEY);
  } catch {
    return null;
  }
}
