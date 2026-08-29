export class SoundManager {
  private ctx: AudioContext | null = null;
  enabled: boolean = true;

  play(freq: number, type: OscillatorType, dur: number): void {
    if (!this.enabled) return;
    const ACtor = (window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext) as typeof AudioContext;
    if (!this.ctx) this.ctx = new ACtor();
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    osc.start();
    osc.stop(this.ctx.currentTime + dur);
  }
}
