import type { WheelSegment } from './types';

interface CanvasCtx {
  ctx: CanvasRenderingContext2D;
  cx: number;
  cy: number;
  radius: number;
}

interface LabelCtx {
  label: string;
  midAngle: number;
  labelR: number;
  sliceAngle: number;
}

function drawSegmentLabel(c: CanvasCtx, lc: LabelCtx): void {
  const { ctx, cx, cy } = c;
  const { label, midAngle, labelR, sliceAngle } = lc;
  ctx.save();
  ctx.translate(cx + Math.cos(midAngle) * labelR, cy + Math.sin(midAngle) * labelR);
  ctx.rotate(midAngle + Math.PI / 2);
  ctx.fillStyle = '#ffffff';
  const fontSize = Math.max(9, Math.min(13, Math.round(sliceAngle * 17)));
  ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 4;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let labelText = label;
  const maxAllowedWidth = labelR * sliceAngle * 0.85;
  if (ctx.measureText(labelText).width > maxAllowedWidth) {
    let len = labelText.length;
    while (len > 1 && ctx.measureText(labelText.substring(0, len) + '..').width > maxAllowedWidth) {
      len--;
    }
    labelText = labelText.substring(0, len) + '..';
  }
  ctx.fillText(labelText, 0, 0);
  ctx.restore();
}

function drawSegments(c: CanvasCtx, segments: WheelSegment[], currentAngle: number): void {
  const { ctx, cx, cy, radius } = c;
  const totalWeight = segments.reduce((sum, s) => sum + (s.weight || 1), 0);
  let accumulatedAngle = 0;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const weight = seg.weight || 1;
    const sliceAngle = (weight / totalWeight) * 2 * Math.PI;
    const startAngle = accumulatedAngle + (currentAngle * Math.PI) / 180 - Math.PI / 2;
    const endAngle = startAngle + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const midAngle = startAngle + sliceAngle / 2;
    const labelR = radius * 0.65;
    drawSegmentLabel(c, { label: seg.label, midAngle, labelR, sliceAngle });

    accumulatedAngle += sliceAngle;
  }
}

function drawShadingOverlay(c: CanvasCtx): void {
  const { ctx, cx, cy, radius } = c;
  const grad = ctx.createRadialGradient(cx, cy, radius * 0.35, cx, cy, radius);
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
  grad.addColorStop(0.6, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
}

function drawGoldRim(c: CanvasCtx): void {
  const { ctx, cx, cy, radius } = c;
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 2, 0, Math.PI * 2);
  ctx.lineWidth = 6;
  const rimGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
  rimGrad.addColorStop(0, '#ffe066');
  rimGrad.addColorStop(0.3, '#d4af37');
  rimGrad.addColorStop(0.5, '#aa7c11');
  rimGrad.addColorStop(0.7, '#d4af37');
  rimGrad.addColorStop(1, '#ffe066');
  ctx.strokeStyle = rimGrad;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, radius - 1, 0, Math.PI * 2);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.6)';
  ctx.stroke();
}

function drawCenter(c: CanvasCtx): void {
  const { ctx, cx, cy } = c;
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  const hubGrad = ctx.createLinearGradient(cx - 20, cy - 20, cx + 20, cy + 20);
  hubGrad.addColorStop(0, '#aa7c11');
  hubGrad.addColorStop(0.5, '#ffe066');
  hubGrad.addColorStop(1, '#aa7c11');
  ctx.fillStyle = hubGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.6)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, 10, 0, Math.PI * 2);
  const gemGrad = ctx.createRadialGradient(cx - 3, cy - 3, 1, cx, cy, 10);
  gemGrad.addColorStop(0, '#fca5a5');
  gemGrad.addColorStop(0.4, '#ef4444');
  gemGrad.addColorStop(1, '#991b1b');
  ctx.fillStyle = gemGrad;
  ctx.fill();
  ctx.strokeStyle = '#7f1d1d';
  ctx.lineWidth = 1;
  ctx.stroke();
}

export function drawWheel(canvas: HTMLCanvasElement, segments: WheelSegment[], currentAngle: number): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = Math.min(cx, cy) - 10;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const c: CanvasCtx = { ctx, cx, cy, radius };
  drawSegments(c, segments, currentAngle);
  drawShadingOverlay(c);
  drawGoldRim(c);
  drawCenter(c);
}
