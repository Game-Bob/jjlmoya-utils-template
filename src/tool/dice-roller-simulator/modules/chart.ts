export function drawDistributionChart(container: HTMLElement | null, totals: number[]) {
  if (!container) {
    return;
  }
  container.innerHTML = '';

  if (totals.length === 0) {
    container.innerHTML = '<div class="chart-empty-state">No rolls recorded yet</div>';
    return;
  }

  const counts = new Map<number, number>();
  for (const val of totals) {
    counts.set(val, (counts.get(val) || 0) + 1);
  }

  const uniqueTotals = Array.from(counts.keys()).sort((a, b) => a - b);
  const maxCount = Math.max(...Array.from(counts.values()));

  for (const total of uniqueTotals) {
    const count = counts.get(total) || 0;
    const heightPercent = (count / maxCount) * 100;

    const barCol = document.createElement('div');
    barCol.className = 'chart-bar-column';
    barCol.innerHTML = `
      <div class="chart-bar-fill" style="height: ${heightPercent}%" data-count="${count}"></div>
      <span class="chart-bar-label">${total}</span>
    `;
    container.appendChild(barCol);
  }
}
