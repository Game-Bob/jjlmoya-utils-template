import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Fantasy Runor Översättare',
  inputPlaceholder: 'Skriv ett ord eller namn att översätta...',
  alphabetLabel: 'Runalfabet',
  elderFuthark: 'Äldre Futhark',
  angloSaxon: 'Anglosaxiska',
  fantasy: 'Fantasy-skrift',
  theban: 'Thebanska',
  enochian: 'Enokiska',
  daemonic: 'Demonisk',
  ogham: 'Ogham',
  translate: 'Översätt',
  clear: 'Rensa',
  copy: 'Kopiera text',
  copied: 'Kopierad!',
  runeName: 'Namn',
  runeMeaning: 'Betydelse',
  runePhonetic: 'Fonetisk',
  clickHint: 'Klicka på en runa för att se detaljer',
  outputLabel: 'Run-utdata',
  noInput: 'Skriv in text ovan för att översätta till runor',
  unknownChar: '?',
  gmMode: 'SL-läge',
  exitGmMode: 'Avsluta',
  gmHint: 'Visa detta för dina spelare',
  seedLabel: 'Frö',
  seedPlaceholder: 'Valfritt',
  seedApplied: 'Låst',
  shuffleSeed: 'Blanda',
};

const faq = [
  {
    question: 'Vad är den Äldre Futhark?',
    answer: 'Den Äldre Futhark är den äldsta formen av runalfabeten, använd av germanska stammar från 200- till 700-talet. Den består av 24 runor uppdelade i tre grupper om åtta som kallas aettir. Varje runa har ett fonetiskt värde och ett symboliskt namn som representerar naturliga eller mytologiska begrepp.',
  },
  {
    question: 'Vad är skillnaden mellan Äldre Futhark och anglosaxiska runor?',
    answer: 'Det anglosaxiska Futhorc är en utökad version av den Äldre Futhark som utvecklades i England. Det lägger till ytterligare runor för att representera ljud specifika för forniska, och expanderar från 24 till upp till 33 tecken. Betydelserna och de fonetiska värdena förändrades också över tiden.',
  },
  {
    question: 'Översätter denna översättare ord perfekt?',
    answer: 'Detta verktyg ger en bokstav-för-bokstav-translitterering till runsymboler. Historisk runanvändning var fonetisk snarare än bokstavlig bokstav-för-bokstav, så resultatet är en modern tolkning. Alternativet Fantasy-skrift erbjuder ett kreativt fiktivt alfabet för tabletop-RPG-stämning.',
  },
  {
    question: 'Kan jag använda dessa runor i mina tabletop-RPG-kampanjer?',
    answer: 'Ja! Spelledare och spelare kan använda översättaren för att skapa runinskrifter, magiska skrifter, hemliga meddelanden eller dekorativa namn för karaktärer och platser. Fantasy-skrift-alternativet är särskilt utformat för fantasy-rollspelsmiljöer.',
  },
  {
    question: 'Lagrar detta verktyg text som jag skriver?',
    answer: 'Nej. Allt körs lokalt i din webbläsare. Ingen text, översättning eller markering skickas någonsin till någon server. Ditt kreativa arbete förblir helt privat.',
  },
  {
    question: 'Vad händer när jag klickar på en runa?',
    answer: 'Om du klickar på ett runkort visas dess traditionella namn, symboliska betydelse och fonetiska värde. Detta hjälper dig att lära dig runorna och välja rätt symbol för dina RPG-behov.',
  },
];

const howTo = [
  {
    name: 'Ange text',
    text: 'Skriv valfritt engelskt ord, namn eller fras i inmatningsfältet. Översättaren fungerar bäst med enstaka ord eller korta fraser.',
  },
  {
    name: 'Välj ett alfabet',
    text: 'Välj mellan Äldre Futhark (urgermanska), Anglosaxiska (medeltida engelska) eller Fantasy-skrift (tabletop RPG-stil).',
  },
  {
    name: 'Översätt och utforska',
    text: 'Klicka på Översätt för att konvertera din text. Varje runa visas som ett kort. Klicka på valfri runa för att lära dig dess namn, betydelse och ljud. Använd Kopiera-knappen för att spara runtexten till ditt urklipp.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantasy-runor-oversattare',
  title: 'Fantasy Runor Översättare / Äldre Futhark, Thebanska, Enokiska and Demonisk Runomvandlare',
  description: 'Översätt text till Äldre Futhark, Anglosaxiskt Futhorc, Thebanska, Enokiska, Demonisk, Ogham eller fantasy-skrifter. Perfekt för tabletop RPG-pussel, kampanjer, trollkarlsrullar och mystiska runor.',
  ui,
  seo: [
    { type: 'title', text: 'Runalfabet och Mytiska Skrifter för Tabletop RPG-Världsbyggande', level: 2 },
    { type: 'paragraph', html: 'Mystiska runalfabet, forntida symboler och hemliga skrifter ger en oöverträffad inlevelse i fantasy-rollspel som D&D, Pathfinder och Warhammer. Oavsett om du skapar gömda dvärgiska ruiner med Äldre Futhark, utformar en arkanisk trollformelbok med enokiska änglaspråk, sprider häxaktiga ledtrådar med det thebanska alfabetet eller skriver förbjudna demoniska budskap, omvandlar vår rungenerator vanlig engelsk text till stiliserade symboler i realtid. Väck spelarnas nyfikenhet med fysiska rekvisita, mystiska chiffer och forntida stenhuggningar.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Runalfabet' },
        { value: '150+', label: 'Symbolvariationer' },
        { value: 'Omedelbar', label: 'Visuell Translitterering' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Äldre Futhark & Anglosaxiskt Futhorc: Forngermanska och Nordiska Runor', level: 2 },
    { type: 'paragraph', html: 'Den Äldre Futhark härstammar från 200-talet och är det äldsta runsystemet, bestående av 24 tecken som representerar naturens grundläggande krafter. Det anglosaxiska Futhorc utökade detta system till att omfatta upp till 33 tecken for forniska fonetiska ljud. Dessa historiska symboler är perfekta för att representera dvärgaklaner, nordisk mytologi-inspirerade kulturer, vikingahuggning och barbariska klaninsignier i dina RPG-kampanjer.' },
    { type: 'title', text: 'Thebanska & Ogham: Medeltida Häxkonst och Keltiska Trädlfabet', level: 2 },
    { type: 'paragraph', html: 'Ofta kallad Runor av Honorius eller Häxans alfabet, är den thebanska skriften en historiskt populär medeltida chiffer som användes i ockulta traditioner och Wicca. Ogham, ett tidigmedeltida alfabet, använder linjära streck längs kanter, känt för sin koppling till keltisk folklore och druidisk trädmagi. Använd dessa skrifter för att pryda druidiska helgedomar, alvskogar, hedniska altare eller dolda meddelanden från hemliga häxkongregationer.' },
    { type: 'title', text: 'Enokiska & Demoniska Skrifter: Arkana Änglaspråk och Avgrundsspråk', level: 2 },
    { type: 'paragraph', html: 'Först nedtecknat av John Dee och Edward Kelley på 1500-talet, är enokiska ett detaljerat konstruerat språk som anses vara änglarnas tungomål. Demoniska skrifter representerar avgrundsglyfer, mörka pakter och infernaliska märken. Höj den narrativa insatsen i din kampanj genom att lämna avläsbara demoniska kontrakt, mörka kultristningar och änglareliker för dina trollkarlar, paladiner och präster att undersöka.' },
    { type: 'title', text: 'Anpassad Fantasy-skrift: Rollspelsredo Kreativa Alfabet', level: 2 },
    { type: 'paragraph', html: 'För världar som går bortom verklighetens historia, erbjuder vår anpassade Fantasy-skrift en fiktiv uppsättning runor byggda specifikt för att framkalla klassisk high-fantasy-estetik. Varje runa är utformad för att sticka ut på spelledarutskrifter, digitala kartor och anpassade spelarplåtar. Para ihop den med fröbaserade randomiseringar för att göra hemliga språk unika för olika falanger, nationer eller forntida gudar.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Fantasy Runor Översättare',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man använder Fantasy Runor Översättare',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
