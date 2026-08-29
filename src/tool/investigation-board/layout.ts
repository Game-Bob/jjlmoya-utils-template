import { viewportEl, areaEl, state } from './dom';

export function adjustBoardSize(): void {
  const viewW = viewportEl.clientWidth || 800;
  const viewH = viewportEl.clientHeight || 500;
  let maxX = viewW;
  let maxY = viewH;
  state.nodes.forEach((n) => {
    const right = n.x + 260;
    const bottom = n.y + 180;
    if (right > maxX) maxX = right;
    if (bottom > maxY) maxY = bottom;
  });
  areaEl.style.width = `${maxX + 200}px`;
  areaEl.style.height = `${maxY + 200}px`;
}
