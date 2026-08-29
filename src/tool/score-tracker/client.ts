import { addPlayer, removePlayer, renamePlayer, startNewRound, updateRoundScore, deleteLastRound, resetGame, createBlankState } from './logic';
import type { ScoreState } from './types';
const STORAGE_KEY = 'score-tracker-state';
const wrapper = document.querySelector('.score-main-wrapper') as HTMLElement;
if (!wrapper) throw new Error('Score tracker wrapper not found');
const ui: Record<string, string> = JSON.parse(wrapper.dataset.ui || '{}');
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { }
}
function loadState(): ScoreState {
  try { const s = localStorage.getItem(STORAGE_KEY); if (s) return JSON.parse(s) as ScoreState; } catch { }
  return createBlankState();
}
let state: ScoreState = loadState();
let previousLeaderId = '';
const $ = (id: string) => document.getElementById(id) as HTMLElement;
const addPlayerInput = $('add-player-input') as HTMLInputElement;
const addPlayerBtn = $('add-player-btn');
const playerList = $('player-list');
const startRoundBtn = $('start-round-btn');
const nextRoundBtn = $('next-round-btn');
const resetGameBtn = $('reset-game-btn');
const resetAllBtn = $('reset-all-btn');
const roundLabel = $('round-label');
const roundScoreRows = $('round-score-rows');
const leaderboardList = $('leaderboard-list');
const undoRoundBtn = $('undo-round-btn');
const historyContent = $('history-content');
const leaderboardInline = $('leaderboard-inline');
const roundScoringPanel = $('round-scoring-panel');
function tabListeners() {
  document.querySelectorAll('.tab-score-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-score-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-score-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const id = btn.getAttribute('data-score-tab');
      if (id) $(id)?.classList.add('active');
    });
  });
}
function spawnParticle(parent: HTMLElement, opts: { text: string; x: number; y: number; isPos: boolean }) {
  const el = document.createElement('span');
  el.className = 'floating-score-particle' + (opts.isPos ? ' particle-positive' : ' particle-negative');
  el.textContent = opts.text;
  el.style.cssText = `left:${opts.x}px;top:${opts.y}px;position:absolute`;
  parent.appendChild(el);
  setTimeout(() => el.remove(), 800);
}
function spawnBig(text: string, isPos: boolean) {
  const el = document.createElement('div');
  el.className = 'floating-big-particle' + (isPos ? ' big-positive' : ' big-negative');
  el.textContent = text;
  el.style.cssText = 'left:50%;top:50%;position:fixed';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
function sortedPlayers() {
  return [...state.players].sort((a, b) => b.total - a.total);
}
function getPlayerRank(pid: string) {
  return sortedPlayers().findIndex(p => p.id === pid) + 1;
}
const editSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
const closeSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
const emptySvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>';
function renderPlayerList() {
  playerList.innerHTML = state.players.map(p => {
    const rank = getPlayerRank(p.id);
    return `<div class="player-card" data-player-id="${p.id}"><div class="player-card-name"><span class="player-rank-badge rank-${rank <= 3 ? rank : 'other'}">${rank}</span><span>${p.name}</span></div><div class="player-card-actions"><button type="button" class="btn-icon-sm rename-btn" data-action="rename" title="${ui.renamePlayer}">${editSvg}</button><button type="button" class="btn-icon-sm remove" data-action="remove" title="${ui.removePlayer}">${closeSvg}</button></div></div>`;
  }).join('');
  playerList.querySelectorAll('[data-action="remove"]').forEach(b => b.addEventListener('click', onRemovePlayer));
  playerList.querySelectorAll('[data-action="rename"]').forEach(b => b.addEventListener('click', onRenamePlayer));
}
function renderLB(container: HTMLElement, emptyMsg: string) {
  const sorted = sortedPlayers();
  if (sorted.length === 0) { container.innerHTML = `<div class="no-round-message"><span>${emptyMsg}</span></div>`; return; }
  container.innerHTML = sorted.map((p, i) => {
    const rank = i + 1;
    return `<div class="leaderboard-item${rank === 1 ? ' first' : ''}" data-player-id="${p.id}"><span class="leaderboard-rank rank-${rank <= 3 ? rank : 'other'}">${rank}</span><span class="leaderboard-name">${p.name}</span><span class="leaderboard-total" data-lb-total="${p.id}">${p.total}</span></div>`;
  }).join('');
}
function reorderLB(container: HTMLElement) {
  const sorted = sortedPlayers();
  const items = container.querySelectorAll('.leaderboard-item');
  if (items.length === 0) { renderLB(container, ''); return; }
  const itemMap = new Map<string, Element>();
  items.forEach(el => { const id = el.getAttribute('data-player-id'); if (id) itemMap.set(id, el); });
  sorted.forEach((p, i) => {
    const el = itemMap.get(p.id);
    if (!el) return;
    const rank = i + 1;
    const rankEl = el.querySelector('.leaderboard-rank');
    const totalEl = el.querySelector('.leaderboard-total');
    if (rankEl) { rankEl.textContent = String(rank); rankEl.className = `leaderboard-rank rank-${rank <= 3 ? rank : 'other'}`; }
    if (totalEl) totalEl.textContent = String(p.total);
    el.classList.toggle('first', rank === 1);
    container.appendChild(el);
  });
}
function longPress(el: HTMLElement, duration: number, cb: () => void) {
  let timer: number | null = null;
  const start = () => {
    el.style.setProperty('--lp-dur', duration + 'ms');
    el.classList.add('lp-active');
    timer = window.setTimeout(() => { el.classList.remove('lp-active'); cb(); }, duration);
  };
  const cancel = () => {
    if (timer !== null) { clearTimeout(timer); timer = null; }
    el.classList.remove('lp-active');
  };
  const ev = (n: string, fn: typeof start) => el.addEventListener(n, fn);
  ev('mousedown', start); ev('mouseup', cancel); ev('mouseleave', cancel);
  ev('touchstart', start); ev('touchend', cancel); ev('touchcancel', cancel);
}
function checkLeaderChange() {
  const currentLeader = sortedPlayers()[0]?.id || '';
  if (currentLeader && currentLeader !== previousLeaderId && previousLeaderId !== '') {
    const leader = state.players.find(p => p.id === currentLeader);
    if (leader) spawnBig(leader.name + ' Takes the Lead!', true);
  }
  previousLeaderId = currentLeader;
}
function onRemovePlayer(e: Event) {
  const card = (e.currentTarget as HTMLElement).closest('.player-card') as HTMLElement;
  const pid = card?.dataset.playerId;
  if (pid) { state = removePlayer(state, pid); renderAll(); }
}
function onRenamePlayer(e: Event) {
  const card = (e.currentTarget as HTMLElement).closest('.player-card') as HTMLElement;
  const pid = card?.dataset.playerId;
  if (pid) showRenamePopup(pid);
}
function showRenamePopup(playerId: string) {
  const player = state.players.find(p => p.id === playerId);
  if (!player) return;
  const overlay = document.createElement('div');
  overlay.className = 'rename-popup';
  overlay.innerHTML = `<div class="rename-popup-content"><h3>${ui.renamePlayer}</h3><input type="text" id="rename-input" value="${player.name}" autocomplete="off" /><div class="rename-popup-actions"><button type="button" class="btn-rename-cancel" id="rename-cancel-btn">${ui.cancelLabel}</button><button type="button" class="btn-rename-confirm" id="rename-confirm-btn">${ui.confirmLabel}</button></div></div>`;
  document.body.appendChild(overlay);
  const input = overlay.querySelector('#rename-input') as HTMLInputElement;
  input.focus();
  input.select();
  overlay.querySelector('#rename-cancel-btn')?.addEventListener('click', () => overlay.remove());
  overlay.querySelector('#rename-confirm-btn')?.addEventListener('click', () => {
    const newName = input.value.trim();
    if (newName) { state = renamePlayer(state, playerId, newName); renderAll(); }
    overlay.remove();
  });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}
function updateScoreDisplay(pid: string) {
  const el = $('score-val-' + pid);
  if (!el) return;
  const player = state.players.find(p => p.id === pid);
  if (player) el.textContent = String(player.total);
  el.classList.remove('pulse-score');
  void (el as Record<string, unknown>)['offset' + 'Width'];
  el.classList.add('pulse-score');
}
function spawnScoreFx(delta: number, row: HTMLElement, e: MouseEvent) {
  const sign = delta > 0 ? '+' : '';
  const txt = sign + delta;
  const rect = ((row as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
  spawnParticle(row, { text: txt, x: e.clientX - rect.left, y: e.clientY - rect.top, isPos: delta > 0 });
  if (Math.abs(delta) >= 5) spawnBig(txt, delta > 0);
}
function onScoreAdjust(e: Event) {
  const row = (e.currentTarget as HTMLElement).closest('.score-row') as HTMLElement;
  const pid = row?.dataset.playerId;
  const roundIdx = parseInt(row?.dataset.roundIndex || '0');
  const delta = parseInt((e.currentTarget as HTMLElement).dataset.delta || '0');
  if (!pid) return;
  state = updateRoundScore(state, roundIdx, pid, delta);
  updateScoreDisplay(pid);
  reorderLB(leaderboardList);
  reorderLB(leaderboardInline);
  checkLeaderChange();
  spawnScoreFx(delta, row, e as MouseEvent);
  saveState();
}
function renderRoundScores() {
  if (state.rounds.length === 0) {
    roundScoreRows.innerHTML = `<div class="no-round-message">${emptySvg}<span>${ui.noRoundsYet}</span></div>`;
    roundLabel.textContent = `${ui.currentRoundLabel}: --`;
    startRoundBtn.style.display = 'inline-block';
    nextRoundBtn.style.display = 'none';
    roundScoringPanel?.classList.remove('has-scores');
    return;
  }
  roundScoringPanel?.classList.add('has-scores');
  const idx = state.rounds.length - 1;
  const cr = state.rounds[idx];
  roundLabel.textContent = `${ui.roundLabel} ${cr.round}`;
  startRoundBtn.style.display = 'none';
  nextRoundBtn.style.display = 'inline-block';
  roundScoreRows.innerHTML = state.players.map(p => {
    const sc = cr.scores[p.id] || 0;
    return `<div class="score-row" data-player-id="${p.id}" data-round-index="${idx}"><span class="score-row-name">${p.name}</span><div class="score-row-controls"><button type="button" class="btn-score-adjust dec" data-delta="-1">-</button><button type="button" class="btn-score-adjust dec" data-delta="-5">-5</button><span class="score-row-value" id="score-val-${p.id}">${sc}</span><button type="button" class="btn-score-adjust inc" data-delta="5">+5</button><button type="button" class="btn-score-adjust inc" data-delta="1">+</button></div></div>`;
  }).join('');
  roundScoreRows.querySelectorAll('.btn-score-adjust').forEach(b => b.addEventListener('click', onScoreAdjust));
}
function renderHistory() {
  if (state.rounds.length === 0) {
    historyContent.innerHTML = `<div class="no-history-msg">${ui.noRoundsYet}</div>`;
    undoRoundBtn.style.display = 'none';
    return;
  }
  undoRoundBtn.style.display = 'inline-block';
  historyContent.innerHTML = [...state.rounds].reverse().map(r => {
    const lines = state.players.map(p => {
      const sc = r.scores[p.id];
      if (sc === undefined) return null;
      const cls = sc > 0 ? 'positive' : 'negative';
      const fCls = sc === 0 ? 'zero' : cls;
      const sign = sc >= 0 ? '+' : '';
      return `<div class="history-score-line"><span class="history-player-name">${p.name}</span><span class="history-player-score ${fCls}">${sign}${sc}</span></div>`;
    }).filter(Boolean).join('');
    const roundTotal = state.players.reduce((acc, p) => acc + (r.scores[p.id] || 0), 0);
    return `<div class="history-round-card"><div class="history-round-header"><span class="history-round-title">${ui.roundLabel} ${r.round}</span><span class="history-round-total">Total: ${roundTotal >= 0 ? '+' : ''}${roundTotal}</span></div><div class="history-scores-body">${lines}</div></div>`;
  }).join('');
}
function renderAll() {
  renderPlayerList();
  renderLB(leaderboardList, ui.noPlayersHint);
  renderRoundScores();
  renderHistory();
  renderLB(leaderboardInline, ui.noPlayersHint);
  const hasPlayers = state.players.length > 0;
  startRoundBtn.disabled = !hasPlayers;
  resetGameBtn.disabled = !hasPlayers;
  saveState();
}
addPlayerBtn.addEventListener('click', () => {
  const n = addPlayerInput.value.trim(); if (!n) return;
  state = addPlayer(state, n); addPlayerInput.value = ''; previousLeaderId = ''; renderAll(); addPlayerInput.focus();
});
addPlayerInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addPlayerBtn.click(); });
startRoundBtn.addEventListener('click', () => { state = startNewRound(state); renderAll(); });
nextRoundBtn.addEventListener('click', () => { state = startNewRound(state); renderAll(); });
longPress(resetGameBtn, 800, () => { state = resetGame(state); renderAll(); previousLeaderId = ''; });
longPress(resetAllBtn, 1600, () => { state = createBlankState(); previousLeaderId = ''; renderAll(); });
undoRoundBtn.addEventListener('click', () => {
  if (state.rounds.length === 0) return; state = deleteLastRound(state); previousLeaderId = ''; renderAll();
});
tabListeners();
previousLeaderId = sortedPlayers()[0]?.id || '';
renderAll();