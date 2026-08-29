export interface RollLog {
  id: string;
  timestamp: string;
  dice: string[];
  modifier: number;
  total: number;
}

const STORAGE_KEY = 'jjlmoya_tabletop_roll_history';

export function getHistory(): RollLog[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveHistory(history: RollLog[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function createHistoryCard(log: RollLog): HTMLDivElement {
  const item = document.createElement('div');
  item.className = 'history-card-item';
  const diceTagsHtml = log.dice.map(d => {
    const parts = d.split(':');
    return `<span class="breakdown-die-tag" data-die-type="${parts[0]}">${parts[1]}</span>`;
  }).join(' ');

  item.innerHTML = `
    <div class="history-card-header">
      <span>${new Date(log.timestamp).toLocaleTimeString()}</span>
      <span>Mod: ${log.modifier >= 0 ? '+' : ''}${log.modifier}</span>
    </div>
    <div class="history-card-body">
      <div class="history-dice-tags">${diceTagsHtml}</div>
      <span class="history-grand-total">${log.total}</span>
    </div>
  `;
  return item;
}

interface HistoryUIRefs {
  list: HTMLElement | null;
  emptyMsg: HTMLElement | null;
  totalVal: HTMLElement | null;
  averageVal: HTMLElement | null;
  lastVal: HTMLElement | null;
  badge: HTMLElement | null;
}

function setText(el: HTMLElement | null, text: string) {
  if (el) {
    el.textContent = text;
  }
}

export function renderHistory(refs: HistoryUIRefs, onDrawChart: (totals: number[]) => void) {
  const history = getHistory();
  if (!refs.list || !refs.emptyMsg) return;

  if (history.length === 0) {
    refs.emptyMsg.style.display = 'block';
    refs.list.innerHTML = '';
    setText(refs.totalVal, '0');
    setText(refs.averageVal, '--');
    setText(refs.lastVal, '--');
    setText(refs.badge, '0');
    onDrawChart([]);
    return;
  }

  refs.emptyMsg.style.display = 'none';
  refs.list.innerHTML = '';

  const totals = history.map(h => h.total);
  const sum = totals.reduce((a, b) => a + b, 0);

  for (let i = history.length - 1; i >= 0; i--) {
    refs.list.appendChild(createHistoryCard(history[i]));
  }

  setText(refs.totalVal, history.length.toString());
  setText(refs.badge, history.length.toString());
  setText(refs.averageVal, (sum / history.length).toFixed(1));
  setText(refs.lastVal, history[history.length - 1]!.total.toString());

  onDrawChart(totals);
}
