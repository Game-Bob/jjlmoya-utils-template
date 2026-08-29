import { createDefaultState, FRAME_PRESETS } from './logic';
import { drawTokenCanvas, renderFrameGallery, renderMarkerLibrary, renderTextLayers } from './dom-views';
import { deleteMarker, listSavedMarkers, loadActiveMarkerId, loadTokenState, saveActiveMarkerId, saveMarker, saveTokenState } from './storage';
import { loadImage } from './workspace-media';
import type { StudioElements } from './controller';
import type { TokenStampUI } from './ui';
import type { SavedMarker, TokenStampState } from './types';

function markerName(state: TokenStampState): string {
  return state.markerName?.trim() || state.texts.find((text) => text.text.trim())?.text.trim() || state.imageName.replace(/\.[^/.]+$/, '') || 'Unnamed marker';
}

function createMarkerId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getActiveMarkerId(markers: SavedMarker[]): string {
  const stored = loadActiveMarkerId();
  if (stored) return stored;
  if (markers[0]) return markers[0].id;
  return createMarkerId();
}

function normalizeActiveMarkerId(markers: SavedMarker[], id: string): string {
  return markers.some((marker) => marker.id === id) ? id : markers[0]!.id;
}

function createInitialMarkerSession(): { state: TokenStampState; markers: SavedMarker[]; activeMarkerId: string } {
  const storedState = loadTokenState() || createDefaultState();
  let markers = listSavedMarkers();
  let activeMarkerId = getActiveMarkerId(markers);
  if (markers.length === 0) markers = saveMarker({ id: activeMarkerId, name: markerName(storedState), updatedAt: Date.now(), state: storedState });
  activeMarkerId = normalizeActiveMarkerId(markers, activeMarkerId);
  const active = markers.find((marker) => marker.id === activeMarkerId);
  return { markers, activeMarkerId, state: active?.state || storedState };
}

export class StudioStore {
  state: TokenStampState;
  markers: SavedMarker[];
  activeMarkerId: string;
  image: HTMLImageElement | null = null;

  constructor(private readonly elements: StudioElements, private readonly ui: TokenStampUI) {
    const session = createInitialMarkerSession();
    this.markers = session.markers;
    this.activeMarkerId = session.activeMarkerId;
    this.state = session.state;
    saveActiveMarkerId(this.activeMarkerId);
  }

  async restore(): Promise<void> {
    if (!this.state.imageSrc) return;
    try { this.image = await loadImage(this.state.imageSrc); } catch { this.state = { ...this.state, imageSrc: null, imageName: '' }; }
  }

  getState = (): TokenStampState => this.state;
  getMarkers = (): SavedMarker[] => this.markers;
  getImage = (): HTMLImageElement | null => this.image;

  setState = (next: TokenStampState): void => {
    this.state = next;
    saveTokenState(next);
    const active = this.markers.find((marker) => marker.id === this.activeMarkerId);
    if (active) this.markers = saveMarker({ ...active, name: markerName(next), updatedAt: Date.now(), state: next });
    this.render();
  };

  setImage = (nextImage: HTMLImageElement | null): void => { this.image = nextImage; this.render(); };

  selectMarker = (marker: SavedMarker): void => {
    this.activeMarkerId = marker.id;
    this.state = marker.state;
    saveActiveMarkerId(marker.id);
    if (marker.state.imageSrc) void loadImage(marker.state.imageSrc).then(this.setImage).catch(() => this.setImage(null));
    else this.setImage(null);
    this.renderLibrary();
  };

  addMarker = (): void => {
    const state = createDefaultState();
    const marker: SavedMarker = { id: createMarkerId(), name: markerName(state), updatedAt: Date.now(), state };
    this.markers = saveMarker(marker);
    this.activeMarkerId = marker.id;
    this.image = null;
    saveActiveMarkerId(marker.id);
    this.setState(state);
  };

  removeMarker = (id: string): void => {
    this.markers = deleteMarker(id);
    if (id !== this.activeMarkerId) return this.renderLibrary();
    const next = this.markers[0];
    if (next) this.selectMarker(next);
    else this.addMarker();
  };

  render(): void {
    drawTokenCanvas(this.elements.canvas, this.state, this.image);
    renderFrameGallery(this.elements.frames, FRAME_PRESETS, this.state.frameId);
    renderTextLayers(this.elements.textLayers, this.state.texts, this.state.selectedTextId, this.ui.noText);
    this.elements.currentImage.textContent = this.state.imageName || this.ui.noImage;
    this.elements.markerName.value = this.state.markerName || '';
    this.setInputValues();
    this.renderLibrary();
  }

  setInputValues(): void {
    const text = this.state.texts.find((item) => item.id === this.state.selectedTextId);
    this.elements.textInput.value = text?.text || '';
    this.elements.textSize.value = String(text?.size || 54);
    this.elements.imageZoom.value = String(this.state.imageZoom);
    this.elements.scale.value = String(this.state.scale);
    this.elements.borderWidth.value = String(this.state.borderWidth);
    this.elements.borderOpacity.value = String(this.state.borderOpacity);
    this.elements.overlayOpacity.value = String(this.state.overlayOpacity);
    this.setOutputValues();
  }

  setOutputValues(): void {
    const root = this.elements.root;
    const output = (selector: string, value: string) => { const element = root.querySelector<HTMLOutputElement>(selector); if (element) element.value = value; };
    output('[data-border-width-output]', String(this.state.borderWidth));
    output('[data-border-opacity-output]', `${Math.round(this.state.borderOpacity * 100)}%`);
    output('[data-overlay-opacity-output]', `${Math.round(this.state.overlayOpacity * 100)}%`);
    output('[data-image-zoom-output]', `${Math.round(this.state.imageZoom * 100)}%`);
    output('[data-scale-output]', `${Math.round(this.state.scale * 100)}%`);
    output('[data-text-size-output]', String(this.state.texts.find((item) => item.id === this.state.selectedTextId)?.size || 54));
    ['background', 'border', 'text', 'overlay'].forEach((name) => {
      const element = root.querySelector<HTMLInputElement>(`[data-color="${name}"]`);
      const key = name === 'text' ? 'textColor' : name;
      if (element) element.value = this.state[key as keyof TokenStampState] as string;
    });
  }

  renderLibrary(): void {
    renderMarkerLibrary(this.elements.library, this.markers, { emptyText: this.ui.noSavedMarkers, reuseText: this.ui.reuseMarker, deleteText: this.ui.deleteMarker, newText: this.ui.newMarker, activeId: this.activeMarkerId });
  }
}
