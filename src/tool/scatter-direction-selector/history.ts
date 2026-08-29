interface HistoryItem {
  isHit: boolean;
  angle: number;
  distance: number;
  time: string;
}

export class HistoryManager {
  private items: HistoryItem[] = [];
  private listEl: HTMLElement;
  private storageKey: string;

  constructor(listEl: HTMLElement, storageKey: string) {
    this.listEl = listEl;
    this.storageKey = storageKey;
    this.load();
    this.render();
  }

  add(isHit: boolean, angle: number, distance: number): void {
    const item: HistoryItem = {
      isHit,
      angle,
      distance,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
    this.items.unshift(item);
    this.items = this.items.slice(0, 10);
    this.save();
    this.render();
  }

  clear(): void {
    this.items = [];
    this.save();
    this.render();
  }

  getAll(): HistoryItem[] {
    return this.items;
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  private load(): void {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        this.items = JSON.parse(saved);
      } catch {
        this.items = [];
      }
    }
  }

  private render(): void {
    this.listEl.innerHTML = this.items
      .map(
        (h) => `
      <div class="sds-history-item">
        <span class="sds-history-badge ${h.isHit ? 'hit' : 'scatter'}">${h.isHit ? 'HIT' : 'SCATTER'}</span>
        <span class="sds-history-val">${h.isHit ? '\u2014' : `${h.distance}" @ ${h.angle}\u00b0`}</span>
        <span class="sds-history-time">${h.time}</span>
      </div>
    `
      )
      .join('');
  }
}
