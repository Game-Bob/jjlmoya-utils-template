import type { DungeonMap, Tile } from './logic';

type Point = { x: number; y: number };

export function isDungeonConnected(map: DungeonMap): boolean {
  const start = findStart(map.tiles);
  if (!start) return false;
  const visited = visitFloor(map.tiles, start);
  return visited.size === map.floorCount;
}

function findStart(tiles: Tile[][]): Point | undefined {
  for (let y = 0; y < tiles.length; y += 1) {
    const x = tiles[y]!.findIndex((tile) => tile !== 0);
    if (x >= 0) return { x, y };
  }
  return undefined;
}

function visitFloor(tiles: Tile[][], start: Point): Set<string> {
  const visited = new Set<string>();
  const queue = [start];
  while (queue.length > 0) {
    const point = queue.shift()!;
    const key = `${point.x},${point.y}`;
    if (visited.has(key) || tiles[point.y]?.[point.x] === 0) continue;
    visited.add(key);
    queue.push(...neighbors(point));
  }
  return visited;
}

function neighbors(point: Point): Point[] {
  return [
    { x: point.x + 1, y: point.y },
    { x: point.x - 1, y: point.y },
    { x: point.x, y: point.y + 1 },
    { x: point.x, y: point.y - 1 },
  ];
}
