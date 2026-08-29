import type { ToolDefinition } from '../../types';
import { encounterDifficultyCalculator } from './entry';

export * from './entry';

export const ENCOUNTER_DIFFICULTY_CALCULATOR_TOOL: ToolDefinition = {
  entry: encounterDifficultyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
