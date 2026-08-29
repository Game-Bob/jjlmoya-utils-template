import { getFrameGeometry, getFramePreset } from './logic';
import type { FramePreset, SavedMarker, TextLayer, TokenStampState } from './types';

export function pointerToCanvas(canvas: HTMLCanvasElement, event: PointerEvent): { x: number; y: number } {
  const rect = canvas.getBoundingClientRect();
  return {
    x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
    y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
  };
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace('#', '');
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function drawGeometry(ctx: CanvasRenderingContext2D, frame: FramePreset, size: number, inset = 0): void {
  const geometry = getFrameGeometry(frame.shape);
  ctx.beginPath();
  if (geometry.kind === 'circle') {
    const radius = size * 0.45 - inset;
    ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
  } else {
    geometry.points?.forEach((point, index) => {
      const x = point.x * size;
      const y = point.y * size;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
  }
}

function drawPlaceholder(ctx: CanvasRenderingContext2D, size: number): void {
  ctx.fillStyle = '#273242';
  ctx.fillRect(size * 0.26, size * 0.28, size * 0.48, size * 0.44);
  ctx.strokeStyle = '#d89555';
  ctx.lineWidth = 5;
  ctx.strokeRect(size * 0.31, size * 0.33, size * 0.38, size * 0.34);
  ctx.fillStyle = '#fff4d6';
  ctx.font = '700 30px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('DROP', size / 2, size * 0.49);
  ctx.font = '500 17px Inter, sans-serif';
  ctx.fillStyle = '#b9c5d6';
  ctx.fillText('your character art', size / 2, size * 0.56);
}

function drawImage(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, state: TokenStampState, size: number): void {
  if (!image || !image.complete || image.naturalWidth === 0) {
    drawPlaceholder(ctx, size);
    return;
  }
  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const box = size * 0.9 * state.imageZoom;
  const width = sourceRatio >= 1 ? box : box * sourceRatio;
  const height = sourceRatio >= 1 ? box / sourceRatio : box;
  const x = (size - width) / 2 + state.imageX * size;
  const y = (size - height) / 2 + state.imageY * size;
  ctx.drawImage(image, x, y, width, height);
}

function drawTextLayers(ctx: CanvasRenderingContext2D, state: TokenStampState, size: number): void {
  state.texts.forEach((text) => {
    ctx.save();
    ctx.fillStyle = state.textColor;
    ctx.strokeStyle = 'rgba(17, 23, 32, 0.85)';
    ctx.lineWidth = Math.max(2, text.size / 16);
    ctx.font = `700 ${text.size}px Georgia, serif`;
    ctx.textAlign = text.align;
    ctx.textBaseline = 'middle';
    ctx.strokeText(text.text, text.x * size, text.y * size, size * 0.82);
    ctx.fillText(text.text, text.x * size, text.y * size, size * 0.82);
    ctx.restore();
  });
}

function drawFrame(ctx: CanvasRenderingContext2D, frame: FramePreset, state: TokenStampState, size: number): void {
  ctx.save();
  if (frame.shape === 'star') ctx.lineJoin = 'round';
  drawGeometry(ctx, frame, size, state.borderWidth * 0.65);
  ctx.strokeStyle = hexToRgba(state.border, state.borderOpacity * 0.38);
  ctx.lineWidth = state.borderWidth + 22;
  ctx.stroke();
  drawGeometry(ctx, frame, size, state.borderWidth * 0.65);
  ctx.strokeStyle = hexToRgba(state.border, state.borderOpacity);
  ctx.lineWidth = state.borderWidth;
  ctx.stroke();
  drawGeometry(ctx, frame, size, state.borderWidth * 0.92);
  ctx.strokeStyle = 'rgba(17, 23, 32, 0.45)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();
}

function drawFrameIcon(canvas: HTMLCanvasElement, frame: FramePreset, state: TokenStampState): void {
  const size = 96;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = state.background;
  ctx.fillRect(0, 0, size, size);
  drawFrame(ctx, frame, { ...state, borderWidth: 7 }, size);
}

export function drawTokenCanvas(canvas: HTMLCanvasElement, state: TokenStampState, image: HTMLImageElement | null): void {
  const size = 640;
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const frame = getFramePreset(state.frameId);
  ctx.clearRect(0, 0, size, size);
  ctx.save(); drawGeometry(ctx, frame, size); ctx.clip();
  ctx.fillStyle = state.background;
  ctx.fillRect(0, 0, size, size);
  drawImage(ctx, image, state, size);
  if (state.overlayOpacity > 0) {
    ctx.fillStyle = hexToRgba(state.overlay, state.overlayOpacity); ctx.fillRect(0, 0, size, size);
  }
  ctx.restore(); drawFrame(ctx, frame, state, size);
  drawTextLayers(ctx, state, size);
}

export function renderFrameGallery(container: HTMLElement, frames: FramePreset[], selectedId: string): void {
  container.replaceChildren();
  frames.forEach((frame) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `frame-choice${frame.id === selectedId ? ' is-selected' : ''}`;
    button.dataset.frameId = frame.id;
    button.setAttribute('aria-pressed', String(frame.id === selectedId));
    button.title = frame.description;
    const swatch = document.createElement('canvas');
    swatch.className = 'frame-swatch';
    swatch.setAttribute('aria-hidden', 'true');
    drawFrameIcon(swatch, frame, { frameId: frame.id, background: '#111720', border: frame.accent, borderWidth: 7, borderOpacity: 1, overlay: frame.accent, overlayOpacity: 0, textColor: '#fff4d6', imageSrc: null, imageName: '', imageX: 0, imageY: 0, imageZoom: 1, scale: 1, texts: [], selectedTextId: null });
    const name = document.createElement('span');
    name.textContent = frame.shortName;
    button.append(swatch, name);
    container.append(button);
  });
}

export function renderTextLayers(container: HTMLElement, texts: TextLayer[], selectedId: string | null, emptyText: string): void {
  container.replaceChildren();
  if (texts.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'text-empty';
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }
  texts.forEach((text) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `text-layer-choice${text.id === selectedId ? ' is-selected' : ''}`;
    button.dataset.textId = text.id;
    button.textContent = text.text || 'Untitled label';
    container.append(button);
  });
}

interface LibraryLabels {
  emptyText: string;
  reuseText: string;
  deleteText: string;
  newText: string;
  activeId: string;
}

function createMarkerPreview(marker: SavedMarker): HTMLCanvasElement {
  const preview = document.createElement('canvas');
  preview.className = 'marker-card-preview';
  const drawPreview = (image: HTMLImageElement | null) => {
    if (image?.complete && image.naturalWidth > 0) drawTokenCanvas(preview, marker.state, image);
    else drawFrameIcon(preview, getFramePreset(marker.state.frameId), { ...marker.state, borderWidth: Math.max(5, marker.state.borderWidth / 2) });
  };
  drawPreview(null);
  if (marker.state.imageSrc) {
    const image = new Image();
    image.addEventListener('load', () => drawPreview(image), { once: true });
    image.src = marker.state.imageSrc;
  }
  return preview;
}

function createMarkerCard(marker: SavedMarker, labels: LibraryLabels): HTMLElement {
  const card = document.createElement('article'); card.className = `marker-card${marker.id === labels.activeId ? ' is-active' : ''}`; card.dataset.markerId = marker.id;
  const button = document.createElement('button'); button.type = 'button';
  button.className = 'marker-card-main';
  button.dataset.markerId = marker.id;
  button.setAttribute('aria-label', `${labels.reuseText}: ${marker.name}`);
  if (marker.id === labels.activeId) button.setAttribute('aria-current', 'true');
  const preview = createMarkerPreview(marker);
  const image = document.createElement('img');
  image.alt = marker.name;
  image.loading = 'lazy';
  if (marker.state.imageSrc) image.src = marker.state.imageSrc;
  preview.append(image);
  const details = document.createElement('span');
  details.className = 'marker-card-details';
  const name = document.createElement('strong');
  name.textContent = marker.name;
  const date = document.createElement('small');
  date.textContent = new Date(marker.updatedAt).toLocaleDateString();
  details.append(name, date);
  button.append(preview, details);
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'marker-card-delete';
  remove.dataset.deleteMarker = marker.id;
  remove.setAttribute('aria-label', `${labels.deleteText}: ${marker.name}`);
  remove.textContent = 'x';
  card.append(button, remove);
  return card;
}

export function renderMarkerLibrary(container: HTMLElement, markers: SavedMarker[], labels: LibraryLabels): void {
  container.replaceChildren();
  const add = document.createElement('button');
  add.type = 'button';
  add.className = 'marker-card marker-card-new';
  add.dataset.newMarker = 'true';
  add.textContent = `+ ${labels.newText}`;
  container.append(add);
  if (markers.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'library-empty';
    empty.textContent = labels.emptyText;
    container.append(empty);
    return;
  }
  markers.forEach((marker) => container.append(createMarkerCard(marker, labels)));
}
