import {
  state,
  connOverlay,
  connSourceSelect,
  connTargetSelect,
  connTextInput,
  connColorInput,
  saveConnBtn,
  cancelConnBtn,
  closeConnBtn,
  addConnectionBtn,
} from './dom';
import { createConnection } from './logic';
import { saveState } from './stateManager';
import { renderBoard } from './renderer';

export function populateSelects(sourceId?: string, targetId?: string): void {
  connSourceSelect.innerHTML = '';
  connTargetSelect.innerHTML = '';
  state.nodes.forEach((n) => {
    const opt1 = document.createElement('option');
    opt1.value = n.id;
    opt1.textContent = n.name;
    opt1.selected = !!(sourceId && n.id === sourceId);
    connSourceSelect.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = n.id;
    opt2.textContent = n.name;
    opt2.selected = !!(targetId && n.id === targetId);
    connTargetSelect.appendChild(opt2);
  });
}

export function openConnModal(sourceId?: string, targetId?: string): void {
  populateSelects(sourceId, targetId);
  connTextInput.value = '';
  connOverlay.classList.add('active');
}

export function closeConnModal(): void {
  connOverlay.classList.remove('active');
}

saveConnBtn.addEventListener('click', () => {
  const fromId = connSourceSelect.value;
  const toId = connTargetSelect.value;
  const label = connTextInput.value;
  const color = connColorInput.value;
  if (!fromId || !toId || fromId === toId) return;
  const conn = createConnection(fromId, toId, label, color);
  state.connections.push(conn);
  saveState();
  closeConnModal();
  renderBoard();
});

cancelConnBtn.addEventListener('click', closeConnModal);
closeConnBtn.addEventListener('click', closeConnModal);
addConnectionBtn.addEventListener('click', () => openConnModal());
