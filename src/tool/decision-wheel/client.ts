import type { WheelSegment, SpinResultEntry, PresetKey } from './types';
import {
  getPresetSegments,
  addSegment as addSegmentLogic,
  removeSegment as removeSegmentLogic,
  updateSegment as updateSegmentLogic,
  selectRandomSegment,
  getSelectedIndex,
  addHistoryItem,
} from './logic';
import { SoundEngine } from './audio';
import { drawWheel } from './drawing';
import { bindSegmentEvents, renderSegmentEditor, renderResult, triggerEmphasis, renderHistory } from './ui';

let segments = getPresetSegments('yesno');
let history: SpinResultEntry[] = [];
let isSpinning = false;
let currentAngle = 0;

const MAX_SEGMENTS = 16;
const soundEngine = new SoundEngine();

const canvas = document.getElementById('wheel-canvas') as HTMLCanvasElement;
const spinBtn = document.getElementById('spin-btn') as HTMLButtonElement;
const resultDisplay = document.getElementById('result-display') as HTMLElement;
const historyList = document.getElementById('history-list') as HTMLElement;
const historyEmpty = document.getElementById('history-empty') as HTMLElement;
const clearBtn = document.getElementById('clear-history-btn') as HTMLButtonElement;
const segmentList = document.getElementById('segment-list') as HTMLElement;
const addBtn = document.getElementById('add-segment-btn') as HTMLButtonElement;
const mainCard = document.querySelector('.tool-main-card') as HTMLElement;
const pointerEl = document.querySelector('.wheel-pointer') as HTMLElement;
const muteBtn = document.getElementById('mute-btn') as HTMLButtonElement;

if (muteBtn) {
  const onSvg = muteBtn.querySelector('.sound-on-svg') as HTMLElement;
  const offSvg = muteBtn.querySelector('.sound-off-svg') as HTMLElement;
  muteBtn.addEventListener('click', () => {
    const isMuted = !soundEngine.isMuted();
    soundEngine.setMuted(isMuted);
    if (onSvg && offSvg) {
      onSvg.style.display = isMuted ? 'none' : 'block';
      offSvg.style.display = isMuted ? 'block' : 'none';
    }
    muteBtn.setAttribute('aria-label', isMuted ? 'Unmute Sounds' : 'Mute Sounds');
  });
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

interface SpinState {
  startTime: number;
  duration: number;
  startAngle: number;
  totalRotation: number;
  lastIndex: number;
  resolve: () => void;
}

function runSpinAnimation(now: number, state: SpinState): void {
  const elapsed = now - state.startTime;
  const progress = Math.min(elapsed / state.duration, 1);
  const eased = 1 - Math.pow(1 - progress, 4);
  currentAngle = state.startAngle + state.totalRotation * eased;
  drawWheel(canvas, segments, currentAngle);

  const currentIndex = getSelectedIndex(segments, currentAngle);
  if (currentIndex !== state.lastIndex) {
    soundEngine.playTick();
    if (pointerEl) {
      pointerEl.classList.add('tick-active');
      setTimeout(() => {
        pointerEl.classList.remove('tick-active');
      }, 40);
    }
    state.lastIndex = currentIndex;
  }

  if (progress < 1) {
    requestAnimationFrame((t) => runSpinAnimation(t, state));
  } else {
    currentAngle = state.startAngle + state.totalRotation;
    drawWheel(canvas, segments, currentAngle);
    state.resolve();
  }
}

function animateSpin(targetIndex: number): Promise<void> {
  return new Promise((resolve) => {
    const totalWeight = segments.reduce((sum, s) => sum + (s.weight || 1), 0);
    let acc = 0;
    for (let i = 0; i < targetIndex; i++) {
      acc += segments[i].weight || 1;
    }
    const targetSliceWeight = segments[targetIndex].weight || 1;
    const startAngleSeg = (acc / totalWeight) * 360;
    const endAngleSeg = ((acc + targetSliceWeight) / totalWeight) * 360;
    const targetAngle = startAngleSeg + (endAngleSeg - startAngleSeg) / 2;

    const fullSpins = 4 + Math.floor(Math.random() * 3);
    const currentNormalize = currentAngle % 360;
    const angleDiff = (360 - targetAngle - currentNormalize) % 360;
    const totalRotation = fullSpins * 360 + (angleDiff >= 0 ? angleDiff : angleDiff + 360);
    const duration = 2500 + fullSpins * 300;

    const state: SpinState = {
      startTime: performance.now(),
      duration,
      startAngle: currentAngle,
      totalRotation,
      lastIndex: getSelectedIndex(segments, currentAngle),
      resolve,
    };

    requestAnimationFrame((t) => runSpinAnimation(t, state));
  });
}

function setSegmentsWithReset(newSegments: WheelSegment[]): void {
  segments = newSegments;
  currentAngle = 0;
  drawWheel(canvas, segments, currentAngle);
  renderSegmentEditor(segmentList, segments, t, bindAll);
  renderResult(resultDisplay, null, false, t);
}

function handleUpdateSegment(id: string, field: string, value: string): void {
  segments = updateSegmentLogic(segments, id, field, value);
  if (field === 'color' || field === 'weight') {
    drawWheel(canvas, segments, currentAngle);
  }
}

function handleRemoveSegment(id: string): void {
  segments = removeSegmentLogic(segments, id);
  renderSegmentEditor(segmentList, segments, t, bindAll);
  drawWheel(canvas, segments, currentAngle);
}

function bindAll(): void {
  bindSegmentEvents(segmentList, handleUpdateSegment, handleRemoveSegment);
}

async function onSpin(): Promise<void> {
  if (isSpinning) return;
  if (segments.length < 2) return;
  isSpinning = true;
  spinBtn.disabled = true;
  renderResult(resultDisplay, null, true, t);

  const canvasCard = canvas.closest('.canvas-card') as HTMLElement;
  if (canvasCard) {
    canvasCard.classList.add('spinning');
  }

  const targetIndex = selectRandomSegment(segments);
  await animateSpin(targetIndex);

  const resultSegment = segments[targetIndex];
  history = addHistoryItem(history, resultSegment, targetIndex);

  soundEngine.playChime();

  if (canvasCard) {
    canvasCard.classList.remove('spinning');
  }

  isSpinning = false;
  spinBtn.disabled = false;
  renderResult(resultDisplay, { segment: resultSegment, index: targetIndex, timestamp: Date.now() }, false, t);
  renderHistory(historyList, historyEmpty, history);
  triggerEmphasis();
}

spinBtn.addEventListener('click', onSpin);

clearBtn.addEventListener('click', () => {
  history = [];
  renderHistory(historyList, historyEmpty, history);
});

addBtn.addEventListener('click', () => {
  if (segments.length >= MAX_SEGMENTS) return;
  segments = addSegmentLogic(segments);
  renderSegmentEditor(segmentList, segments, t, bindAll);
  drawWheel(canvas, segments, currentAngle);
});

document.querySelectorAll('.preset-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const el = e.currentTarget as HTMLButtonElement;
    document.querySelectorAll('.preset-btn').forEach((b) => b.classList.remove('active'));
    el.classList.add('active');
    const key = el.dataset.preset as PresetKey;
    loadPreset(key);
  });
});

function loadPreset(key: PresetKey): void {
  const newSegments = getPresetSegments(key);
  setSegmentsWithReset(newSegments);
}

document.querySelectorAll('.tab-header').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget as HTMLButtonElement;
    const tabName = target.dataset.tab;

    document.querySelectorAll('.tab-header').forEach((h) => h.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));

    target.classList.add('active');
    const pane = document.getElementById(`pane-${tabName}`);
    if (pane) {
      pane.classList.add('active');
    }
  });
});

drawWheel(canvas, segments, currentAngle);
renderSegmentEditor(segmentList, segments, t, bindAll);
renderHistory(historyList, historyEmpty, history);
