import type { ToolDefinition } from '../../types';
import { fantasyRunesTranslator } from './entry';
export * from './entry';
export const FANTASY_RUNES_TRANSLATOR_TOOL: ToolDefinition = {
  entry: fantasyRunesTranslator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
