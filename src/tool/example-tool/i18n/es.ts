import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExampleToolUI, ExampleToolLocaleContent } from '../index';

const slug = 'contador-caracteres';
const title = 'Contador de Caracteres, Palabras y Líneas';
const description =
  'Herramienta online gratuita para contar caracteres, palabras y líneas en cualquier texto de forma instantánea y sin registros.';

const ui: ExampleToolUI = {
  labelInput: 'Introduce tu texto',
  labelChars: 'Caracteres',
  labelWords: 'Palabras',
  labelLines: 'Líneas',
  placeholder: 'Escribe o pega aquí tu texto…',
  faqTitle: 'Preguntas frecuentes',
  bibliographyTitle: 'Referencias',
};

const faq: ExampleToolLocaleContent['faq'] = [
  {
    question: '¿Cuenta los espacios como caracteres?',
    answer:
      'Sí. El contador incluye todos los caracteres Unicode, incluidos espacios, saltos de línea y signos de puntuación, igual que lo hace la mayoría de editores de texto.',
  },
  {
    question: '¿Cómo se define una "palabra"?',
    answer:
      'Se considera palabra cualquier secuencia de caracteres no espaciados. Por ejemplo, "hola-mundo" cuenta como una sola palabra, mientras que "hola mundo" cuenta como dos.',
  },
];

const howTo: ExampleToolLocaleContent['howTo'] = [
  { name: '1. Pega o escribe tu texto', text: 'Usa el área de texto de la herramienta.' },
  { name: '2. Lee los resultados', text: 'Los contadores se actualizan en tiempo real.' },
];

const bibliography: ExampleToolLocaleContent['bibliography'] = [
  { name: 'Unicode Standard — Character Counting', url: 'https://www.unicode.org/standard/standard.html' },
];

const seo: ExampleToolLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Resumen rápido',
    items: [
      'Cuenta caracteres, palabras y líneas al instante.',
      'No requiere registro ni instalación.',
      'Compatible con cualquier idioma Unicode.',
    ],
  },
  { type: 'title', text: 'Cómo funciona el contador', level: 2 },
  {
    type: 'paragraph',
    html: 'El texto se analiza en el navegador, sin enviar datos al servidor. Se recorre carácter a carácter siguiendo el estándar Unicode para garantizar resultados precisos en cualquier idioma.',
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
  inLanguage: 'es',
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
