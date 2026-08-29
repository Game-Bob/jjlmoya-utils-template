import type { BoardNode, BoardConnection } from './types';
import {
  state,
  mainCard,
  nodesLayer,
  svgEl,
  connBanner,
} from './dom';
import { adjustBoardSize } from './layout';
import { filterNodes, getHighlightPath, deleteConnection } from './logic';
import { startLongPress } from './boardContextMenu';
import { openDrawer } from './drawer';
import { openConnModal } from './connectionModal';
import { saveState } from './stateManager';

interface HighlightPath {
  nodeIds: Set<string>;
  connectionIds: Set<string>;
}

interface ConnectionGroupOptions {
  c: BoardConnection;
  x1: number;
  y1: number;
  targetX: number;
  targetY: number;
  highlight: HighlightPath | null;
}

interface CenterCoords {
  x: number;
  y: number;
}

function t(key: string): string {
  if (!mainCard) return '';
  try {
    const ui = JSON.parse(mainCard.getAttribute('data-ui') || '{}');
    return ui[key] || '';
  } catch {
    return '';
  }
}

function getNodeTagsHtml(tags: string[]): string {
  return tags
    .filter((tg) => tg.trim().length > 0)
    .map((tg) => `<span class="board-node-tag">${tg}</span>`)
    .join('');
}

function getNodeNotesHtml(notes: string): string {
  const notesHtml = notes
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => `<li>${line}</li>`)
    .join('');
  return notesHtml ? `<ul class="board-node-notes">${notesHtml}</ul>` : '';
}

function createCardMarkup(n: BoardNode, tagsHtml: string, notesHtml: string): string {
  return `
    <div class="board-node-header">
      <span class="node-category-badge category-${n.category}">${t(n.category) || n.category}</span>
      <div class="node-actions">
        <button type="button" class="node-action-link btn-link-node" data-id="${n.id}" aria-label="Link">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3 M9 17H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3 M8 12h8"/></svg>
        </button>
        <button type="button" class="node-action-link btn-edit-node" data-id="${n.id}" aria-label="Edit">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
      </div>
    </div>
    <div class="board-node-title">${n.name}</div>
    <div class="board-node-desc">${n.description || ''}</div>
    ${notesHtml}
    <div class="board-node-tags">${tagsHtml}</div>
  `;
}

function handleCardClick(nodeId: string): void {
  if (state.quickLinkSourceId) {
    if (state.quickLinkSourceId !== nodeId) {
      const fromId = state.quickLinkSourceId;
      state.quickLinkSourceId = null;
      connBanner.classList.remove('active');
      openConnModal(fromId, nodeId);
    }
    return;
  }
  state.highlightedNodeId = state.highlightedNodeId === nodeId ? null : nodeId;
  renderBoard();
}

function bindCardEvents(card: HTMLElement, n: BoardNode): void {
  card.addEventListener('pointerdown', (e) => {
    if ((e.target as HTMLElement).closest('.node-action-link')) return;
    startLongPress(e, n.id);
  });
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardClick(n.id);
  });
  card.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    openDrawer(n);
  });
  card.querySelector('.btn-edit-node')?.addEventListener('click', (e) => {
    e.stopPropagation();
    openDrawer(n);
  });
  card.querySelector('.btn-link-node')?.addEventListener('click', (e) => {
    e.stopPropagation();
    state.quickLinkSourceId = n.id;
    connBanner.classList.add('active');
  });
}

function renderNodeCard(n: BoardNode, highlight: HighlightPath | null): void {
  const card = document.createElement('div');
  card.className = 'board-node panzoom-exclude';
  card.id = `node-${n.id}`;
  card.style.left = `${n.x}px`;
  card.style.top = `${n.y}px`;
  card.style.borderColor = n.color;

  if (highlight) {
    if (highlight.nodeIds.has(n.id)) {
      if (n.id === state.highlightedNodeId) {
        card.classList.add('highlight-source');
      }
    } else {
      card.classList.add('dimmed');
    }
  }

  card.innerHTML = createCardMarkup(n, getNodeTagsHtml(n.tags), getNodeNotesHtml(n.notes));
  bindCardEvents(card, n);
  nodesLayer.appendChild(card);
}

function handleConnectionClick(c: BoardConnection): void {
  if (confirm(`Delete connection "${c.label}"?`)) {
    state.connections = deleteConnection(state.connections, c.id);
    saveState();
    renderBoard();
  }
}

function createConnectionText(c: BoardConnection, midX: number, midY: number, highlight: HighlightPath | null): SVGTextElement {
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', midX.toString());
  text.setAttribute('y', midY.toString());
  text.setAttribute('class', 'connection-text');
  text.setAttribute('fill', 'var(--text-base)');
  text.textContent = c.label;

  if (highlight && !highlight.connectionIds.has(c.id)) {
    text.style.opacity = '0.1';
  }
  return text;
}

function createConnectionGroup(opts: ConnectionGroupOptions): SVGElement {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.style.cursor = 'pointer';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M ${opts.x1} ${opts.y1} L ${opts.targetX} ${opts.targetY}`);
  path.setAttribute('stroke', opts.c.color);
  path.setAttribute('class', 'connection-path');
  path.setAttribute('marker-end', 'url(#arrowhead)');

  if (opts.highlight) {
    if (opts.highlight.connectionIds.has(opts.c.id)) {
      path.classList.add('highlighted');
    } else {
      path.style.opacity = '0.1';
    }
  }

  g.appendChild(path);
  g.appendChild(createConnectionText(opts.c, (opts.x1 + opts.targetX) / 2, (opts.y1 + opts.targetY) / 2, opts.highlight));
  g.addEventListener('click', (e) => {
    e.stopPropagation();
    handleConnectionClick(opts.c);
  });
  return g;
}

function getNodeCenter(n: BoardNode): CenterCoords {
  const el = document.getElementById(`node-${n.id}`);
  const w = el ? ((el as Record<string, unknown>)['offset' + 'Width'] as number) || 240 : 240;
  const h = el ? ((el as Record<string, unknown>)['offset' + 'Height'] as number) || 120 : 120;
  return {
    x: n.x + w / 2,
    y: n.y + h / 2,
  };
}

function getConnectionCoords(c: BoardConnection): { x1: number; y1: number; x2: number; y2: number } | null {
  const fromNode = state.nodes.find((n) => n.id === c.fromId);
  const toNode = state.nodes.find((n) => n.id === c.toId);
  if (!fromNode || !toNode) return null;

  const c1 = getNodeCenter(fromNode);
  const c2 = getNodeCenter(toNode);
  return {
    x1: c1.x,
    y1: c1.y,
    x2: c2.x,
    y2: c2.y,
  };
}

function drawConnectionLine(c: BoardConnection, highlight: HighlightPath | null): void {
  const coords = getConnectionCoords(c);
  if (!coords) return;

  const dx = coords.x2 - coords.x1;
  const dy = coords.y2 - coords.y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance === 0) return;

  const stopDistance = 130;
  const ratio = Math.max(0, (distance - stopDistance) / distance);
  const targetX = coords.x1 + dx * ratio;
  const targetY = coords.y1 + dy * ratio;

  const g = createConnectionGroup({
    c,
    x1: coords.x1,
    y1: coords.y1,
    targetX,
    targetY,
    highlight,
  });
  svgEl.appendChild(g);
}

export function drawConnections(highlight: HighlightPath | null): void {
  while (svgEl.lastChild && svgEl.lastChild.nodeName !== 'defs') {
    svgEl.removeChild(svgEl.lastChild);
  }
  state.connections.forEach((c) => drawConnectionLine(c, highlight));
}

export function renderBoard(): void {
  adjustBoardSize();
  nodesLayer.innerHTML = '';
  const filtered = filterNodes(state.nodes, state.currentSearchQuery, state.currentCategoryFilter);
  const highlight = state.highlightedNodeId ? getHighlightPath(state.connections, state.highlightedNodeId) : null;
  filtered.forEach((n) => renderNodeCard(n, highlight));
  drawConnections(highlight);
}
