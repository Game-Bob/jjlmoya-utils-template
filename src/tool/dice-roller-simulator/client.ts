import { spawnParticle, spawnRollPop } from './modules/particles';
import { drawDistributionChart } from './modules/chart';
import { getHistory, saveHistory, renderHistory } from './modules/history';

const rollButton = document.getElementById('roll-button') as HTMLButtonElement;
const clearHistoryBtn = document.getElementById('clear-history-btn') as HTMLElement;
const clearPoolBtn = document.getElementById('clear-pool-btn') as HTMLElement;

const modifierInput = document.getElementById('modifier-input') as HTMLInputElement;
const modDecBtn = document.getElementById('mod-dec-btn') as HTMLElement;
const modIncBtn = document.getElementById('mod-inc-btn') as HTMLElement;

const rollArena = document.getElementById('roll-arena') as HTMLElement;
const trayRim = document.querySelector('.tray-rim') as HTMLElement;
const arenaPlaceholder = document.getElementById('arena-placeholder') as HTMLElement;
const diceResultsContainer = document.getElementById('dice-results-container') as HTMLElement;

const rollResultBanner = document.getElementById('roll-result-banner') as HTMLElement;
const resultTotalNumber = document.getElementById('result-total-number') as HTMLElement;
const resultBreakdownDisplay = document.getElementById('result-breakdown-display') as HTMLElement;

const totalRollsVal = document.getElementById('total-rolls-val') as HTMLElement;
const averageRollVal = document.getElementById('average-roll-val') as HTMLElement;
const lastRollVal = document.getElementById('last-roll-val') as HTMLElement;
const totalRollsBadge = document.getElementById('total-rolls-badge') as HTMLElement;

const historyList = document.getElementById('history-list') as HTMLElement;
const noHistoryMsg = document.getElementById('no-history-msg') as HTMLElement;
const distributionBarsContainer = document.getElementById('distribution-chart-bars') as HTMLElement;

const activePool = new Map<string, number>([['D4', 0], ['D6', 0], ['D8', 0], ['D10', 0], ['D12', 0], ['D20', 0], ['D100', 0]]);
const maxValues = new Map<string, number>([['D4', 4], ['D6', 6], ['D8', 8], ['D10', 10], ['D12', 12], ['D20', 20], ['D100', 100]]);

const extraTabButtons = document.querySelectorAll('.extra-tab-btn');
const extraTabPanes = document.querySelectorAll('.extra-tab-pane');

extraTabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    extraTabButtons.forEach(b => b.classList.remove('active'));
    extraTabPanes.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const id = btn.getAttribute('data-extra-tab');
    if (id) document.getElementById(id)?.classList.add('active');
  });
});

function updateRollButtonState() {
  let totalCount = 0;
  activePool.forEach(count => totalCount += count);
  rollButton.disabled = totalCount === 0;
}

function pulseElement(el: HTMLElement) {
  if (!el) return;
  el.classList.remove('pulse-value');
  void (el as Record<string, unknown>)['offset' + 'Width'];
  el.classList.add('pulse-value');
}

function bounceModifierInput() {
  if (!modifierInput) return;
  modifierInput.classList.remove('bounce-effect');
  void (modifierInput as Record<string, unknown>)['offset' + 'Width'];
  modifierInput.classList.add('bounce-effect');
}

function callRenderHistory() {
  const refs = {
    list: historyList,
    emptyMsg: noHistoryMsg,
    totalVal: totalRollsVal,
    averageVal: averageRollVal,
    lastVal: lastRollVal,
    badge: totalRollsBadge,
  };
  renderHistory(refs, (totals) => {
    drawDistributionChart(distributionBarsContainer, totals);
  });
  if (totalRollsVal) pulseElement(totalRollsVal);
  if (averageRollVal) pulseElement(averageRollVal);
  if (lastRollVal) pulseElement(lastRollVal);
}

function attachDieControl(row: HTMLElement, btn: HTMLElement | null, offset: number) {
  if (!btn) return;
  const dieType = row.getAttribute('data-die-type') || '';
  const decBtn = row.querySelector('.dec-btn') as HTMLButtonElement;
  const badge = row.querySelector('.die-counter-badge') as HTMLElement;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const curr = Math.max(0, (activePool.get(dieType) || 0) + offset);
    activePool.set(dieType, curr);
    badge.textContent = curr.toString();
    decBtn.disabled = curr === 0;
    badge.classList.toggle('hidden', curr === 0);
    updateRollButtonState();
    const rect = ((row as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
    const txt = offset > 0 ? `+${offset}` : `${offset}`;
    spawnParticle(row, txt, e.clientX - rect.left, e.clientY - rect.top);
  });
}

function setupDieRow(row: Element) {
  const rowEl = row as HTMLElement;
  const decBtn = rowEl.querySelector('.dec-btn') as HTMLElement;
  const incBtn = rowEl.querySelector('.inc-btn') as HTMLElement;
  const mainBtn = rowEl.querySelector('.die-main-button') as HTMLElement;
  attachDieControl(rowEl, decBtn, -1);
  attachDieControl(rowEl, incBtn, 1);
  attachDieControl(rowEl, mainBtn, 1);
}

document.querySelectorAll('.die-control-row').forEach(row => {
  setupDieRow(row);
});

clearPoolBtn.addEventListener('click', () => {
  activePool.forEach((_, key) => activePool.set(key, 0));
  document.querySelectorAll('.die-control-row').forEach(row => {
    const decBtn = row.querySelector('.dec-btn') as HTMLButtonElement;
    const countBadge = row.querySelector('.die-counter-badge') as HTMLElement;
    countBadge.textContent = '0';
    countBadge.classList.add('hidden');
    decBtn.disabled = true;
  });
  updateRollButtonState();
});

modDecBtn.addEventListener('click', (e) => {
  const val = parseInt(modifierInput.value) || 0;
  modifierInput.value = (val - 1).toString();
  bounceModifierInput();
  const parent = modifierInput.parentElement;
  if (parent) {
    const rect = ((parent as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
    spawnParticle(parent, '-1', e.clientX - rect.left, e.clientY - rect.top);
  }
});

modIncBtn.addEventListener('click', (e) => {
  const val = parseInt(modifierInput.value) || 0;
  modifierInput.value = (val + 1).toString();
  bounceModifierInput();
  const parent = modifierInput.parentElement;
  if (parent) {
    const rect = ((parent as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
    spawnParticle(parent, '+1', e.clientX - rect.left, e.clientY - rect.top);
  }
});

function triggerFeltImpact() {
  if (trayRim) {
    trayRim.classList.remove('felt-impact');
    void (trayRim as Record<string, unknown>)['offset' + 'Width'];
    trayRim.classList.add('felt-impact');
    setTimeout(() => trayRim.classList.remove('felt-impact'), 300);
  }
}

function updateBanner(rolls: { type: string; value: number }[], modifier: number, total: number) {
  if (!rollResultBanner || !resultTotalNumber || !resultBreakdownDisplay) return;
  resultTotalNumber.textContent = total.toString();
  const diceBreakdownHtml = rolls.map(r => {
    const typeLower = r.type.toLowerCase();
    const maxVal = maxValues.get(r.type) || 6;
    let extraClass = '';
    if (r.value === maxVal) {
      extraClass = ' die-critical';
    } else if (r.value === 1) {
      extraClass = ' die-fumble';
    }
    return `<span class="breakdown-die-tag${extraClass}" data-die-type="${typeLower}">${r.value}</span>`;
  }).join(' <span class="breakdown-operator">+</span> ');
  let finalHtml = diceBreakdownHtml;
  if (modifier !== 0) {
    const sign = modifier >= 0 ? '+' : '-';
    finalHtml += ` <span class="breakdown-operator">${sign}</span> <span class="breakdown-modifier-tag">${Math.abs(modifier)}</span>`;
  }
  resultBreakdownDisplay.innerHTML = finalHtml;
  rollResultBanner.classList.remove('hidden');
  rollResultBanner.classList.remove('banner-pop-effect');
  void (rollResultBanner as Record<string, unknown>)['offset' + 'Width'];
  rollResultBanner.classList.add('banner-pop-effect');
}

function rollDiceTumble(selectedDice: { type: string; max: number }[], visualDiceEls: HTMLElement[]): Promise<{ type: string; value: number }[]> {
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      visualDiceEls.forEach((el, index) => {
        const d = selectedDice[index]!;
        el.textContent = (Math.floor(Math.random() * d.max) + 1).toString();
      });
    }, 60);
    setTimeout(() => {
      clearInterval(intervalId);
      const results = visualDiceEls.map((el, index) => {
        const d = selectedDice[index]!;
        el.classList.remove('rolling-pulse');
        const val = Math.floor(Math.random() * d.max) + 1;
        if (val === d.max) {
          el.classList.add('die-critical');
          el.innerHTML = `<span class="die-val">${val}</span><svg class="die-svg-icon-crit" viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>`;
        } else if (val === 1) {
          el.classList.add('die-fumble');
          el.innerHTML = `<span class="die-val">${val}</span><svg class="die-svg-icon-fumble" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V13H13V7H11M11,15V17H13V15H11Z"/></svg>`;
        } else {
          el.textContent = val.toString();
        }
        return { type: d.type, value: val };
      });
      resolve(results);
    }, 500);
  });
}

function createVisualDice(selectedDice: { type: string; max: number }[]): HTMLElement[] {
  return selectedDice.map((d) => {
    const el = document.createElement('div');
    el.className = 'visual-die rolling-pulse';
    el.setAttribute('data-die-type', d.type.toLowerCase());
    el.textContent = '?';
    diceResultsContainer.appendChild(el);
    return el;
  });
}

function saveRollLog(rolls: { type: string; value: number }[], modifier: number, total: number) {
  const history = getHistory();
  history.push({
    id: 'roll_' + Date.now(),
    timestamp: new Date().toISOString(),
    dice: rolls.map(r => `${r.type.toLowerCase()}:${r.value}`),
    modifier,
    total,
  });
  saveHistory(history);
  callRenderHistory();
}

async function onRoll() {
  const selectedDice: { type: string; max: number }[] = [];
  activePool.forEach((count, type) => {
    const max = maxValues.get(type) || 6;
    for (let i = 0; i < count; i++) {
      selectedDice.push({ type, max });
    }
  });
  if (selectedDice.length === 0) return;
  arenaPlaceholder.style.display = 'none';
  diceResultsContainer.innerHTML = '';
  if (rollResultBanner) rollResultBanner.classList.add('hidden');
  rollButton.disabled = true;
  const visualDiceEls = createVisualDice(selectedDice);
  const rolls = await rollDiceTumble(selectedDice, visualDiceEls);
  const modifier = parseInt(modifierInput.value) || 0;
  const total = rolls.reduce((acc, r) => acc + r.value, 0) + modifier;
  triggerFeltImpact();
  spawnRollPop(rollArena, total);
  updateBanner(rolls, modifier, total);
  saveRollLog(rolls, modifier, total);
  updateRollButtonState();
}

rollButton.addEventListener('click', onRoll);

clearHistoryBtn.addEventListener('click', () => {
  saveHistory([]);
  callRenderHistory();
  arenaPlaceholder.style.display = 'block';
  diceResultsContainer.innerHTML = '';
  rollResultBanner?.classList.add('hidden');
});

updateRollButtonState();
callRenderHistory();
