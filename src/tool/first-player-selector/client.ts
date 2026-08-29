import { TouchTracker } from './modules/TouchTracker';
import { SelectionEngine } from './modules/SelectionEngine';
import { AnimationEffects } from './modules/AnimationEffects';
import { SoundEffects } from './modules/SoundEffects';
import type { ContactPoint, SelectionState, SelectorMode } from './types';

const SOUND_ON_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>`;

const SOUND_OFF_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;

interface Elements {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  btnModeFinger: HTMLButtonElement;
  btnModeWheel: HTMLButtonElement;
  btnSound: HTMLButtonElement;
  btnReset: HTMLButtonElement;
  btnSpin: HTMLButtonElement;
  btnClear: HTMLButtonElement;
  wheelActions: HTMLElement;
  instructionsText: HTMLElement;
  instructionsStatus: HTMLElement;
}

function getElements(): { els: Elements; ui: Record<string, string> } | null {
  const container = document.querySelector('.selector-container[data-tool="first-player-selector"]') as HTMLElement;
  if (!container) return null;
  const canvas = document.getElementById('selector-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  return {
    els: {
      canvas, ctx,
      btnModeFinger: document.getElementById('btn-mode-finger') as HTMLButtonElement,
      btnModeWheel: document.getElementById('btn-mode-wheel') as HTMLButtonElement,
      btnSound: document.getElementById('btn-sound') as HTMLButtonElement,
      btnReset: document.getElementById('btn-reset') as HTMLButtonElement,
      btnSpin: document.getElementById('btn-spin') as HTMLButtonElement,
      btnClear: document.getElementById('btn-clear') as HTMLButtonElement,
      wheelActions: document.getElementById('wheel-actions') as HTMLElement,
      instructionsText: document.getElementById('instructions-text') as HTMLElement,
      instructionsStatus: document.getElementById('instructions-status') as HTMLElement,
    },
    ui: JSON.parse(container.getAttribute('data-ui') || '{}'),
  };
}

function handleStateChange(state: SelectionState, els: Elements, ui: Record<string, string>): void {
  if (state === 'idle') {
    els.instructionsText.style.display = 'block';
    els.instructionsText.textContent = ui.instructions;
    els.instructionsStatus.textContent = '';
    els.instructionsStatus.className = 'instructions-status';
  } else if (state === 'countdown') {
    els.instructionsText.style.display = 'none';
    els.instructionsStatus.textContent = '';
    els.instructionsStatus.className = 'instructions-status countdown';
  } else if (state === 'selecting') {
    els.instructionsText.style.display = 'none';
    els.instructionsStatus.textContent = '';
    els.instructionsStatus.className = 'instructions-status';
  } else if (state === 'celebration') {
    els.instructionsText.style.display = 'none';
    els.instructionsStatus.textContent = ui.winner;
    els.instructionsStatus.className = 'instructions-status celebration';
  }
}

function handleWinner(winner: ContactPoint, sound: SoundEffects, effects: AnimationEffects): void {
  sound.playWinner();
  effects.spawnCelebration(winner.x, winner.y, winner.color);
}

function updateMode(mode: SelectorMode, tracker: TouchTracker, engine: SelectionEngine, els: Elements): void {
  tracker.setMode(mode);
  engine.setMode(mode);

  if (mode === 'finger') {
    els.btnModeFinger.classList.add('active');
    els.btnModeWheel.classList.remove('active');
    els.wheelActions.style.display = 'none';
  } else {
    els.btnModeFinger.classList.remove('active');
    els.btnModeWheel.classList.add('active');
    els.wheelActions.style.display = 'flex';
  }
}

function resizeCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
  const rect = ((canvas as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

function bindSoundToggle(
  btn: HTMLButtonElement, ui: Record<string, string>,
  sound: SoundEffects, isSoundEnabled: { value: boolean }
): void {
  btn.addEventListener('click', () => {
    isSoundEnabled.value = !isSoundEnabled.value;
    sound.setMute(!isSoundEnabled.value);
    if (isSoundEnabled.value) {
      btn.classList.add('active');
      btn.classList.remove('muted');
      btn.innerHTML = SOUND_ON_SVG;
      btn.title = ui.soundOn;
    } else {
      btn.classList.remove('active');
      btn.classList.add('muted');
      btn.innerHTML = SOUND_OFF_SVG;
      btn.title = ui.soundOff;
    }
  });
}

function bindEvents(
  els: Elements, ui: Record<string, string>,
  deps: { engine: SelectionEngine; tracker: TouchTracker; sound: SoundEffects }
): void {
  els.btnModeFinger.addEventListener('click', () => updateMode('finger', deps.tracker, deps.engine, els));
  els.btnModeWheel.addEventListener('click', () => updateMode('wheel', deps.tracker, deps.engine, els));

  const isSoundEnabled = { value: true };
  bindSoundToggle(els.btnSound, ui, deps.sound, isSoundEnabled);

  els.btnReset.addEventListener('click', () => { deps.tracker.clear(); deps.engine.reset(); });
  els.btnClear.addEventListener('click', () => { deps.tracker.clear(); deps.engine.reset(); });
  els.btnSpin.addEventListener('click', () => { deps.engine.startWheelSelection(); });
}

interface LoopDeps {
  engine: SelectionEngine;
  effects: AnimationEffects;
  tracker: TouchTracker;
}

function startLoop(
  canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D,
  deps: LoopDeps
): void {
  let lastTime = performance.now();
  function loop(now: number) {
    const dt = now - lastTime;
    lastTime = now;
    deps.engine.update(dt);

    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;
    const isLightMode = document.documentElement.classList.contains('theme-light');

    deps.effects.updateAndDraw({
      ctx, width, height,
      contacts: deps.tracker.getContacts(),
      state: deps.engine.getState(),
      progress: deps.engine.getCountdownProgress(),
      wheelAngle: deps.engine.getWheelAngle(),
      centroid: deps.engine.getCentroid(),
      isLightMode
    });

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

function init(): void {
  const result = getElements();
  if (!result) return;
  const { els, ui } = result;

  const sound = new SoundEffects();
  const effects = new AnimationEffects();

  const engine = new SelectionEngine(
    (state) => handleStateChange(state, els, ui),
    () => sound.playTick(),
    (winner) => handleWinner(winner, sound, effects),
    () => sound.playCountdown()
  );

  const tracker = new TouchTracker(els.canvas, (contacts) => {
    engine.setContacts(contacts);
  });

  resizeCanvas(els.canvas, els.ctx);
  window.addEventListener('resize', () => resizeCanvas(els.canvas, els.ctx));

  bindEvents(els, ui, { engine, tracker, sound });
  startLoop(els.canvas, els.ctx, { engine, effects, tracker });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
