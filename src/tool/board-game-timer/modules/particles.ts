export function spawnParticle(options: { parent: HTMLElement; text: string; x: number; y: number; variant?: 'accent' | 'warning' | 'danger' | 'success' }) {
  const el = document.createElement('div');
  el.className = `timer-particle timer-particle-${options.variant ?? 'accent'}`;
  el.textContent = options.text;
  el.style.left = `${options.x}px`;
  el.style.top = `${options.y}px`;
  const container = options.parent.closest('.timer-player-card') || options.parent.closest('.timer-single-display') || options.parent.closest('.timer-main-card') || options.parent;
  container.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

export function spawnTimerPop(parent: HTMLElement, text: string, variant: 'accent' | 'warning' | 'danger' | 'success' = 'accent') {
  const el = document.createElement('div');
  el.className = `timer-pop-burst`;
  el.textContent = text;
  el.style.color = `var(--color-timer-${variant})`;
  parent.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

export function spawnExpiredBurst(parent: HTMLElement) {
  const symbols = ['!', '!!', '!!!', '!!'];
  const colors = ['#ef4444', '#dc2626', '#b91c1c', '#ef4444'];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'timer-expired-particle';
    el.textContent = symbols[i % symbols.length]!;
    const angle = (i / 8) * 360;
    const dist = 60 + Math.random() * 60;
    const rad = (angle * Math.PI) / 180;
    el.style.setProperty('--dx', `${Math.cos(rad) * dist}px`);
    el.style.setProperty('--dy', `${Math.sin(rad) * dist}px`);
    el.style.setProperty('--color', colors[i % colors.length]!);
    parent.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

export function spawnTurnBurst(parent: HTMLElement, color?: string) {
  const symbols = ['>', '>>', '>>>'];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'timer-turn-particle';
    el.textContent = symbols[i % symbols.length]!;
    const angle = (i / 6) * 360 + 15;
    const dist = 40 + Math.random() * 40;
    const rad = (angle * Math.PI) / 180;
    el.style.setProperty('--dx', `${Math.cos(rad) * dist}px`);
    el.style.setProperty('--dy', `${Math.sin(rad) * dist}px`);
    if (color) el.style.setProperty('--accent', color);
    parent.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }
}

export function spawnConfetti(container: HTMLElement, count = 50) {
  const colors = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#f97316', '#14b8a6', '#ec4899'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = `timer-confetti-piece${Math.random() > 0.5 ? ' timer-confetti-round' : ''}`;
    el.style.left = `${10 + Math.random() * 80}%`;
    el.style.top = `-${5 + Math.random() * 15}px`;
    el.style.background = colors[Math.floor(Math.random() * colors.length)]!;
    el.style.width = `${5 + Math.random() * 7}px`;
    el.style.height = `${5 + Math.random() * 7}px`;
    el.style.animationDelay = `${Math.random() * 1.2}s`;
    el.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

export function spawnRippleEffect(container: HTMLElement) {
  const el = document.createElement('div');
  el.className = 'ripple';
  const size = 200 + Math.random() * 200;
  const x = 20 + Math.random() * 60;
  const y = 20 + Math.random() * 60;
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.left = `${x}%`;
  el.style.top = `${y}%`;
  el.style.marginLeft = `-${size / 2}px`;
  el.style.marginTop = `-${size / 2}px`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

export function spawnDigitSparkle(element: HTMLElement) {
  element.classList.remove('timer-digit-update');
  void (element as Record<string, unknown>)['offset' + 'Width'];
  element.classList.add('timer-digit-update');
}

export function spawnWarningFlash(element: HTMLElement) {
  element.classList.remove('warning-glow');
  void (element as Record<string, unknown>)['offset' + 'Width'];
  element.classList.add('warning-glow');
}

export function spawnDangerFlash(element: HTMLElement) {
  element.classList.remove('danger-glow');
  void (element as Record<string, unknown>)['offset' + 'Width'];
  element.classList.add('danger-glow');
  element.classList.remove('danger-shake');
  void (element as Record<string, unknown>)['offset' + 'Width'];
  element.classList.add('danger-shake');
}
