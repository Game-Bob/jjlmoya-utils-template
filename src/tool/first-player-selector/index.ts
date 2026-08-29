import type { ToolDefinition } from '../../types';
import { firstPlayerSelector } from './entry';
export * from './entry';
export const FIRST_PLAYER_SELECTOR_TOOL: ToolDefinition = {
  entry: firstPlayerSelector,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
