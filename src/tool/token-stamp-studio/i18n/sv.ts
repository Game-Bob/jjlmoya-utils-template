import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Välj en ram',
  frameHint: 'Välj den silhuett som visar gruppen vem karaktären är innan någon hinner läsa namnet.',
  randomFrame: 'Slumpmässig ram',
  surfaceLegend: 'Färglägg din token',
  backgroundLabel: 'Bakgrund',
  borderLabel: 'Ram',
  textLabel: 'Text',
  overlayLabel: 'Toning',
  randomColors: 'Slumpmässiga färger',
  borderWidthLabel: 'Ramtjocklek',
  opacityLabel: 'Ramopacitet',
  overlayOpacityLabel: 'Porträttoning',
  stageLabel: 'Live token-smedja',
  chooseImage: 'Välj porträtt',
  positionHint: 'Dra porträttet eller etiketter direkt på din token.',
  markerName: 'Markörnamn',
  markerNamePlaceholder: 'Namnge denna markör',
  textLegend: 'Lägg till läsbar information',
  textHint: 'Använd korta etiketter som namn, nivå eller roll. Dra varje etikett på din token.',
  textPlaceholder: 'Karaktärsnamn eller roll',
  addText: 'Lägg till etikett',
  removeText: 'Ta bort etikett',
  textSizeLabel: 'Textstorlek',
  alignmentLabel: 'Textjustering',
  alignLeft: 'Vänsterjustera',
  alignCenter: 'Centrera',
  alignRight: 'Högerjustera',
  imageLegend: 'Justera porträttet',
  imageZoomLabel: 'Porträttzoom',
  scaleLabel: 'Exportskala',
  savedMarkers: 'Sparade markörer',
  noSavedMarkers: 'Sparade markörer visas här så att du kan öppna och redigera dem igen.',
  reuseMarker: 'Välj en markör för att öppna den igen.',
  deleteMarker: 'Ta bort markör',
  newMarker: 'Ny markör',
  download: 'Ladda ner PNG',
  copy: 'Kopiera PNG',
  downloadBatch: 'Ladda ner batch',
  batchLabel: 'Avancerad batchexport',
  batchHint: 'Valfritt: exportera flera porträtt med nuvarande ram och färger.',
  chooseBatch: 'Välj porträtt',
  batchReady: '{count} porträtt redo att smidas.',
  noImage: 'Inget porträtt laddat',
  noText: 'Inga etiketter ännu. Lägg till informationen som din spelgrupp behöver.',
  tokenDetails: 'Token-kontroller',
  exportHint: 'PNG-filen har transparent bakgrund utanför den valda silhuetten, redo för VTT eller utskrift.',
};

const faq = [
  {
    question: 'Vad gör ett porträtt bra för en karaktärs-token?',
    answer: 'Välj en bild med tydligt ansikte och bra kontrast mot ramen. En beskärning av huvud och axlar förblir lättläst på det virtuella spelbordet.',
  },
  {
    question: 'Hur placerar jag porträttet bäst i ramen?',
    answer: 'Ladda upp bilden och dra den direkt på token för att centrera ansiktet. Använd porträttzoom för att förstora utan att ändra ramen.',
  },
  {
    question: 'Kan jag lägga till namnet och nivån på karaktären?',
    answer: 'Ja. Lägg till korta etiketter, anpassa storlek och justering, och dra dem till en tydlig plats på din token.',
  },
  {
    question: 'Behåller PNG-filen sin transparens utanför ramen?',
    answer: 'Ja. Den exporterade bilden har genomskinlig bakgrund utanför silhuetten, vilket gör den enkelt att placera över kartor.',
  },
  {
    question: 'Kan jag skapa tokens för hela spelgruppen samtidigt?',
    answer: 'Ja. Använd batchexport för att ladda upp flera porträtt och ladda ner en transparent PNG för varje bild.',
  },
  {
    question: 'Var sparas mina markörer?',
    answer: 'Markörerna sparas lokalt i din webbläsare. Inga bilder laddas upp till externa servrar.',
  },
];

const howTo = [
  { name: 'Välj karaktärens silhuett', text: 'Välj en ram som passar rollen: rund för hjältar, sexkantig för taktiska strider eller stjärna för bossar.' },
  { name: 'Ladda upp och centrera porträttet', text: 'Välj en bild, dra den till din token och justera zoomen så att ansiktet hamnar i mitten.' },
  { name: 'Lägg till viktig information', text: 'Skriv ett kort namn eller status utan att täcka över viktiga detaljer i bilden.' },
  { name: 'Exportera som transparent PNG', text: 'Ladda ner din transparenta PNG redo för digitala spelbord eller utskrift.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'Skapa tydliga karaktärs-tokens för rollspel med anpassade ramar, etiketter, transparens och batchexport.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hur man skapar en karaktärs-token för rollspel',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'karaktars-token-skapare-rpg-bordssport',
  title: 'Skapa Karaktärs Tokens för Rollspel Online',
  description: 'Skapa tydliga karaktärs-tokens för rollspel med anpassade ramar, etiketter, transparens och batchexport.',
  ui,
  seo: [
    { type: 'title', text: 'Skapa tydliga karaktärs-tokens för alla dina digitala spelkartor', level: 2 },
    { type: 'paragraph', html: 'En token är ett extremt viktigt visuellt hjälpmedel vid det digitala spelbordet. Silhuetten visar spelgruppen direkt om det rör sig om en hjälte, ett farligt monster, en förtrollningseffekt eller en viktig allierad innan någon ens hinner zooma in på kartan. Välj rätt ram och se till att både bild och text förblir perfekt läsbara på den storlek din virtuella spelplattform använder.' },
    { type: 'title', text: 'Välj rätt ram för varje unik karaktärstyp i kampanjen', level: 2 },
    { type: 'list', items: ['<strong>Rund eller ring:</strong> klassisk och pålitlig standard för spelarkaraktärer och återkommande allierade.', '<strong>Sexkant eller åttkant:</strong> mycket enkelt att skilja ut i taktiska strider med många olika enheter.', '<strong>Stjärna:</strong> utmärkt för bossar, mästare och viktiga mål som kräver omedelbar uppmärksamhet.', '<strong>Moln:</strong> en mjuk och stilren form för andar, familjärer och magiska varelser.'] },
    { type: 'tip', title: 'Designa alltid för den minsta spelstorleken du använder', html: 'Zooma ut på kartan tills din token blir bara ett tiotal pixlar bred. Om ansiktet, ramen och texten fortfarande syns tydligt kommer din token fungera utmärkt under intensiva strider.' },
    { type: 'title', text: 'Håll alla etiketter korta och praktiska under spelsessionen', level: 2 },
    { type: 'paragraph', html: 'En token ska aldrig ersätta ett fullständigt karaktärsblad. Lägg bara till den allra viktigaste informationen som gruppen ständigt behöver: ett kort namn, en nivå, en roll eller en status. För långa meningar skapar bara visuellt brus och täcker över bilden.' },
    { type: 'title', text: 'Skapa tokens för hela spelgruppen samtidigt utan att förlora deras stil', level: 2 },
    { type: 'paragraph', html: 'Batchexport gör det väldigt enkelt att ge hela gruppen samma visuella ramstil efter session noll medan varje enskilt porträtt behåller sin unika karaktär. En enhetlig inramning skapar sammanhållning i gruppen samtidigt som varje ansikte känns igen direkt.' },
    { type: 'tip', title: 'Automatisk lokal sparande direkt på din enhet', html: 'Din aktiva markör sparas automatiskt i webbläsaren så att du enkelt kan öppna och redigera den igen när karaktären går upp i nivå.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
