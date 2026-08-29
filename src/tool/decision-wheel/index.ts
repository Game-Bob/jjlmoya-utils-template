import type { ToolDefinition } from '../../types';
import { decisionWheel } from './entry';
export * from './entry';
export const DECISION_WHEEL_TOOL: ToolDefinition = {
  entry: decisionWheel,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
