import type { ContactPoint, SelectionState, SelectorMode } from '../types';

export class SelectionEngine {
  private mode: SelectorMode = 'finger';
  private state: SelectionState = 'idle';
  private contacts: ContactPoint[] = [];
  private winner: ContactPoint | null = null;

  private countdownTimer = 0;
  private readonly countdownDuration = 2000;

  private wheelAngle = 0;
  private wheelSpeed = 0;
  private isSpinning = false;
  private prevContactsCount = 0;

  private onStateChange: (state: SelectionState) => void;
  private onTick: () => void;
  private onWinnerChosen: (winner: ContactPoint) => void;
  private onCountdownStart: () => void;

  constructor(
    onStateChange: (state: SelectionState) => void,
    onTick: () => void,
    onWinnerChosen: (winner: ContactPoint) => void,
    onCountdownStart: () => void
  ) {
    this.onStateChange = onStateChange;
    this.onTick = onTick;
    this.onWinnerChosen = onWinnerChosen;
    this.onCountdownStart = onCountdownStart;
  }

  public setMode(mode: SelectorMode): void {
    this.mode = mode;
    this.reset();
  }

  public setContacts(contacts: ContactPoint[]): void {
    const prevCount = this.prevContactsCount;
    this.prevContactsCount = contacts.length;
    this.contacts = contacts;

    if (this.mode === 'finger') {
      this.handleFingerContacts(contacts, prevCount);
    }
  }

  private handleFingerContacts(contacts: ContactPoint[], prevCount: number): void {
    if (this.state === 'celebration') {
      this.handleCelebrationContacts(contacts, prevCount);
      return;
    }
    this.handleActiveContacts(contacts, prevCount);
  }

  private handleCelebrationContacts(contacts: ContactPoint[], prevCount: number): void {
    if (contacts.length === 0) {
      this.reset();
    } else if (contacts.length > prevCount) {
      this.restartCountdown(contacts);
    }
  }

  private handleActiveContacts(contacts: ContactPoint[], prevCount: number): void {
    if (contacts.length < 2) {
      if (this.state !== 'idle') {
        this.setState('idle');
        this.countdownTimer = 0;
      }
      return;
    }

    if (this.state === 'countdown' && contacts.length !== prevCount) {
      this.countdownTimer = 0;
      this.onCountdownStart();
    } else if (this.state === 'idle') {
      this.startCountdown();
    }
  }

  private restartCountdown(contacts: ContactPoint[]): void {
    this.reset();
    this.contacts = contacts;
    this.prevContactsCount = contacts.length;
    this.setState('countdown');
    this.countdownTimer = 0;
    this.onCountdownStart();
  }

  private startCountdown(): void {
    this.setState('countdown');
    this.countdownTimer = 0;
    this.onCountdownStart();
  }

  public startWheelSelection(): void {
    if (this.mode !== 'wheel' || this.contacts.length < 2 || this.isSpinning) return;
    this.winner = null;
    this.contacts.forEach((c) => (c.isWinner = false));
    this.setState('selecting');
    this.isSpinning = true;
    this.wheelSpeed = 0.3 + Math.random() * 0.2;
    this.onCountdownStart();
  }

  public update(dt: number): void {
    if (this.mode === 'finger') {
      this.updateFinger(dt);
    } else if (this.mode === 'wheel') {
      this.updateWheel(dt);
    }
  }

  private updateFinger(dt: number): void {
    if (this.state !== 'countdown') return;

    const prevSec = Math.floor(this.countdownTimer / 500);
    this.countdownTimer += dt;
    const currSec = Math.floor(this.countdownTimer / 500);

    if (currSec > prevSec && this.countdownTimer < this.countdownDuration) {
      this.onTick();
    }

    if (this.countdownTimer >= this.countdownDuration) {
      this.chooseFingerWinner();
    }
  }

  private updateWheel(dt: number): void {
    if (this.state !== 'selecting' || !this.isSpinning) return;

    this.wheelAngle += this.wheelSpeed * (dt / 16.666);
    this.wheelSpeed *= Math.pow(0.97, dt / 16.666);

    if (this.wheelSpeed < 0.002) {
      this.isSpinning = false;
      this.wheelSpeed = 0;
      this.chooseWheelWinner();
    }
  }

  public reset(): void {
    this.state = 'idle';
    this.winner = null;
    this.contacts.forEach((c) => (c.isWinner = false));
    this.countdownTimer = 0;
    this.wheelAngle = 0;
    this.wheelSpeed = 0;
    this.isSpinning = false;
    this.prevContactsCount = 0;
    this.onStateChange(this.state);
  }

  public getState(): SelectionState {
    return this.state;
  }

  public getCountdownProgress(): number {
    return Math.min(1, this.countdownTimer / this.countdownDuration);
  }

  public getWheelAngle(): number {
    return this.wheelAngle;
  }

  public getWinner(): ContactPoint | null {
    return this.winner;
  }

  private setState(state: SelectionState): void {
    this.state = state;
    this.onStateChange(state);
  }

  private chooseFingerWinner(): void {
    if (this.contacts.length < 2) {
      this.reset();
      return;
    }

    const winnerIndex = Math.floor(Math.random() * this.contacts.length);
    const winContact = this.contacts[winnerIndex]!;
    winContact.isWinner = true;
    this.winner = winContact;
    this.setState('celebration');
    this.onWinnerChosen(winContact);
  }

  private chooseWheelWinner(): void {
    if (this.contacts.length === 0) {
      this.reset();
      return;
    }

    const angle = this.normalizeAngle(this.wheelAngle);
    const pointerAngle = 3 * Math.PI / 2;
    const centroid = this.getCentroid();

    const closestContact = this.findClosestContact(angle, pointerAngle, centroid);

    closestContact.isWinner = true;
    this.winner = closestContact;
    this.setState('celebration');
    this.onWinnerChosen(closestContact);
  }

  private normalizeAngle(a: number): number {
    return ((a % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  }

  private findClosestContact(angle: number, pointerAngle: number, centroid: { x: number; y: number }): ContactPoint {
    let closestContact = this.contacts[0]!;
    let minDiff = Infinity;

    this.contacts.forEach((c) => {
      const dx = c.x - centroid.x;
      const dy = c.y - centroid.y;
      let contactAngle = Math.atan2(dy, dx);
      contactAngle = ((contactAngle + angle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

      let diff = Math.abs(contactAngle - pointerAngle);
      if (diff > Math.PI) {
        diff = 2 * Math.PI - diff;
      }

      if (diff < minDiff) {
        minDiff = diff;
        closestContact = c;
      }
    });

    return closestContact;
  }

  public getCentroid(): { x: number; y: number } {
    if (this.contacts.length === 0) {
      return { x: 0, y: 0 };
    }
    let sumX = 0;
    let sumY = 0;
    this.contacts.forEach((c) => {
      sumX += c.x;
      sumY += c.y;
    });
    return { x: sumX / this.contacts.length, y: sumY / this.contacts.length };
  }
}
