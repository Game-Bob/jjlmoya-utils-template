import type { ToolDefinition } from '../../types';
import { boardGameTimer } from './entry';
export * from './entry';
export const BOARD_GAME_TIMER_TOOL: ToolDefinition = {
  entry: boardGameTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
