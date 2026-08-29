import type { ToolDefinition } from '../../types';
import { rpgSettlementExplorationMapGenerator } from './entry';
export * from './entry';
export const RPG_SETTLEMENT_EXPLORATION_MAP_GENERATOR_TOOL: ToolDefinition = { entry: rpgSettlementExplorationMapGenerator, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
