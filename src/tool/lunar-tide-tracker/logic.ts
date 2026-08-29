import type { Moon, MoonPhaseType, MoonPhaseInfo, ForecastItem } from './types';

export function calculateMoonPhase(day: number, period: number, offset: number): MoonPhaseInfo {
  const adjustedDay = ((day + offset) % period + period) % period;
  const percentage = adjustedDay / period;
  const angle = percentage * 360;

  const phases: MoonPhaseType[] = [
    'new',
    'waxing_crescent',
    'first_quarter',
    'waxing_gibbous',
    'full',
    'waning_gibbous',
    'last_quarter',
    'waning_crescent'
  ];

  const index = Math.floor(((percentage + 0.0625) % 1) * 8);
  const phase = phases[index] || 'new';

  return { phase, percentage, angle };
}

export function calculateCombinedTide(day: number, moons: Moon[]): { intensity: number; labelKey: string } {
  if (moons.length === 0) {
    return { intensity: 50, labelKey: 'normal' };
  }

  let totalImpact = 0;
  for (const moon of moons) {
    const { percentage } = calculateMoonPhase(day, moon.period, moon.offset);
    const impact = Math.abs(Math.cos(2 * Math.PI * percentage));
    totalImpact += impact;
  }

  const averageImpact = totalImpact / moons.length;
  const intensity = Math.round(averageImpact * 100);

  let labelKey = 'normal';
  if (intensity < 30) {
    labelKey = 'neap';
  } else if (intensity >= 30 && intensity < 50) {
    labelKey = 'low';
  } else if (intensity >= 50 && intensity < 75) {
    labelKey = 'high';
  } else {
    labelKey = 'spring';
  }

  return { intensity, labelKey };
}

export function generateForecast(startDay: number, count: number, moons: Moon[]): ForecastItem[] {
  const items: ForecastItem[] = [];
  for (let i = 0; i < count; i++) {
    const day = startDay + i;
    const moonPhases = moons.map((m) => {
      const info = calculateMoonPhase(day, m.period, m.offset);
      return {
        moonId: m.id,
        phase: info.phase,
        percentage: info.percentage,
      };
    });

    const tide = calculateCombinedTide(day, moons);
    items.push({
      day,
      moons: moonPhases,
      tideLevel: tide.intensity,
      tideName: tide.labelKey,
    });
  }
  return items;
}
