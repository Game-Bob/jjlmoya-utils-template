import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Ställ in gruppen och hotet. Kalkylatorn väger striden mot tröskelvärdena i D&D 5e 2014.',
  partySection: 'Gruppen',
  partyLevel: 'Karaktärsnivå',
  partyLevelHint: 'Använd en genomsnittlig nivå för en grupp med liknande karaktärsnivåer.',
  partySize: 'Karaktärer',
  partySizeHint: 'Reglerna justerar monstermultiplikatorn för mycket små eller stora grupper.',
  threatSection: 'Hotet',
  monsterCr: 'Monstrets utmaningsgrad (CR)',
  monsterCrHint: 'Välj CR för ett monster. Blanda monster kräver en separat beräkning.',
  moreCr: 'Visa högre CR',
  lessCr: 'Visa färre CR',
  monsterCount: 'Antal monster',
  monsterCountHint: 'Fler varelser ökar aktionstrycket även vid måttlig bas-XP.',
  presets: 'Börja med en scen',
  presetClassic: 'Klassisk patrull',
  presetBoss: 'Ensam boss',
  presetSwarm: 'Svärm av hejdukar',
  resultSection: 'Stridstryck',
  belowEasyHint: 'En lätt scen för att spara resurser inför kommande utmaningar.',
  easyHint: 'En hanterbar scen med lågt tryck på gruppen.',
  mediumHint: 'Ett meningsfullt test som kan kosta kroppspoäng eller resurser.',
  hardHint: 'En farlig scen där taktik och resursval spelar roll.',
  deadlyHint: 'Signal för dödligt tryck. Kontrollera reträttvägar och terräng.',
  adjustedXp: 'Justerad XP',
  baseXp: 'Bas-XP',
  multiplier: 'Gruppmultiplikator',
  partyThreshold: 'Medeltröskel',
  belowEasy: 'Under lätt',
  easy: 'Lätt',
  medium: 'Medel',
  hard: 'Svår',
  deadly: 'Dödlig',
  warning: 'Viktigt',
  partyAdjustment: 'Multiplikatorn har justerats eftersom gruppen har färre än tre eller fler än fem karaktärer.',
  highCr: 'Ett monster med högre CR än gruppens nivå kan slå ut en karaktär snabbt.',
  manyMonsters: 'Elva eller fler monster gör striden svårstyrd och skapar ojämn aktionsekonomi.',
  rulesNote: 'Uppskattning enligt D&D 5e 2014-reglerna. Tar inte hänsyn till terräng eller taktik.',
  rulesLinkLabel: 'Läs källreglerna',
  reset: 'Återställ till exempel',
  xpUnit: 'XP',
  sceneLabel: 'Grafisk visning av stridstryck',
  partyMarker: 'Grupp',
  threatMarker: 'Hot',
};

const faq = [
  {
    question: 'Vilka regler använder denna stridskalkylator?',
    answer: 'Den använder den officiella D&D 5e 2014-metoden från Grundreglerna och jämför gruppens trösklar med monstrets justerade XP.',
  },
  {
    question: 'Varför skiljer sig justerad XP från belönings-XP?',
    answer: 'Reglerna multiplicerar den totala monster-XP:n för att återspegla faran med att flera varelser agerar i samma runda.',
  },
  {
    question: 'Kan jag använda verktyget för en blandad grupp monster?',
    answer: 'Använd det som en snabb uppskattning för identiska monster. För blandade grupper summeras bas-XP och multiplikatorn tillämpas.',
  },
  {
    question: 'Betyder ett dödligt resultat att gruppen kommer att dö?',
    answer: 'Nej. Dödligt innebär att justerad XP når den dödliga tröskeln. Terräng, taktik och beslut ändrar det faktiska resultatet.',
  },
  {
    question: 'Varför ändrar gruppstorleken multiplikatorn?',
    answer: 'Grundreglerna rekommenderar en högre multiplikator för grupper under tre karaktärer och en lägre för grupper på sex eller fler.',
  },
];

const howTo = [
  {
    name: 'Ställ in gruppnivå',
    text: 'Välj den genomsnittliga nivån på karaktärerna i gruppen.',
  },
  {
    name: 'Ange gruppstorlek',
    text: 'Ange antalet karaktärer som deltar i striden.',
  },
  {
    name: 'Beskriv hotet',
    text: 'Välj utmaningsgrad (CR) och antal monster.',
  },
  {
    name: 'Läs av trycket',
    text: 'Jämför justerad XP med tröskelvärdena.',
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
  name: 'D&D 5e Stridssvårighetskalkylator',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Beräkna stridssvårighet för D&D 5e 2014 utifrån nivå, gruppstorlek, monster-CR, antal och officiella tröskelvärden.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hur du beräknar stridssvårighet i D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-stridssvarighetskalkylator',
  title: 'D&D 5e Stridssvårighetskalkylator',
  description: 'Uppskatta stridstryck i D&D 5e 2014 med gruppnivå, storlek, monster-CR, justerad XP och officiella tröskelvärden.',
  ui,
  seo: [
    { type: 'title', text: 'Utvärdera stridssvårighet innan initiativet rullas', level: 2 },
    { type: 'paragraph', html: 'En D&D-strid är mer än bara siffran bredvid ett monster. Denna kalkylator omvandlar gruppstorlek, nivå, CR och antal monster till justerad XP enligt D&D 5e 2014-reglerna. Det visuella resultatet visar tydligt var striden hamnar i förhållande till trösklarna för lätt, medel, svår och dödlig.' },
    { type: 'title', text: 'Hur formeln för D&D 5e-strider fungerar', level: 2 },
    { type: 'paragraph', html: 'Metoden summerar XP-tröskeln för varje karaktär vid varje svårighetsgrad och tillämpar sedan multiplikatorn på monstrets totala XP. Grupper med färre än tre karaktärer använder nästa högre multiplikator, medan grupper på sex eller fler använder nästa lägre.' },
    {
      type: 'table',
      headers: ['Signal', 'Vad du ska kontrollera vid bordet'],
      rows: [
        ['Under lätt', 'Striden fungerar som uppvärmning eller lätt resursförbrukning.'],
        ['Lätt', 'Gruppen vinner vanligtvis utan stor resursinsats.'],
        ['Medel', 'Räkna med måttligt tryck och minst ett viktigt resursval.'],
        ['Svår', 'Planera för förlust av kroppspoäng och trollformelsplatser.'],
        ['Dödlig', 'Kontrollera taktik, terräng och reträttvägar.'],
      ],
    },
    { type: 'title', text: 'Varför antalet monster är avgörande', level: 2 },
    { type: 'paragraph', html: 'Flera monster utgör en större fara än deras bas-XP visar eftersom de utför fler attacker och reaktioner i samma runda. Därför använder ett par varelser en högre multiplikator än en enskild varelse med samma kombinerade XP.' },
    { type: 'tip', title: 'Betrakta hög CR som en specifik varning', html: 'Ett monster med högre CR än gruppens nivå kan slå ut en karaktär med en enda kraftfull handling. Kontrollera skada och effekter istället för att enbart lita på svårighetsetiketten.' },
    { type: 'title', text: 'Använd resultatet som ett verktyg vid förberedelse', level: 2 },
    { type: 'paragraph', html: 'Innan du planerar en svår eller dödlig strid bör du utvärdera rummets storlek, överraskning och gruppens tillstånd. Trånga utrymmen, skydd, fällor och koncentrationsformler kan förändra den faktiska faran vid bordet.' },
    { type: 'tip', title: 'Blandade monstergrupper', html: 'Summera bas-XP för varje varelse och tillämpa multiplikatorn på det totala antalet monster.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
