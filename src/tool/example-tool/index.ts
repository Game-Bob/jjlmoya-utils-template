import type { TemplateToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ExampleToolComponent from './component.astro';
import ExampleToolSEO from './seo.astro';
import ExampleToolBibliography from './bibliography.astro';

export interface ExampleToolUI {
  [key: string]: string;
  labelInput: string;
  labelChars: string;
  labelWords: string;
  labelLines: string;
  placeholder: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type ExampleToolLocaleContent = ToolLocaleContent<ExampleToolUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const exampleTool: TemplateToolEntry<ExampleToolUI> = {
  id: 'example-tool',
  icons: { bg: 'mdi:file-document-outline', fg: 'mdi:format-letter-case' },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ExampleToolComponent, ExampleToolSEO, ExampleToolBibliography };

export const EXAMPLE_TOOL: ToolDefinition = {
  entry: exampleTool,
  Component: ExampleToolComponent,
  SEOComponent: ExampleToolSEO,
  BibliographyComponent: ExampleToolBibliography,
};
