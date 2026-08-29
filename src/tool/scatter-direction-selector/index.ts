import type { ToolDefinition } from '../../types';
import { scatterDirectionSelector } from './entry';
export * from './entry';

export const SCATTER_DIRECTION_SELECTOR_TOOL: ToolDefinition = {
  entry: scatterDirectionSelector,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
