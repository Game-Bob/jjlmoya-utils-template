import type { ToolDefinition } from '../../types';
import { tokenStampStudio } from './entry';

export * from './entry';

export const TOKEN_STAMP_STUDIO_TOOL: ToolDefinition = {
  entry: tokenStampStudio,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
