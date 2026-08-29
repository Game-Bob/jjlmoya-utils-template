import { describe, it, expect } from 'vitest';
import { calculateMoonPhase, calculateCombinedTide, generateForecast } from './logic';
import type { Moon } from './types';

describe('Lunar Phase Logic', () => {
  it('calculates phases correctly for standard moon', () => {
    const period = 28;
    const offset = 0;

    expect(calculateMoonPhase(0, period, offset).phase).toBe('new');
    expect(calculateMoonPhase(7, period, offset).phase).toBe('first_quarter');
    expect(calculateMoonPhase(14, period, offset).phase).toBe('full');
    expect(calculateMoonPhase(21, period, offset).phase).toBe('last_quarter');
    expect(calculateMoonPhase(28, period, offset).phase).toBe('new');
  });

  it('handles offsets and negative days properly', () => {
    const period = 30;
    const offset = 15;

    expect(calculateMoonPhase(0, period, offset).phase).toBe('full');
    expect(calculateMoonPhase(-15, period, offset).phase).toBe('new');
  });
});

describe('Combined Tide Logic', () => {
  const moons: Moon[] = [
    { id: '1', name: 'Solaria', period: 20, offset: 0, color: '#ffcc00' },
    { id: '2', name: 'Lunaria', period: 30, offset: 15, color: '#00ccff' }
  ];

  it('determines intensity and labelKey for empty moons', () => {
    const res = calculateCombinedTide(10, []);
    expect(res.intensity).toBe(50);
    expect(res.labelKey).toBe('normal');
  });

  it('calculates average impact of combined gravitational pull', () => {
    const res = calculateCombinedTide(0, moons);
    expect(res.intensity).toBeGreaterThanOrEqual(0);
    expect(res.intensity).toBeLessThanOrEqual(100);
  });
});

describe('Forecast Generation', () => {
  const moons: Moon[] = [
    { id: '1', name: 'Luna', period: 28, offset: 0, color: '#ffffff' }
  ];

  it('creates the requested number of forecast items', () => {
    const items = generateForecast(0, 10, moons);
    expect(items.length).toBe(10);
    expect(items[0]!.day).toBe(0);
    expect(items[9]!.day).toBe(9);
  });
});
