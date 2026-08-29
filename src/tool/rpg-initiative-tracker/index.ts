import type { ToolDefinition } from '../../types';
import { initiativeTracker } from './entry';
export * from './entry';
export const INITIATIVE_TRACKER_TOOL: ToolDefinition = {
  entry: initiativeTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
