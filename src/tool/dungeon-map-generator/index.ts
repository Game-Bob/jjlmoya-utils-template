import type { ToolDefinition } from '../../types';
import { dungeonMapGenerator } from './entry';

export * from './entry';

export const DUNGEON_MAP_GENERATOR_TOOL: ToolDefinition = {
  entry: dungeonMapGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
