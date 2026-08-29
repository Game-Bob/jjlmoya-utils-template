import { describe, it, expect } from 'vitest';
import { calculateDistance, rollScatter, getSectorIndex } from './logic';

describe('ScatterDirectionSelector Logic', () => {
  describe('calculateDistance', () => {
    it('returns a number within the expected D6 range', () => {
      const config = { diceType: 'd6' as const, customMax: 6, hitChance: 33 };
      const dist = calculateDistance(config);
      expect(dist).toBeGreaterThanOrEqual(1);
      expect(dist).toBeLessThanOrEqual(6);
    });

    it('returns a number within the expected 2D6 range', () => {
      const config = { diceType: '2d6' as const, customMax: 12, hitChance: 33 };
      const dist = calculateDistance(config);
      expect(dist).toBeGreaterThanOrEqual(2);
      expect(dist).toBeLessThanOrEqual(12);
    });

    it('returns a number within the custom range', () => {
      const config = { diceType: 'custom' as const, customMax: 20, hitChance: 33 };
      const dist = calculateDistance(config);
      expect(dist).toBeGreaterThanOrEqual(1);
      expect(dist).toBeLessThanOrEqual(20);
    });
  });

  describe('rollScatter', () => {
    it('returns isHit as true when hitChance is 100', () => {
      const config = { diceType: 'd6' as const, customMax: 6, hitChance: 100 };
      const res = rollScatter(config);
      expect(res.isHit).toBe(true);
      expect(res.distance).toBe(0);
    });

    it('returns isHit as false and positive distance when hitChance is 0', () => {
      const config = { diceType: 'd6' as const, customMax: 6, hitChance: 0 };
      const res = rollScatter(config);
      expect(res.isHit).toBe(false);
      expect(res.distance).toBeGreaterThanOrEqual(1);
      expect(res.angle).toBeGreaterThanOrEqual(0);
      expect(res.angle).toBeLessThan(360);
    });
  });

  describe('getSectorIndex', () => {
    it('correctly maps 0 degrees to sector index 0', () => {
      const idx8 = getSectorIndex(0, 8);
      expect(idx8).toBe(0);

      const idx12 = getSectorIndex(0, 12);
      expect(idx12).toBe(0);
    });

    it('maps angles correctly within sectors boundary', () => {
      expect(getSectorIndex(45, 8)).toBe(1);
      expect(getSectorIndex(90, 8)).toBe(2);
      expect(getSectorIndex(180, 8)).toBe(4);
      expect(getSectorIndex(270, 8)).toBe(6);
    });
  });
});
