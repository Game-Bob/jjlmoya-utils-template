export type FrameShape = 'circle' | 'square' | 'hexagon' | 'octagon' | 'star' | 'diamond' | 'ticket' | 'cloud' | 'scallop';

export interface FramePreset {
  id: string;
  name: string;
  shortName: string;
  description: string;
  shape: FrameShape;
  accent: string;
}

export type TextAlign = 'left' | 'center' | 'right';

export interface TextLayer {
  id: string;
  text: string;
  x: number;
  y: number;
  size: number;
  align: TextAlign;
}

export interface TokenStampState {
  markerName?: string;
  frameId: string;
  background: string;
  border: string;
  borderWidth: number;
  borderOpacity: number;
  overlay: string;
  overlayOpacity: number;
  imageSrc: string | null;
  imageName: string;
  imageX: number;
  imageY: number;
  imageZoom: number;
  scale: number;
  textColor: string;
  texts: TextLayer[];
  selectedTextId: string | null;
}

export interface FrameGeometry {
  kind: 'circle' | 'polygon';
  points?: Array<{ x: number; y: number }>;
}

export interface TokenStampStatus {
  tone: 'ready' | 'attention';
  message: string;
}

export interface SavedMarker {
  id: string;
  name: string;
  updatedAt: number;
  state: TokenStampState;
}

export interface TokenPalette {
  background: string;
  border: string;
  text: string;
  overlay: string;
}
