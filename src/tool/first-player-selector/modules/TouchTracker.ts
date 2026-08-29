import type { ContactPoint, SelectorMode } from '../types';

export class TouchTracker {
  private canvas: HTMLCanvasElement;
  private mode: SelectorMode = 'finger';
  private contacts: ContactPoint[] = [];
  private onContactsChange: (contacts: ContactPoint[]) => void;

  private colors = [
    '#E11D48',
    '#2563EB',
    '#16A34A',
    '#D97706',
    '#7C3AED',
    '#0891B2',
    '#DB2777',
    '#EA580C',
    '#4F46E5',
    '#65A30D'
  ];

  constructor(canvas: HTMLCanvasElement, onContactsChange: (contacts: ContactPoint[]) => void) {
    this.canvas = canvas;
    this.onContactsChange = onContactsChange;
    this.initEvents();
  }

  public setMode(mode: SelectorMode): void {
    this.mode = mode;
    this.contacts = [];
    this.onContactsChange(this.contacts);
  }

  public getContacts(): ContactPoint[] {
    return this.contacts;
  }

  public clear(): void {
    this.contacts = [];
    this.onContactsChange(this.contacts);
  }

  public setContacts(contacts: ContactPoint[]): void {
    this.contacts = contacts;
    this.onContactsChange(this.contacts);
  }

  private initEvents(): void {
    this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
    this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
    this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    this.canvas.addEventListener('touchcancel', (e) => this.handleTouchEnd(e));
    this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
  }

  private handleTouchStart(e: TouchEvent): void {
    e.preventDefault();
    if (this.mode !== 'finger') return;

    const rect = this.canvas.getBoundingClientRect();
    const activeIds = new Set<string>();

    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i]!;
      const id = `touch-${touch.identifier}`;
      activeIds.add(id);

      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const existingIndex = this.contacts.findIndex((c) => c.id === id);
      if (existingIndex > -1) {
        this.contacts[existingIndex]!.x = x;
        this.contacts[existingIndex]!.y = y;
      } else {
        const color = this.getNextColor();
        this.contacts.push({ id, x, y, color });
      }
    }

    this.contacts = this.contacts.filter((c) => c.id.startsWith('sim-') || activeIds.has(c.id));
    this.onContactsChange(this.contacts);
  }

  private handleTouchMove(e: TouchEvent): void {
    e.preventDefault();
    if (this.mode !== 'finger') return;

    const rect = this.canvas.getBoundingClientRect();
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i]!;
      const id = `touch-${touch.identifier}`;
      const contact = this.contacts.find((c) => c.id === id);
      if (contact) {
        contact.x = touch.clientX - rect.left;
        contact.y = touch.clientY - rect.top;
      }
    }

    this.onContactsChange(this.contacts);
  }

  private handleTouchEnd(e: TouchEvent): void {
    if (this.mode !== 'finger') return;

    const activeIds = new Set<string>();
    for (let i = 0; i < e.touches.length; i++) {
      activeIds.add(`touch-${e.touches[i]!.identifier}`);
    }

    this.contacts = this.contacts.filter((c) => c.id.startsWith('sim-') || activeIds.has(c.id));
    this.onContactsChange(this.contacts);
  }

  private handleMouseDown(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const existingIndex = this.contacts.findIndex((c) => {
      const dx = c.x - x;
      const dy = c.y - y;
      return Math.sqrt(dx * dx + dy * dy) < 30;
    });

    if (existingIndex > -1) {
      this.contacts.splice(existingIndex, 1);
      this.onContactsChange(this.contacts);
      return;
    }

    if (this.contacts.length >= 10) return;

    const id = this.mode === 'finger' ? `sim-${Date.now()}` : `pin-${Date.now()}`;
    const color = this.getNextColor();
    this.contacts.push({ id, x, y, color });
    this.onContactsChange(this.contacts);
  }

  private getNextColor(): string {
    const usedColors = this.contacts.map((c) => c.color);
    const available = this.colors.filter((c) => !usedColors.includes(c));
    if (available.length > 0) {
      return available[0];
    }
    return this.colors[this.contacts.length % this.colors.length];
  }
}
