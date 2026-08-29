export class SettingsBinder {
  private sectorsCount: number = 8;
  private diceType: string = 'd6';
  private maxCustomDist: number = 12;
  private hitChance: number = 33;
  private windDriftMode: boolean = false;

  onSectorsChange: ((count: number) => void) | null = null;
  onModeChange: ((wind: boolean) => void) | null = null;
  onDiceChange: ((dice: string) => void) | null = null;
  onCustomMaxChange: ((max: number) => void) | null = null;
  onHitChanceChange: ((chance: number) => void) | null = null;

  getSectors(): number { return this.sectorsCount; }
  getDice(): string { return this.diceType; }
  getMode(): boolean { return this.windDriftMode; }
  getMaxDist(): number { return this.maxCustomDist; }
  getHitChance(): number { return this.hitChance; }

  bind(root: HTMLElement): void {
    this.bindSectorToggle(root);
    this.bindModeToggle(root);
    this.bindDiceSelect(root);
    this.bindCustomMax(root);
    this.bindHitChance(root);
  }

  private bindSectorToggle(root: HTMLElement): void {
    const btns = root.querySelectorAll('[data-sectors]');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.sectorsCount = parseInt(btn.getAttribute('data-sectors') || '8', 10);
        this.onSectorsChange?.(this.sectorsCount);
      });
    });
  }

  private bindModeToggle(root: HTMLElement): void {
    const btns = root.querySelectorAll('[data-mode]');
    const hint = root.querySelector('#sds-wind-hint') as HTMLElement;
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.windDriftMode = btn.getAttribute('data-mode') === 'wind';
        hint.style.display = this.windDriftMode ? 'block' : 'none';
        this.onModeChange?.(this.windDriftMode);
      });
    });
  }

  private bindDiceSelect(root: HTMLElement): void {
    const select = root.querySelector('#sds-dice-select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      this.diceType = select.value;
      const wrap = root.querySelector('#sds-custom-dist-wrapper') as HTMLElement;
      wrap.style.display = this.diceType === 'custom' ? 'block' : 'none';
      this.onDiceChange?.(this.diceType);
    });
  }

  private bindCustomMax(root: HTMLElement): void {
    const input = root.querySelector('#sds-custom-max') as HTMLInputElement;
    input.addEventListener('input', () => {
      this.maxCustomDist = Math.max(1, parseInt(input.value, 10) || 12);
      this.onCustomMaxChange?.(this.maxCustomDist);
    });
  }

  private bindHitChance(root: HTMLElement): void {
    const input = root.querySelector('#sds-hit-chance') as HTMLInputElement;
    const display = root.querySelector('#sds-hit-chance-val') as HTMLElement;
    input.addEventListener('input', () => {
      this.hitChance = parseInt(input.value, 10);
      display.textContent = `${this.hitChance}%`;
      this.onHitChanceChange?.(this.hitChance);
    });
  }
}
