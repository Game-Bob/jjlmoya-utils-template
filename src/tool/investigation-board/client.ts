import {
  state,
  mainCard,
  viewportEl,
  areaEl,
  svgEl,
  searchInput,
  categoryBtns,
  addCardBtn,
  clearBoardBtn,
  boardSelect,
  saveBoardAsBtn,
  newBoardBtn,
  connBanner,
  zoomInBtn,
  zoomOutBtn,
  zoomResetBtn,
  fullscreenToggleBtn,
  ctxMenu,
  ctxAddCard,
  ctxEditCard,
  ctxLinkCard,
  ctxDeleteCard,
  CURRENT_ID_KEY,
} from './dom';
import { panzoomInstance } from './panzoom';
import {
  startLongPress,
  cancelLongPress,
  checkLongPressMove,
  hideContextMenu,
} from './boardContextMenu';
import { adjustBoardSize } from './layout';
import {
  saveState,
  saveBoardsList,
  updateBoardSelect,
  loadBoardState,
  loadBoardsList,
} from './stateManager';
import { renderBoard } from './renderer';
import { openDrawer } from './drawer';
import { initializeDrag } from './interactDrag';
import { createNode, deleteNode } from './logic';

zoomInBtn.addEventListener('click', () => panzoomInstance.zoomIn());
zoomOutBtn.addEventListener('click', () => panzoomInstance.zoomOut());
zoomResetBtn.addEventListener('click', () => panzoomInstance.reset());

fullscreenToggleBtn.addEventListener('click', () => {
  mainCard.classList.toggle('immersive');
  setTimeout(() => {
    adjustBoardSize();
  }, 100);
});

addCardBtn.addEventListener('click', () => {
  const card = createNode({
    name: 'New Card',
    category: 'clue',
    x: 100 + Math.random() * 100,
    y: 100 + Math.random() * 100,
    color: '#ef4444',
  });
  state.nodes.push(card);
  saveState();
  renderBoard();
  openDrawer(card);
});

clearBoardBtn.addEventListener('click', () => {
  if (confirm('Clear the entire board?')) {
    state.nodes = [];
    state.connections = [];
    saveState();
    renderBoard();
  }
});

searchInput.addEventListener('input', () => {
  state.currentSearchQuery = searchInput.value;
  renderBoard();
});

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentCategoryFilter = btn.getAttribute('data-category') || 'all';
    renderBoard();
  });
});

viewportEl.addEventListener('pointerdown', (e) => {
  const target = e.target as HTMLElement;
  if (
    target.closest('.board-node') ||
    target.closest('.zoom-controls') ||
    target.closest('.control-panel') ||
    target.closest('.card-drawer') ||
    target.closest('.modal-overlay') ||
    target.closest('.context-menu')
  ) {
    return;
  }
  if (state.quickLinkSourceId) {
    state.quickLinkSourceId = null;
    connBanner.classList.remove('active');
  }
  startLongPress(e, null);
});

viewportEl.addEventListener('pointermove', (e) => {
  checkLongPressMove(e.clientX, e.clientY);
});

viewportEl.addEventListener('pointerup', () => {
  cancelLongPress();
});

viewportEl.addEventListener('pointercancel', () => {
  cancelLongPress();
});

viewportEl.addEventListener('click', (e) => {
  if (e.target === viewportEl || e.target === areaEl || e.target === svgEl) {
    state.highlightedNodeId = null;
    renderBoard();
  }
});

document.addEventListener('click', (e) => {
  if (!ctxMenu.contains(e.target as Node)) {
    hideContextMenu();
  }
});

ctxAddCard.addEventListener('click', () => {
  hideContextMenu();
  const card = createNode({
    name: 'New Card',
    category: 'clue',
    x: state.longPressCanvasX,
    y: state.longPressCanvasY,
    color: '#ef4444',
  });
  state.nodes.push(card);
  saveState();
  renderBoard();
  openDrawer(card);
});

ctxEditCard.addEventListener('click', () => {
  const nodeId = state.longPressTargetNodeId;
  hideContextMenu();
  if (nodeId) {
    const node = state.nodes.find((n) => n.id === nodeId);
    if (node) openDrawer(node);
  }
});

ctxLinkCard.addEventListener('click', () => {
  const nodeId = state.longPressTargetNodeId;
  hideContextMenu();
  if (nodeId) {
    state.quickLinkSourceId = nodeId;
    connBanner.classList.add('active');
  }
});

ctxDeleteCard.addEventListener('click', () => {
  const nodeId = state.longPressTargetNodeId;
  hideContextMenu();
  if (nodeId) {
    if (confirm('Delete this card?')) {
      const result = deleteNode(state.nodes, state.connections, nodeId);
      state.nodes = result.nodes;
      state.connections = result.connections;
      saveState();
      renderBoard();
    }
  }
});

boardSelect.addEventListener('change', () => {
  loadBoardState(boardSelect.value);
  renderBoard();
});

saveBoardAsBtn.addEventListener('click', () => {
  const name = prompt('Enter a name for this board:');
  if (!name || name.trim().length === 0) return;
  const newId = 'board_' + Math.random().toString(36).substring(2, 9);
  state.boardsList.push({ id: newId, name: name.trim() });
  saveBoardsList();
  state.currentBoardId = newId;
  saveState();
  updateBoardSelect();
  loadBoardState(newId);
  renderBoard();
});

newBoardBtn.addEventListener('click', () => {
  const name = prompt('Enter a name for the new board:');
  if (!name || name.trim().length === 0) return;
  const newId = 'board_' + Math.random().toString(36).substring(2, 9);
  state.boardsList.push({ id: newId, name: name.trim() });
  saveBoardsList();
  state.currentBoardId = newId;
  state.nodes = [];
  state.connections = [];
  saveState();
  updateBoardSelect();
  loadBoardState(newId);
  renderBoard();
});

const savedActiveId = localStorage.getItem(CURRENT_ID_KEY) || 'default';
loadBoardsList();
loadBoardState(savedActiveId);
updateBoardSelect();
initializeDrag();
renderBoard();
