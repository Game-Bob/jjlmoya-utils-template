import type { Tile } from './logic';

type EditHandler = (x: number, y: number, tile: Tile) => void;

interface CellPosition {
  x: number;
  y: number;
}

export function bindContextEditor(root: HTMLElement, onEdit: EditHandler): void {
  const host = root.querySelector<HTMLElement>('[data-map-host]');
  const menu = root.querySelector<HTMLElement>('[data-context-menu]');
  if (!host || !menu) return;
  let selected: CellPosition | undefined;
  let holdTimer = 0;
  host.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    selected = openCellMenu(root, menu, event);
  });
  host.addEventListener('pointerdown', (event) => {
    holdTimer = window.setTimeout(() => { selected = openCellMenu(root, menu, event); }, 550);
  });
  host.addEventListener('pointerup', () => window.clearTimeout(holdTimer));
  host.addEventListener('pointercancel', () => window.clearTimeout(holdTimer));
  menu.querySelectorAll<HTMLButtonElement>('[data-context-tool]').forEach((button) => {
    button.addEventListener('click', () => {
      if (selected) onEdit(selected.x, selected.y, tileForTool(button.dataset.contextTool));
      closeMenu(menu);
    });
  });
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target as Node)) closeMenu(menu);
  });
}

function openCellMenu(root: HTMLElement, menu: HTMLElement, event: MouseEvent | PointerEvent): CellPosition | undefined {
  const cell = (event.target as Element).closest<SVGElement>('[data-cell]');
  if (!cell) return undefined;
  const frame = root.querySelector<HTMLElement>('.dmg-map-frame');
  if (!frame) return undefined;
  const bounds = frame.getBoundingClientRect();
  menu.style.left = `${event.clientX - bounds.left}px`;
  menu.style.top = `${event.clientY - bounds.top}px`;
  menu.hidden = false;
  menu.querySelector<HTMLButtonElement>('button')?.focus();
  return { x: Number(cell.dataset.x), y: Number(cell.dataset.y) };
}

function tileForTool(tool: string | undefined): Tile {
  if (tool === 'wall') return 0;
  if (tool === 'door') return 2;
  return 1;
}

function closeMenu(menu: HTMLElement): void {
  menu.hidden = true;
}
