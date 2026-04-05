import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExampleToolUI, ExampleToolLocaleContent } from '../index';

const slug = 'compteur-caracteres';
const title = 'Compteur de caractères, mots et lignes';
const description =
  'Outil en ligne gratuit pour compter instantanément les caractères, les mots et les lignes dans n\'importe quel texte.';

const ui: ExampleToolUI = {
  labelInput: 'Saisissez votre texte',
  labelChars: 'Caractères',
  labelWords: 'Mots',
  labelLines: 'Lignes',
  placeholder: 'Tapez ou collez votre texte ici…',
  faqTitle: 'Questions fréquentes',
  bibliographyTitle: 'Références',
};

const faq: ExampleToolLocaleContent['faq'] = [
  {
    question: 'Les espaces sont-ils comptés comme des caractères ?',
    answer:
      'Oui. Le compteur inclut tous les caractères Unicode, y compris les espaces, les sauts de ligne et la ponctuation, conformément au comportement de la plupart des éditeurs de texte.',
  },
  {
    question: 'Comment définit-on un « mot » ?',
    answer:
      'Un mot est toute séquence de caractères non espacés. Par exemple, « bonjour-monde » compte comme un seul mot, alors que « bonjour monde » en compte deux.',
  },
];

const howTo: ExampleToolLocaleContent['howTo'] = [
  { name: '1. Collez ou tapez votre texte', text: 'Utilisez la zone de texte fournie.' },
  { name: '2. Lisez les résultats', text: 'Les compteurs se mettent à jour en temps réel.' },
];

const bibliography: ExampleToolLocaleContent['bibliography'] = [
  { name: 'Unicode Standard — Character Counting', url: 'https://www.unicode.org/standard/standard.html' },
];

const seo: ExampleToolLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Résumé rapide',
    items: [
      'Compte caractères, mots et lignes instantanément.',
      'Sans inscription ni installation.',
      'Compatible avec toutes les langues Unicode.',
    ],
  },
  { type: 'title', text: 'Comment fonctionne le compteur', level: 2 },
  {
    type: 'paragraph',
    html: 'Le texte est analysé dans le navigateur, sans envoi de données au serveur. Chaque caractère est traité selon la norme Unicode pour des résultats précis dans toutes les langues.',
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
  inLanguage: 'fr',
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
