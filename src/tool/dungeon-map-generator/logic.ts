export type DungeonStyle = 'dungeon' | 'cavern' | 'scifi';
export type Tile = 0 | 1 | 2;

export interface DungeonConfig {
  columns: number;
  rows: number;
  density: number;
  seed: string;
  style: DungeonStyle;
}

export interface Room {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Door {
  x: number;
  y: number;
  orientation: 'horizontal' | 'vertical';
}

export interface DungeonMap {
  config: DungeonConfig;
  tiles: Tile[][];
  rooms: Room[];
  doors: Door[];
  doorCount: number;
  floorCount: number;
}

type RandomSource = () => number;
type Point = { x: number; y: number };

export const DEFAULT_CONFIG: DungeonConfig = {
  columns: 36,
  rows: 26,
  density: 48,
  seed: 'ember-vault',
  style: 'dungeon',
};

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, Math.round(value)));

export function normalizeConfig(input: Partial<DungeonConfig>): DungeonConfig {
  const style = isStyle(input.style) ? input.style : DEFAULT_CONFIG.style;
  return {
    columns: clamp(input.columns ?? DEFAULT_CONFIG.columns, 16, 64),
    rows: clamp(input.rows ?? DEFAULT_CONFIG.rows, 14, 48),
    density: clamp(input.density ?? DEFAULT_CONFIG.density, 20, 75),
    seed: String(input.seed || DEFAULT_CONFIG.seed).slice(0, 48),
    style,
  };
}

function isStyle(value: unknown): value is DungeonStyle {
  return value === 'dungeon' || value === 'cavern' || value === 'scifi';
}

function hashSeed(seed: string): number {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRandom(seed: string): RandomSource {
  let state = hashSeed(seed);
  return () => {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomInt(random: RandomSource, min: number, max: number): number {
  return Math.floor(random() * (max - min + 1)) + min;
}

function createGrid(config: DungeonConfig): Tile[][] {
  return Array.from({ length: config.rows }, () =>
    Array.from({ length: config.columns }, () => 0 as Tile));
}

function roomTarget(config: DungeonConfig): number {
  const areaFactor = (config.columns * config.rows) / 150;
  return clamp(areaFactor * (config.density / 45), 4, 18);
}

function roomSize(config: DungeonConfig, random: RandomSource): Point {
  const wide = config.style === 'scifi';
  const width = randomInt(random, wide ? 5 : 4, wide ? 10 : 9);
  const height = randomInt(random, wide ? 4 : 4, wide ? 7 : 8);
  return { x: width, y: height };
}

function overlaps(room: Room, other: Room): boolean {
  return room.x - 1 < other.x + other.width
    && room.x + room.width + 1 > other.x
    && room.y - 1 < other.y + other.height
    && room.y + room.height + 1 > other.y;
}

function createRoom(config: DungeonConfig, random: RandomSource): Room {
  const size = roomSize(config, random);
  return {
    x: randomInt(random, 2, Math.max(2, config.columns - size.x - 2)),
    y: randomInt(random, 2, Math.max(2, config.rows - size.y - 2)),
    width: size.x,
    height: size.y,
  };
}

function placeRooms(config: DungeonConfig, random: RandomSource): Room[] {
  const rooms: Room[] = [];
  const attempts = roomTarget(config) * 18;
  for (let index = 0; index < attempts && rooms.length < roomTarget(config); index += 1) {
    const room = createRoom(config, random);
    if (!rooms.some((existing) => overlaps(room, existing))) rooms.push(room);
  }
  return rooms.length >= 2 ? rooms : fallbackRooms(config);
}

function fallbackRooms(config: DungeonConfig): Room[] {
  const width = Math.max(4, Math.floor(config.columns / 5));
  const height = Math.max(4, Math.floor(config.rows / 4));
  return [
    { x: 2, y: 2, width, height },
    { x: config.columns - width - 2, y: config.rows - height - 2, width, height },
  ];
}

function carveRoom(grid: Tile[][], room: Room, config: DungeonConfig, random: RandomSource): void {
  for (let y = room.y; y < room.y + room.height; y += 1) {
    for (let x = room.x; x < room.x + room.width; x += 1) {
      if (config.style !== 'cavern' || isCavernFloor(room, x, y, random)) grid[y]![x] = 1;
    }
  }
}

function isCavernFloor(room: Room, x: number, y: number, random: RandomSource): boolean {
  const nx = Math.abs((x + 0.5 - room.x) / room.width - 0.5) * 2;
  const ny = Math.abs((y + 0.5 - room.y) / room.height - 0.5) * 2;
  return nx + ny < 1.35 + random() * 0.35;
}

function center(room: Room): Point {
  return {
    x: Math.floor(room.x + room.width / 2),
    y: Math.floor(room.y + room.height / 2),
  };
}

function line(from: Point, to: Point): Point[] {
  const points: Point[] = [];
  const stepX = from.x <= to.x ? 1 : -1;
  const stepY = from.y <= to.y ? 1 : -1;
  for (let x = from.x; x !== to.x; x += stepX) points.push({ x, y: from.y });
  for (let y = from.y; y !== to.y; y += stepY) points.push({ x: to.x, y });
  points.push(to);
  return points;
}

function corridorPoints(from: Point, to: Point, random: RandomSource): Point[] {
  if (random() < 0.5) return line(from, to);
  return line({ x: from.y, y: from.x }, { x: to.y, y: to.x })
    .map((point) => ({ x: point.y, y: point.x }));
}

function carvePath(grid: Tile[][], points: Point[], style: DungeonStyle): Door[] {
  const original = points.map(({ x, y }) => grid[y]?.[x] === 1);
  const doors: Door[] = [];
  points.forEach((point, index) => {
    const entersWall = original[index - 1] === true && original[index] === false;
    const entersRoom = original[index] === false && original[index + 1] === true;
    const isDoor = entersWall || entersRoom;
    carvePoint(grid, point, style, isDoor);
    if (isDoor) doors.push(createDoor(point, points[index - 1], points[index + 1]));
  });
  return doors;
}

function createDoor(point: Point, previous?: Point, next?: Point): Door {
  const horizontalTravel = previous?.y === point.y || next?.y === point.y;
  return { ...point, orientation: horizontalTravel ? 'vertical' : 'horizontal' };
}

function carvePoint(grid: Tile[][], point: Point, style: DungeonStyle, isDoor: boolean): void {
  const row = grid[point.y];
  if (!row || row[point.x] === undefined) return;
  row[point.x] = isDoor ? 2 : 1;
  const nextRow = grid[point.y + 1];
  if (style === 'scifi' && nextRow?.[point.x] !== undefined) nextRow[point.x] = 1;
}

function isRoomCorner(point: Point, rooms: Room[]): boolean {
  return rooms.some((r) => (point.x === r.x || point.x === r.x + r.width - 1)
    && (point.y === r.y || point.y === r.y + r.height - 1));
}

function tileAt(grid: Tile[][], x: number, y: number): Tile {
  return grid[y]?.[x] ?? 0;
}

function isVerticalDoorFrame(grid: Tile[][], x: number, y: number): boolean {
  const isWallPair = tileAt(grid, x, y - 1) === 0 && tileAt(grid, x, y + 1) === 0;
  const isFloorPair = tileAt(grid, x - 1, y) !== 0 && tileAt(grid, x + 1, y) !== 0;
  return isWallPair && isFloorPair;
}

function isHorizontalDoorFrame(grid: Tile[][], x: number, y: number): boolean {
  const isWallPair = tileAt(grid, x - 1, y) === 0 && tileAt(grid, x + 1, y) === 0;
  const isFloorPair = tileAt(grid, x, y - 1) !== 0 && tileAt(grid, x, y + 1) !== 0;
  return isWallPair && isFloorPair;
}

function hasDoorWallFrame(grid: Tile[][], point: Point): boolean {
  return isVerticalDoorFrame(grid, point.x, point.y) || isHorizontalDoorFrame(grid, point.x, point.y);
}

function filterValidDoors(grid: Tile[][], rooms: Room[], candidateDoors: Door[]): Door[] {
  const validDoors: Door[] = [];
  for (const door of uniqueDoors(candidateDoors)) {
    if (isRoomCorner(door, rooms) || !hasDoorWallFrame(grid, door)) {
      if (grid[door.y]?.[door.x] !== undefined) grid[door.y]![door.x] = 1;
    } else {
      validDoors.push(door);
    }
  }
  return validDoors;
}

function connectRooms(grid: Tile[][], rooms: Room[], config: DungeonConfig, random: RandomSource): Door[] {
  const ordered = [...rooms].sort((a, b) => center(a).x - center(b).x);
  const candidateDoors: Door[] = [];
  for (let index = 1; index < ordered.length; index += 1) {
    const from = center(ordered[index - 1]!);
    const to = center(ordered[index]!);
    candidateDoors.push(...carvePath(grid, corridorPoints(from, to, random), config.style));
  }
  return filterValidDoors(grid, rooms, candidateDoors);
}

function uniqueDoors(doors: Door[]): Door[] {
  const seen = new Set<string>();
  return doors.filter((door) => {
    const key = `${door.x},${door.y}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function countTiles(tiles: Tile[][], target: Tile): number {
  return tiles.reduce((sum, row) => sum + row.filter((tile) => tile === target).length, 0);
}

export function generateDungeon(input: Partial<DungeonConfig>): DungeonMap {
  const config = normalizeConfig(input);
  const random = createRandom(`${config.seed}:${config.style}:${config.columns}x${config.rows}`);
  const tiles = createGrid(config);
  const rooms = placeRooms(config, random);
  rooms.forEach((room) => carveRoom(tiles, room, config, random));
  const doors = connectRooms(tiles, rooms, config, random);
  return { config, tiles, rooms, doors, doorCount: doors.length, floorCount: countTiles(tiles, 1) + countTiles(tiles, 2) };
}

export function encodeConfig(config: DungeonConfig): string {
  return JSON.stringify(normalizeConfig(config));
}

export function decodeConfig(value: string): DungeonConfig | undefined {
  try { return normalizeConfig(JSON.parse(value) as Partial<DungeonConfig>); } catch { return undefined; }
}
