import { decodeDocument, encodeDocument, type DungeonDocument } from './document';

const STORAGE_KEY = 'jjlmoya:dungeon-map-generator:v1';

export function loadDocument(): DungeonDocument | undefined {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? decodeDocument(value) : undefined;
  } catch {
    return undefined;
  }
}

export function saveDocument(document: DungeonDocument): void {
  try {
    localStorage.setItem(STORAGE_KEY, encodeDocument(document));
  } catch {}
}
