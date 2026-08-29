import Panzoom from '@panzoom/panzoom';
import { areaEl, viewportEl, zoomValueEl, state } from './dom';

export const panzoomInstance = Panzoom(areaEl, {
  maxScale: 1.8,
  minScale: 0.3,
  excludeClass: 'panzoom-exclude',
  handleStartEvent: (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.closest('.panzoom-exclude') || target.closest('.board-node')) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  },
});

viewportEl.addEventListener('wheel', panzoomInstance.zoomWithWheel);

areaEl.addEventListener('panzoomchange', (e: Event) => {
  const detail = (e as CustomEvent).detail;
  state.zoomScale = detail.scale;
  zoomValueEl.textContent = `${Math.round(state.zoomScale * 100)}%`;
});
