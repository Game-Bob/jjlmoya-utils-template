import { createTextLayer, FRAME_PRESETS, getRandomPalette, hitTestText, updateTextLayer, clamp } from './logic';
import { pointerToCanvas } from './dom-views';
import { attachBatchEvents, attachFileEvents, attachWorkspaceEvents } from './workspace';
import { StudioStore } from './store';
import type { TokenStampUI } from './ui';
import type { TextAlign, TokenStampState } from './types';

export interface StudioElements {
  root: HTMLElement;
  canvas: HTMLCanvasElement;
  frames: HTMLElement;
  textLayers: HTMLElement;
  imageInput: HTMLInputElement;
  batchInput: HTMLInputElement;
  textInput: HTMLInputElement;
  textSize: HTMLInputElement;
  imageZoom: HTMLInputElement;
  scale: HTMLInputElement;
  borderWidth: HTMLInputElement;
  borderOpacity: HTMLInputElement;
  overlayOpacity: HTMLInputElement;
  currentImage: HTMLElement;
  batchStatus: HTMLElement;
  library: HTMLElement;
  markerName: HTMLInputElement;
  copy: HTMLButtonElement;
  download: HTMLButtonElement;
  batchDownload: HTMLButtonElement;
}

function getElement<T extends Element>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Token stamp studio element missing: ${selector}`);
  return element;
}

function getElements(root: HTMLElement): StudioElements {
  return {
    root,
    canvas: getElement(root, '[data-token-canvas]'),
    frames: getElement(root, '[data-frame-gallery]'),
    textLayers: getElement(root, '[data-text-layers]'),
    imageInput: getElement(root, '[data-image-input]'),
    batchInput: getElement(root, '[data-batch-input]'),
    textInput: getElement(root, '[data-text-input]'),
    textSize: getElement(root, '[data-text-size]'),
    imageZoom: getElement(root, '[data-image-zoom]'),
    scale: getElement(root, '[data-scale]'),
    borderWidth: getElement(root, '[data-border-width]'),
    borderOpacity: getElement(root, '[data-border-opacity]'),
    overlayOpacity: getElement(root, '[data-overlay-opacity]'),
    currentImage: getElement(root, '[data-current-image]'),
    batchStatus: getElement(root, '[data-batch-status]'),
    library: getElement(root, '[data-marker-library]'),
    markerName: getElement<HTMLInputElement>(root, '[data-marker-name]'),
    copy: getElement<HTMLButtonElement>(root, '[data-copy]'),
    download: getElement(root, '[data-download]'),
    batchDownload: getElement(root, '[data-batch-download]'),
  };
}

function getColor(root: HTMLElement, name: string): HTMLInputElement {
  return getElement<HTMLInputElement>(root, `[data-color="${name}"]`);
}

function attachFrameEvents(elements: StudioElements, getState: () => TokenStampState, setState: (state: TokenStampState) => void): void {
  elements.frames.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>('[data-frame-id]');
    if (button?.dataset.frameId) setState({ ...getState(), frameId: button.dataset.frameId });
  });
}

function attachColorEvents(elements: StudioElements, getState: () => TokenStampState, setState: (state: TokenStampState) => void): void {
  const colors: Array<[string, keyof TokenStampState]> = [['background', 'background'], ['border', 'border'], ['text', 'textColor'], ['overlay', 'overlay']];
  colors.forEach(([name, key]) => getColor(elements.root, name).addEventListener('input', (event) => {
    setState({ ...getState(), [key]: (event.target as HTMLInputElement).value } as TokenStampState);
  }));
}

function attachRangeEvents(elements: StudioElements, getState: () => TokenStampState, setState: (state: TokenStampState) => void): void {
  const ranges: Array<[HTMLInputElement, keyof TokenStampState]> = [
    [elements.imageZoom, 'imageZoom'], [elements.scale, 'scale'], [elements.borderWidth, 'borderWidth'], [elements.borderOpacity, 'borderOpacity'], [elements.overlayOpacity, 'overlayOpacity'],
  ];
  ranges.forEach(([input, key]) => input.addEventListener('input', (event) => setState({ ...getState(), [key]: Number((event.target as HTMLInputElement).value) } as TokenStampState)));
}

function updateDraftText(value: string, getState: () => TokenStampState, setState: (state: TokenStampState) => void): void {
  const current = getState();
  if (!current.selectedTextId && value.trim()) {
    const text = { ...createTextLayer(current.texts.length + 1), text: value };
    setState({ ...current, texts: [...current.texts, text], selectedTextId: text.id });
    return;
  }
  setState({ ...current, texts: updateTextLayer(current.texts, current.selectedTextId, { text: value }) });
}

function attachTextEvents(elements: StudioElements, getState: () => TokenStampState, setState: (state: TokenStampState) => void, ui: TokenStampUI): void {
  elements.textLayers.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-text-id]');
    if (button?.dataset.textId) setState({ ...getState(), selectedTextId: button.dataset.textId });
  });
  elements.textInput.addEventListener('input', (event) => updateDraftText((event.target as HTMLInputElement).value, getState, setState));
  elements.textSize.addEventListener('input', (event) => setState({ ...getState(), texts: updateTextLayer(getState().texts, getState().selectedTextId, { size: Number((event.target as HTMLInputElement).value) }) }));
  elements.root.querySelectorAll<HTMLButtonElement>('[data-align]').forEach((button) => button.addEventListener('click', () => {
    const align = button.dataset.align as TextAlign;
    setState({ ...getState(), texts: updateTextLayer(getState().texts, getState().selectedTextId, { align }) });
  }));
  getElement<HTMLButtonElement>(elements.root, '[data-add-text]').addEventListener('click', () => {
    const text = createTextLayer(getState().texts.length + 1);
    setState({ ...getState(), texts: [...getState().texts, text], selectedTextId: text.id });
  });
  getElement<HTMLButtonElement>(elements.root, '[data-remove-text]').addEventListener('click', () => {
    const current = getState();
    const texts = current.texts.filter((text) => text.id !== current.selectedTextId);
    setState({ ...current, texts, selectedTextId: texts[0]?.id ?? null });
  });
  getElement<HTMLElement>(elements.root, '[data-text-hint]').textContent = ui.textHint;
}

function attachCanvasEvents(elements: StudioElements, getState: () => TokenStampState, setState: (state: TokenStampState) => void): void {
  let drag: { mode: 'image' | 'text'; start: { x: number; y: number }; imageX: number; imageY: number; textX: number; textY: number } | null = null;
  elements.canvas.addEventListener('pointerdown', (event) => {
    const point = pointerToCanvas(elements.canvas, event);
    const state = getState();
    const text = state.texts.find((item) => hitTestText(item, point));
    if (text) setState({ ...state, selectedTextId: text.id });
    drag = { mode: text ? 'text' : 'image', start: point, imageX: state.imageX, imageY: state.imageY, textX: text?.x ?? 0.5, textY: text?.y ?? 0.8 };
    elements.canvas.setPointerCapture(event.pointerId);
  });
  elements.canvas.addEventListener('pointermove', (event) => {
    if (!drag) return;
    const point = pointerToCanvas(elements.canvas, event);
    const state = getState();
    const delta = { x: point.x - drag.start.x, y: point.y - drag.start.y };
    if (drag.mode === 'image') setState({ ...state, imageX: clamp(drag.imageX + delta.x, -0.5, 0.5), imageY: clamp(drag.imageY + delta.y, -0.5, 0.5) });
    else setState({ ...state, texts: updateTextLayer(state.texts, state.selectedTextId, { x: clamp(drag.textX + delta.x, 0.12, 0.88), y: clamp(drag.textY + delta.y, 0.12, 0.9) }) });
  });
  elements.canvas.addEventListener('pointerup', () => { drag = null; });
  elements.canvas.addEventListener('pointercancel', () => { drag = null; });
  elements.canvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    const nextZoom = clamp(getState().imageZoom - event.deltaY * 0.001, 0.7, 1.8);
    setState({ ...getState(), imageZoom: nextZoom });
  }, { passive: false });
}

function attachStudioInteractions(elements: StudioElements, ui: TokenStampUI, store: StudioStore): void {
  attachFrameEvents(elements, store.getState, store.setState);
  attachRandomEvents(elements, store.getState, store.setState);
  attachColorEvents(elements, store.getState, store.setState);
  attachRangeEvents(elements, store.getState, store.setState);
  attachTextEvents(elements, store.getState, store.setState, ui);
  attachCanvasEvents(elements, store.getState, store.setState);
  const context = { getState: store.getState, setState: store.setState, ui, getMarkers: store.getMarkers, getImage: store.getImage, selectMarker: store.selectMarker, addMarker: store.addMarker, removeMarker: store.removeMarker, setImage: store.setImage };
  attachWorkspaceEvents(elements, context);
  attachFileEvents(elements, context);
  attachBatchEvents(elements, context);
}

export async function mountTokenStampStudio(root: HTMLElement, ui: TokenStampUI): Promise<void> {
  const elements = getElements(root);
  const store = new StudioStore(elements, ui);
  await store.restore();
  store.render();
  attachStudioInteractions(elements, ui, store);
}

function attachRandomEvents(elements: StudioElements, getState: () => TokenStampState, setState: (state: TokenStampState) => void): void {
  getElement<HTMLButtonElement>(elements.root, '[data-random-frame]').addEventListener('click', () => {
    const available = FRAME_PRESETS.filter((frame) => frame.id !== getState().frameId);
    const frame = available[Math.floor(Math.random() * available.length)] ?? FRAME_PRESETS[0]!;
    setState({ ...getState(), frameId: frame.id });
  });
  getElement<HTMLButtonElement>(elements.root, '[data-random-colors]').addEventListener('click', () => {
    const palette = getRandomPalette();
    setState({ ...getState(), ...palette, overlayOpacity: 0.18 });
  });
}
