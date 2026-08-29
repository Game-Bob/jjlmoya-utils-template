import type { ToolDefinition } from '../../types';
import { scoreTracker } from './entry';
export * from './entry';
export const SCORE_TRACKER_TOOL: ToolDefinition = {
  entry: scoreTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
