import type { FrameGeometry, FramePreset, TextLayer, TokenPalette, TokenStampState, TokenStampStatus } from './types';

export const FRAME_PRESETS: FramePreset[] = [
  { id: 'ember-ring', name: 'Ember ring', shortName: 'Ring', description: 'A warm double ring for classic character tokens.', shape: 'circle', accent: '#d89555' },
  { id: 'parchment-square', name: 'Parchment square', shortName: 'Square', description: 'A clean square cut for maps, cards, and item art.', shape: 'square', accent: '#c6a875' },
  { id: 'hex-warden', name: 'Hex warden', shortName: 'Hex', description: 'A six sided badge with a tactical silhouette.', shape: 'hexagon', accent: '#89b9ae' },
  { id: 'octagon-steel', name: 'Octagon steel', shortName: 'Octagon', description: 'A hard edged frame for monsters and machines.', shape: 'octagon', accent: '#a9b6c4' },
  { id: 'star-forge', name: 'Star forge', shortName: 'Star', description: 'A bright eight point emblem for heroes and relics.', shape: 'star', accent: '#e0b35e' },
  { id: 'diamond-sigil', name: 'Diamond sigil', shortName: 'Diamond', description: 'A turned frame that reads like a spell seal.', shape: 'diamond', accent: '#b48bd0' },
  { id: 'ticket-relic', name: 'Ticket relic', shortName: 'Ticket', description: 'A notched frame for quests, clues, and locations.', shape: 'ticket', accent: '#d17f69' },
  { id: 'cloud-echo', name: 'Cloud echo', shortName: 'Cloud', description: 'A soft irregular edge for spirits and fey creatures.', shape: 'cloud', accent: '#84b9ca' },
  { id: 'scallop-crown', name: 'Scallop crown', shortName: 'Scallop', description: 'A ceremonial edge for bosses and named allies.', shape: 'scallop', accent: '#d4a4b9' },
];

export const DEFAULT_FRAME_ID = FRAME_PRESETS[0]!.id;

export const COLOR_PALETTES: TokenPalette[] = [
  { background: '#1d2430', border: '#d89555', text: '#fff4d6', overlay: '#e05b4f' },
  { background: '#182b2a', border: '#80b8a5', text: '#f5f1dc', overlay: '#d26b5b' },
  { background: '#29233a', border: '#c49ad7', text: '#fff1ca', overlay: '#6e91ca' },
  { background: '#33251e', border: '#d4a45f', text: '#fff8e9', overlay: '#8f574c' },
  { background: '#202c3d', border: '#86a9d3', text: '#f8f0dd', overlay: '#9c668c' },
  { background: '#243329', border: '#c1b36a', text: '#fffbe3', overlay: '#b86a4e' },
];

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function createDefaultState(): TokenStampState {
  return {
    markerName: '',
    frameId: DEFAULT_FRAME_ID,
    background: '#1d2430',
    border: '#d89555',
    borderWidth: 16,
    borderOpacity: 1,
    overlay: '#e05b4f',
    overlayOpacity: 0,
    imageSrc: null,
    imageName: '',
    imageX: 0,
    imageY: 0,
    imageZoom: 1,
    scale: 1,
    textColor: '#fff4d6',
    texts: [],
    selectedTextId: null,
  };
}

export function getFramePreset(frameId: string): FramePreset {
  return FRAME_PRESETS.find((frame) => frame.id === frameId) ?? FRAME_PRESETS[0]!;
}

export function getRandomPalette(): TokenPalette {
  return COLOR_PALETTES[Math.floor(Math.random() * COLOR_PALETTES.length)]!;
}

function polygonGeometry(sides: number, rotation: number): FrameGeometry {
  const points = Array.from({ length: sides }, (_, index) => {
    const angle = rotation + (Math.PI * 2 * index) / sides;
    return { x: 0.5 + Math.cos(angle) * 0.45, y: 0.5 + Math.sin(angle) * 0.45 };
  });
  return { kind: 'polygon', points };
}

function starGeometry(): FrameGeometry {
  const points = Array.from({ length: 16 }, (_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / 16;
    const radius = index % 2 === 0 ? 0.45 : 0.25;
    return { x: 0.5 + Math.cos(angle) * radius, y: 0.5 + Math.sin(angle) * radius };
  });
  return { kind: 'polygon', points };
}

function ticketGeometry(): FrameGeometry {
  return { kind: 'polygon', points: [
    { x: 0.24, y: 0.08 }, { x: 0.76, y: 0.08 }, { x: 0.82, y: 0.14 },
    { x: 0.82, y: 0.86 }, { x: 0.76, y: 0.92 }, { x: 0.24, y: 0.92 },
    { x: 0.18, y: 0.86 }, { x: 0.18, y: 0.14 },
  ] };
}

function scallopGeometry(): FrameGeometry {
  const points = Array.from({ length: 24 }, (_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / 24;
    const radius = index % 2 === 0 ? 0.45 : 0.38;
    return { x: 0.5 + Math.cos(angle) * radius, y: 0.5 + Math.sin(angle) * radius };
  });
  return { kind: 'polygon', points };
}

const FRAME_GEOMETRIES: Record<FramePreset['shape'], () => FrameGeometry> = {
  circle: () => ({ kind: 'circle' }),
  square: () => polygonGeometry(4, Math.PI / 4),
  hexagon: () => polygonGeometry(6, -Math.PI / 2),
  octagon: () => polygonGeometry(8, Math.PI / 8),
  star: starGeometry,
  diamond: () => polygonGeometry(4, 0),
  ticket: ticketGeometry,
  cloud: () => ({ kind: 'circle' }),
  scallop: scallopGeometry,
};

export function getFrameGeometry(shape: FramePreset['shape']): FrameGeometry {
  return FRAME_GEOMETRIES[shape]();
}

export function updateTextLayer(texts: TextLayer[], selectedTextId: string | null, update: Partial<TextLayer>): TextLayer[] {
  return texts.map((text) => text.id === selectedTextId ? { ...text, ...update } : text);
}

export function createTextLayer(index: number): TextLayer {
  return { id: `text-${Date.now()}-${index}`, text: 'New label', x: 0.5, y: 0.8, size: 54, align: 'center' };
}

export function getStatus(state: TokenStampState, ui: { statusReady: string; statusAddImage: string; statusAddText: string }): TokenStampStatus {
  if (!state.imageSrc) return { tone: 'attention', message: ui.statusAddImage };
  if (state.texts.some((text) => text.text.trim().length === 0)) return { tone: 'attention', message: ui.statusAddText };
  return { tone: 'ready', message: ui.statusReady };
}

export function hitTestText(text: TextLayer, point: { x: number; y: number }): boolean {
  const width = Math.max(0.12, text.text.length * text.size / 900);
  return Math.abs(point.x - text.x) <= width / 2 && Math.abs(point.y - text.y) <= text.size / 1100;
}
