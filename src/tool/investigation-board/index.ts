import type { ToolDefinition } from '../../types';
import { investigationBoard } from './entry';

export * from './entry';

export const INVESTIGATION_BOARD_TOOL: ToolDefinition = {
  entry: investigationBoard,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
