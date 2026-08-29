export class Particle {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  size: number = 0;
  alpha: number = 1;
  color: string = '';

  constructor(w: number, h: number, angleRad: number, burst: boolean) {
    if (burst) {
      this.x = w / 2;
      this.y = h / 2;
      const speed = Math.random() * 6 + 4;
      this.vx = Math.cos(angleRad) * speed + (Math.random() - 0.5) * 2;
      this.vy = Math.sin(angleRad) * speed + (Math.random() - 0.5) * 2;
      this.size = Math.random() * 3 + 2;
      this.color = '56, 189, 248';
    } else {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = Math.cos(angleRad) * 0.8 + (Math.random() - 0.5) * 0.2;
      this.vy = Math.sin(angleRad) * 0.8 + (Math.random() - 0.5) * 0.2;
      this.size = Math.random() * 1.5 + 0.5;
      this.color = '125, 211, 252';
    }
  }

  update(): void {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.012;
  }
}

interface FrameCtx {
  ctx: CanvasRenderingContext2D;
  cx: number;
  cy: number;
  progress: number;
  tgtX: number;
  tgtY: number;
}

export class Animator {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  active: boolean = false;
  private startTime: number = 0;
  private isHit: boolean = false;
  private distance: number = 0;
  private targetX: number = 100;
  private targetY: number = 100;
  private particles: Particle[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = 300;
    this.canvas.height = 300;
  }

  start(opts: { hit: boolean; dist: number; tgtX: number; tgtY: number }): void {
    this.active = true;
    this.startTime = performance.now();
    this.isHit = opts.hit;
    this.distance = opts.dist;
    this.targetX = opts.tgtX;
    this.targetY = opts.tgtY;
    this.particles = [];
  }

  drawFrame(): boolean {
    const elapsed = performance.now() - this.startTime;
    const duration = this.isHit ? 1800 : 2200;
    const progress = Math.min(elapsed / duration, 1);
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const s = w / 200;
    const tgtX = cx + (this.targetX - 100) * s;
    const tgtY = cy + (this.targetY - 100) * s;
    const f: FrameCtx = { ctx: this.ctx, cx, cy, progress, tgtX, tgtY };

    this.ctx.clearRect(0, 0, w, h);

    if (this.isHit) {
      this.drawHitPulse(f);
      this.drawHitRings(f);
      this.drawHitText(f);
    } else {
      this.drawScatterTravel(f);
      this.drawScatterImpact(f);
    }

    this.drawParticles();
    return progress >= 1;
  }

  reset(): void {
    this.active = false;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles = [];
  }

  getResult(): { isHit: boolean; distance: number } {
    return { isHit: this.isHit, distance: this.distance };
  }

  private drawHitPulse(f: FrameCtx): void {
    if (f.progress >= 0.35) return;
    const t = f.progress / 0.35;
    const pulse = Math.sin(t * Math.PI * 3) * 0.5 + 0.5;
    const r = 5 + pulse * 18;
    const g = f.ctx.createRadialGradient(f.cx, f.cy, 0, f.cx, f.cy, r);
    g.addColorStop(0, `rgba(52, 211, 153, ${0.7 * (1 - pulse * 0.3)})`);
    g.addColorStop(1, 'rgba(52, 211, 153, 0)');
    f.ctx.fillStyle = g;
    f.ctx.beginPath();
    f.ctx.arc(f.cx, f.cy, r, 0, Math.PI * 2);
    f.ctx.fill();
  }

  private drawHitRings(f: FrameCtx): void {
    if (f.progress <= 0.3 || f.progress >= 0.85) return;
    const t = (f.progress - 0.3) / 0.55;
    const rr = 5 + t * 75;
    const a = 1 - t;
    f.ctx.strokeStyle = `rgba(52, 211, 153, ${a})`;
    f.ctx.lineWidth = 2;
    f.ctx.beginPath();
    f.ctx.arc(f.cx, f.cy, rr, 0, Math.PI * 2);
    f.ctx.stroke();
    f.ctx.strokeStyle = `rgba(52, 211, 153, ${a * 0.5})`;
    f.ctx.lineWidth = 1.5;
    f.ctx.beginPath();
    f.ctx.arc(f.cx, f.cy, rr * 0.6, 0, Math.PI * 2);
    f.ctx.stroke();
  }

  private drawHitText(f: FrameCtx): void {
    if (f.progress <= 0.6) return;
    const t = Math.min((f.progress - 0.6) / 0.4, 1);
    f.ctx.save();
    f.ctx.translate(f.cx, f.cy + 5);
    f.ctx.scale(0.5 + t * 0.5, 0.5 + t * 0.5);
    f.ctx.font = 'bold 16px Orbitron, system-ui, sans-serif';
    f.ctx.textAlign = 'center';
    f.ctx.textBaseline = 'middle';
    f.ctx.shadowColor = 'rgba(52, 211, 153, 0.6)';
    f.ctx.shadowBlur = 12;
    f.ctx.fillStyle = `rgba(52, 211, 153, ${Math.min(t * 2, 1)})`;
    f.ctx.fillText('DIRECT HIT', 0, 0);
    f.ctx.restore();
  }

  private drawScatterTravel(f: FrameCtx): void {
    if (f.progress >= 0.6) return;
    const t = f.progress / 0.6;
    const eased = 1 - (1 - t) * (1 - t);
    const curX = f.cx + (f.tgtX - f.cx) * eased;
    const curY = f.cy + (f.tgtY - f.cy) * eased;

    f.ctx.beginPath();
    f.ctx.moveTo(f.cx, f.cy);
    f.ctx.lineTo(curX, curY);
    f.ctx.strokeStyle = 'rgba(248, 113, 113, 0.5)';
    f.ctx.lineWidth = 2;
    f.ctx.setLineDash([4, 6]);
    f.ctx.stroke();
    f.ctx.setLineDash([]);

    this.drawProjectile(f.ctx, curX, curY);

    if (Math.random() < 0.5) {
      const along = eased - 0.15 * Math.random();
      this.spawnTrailParticle(f.cx + (f.tgtX - f.cx) * Math.max(along, 0), f.cy + (f.tgtY - f.cy) * Math.max(along, 0));
    }
  }

  private drawScatterImpact(f: FrameCtx): void {
    if (f.progress < 0.6) return;
    const t = (f.progress - 0.6) / 0.4;
    const impactT = Math.min(t * 2, 1);

    this.drawImpactGlow(f.ctx, f.tgtX, f.tgtY, impactT);
    this.drawImpactLabel(f);
    this.spawnImpactParticles(f.ctx, f.tgtX, f.tgtY, t);
  }

  private drawProjectile(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
    g.addColorStop(0, 'rgba(248, 113, 113, 0.7)');
    g.addColorStop(1, 'rgba(248, 113, 113, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f87171';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawImpactGlow(ctx: CanvasRenderingContext2D, x: number, y: number, t: number): void {
    const r = 5 + t * 28;
    const a = 0.6 * (1 - t * 0.5);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(248, 113, 113, ${a})`);
    g.addColorStop(1, 'rgba(248, 113, 113, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f87171';
    ctx.beginPath();
    ctx.arc(x, y, 3 + t * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawImpactLabel(f: FrameCtx): void {
    const t = (f.progress - 0.6) / 0.4;
    if (t <= 0.2) return;
    const textT = Math.min((t - 0.2) / 0.3, 1);
    const dx = f.tgtX - f.cx;
    const dy = f.tgtY - f.cy;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    f.ctx.save();
    f.ctx.font = 'bold 12px Orbitron, system-ui, sans-serif';
    f.ctx.textAlign = 'center';
    f.ctx.textBaseline = 'middle';
    f.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    f.ctx.shadowBlur = 4;
    f.ctx.fillStyle = `rgba(248, 113, 113, ${textT})`;
    f.ctx.fillText(`${this.distance}"`, f.tgtX + (dx / len) * 22, f.tgtY + (dy / len) * 18);
    f.ctx.restore();
  }

  private spawnTrailParticle(x: number, y: number): void {
    const p = new Particle(this.canvas.width, this.canvas.height, 0, false);
    p.x = x;
    p.y = y;
    p.color = '248, 113, 113';
    p.size = Math.random() * 2 + 1;
    this.particles.push(p);
  }

  private spawnImpactParticles(ctx: CanvasRenderingContext2D, x: number, y: number, t: number): void {
    if (t >= 0.5 || Math.random() >= 0.7) return;
    const a = Math.random() * Math.PI * 2;
    const spd = Math.random() * 3 + 1;
    const p = new Particle(this.canvas.width, this.canvas.height, a, false);
    p.x = x;
    p.y = y;
    p.vx = Math.cos(a) * spd;
    p.vy = Math.sin(a) * spd;
    p.color = '248, 113, 113';
    p.size = Math.random() * 2.5 + 1;
    p.alpha = 1;
    this.particles.push(p);
  }

  private drawParticles(): void {
    const ctx = this.ctx;
    this.particles = this.particles.filter(p => {
      p.update();
      if (p.alpha <= 0) return false;
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      return true;
    });
  }
}
