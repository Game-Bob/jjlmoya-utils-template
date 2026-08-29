export type Environment = 'forest' | 'plains' | 'coast' | 'river' | 'mountain';
export type SettlementSize = 'hamlet' | 'village' | 'town';
export type SettlementStyle = 'timber' | 'stone' | 'coastal' | 'highland' | 'medieval' | 'edo' | 'sahelian';
export type ServiceType = string;
export type EditTool = 'select' | 'building' | 'path' | 'water' | 'tree' | 'erase';

export interface SettlementConfig { seed: string; environment: Environment; size: SettlementSize; style: SettlementStyle; homes: number; services: ServiceType[]; }
export interface Point { x: number; y: number }
export interface Building { id: string; x: number; y: number; width: number; height: number; service: ServiceType | null }
export interface PathRoute { points: Point[] }
export interface Plaza { x: number; y: number; width: number; height: number }

export interface SettlementMap {
  config: SettlementConfig;
  width: number;
  height: number;
  plaza: Plaza;
  buildings: Building[];
  paths: PathRoute[];
  water: Point[];
  wild: Point[];
}

type RandomSource = () => number;
export interface HomeRange { min: number; max: number }
export interface SettlementPreset { homes: number; services: ServiceType[] }

export const DEFAULT_CONFIG: SettlementConfig = { seed: 'Willow Mere Crossing', environment: 'forest', size: 'village', style: 'medieval', homes: 14, services: ['tavern', 'smithy', 'temple', 'market'] };
const SIZE_PRESETS: Record<SettlementSize, SettlementPreset> = { hamlet: { homes: 6, services: ['tavern', 'stable'] }, village: { homes: 14, services: ['tavern', 'smithy', 'temple', 'market'] }, town: { homes: 24, services: ['tavern', 'smithy', 'temple', 'market', 'stable', 'hall'] } };
const DIMENSIONS: Record<SettlementSize, { width: number; height: number }> = { hamlet: { width: 34, height: 24 }, village: { width: 42, height: 28 }, town: { width: 52, height: 34 } };
const HOME_RANGES: Record<SettlementSize, HomeRange> = { hamlet: { min: 3, max: 18 }, village: { min: 4, max: 28 }, town: { min: 6, max: 42 } };

export function homeRange(size: SettlementSize): HomeRange { return HOME_RANGES[size]; }
export function settlementPreset(size: SettlementSize): SettlementPreset { return { homes: SIZE_PRESETS[size].homes, services: [...SIZE_PRESETS[size].services] }; }

const clamp = (val: number, min: number, max: number): number => Math.min(max, Math.max(min, Math.round(val)));
const isEnv = (val: unknown): val is Environment => ['forest', 'plains', 'coast', 'river', 'mountain'].includes(String(val));
const isSize = (val: unknown): val is SettlementSize => ['hamlet', 'village', 'town'].includes(String(val));
const isStyle = (val: unknown): val is SettlementStyle => ['timber', 'stone', 'coastal', 'highland', 'medieval', 'edo', 'sahelian'].includes(String(val));

export function normalizeConfig(input: Partial<SettlementConfig>): SettlementConfig {
  const size = isSize(input.size) ? input.size : DEFAULT_CONFIG.size;
  const range = HOME_RANGES[size];
  const services = Array.isArray(input.services) ? input.services.filter((v): v is string => typeof v === 'string' && v.trim().length > 0).map((v) => v.trim()).slice(0, 32) : DEFAULT_CONFIG.services;
  return { seed: String(input.seed || DEFAULT_CONFIG.seed).slice(0, 48), environment: isEnv(input.environment) ? input.environment : DEFAULT_CONFIG.environment, size, style: isStyle(input.style) ? input.style : DEFAULT_CONFIG.style, homes: clamp(input.homes ?? DEFAULT_CONFIG.homes, range.min, range.max), services: [...new Set(services)] };
}

function createRandom(seed: string): RandomSource {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  let state = h >>> 0;
  return () => { state += 0x6d2b79f5; let v = state; v = Math.imul(v ^ (v >>> 15), v | 1); v ^= v + Math.imul(v ^ (v >>> 7), v | 61); return ((v ^ (v >>> 14)) >>> 0) / 4294967296; };
}

const randomInt = (rnd: RandomSource, min: number, max: number): number => Math.floor(rnd() * (max - min + 1)) + min;

function routeBetween(from: Point, to: Point): Point[] {
  const points: Point[] = [{ ...from }];
  let cur = { ...from };
  while (cur.x !== to.x || cur.y !== to.y) { cur = cur.x !== to.x ? { x: cur.x + Math.sign(to.x - cur.x), y: cur.y } : { x: cur.x, y: cur.y + Math.sign(to.y - cur.y) }; points.push({ ...cur }); }
  return points;
}

function createWater(env: Environment, w: number, h: number, rnd: RandomSource): Point[] {
  const res: Point[] = [];
  if (env === 'coast') {
    const edge = rnd() < 0.5 ? w - 1 : 0;
    for (let y = 0; y < h; y += 1) { const d = 3 + Math.floor(rnd() * 3); for (let o = 0; o < d; o += 1) res.push({ x: edge === 0 ? o : w - 1 - o, y }); }
  }
  if (env === 'river') {
    let x = Math.floor(w * (0.35 + rnd() * 0.3));
    for (let y = 0; y < h; y += 1) { x = clamp(x + randomInt(rnd, -1, 1), 2, w - 3); res.push({ x, y }, { x: x + 1, y }); }
  }
  return res;
}

function buildingCells(buildings: Building[], plaza: Plaza): Set<string> {
  const cells = new Set<string>();
  buildings.forEach((b) => { for (let y = b.y - 2; y < b.y + b.height + 2; y += 1) for (let x = b.x - 2; x < b.x + b.width + 2; x += 1) cells.add(`${x},${y}`); });
  for (let y = plaza.y - 2; y < plaza.y + plaza.height + 2; y += 1) for (let x = plaza.x - 2; x < plaza.x + plaza.width + 2; x += 1) cells.add(`${x},${y}`);
  return cells;
}

function getWildChance(env: Environment): number {
  if (env === 'forest') return 0.12;
  if (env === 'mountain') return 0.09;
  return 0.07;
}

interface WildContext { config: SettlementConfig; dimensions: { width: number; height: number }; random: RandomSource; water: Set<string>; buildings: Building[]; plaza: Plaza }

function createWild(ctx: WildContext): Point[] {
  const res: Point[] = [];
  const chance = getWildChance(ctx.config.environment);
  const blocked = buildingCells(ctx.buildings, ctx.plaza);
  const seen = new Set<string>();
  const attempts = Math.floor(ctx.dimensions.width * ctx.dimensions.height * chance * 3);
  for (let i = 0; i < attempts && res.length < Math.floor(ctx.dimensions.width * ctx.dimensions.height * chance); i += 1) {
    const pt = { x: randomInt(ctx.random, 1, ctx.dimensions.width - 2), y: randomInt(ctx.random, 1, ctx.dimensions.height - 2) };
    const key = `${pt.x},${pt.y}`;
    if (!ctx.water.has(key) && !blocked.has(key) && !seen.has(key)) { seen.add(key); res.push(pt); }
  }
  return res;
}

const overlaps = (b: Building, o: Building): boolean => b.x - 1 < o.x + o.width && b.x + b.width + 1 > o.x && b.y - 1 < o.y + o.height && b.y + b.height + 1 > o.y;
const inPlaza = (b: Building, p: Plaza): boolean => b.x < p.x + p.width && b.x + b.width > p.x && b.y < p.y + p.height && b.y + b.height > p.y;
const plazaCenter = (p: Plaza): Point => ({ x: p.x + Math.floor(p.width / 2), y: p.y + Math.floor(p.height / 2) });
const buildingCenter = (b: Building): Point => ({ x: b.x + Math.floor(b.width / 2), y: b.y + Math.floor(b.height / 2) });

interface GridContext { spots: Point[]; size: SettlementSize; dimensions: { width: number; height: number }; plaza: Plaza; homes: number; variant: number }

function calcStagger(size: SettlementSize, variant: number, row: number, col: number): number {
  if (size === 'town') return variant === 1 ? row % 2 : 0;
  if (variant === 2) return col % 2;
  return row % 2;
}

interface LayoutMetrics { columns: number; xStep: number; yStep: number; startX: number; startY: number; xBias: number; yBias: number }

function getLayoutMetrics(ctx: GridContext): LayoutMetrics {
  let columns = 7;
  let xStep = 5;
  let yStep = 4;
  if (ctx.size === 'hamlet') { columns = 4; xStep = 6; yStep = 7; }
  else if (ctx.size === 'village') { columns = 6; xStep = 5; yStep = 5; }

  const rows = Math.ceil(Math.max(ctx.homes, columns) / columns);
  const startX = Math.max(2, Math.floor(plazaCenter(ctx.plaza).x - ((columns - 1) * xStep + 4) / 2));
  const startY = Math.max(2, Math.floor(plazaCenter(ctx.plaza).y - ((rows - 1) * yStep + 3) / 2));
  const xBias = [0, 1, -1][ctx.variant % 3]!;
  const yBias = [0, -1, 1][(ctx.variant + 1) % 3]!;
  return { columns, xStep, yStep, startX, startY, xBias, yBias };
}

function addGridSpots(ctx: GridContext): void {
  const m = getLayoutMetrics(ctx);
  const rows = Math.ceil(Math.max(ctx.homes, m.columns) / m.columns);
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < m.columns; c += 1) {
      const stagger = calcStagger(ctx.size, ctx.variant, r, c);
      const extraY = ctx.variant === 2 ? c % 2 : m.yBias;
      const spot = { x: m.startX + c * m.xStep + stagger + m.xBias, y: m.startY + r * m.yStep + extraY };
      if (spot.x + 4 < ctx.dimensions.width - 1 && spot.y + 3 < ctx.dimensions.height - 1) ctx.spots.push(spot);
    }
  }
}

function getHamletAnchors(plaza: Plaza, variant: number): Point[] {
  const raw = [{ x: plaza.x - 5, y: plaza.y - 4 }, { x: plaza.x + plaza.width + 1, y: plaza.y - 4 }, { x: plaza.x - 5, y: plaza.y + plaza.height + 1 }, { x: plaza.x + plaza.width + 1, y: plaza.y + plaza.height + 1 }];
  return raw.map((_, i) => raw[(i + variant) % raw.length]!);
}

function candidateSpots(ctx: Omit<GridContext, 'spots'>): Point[] {
  const spots: Point[] = [];
  if (ctx.size === 'hamlet') spots.push(...getHamletAnchors(ctx.plaza, ctx.variant));
  addGridSpots({ ...ctx, spots });
  return spots;
}

function buildingPattern(style: SettlementStyle, index: number, variant: number): { width: number; height: number } {
  const patterns: Record<SettlementStyle, { width: number; height: number }[]> = {
    timber: [{ width: 3, height: 2 }, { width: 4, height: 2 }, { width: 3, height: 3 }, { width: 2, height: 2 }],
    stone: [{ width: 4, height: 2 }, { width: 3, height: 3 }, { width: 4, height: 3 }, { width: 3, height: 2 }],
    coastal: [{ width: 4, height: 2 }, { width: 3, height: 2 }, { width: 4, height: 3 }, { width: 2, height: 2 }],
    highland: [{ width: 3, height: 3 }, { width: 3, height: 2 }, { width: 2, height: 3 }, { width: 4, height: 2 }],
    medieval: [{ width: 4, height: 2 }, { width: 3, height: 3 }, { width: 4, height: 3 }, { width: 3, height: 2 }],
    edo: [{ width: 4, height: 2 }, { width: 3, height: 2 }, { width: 4, height: 2 }, { width: 3, height: 3 }],
    sahelian: [{ width: 3, height: 2 }, { width: 4, height: 2 }, { width: 3, height: 3 }, { width: 4, height: 2 }],
  };
  return patterns[style][(index + variant) % patterns[style].length]!;
}

function servicePlacement(service: ServiceType, rnd: RandomSource): 'center' | 'edge' | 'mixed' {
  if (/hall|town|ayunt/i.test(service)) return rnd() < 0.82 ? 'center' : 'mixed';
  if (/stable|smith|forge|establ/i.test(service)) return rnd() < 0.8 ? 'edge' : 'mixed';
  if (/temple|market|tavern/i.test(service)) return rnd() < 0.7 ? 'center' : 'mixed';
  return 'mixed';
}

function servicePriority(service: ServiceType): number {
  if (/hall|town|ayunt/i.test(service)) return 0;
  if (/temple|market|tavern/i.test(service)) return 1;
  if (/stable|smith|forge|establ/i.test(service)) return 2;
  return 3;
}

interface ScoreContext { building: Building; placement: 'center' | 'edge' | 'mixed'; dim: { width: number; height: number }; plaza: Plaza; rnd: RandomSource }

function calcPreference(placement: 'center' | 'edge' | 'mixed', centerDist: number, edgeDist: number): number {
  if (placement === 'edge') return edgeDist;
  if (placement === 'center') return centerDist;
  return centerDist * 0.5 + edgeDist * 0.5;
}

function serviceScore(ctx: ScoreContext): number {
  const c = buildingCenter(ctx.building);
  const centerDist = Math.hypot(c.x - plazaCenter(ctx.plaza).x, c.y - plazaCenter(ctx.plaza).y) / Math.hypot(ctx.dim.width, ctx.dim.height);
  const edgeDist = Math.min(c.x, c.y, ctx.dim.width - c.x, ctx.dim.height - c.y) / Math.min(ctx.dim.width, ctx.dim.height);
  return calcPreference(ctx.placement, centerDist, edgeDist) + ctx.rnd() * 0.22;
}

interface AssignContext { config: SettlementConfig; buildings: Building[]; dimensions: { width: number; height: number }; plaza: Plaza; variant: number }

function assignServices(ctx: AssignContext): Building[] {
  const rnd = createRandom(`${ctx.config.seed}:${ctx.config.size}:${ctx.config.style}:services:${ctx.variant}`);
  const available = [...ctx.buildings];
  const services = [...ctx.config.services].sort((a, b) => servicePriority(a) - servicePriority(b) || rnd() - 0.5);
  services.forEach((service) => {
    if (!available.length) return;
    const placement = servicePlacement(service, rnd);
    const ranked = available.map((building) => ({ building, score: serviceScore({ building, placement, dim: ctx.dimensions, plaza: ctx.plaza, rnd }) })).sort((a, b) => a.score - b.score);
    const selected = ranked[0]!.building;
    selected.service = service;
    available.splice(available.indexOf(selected), 1);
  });
  return ctx.buildings;
}

function placeBuildings(config: SettlementConfig, placement: { dimensions: { width: number; height: number }; plaza: Plaza; water: Set<string> }, variant: number): Building[] {
  const buildings: Building[] = [];
  const { dimensions, plaza, water } = placement;
  const spots = candidateSpots({ size: config.size, dimensions, plaza, homes: config.homes, variant });
  for (const [i, spot] of spots.entries()) {
    if (buildings.length >= config.homes) break;
    const pat = buildingPattern(config.style, i, variant);
    const b: Building = { id: `building-${buildings.length + 1}`, x: spot.x, y: spot.y, width: pat.width, height: pat.height, service: null };
    const occupied = Array.from({ length: b.height }, (_, r) => Array.from({ length: b.width }, (_, c) => water.has(`${b.x + c},${b.y + r}`))).flat().some(Boolean);
    if (!occupied && !inPlaza(b, plaza) && !buildings.some((o) => overlaps(b, o))) buildings.push(b);
  }
  return assignServices({ config, buildings, dimensions, plaza, variant });
}

function createPaths(buildings: Building[], plaza: Plaza): PathRoute[] {
  const anchor = plazaCenter(plaza);
  return buildings.map((b) => ({ points: routeBetween(buildingCenter(b), anchor) }));
}

export function generateSettlement(input: Partial<SettlementConfig>): SettlementMap {
  const config = normalizeConfig(input);
  const dimensions = DIMENSIONS[config.size];
  const plaza: Plaza = { x: Math.floor(dimensions.width / 2) - 3, y: Math.floor(dimensions.height / 2) - 2, width: 6, height: 4 };
  const random = createRandom(config.seed);
  const layoutVariant = Math.floor(createRandom(`${config.seed}:${config.size}:${config.style}:layout`)() * 3);
  const water = createWater(config.environment, dimensions.width, dimensions.height, random);
  const waterSet = new Set(water.map((p) => `${p.x},${p.y}`));
  const buildings = placeBuildings(config, { dimensions, plaza, water: waterSet }, layoutVariant);
  return { config, width: dimensions.width, height: dimensions.height, plaza, buildings, paths: createPaths(buildings, plaza), water, wild: createWild({ config, dimensions, random, water: waterSet, buildings, plaza }) };
}

function getPlaza(map: SettlementMap): Plaza { return map.plaza ?? { x: Math.floor(map.width / 2) - 3, y: Math.floor(map.height / 2) - 2, width: 6, height: 4 }; }

export function addBuilding(map: SettlementMap, point: Point, service: ServiceType | null = null): SettlementMap {
  const b: Building = { id: `building-${map.buildings.length + 1}`, x: clamp(point.x, 1, map.width - 4), y: clamp(point.y, 1, map.height - 3), width: 3, height: 2, service };
  if (map.buildings.some((other) => overlaps(b, other)) || inPlaza(b, getPlaza(map))) return map;
  const buildings = [...map.buildings, b];
  return { ...map, buildings, paths: createPaths(buildings, getPlaza(map)) };
}

export function addPath(map: SettlementMap, point: Point): SettlementMap {
  const path = { points: [{ x: clamp(point.x, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) }, { x: clamp(point.x + 2, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) }] };
  return { ...map, paths: [...map.paths, path] };
}

export function addWater(map: SettlementMap, point: Point): SettlementMap {
  const waterPoint = { x: clamp(point.x, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) };
  const key = `${waterPoint.x},${waterPoint.y}`;
  if (map.water.some((item) => `${item.x},${item.y}` === key)) return map;
  const buildings = map.buildings.filter((b) => waterPoint.x < b.x || waterPoint.x >= b.x + b.width || waterPoint.y < b.y || waterPoint.y >= b.y + b.height);
  const wild = map.wild.filter((item) => item.x !== waterPoint.x || item.y !== waterPoint.y);
  const water = [...map.water, waterPoint];
  return { ...map, buildings, wild, water, paths: createPaths(buildings, getPlaza(map)) };
}

export function addTree(map: SettlementMap, point: Point): SettlementMap {
  const tree = { x: clamp(point.x, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) };
  if (map.wild.some((item) => item.x === tree.x && item.y === tree.y)) return map;
  return { ...map, wild: [...map.wild, tree] };
}

export function eraseAt(map: SettlementMap, point: Point): SettlementMap {
  const plaza = getPlaza(map);
  const buildings = map.buildings.filter((b) => point.x < b.x || point.x >= b.x + b.width || point.y < b.y || point.y >= b.y + b.height);
  const water = map.water.filter((item) => item.x !== point.x || item.y !== point.y);
  const paths = map.paths.filter((path) => !path.points.some((item) => item.x === point.x && item.y === point.y));
  const wild = map.wild.filter((item) => item.x !== point.x || item.y !== point.y);
  return { ...map, plaza, buildings, water, paths, wild };
}
