import type { BoardNode, NodeCategory } from './types';
import {
  state,
  editIdInput,
  editNameInput,
  editCategorySelect,
  editDescTextarea,
  editNotesList,
  editTagsInput,
  editColorInput,
  colorPickerGroup,
  drawerOverlay,
  addNoteRowBtn,
  saveNodeBtn,
  deleteNodeBtn,
  cancelDrawerBtn,
  closeDrawerBtn,
  CATEGORY_COLORS,
} from './dom';
import { updateNode, deleteNode } from './logic';
import { saveState } from './stateManager';
import { renderBoard } from './renderer';

export function createNoteRowElement(value: string = ''): HTMLElement {
  const row = document.createElement('div');
  row.className = 'note-input-row';
  row.innerHTML = `
    <input type="text" class="form-control note-item-input" style="flex: 1;" value="${value.replace(/"/g, '&quot;')}" />
    <button type="button" class="btn btn-danger btn-sm btn-remove-note-row">&times;</button>
  `;
  row.querySelector('.btn-remove-note-row')?.addEventListener('click', () => {
    row.remove();
  });
  return row;
}

export function toggleColorPicker(category: string): void {
  const isCustom = category === 'custom';
  colorPickerGroup.style.display = isCustom ? 'flex' : 'none';
}

export function openDrawer(node: BoardNode): void {
  editIdInput.value = node.id;
  editNameInput.value = node.name;
  editCategorySelect.value = node.category;
  editDescTextarea.value = node.description;
  editNotesList.innerHTML = '';
  const notesArray = node.notes.split('\n').map((n) => n.trim()).filter((n) => n.length > 0);
  if (notesArray.length > 0) {
    notesArray.forEach((noteText) => {
      editNotesList.appendChild(createNoteRowElement(noteText));
    });
  } else {
    editNotesList.appendChild(createNoteRowElement(''));
  }
  editTagsInput.value = node.tags.join(', ');
  editColorInput.value = node.color;
  toggleColorPicker(node.category);
  drawerOverlay.classList.add('active');
}

export function closeDrawer(): void {
  drawerOverlay.classList.remove('active');
}

addNoteRowBtn.addEventListener('click', () => {
  editNotesList.appendChild(createNoteRowElement(''));
});

editCategorySelect.addEventListener('change', () => {
  toggleColorPicker(editCategorySelect.value);
});

saveNodeBtn.addEventListener('click', () => {
  const id = editIdInput.value;
  const category = editCategorySelect.value as NodeCategory;
  const inputElements = editNotesList.querySelectorAll('.note-item-input') as NodeListOf<HTMLInputElement>;
  const notesString = Array.from(inputElements)
    .map((inp) => inp.value.trim())
    .filter((val) => val.length > 0)
    .join('\n');

  const color = category === 'custom' ? editColorInput.value : (CATEGORY_COLORS[category] || '#ef4444');

  const updates = {
    name: editNameInput.value,
    category,
    description: editDescTextarea.value,
    notes: notesString,
    tags: editTagsInput.value.split(',').map((s) => s.trim()),
    color,
  };
  state.nodes = updateNode(state.nodes, id, updates);
  saveState();
  closeDrawer();
  renderBoard();
});

deleteNodeBtn.addEventListener('click', () => {
  const id = editIdInput.value;
  const result = deleteNode(state.nodes, state.connections, id);
  state.nodes = result.nodes;
  state.connections = result.connections;
  saveState();
  closeDrawer();
  renderBoard();
});

cancelDrawerBtn.addEventListener('click', closeDrawer);
closeDrawerBtn.addEventListener('click', closeDrawer);
