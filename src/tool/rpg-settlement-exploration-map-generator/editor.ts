import type { EditTool } from './logic';

interface CellPoint {
  x: number;
  y: number;
}

type EditHandler = (point: CellPoint, tool: EditTool) => void;

function svgCell(event: MouseEvent, svg: SVGSVGElement): CellPoint | null {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = svg.getScreenCTM();
  if (!matrix) return null;
  const local = point.matrixTransform(matrix.inverse());
  return { x: Math.floor(local.x), y: Math.floor(local.y) };
}

function openContextMenu(root: HTMLElement, menu: HTMLElement, event: MouseEvent): CellPoint | null {
  const svg = (event.target as Element).closest<SVGSVGElement>('[data-settlement-map]');
  if (!svg || !root.querySelector<HTMLElement>('.rsm-map-frame')) return null;
  const cell = svgCell(event, svg);
  if (!cell) return null;
  const edge = 8;
  const gap = 6;
  menu.hidden = false;
  const menuBounds = menu.getBoundingClientRect();
  const left = Math.min(Math.max(edge, event.clientX), window.innerWidth - menuBounds.width - edge);
  const opensBelow = event.clientY + gap + menuBounds.height <= window.innerHeight - edge;
  const preferredTop = opensBelow ? event.clientY + gap : event.clientY - menuBounds.height - gap;
  const top = Math.min(Math.max(edge, preferredTop), window.innerHeight - menuBounds.height - edge);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.querySelector<HTMLButtonElement>('button')?.focus();
  return cell;
}

interface PointerOptions {
  host: HTMLElement;
  root: HTMLElement;
  menu: HTMLElement;
  flags: PointerFlags;
  onOpen: (cell: CellPoint | null) => void;
}

function bindPointerEvents(opts: PointerOptions): void {
  let timer: number | undefined;
  opts.host.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') return;
    timer = window.setTimeout(() => {
      opts.flags.ignoreNextContext = true;
      opts.flags.ignoreNextClick = true;
      opts.onOpen(openContextMenu(opts.root, opts.menu, event));
    }, 520);
  });
  const cancel = () => { if (timer) window.clearTimeout(timer); timer = undefined; };
  opts.host.addEventListener('pointerup', cancel);
  opts.host.addEventListener('pointercancel', cancel);
  opts.host.addEventListener('pointerleave', cancel);
}

export function bindContextEditor(root: HTMLElement, onEdit: EditHandler): void {
  const host = root.querySelector<HTMLElement>('[data-map-host]');
  const menu = root.querySelector<HTMLElement>('[data-context-menu]');
  if (!host || !menu) return;
  let selected: CellPoint | null = null;
  const flags: PointerFlags = { ignoreNextContext: false, ignoreNextClick: false };
  host.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (flags.ignoreNextContext) { flags.ignoreNextContext = false; return; }
    selected = openContextMenu(root, menu, event);
  });
  bindPointerEvents({ host, root, menu, flags, onOpen: (cell) => { selected = cell; } });
  menu.querySelectorAll<HTMLButtonElement>('[data-context-tool]').forEach((btn) => btn.addEventListener('click', () => {
    if (selected) onEdit(selected, btn.dataset.contextTool as EditTool);
    menu.hidden = true;
  }));
  document.addEventListener('click', (event) => {
    if (flags.ignoreNextClick) { flags.ignoreNextClick = false; return; }
    if (!menu.contains(event.target as Node)) menu.hidden = true;
  });
  window.addEventListener('resize', () => { menu.hidden = true; });
  window.addEventListener('scroll', () => { menu.hidden = true; }, true);
}
