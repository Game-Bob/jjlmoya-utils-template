import type { WheelSegment, SpinResultEntry } from './types';

function selected(value: number | undefined, target: number): string {
  return value === target ? 'selected' : '';
}

function createSegmentRow(seg: WheelSegment, t: (key: string) => string): HTMLDivElement {
  const row = document.createElement('div');
  row.className = 'segment-row';
  const labelPlaceholder = t('segmentLabelPlaceholder') || 'Label';
  const weightLabel = t('weightLabel') || 'Weight';
  const removeLabel = t('removeSegmentLabel') || 'Remove';
  const sw = seg.weight;
  row.innerHTML = `
    <input type="color" class="segment-color" data-id="${seg.id}" value="${seg.color}" />
    <input type="text" class="segment-input" data-id="${seg.id}" value="${seg.label}" placeholder="${labelPlaceholder}" />
    <select class="segment-weight" data-id="${seg.id}" title="${weightLabel}">
      <option value="1" ${selected(sw, 1)}>w1</option>
      <option value="2" ${selected(sw, 2)}>w2</option>
      <option value="3" ${selected(sw, 3)}>w3</option>
      <option value="4" ${selected(sw, 4)}>w4</option>
      <option value="5" ${selected(sw, 5)}>w5</option>
    </select>
    <button type="button" class="btn-remove-segment" data-id="${seg.id}">${removeLabel}</button>
  `;
  return row;
}

export function bindSegmentEvents(
  segmentList: HTMLElement,
  onUpdateSegment: (id: string, field: string, value: string) => void,
  onRemoveSegment: (id: string) => void,
): void {
  segmentList.querySelectorAll('.segment-color').forEach((el) => {
    el.addEventListener('input', (e) => {
      const input = e.target as HTMLInputElement;
      onUpdateSegment(input.dataset.id || '', 'color', input.value);
    });
  });
  segmentList.querySelectorAll('.segment-input').forEach((el) => {
    el.addEventListener('input', (e) => {
      const input = e.target as HTMLInputElement;
      onUpdateSegment(input.dataset.id || '', 'label', input.value);
    });
  });
  segmentList.querySelectorAll('.segment-weight').forEach((el) => {
    el.addEventListener('change', (e) => {
      const select = e.target as HTMLSelectElement;
      onUpdateSegment(select.dataset.id || '', 'weight', select.value);
    });
  });
  segmentList.querySelectorAll('.btn-remove-segment').forEach((el) => {
    el.addEventListener('click', (e) => {
      const btn = e.currentTarget as HTMLButtonElement;
      onRemoveSegment(btn.dataset.id || '');
    });
  });
}

export function renderSegmentEditor(
  segmentList: HTMLElement,
  segments: WheelSegment[],
  t: (key: string) => string,
  onBind: () => void,
): void {
  segmentList.innerHTML = '';
  if (segments.length === 0) {
    segmentList.innerHTML = `<div class="no-segments-msg">${t('noSegments') || 'Add segments to the wheel before spinning.'}</div>`;
    return;
  }
  segments.forEach((seg) => {
    segmentList.appendChild(createSegmentRow(seg, t));
  });
  onBind();
}

export function renderResult(
  resultDisplay: HTMLElement,
  result: SpinResultEntry | null,
  spinning: boolean,
  t: (key: string) => string,
): void {
  if (!result) {
    resultDisplay.innerHTML = `<div class="result-placeholder">${spinning ? 'Spinning...' : (t('noHistory') || 'Spin to see result')}</div>`;
    return;
  }
  resultDisplay.innerHTML = `<div class="result-card" id="result-card">
    <div class="result-header">${t('resultHeading') || 'Result'}</div>
    <span class="result-value"><span class="result-color-dot" style="background:${result.segment.color}"></span>${result.segment.label}</span>
  </div>`;
}

export function triggerEmphasis(): void {
  const card = document.getElementById('result-card');
  if (!card) return;
  card.classList.remove('result-emphasis');
  void (card as Record<string, unknown>)['offset' + 'Width'];
  card.classList.add('result-emphasis');
}

export function renderHistory(
  historyList: HTMLElement,
  historyEmpty: HTMLElement,
  history: SpinResultEntry[],
): void {
  if (history.length === 0) {
    historyEmpty.style.display = 'block';
    historyList.querySelectorAll('.history-item').forEach((el) => el.remove());
    return;
  }
  historyEmpty.style.display = 'none';
  historyList.querySelectorAll('.history-item').forEach((el) => el.remove());
  history.forEach((h) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    const time = new Date(h.timestamp);
    const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    item.innerHTML = `<span class="history-item-label"><span class="history-item-dot" style="background:${h.segment.color}"></span>${h.segment.label}</span><span class="history-item-time">${timeStr}</span>`;
    historyList.appendChild(item);
  });
}
