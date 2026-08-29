import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Namnge de två paren, ställ in bordets regler och tryck på stenarna när händerna räknas.',
  pairOneLabel: 'Par ett',
  pairTwoLabel: 'Par två',
  pairOneDefault: 'Bord Norr',
  pairTwoDefault: 'Bord Söder',
  targetPointsLabel: 'Poäng per spel',
  targetPointsHint: 'Välj målpoäng för varje spel (30, 40 eller 50 poäng).',
  gamesToWinLabel: 'Spel för att vinna vaca',
  gamesToWinHint: 'Det första paret som når detta antal vinner matchen.',
  deckLabel: 'Bordets kortlek',
  deckHint: 'Spansk kortlek (Baraja española) är det traditionella valet. För fransk kortlek tar du bort 8:or, 9:or och 10:or.',
  spanishDeck: 'Baraja española (Spansk kortlek)',
  frenchDeck: 'Fransk kortlek',
  frenchDeckNotice: 'Glöm inte att ta bort 8:or, 9:or och 10:or från den franska kortleken för att spela med 40 kort. Knektar är Sotas, Damer är Caballos och Kungar är Reyes.',
  pointsOption30: '30 poäng',
  pointsOption40: '40 poäng',
  pointsOption50: '50 poäng',
  gamesOption1: '1 spel',
  gamesOption2: '2 spel',
  gamesOption3: '3 spel',
  startMatch: 'Öppna poängräknaren',
  matchSettings: 'Ställ in par och regler',
  liveMatch: 'Pågående match',
  targetLabel: 'poäng per spel',
  gameLabel: 'spel',
  gamePlural: 'spel',
  vacaLabel: 'spel för vinst',
  scoreLabel: 'Aktuella stenar',
  handLabel: 'Välj vilket par som är hand (Mano)',
  handSelected: 'är hand (Mano).',
  stonesLabel: 'Poängställning',
  stoneSingular: 'sten (piedra)',
  stonePlural: 'stenar (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'kvar till mål',
  addStone: 'sten',
  addAmarraco: 'amarraco',
  closeGame: 'Stäng spel',
  closeGamePrompt: 'Bekräfta att detta par har vunnit spelet och starta nästa?',
  confirmationTitle: 'Bekräfta åtgärd',
  confirmAction: 'Bekräfta',
  cancelAction: 'Fortsätt spela',
  undo: 'Ångra',
  resetMatch: 'Återställ match',
  resetMatchPrompt: 'Återställa den aktuella matchen och rensa poänghistoriken?',
  historyTitle: 'Senaste noteringar',
  noHistory: 'Inga noteringar än.',
  matchReady: 'Bordet är redo.',
  closeGameHint: 'Ett par har nått målpoängen. Bekräfta vinnaren av spelet.',
  waitingForScore: 'Räkna vidare. Återstående poäng för ledarna:',
  gameWon: 'Spel avslutat.',
  vacaWon: 'Vaca vunnen! Starta en ny match när bordet är redo.',
  gameClosed: 'stängde spelet.',
  pointsAdded: 'skrapade ihop',
  matchSaved: 'Poäng sparad på denna enhet.',
  lastAction: 'Senaste åtgärd',
  settingsApplied: 'Nya regler tillämpade. Matchen återställdes.',
  pairNameRequired: 'Ge båda paren ett namn innan du öppnar poängräknaren.',
  visualScoreLabel: 'Mus-poängräknare för bordet med stenar, amarracos och spel',
};

const faq = [
  {
    question: 'Vad håller denna online Mus-poängräknare reda på?',
    answer: 'Den håller reda på två par, stenar (enstaka poäng), amarracos (5-poängsblock), vunna spel (chicos), vaca, vem som är hand (Mano) och poänghistorik.',
  },
  {
    question: 'Varför visas stenar och amarracos separat?',
    answer: 'En sten (Piedra) motsvarar 1 poäng och en Amarraco motsvarar 5 stenar. Att visa dem separat gör det enkelt att jämföra med fysiska märkmarker på bordet.',
  },
  {
    question: 'Kan man spela till 30, 40 eller 50 poäng?',
    answer: 'Ja. Välj 30, 40 eller 50 poäng per spel innan du öppnar räknaren.',
  },
  {
    question: 'Hur avslutas ett färdigt spel?',
    answer: 'När ett par når målpoängen aktiveras knappen för att stänga spelet. Efter bekräftelse läggs 1 spel till och stenarna nollställs.',
  },
  {
    question: 'Sparas matchen om sidan laddas om?',
    answer: 'Ja. Inställningar, parnamn, stenar och vunna spel sparas lokalt i webbläsaren.',
  },
  {
    question: 'Tvingar poängräknaren på lokala Mus regler?',
    answer: 'Nej. Mus har många regionala varianter. Denna digitala räknare fokuserar på exakt poängräkning vid bordet.',
  },
  {
    question: 'Hur anpassar man en fransk kortlek för Mus?',
    answer: 'Ta bort 8:or, 9:or och 10:or från den franska kortleken så att 40 kort återstår. Knektar är Sotas, Damer är Caballos och Kungar är Reyes.',
  },
];

const howTo = [
  {
    name: 'Ange parens namn',
    text: 'Fyll i namnen på de två paren för att enkelt identifiera dem vid bordet.',
  },
  {
    name: 'Ställ in mål och vaca',
    text: 'Välj 30, 40 eller 50 poäng per spel samt antal vunna spel som krävs för vaca.',
  },
  {
    name: 'Räkna poäng och amarracos',
    text: 'Tryck på sten (+1) eller amarraco (+5) när poäng delas ut i rundorna.',
  },
  {
    name: 'Bekräfta spelet och nollställ stenar',
    text: 'Bekräfta vinnaren när målpoängen nås för att registrera spelet och återställa stenarna.',
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
  name: 'Online Mus Poängräknare',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Digital poängräknare för det traditionella spanska kortspelet Mus.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hur du räknar poäng i kortspelet Mus',
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
  slug: 'online-mus-poangraknare',
  title: 'Online Mus Poängräknare för Live Matcher',
  description: 'Räkna stenar, amarracos, spel och vacas i det spanska kortspelet Mus. Anpassat för spanska och franska kortlekar.',
  ui,
  seo: [
    { type: 'title', text: 'Tydlig och Snabb Poängräkning för dina Mus Matcher', level: 2 },
    { type: 'paragraph', html: 'Mus är ett traditonellt spanskt kortspel fullt av dynamik, taktik, bluffar och spänning. Eftersom poängen räknas snabbt efter varje runda (Grande, Chica, Pares, Juego eller Punto) förhindrar denna digitala räknare felräkningar och diskussioner vid bordet.' },
    { type: 'title', text: 'Välj Målpoäng Innan Första Handen', level: 2 },
    { type: 'paragraph', html: 'Klassiska matcher spelas traditionellt till 40 poäng, men det går även bra att spela till 30 eller 50 poäng. Ställ in målet innan ni delar ut första handen så att räknaren och knapparna för matchavslut stämmer exakt med bordets regler.' },
    {
      type: 'table',
      headers: ['Inställning', 'Effekt', 'När den används'],
      rows: [
        ['30 poäng', 'Kort spel', 'Snabba matcher, turneringar eller lokala regler'],
        ['40 poäng', 'Standardspel', 'Klassisk traditionell match med vänner'],
        ['50 poäng', 'Långt spel', 'Matcher med mer utrymme för strategi och djup'],
      ],
    },
    { type: 'tip', title: 'Stäm av Reglerna vid Bordet', html: 'Kom överens om regeln med 8 kungar och 8 ess (där 3:or fungerar som kungar och 2:or som ess) och vem som ansvarar för bordets fysiska marker eller bönor.' },
    { type: 'title', text: 'Anpassning av Spansk och Fransk Kortlek', level: 2 },
    { type: 'paragraph', html: 'Den spanska kortleken med 40 kort (Oros, Copas, Espadas, Bastos) är originalet för Mus. Med franska kort tar ni enkelt bort 8:or, 9:or och 10:or. Knektar är Sotas, Damer är Caballos och Kungar är Reyes.' },
    { type: 'title', text: 'Digital Poängställning Direkt vid Bordet', level: 2 },
    { type: 'paragraph', html: 'Det stora talet visar den totala poängställningen på ett tydligt sätt. Raden nedanför översätter automatiskt poängen till amarracos (5-poängsblock) och enskilda stenar för snabb avstämning.' },
    { type: 'list', items: ['<strong>Sten (Piedra):</strong> 1 enskild poäng i matchens sammanställning.', '<strong>Amarraco:</strong> 1 märkmarkör eller block motsvarande 5 stenar.', '<strong>Spel (Chico):</strong> Vunnen runda när det avtalade målet nås.', '<strong>Vaca:</strong> Slutgiltig matchvinst vid uppnått antal vunna spel.'] },
    { type: 'title', text: 'Avsluta Spel och Återställa Fel', level: 2 },
    { type: 'paragraph', html: 'När målpoängen nås aktiveras knappen för att stänga spelet med en tydlig bekräftelse. Om en poäng trycks in felaktigt kan du använda Ångra knappen för att direkt återställa det senaste draget.' },
    { type: 'tip', title: 'Använd Ångra vid Felräkning', html: 'Om du av misstag ger poäng till fel par trycker du direkt på Ångra för att rätta till poängställningen utan att förstöra historiken.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
