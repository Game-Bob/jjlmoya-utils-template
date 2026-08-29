import * as interactModule from 'interactjs';
const interact = (interactModule.default || interactModule) as unknown as typeof interactModule.default;
import { state } from './dom';
import { getHighlightPath } from './logic';
import { drawConnections } from './renderer';
import { adjustBoardSize } from './layout';
import { saveState } from './stateManager';
import { cancelLongPress } from './boardContextMenu';

interface DragEvent {
  target: HTMLElement;
  dx: number;
  dy: number;
}

function handleDragStart(event: DragEvent): void {
  cancelLongPress();
  event.target.classList.add('dragging');
}

function handleDragMove(event: DragEvent): void {
  cancelLongPress();
  const target = event.target;
  const id = target.id.replace('node-', '');
  const n = state.nodes.find((item) => item.id === id);
  if (n) {
    let newX = n.x + event.dx / state.zoomScale;
    let newY = n.y + event.dy / state.zoomScale;
    newX = Math.round(newX / 15) * 15;
    newY = Math.round(newY / 15) * 15;
    n.x = newX;
    n.y = newY;
    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;
    const highlight = state.highlightedNodeId
      ? getHighlightPath(state.connections, state.highlightedNodeId)
      : null;
    drawConnections(highlight);
    adjustBoardSize();
  }
}

function handleDragEnd(event: DragEvent): void {
  const target = event.target;
  target.classList.remove('dragging');
  saveState();
  adjustBoardSize();
}

export function initializeDrag(): void {
  interact('.board-node').draggable({
    inertia: true,
    listeners: {
      start: (event: DragEvent) => handleDragStart(event),
      move: (event: DragEvent) => handleDragMove(event),
      end: (event: DragEvent) => handleDragEnd(event),
    },
  });
}
