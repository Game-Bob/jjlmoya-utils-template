import { ctxMenu, viewportEl, state } from './dom';
import { panzoomInstance } from './panzoom';

export interface ContextMenuOptions {
  x: number;
  y: number;
  nodeId: string | null;
  canvasX: number;
  canvasY: number;
}

export function showContextMenu(opts: ContextMenuOptions): void {
  state.longPressTargetNodeId = opts.nodeId;
  state.longPressCanvasX = opts.canvasX;
  state.longPressCanvasY = opts.canvasY;

  ctxMenu.style.left = `${opts.x}px`;
  ctxMenu.style.top = `${opts.y}px`;
  ctxMenu.classList.add('active');

  const displayVal = opts.nodeId ? 'flex' : 'none';
  ctxMenu.querySelectorAll('.card-only').forEach((el) => {
    (el as HTMLElement).style.display = displayVal;
  });
}

export function hideContextMenu(): void {
  ctxMenu.classList.remove('active');
  state.longPressTargetNodeId = null;
}

export function startLongPress(e: PointerEvent, nodeId: string | null): void {
  hideContextMenu();
  const clientX = e.clientX;
  const clientY = e.clientY;
  state.startX = clientX;
  state.startY = clientY;

  const viewRect = ((viewportEl as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
  const localX = clientX - viewRect.left;
  const localY = clientY - viewRect.top;
  const pan = panzoomInstance.getPan();
  const scale = panzoomInstance.getScale();
  const canvasX = (localX - pan.x) / scale;
  const canvasY = (localY - pan.y) / scale;

  state.longPressTimer = window.setTimeout(() => {
    showContextMenu({ x: clientX, y: clientY, nodeId, canvasX, canvasY });
  }, 600);
}

export function cancelLongPress(): void {
  if (state.longPressTimer) {
    clearTimeout(state.longPressTimer);
    state.longPressTimer = null;
  }
}

export function checkLongPressMove(clientX: number, clientY: number): void {
  const dist = Math.sqrt((clientX - state.startX) ** 2 + (clientY - state.startY) ** 2);
  if (dist > 8) {
    cancelLongPress();
  }
}
