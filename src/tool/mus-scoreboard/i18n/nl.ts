import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Vul de namen van de twee paren in, stel de tafelregels in en tik op de stenen zodra de punten geteld worden.',
  pairOneLabel: 'Paar een',
  pairTwoLabel: 'Paar twee',
  pairOneDefault: 'Tafel Noord',
  pairTwoDefault: 'Tafel Zuid',
  targetPointsLabel: 'Punten per spel',
  targetPointsHint: 'Kies het doel aantal punten per spel (30, 40 of 50 punten).',
  gamesToWinLabel: 'Spellen om de vaca te winnen',
  gamesToWinHint: 'Het eerste paar dat dit aantal behaalt, wint de wedstrijd.',
  deckLabel: 'Kaartdeck aan tafel',
  deckHint: 'Het Spaanse kaartdeck (Baraja española) van 40 kaarten is de traditionele keuze. Voor een Frans deck verwijdert u 8, 9 en 10.',
  spanishDeck: 'Baraja española (Spaans deck)',
  frenchDeck: 'Frans deck',
  frenchDeckNotice: 'Vergeet niet om de 8, 9 en 10 uit het Franse deck te halen om met 40 kaarten te spelen. Boeren zijn Sotas, Vrouwen zijn Caballos en Heren zijn Reyes.',
  pointsOption30: '30 punten',
  pointsOption40: '40 punten',
  pointsOption50: '50 punten',
  gamesOption1: '1 spel',
  gamesOption2: '2 spellen',
  gamesOption3: '3 spellen',
  startMatch: 'Open het scorebord',
  matchSettings: 'Paren en regels instellen',
  liveMatch: 'Lopende wedstrijd',
  targetLabel: 'punten per spel',
  gameLabel: 'spel',
  gamePlural: 'spellen',
  vacaLabel: 'spellen voor de winst',
  scoreLabel: 'Huidige stenen',
  handLabel: 'Kies welk paar de hand (Mano) heeft',
  handSelected: 'heeft de hand (Mano).',
  stonesLabel: 'Puntenteller',
  stoneSingular: 'steen (piedra)',
  stonePlural: 'stenen (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'punten tot het doel',
  addStone: 'steen',
  addAmarraco: 'amarraco',
  closeGame: 'Sluit spel',
  closeGamePrompt: 'Bevestigen dat dit paar het spel heeft gewonnen en het volgende starten?',
  confirmationTitle: 'Bevestig actie aan tafel',
  confirmAction: 'Bevestigen',
  cancelAction: 'Verder spelen',
  undo: 'Ongedaan maken',
  resetMatch: 'Wedstrijd resetten',
  resetMatchPrompt: 'De huidige wedstrijd resetten en de scoregeschiedenis wissen?',
  historyTitle: 'Laatste noteringen',
  noHistory: 'Nog geen noteringen.',
  matchReady: 'De tafel is gereed.',
  closeGameHint: 'Een paar heeft het doel behaald. Bevestig de winnaar van het spel.',
  waitingForScore: 'Blijf tellen. Resterende punten voor de koplopers:',
  gameWon: 'Spel gesloten.',
  vacaWon: 'Vaca gewonnen! Start een nieuwe wedstrijd wanneer de tafel klaar is.',
  gameClosed: 'heeft het spel gesloten.',
  pointsAdded: 'behaalde',
  matchSaved: 'Score opgeslagen op dit apparaat.',
  lastAction: 'Laatste actie',
  settingsApplied: 'Nieuwe regels toegepast. De wedstrijd is gereset.',
  pairNameRequired: 'Vul de namen van beide paren in voordat u het scorebord opent.',
  visualScoreLabel: 'Mus scorebord voor aan tafel met stenen, amarracos en spellen',
};

const faq = [
  {
    question: 'Wat houdt dit online Mus scorebord bij?',
    answer: 'Het houdt twee paren bij, stenen (losse punten), amarracos (blokken van 5 punten), gewonnen spellen (chicos), de vaca, wie de hand (Mano) heeft en de scoregeschiedenis.',
  },
  {
    question: 'Waarom worden stenen en amarracos apart getoond?',
    answer: 'Eén steen (Piedra) is 1 punt en één Amarraco staat gelijk aan 5 stenen. Dit maakt het vergelijken met fysieke fiches of bonen op tafel eenvoudig.',
  },
  {
    question: 'Is spelen tot 30, 40 of 50 punten mogelijk?',
    answer: 'Ja. U kunt vooraf 30, 40 of 50 punten per spel selecteren.',
  },
  {
    question: 'Hoe sluit u een voltooid spel af?',
    answer: 'Zodra een paar het doel bereikt, wordt de knop voor het sluiten actief. Na bevestiging wordt 1 spel toegekend en worden de stenen gereset.',
  },
  {
    question: 'Blijven de gegevens bewaard bij het vernieuwen van de pagina?',
    answer: 'Ja. De instellingen, namen, stenen en gewonnen spellen worden lokaal in uw browser opgeslagen.',
  },
  {
    question: 'Dwingt dit scorebord specifieke lokale Mus regels af?',
    answer: 'Nee. Mus kent verschillende regionale varianten. Dit digitale scorebord registreert de punten nauwkeurig en laat de gebaren aan de spelers over.',
  },
  {
    question: 'Hoe past u een Frans deck aan voor Mus?',
    answer: 'Verwijder 8, 9 en 10 uit het Franse deck zodat er 40 kaarten overblijven. Boeren zijn Sotas, Vrouwen zijn Caballos en Heren zijn Reyes.',
  },
];

const howTo = [
  {
    name: 'Voer de namen van de paren in',
    text: 'Vul de namen van de twee paren in voor een duidelijke herkenning aan tafel.',
  },
  {
    name: 'Stel het doel en de vaca in',
    text: 'Kies 30, 40 of 50 punten per spel en het aantal spellen voor de vaca.',
  },
  {
    name: 'Tel stenen en amarracos',
    text: 'Tik op steen (+1) of amarraco (+5) na elke getelde ronde.',
  },
  {
    name: 'Bevestig de winst van het spel',
    text: 'Bevestig de winnaar zodra het doel bereikt is om het spel te registreren en de stenen te resetten.',
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
  name: 'Online Mus Scorebord',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Digitaal scorebord voor het traditionele Spaanse kaartspel Mus.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe houdt u de score bij in een Mus wedstrijd',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'online-mus-scorebord',
  title: 'Online Mus Scorebord voor Live Wedstrijden',
  description: 'Houd stenen, amarracos, spellen en vacas bij voor het Spaanse kaartspel Mus. Voor Spaanse en Franse decks met lokale opslag.',
  ui,
  seo: [
    { type: 'title', text: 'Duidelijke en Snelle Scorebijhouding voor Uw Mus Tafel', level: 2 },
    { type: 'paragraph', html: 'Mus is een traditioneel Spaans kaartspel vol dynamiek, emotie, tactiek en bluffen. Omdat punten na elke ronde (Grande, Chica, Pares, Juego of Punto) snel worden geteld en doorgegeven, voorkomt dit digitale scorebord misverstanden en discussies aan tafel.' },
    { type: 'title', text: 'Stel het Doel in Vóór de Eerste Hand', level: 2 },
    { type: 'paragraph', html: 'Hoewel 40 punten de standaard is in traditionele kringen, spelen sommige tafels liever tot 30 of 50 punten. Stel het doel in voordat u de kaarten deelt, zodat de teller en de knoppen voor het sluiten van de wedstrijd exact kloppen.' },
    {
      type: 'table',
      headers: ['Instelling', 'Effect', 'Aanbevolen voor'],
      rows: [
        ['30 punten', 'Kort spel', 'Snelle wedstrijden, toernooien of lokale huisregels'],
        ['40 punten', 'Standaard spel', 'Het klassieke traditionele formaat onder vrienden'],
        ['50 punten', 'Lang spel', 'Wedstrijden met meer tactische ruimte en strategische diepte'],
      ],
    },
    { type: 'tip', title: 'Bespreek de Regels Hardop', html: 'Spreek vooraf duidelijk met uw medespelers af of er met 8 Heren en 8 Azen wordt gespeeld (waarbij 3en als Heren en 2en als Azen gelden) en wie de fysieke fiches of bonen beheert.' },
    { type: 'title', text: 'Aanpassing van Spaans en Frans Kaartdeck', level: 2 },
    { type: 'paragraph', html: 'Het Spaanse deck van 40 kaarten (Oros, Copas, Espadas, Bastos) is het originele uitgangspunt voor Mus. Bij een Frans deck verwijdert u eenvoudig 8, 9 en 10. Boeren zijn Sotas, Vrouwen zijn Caballos en Heren zijn Reyes.' },
    { type: 'title', text: 'Digitale Puntentelling Direct aan de Tafelrand', level: 2 },
    { type: 'paragraph', html: 'Het grote getal toont de totale score op overzichtelijke wijze. De regel eronder vertaalt dit aantal automatisch naar amarracos (blokken van 5 punten) en losse stenen voor een snelle visuele controle.' },
    { type: 'list', items: ['<strong>Steen (Piedra):</strong> 1 los punt in de telling van de wedstrijd.', '<strong>Amarraco:</strong> 1 fiche of blok gelijk aan 5 stenen.', '<strong>Spel (Chico):</strong> Gewonnen ronde bij het bereiken van het afgesproken doel.', '<strong>Vaca:</strong> Eindoverwinning van de wedstrijd na het behalen van het vereiste aantal spellen.'] },
    { type: 'title', text: 'Spel Sluiten en Fouten Herstellen', level: 2 },
    { type: 'paragraph', html: 'Wanneer het doel bereikt is, wordt de knop voor het sluiten van het spel actief met een duidelijke bevestiging. Mocht u per ongeluk een verkeerd punt invullen, dan kunt u dit direct ongedaan maken via de herstelknop.' },
    { type: 'tip', title: 'Gebruik Ongedaan Maken bij Vergissingen', html: 'Als een punt per ongeluk aan het verkeerde paar wordt toegekend, gebruik dan direct Ongedaan maken om de score te herstellen zonder de geschiedenis te verstoren.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
