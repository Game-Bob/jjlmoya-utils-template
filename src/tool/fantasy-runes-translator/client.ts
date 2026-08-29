import type { RuneAlphabetKey, RuneCharacterResult, RuneCharacter } from './types';
import { translateText } from './logic';

const wrap = document.querySelector('.runes-wrap') as HTMLElement;
const input = document.getElementById('runes-input') as HTMLInputElement;
const seedIn = document.getElementById('runes-seed') as HTMLInputElement;
const seedTag = document.getElementById('seed-tag') as HTMLElement;
const seedShuf = document.getElementById('seed-shuffle-btn') as HTMLElement;
const seedToggle = document.getElementById('seed-toggle-btn') as HTMLElement;
const seedDrawer = document.getElementById('seed-drawer') as HTMLElement;
const output = document.getElementById('runes-output') as HTMLElement;
const detailCard = document.getElementById('detail-card') as HTMLElement;
const dName = document.getElementById('detail-name') as HTMLElement;
const dMeaning = document.getElementById('detail-meaning') as HTMLElement;
const dPhonetic = document.getElementById('detail-phonetic') as HTMLElement;
const copyBtn = document.getElementById('runes-copy-btn') as HTMLElement;
const clearBtn = document.getElementById('runes-clear-btn') as HTMLElement;
const pills = document.getElementById('alphabet-pills') as HTMLElement;
const gmBtn = document.getElementById('runes-gm-btn') as HTMLElement;
const gmOverlay = document.getElementById('gm-overlay') as HTMLElement;
const gmDisplay = document.getElementById('gm-runes') as HTMLElement;
const gmParts = document.getElementById('gm-particles') as HTMLElement;
const gmExit = document.getElementById('gm-exit-btn') as HTMLElement;
const refFoundBtn = document.getElementById('runes-ref-found-btn') as HTMLElement;
const refAllBtn = document.getElementById('runes-ref-all-btn') as HTMLElement;
const refOverlay = document.getElementById('ref-overlay') as HTMLElement;
const refGrid = document.getElementById('ref-grid') as HTMLElement;
const refTitle = document.getElementById('ref-title') as HTMLElement;
const refClose = document.getElementById('ref-close-btn') as HTMLElement;
const ALPHA_KEY = 'runes-alphabet';
let alphabet: RuneAlphabetKey = (localStorage.getItem(ALPHA_KEY) as RuneAlphabetKey) || 'elder-futhark';
let result: RuneCharacterResult[] = [];
let seed: number | null = null;
const discovered = new Set<string>();

function ui(key: string): string {
  try { return JSON.parse(wrap.getAttribute('data-ui') || '{}')[key] || ''; } catch { return ''; }
}

function spawnPart(sym: string, x: number, y: number) {
  const el = document.createElement('div');
  el.className = 'particle'; el.textContent = sym;
  el.style.cssText = `left:${x}px;top:${y}px;position:fixed`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

function spawnGmParts() {
  gmParts.innerHTML = '';
  const rs = ['ᚠ','ᛟ','ᚱ','ᚲ','ᚨ','ᚢ','ᛉ','ᚷ','ᚹ','ᛞ','ᛁ','ᛃ','ᛚ','ᛗ','ᚾ','ᛟ','ᛈ','ᛏ','ᛒ','ᛇ','ᛉ','ᚱ','ᛋ','ᚠ','ᚢ','ᚦ','ᚬ'];
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('span');
    p.className = 'gm-float'; p.textContent = rs[Math.floor(Math.random() * rs.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (0.7 + Math.random() * 1.3) + 'rem';
    p.style.animationDuration = (3 + Math.random() * 3) + 's';
    p.style.animationDelay = Math.random() * 4 + 's';
    gmParts.appendChild(p);
  }
}

function selPill(key: RuneAlphabetKey) {
  pills.querySelectorAll('.pill').forEach(b => b.classList.toggle('active', b.getAttribute('data-alphabet') === key));
}

function emptyOut() {
  output.innerHTML = '<div class="runes-output-empty"><span class="empty-rune">ᛟ</span><span class="empty-label">' + ui('noInput') + '</span></div>';
  output.classList.remove('has-chars');
}

function showDetail(c: RuneCharacter | null) {
  if (!c) { detailCard.classList.remove('vis'); return; }
  dName.textContent = c.name; dMeaning.textContent = c.meaning; dPhonetic.textContent = c.phonetic;
  detailCard.classList.add('vis');
}

function clickRune(cr: RuneCharacterResult, card: HTMLElement) {
  output.querySelectorAll('.rune-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  if (cr.char) {
    showDetail(cr.char);
    const r = ((card as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
    spawnPart(cr.char.symbol, r.left + r.width / 2, r.top);
  }
}

function render(rs: RuneCharacterResult[]) {
  output.classList.add('has-chars');
  result = rs;
  const shim = document.createElement('div');
  shim.className = 'shimmer';
  output.innerHTML = '';
  output.appendChild(shim);
  setTimeout(() => {
    const g = document.createElement('div');
    g.className = 'runes-grid';
    rs.forEach((cr, i) => {
      const c = document.createElement('div');
      c.className = 'rune-card'; c.style.animationDelay = i * 25 + 'ms';
      const sy = document.createElement('span');
      sy.className = 'sym'; sy.textContent = cr.char ? cr.char.symbol : '?';
      const le = document.createElement('span');
      le.className = 'let'; le.textContent = cr.input.toUpperCase();
      c.appendChild(sy); c.appendChild(le);
      c.addEventListener('click', () => clickRune(cr, c));
      g.appendChild(c);
    });
    output.innerHTML = '';
    output.appendChild(g);
  }, 300);
}

function translate() {
  const t = input.value.trim();
  if (!t) { emptyOut(); detailCard.classList.remove('vis'); result = []; return; }
  for (const ch of t.toLowerCase()) { if (ch >= 'a' && ch <= 'z') discovered.add(ch); }
  render(translateText(t, alphabet, seed).characters);
  detailCard.classList.remove('vis');
}

function copyText() {
  if (result.length === 0) return;
  const t = result.map(c => (c.char ? c.char.symbol : c.input)).join('');
  navigator.clipboard.writeText(t).catch(() => {});
}

function clearAll() {
  input.value = ''; seedIn.value = ''; seed = null; seedTag.style.display = 'none';
  emptyOut(); detailCard.classList.remove('vis'); result = [];
}

function applySeed() {
  const v = parseInt(seedIn.value);
  seed = isNaN(v) || v < 1 ? null : v;
  seedTag.style.display = seed ? '' : 'none';
  if (input.value.trim()) translate();
}

function randSeed() {
  seedIn.value = String(Math.floor(Math.random() * 99999) + 1);
  applySeed();
}

function openGm() {
  if (result.length === 0) return;
  gmDisplay.textContent = result.map(c => (c.char ? c.char.symbol : c.input)).join('');
  gmOverlay.classList.add('active');
  spawnGmParts();
}

function closeGm() { gmOverlay.classList.remove('active'); }

function openRef(mode: 'found' | 'all') {
  const mapping = translateText('abcdefghijklmnopqrstuvwxyz', alphabet, seed).characters;
  refTitle.textContent = mode === 'found' ? 'Discovered Runes' : 'Full Rune Dictionary';
  refGrid.innerHTML = mapping.map(c => {
    if (mode === 'found' && !discovered.has(c.input)) return '';
    return `<div class="ref-cell lit"><span class="ref-sym">${c.char ? c.char.symbol : '?'}</span><span class="ref-let">${c.input}</span></div>`;
  }).join('');
  refOverlay.classList.add('active');
  spawnRefParticles();
}

function spawnRefParticles() {
  const container = refOverlay;
  const existing = container.querySelectorAll('.gm-float');
  existing.forEach(e => e.remove());
  const rs = ['ᚠ','ᛟ','ᚱ','ᚲ','ᚨ','ᚢ','ᛉ','ᚷ','ᚹ','ᛞ','ᛁ','ᛃ','ᛚ','ᛗ','ᚾ','ᛟ','ᛈ','ᛏ','ᛒ','ᛇ','ᛉ','ᚱ','ᛋ','ᚠ','ᚢ','ᚦ','ᚬ'];
  for (let i = 0; i < 8; i++) {
    const p = document.createElement('span');
    p.className = 'gm-float'; p.textContent = rs[Math.floor(Math.random() * rs.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (0.7 + Math.random() * 1.3) + 'rem';
    p.style.animationDuration = (4 + Math.random() * 3) + 's';
    p.style.animationDelay = Math.random() * 4 + 's';
    container.appendChild(p);
  }
}
function closeRef() { refOverlay.classList.remove('active'); }

input.addEventListener('input', () => { if (input.value.trim()) translate(); });
seedIn.addEventListener('input', applySeed);
seedShuf.addEventListener('click', randSeed);
seedToggle.addEventListener('click', () => seedDrawer.classList.toggle('open'));
copyBtn.addEventListener('click', copyText);
clearBtn.addEventListener('click', clearAll);
gmBtn.addEventListener('click', openGm);
gmExit.addEventListener('click', closeGm);
refFoundBtn.addEventListener('click', () => openRef('found'));
refAllBtn.addEventListener('click', () => openRef('all'));
refClose.addEventListener('click', closeRef);
refOverlay.addEventListener('click', (e) => { if (e.target === refOverlay) closeRef(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeGm(); closeRef(); } });

pills.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest('.pill') as HTMLButtonElement;
  if (!b) return;
  alphabet = b.getAttribute('data-alphabet') as RuneAlphabetKey;
  localStorage.setItem(ALPHA_KEY, alphabet);
  selPill(alphabet);
  if (input.value.trim()) translate();
});

selPill(alphabet);
emptyOut();