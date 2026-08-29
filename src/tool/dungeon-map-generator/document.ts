import {
  normalizeConfig,
  type Door,
  type DungeonConfig,
  type DungeonMap,
  type Tile,
} from './logic';

export interface DungeonEdit {
  x: number;
  y: number;
  tile: Tile;
}

export interface DungeonDocument {
  version: 1;
  config: DungeonConfig;
  edits: DungeonEdit[];
}

export function editDungeonTile(map: DungeonMap, x: number, y: number, tile: Tile): DungeonMap {
  if (!map.tiles[y] || map.tiles[y]![x] === undefined) return map;
  const tiles = map.tiles.map((row) => [...row]);
  tiles[y]![x] = tile;
  const doors = map.doors.filter((door) => door.x !== x || door.y !== y);
  if (tile === 2) doors.push({ x, y, orientation: inferDoorOrientation(tiles, x, y) });
  return createEditedMap(map, tiles, doors);
}

function createEditedMap(map: DungeonMap, tiles: Tile[][], doors: Door[]): DungeonMap {
  return {
    ...map,
    tiles,
    doors,
    doorCount: doors.length,
    floorCount: tiles.flat().filter((tile) => tile !== 0).length,
  };
}

function inferDoorOrientation(tiles: Tile[][], x: number, y: number): Door['orientation'] {
  const horizontalTravel = tiles[y]?.[x - 1] !== 0 && tiles[y]?.[x + 1] !== 0;
  return horizontalTravel ? 'vertical' : 'horizontal';
}

export function applyDungeonEdits(map: DungeonMap, edits: DungeonEdit[]): DungeonMap {
  return edits.reduce((current, edit) => editDungeonTile(current, edit.x, edit.y, edit.tile), map);
}

export function encodeDocument(document: DungeonDocument): string {
  return JSON.stringify({ version: 1, config: normalizeConfig(document.config), edits: document.edits });
}

export function decodeDocument(value: string): DungeonDocument | undefined {
  try {
    const parsed = JSON.parse(value) as Partial<DungeonDocument>;
    if (!parsed.config) return undefined;
    return {
      version: 1,
      config: normalizeConfig(parsed.config),
      edits: Array.isArray(parsed.edits) ? parsed.edits.filter(isDungeonEdit) : [],
    };
  } catch {
    return undefined;
  }
}

function isDungeonEdit(value: unknown): value is DungeonEdit {
  if (!value || typeof value !== 'object') return false;
  const edit = value as Partial<DungeonEdit>;
  return Number.isInteger(edit.x) && Number.isInteger(edit.y)
    && (edit.tile === 0 || edit.tile === 1 || edit.tile === 2);
}
