import type { ContactPoint, Particle, SelectionState } from '../types';

interface FrameContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  contacts: ContactPoint[];
  state: SelectionState;
  progress: number;
  wheelAngle: number;
  centroid: { x: number; y: number };
  isLightMode: boolean;
}

interface ContactDrawCtx {
  ctx: CanvasRenderingContext2D;
  c: ContactPoint;
  state: SelectionState;
  progress: number;
  isLightMode: boolean;
}

interface RouletteCtx {
  ctx: CanvasRenderingContext2D;
  contacts: ContactPoint[];
  wheelAngle: number;
  centroid: { x: number; y: number };
  state: SelectionState;
  isLightMode: boolean;
}

export class AnimationEffects {
  private particles: Particle[] = [];
  private pulsePhase = 0;

  public spawnCelebration(x: number, y: number, color: string): void {
    this.particles = [];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 8;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 4,
        color,
        alpha: 1
      });
    }
  }

  public updateAndDraw(fc: FrameContext): void {
    fc.ctx.clearRect(0, 0, fc.width, fc.height);
    this.pulsePhase = (this.pulsePhase + 0.05) % (Math.PI * 2);

    if (fc.contacts.length >= 2 && fc.state !== 'celebration' && fc.state !== 'selecting') {
      this.drawConnections(fc);
    }

    const showRoulette = fc.state === 'selecting' || (fc.state === 'celebration' && fc.centroid.x !== 0);
    if (showRoulette) {
      this.drawRoulette({
        ctx: fc.ctx, contacts: fc.contacts, wheelAngle: fc.wheelAngle,
        centroid: fc.centroid, state: fc.state, isLightMode: fc.isLightMode
      });
    }

    fc.contacts.forEach((c) => {
      this.drawContact({
        ctx: fc.ctx, c, state: fc.state,
        progress: fc.progress, isLightMode: fc.isLightMode
      });
    });

    this.drawParticles(fc.ctx);
  }

  private drawConnections(fc: FrameContext): void {
    fc.ctx.beginPath();
    fc.ctx.strokeStyle = fc.isLightMode ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)';
    fc.ctx.lineWidth = 2;
    for (let i = 0; i < fc.contacts.length; i++) {
      for (let j = i + 1; j < fc.contacts.length; j++) {
        fc.ctx.moveTo(fc.contacts[i]!.x, fc.contacts[i]!.y);
        fc.ctx.lineTo(fc.contacts[j]!.x, fc.contacts[j]!.y);
      }
    }
    fc.ctx.stroke();
  }

  private drawContact(dc: ContactDrawCtx): void {
    const isWinner = !!dc.c.isWinner;
    const isCelebration = dc.state === 'celebration';
    const showCountdown = dc.state === 'countdown' && !isCelebration;
    const showWinRing = isWinner && isCelebration;

    this.saveForLoserInCelebration(dc.ctx, isCelebration, isWinner);

    const pulseOffset = Math.sin(this.pulsePhase) * 4;
    const currentRadius = 45 + (isWinner ? pulseOffset * 2 : pulseOffset);

    this.drawGlow(dc.ctx, dc.c, currentRadius, isWinner);
    this.drawInnerCircle(dc.ctx, dc.c, currentRadius, dc.isLightMode);

    if (showCountdown) {
      this.drawCountdownRing({ ctx: dc.ctx, c: dc.c, radius: currentRadius, progress: dc.progress, isLightMode: dc.isLightMode });
    }

    if (showWinRing) {
      this.drawWinnerRing(dc.ctx, dc.c, currentRadius);
    }

    this.restoreForLoserInCelebration(dc.ctx, isCelebration, isWinner);
  }

  private saveForLoserInCelebration(ctx: CanvasRenderingContext2D, isCelebration: boolean, isWinner: boolean): void {
    if (isCelebration && !isWinner) {
      ctx.save();
      ctx.globalAlpha = 0.15;
    }
  }

  private restoreForLoserInCelebration(ctx: CanvasRenderingContext2D, isCelebration: boolean, isWinner: boolean): void {
    if (isCelebration && !isWinner) {
      ctx.restore();
    }
  }

  private drawGlow(ctx: CanvasRenderingContext2D, c: ContactPoint, radius: number, isWinner: boolean): void {
    ctx.beginPath();
    ctx.arc(c.x, c.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.shadowBlur = isWinner ? 30 : 15;
    ctx.shadowColor = c.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  private drawInnerCircle(ctx: CanvasRenderingContext2D, c: ContactPoint, radius: number, isLightMode: boolean): void {
    ctx.beginPath();
    ctx.arc(c.x, c.y, radius - 8, 0, Math.PI * 2);
    ctx.fillStyle = isLightMode ? 'rgba(248, 250, 252, 0.95)' : 'rgba(15, 23, 42, 0.85)';
    ctx.fill();
  }

  private drawCountdownRing(dc: { ctx: CanvasRenderingContext2D; c: ContactPoint; radius: number; progress: number; isLightMode: boolean }): void {
    const countdownRadius = dc.radius + 8;
    dc.ctx.beginPath();
    dc.ctx.arc(dc.c.x, dc.c.y, countdownRadius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * dc.progress);
    dc.ctx.strokeStyle = dc.isLightMode ? '#0f172a' : '#FFFFFF';
    dc.ctx.lineWidth = 4;
    dc.ctx.stroke();
  }

  private drawWinnerRing(ctx: CanvasRenderingContext2D, c: ContactPoint, radius: number): void {
    ctx.beginPath();
    ctx.arc(c.x, c.y, radius + 12, 0, Math.PI * 2);
    ctx.strokeStyle = c.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  private drawRoulette(rc: RouletteCtx): void {
    if (rc.contacts.length === 0) return;

    const outerRadius = 160;
    const innerRadius = 30;

    rc.ctx.save();
    rc.ctx.translate(rc.centroid.x, rc.centroid.y);
    rc.ctx.rotate(rc.wheelAngle);

    this.drawRouletteSectors(rc, outerRadius);
    this.drawRouletteCenter(rc.ctx, innerRadius, rc.isLightMode);

    rc.ctx.restore();

    this.drawPointer(rc.ctx, rc.centroid, outerRadius, rc.isLightMode);
  }

  private drawRouletteSectors(rc: RouletteCtx, outerRadius: number): void {
    const numSectors = rc.contacts.length;
    const sectorAngle = (Math.PI * 2) / numSectors;

    for (let i = 0; i < numSectors; i++) {
      const startA = i * sectorAngle;
      const endA = startA + sectorAngle;
      const contact = rc.contacts[i]!;

      rc.ctx.globalAlpha = (rc.state === 'celebration' && !contact.isWinner) ? 0.15 : 0.7;

      rc.ctx.beginPath();
      rc.ctx.moveTo(0, 0);
      rc.ctx.arc(0, 0, outerRadius, startA, endA);
      rc.ctx.closePath();
      rc.ctx.fillStyle = contact.color;
      rc.ctx.fill();

      rc.ctx.globalAlpha = 1.0;
      rc.ctx.beginPath();
      rc.ctx.moveTo(0, 0);
      rc.ctx.lineTo(Math.cos(startA) * outerRadius, Math.sin(startA) * outerRadius);
      rc.ctx.strokeStyle = rc.isLightMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(15, 23, 42, 0.5)';
      rc.ctx.lineWidth = 2;
      rc.ctx.stroke();
    }
  }

  private drawRouletteCenter(ctx: CanvasRenderingContext2D, innerRadius: number, isLightMode: boolean): void {
    ctx.beginPath();
    ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = isLightMode ? '#F8FAFC' : '#0F172A';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
    ctx.strokeStyle = isLightMode ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  private drawPointer(ctx: CanvasRenderingContext2D, centroid: { x: number; y: number }, outerRadius: number, isLightMode: boolean): void {
    ctx.beginPath();
    ctx.moveTo(centroid.x, centroid.y - outerRadius - 15);
    ctx.lineTo(centroid.x - 10, centroid.y - outerRadius);
    ctx.lineTo(centroid.x + 10, centroid.y - outerRadius);
    ctx.closePath();
    ctx.fillStyle = isLightMode ? '#0f172a' : '#FFFFFF';
    ctx.shadowBlur = 10;
    ctx.shadowColor = isLightMode ? '#0f172a' : '#FFFFFF';
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  private drawParticles(ctx: CanvasRenderingContext2D): void {
    this.particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.alpha -= 0.015;
    });

    this.particles = this.particles.filter((p) => p.alpha > 0);
  }
}
