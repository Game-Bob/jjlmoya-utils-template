import { drawTokenCanvas } from './dom-views';
import { canvasToBlob, cleanName, copyCanvas, downloadBlob, downloadCanvas, loadImage, readFile, zipBlobs } from './workspace-media';
import type { StudioElements } from './controller';
import type { SavedMarker, TokenStampState } from './types';
import type { TokenStampUI } from './ui';

export interface WorkspaceContext {
  getState: () => TokenStampState;
  setState: (state: TokenStampState) => void;
  ui: TokenStampUI;
  getMarkers: () => SavedMarker[];
  getImage: () => HTMLImageElement | null;
  selectMarker: (marker: SavedMarker) => void;
  addMarker: () => void;
  removeMarker: (id: string) => void;
  setImage: (image: HTMLImageElement | null) => void;
}

function attachLibraryEvents(elements: StudioElements, context: WorkspaceContext): void {
  elements.library.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const deleteId = target.closest<HTMLElement>('[data-delete-marker]')?.dataset.deleteMarker;
    if (deleteId) { context.removeMarker(deleteId); return; }
    if (target.closest('[data-new-marker]')) { context.addMarker(); return; }
    const markerId = target.closest<HTMLElement>('[data-marker-id]')?.dataset.markerId;
    const marker = context.getMarkers().find((item) => item.id === markerId);
    if (!marker) return;
    context.selectMarker(marker);
  });
}

export function attachWorkspaceEvents(elements: StudioElements, context: WorkspaceContext): void {
  const exportCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    drawTokenCanvas(canvas, context.getState(), context.getImage());
    return canvas;
  };
  elements.download.addEventListener('click', () => downloadCanvas(exportCanvas(), cleanName(context.getState().imageName)));
  elements.copy.addEventListener('click', () => void copyCanvas(exportCanvas()).catch(() => false));
  elements.markerName.addEventListener('input', (event) => context.setState({ ...context.getState(), markerName: (event.target as HTMLInputElement).value }));
  attachLibraryEvents(elements, context);
}

export function attachFileEvents(elements: StudioElements, context: WorkspaceContext): void {
  const load = async (file: File) => context.setImage(await loadDroppedFile(file, context));
  elements.imageInput.addEventListener('change', () => { const file = elements.imageInput.files?.[0]; if (file) void load(file); });
  elements.root.addEventListener('dragover', (event) => event.preventDefault());
  elements.root.addEventListener('drop', (event) => { event.preventDefault(); const file = event.dataTransfer?.files[0]; if (file?.type.startsWith('image/')) void load(file); });
}

async function loadDroppedFile(file: File, context: WorkspaceContext): Promise<HTMLImageElement> {
  const source = await readFile(file);
  const image = await loadImage(source);
  context.setState({ ...context.getState(), imageSrc: source, imageName: file.name, imageX: 0, imageY: 0, imageZoom: 1 });
  return image;
}

async function exportBatch(files: File[], state: TokenStampState, onProgress: (current: number) => void): Promise<{ exported: number; failed: number }> {
  const exports: Array<{ name: string; blob: Blob }> = [];
  const names = new Set<string>();
  let failed = 0;
  for (const [index, file] of files.entries()) {
    try {
      const source = await readFile(file);
      const image = await loadImage(source);
      const canvas = document.createElement('canvas');
      drawTokenCanvas(canvas, { ...state, imageSrc: source, imageName: file.name }, image);
      const baseName = cleanName(file.name);
      let name = `${baseName}.png`;
      let suffix = 2;
      while (names.has(name)) name = `${baseName}-${suffix++}.png`;
      names.add(name);
      exports.push({ name, blob: await canvasToBlob(canvas) });
    } catch {
      failed += 1;
    }
    onProgress(index + 1);
  }
  if (exports.length > 0) downloadBlob(await zipBlobs(exports), 'tabletop-token-batch.zip');
  return { exported: exports.length, failed };
}

export function attachBatchEvents(elements: StudioElements, context: WorkspaceContext): void {
  let files: File[] = [];
  let busy = false;
  elements.batchInput.addEventListener('change', () => {
    files = Array.from(elements.batchInput.files ?? []);
    elements.batchInput.value = '';
    elements.batchStatus.textContent = files.length ? context.ui.batchReady.replace('{count}', String(files.length)) : context.ui.batchHint;
    elements.batchDownload.disabled = files.length === 0;
  });
  elements.batchDownload.addEventListener('click', () => {
    if (busy || files.length === 0) return;
    busy = true;
    elements.batchDownload.disabled = true;
    elements.batchDownload.setAttribute('aria-busy', 'true');
    void exportBatch(files, context.getState(), (current) => {
      elements.batchStatus.textContent = `${current}/${files.length}`;
    }).then(({ exported, failed }) => {
      elements.batchStatus.textContent = failed ? `${exported}/${files.length}` : String(exported);
    }).finally(() => {
      busy = false;
      elements.batchDownload.disabled = files.length === 0;
      elements.batchDownload.removeAttribute('aria-busy');
    });
  });
}
