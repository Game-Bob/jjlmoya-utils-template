import type { ToolDefinition } from '../../types';
import { diceRollerSimulator } from './entry';
export * from './entry';
export const DICE_ROLLER_SIMULATOR_TOOL: ToolDefinition = {
  entry: diceRollerSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
