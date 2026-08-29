import type { ToolDefinition } from '../../types';
import { lunarTideTracker } from './entry';
export * from './entry';
export const LUNAR_TIDE_TRACKER_TOOL: ToolDefinition = {
  entry: lunarTideTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
