import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Välj ett frö (seed), ställ in rutnätet och välj en arkitekturstil. Generera en sammankopplad karta för anteckningar, utskrift eller VTT.',
  seedLabel: 'Kartfrö (Seed)',
  seedHint: 'Återanvänd samma frö med samma inställningar för att återställa exakt samma karta.',
  randomSeed: 'Nytt frö',
  sizeLabel: 'Expeditionsstorlek',
  sizeCompact: 'Enstaka spelpass (One-shot)',
  sizeSession: 'Vanligt spelpass',
  sizeStronghold: 'Stort fäste',
  fineTuneGrid: 'Finjustera rutnät och densitet',
  columnsLabel: 'Kolumner',
  rowsLabel: 'Rader',
  densityLabel: 'Rumstäthet',
  densityHint: 'Högre täthet lägger till fler rum och användbar golvyta.',
  styleLabel: 'Kartarkitektur',
  dungeonStyle: 'Dungeon',
  dungeonStyleHint: 'Stenrum med enkla korridorer.',
  cavernStyle: 'Grotta',
  cavernStyleHint: 'Oregelbundna rum med rundade kanter.',
  scifiStyle: 'Sci-Fi',
  scifiStyleHint: 'Breda moduler med dubbla korridorer.',
  generate: 'Rita karta',
  mapRegionLabel: 'Genererad dungeonkarta och exportkontroller',
  connectedBadge: 'Alla rum sammankopplade',
  roomsLabel: 'Rum',
  doorsLabel: 'Dörrar',
  floorLabel: 'Golvtäckning',
  legendFloor: 'Gångbart golv',
  legendWall: 'Massiv vägg',
  legendDoor: 'Dörr eller sluss',
  editHint: 'Högerklicka på en cell för att redigera',
  editCell: 'Redigera denna cell',
  paintFloor: 'Golv',
  paintWall: 'Vägg',
  paintDoor: 'Dörr',
  mapData: 'Kartdata',
  copyLink: 'Kopiera kartlänk',
  linkCopied: 'Länk kopierad',
  exportPng: 'Ladda ner PNG',
  exportSvg: 'Ladda ner SVG',
  exportJson: 'Spara JSON',
  importJson: 'Öppna JSON',
  importError: 'Denna fil innehåller inte en giltig dungeonkonfiguration.',
  compactMap: 'Spänd utforskning',
  balancedMap: 'Balanserad expedition',
  sprawlingMap: 'Öppet fäste',
  compactHint: 'Längre korridorer lämnar mer okänt utrymme mellan rummen.',
  balancedHint: 'Rum och korridorer delar utrymmet balanserat.',
  sprawlingHint: 'Stor golvyta gynnar strid och snabb förflyttning.',
  mapReady: 'Kartförklaring',
  dimensionsUnit: 'rutnätsceller',
};

const faq = [
  {
    question: 'Skapar samma frö alltid samma dungeonkarta?',
    answer: 'Ja. Frö, rutnätsmått, täthet och stil bildar en deterministisk konfiguration. Att återanvända alla fyra inställningar återställer exakt samma rum och dörrar.',
  },
  {
    question: 'Är alla genererade rum sammankopplade?',
    answer: 'Ja. Rummen kopplas samman via en huvudrutt efter placering, vilket garanterar att hela golvytan bildar en sammanhängande karta.',
  },
  {
    question: 'Vad skiljer stilarna dungeon, grotta och Sci-Fi?',
    answer: 'Dungeon använder regelbundna stenrum. Grottor skapar rundade oregelbundna rum. Sci-Fi använder breda moduler med dubbla slussar.',
  },
  {
    question: 'Vilket format bör jag exportera för ett virtuellt bord (VTT)?',
    answer: 'PNG är det enklaste valet för de flesta VTT:er. SVG håller sig skarpt i alla storlekar och är lätt att redigera i vektorprogram.',
  },
  {
    question: 'Kan någon annan återskapa min karta?',
    answer: 'Ja. Kopiera kartlänken eller skicka JSON-filen. Mottagaren kan direkt läsa in samma konfiguration.',
  },
  {
    question: 'Lägger denna generator till monster, fällor eller skatter?',
    answer: 'Nej. Den skapar en neutral arkitektonisk ritning som spelledaren själv kan fylla med innehåll.',
  },
];

const howTo = [
  {
    name: 'Ställ in rutnätet',
    text: 'Välj antal kolumner och rader som passar dina anteckningar eller din VTT-scen.',
  },
  {
    name: 'Välj arkitektur',
    text: 'Välj dungeon, grotta eller Sci-Fi och justera rumstätheten.',
  },
  {
    name: 'Generera och granska',
    text: 'Ange ett frö, generera kartan och granska rum, dörrar och golvyta.',
  },
  {
    name: 'Exportera eller dela',
    text: 'Ladda ner PNG eller SVG för att spela, eller spara konfigurationen via länk eller JSON.',
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
  name: 'Slumpmässig Dungeonkartgenerator',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'En deterministisk generator för dungeonkartor med sammankopplade rum, dörrar och lokala exporter.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hur du genererar en sammankopplad dungeonkarta',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'slumpmassig-dungeonkart-generator',
  title: 'Slumpmässig Dungeonkartgenerator för Rollspel',
  description: 'Skapa återanvändbara kartor för dungeons, grottor och Sci-Fi med sammankopplade rum, dörrar och PNG/SVG-export.',
  ui,
  seo: [
    { type: 'title', text: 'Skapa en Spelbar Dungeonkarta med ett Återanvändbart Frö', level: 2 },
    { type: 'paragraph', html: 'En användbar slumpmässig dungeonkarta kräver mer än bara slumpmässigt visuellt brus. Varje rum måste kunna nås via korridorer, rutnätet måste passa spelytan och resultatet måste kunna återskapas när som helst på vilken enhet som helst. Denna generator behandlar fröet och inställningarna som en kompakt och deterministisk kartspecifikation. Om du behåller samma frö, kolumner, rader, täthet och arkitekturstil kommer exakt samma ritning att byggas upp igen senare.' },
    { type: 'title', text: 'Rutnätsstorlek för Utskrift och Virtuella Bord (VTT)', level: 2 },
    { type: 'paragraph', html: 'Att ställa in rutnätet är det första praktiska steget när du planerar ett spelpass. Ett litet rutnät är enkelt att skriva ut på papper för korta äventyr eller enstaka platser, medan en stor karta ger utrymme för omfattande utforskning, taktiska strider och flera fraktioner. Den exporterade bilden behåller perfekt kvadratiska celler så att den passar direkt på rutnätet i programvara för virtuella bord (VTT).' },
    {
      type: 'table',
      headers: ['Rutnätsstorlek', 'Typisk användning', 'Starttäthet', 'Planeringsnotering'],
      rows: [
        ['20 x 16 celler', 'Enstaka spelpass (One-shot)', '35 till 45', 'Lätt att skriva ut och snabb att läsa av på papper'],
        ['36 x 26 celler', 'Vanligt spelpass', '45 till 55', 'Balanserad rytm mellan rum och korridorer'],
        ['52 x 38 celler', 'Stort komplex', '50 till 65', 'Gott om utrymme för fraktioner och sidovägar'],
      ],
    },
    { type: 'tip', title: 'Anpassa Kartan efter Stridsskalan', html: 'Räkna ut hur många celler som behövs för de största striderna innan du väljer slutlig storlek. En stor dungeon med pyttesmå rum känn trång, medan en kompakt karta med ett rymligt huvudrum möjliggör minnesvärda scener.' },
    { type: 'title', text: 'Tolka Golvtäckningen som Tempomarkör', level: 2 },
    { type: 'paragraph', html: 'Golvtäckningen visar hur stor procent av den rektangulära ytan som är gångbar. Låg täthet bygger spänning, isolering och osäkerhet mellan rummen. Medelhög täthet stödjer en stadig expeditionsrytm. Hög täthet skapar ett fäste där strider och patruller snabbt kan spridas till angränsande rum.' },
    {
      type: 'list',
      items: [
        '<strong>Spänd utforskning:</strong> använd tomma ytor för att antyda hemliga gångar eller isolering.',
        '<strong>Balanserad expedition:</strong> varva undersökningsrum med korridorer och stridsrum.',
        '<strong>Öppet fäste:</strong> planera fria siktlinjer, patrullrutter och sammankopplade händelser.',
      ],
    },
    { type: 'title', text: 'Från Neutral Ritning till Äventyrsplats', level: 2 },
    { type: 'paragraph', html: 'Den genererade kartan ger avsiktligen bara grundläggande arkitektur. Ge varje rum en berättarmässig roll och placera ut ledtrådar, fällor, varelser och skatter enligt det syftet. Använd dörrar som strategiska beslutspunkter för spelarna.' },
    { type: 'tip', title: 'Spara Konfigurationen innan du Antecknar', html: 'Kopiera länken eller spara JSON-filen innan du lägger till anteckningar för att behålla en ren karta till spelarna utan att avslöja spelledarens hemligheter.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
