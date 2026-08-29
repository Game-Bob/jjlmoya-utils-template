export class SoundEffects {
  private ctx: AudioContext | null = null;
  private isMuted = false;

  public setMute(muted: boolean): void {
    this.isMuted = muted;
  }

  private initCtx(): void {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTick(): void {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  public playCountdown(): void {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 1.5);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.5);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.5);
  }

  public playWinner(): void {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25];

    notes.forEach((freq, index) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.1);
      
      gain.gain.setValueAtTime(0.001, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.2, now + index * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.1 + 0.6);

      osc.start(now + index * 0.1);
      osc.stop(now + index * 0.1 + 0.6);
    });
  }
}
