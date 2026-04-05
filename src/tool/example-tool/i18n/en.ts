import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExampleToolUI, ExampleToolLocaleContent } from '../index';

const slug = 'character-counter';
const title = 'Character, Word and Line Counter';
const description =
  'Free online tool to instantly count characters, words and lines in any text — no sign-up required.';

const ui: ExampleToolUI = {
  labelInput: 'Enter your text',
  labelChars: 'Characters',
  labelWords: 'Words',
  labelLines: 'Lines',
  placeholder: 'Type or paste your text here…',
  faqTitle: 'Frequently asked questions',
  bibliographyTitle: 'References',
};

const faq: ExampleToolLocaleContent['faq'] = [
  {
    question: 'Are spaces counted as characters?',
    answer:
      'Yes. The counter includes all Unicode characters, including spaces, line breaks and punctuation marks — consistent with how most text editors behave.',
  },
  {
    question: 'How is a "word" defined?',
    answer:
      'A word is any sequence of non-whitespace characters. For example, "hello-world" counts as one word, while "hello world" counts as two.',
  },
];

const howTo: ExampleToolLocaleContent['howTo'] = [
  { name: '1. Paste or type your text', text: 'Use the text area provided in the tool.' },
  { name: '2. Read the results', text: 'The counters update in real time as you type.' },
];

const bibliography: ExampleToolLocaleContent['bibliography'] = [
  { name: 'Unicode Standard — Character Counting', url: 'https://www.unicode.org/standard/standard.html' },
];

const seo: ExampleToolLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Quick summary',
    items: [
      'Counts characters, words and lines instantly.',
      'No registration or installation needed.',
      'Works with any Unicode language.',
    ],
  },
  { type: 'title', text: 'How the counter works', level: 2 },
  {
    type: 'paragraph',
    html: 'Text is analysed in the browser without sending any data to the server. Each character is processed following the Unicode standard for accurate results in any language.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ExampleToolLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
