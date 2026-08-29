import type { BoardNode, BoardConnection } from './types';

export interface BoardMeta {
  id: string;
  name: string;
}

export const state = {
  nodes: [] as BoardNode[],
  connections: [] as BoardConnection[],
  boardsList: [] as BoardMeta[],
  currentBoardId: 'default',
  currentCategoryFilter: 'all',
  currentSearchQuery: '',
  highlightedNodeId: null as string | null,
  quickLinkSourceId: null as string | null,
  zoomScale: 1.0,
  longPressTimer: null as number | null,
  startX: 0,
  startY: 0,
  longPressTargetNodeId: null as string | null,
  longPressCanvasX: 0,
  longPressCanvasY: 0,
};

export const mainCard = document.querySelector('.investigation-board-main') as HTMLElement;
export const viewportEl = document.getElementById('board-viewport') as HTMLElement;
export const areaEl = document.getElementById('board-area') as HTMLElement;
export const svgEl = document.getElementById('board-connections-svg') as unknown as SVGSVGElement;
export const nodesLayer = document.getElementById('board-nodes-layer') as HTMLElement;

export const searchInput = document.getElementById('board-search') as HTMLInputElement;
export const categoryBtns = document.querySelectorAll('.btn-filter');
export const addCardBtn = document.getElementById('add-card-btn') as HTMLButtonElement;
export const addConnectionBtn = document.getElementById('add-connection-btn') as HTMLButtonElement;
export const clearBoardBtn = document.getElementById('clear-board-btn') as HTMLButtonElement;

export const boardSelect = document.getElementById('board-select') as HTMLSelectElement;
export const saveBoardAsBtn = document.getElementById('save-board-as-btn') as HTMLButtonElement;
export const newBoardBtn = document.getElementById('new-board-btn') as HTMLButtonElement;

export const drawerOverlay = document.getElementById('card-drawer-overlay') as HTMLElement;
export const closeDrawerBtn = document.getElementById('close-drawer-btn') as HTMLButtonElement;
export const cancelDrawerBtn = document.getElementById('cancel-node-btn') as HTMLButtonElement;
export const saveNodeBtn = document.getElementById('save-node-btn') as HTMLButtonElement;
export const deleteNodeBtn = document.getElementById('delete-node-btn') as HTMLButtonElement;

export const editIdInput = document.getElementById('edit-node-id') as HTMLInputElement;
export const editNameInput = document.getElementById('edit-node-name') as HTMLInputElement;
export const editCategorySelect = document.getElementById('edit-node-category') as HTMLSelectElement;
export const editDescTextarea = document.getElementById('edit-node-description') as HTMLTextAreaElement;
export const editNotesList = document.getElementById('edit-notes-list') as HTMLElement;
export const addNoteRowBtn = document.getElementById('add-note-row-btn') as HTMLButtonElement;
export const editTagsInput = document.getElementById('edit-node-tags') as HTMLInputElement;
export const editColorInput = document.getElementById('edit-node-color') as HTMLInputElement;
export const colorPickerGroup = document.getElementById('color-picker-group') as HTMLElement;

export const connOverlay = document.getElementById('connection-modal-overlay') as HTMLElement;
export const closeConnBtn = document.getElementById('close-modal-btn') as HTMLButtonElement;
export const cancelConnBtn = document.getElementById('cancel-connection-btn') as HTMLButtonElement;
export const saveConnBtn = document.getElementById('save-connection-btn') as HTMLButtonElement;
export const connSourceSelect = document.getElementById('connection-source') as HTMLSelectElement;
export const connTargetSelect = document.getElementById('connection-target') as HTMLSelectElement;
export const connTextInput = document.getElementById('connection-text') as HTMLInputElement;
export const connColorInput = document.getElementById('connection-color-picker') as HTMLInputElement;
export const connBanner = document.getElementById('connection-banner') as HTMLElement;

export const zoomValueEl = document.getElementById('zoom-value') as HTMLElement;
export const zoomInBtn = document.getElementById('zoom-in-btn') as HTMLButtonElement;
export const zoomOutBtn = document.getElementById('zoom-out-btn') as HTMLButtonElement;
export const zoomResetBtn = document.getElementById('zoom-reset-btn') as HTMLButtonElement;
export const fullscreenToggleBtn = document.getElementById('fullscreen-toggle-btn') as HTMLButtonElement;

export const ctxMenu = document.getElementById('board-context-menu') as HTMLElement;
export const ctxAddCard = document.getElementById('ctx-add-card') as HTMLButtonElement;
export const ctxEditCard = document.getElementById('ctx-edit-card') as HTMLButtonElement;
export const ctxLinkCard = document.getElementById('ctx-link-card') as HTMLButtonElement;
export const ctxDeleteCard = document.getElementById('ctx-delete-card') as HTMLButtonElement;

export const CATEGORY_COLORS: Record<string, string> = {
  character: '#3b82f6',
  clue: '#ef4444',
  location: '#10b981',
  item: '#f59e0b',
};

export const STORAGE_KEY = 'tabletop_conspiracy_boards_list';
export const CURRENT_ID_KEY = 'tabletop_conspiracy_current_board_id';
export const DATA_KEY_PREFIX = 'tabletop_conspiracy_board_data_';
