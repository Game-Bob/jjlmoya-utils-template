export class ParticleEffects {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public spawn(x: number, y: number, color: string): void {
    const count = 30;
    const parentRect = this.container.getBoundingClientRect();
    const relativeX = x - parentRect.left;
    const relativeY = y - parentRect.top;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'hrd-role-particle';
      
      const size = Math.random() * 8 + 6;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 80 + 40;
      
      const destinationX = Math.cos(angle) * distance;
      const destinationY = Math.sin(angle) * distance;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${relativeX}px`;
      particle.style.top = `${relativeY}px`;
      particle.style.setProperty('--tx', `${destinationX}px`);
      particle.style.setProperty('--ty', `${destinationY}px`);

      this.container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  }
}
