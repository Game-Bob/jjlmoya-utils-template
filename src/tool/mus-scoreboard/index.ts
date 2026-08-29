import type { ToolDefinition } from '../../types';
import { musScoreboard } from './entry';

export * from './entry';

export const MUS_SCOREBOARD_TOOL: ToolDefinition = {
  entry: musScoreboard,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
