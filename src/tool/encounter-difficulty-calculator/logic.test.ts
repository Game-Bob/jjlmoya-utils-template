import { describe, expect, it } from 'vitest';
import { calculateEncounter } from './logic';

describe('calculateEncounter', () => {
  it('calculates a medium encounter for a level five party', () => {
    const result = calculateEncounter({ partyLevel: 5, partySize: 4, monsterCr: 3, monsterCount: 2 });
    expect(result.monsterXp).toBe(700);
    expect(result.adjustedXp).toBe(2100);
    expect(result.difficulty).toBe('medium');
  });

  it('applies the multiple monster multiplier', () => {
    const result = calculateEncounter({ partyLevel: 3, partySize: 4, monsterCr: 1, monsterCount: 4 });
    expect(result.baseXp).toBe(800);
    expect(result.multiplier).toBe(2);
    expect(result.adjustedXp).toBe(1600);
    expect(result.difficulty).toBe('deadly');
  });

  it('raises the multiplier for a small party', () => {
    const result = calculateEncounter({ partyLevel: 5, partySize: 2, monsterCr: 2, monsterCount: 2 });
    expect(result.multiplier).toBe(2);
    expect(result.warnings).toContain('partyAdjustment');
  });

  it('lowers the multiplier for a large party', () => {
    const result = calculateEncounter({ partyLevel: 5, partySize: 6, monsterCr: 2, monsterCount: 6 });
    expect(result.multiplier).toBe(1.5);
    expect(result.warnings).toContain('partyAdjustment');
  });

  it('clamps unsafe inputs to the supported range', () => {
    const result = calculateEncounter({ partyLevel: 99, partySize: 99, monsterCr: 99, monsterCount: 99 });
    expect(result.settings).toEqual({ partyLevel: 20, partySize: 8, monsterCr: 30, monsterCount: 15 });
    expect(result.difficulty).toBe('deadly');
  });
});
