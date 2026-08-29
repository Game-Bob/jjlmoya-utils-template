import type { BoardConnection, BoardNode } from './types';
import {
  state,
  STORAGE_KEY,
  CURRENT_ID_KEY,
  DATA_KEY_PREFIX,
  boardSelect,
} from './dom';

const DEFAULT_NODES: BoardNode[] = [
  {
    id: 'n1',
    name: 'Detective Miller',
    category: 'character',
    description: 'Lead investigator of the warehouse case.',
    notes: 'Thinks the fire was deliberate.',
    tags: ['police', 'lead'],
    color: '#3b82f6',
    x: 50,
    y: 50,
  },
  {
    id: 'n2',
    name: 'Footprints',
    category: 'clue',
    description: 'Found outside the back door.',
    notes: 'Size 11 combat boots.',
    tags: ['clue', 'physical'],
    color: '#ef4444',
    x: 400,
    y: 50,
  },
  {
    id: 'n3',
    name: 'Warehouse',
    category: 'location',
    description: 'Abandoned docks storage unit.',
    notes: 'Burned down at midnight.',
    tags: ['location', 'scene'],
    color: '#10b981',
    x: 220,
    y: 280,
  },
];

const DEFAULT_CONNECTIONS: BoardConnection[] = [
  {
    id: 'c1',
    fromId: 'n1',
    toId: 'n3',
    label: 'Investigating',
    color: '#3b82f6',
  },
  {
    id: 'c2',
    fromId: 'n2',
    toId: 'n3',
    label: 'Found at',
    color: '#ef4444',
  },
];

export function saveState(): void {
  localStorage.setItem(
    DATA_KEY_PREFIX + state.currentBoardId,
    JSON.stringify({ nodes: state.nodes, connections: state.connections })
  );
}

export function loadBoardsList(): void {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      state.boardsList = JSON.parse(data);
    } catch {
      state.boardsList = [];
    }
  }
  if (state.boardsList.length === 0) {
    state.boardsList = [{ id: 'default', name: 'Main Investigation' }];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.boardsList));
  }
}

export function saveBoardsList(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.boardsList));
}

export function updateBoardSelect(): void {
  boardSelect.innerHTML = '';
  state.boardsList.forEach((b) => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    if (b.id === state.currentBoardId) {
      opt.selected = true;
    }
    boardSelect.appendChild(opt);
  });
}

function loadDefaultState(): void {
  state.nodes = DEFAULT_NODES;
  state.connections = DEFAULT_CONNECTIONS;
  saveState();
}

export function loadBoardState(boardId: string): void {
  state.currentBoardId = boardId;
  localStorage.setItem(CURRENT_ID_KEY, boardId);
  const data = localStorage.getItem(DATA_KEY_PREFIX + boardId);
  if (data) {
    try {
      const parsed = JSON.parse(data);
      state.nodes = parsed.nodes || [];
      state.connections = parsed.connections || [];
      return;
    } catch {}
  }
  if (boardId === 'default') {
    loadDefaultState();
  } else {
    state.nodes = [];
    state.connections = [];
  }
}
