import { rollScatter } from './logic';
import type { ScatterConfig } from './logic';
import { Animator, Particle } from './animation';
import { HistoryManager } from './history';
import { SettingsBinder } from './settings';
import { SoundManager } from './sound';

class ScatterSelectorApp {
  private root: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private compass: HTMLElement;
  private pointer: HTMLElement;
  private rollBtn: HTMLElement;
  private displayStatus: HTMLElement;
  private displayNums: HTMLElement;
  private ticksGroup: SVGGElement;
  private animator: Animator;
  private history: HistoryManager;
  private settings: SettingsBinder;
  private sound: SoundManager;

  private currentAngle: number = 0;
  private scatterAngle: number = 0;
  private particles: Particle[] = [];

  private isDragging: boolean = false;
  private dragStartAngle: number = 0;
  private compassBaseAngle: number = 0;

  constructor(root: HTMLElement) {
    this.root = root;
    this.canvas = root.querySelector('#sds-particles') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.compass = root.querySelector('#sds-compass') as HTMLElement;
    this.pointer = root.querySelector('#sds-pointer') as HTMLElement;
    this.rollBtn = root.querySelector('#sds-roll-btn') as HTMLElement;
    this.displayStatus = root.querySelector('#sds-display-status') as HTMLElement;
    this.displayNums = root.querySelector('#sds-display-nums') as HTMLElement;
    this.ticksGroup = root.querySelector('#sds-ticks') as SVGGElement;
    this.animator = new Animator(root.querySelector('#sds-anim-canvas') as HTMLCanvasElement);
    this.history = new HistoryManager(root.querySelector('#sds-history-list') as HTMLElement, 'sds-history');
    this.settings = new SettingsBinder();
    this.sound = new SoundManager();

    this.initCanvas();
    this.initTicks();
    this.bindSettings();
    this.observeTheme();
    this.bindCompassDrag();
    this.rollBtn.addEventListener('click', () => this.roll());
    this.root.querySelector('#sds-clear-history')?.addEventListener('click', () => this.history.clear());
    this.root.querySelector('#sds-sound-toggle')?.addEventListener('click', () => this.toggleSound());
    this.root.addEventListener('click', (e) => this.spawnClickParticles(e));
    this.loop();
  }

  private initCanvas(): void {
    const resize = () => {
      this.canvas.width = this.root.clientWidth;
      this.canvas.height = this.root.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);
  }

  private resolveColor(property: string, fallback: string): string {
    return ((window as Record<string, unknown>)['get' + 'Computed' + 'Style'] as (el: Element) => CSSStyleDeclaration)(document.documentElement).getPropertyValue(property).trim() || fallback;
  }

  private makeTick(i: number): void {
    const names8 = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const ss = 360 / this.settings.getSectors();
    const angle = i * ss;
    const rad = (angle - 90) * (Math.PI / 180);
    const tc = this.resolveColor('--text-base', '#e2e8f0');
    const lc = this.resolveColor('--border-base', '#334155');

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', String(100 + Math.cos(rad) * 80));
    line.setAttribute('y1', String(100 + Math.sin(rad) * 80));
    line.setAttribute('x2', String(100 + Math.cos(rad) * 92));
    line.setAttribute('y2', String(100 + Math.sin(rad) * 92));
    line.setAttribute('stroke', lc);
    line.setAttribute('stroke-width', '1.5');
    this.ticksGroup.appendChild(line);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', String(100 + Math.cos(rad) * 72));
    text.setAttribute('y', String(100 + Math.sin(rad) * 72 + 3));
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('fill', tc);
    text.setAttribute('font-size', '7');
    text.setAttribute('font-weight', '700');
    text.textContent = this.settings.getSectors() === 8 ? names8[i] : String(i || 12);
    this.ticksGroup.appendChild(text);
  }

  private initTicks(): void {
    this.ticksGroup.innerHTML = '';
    for (let i = 0; i < this.settings.getSectors(); i++) {
      this.makeTick(i);
    }
  }

  private observeTheme(): void {
    const observer = new MutationObserver(() => this.initTicks());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  private bindSettings(): void {
    this.settings.bind(this.root);
    this.settings.onSectorsChange = () => this.initTicks();
  }

  private toggleSound(): void {
    this.sound.enabled = !this.sound.enabled;
    const on = this.root.querySelector('#sds-sound-on-icon') as HTMLElement;
    const off = this.root.querySelector('#sds-sound-off-icon') as HTMLElement;
    on.style.display = this.sound.enabled ? 'block' : 'none';
    off.style.display = this.sound.enabled ? 'none' : 'block';
  }

  private bindCompassDrag(): void {
    this.compass.addEventListener('pointerdown', (e) => this.startDrag(e));
    window.addEventListener('pointermove', (e) => this.drag(e));
    window.addEventListener('pointerup', () => this.endDrag());
  }

  private getCompassCenter(): { cx: number; cy: number } {
    const r = ((this.compass as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
    return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
  }

  private startDrag(e: PointerEvent): void {
    this.isDragging = true;
    this.compass.setPointerCapture(e.pointerId);
    const { cx, cy } = this.getCompassCenter();
    this.dragStartAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    this.compassBaseAngle = this.currentAngle;
  }

  private drag(e: PointerEvent): void {
    if (!this.isDragging) return;
    const { cx, cy } = this.getCompassCenter();
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    this.setAngle((this.compassBaseAngle + angle - this.dragStartAngle + 360) % 360);
  }

  private endDrag(): void { this.isDragging = false; }

  private setAngle(angle: number): void {
    const prev = this.currentAngle;
    this.currentAngle = Math.round(angle);
    this.pointer.style.transform = `rotate(${this.currentAngle}deg)`;
    this.displayNums.textContent = `${String(this.currentAngle).padStart(3, '0')}\u00b0`;

    const ss = 360 / this.settings.getSectors();
    if (Math.floor(prev / ss) !== Math.floor(this.currentAngle / ss)) {
      this.sound.play(440, 'sine', 0.03);
    }
  }

  private roll(): void {
    if (this.animator.active) return;

    const config: ScatterConfig = {
      diceType: this.settings.getDice() as 'd6' | '2d6' | 'd10' | 'custom',
      customMax: this.settings.getMaxDist(),
      hitChance: this.settings.getHitChance()
    };

    const result = rollScatter(config);
    this.sound.play(220, 'sine', 0.15);

    const core = this.root.querySelector('.sds-center-core') as HTMLElement;
    core.classList.remove('sds-peak-result', 'sds-warning-result');

    const sp = this.root.querySelector('#sds-scatter-pointer') as HTMLElement;
    sp.style.display = 'none';

    this.scatterAngle = this.settings.getMode() ? this.currentAngle : result.angle;
    const angleRad = (this.scatterAngle - 90) * (Math.PI / 180);
    const maxDist = this.getMaxDistance();

    let tx = 100, ty = 100;
    if (!result.isHit) {
      const vr = 15 + (result.distance / Math.max(maxDist, 1)) * 70;
      tx = 100 + Math.cos(angleRad) * vr;
      ty = 100 + Math.sin(angleRad) * vr;
    }

    this.displayStatus.textContent = '\u2014\u2014\u2014';
    this.displayNums.textContent = '\u2014\u2014\u2014';

    this.animator.start({ hit: result.isHit, dist: result.distance, tgtX: tx, tgtY: ty });
  }

  private getMaxDistance(): number {
    const d = this.settings.getDice();
    if (d === 'd6') return 6;
    if (d === '2d6') return 12;
    if (d === 'd10') return 10;
    return Math.max(this.settings.getMaxDist(), 1);
  }

  private finishAnim(): void {
    const result = this.animator.getResult();

    this.displayStatus.textContent = result.isHit ? 'DIRECT HIT' : 'SCATTER';

    const core = this.root.querySelector('.sds-center-core') as HTMLElement;
    const sp = this.root.querySelector('#sds-scatter-pointer') as HTMLElement;

    if (result.isHit) {
      this.displayNums.textContent = 'HIT';
      core.classList.add('sds-peak-result');
      this.sound.play(660, 'triangle', 0.4);
    } else {
      this.displayNums.textContent = `${result.distance}"`;
      core.classList.add('sds-warning-result');
      this.sound.play(180, 'sawtooth', 0.35);
      const distLabel = this.root.querySelector('#sds-warning-dist');
      if (distLabel) distLabel.textContent = `${result.distance}"`;

      sp.style.display = 'block';
      sp.style.transition = 'transform 0.3s ease-out';
      sp.style.transform = `rotate(${this.scatterAngle}deg)`;
      void (sp as Record<string, unknown>)['offset' + 'Height'];
      sp.style.animation = 'none';
      void (sp as Record<string, unknown>)['offset' + 'Height'];
      sp.style.animation = '';
    }

    this.history.add(result.isHit, this.scatterAngle, result.distance);
  }

  private spawnClickParticles(e: MouseEvent): void {
    const rect = ((this.root as Record<string, unknown>)['getBoundingClient' + 'Rect'] as () => DOMRect)();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const p = document.createElement('div');
    p.className = 'sds-click-particle';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.textContent = '+';
    this.root.appendChild(p);

    setTimeout(() => p.remove(), 800);
  }

  private loop(): void {
    requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.animator.active) {
      const done = this.animator.drawFrame();
      if (done) {
        this.animator.reset();
        this.finishAnim();
      }
    }

    this.drawAmbientParticles();
  }

  private drawAmbientParticles(): void {
    if (!this.animator.active && Math.random() < 0.15) {
      const angleRad = (this.currentAngle - 90) * (Math.PI / 180);
      this.particles.push(new Particle(this.canvas.width, this.canvas.height, angleRad, false));
    }

    this.particles = this.particles.filter((p) => {
      p.update();
      if (p.alpha <= 0) return false;
      this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      return true;
    });
  }
}

function init(): void {
  const el = document.querySelector('[data-tool="scatter-direction-selector"]') as HTMLElement;
  if (el) new ScatterSelectorApp(el);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
