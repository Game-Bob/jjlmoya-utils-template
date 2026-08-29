import { addCombatant, removeCombatant, toggleStatus, startCombat, nextTurn, prevTurn, endCombat, createBlankState } from './logic';
import type { InitiativeState } from './types';

const STORAGE_KEY = 'initiative-tracker-state';

const wrapper = document.querySelector('.init-main-wrapper') as HTMLElement;
if (!wrapper) throw new Error('Initiative tracker wrapper not found');

const ui: Record<string, string> = JSON.parse(wrapper.dataset.ui || '{}');

function saveState(): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { }
}

function loadState(): InitiativeState {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s) as InitiativeState;
  } catch { }
  return createBlankState();
}

let state: InitiativeState = loadState();

const $ = (id: string) => document.getElementById(id) as HTMLElement;
const combatantList = $('init-combatant-list');
const emptyState = $('init-empty-state');
const nameInput = $('init-name-input') as HTMLInputElement;
const initInput = $('init-value-input') as HTMLInputElement;
const modInput = $('init-mod-input') as HTMLInputElement;
const addBtn = $('init-add-btn');
const startBtn = $('init-start-btn');
const endBtn = $('init-end-btn');
const nextBtn = $('init-next-btn');
const prevBtn = $('init-prev-btn');
const roundLabel = $('init-round-label');

let currentType: 'player' | 'npc' = 'player';

function renderCombatantList(): void {
  if (state.combatants.length === 0) {
    combatantList.innerHTML = '';
    combatantList.appendChild(emptyState);
    return;
  }
  const items = state.combatants.map((c, i) => {
    const isActive = state.isCombatActive && i === state.currentIndex;
    const typeClass = c.isPlayer ? 'player-order' : 'npc-order';
    const activeClass = isActive ? ' active' : '';
    const npcClass = c.isPlayer ? '' : ' npc';
    const orderClass = isActive ? ' active-order' : ' ' + typeClass;
    const statusHtml = c.statuses.map(s => {
      return `<span class="init-status-tag active" data-status="${s}">${s}</span>`;
    }).join('');
    return `<div class="init-combatant-item${activeClass}${npcClass}" data-cbt-id="${c.id}"><span class="init-cbt-order${orderClass}">${i + 1}</span><span class="init-cbt-name">${c.name}</span><span class="init-cbt-init">${c.initiative}</span><div class="init-cbt-statuses">${statusHtml}</div><div class="init-cbt-actions"><button type="button" class="init-btn-icon remove" data-action="remove" title="${ui.removeCombatant}"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div></div>`;
  }).join('');
  combatantList.innerHTML = items;
  combatantList.querySelectorAll('[data-action="remove"]').forEach(b => b.addEventListener('click', onRemove));
  combatantList.querySelectorAll('.init-status-tag').forEach(t => {
    t.addEventListener('click', onToggleStatus);
  });
}

function onRemove(e: Event): void {
  const item = (e.currentTarget as HTMLElement).closest('.init-combatant-item') as HTMLElement;
  const id = item?.dataset.cbtId;
  if (id) {
    state = removeCombatant(state, id);
    renderAll();
  }
}

function onToggleStatus(e: Event): void {
  const tag = e.currentTarget as HTMLElement;
  const item = tag.closest('.init-combatant-item') as HTMLElement;
  const id = item?.dataset.cbtId;
  const status = tag.dataset.status;
  if (id && status) {
    state = toggleStatus(state, id, status);
    renderAll();
  }
}

function spawnTurnParticle(text: string): void {
  const el = document.createElement('div');
  el.className = 'init-turn-particle';
  el.textContent = text;
  el.style.cssText = 'left:50%;top:50%;position:fixed';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

function longPress(el: HTMLElement, duration: number, cb: () => void): void {
  let timer: number | null = null;
  const start = (): void => {
    el.style.setProperty('--lp-dur', duration + 'ms');
    el.classList.add('lp-active');
    timer = window.setTimeout(() => {
      el.classList.remove('lp-active');
      cb();
    }, duration);
  };
  const cancel = (): void => {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
    el.classList.remove('lp-active');
  };
  el.addEventListener('mousedown', start);
  el.addEventListener('mouseup', cancel);
  el.addEventListener('mouseleave', cancel);
  el.addEventListener('touchstart', start);
  el.addEventListener('touchend', cancel);
  el.addEventListener('touchcancel', cancel);
}

function getActiveCombatantName(): string {
  const c = state.combatants[state.currentIndex];
  return c ? c.name : '';
}

function renderAll(): void {
  renderCombatantList();
  const hasCombatants = state.combatants.length > 0;
  const inCombat = state.isCombatActive;

  if (inCombat && hasCombatants) {
    roundLabel.textContent = ui.roundLabel + ' ' + state.round + ' - ' + ui.turnLabel + ' ' + (state.currentIndex + 1);
  } else {
    roundLabel.textContent = ui.roundLabel + ': --';
  }

  startBtn.style.display = inCombat ? 'none' : 'inline-block';
  startBtn.disabled = !hasCombatants;
  endBtn.style.display = inCombat ? 'inline-block' : 'none';
  endBtn.disabled = !inCombat;
  nextBtn.disabled = !inCombat;
  prevBtn.disabled = !inCombat;

  saveState();
}

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const initiative = parseInt(initInput.value, 10);
  const modifier = parseInt(modInput.value, 10) || 0;
  if (!name || isNaN(initiative)) return;
  state = addCombatant(state, name, initiative, { modifier, isPlayer: currentType === 'player' });
  nameInput.value = '';
  initInput.value = '';
  modInput.value = '';
  nameInput.focus();
  renderAll();
});

initInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') initInput.focus();
});

const toggleBtns = document.querySelectorAll('.init-toggle-btn');
toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type as 'player' | 'npc';
  });
});

startBtn.addEventListener('click', () => {
  state = startCombat(state);
  const name = getActiveCombatantName();
  if (name) spawnTurnParticle(name + ' ' + ui.yourTurn);
  renderAll();
});

nextBtn.addEventListener('click', () => {
  state = nextTurn(state);
  const name = getActiveCombatantName();
  if (name) spawnTurnParticle(name + ' ' + ui.yourTurn);
  renderAll();
});

prevBtn.addEventListener('click', () => {
  state = prevTurn(state);
  const name = getActiveCombatantName();
  if (name) spawnTurnParticle(name + ' ' + ui.yourTurn);
  renderAll();
});

longPress(endBtn, 1000, () => {
  state = endCombat(state);
  spawnTurnParticle(ui.combatEnded);
  renderAll();
});

renderAll();
