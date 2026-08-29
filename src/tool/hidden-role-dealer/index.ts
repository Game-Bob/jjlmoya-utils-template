import type { ToolDefinition } from '../../types';
import { hiddenRoleDealer } from './entry';
export * from './entry';

export const HIDDEN_ROLE_DEALER_TOOL: ToolDefinition = {
  entry: hiddenRoleDealer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
