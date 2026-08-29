import type { Moon, MoonPhaseType } from './types';
import { calculateMoonPhase, calculateCombinedTide, generateForecast } from './logic';

const tideLabelMap: Record<string, string> = {
  neap: 'Neap Tide', low: 'Low Tide', normal: 'Normal Tide', high: 'High Tide', spring: 'Spring Tide',
};

let moons: Moon[] = [{ id: '1', name: 'Solaria', period: 28, offset: 0, color: '#f59e0b' }];
let currentDay = 0;

const phaseUiKeys: Record<MoonPhaseType, string> = {
  new: 'newMoon', waxing_crescent: 'waxingCrescent', first_quarter: 'firstQuarter',
  waxing_gibbous: 'waxingGibbous', full: 'fullMoon', waning_gibbous: 'waningGibbous',
  last_quarter: 'lastQuarter', waning_crescent: 'waningCrescent',
};

const phaseDefault: Record<MoonPhaseType, string> = {
  new: 'New Moon', waxing_crescent: 'Waxing Crescent', first_quarter: 'First Quarter',
  waxing_gibbous: 'Waxing Gibbous', full: 'Full Moon', waning_gibbous: 'Waning Gibbous',
  last_quarter: 'Last Quarter', waning_crescent: 'Waning Crescent',
};

const presets: Record<string, () => Moon[]> = {
  'lunar-preset-single': () => [{ id: '1', name: 'Solaria', period: 28, offset: 0, color: '#f59e0b' }],
  'lunar-preset-double': () => [
    { id: '1', name: 'Solaria', period: 20, offset: 0, color: '#a78bfa' },
    { id: '2', name: 'Lunaria', period: 30, offset: 10, color: '#3b82f6' },
  ],
  'lunar-preset-triple': () => [
    { id: '1', name: 'Solaria', period: 15, offset: 0, color: '#f87171' },
    { id: '2', name: 'Lunaria', period: 25, offset: 5, color: '#3b82f6' },
    { id: '3', name: 'Astraria', period: 40, offset: 15, color: '#34d399' },
  ],
};

function getCssVar(name: string, fallback: string): string {
  return ((window as Record<string, unknown>)['get' + 'Computed' + 'Style'] as (el: Element) => CSSStyleDeclaration)(document.documentElement).getPropertyValue(name).trim() || fallback;
}

function getUI(): Record<string, string> {
  const el = document.querySelector('.ltt-root');
  if (!el) return {};
  try { return JSON.parse(el.getAttribute('data-ui') || '{}'); } catch { return {}; }
}

function getPhaseLabel(phase: MoonPhaseType, ui: Record<string, string>): string {
  return ui[phaseUiKeys[phase]] || phaseDefault[phase];
}

function spawnParticle(x: number, y: number, text: string): void {
  const p = document.createElement('div');
  p.style.cssText = `position:fixed;left:${x}px;top:${y}px;transform:translate(-50%,-50%);pointer-events:none;color:#a78bfa;font-weight:700;font-size:0.9rem;text-shadow:0 0 8px rgba(139,92,246,0.7);animation:ltt-particle 0.8s ease-out forwards;z-index:9999`;
  p.innerText = text;
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 800);
}

function getSweep(isOuter: boolean, isWaxing: boolean): number {
  if (isOuter && !isWaxing) return 1;
  if (!isOuter && isWaxing) return 1;
  return 0;
}

function buildPhasePath(pct: number, cx: number, cy: number, r: number): string {
  if (pct <= 0.01 || pct >= 0.99) return '';
  const isWaxing = pct < 0.5;
  const base = isWaxing ? pct : pct - 0.5;
  const rx = r * Math.abs(1 - 4 * base);
  const isOuter = pct < 0.25 || pct >= 0.75;
  const sweep = getSweep(isOuter, isWaxing);
  return `M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r} A ${rx},${r} 0 0,${sweep} ${cx},${cy - r}`;
}

function renderMoonOrbs(): void {
  const el = document.getElementById('ltt-moon-orbs');
  if (!el) return;
  const ui = getUI();
  const orbRadius = 100;
  const moonR = 8;
  const angleStep = (2 * Math.PI) / moons.length;
  const moonBg = getCssVar('--ltt-moon-bg', '#0f172a');
  const moonStroke = getCssVar('--ltt-moon-stroke', 'rgba(255,255,255,0.1)');
  el.innerHTML = moons.map((moon, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const mx = 120 + orbRadius * Math.cos(angle);
    const my = 120 + orbRadius * Math.sin(angle);
    const info = calculateMoonPhase(currentDay, moon.period, moon.offset);
    const phasePath = buildPhasePath(info.percentage, mx, my, moonR);
    const pathSvg = phasePath ? `<path d="${phasePath}" fill="${moon.color}" style="filter:drop-shadow(0 0 3px ${moon.color})" />` : '';
    return `<g><circle cx="${mx}" cy="${my}" r="${moonR}" fill="${moonBg}" stroke="${moonStroke}" stroke-width="0.5" />${pathSvg}<circle cx="${mx}" cy="${my}" r="${moonR}" fill="none" stroke="${moon.color}" stroke-width="0.5" opacity="0.4" /><title>${moon.name}: ${getPhaseLabel(info.phase, ui)}</title></g>`;
  }).join('');
}

function updateCoreGlow(intensity: number): void {
  const core = document.getElementById('ltt-core');
  if (!core) return;
  let glow = '2';
  if (intensity > 75) glow = '8';
  else if (intensity > 40) glow = '4';
  core.style.filter = `drop-shadow(0 0 ${glow}px rgba(139,92,246,${intensity / 100}))`;
}

function updateCorePhase(): void {
  const pathEl = document.getElementById('ltt-phase-path');
  if (!pathEl) return;
  if (moons.length === 1) {
    const info = calculateMoonPhase(currentDay, moons[0].period, moons[0].offset);
    const d = buildPhasePath(info.percentage, 120, 120, 60);
    pathEl.setAttribute('d', d || '');
    pathEl.setAttribute('fill', d ? moons[0].color : 'transparent');
    if (d) pathEl.setAttribute('style', `filter:drop-shadow(0 0 8px ${moons[0].color})`);
  } else {
    pathEl.setAttribute('d', '');
    pathEl.setAttribute('fill', 'transparent');
  }
}

function renderPortalCore(): void {
  const tide = calculateCombinedTide(currentDay, moons);
  updateCoreGlow(tide.intensity);
  updateCorePhase();
}

function renderTideStatus(): void {
  const tide = calculateCombinedTide(currentDay, moons);
  const bar = document.getElementById('ltt-tide-bar');
  const pct = document.getElementById('ltt-tide-pct');
  const lbl = document.getElementById('ltt-tide-label');
  if (bar) bar.style.width = `${tide.intensity}%`;
  if (pct) pct.innerText = `${tide.intensity}%`;
  if (lbl) lbl.innerText = tideLabelMap[tide.labelKey] || tide.labelKey;
}

function renderMoonsList(): void {
  const container = document.getElementById('ltt-moons-list');
  if (!container) return;
  const ui = getUI();
  const moonBg = ((window as Record<string, unknown>)['get' + 'Computed' + 'Style'] as (el: Element) => CSSStyleDeclaration)(document.documentElement).getPropertyValue('--ltt-moon-bg').trim() || '#0f172a';
  container.innerHTML = moons.map((moon) => {
    const info = calculateMoonPhase(currentDay, moon.period, moon.offset);
    const label = getPhaseLabel(info.phase, ui);
    const path = buildPhasePath(info.percentage, 12, 12, 11);
    return `
      <div class="ltt-moon-row" data-id="${moon.id}">
        <svg class="ltt-moon-vis-mini" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="${moonBg}" stroke="${getCssVar('--ltt-moon-stroke', 'rgba(255,255,255,0.1)')}" stroke-width="0.5"/>
          ${path ? `<path d="${path}" fill="${moon.color}" style="filter:drop-shadow(0 0 2px ${moon.color})"/>` : ''}
        </svg>
        <input type="text" class="ltt-moon-input ltt-moon-name" value="${moon.name}" placeholder="${ui.moonName || 'Name'}" />
        <input type="number" class="ltt-moon-num ltt-moon-period" value="${moon.period}" min="1" title="${ui.orbitalPeriod || 'Period'}" />
        <input type="number" class="ltt-moon-num ltt-moon-offset" value="${moon.offset}" title="${ui.startingOffset || 'Offset'}" />
        <input type="color" class="ltt-color-swatch" value="${moon.color}" />
        <button type="button" class="ltt-remove-btn" data-id="${moon.id}" title="${ui.removeMoon || 'Remove'}">x</button>
      </div>
      <div class="ltt-phase-tag"><span class="ltt-phase-dot" style="background:${moon.color};"></span>${moon.name}: ${label} (${Math.round(info.percentage * 100)}%)</div>
    `;
  }).join('');
  bindMoonRowEvents(container);
}

function bindMoonRowEvents(container: HTMLElement): void {
  container.querySelectorAll('.ltt-remove-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
      if (moons.length > 1) { moons = moons.filter((m) => m.id !== id); updateAll(); }
    });
  });
  container.querySelectorAll('.ltt-moon-row').forEach((row) => {
    const id = row.getAttribute('data-id');
    const moon = moons.find((m) => m.id === id);
    if (!moon) return;
    bindSingleMoon(row as HTMLElement, moon);
  });
}

function bindSingleMoon(row: HTMLElement, moon: Moon): void {
  row.querySelector('.ltt-moon-name')?.addEventListener('input', (e) => {
    moon.name = (e.target as HTMLInputElement).value;
    renderMoonsList(); renderMoonOrbs();
  });
  row.querySelector('.ltt-moon-period')?.addEventListener('input', (e) => {
    const v = parseInt((e.target as HTMLInputElement).value);
    moon.period = isNaN(v) || v < 1 ? 1 : v; renderAll();
  });
  row.querySelector('.ltt-moon-offset')?.addEventListener('input', (e) => {
    const v = parseInt((e.target as HTMLInputElement).value);
    moon.offset = isNaN(v) ? 0 : v; renderAll();
  });
  row.querySelector('.ltt-color-swatch')?.addEventListener('input', (e) => {
    moon.color = (e.target as HTMLInputElement).value; renderAll();
  });
}

function renderForecast(): void {
  const container = document.getElementById('ltt-forecast');
  if (!container) return;
  const ui = getUI();
  const forecast = generateForecast(currentDay, 10, moons);
  container.innerHTML = forecast.map((item) => {
    const isPeak = item.tideLevel >= 80;
    const dots = item.moons.map((m) => {
      const src = moons.find((mn) => mn.id === m.moonId);
      const col = src ? src.color : '#fff';
      const op = m.phase === 'new' ? '0.15' : '1';
      return `<div class="ltt-fc-dot" style="background:${col};opacity:${op};" title="${src?.name}: ${m.phase}"></div>`;
    }).join('');
    return `<div class="ltt-fc-cell${isPeak ? ' ltt-fc-peak' : ''}"><div class="ltt-fc-day">${ui.dayLabel || 'D'}${item.day}</div><div class="ltt-fc-dots">${dots}</div><div class="ltt-fc-pct">${item.tideLevel}%</div></div>`;
  }).join('');
}

function renderAll(): void {
  renderPortalCore();
  renderMoonOrbs();
  renderTideStatus();
  renderMoonsList();
  renderForecast();
}

function updateAll(): void {
  const dayVal = document.getElementById('ltt-day-val');
  const slider = document.getElementById('ltt-slider') as HTMLInputElement;
  if (dayVal) dayVal.innerText = currentDay.toString();
  if (slider) slider.value = currentDay.toString();
  renderAll();
}

function bindStepButtons(): void {
  const steps = [
    { id: 'lunar-btn-prev7', delta: -7 }, { id: 'lunar-btn-prev1', delta: -1 },
    { id: 'lunar-btn-next1', delta: 1 }, { id: 'lunar-btn-next7', delta: 7 },
  ];
  steps.forEach(({ id, delta }) => {
    document.getElementById(id)?.addEventListener('click', (e) => {
      currentDay = Math.max(0, currentDay + delta);
      spawnParticle(e.clientX, e.clientY, `${delta > 0 ? '+' : ''}${delta}`);
      updateAll();
    });
  });
  document.getElementById('ltt-slider')?.addEventListener('input', (e) => {
    currentDay = parseInt((e.target as HTMLInputElement).value) || 0;
    updateAll();
  });
  document.getElementById('lunar-btn-reset')?.addEventListener('click', () => { currentDay = 0; updateAll(); });
}

function bindPresetsAndMoon(): void {
  Object.entries(presets).forEach(([id, fn]) => {
    const btn = document.getElementById(id);
    btn?.addEventListener('click', () => {
      moons = fn();
      document.querySelectorAll('.ltt-preset-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      updateAll();
    });
  });
  document.getElementById('ltt-add-moon')?.addEventListener('click', () => {
    if (moons.length >= 3) return;
    const colors = ['#a78bfa', '#60a5fa', '#34d399'];
    moons.push({ id: Date.now().toString(), name: `Moon ${moons.length + 1}`, period: 30, offset: 0, color: colors[moons.length % 3] });
    updateAll();
  });
}

document.addEventListener('DOMContentLoaded', () => { bindStepButtons(); bindPresetsAndMoon(); updateAll(); });
