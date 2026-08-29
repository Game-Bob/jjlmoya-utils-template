import { describe, expect, it } from 'vitest';
import { DEFAULT_CONFIG, generateSettlement } from './logic';
import { decodeShareState, encodeShareState } from './storage';

describe('settlement map storage', () => {
  it('shares the edited map and custom service catalog together', () => {
    const map = generateSettlement({ ...DEFAULT_CONFIG, services: ['tavern', 'Shrine'] });
    const decoded = decodeShareState(encodeShareState(map, ['Shrine', 'Waystone']));
    expect(decoded?.map).toEqual(map);
    expect(decoded?.customServices).toEqual(['Shrine', 'Waystone']);
  });
});
