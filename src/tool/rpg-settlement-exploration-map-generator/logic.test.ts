import { describe, expect, it } from 'vitest';
import { addBuilding, addPath, addWater, DEFAULT_CONFIG, eraseAt, generateSettlement, homeRange, normalizeConfig, settlementPreset } from './logic';

describe('settlement map logic', () => {
  it('rebuilds the same map from the same setup', () => {
    expect(generateSettlement(DEFAULT_CONFIG)).toEqual(generateSettlement(DEFAULT_CONFIG));
  });

  it('normalizes size dependent home ranges and invalid values', () => {
    const config = normalizeConfig({ size: 'hamlet', homes: 100, environment: 'unknown' as never, services: ['tavern', 'tavern', 'invalid' as never] });
    expect(config.homes).toBe(18);
    expect(config.environment).toBe('forest');
    expect(config.services).toEqual(['tavern', 'invalid']);
  });

  it('supports direct map edits', () => {
    const map = generateSettlement({ ...DEFAULT_CONFIG, homes: 10 });
    const withBuilding = addBuilding(map, { x: 1, y: 1 }, 'market');
    const withPath = addPath(withBuilding, { x: 4, y: 4 });
    const withWater = addWater(withPath, { x: 8, y: 8 });
    const erased = eraseAt(withWater, { x: 8, y: 8 });
    expect(withBuilding.buildings.length).toBeGreaterThanOrEqual(map.buildings.length);
    expect(withPath.paths.length).toBeGreaterThan(withBuilding.paths.length - 1);
    expect(erased.water).not.toContainEqual({ x: 8, y: 8 });
  });

  it('supports small settlements and connects every home to the plaza', () => {
    const map = generateSettlement({ ...DEFAULT_CONFIG, size: 'hamlet', homes: 3 });
    expect(homeRange('hamlet').min).toBe(3);
    expect(map.buildings).toHaveLength(3);
    expect(map.paths).toHaveLength(map.buildings.length);
    map.paths.forEach((path) => expect(path.points.at(-1)).toEqual({ x: map.plaza.x + 3, y: map.plaza.y + 2 }));
  });

  it('changes the urban preset when the footprint changes', () => {
    expect(settlementPreset('hamlet')).toEqual({ homes: 6, services: ['tavern', 'stable'] });
    expect(settlementPreset('town').homes).toBeGreaterThan(settlementPreset('village').homes);
  });

  it('uses the seed to choose a varied pattern within each settlement type', () => {
    const first = generateSettlement({ ...DEFAULT_CONFIG, size: 'town', seed: 'Oak Mere' });
    const second = generateSettlement({ ...DEFAULT_CONFIG, size: 'town', seed: 'Red Cairn' });
    expect(first.buildings.map(({ x, y }) => `${x},${y}`)).not.toEqual(second.buildings.map(({ x, y }) => `${x},${y}`));
  });

  it('stores the visual settlement character in the generated map', () => {
    const map = generateSettlement({ ...DEFAULT_CONFIG, style: 'stone' });
    expect(map.config.style).toBe('stone');
  });

  it('turns a painted water cell into part of the terrain', () => {
    const map = generateSettlement({ ...DEFAULT_CONFIG, homes: 3, size: 'hamlet' });
    const target = map.buildings[0]!;
    const painted = addWater(map, { x: target.x, y: target.y });
    expect(painted.water).toContainEqual({ x: target.x, y: target.y });
    expect(painted.buildings).not.toContainEqual(target);
  });

  it('keeps roads finite when a river crosses the whole map', () => {
    const map = generateSettlement({ ...DEFAULT_CONFIG, environment: 'river', size: 'town', homes: 24 });
    expect(map.water.length).toBeGreaterThan(0);
    expect(map.paths).toHaveLength(map.buildings.length);
    expect(Math.max(...map.paths.map((path) => path.points.length))).toBeLessThan(map.width + map.height);
  });
});
