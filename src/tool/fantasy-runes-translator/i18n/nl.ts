import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Fantasy Runen Vertaler',
  inputPlaceholder: 'Typ een woord of naam om te vertalen...',
  alphabetLabel: 'Runen Alfabet',
  elderFuthark: 'Oudere Futhark',
  angloSaxon: 'Angelsaksisch',
  fantasy: 'Fantasy Schrift',
  theban: 'Thebaans',
  enochian: 'Henochiaans',
  daemonic: 'Demonisch',
  ogham: 'Ogham',
  translate: 'Vertalen',
  clear: 'Wissen',
  copy: 'Tekst kopiëren',
  copied: 'Gekopieerd!',
  runeName: 'Naam',
  runeMeaning: 'Betekenis',
  runePhonetic: 'Fonetisch',
  clickHint: 'Klik op een rune om de details te zien',
  outputLabel: 'Runen Uitvoer',
  noInput: 'Voer hierboven tekst in om te vertalen naar runen',
  unknownChar: '?',
  gmMode: 'SM-modus',
  exitGmMode: 'Stop',
  gmHint: 'Toon dit aan je spelers',
  seedLabel: 'Zaad',
  seedPlaceholder: 'Optioneel',
  seedApplied: 'Vergrendeld',
  shuffleSeed: 'Schudden',
};

const faq = [
  {
    question: 'Wat is de Oudere Futhark?',
    answer: 'De Oudere Futhark is de oudste vorm van de runenalfabetten, gebruikt door Germaanse stammen van de 2e tot de 8e eeuw. Het bestaat uit 24 runen verdeeld in drie groepen van acht, aettir genaamd. Elke rune heeft een fonetische waarde en een symbolische naam die natuurlijke of mythologische concepten vertegenwoordigt.',
  },
  {
    question: 'Wat is het verschil tussen de Oudere Futhark en Angelsaksische runen?',
    answer: 'Het Angelsaksische Futhorc is een uitgebreide versie van de Oudere Futhark, ontwikkeld in Engeland. Het voegt extra runen toe om klanken specifiek voor het Oudengels weer te geven, en breidt het aantal van 24 tot wel 33 karakters uit. De betekenissen en fonetische waarden zijn ook in de loop van de tijd verschoven.',
  },
  {
    question: 'Vertalen deze vertaler woorden perfect?',
    answer: 'Dit hulpmiddel biedt een letter-voor-letter transliteratie naar runensymbolen. Historisch runengebruik was fonetisch in plaats van letterlijk letter-voor-letter, dus het resultaat is een moderne interpretatie. De Fantasy Schrift optie biedt een creatief fictief alfabet voor tabletop RPG-sfeer.',
  },
  {
    question: 'Kan ik deze runen gebruiken in mijn tabletop RPG-campagnes?',
    answer: 'Ja! Spelmeesters en spelers kunnen de vertaler gebruiken om runeninscripties, magische geschriften, cryptische berichten of decoratieve namen voor personages en locaties te maken. De Fantasy Schrift optie is speciaal ontworpen voor fantasy-rollenspelomgevingen.',
  },
  {
    question: 'Slaat dit hulpmiddel tekst op die ik typ?',
    answer: 'Nee. Alles werkt lokaal in je browser. Geen tekst, vertalingen of selecties worden ooit naar een server gestuurd. Je creatieve werk blijft volledig privé.',
  },
  {
    question: 'Wat gebeurt er als ik op een rune klik?',
    answer: 'Klikken op een runenkaart toont de traditionele naam, symbolische betekenis en fonetische waarde. Dit helpt je de runen te leren en het juiste symbool te kiezen voor je RPG-behoeften.',
  },
];

const howTo = [
  {
    name: 'Voer tekst in',
    text: 'Typ een Engels woord, naam of zin in het invoerveld. De vertaler werkt het beste met enkele woorden of korte zinnen.',
  },
  {
    name: 'Selecteer een alfabet',
    text: 'Kies tussen Oudere Futhark (oud-Germaans), Angelsaksisch (middeleeuws Engels) of Fantasy Schrift (tabletop RPG-stijl).',
  },
  {
    name: 'Vertalen en ontdekken',
    text: 'Klik op Vertalen om je tekst om te zetten. Elke rune verschijnt als een kaart. Klik op een rune om de naam, betekenis en klank te leren. Gebruik de Kopiëren-knop om de runentekst naar je klembord te kopiëren.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantasie-runen-vertaler',
  title: 'Fantasy Runen Vertaler / Oudere Futhark, Thebaans, Henochiaans and Demonische Runen Converter',
  description: 'Vertaal tekst naar Oudere Futhark, Angelsaksisch Futhorc, Thebaans, Henochiaans, Demonisch, Ogham of fantasy-schriften. Perfect voor tabletop RPG-puzzels, campagnes, tovenaarsrollen en mystieke runen.',
  ui,
  seo: [
    { type: 'title', text: 'Runenalfabetten en Mystieke Schriften voor Tabletop RPG-Wereldbouw', level: 2 },
    { type: 'paragraph', html: 'Mystieke runenalfabetten, oude symbolen en geheime schriften brengen een ongeëvenaarde onderdompeling in fantasy tabletop rollenspellen zoals D&D, Pathfinder en Warhammer. Of je nu verborgen dwergenruïnes graveert met Oudere Futhark, een arcane spreukenboek ontwerpt met Henochiaanse engelenschriften, heksachtige aanwijzingen verspreidt met het Thebaanse alfabet, of verboden demonische boodschappen schrijft, onze runengenerator zet standaard Engelse tekst in realtime om in gestileerde symbolen. Prikkel de nieuwsgierigheid van spelers met fysieke rekwisieten, mysterieuze codes en oude steengravures.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Runenalfabetten' },
        { value: '150+', label: 'Symboolvariaties' },
        { value: 'Direct', label: 'Visuele Transliteratie' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Oudere Futhark & Angelsaksisch Futhorc: Oud-Germaanse en Noordse Runen', level: 2 },
    { type: 'paragraph', html: 'De Oudere Futhark dateert uit de 2e eeuw en is het oudste runensysteem, bestaande uit 24 karakters die de fundamentele krachten van de natuur vertegenwoordigen. Het Angelsaksische Futhorc breidde dit systeem uit tot 33 karakters voor Oudengelse fonetiek. Deze historische symbolen zijn perfect voor het vertegenwoordigen van dwergenclans, Noorse mythologie-geïnspireerde culturen, Viking-gravures en barbaarse claninsignes in je RPG-campagne-instellingen.' },
    { type: 'title', text: 'Thebaans & Ogham: Middeleeuwse Hekserij- en Keltische Boomalfabetten', level: 2 },
    { type: 'paragraph', html: 'Vaak aangeduid als de Runen van Honorius of het Heksenalfabet, is het Thebaanse schrift een historisch populair middeleeuws cijfer dat werd gebruikt in occulte tradities en Wicca. Ogham, een vroegmiddeleeuws alfabet, gebruikt lineaire streken langs randen, beroemd verbonden met Keltische folklore en druïdische boommagie. Gebruik deze schriften om druïdische heiligdommen, elfenbossen, heidense altaren of verborgen boodschappen van geheime heksenkringen te verfraaien.' },
    { type: 'title', text: 'Henochiaans & Demonische Schriften: Arcane Engelse en Afgrondstalen', level: 2 },
    { type: 'paragraph', html: 'Voor het eerst opgetekend door John Dee en Edward Kelley in de 16e eeuw, is Henochiaans een gedetailleerde geconstrueerde taal die wordt beschouwd als de tongval van engelen. Demonische schriften vertegenwoordigen afgrondsymbolen, duistere pacten en infernale tekens. Verhoog de narratieve inzet van je campagne door ontcijferbare demonische contracten, duistere cultusgravures en engelenrelikwieën achter te laten voor je tovenaars, paladijnen en geestelijken om te onderzoeken.' },
    { type: 'title', text: 'Aangepast Fantasy Schrift: Rolspelklare Creatieve Alfabetten', level: 2 },
    { type: 'paragraph', html: 'Voor werelden die verder gaan dan de echte geschiedenis, biedt onze op maat gemaakte Fantasy Schrift een fictieve set runen die speciaal zijn gebouwd om de klassieke high-fantasy esthetiek op te roepen. Elke rune is ontworpen om op te vallen op spelmeesterafdrukken, digitale kaarten en aangepaste spelersfiches. Combineer het met zaad-gebaseerde willekeurige generatie om geheime talen uniek te maken voor verschillende facties, naties of oude goden.' },
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
      'name': 'Fantasy Runen Vertaler',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe gebruik je de Fantasy Runen Vertaler',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
