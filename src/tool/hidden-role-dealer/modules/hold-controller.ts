import { ParticleEffects } from './particle-effects';

export class HoldController {
  private container: HTMLElement;
  private particles: ParticleEffects;
  private holdTimer: number | null = null;
  private isHolding: boolean = false;
  private onReveal: () => void;

  constructor(container: HTMLElement, onReveal: () => void) {
    this.container = container;
    this.particles = new ParticleEffects(container);
    this.onReveal = onReveal;
  }

  public start(x: number, y: number): void {
    const wrapper = this.container.querySelector('.hrd-hold-button-wrapper');
    if (!wrapper) return;
    this.isHolding = true;
    wrapper.classList.add('holding');
    this.holdTimer = window.setTimeout(() => {
      if (this.isHolding) {
        this.particles.spawn(x, y, 'var(--dealer-neutral)');
        this.onReveal();
      }
    }, 1200);
  }

  public end(): void {
    this.isHolding = false;
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
    const wrapper = this.container.querySelector('.hrd-hold-button-wrapper');
    if (wrapper) wrapper.classList.remove('holding');
  }
}
