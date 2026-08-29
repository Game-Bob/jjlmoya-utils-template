import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Kies een seed, stel het raster in en kies een stijl. Genereer een verbonden kaart voor je notities, afdruk of virtual tabletop.',
  seedLabel: 'Kaart seed',
  seedHint: 'Hergebruik dezelfde seed met dezelfde instellingen om exact dezelfde kaart te maken.',
  randomSeed: 'Nieuwe seed',
  sizeLabel: 'Expeditiegrootte',
  sizeCompact: 'Eenmalig avontuur (One-shot)',
  sizeSession: 'Standaard sessie',
  sizeStronghold: 'Grote vestiging',
  fineTuneGrid: 'Fijnafstemming raster en dichtheid',
  columnsLabel: 'Kolommen',
  rowsLabel: 'Rijen',
  densityLabel: 'Kamerdichtheid',
  densityHint: 'Hogere dichtheid voegt meer kamers en bruikbare vloer toe.',
  styleLabel: 'Architectuurstijl',
  dungeonStyle: 'Dungeon',
  dungeonStyleHint: 'Stenen kamers met enkele gangen.',
  cavernStyle: 'Grot',
  cavernStyleHint: 'Natuurlijke kamers met afgeronde randen.',
  scifiStyle: 'Sci-Fi',
  scifiStyleHint: 'Brede modules met dubbele gangen.',
  generate: 'Tekengeneratie',
  mapRegionLabel: 'Gegenereerde dungeonkaart en exportknoppen',
  connectedBadge: 'Alle kamers verbonden',
  roomsLabel: 'Kamers',
  doorsLabel: 'Deuren',
  floorLabel: 'Vloerdekking',
  legendFloor: 'Begaanbare vloer',
  legendWall: 'Massieve muur',
  legendDoor: 'Deur of luchtsluis',
  editHint: 'Rechtermuisklik op een cel om te bewerken',
  editCell: 'Bewerk deze cel',
  paintFloor: 'Vloer',
  paintWall: 'Muur',
  paintDoor: 'Deur',
  mapData: 'Kaartgegevens',
  copyLink: 'Kopieer kaartlink',
  linkCopied: 'Link gekopieerd',
  exportPng: 'Download PNG',
  exportSvg: 'Download SVG',
  exportJson: 'Opslaan als JSON',
  importJson: 'Open JSON',
  importError: 'Dit bestand bevat geen geldige dungeoninstellingen.',
  compactMap: 'Spannende verkenning',
  balancedMap: 'Gebalanceerde expeditie',
  sprawlingMap: 'Open vestiging',
  compactHint: 'Langere gangen laten meer onbekende ruimte tussen kamers.',
  balancedHint: 'Kamers en gangen verdelen de ruimte gebalanceerd.',
  sprawlingHint: 'Veel vloeroppervlak bevordert gevechten en snelle beweging.',
  mapReady: 'Kaartlegenda',
  dimensionsUnit: 'rastercellen',
};

const faq = [
  {
    question: 'Genereert dezelfde seed altijd dezelfde dungeonkaart?',
    answer: 'Ja. De seed, rasterafmetingen, dichtheid en stijl vormen een deterministische configuratie. Het hergebruiken van alle instellingen levert exact dezelfde kaart op.',
  },
  {
    question: 'Zijn alle gegenereerde kamers bereikbaar?',
    answer: 'Ja. Kamers worden na plaatsing via een hoofdroute verbonden, zodat elk begaanbaar gebied tot één verbonden kaart behoort.',
  },
  {
    question: 'Wat is het verschil tussen dungeon-, grot- en Sci-Fi-stijlen?',
    answer: 'Dungeon gebruikt regelmatige stenen kamers. Grotten vormen onregelmatige ronde kamers. Sci-Fi gebruikt brede modules met dubbele gangen.',
  },
  {
    question: 'Welk formaat moet ik exporteren voor een virtual tabletop (VTT)?',
    answer: 'PNG is de makkelijkste optie voor de meeste VTTs. SVG blijft scherp op elke schaal en is eenvoudig te bewerken in vectorsoftware.',
  },
  {
    question: 'Kan iemand anders mijn willekeurige dungeonkaart maken?',
    answer: 'Ja. Kopieer de kaartlink of stuur het JSON-bestand. De ontvanger kan direct dezelfde kaart laden.',
  },
  {
    question: 'Voegt deze generator monsters, valstrikken of schatten toe?',
    answer: 'Nee. Het maakt een neutrale plattegrond die je zelf kunt inrichten voor elk spelsysteem.',
  },
];

const howTo = [
  {
    name: 'Stel rasterafmetingen in',
    text: 'Kies het aantal kolommen en rijen passend voor je notities of VTT-scène.',
  },
  {
    name: 'Kies een stijl',
    text: 'Kies dungeon, grot of Sci-Fi en pas de dichtheid aan.',
  },
  {
    name: 'Genereer en bekijk',
    text: 'Voer een seed in, genereer de kaart en bekijk het overzicht.',
  },
  {
    name: 'Exporteer of deel',
    text: 'Download PNG of SVG om te spelen, of bewaar de instellingen via link of JSON.',
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
  name: 'Willekeurige Dungeonkaart Generator',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Een deterministische generator voor dungeonkaarten met verbonden kamers, deuren en lokale exports.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe genereer je een verbonden dungeonkaart',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'willekeurige-dungeonkaart-generator',
  title: 'Willekeurige Dungeonkaart Generator voor RPGs',
  description: 'Maak herbruikbare kaarten voor dungeons, grotten en Sci-Fi met verbonden kamers, deuren en PNG/SVG export.',
  ui,
  seo: [
    { type: 'title', text: 'Maak een Speelbare Dungeonkaart met een Herbruikbare Seed', level: 2 },
    { type: 'paragraph', html: 'Een nuttige willekeurige dungeonkaart heeft meer nodig dan alleen willekeurige visuele ruis. Elke kamer moet bereikbaar zijn via verbonden gangen, het raster moet passen op het speeloppervlak en het resultaat moet op elk moment hersteld kunnen worden op elk apparaat. Deze generator behandelt de seed en instellingen als een compacte en deterministische kaartspecificatie. Als je dezelfde seed, kolommen, rijen, dichtheid en architectuurstijl behoudt, wordt exact dezelfde plattegrond later opnieuw opgebouwd.' },
    { type: 'title', text: 'Kies Rasterafmetingen voor Afdruk en Virtual Tabletops', level: 2 },
    { type: 'paragraph', html: 'Het instellen van het raster is de eerste praktische stap bij het plannen van een sessie. Een klein raster is eenvoudig af te drukken op papier voor korte avonturen of eenmalige locaties, terwijl een grote kaart uitgebreide ruimte biedt voor complexe verkenningen, tactische ontmoetingen en meerdere facties. De geëxporteerde afbeelding behoudt perfect vierkante cellen zodat deze naadloos uitlijnt met de rasterinstellingen in virtuele tabletop-software (VTT).' },
    {
      type: 'table',
      headers: ['Rastergrootte', 'Typisch gebruik', 'Begindichtheid', 'Planningsnotitie'],
      rows: [
        ['20 bij 16 cellen', 'Kort avontuur (One-shot)', '35 tot 45', 'Makkelijk af te drukken en snel visueel leesbaar op papier'],
        ['36 bij 26 cellen', 'Standaard sessie', '45 tot 55', 'Gebalanceerd ritme tussen kamers en gangen'],
        ['52 bij 38 cellen', 'Groot complex', '50 tot 65', 'Veel ruimte voor meerdere facties en optionele routes'],
      ],
    },
    { type: 'tip', title: 'Stem de Kaart af op de Gevechtsschaal', html: 'Bereken de benodigde ruimte voor grote gevechten voordat je de totale grootte kiest. Een grote dungeon met piepkleine kamers voelt benauwd aan, terwijl een compacte kaart met één royale centrale kamer gedenkwaardige scènes mogelijk maakt.' },
    { type: 'title', text: 'Lees Vloerdekking als Tempo-Indicator', level: 2 },
    { type: 'paragraph', html: 'Vloerdekking geeft het percentage van het rechthoekige canvas aan dat begaanbaar is. Lage dekking benadrukt spanning, isolatie en onbekende ruimtes tussen de kamers. Middelgrote dekking ondersteunt een gestaag expeditieritme. Hoge dekking creëert een vesting of faciliteit waar gevechten en patrouilles zich snel kunnen uitbreiden naar aangrenzende ruimtes.' },
    {
      type: 'list',
      items: [
        '<strong>Spannende verkenning:</strong> gebruik lege ruimte om isolatie of geheime gangen te suggereren.',
        '<strong>Gebalanceerde expeditie:</strong> afwisseling van onderzoekskamers, gangen en gevechten.',
        '<strong>Open vestiging:</strong> bereid zichtlijnen, patrouilleroutes en onderling verbonden ontmoetingen voor.',
      ],
    },
    { type: 'title', text: 'Van Neutrale Plattegrond naar Avontuurlocatie', level: 2 },
    { type: 'paragraph', html: 'De gegenereerde kaart biedt bewust alleen de basisarchitectuur. Wijs een verhalende rol toe aan elke belangrijke kamer en plaats aanwijzingen, valstrikken, wezens en schatten volgens dat doel. Gebruik deuren als strategische beslismomenten voor je spelers.' },
    { type: 'tip', title: 'Bewaar Instellingen voor het Toevoegen van Notities', html: 'Kopieer de link of bewaar het JSON-bestand voordat je ontmoetingsnotities toevoegt om een schone kaart aan spelers te geven zonder spelleidergeheimen te onthullen.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
