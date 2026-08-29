import type { WheelSegment, SpinResultEntry, PresetKey } from './types';

export const SEGMENT_COLORS = [
  '#3b82f6', '#ef4444', '#22c55e', '#f59e0b',
  '#8b5cf6', '#ec4899', '#14b8a6', '#f97316',
  '#6366f1', '#84cc16', '#06b6d4', '#e11d48',
];

const PRESETS: Record<PresetKey, WheelSegment[]> = {
  yesno: [
    { id: 'seg-0', label: 'Yes', color: SEGMENT_COLORS[2], weight: 1 },
    { id: 'seg-1', label: 'No', color: SEGMENT_COLORS[1], weight: 1 },
  ],
  numbers: Array.from({ length: 6 }, (_, i) => ({
    id: `seg-${i}`,
    label: String(i + 1),
    color: SEGMENT_COLORS[i],
    weight: 1,
  })),
  actions: [
    { id: 'seg-0', label: 'Attack', color: SEGMENT_COLORS[1], weight: 1 },
    { id: 'seg-1', label: 'Defend', color: SEGMENT_COLORS[0], weight: 1 },
    { id: 'seg-2', label: 'Explore', color: SEGMENT_COLORS[2], weight: 1 },
    { id: 'seg-3', label: 'Negotiate', color: SEGMENT_COLORS[3], weight: 1 },
    { id: 'seg-4', label: 'Rest', color: SEGMENT_COLORS[4], weight: 1 },
  ],
  d20: Array.from({ length: 20 }, (_, i) => ({
    id: `seg-${i}`,
    label: String(i + 1),
    color: SEGMENT_COLORS[i % SEGMENT_COLORS.length],
    weight: 1,
  })),
  alignment: [
    { id: 'seg-0', label: 'Lawful Good', color: SEGMENT_COLORS[2], weight: 1 },
    { id: 'seg-1', label: 'Neutral Good', color: SEGMENT_COLORS[0], weight: 1 },
    { id: 'seg-2', label: 'Chaotic Good', color: SEGMENT_COLORS[6], weight: 1 },
    { id: 'seg-3', label: 'Lawful Neutral', color: SEGMENT_COLORS[3], weight: 1 },
    { id: 'seg-4', label: 'True Neutral', color: SEGMENT_COLORS[4], weight: 1 },
    { id: 'seg-5', label: 'Chaotic Neutral', color: SEGMENT_COLORS[7], weight: 1 },
    { id: 'seg-6', label: 'Lawful Evil', color: SEGMENT_COLORS[1], weight: 1 },
    { id: 'seg-7', label: 'Neutral Evil', color: SEGMENT_COLORS[11], weight: 1 },
    { id: 'seg-8', label: 'Chaotic Evil', color: SEGMENT_COLORS[5], weight: 1 },
  ],
  loot: [
    { id: 'seg-0', label: 'Common', color: '#9ca3af', weight: 5 },
    { id: 'seg-1', label: 'Uncommon', color: '#22c55e', weight: 4 },
    { id: 'seg-2', label: 'Rare', color: '#3b82f6', weight: 3 },
    { id: 'seg-3', label: 'Very Rare', color: '#a855f7', weight: 2 },
    { id: 'seg-4', label: 'Legendary', color: '#eab308', weight: 1 },
  ],
  custom: [
    { id: 'seg-0', label: 'Option A', color: SEGMENT_COLORS[0], weight: 1 },
    { id: 'seg-1', label: 'Option B', color: SEGMENT_COLORS[1], weight: 1 },
    { id: 'seg-2', label: 'Option C', color: SEGMENT_COLORS[2], weight: 1 },
  ],
};

export function getPresetSegments(preset: PresetKey): WheelSegment[] {
  return (PRESETS[preset] || PRESETS.custom).map((s) => ({ ...s }));
}

export function addSegment(segments: WheelSegment[]): WheelSegment[] {
  const idx = segments.length;
  return [
    ...segments,
    {
      id: `seg-${Date.now()}`,
      label: `Option ${String.fromCharCode(65 + Math.min(idx, 25))}`,
      color: SEGMENT_COLORS[idx % SEGMENT_COLORS.length],
      weight: 1,
    },
  ];
}

export function removeSegment(segments: WheelSegment[], id: string): WheelSegment[] {
  if (segments.length <= 1) return segments;
  return segments.filter((s) => s.id !== id);
}

export function updateSegment(
  segments: WheelSegment[],
  id: string,
  field: 'label' | 'color' | 'weight',
  value: string,
): WheelSegment[] {
  return segments.map((s) => {
    if (s.id === id) {
      if (field === 'weight') {
        return { ...s, weight: Math.max(1, parseInt(value, 10) || 1) };
      }
      return { ...s, [field]: value };
    }
    return s;
  });
}

export function selectRandomSegment(segments: WheelSegment[]): number {
  const totalWeight = segments.reduce((sum, s) => sum + (s.weight || 1), 0);
  const r = Math.random() * totalWeight;
  let acc = 0;
  for (let i = 0; i < segments.length; i++) {
    acc += segments[i].weight || 1;
    if (r < acc) {
      return i;
    }
  }
  return segments.length - 1;
}

export function getSelectedIndex(
  segments: WheelSegment[],
  currentAngle: number,
): number {
  const totalWeight = segments.reduce((sum, s) => sum + (s.weight || 1), 0);
  const segmentAngle = (360 - (currentAngle % 360)) % 360;
  let acc = 0;
  for (let i = 0; i < segments.length; i++) {
    const nextAcc = acc + (segments[i].weight || 1);
    const startAngle = (acc / totalWeight) * 360;
    const endAngle = (nextAcc / totalWeight) * 360;
    if (segmentAngle >= startAngle && segmentAngle < endAngle) {
      return i;
    }
    acc = nextAcc;
  }
  return 0;
}

export function getArcAngle(segmentCount: number): number {
  return 360 / segmentCount;
}

export function addHistoryItem(
  history: SpinResultEntry[],
  segment: WheelSegment,
  index: number,
): SpinResultEntry[] {
  const entry: SpinResultEntry = {
    segment,
    index,
    timestamp: Date.now(),
  };
  const updated = [entry, ...history];
  return updated.slice(0, 10);
}
