import type { EncounterDifficulty, EncounterResult } from './logic';
import { evaluateEncounter } from './evaluator';

type Labels = Record<string, string>;

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

function labelForDifficulty(key: EncounterDifficulty, labels: Labels): string {
  return labels[key] ?? key;
}

function renderMarkers(count: number, className: string, element: string): string {
  return Array.from({ length: count }, () => '<' + element + ' class="' + className + '"></' + element + '>').join('');
}

function renderHint(result: EncounterResult, labels: Labels): string {
  return labels[result.difficulty + 'Hint'] ?? '';
}

function renderWarnings(result: EncounterResult, labels: Labels): string {
  const warningText = result.warnings.map((key) => labels[key] ?? '').filter(Boolean);
  if (warningText.length === 0) return '';
  return '<div class="encounter-warning"><span>' + labels.warning + '</span><p>' + warningText.join(' ') + '</p></div>';
}

function renderThresholds(result: EncounterResult, labels: Labels): string {
  const bands: EncounterDifficulty[] = ['belowEasy', 'easy', 'medium', 'hard', 'deadly'];
  return bands.map((key) => {
    const value = key === 'belowEasy' ? 0 : result.thresholds[key];
    const active = key === result.difficulty ? ' is-active' : '';
    const amount = value ? formatNumber(value) + ' XP' : '<' + formatNumber(result.thresholds.easy) + ' XP';
    return '<div class="threshold-band ' + key + active + '"><span>' + labelForDifficulty(key, labels) + '</span><strong>' + amount + '</strong></div>';
  }).join('');
}

export function renderResult(result: EncounterResult, labels: Labels): string {
  const evaluation = evaluateEncounter(result);
  const title = labelForDifficulty(evaluation.titleKey, labels);
  const scale = Math.min(1.2, Math.max(0.7, 0.7 + evaluation.ratio * 0.5));
  const opacity = Math.min(1, 0.8 + evaluation.ratio * 0.2);
  const style = '--threat-scale:' + scale.toFixed(2) + ';--threat-opacity:' + opacity.toFixed(2);
  return '<div class="result-orbit" data-difficulty="' + result.difficulty + '">'
    + '<div class="orbit-labels"><span>' + labels.partyMarker + '</span><span>' + labels.threatMarker + '</span></div>'
    + '<div class="orbit-scene" style="' + style + '">'
    + '<div class="party-orbit">' + renderMarkers(result.settings.partySize, 'party-marker', 'i') + '</div>'
    + '<div class="threat-orbit">' + renderMarkers(result.settings.monsterCount, 'threat-marker', 'b') + '</div><div class="orbit-line"></div></div>'
    + '<div class="result-head"><span class="result-kicker">' + labels.resultSection + '</span><strong>' + title + '</strong><small>' + formatNumber(result.adjustedXp) + ' ' + labels.xpUnit + '</small></div>'
    + '<p class="result-hint">' + renderHint(result, labels) + '</p>'
    + '<div class="threshold-track">' + renderThresholds(result, labels) + '</div>'
    + '<div class="result-stats"><span><small>' + labels.baseXp + '</small><strong>' + formatNumber(result.baseXp) + ' ' + labels.xpUnit + '</strong></span><span><small>' + labels.multiplier + '</small><strong>×' + result.multiplier + '</strong></span><span><small>' + labels.partyThreshold + '</small><strong>' + formatNumber(result.thresholds.medium) + ' ' + labels.xpUnit + '</strong></span></div>'
    + renderWarnings(result, labels) + '</div>';
}
