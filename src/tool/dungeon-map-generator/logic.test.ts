import { describe, expect, it } from 'vitest';
import { decodeDocument, editDungeonTile, encodeDocument } from './document';
import {
  DEFAULT_CONFIG,
  decodeConfig,
  encodeConfig,
  generateDungeon,
  normalizeConfig,
} from './logic';
import { isDungeonConnected } from './validation';

describe('dungeon map generation', () => {
  it('returns the same layout for the same seed and configuration', () => {
    const first = generateDungeon(DEFAULT_CONFIG);
    const second = generateDungeon(DEFAULT_CONFIG);
    expect(second.tiles).toEqual(first.tiles);
    expect(second.rooms).toEqual(first.rooms);
  });

  it('changes the layout when the seed changes', () => {
    const first = generateDungeon({ ...DEFAULT_CONFIG, seed: 'amber' });
    const second = generateDungeon({ ...DEFAULT_CONFIG, seed: 'indigo' });
    expect(second.tiles).not.toEqual(first.tiles);
  });

  it.each(['dungeon', 'cavern', 'scifi'] as const)('creates a connected %s map', (style) => {
    const map = generateDungeon({ ...DEFAULT_CONFIG, style, seed: `connected-${style}` });
    expect(map.rooms.length).toBeGreaterThanOrEqual(2);
    expect(map.doorCount).toBeGreaterThan(0);
    expect(isDungeonConnected(map)).toBe(true);
    map.doors.forEach((door) => {
      const neighbors = [
        map.tiles[door.y]?.[door.x - 1],
        map.tiles[door.y]?.[door.x + 1],
        map.tiles[door.y - 1]?.[door.x],
        map.tiles[door.y + 1]?.[door.x],
      ].filter((tile) => tile !== undefined && tile !== 0);
      expect(neighbors.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('edits floor, wall, and oriented door cells', () => {
    let map = generateDungeon(DEFAULT_CONFIG);
    map = editDungeonTile(map, 0, 0, 1);
    expect(map.tiles[0]?.[0]).toBe(1);
    map = editDungeonTile(map, 1, 0, 2);
    expect(map.doors.some((door) => door.x === 1 && door.y === 0)).toBe(true);
    map = editDungeonTile(map, 1, 0, 0);
    expect(map.doors.some((door) => door.x === 1 && door.y === 0)).toBe(false);
  });

  it('honors the normalized grid dimensions', () => {
    const map = generateDungeon({ columns: 200, rows: 2, density: 120 });
    expect(map.tiles).toHaveLength(14);
    expect(map.tiles[0]).toHaveLength(64);
    expect(map.config.density).toBe(75);
  });

  it('falls back from invalid values', () => {
    const config = normalizeConfig({ style: 'unknown' as never, seed: '' });
    expect(config.style).toBe('dungeon');
    expect(config.seed).toBe(DEFAULT_CONFIG.seed);
  });

  it('round trips a shareable configuration', () => {
    const config = normalizeConfig({ seed: 'glass-keep', style: 'scifi', columns: 52 });
    expect(decodeConfig(encodeConfig(config))).toEqual(config);
    expect(decodeConfig('{not-json')).toBeUndefined();
  });

  it('round trips a document with manual edits', () => {
    const document = { version: 1 as const, config: DEFAULT_CONFIG, edits: [{ x: 2, y: 3, tile: 1 as const }] };
    expect(decodeDocument(encodeDocument(document))).toEqual(document);
  });
});
