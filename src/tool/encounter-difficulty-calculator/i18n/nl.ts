import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Stel de groep en de dreiging in. De calculator vergelijkt de ontmoeting met de D&D 5e 2014 drempels.',
  partySection: 'De groep',
  partyLevel: 'Karakterniveau',
  partyLevelHint: 'Gebruik een gemiddeld niveau voor een groep met een vergelijkbaar niveau.',
  partySize: 'Karacters',
  partySizeHint: 'De regels passen de monstermenigvuldiger aan voor erg kleine of grote groepen.',
  threatSection: 'De dreiging',
  monsterCr: 'Monster uitdagingsgraad (CR)',
  monsterCrHint: 'Kies de CR van een monster. Gemengde groepen vereisen een aparte berekening.',
  moreCr: 'Hogere CR tonen',
  lessCr: 'Minder CR tonen',
  monsterCount: 'Aantal monsters',
  monsterCountHint: 'Meer wezens verhogen de actiedruk, zelfs bij een bescheiden basis-XP.',
  presets: 'Start met een scène',
  presetClassic: 'Klassieke patrouille',
  presetBoss: 'Solo baas',
  presetSwarm: 'Zwerm handlangers',
  resultSection: 'Druk van de ontmoeting',
  belowEasyHint: 'Een lichte scène om middelen te sparen voor wat volgt.',
  easyHint: 'Een beheersbare scène met beperkte druk op de groep.',
  mediumHint: 'Een betekenisvolle test die hitpoints of middelen kan kosten.',
  hardHint: 'Een gevaarlijke scène waarin tactiek en middelenkeuzes van belang zijn.',
  deadlyHint: 'Signaal voor dodelijke druk. Controleer vluchtroutes en terrein.',
  adjustedXp: 'Aangepaste XP',
  baseXp: 'Basis XP',
  multiplier: 'Groepsvermenigvuldiger',
  partyThreshold: 'Gemiddelde drempel',
  belowEasy: 'Onder makkelijk',
  easy: 'Makkelijk',
  medium: 'Gemiddeld',
  hard: 'Moeilijk',
  deadly: 'Dodelijk',
  warning: 'Waarschuwing',
  partyAdjustment: 'De vermenigvuldiger is aangepast omdat de groep uit minder dan drie of meer dan vijf karakters bestaat.',
  highCr: 'Een monster met een CR boven het groepsniveau kan een karakter snel uitschakelen.',
  manyMonsters: 'Elf of meer monsters maken een gevecht erg complex om te leiden.',
  rulesNote: 'Schatting volgens D&D 5e 2014 regels. Houdt geen rekening met terrein of tactiek.',
  rulesLinkLabel: 'Lees de bronregels',
  reset: 'Herstellen naar voorbeeld',
  xpUnit: 'XP',
  sceneLabel: 'Grafische weergave van gevechtsdruk',
  partyMarker: 'Groep',
  threatMarker: 'Dreiging',
};

const faq = [
  {
    question: 'Welke regels gebruikt deze ontmoetingscalculator?',
    answer: 'Het gebruikt de officiële D&D 5e 2014 methode uit de Basisregels en vergelijkt de groepsdrempels met de aangepaste XP.',
  },
  {
    question: 'Waarom verschilt aangepaste XP van de belonings-XP?',
    answer: 'De regels vermenigvuldigen de totale monster-XP om het gevaar van meerdere wezens in dezelfde ronde te weerspiegelen.',
  },
  {
    question: 'Kan ik dit gebruiken voor gemengde monstergroepen?',
    answer: 'Gebruik het als snelle schatting voor gelijke monsters. Tel voor gemengde groepen de XP van elk wezen op en pas de vermenigvuldiger toe.',
  },
  {
    question: 'Betekent een dodelijk resultaat dat de groep doodgaat?',
    answer: 'Nee. Dodelijk betekent dat de aangepaste XP de dodelijke drempel bereikt. Terrein en keuzes veranderen het werkelijke resultaat.',
  },
  {
    question: 'Waarom verandert de groepsgrootte de vermenigvuldiger?',
    answer: 'De Basisregels adviseren een hogere vermenigvuldiger voor groepen kleiner dan drie en een lagere voor groepen van zes of meer.',
  },
];

const howTo = [
  {
    name: 'Stel het groepsniveau in',
    text: 'Kies het gemiddelde niveau van de karakters in de groep.',
  },
  {
    name: 'Stel de groepsgrootte in',
    text: 'Vul het aantal karakters in dat deelneemt aan het gevecht.',
  },
  {
    name: 'Beschrijf de dreiging',
    text: 'Kies de uitdagingsgraad (CR) en het aantal monsters.',
  },
  {
    name: 'Lees de druk af',
    text: 'Vergelijk de aangepaste XP met de drempelwaarden.',
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

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'D&D 5e Ontmoetings-Moeilijkheidsgraad Calculator',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Bereken de moeilijkheidsgraad van gevechten voor D&D 5e 2014 op basis van niveau, groepsgrootte, monster-CR, aantal en officiële drempels.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe je de D&D 5e ontmoetingsmoeilijkheid berekent',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-ontmoetings-moeilijkheidsgraad-calculator',
  title: 'D&D 5e Ontmoetings Moeilijkheidsgraad Calculator',
  description: 'Schat de druk van gevechten in D&D 5e 2014 in via groepsniveau, grootte, monster-CR, aangepaste XP en officiële drempels.',
  ui,
  seo: [
    { type: 'title', text: 'Schat de gevechtsmoeilijkheid in voor het initiatief begint', level: 2 },
    { type: 'paragraph', html: 'Een D&D-gevecht is meer dan alleen de uitdagingsgraad van een monster. Deze calculator zet groepsgrootte, niveau, CR en monsteraantal om in de aangepaste XP volgens de D&D 5e 2014 regels. Het visuele resultaat toont duidelijk waar de ontmoeting zich bevindt ten opzichte van de drempels voor makkelijk, gemiddeld, moeilijk en dodelijk.' },
    { type: 'title', text: 'Hoe de D&D 5e gevechtsformule werkt', level: 2 },
    { type: 'paragraph', html: 'De methode telt de XP-drempel van elk karakter op voor elk moeilijkheidsniveau en past de vermenigvuldiger toe op de totale monster-XP. Groepen met minder dan drie karakters gebruiken de eerstvolgende hogere vermenigvuldiger, terwijl groepen van zes of meer karakters de lagere vermenigvuldiger gebruiken.' },
    {
      type: 'table',
      headers: ['Signaal', 'Wat te controleren aan tafel'],
      rows: [
        ['Onder makkelijk', 'Het gevecht dient als opwarming of voor een klein middelenverbruik.'],
        ['Makkelijk', 'De groep wint meestal zonder veel middelen in te zetten.'],
        ['Gemiddeld', 'Verwacht matige druk en ten minste één belangrijke keuze over middelen.'],
        ['Moeilijk', 'Houd rekening met verlies van hitpoints en spell slots.'],
        ['Dodelijk', 'Controleer tactiek, terrein en vluchtroutes.'],
      ],
    },
    { type: 'title', text: 'Waarom het aantal monsters belangrijk is', level: 2 },
    { type: 'paragraph', html: 'Meerdere monsters creëren meer gevaar dan hun basis-XP aangeeft omdat ze meer aanvallen en reacties in dezelfde ronde uitvoeren. Daarom gebruikt een paar wezens een hogere vermenigvuldiger dan één wezen met dezelfde gecombineerde XP.' },
    { type: 'tip', title: 'Zie een hoge CR als een specifiek waarschuwingssignaal', html: 'Een monster met een CR boven het groepsniveau kan een karakter met één sterke actie uitschakelen. Controleer schade en controle-effecten in plaats van alleen af te gaan op het moeilijkheidslabel.' },
    { type: 'title', text: 'Gebruik het resultaat als voorbereidingshulp', level: 2 },
    { type: 'paragraph', html: 'Beoordeel voor moeilijke of dodelijke gevechten ook de omgeving, verrassing en de algemene staat van de groep. Krappe ruimtes, dekking, valstrikken en concentratiespreuken kunnen het werkelijke gevaar aan tafel aanzienlijk veranderen.' },
    { type: 'tip', title: 'Gemengde monstergroepen handmatig aanpassen', html: 'Tel de basis-XP van elk wezen op en pas de vermenigvuldiger toe op het totale aantal monsters.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
