export { templateCategory } from './category';
export { default as TemplateCategorySEO } from './category/seo.astro';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  TemplateToolEntry,
  TemplateCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_TOOLS, EXAMPLE_TOOL } from './tools';
export type { ExampleToolUI, ExampleToolLocaleContent } from './tool/example-tool/index';
export { ExampleToolComponent, ExampleToolSEO, ExampleToolBibliography } from './tool/example-tool/index';
