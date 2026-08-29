import { describe, it, expect } from 'vitest';
import {
  getPresetSegments,
  addSegment,
  removeSegment,
  updateSegment,
  selectRandomSegment,
  getSelectedIndex,
  addHistoryItem,
} from './logic';
import type { SpinResultEntry, WheelSegment } from './types';

describe('getPresetSegments', () => {
  it('returns 2 segments for yesno', () => {
    const segs = getPresetSegments('yesno');
    expect(segs).toHaveLength(2);
    expect(segs[0].label).toBe('Yes');
    expect(segs[1].label).toBe('No');
  });

  it('returns 6 segments for numbers', () => {
    const segs = getPresetSegments('numbers');
    expect(segs).toHaveLength(6);
    expect(segs[0].label).toBe('1');
    expect(segs[5].label).toBe('6');
  });

  it('returns 5 segments for actions', () => {
    const segs = getPresetSegments('actions');
    expect(segs).toHaveLength(5);
    expect(segs[0].label).toBe('Attack');
  });

  it('returns 20 segments for d20', () => {
    const segs = getPresetSegments('d20');
    expect(segs).toHaveLength(20);
    expect(segs[0].label).toBe('1');
    expect(segs[19].label).toBe('20');
  });

  it('returns 9 segments for alignment', () => {
    const segs = getPresetSegments('alignment');
    expect(segs).toHaveLength(9);
    expect(segs[0].label).toBe('Lawful Good');
    expect(segs[8].label).toBe('Chaotic Evil');
  });

  it('returns 5 segments with custom weights for loot', () => {
    const segs = getPresetSegments('loot');
    expect(segs).toHaveLength(5);
    expect(segs[0].label).toBe('Common');
    expect(segs[0].weight).toBe(5);
    expect(segs[4].label).toBe('Legendary');
    expect(segs[4].weight).toBe(1);
  });

  it('returns 3 segments for custom', () => {
    const segs = getPresetSegments('custom');
    expect(segs).toHaveLength(3);
    expect(segs[0].label).toBe('Option A');
  });
});

describe('addSegment', () => {
  it('adds a new segment to the array', () => {
    const segs = getPresetSegments('yesno');
    const result = addSegment(segs);
    expect(result).toHaveLength(3);
    expect(result[2].label).toBe('Option C');
  });
});

describe('removeSegment', () => {
  it('removes a segment by id', () => {
    const segs = getPresetSegments('numbers');
    const result = removeSegment(segs, 'seg-0');
    expect(result).toHaveLength(5);
    expect(result.find((s) => s.id === 'seg-0')).toBeUndefined();
  });

  it('does not remove the last segment', () => {
    const segs = getPresetSegments('yesno');
    const result = removeSegment(removeSegment(segs, 'seg-0'), 'seg-1');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('seg-1');
  });
});

describe('updateSegment', () => {
  it('updates the label of a segment', () => {
    const segs = getPresetSegments('yesno');
    const result = updateSegment(segs, 'seg-0', 'label', 'Maybe');
    expect(result[0].label).toBe('Maybe');
    expect(result[1].label).toBe('No');
  });

  it('updates the color of a segment', () => {
    const segs = getPresetSegments('yesno');
    const result = updateSegment(segs, 'seg-0', 'color', '#ff0000');
    expect(result[0].color).toBe('#ff0000');
  });

  it('updates the weight of a segment', () => {
    const segs = getPresetSegments('yesno');
    const result = updateSegment(segs, 'seg-0', 'weight', '3');
    expect(result[0].weight).toBe(3);
  });
});

describe('selectRandomSegment', () => {
  it('returns a valid index within range', () => {
    const segs = getPresetSegments('numbers');
    for (let i = 0; i < 100; i++) {
      const idx = selectRandomSegment(segs);
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(6);
    }
  });
});

describe('getSelectedIndex', () => {
  it('returns index 0 when angle aligns with first segment', () => {
    const segs = getPresetSegments('yesno');
    const idx = getSelectedIndex(segs, 0);
    expect(idx).toBe(0);
  });

  it('returns index 1 for second segment', () => {
    const segs = getPresetSegments('yesno');
    const idx = getSelectedIndex(segs, 180);
    expect(idx).toBe(1);
  });

  it('handles custom weights correctly for index selection', () => {
    const segs: WheelSegment[] = [
      { id: '1', label: 'A', color: 'red', weight: 3 },
      { id: '2', label: 'B', color: 'blue', weight: 1 },
    ];
    expect(getSelectedIndex(segs, 0)).toBe(0);
    expect(getSelectedIndex(segs, 90)).toBe(1);
    expect(getSelectedIndex(segs, 180)).toBe(0);
    expect(getSelectedIndex(segs, 270)).toBe(0);
  });
});

describe('addHistoryItem', () => {
  it('adds item to history', () => {
    const segs = getPresetSegments('yesno');
    const result: SpinResultEntry[] = [];
    const updated = addHistoryItem(result, segs[0], 0);
    expect(updated).toHaveLength(1);
    expect(updated[0].segment.label).toBe('Yes');
  });

  it('limits history to 10 items', () => {
    const segs = getPresetSegments('numbers');
    let history: SpinResultEntry[] = [];
    for (let i = 0; i < 15; i++) {
      history = addHistoryItem(history, segs[i % 6], i % 6);
    }
    expect(history).toHaveLength(10);
  });
});
