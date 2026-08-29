export function spawnParticle(container: HTMLElement, text: string, x?: number, y?: number) {
  const el = document.createElement('span');
  el.className = 'floating-magic-particle';
  el.textContent = text;
  if (x !== undefined && y !== undefined) {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  } else {
    el.style.left = '50%';
    el.style.top = '20%';
  }
  container.appendChild(el);
  setTimeout(() => el.remove(), 600);
}

export function spawnRollPop(container: HTMLElement, total: number) {
  const el = document.createElement('div');
  el.className = 'floating-roll-pop';
  el.textContent = `${total >= 0 ? '+' : ''}${total}`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
