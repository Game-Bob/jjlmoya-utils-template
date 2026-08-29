import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Kies een frame',
  frameHint: 'Kies het silhouet dat de tafel laat zien wie dit karakter is voordat iemand de naam leest.',
  randomFrame: 'Willekeurig frame',
  surfaceLegend: 'Geef kleur aan de token',
  backgroundLabel: 'Achtergrond',
  borderLabel: 'Rand',
  textLabel: 'Tekst',
  overlayLabel: 'Tint',
  randomColors: 'Willekeurige kleuren',
  borderWidthLabel: 'Randdikte',
  opacityLabel: 'Randdekking',
  overlayOpacityLabel: 'Portrettint',
  stageLabel: 'Live token smederij',
  chooseImage: 'Kies portret',
  positionHint: 'Sleep het portret of de labels rechtstreeks op de token.',
  markerName: 'Markernaam',
  markerNamePlaceholder: 'Geef deze marker een naam',
  textLegend: 'Voeg leesbare details toe',
  textHint: 'Gebruik korte labels zoals naam, niveau, rol of status. Sleep elk label naar de token.',
  textPlaceholder: 'Karakternaam of rol',
  addText: 'Label toevoegen',
  removeText: 'Label verwijderen',
  textSizeLabel: 'Tekstgrootte',
  alignmentLabel: 'Tekstuitlijning',
  alignLeft: 'Links uitlijnen',
  alignCenter: 'Centreren',
  alignRight: 'Rechts uitlijnen',
  imageLegend: 'Pas het portret aan',
  imageZoomLabel: 'Portretzoom',
  scaleLabel: 'Exportschaal',
  savedMarkers: 'Opgeslagen markers',
  noSavedMarkers: 'Opgeslagen markers verschijnen hier om opnieuw te openen en te bewerken.',
  reuseMarker: 'Selecteer een marker om deze opnieuw te openen.',
  deleteMarker: 'Marker verwijderen',
  newMarker: 'Nieuwe marker',
  download: 'PNG downloaden',
  copy: 'PNG kopiëren',
  downloadBatch: 'Batch downloaden',
  batchLabel: 'Geavanceerde batchexport',
  batchHint: 'Optioneel: exporteer meerdere portretten met het huidige frame en de kleurinstellingen.',
  chooseBatch: 'Kies portretten',
  batchReady: '{count} portretten klaar om te smeden.',
  noImage: 'Geen portret geladen',
  noText: 'Nog geen labels. Voeg details toe die je groep nodig heeft.',
  tokenDetails: 'Karaktertoken bediening',
  exportHint: 'De PNG is transparant buiten het gekozen silhouet, klaar voor VTT of afdrukken.',
};

const faq = [
  {
    question: 'Wat maakt een goed portret voor een karaktertoken?',
    answer: 'Kies een afbeelding met een duidelijk gezicht en voldoende contrast met het frame. Een uitsnede van hoofd en schouders blijft goed leesbaar op het virtuele speelbord.',
  },
  {
    question: 'Hoe positioneer ik het portret het beste in het frame?',
    answer: 'Upload de afbeelding en sleep deze op de token om het gezicht te centreren. Gebruik de portretzoom om het gezicht te vergroten zonder het frame aan te passen.',
  },
  {
    question: 'Kan ik een karakternaam en niveau toevoegen?',
    answer: 'Ja. Voeg korte labels toe, pas de tekstgrootte en uitlijning aan, en sleep ze naar een goed leesbare plek op de token.',
  },
  {
    question: 'Blijft het PNG-bestand transparant buiten de token?',
    answer: 'Ja. Het geëxporteerde bestand behoudt een transparante achtergrond buiten het gekozen silhouet, ideaal voor gebruik op digitale kaarten.',
  },
  {
    question: 'Kan ik in één keer tokens voor een hele groep maken?',
    answer: 'Ja. Gebruik de batchexport om meerdere portretten in te laden en voor elk portret een transparante PNG te genereren.',
  },
  {
    question: 'Waar worden mijn opgeslagen markers opgeslagen?',
    answer: 'Markers worden lokaal opgeslagen in je browser. Er worden geen afbeeldingen naar een externe server geüpload.',
  },
];

const howTo = [
  { name: 'Kies het karaktersilhouet', text: 'Selecteer een frame dat bij de rol past: rond voor een held, zeshoekig voor tactische gevechten of een ster voor een baas.' },
  { name: 'Upload en centreer het portret', text: 'Kies een afbeelding, sleep deze naar de token en pas de zoom aan zodat het gezicht centraal staat.' },
  { name: 'Voeg belangrijke informatie toe', text: 'Plaats een korte naam of status op de token zonder de illustratie te overlappen.' },
  { name: 'Exporteer als transparante PNG', text: 'Download de transparante PNG voor gebruik op je digitale speelbord of printvel.' },
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
  description: 'Maak duidelijke karaktertokens voor tafel-RPG\'s met aangepaste frames, labels, transparantie en batchexport.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe maak je een karaktertoken voor tafel-RPG\'s',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'karakter-token-maker-rpg-tafel',
  title: 'Karakter Token Maker voor Tafel RPGs',
  description: 'Maak duidelijke karaktertokens voor tafel-RPG\'s met aangepaste frames, labels, transparantie en batchexport.',
  ui,
  seo: [
    { type: 'title', text: 'Ontwerp duidelijke karaktertokens voor elke digitale kaart van je RPG avontuur', level: 2 },
    { type: 'paragraph', html: 'Een token is een essentieel visueel communicatiemiddel op de virtuele speeltafel. Het silhouet laat de groep meteen zien of het om een held, een gevaarlijk monster, een betoveringseffect of een belangrijke bondgenoot gaat voordat iemand inzoomt op de kaart. Kies het juiste frame en zorg dat het gezicht en de tekst goed zichtbaar blijven op de schaal van jouw speelbord.' },
    { type: 'title', text: 'Kies het juiste frame voor elk type karakter in je campagne', level: 2 },
    { type: 'list', items: ['<strong>Rond of ring:</strong> klassiek en betrouwbaar voor spelerskarakters en terugkerende bondgenoten.', '<strong>Zeshoek of achthoek:</strong> ideaal voor tactische gevechten met veel verschillende eenheden.', '<strong>Ster:</strong> perfect voor bazen, kampioenen of karakters die direct de aandacht vragen.', '<strong>Wolk:</strong> een zachte vorm voor geesten, magische wezens en fabeldieren.'] },
    { type: 'tip', title: 'Ontwerp voor het kleinste formaat waarop je daadwerkelijk speelt', html: 'Zoom uit op de digitale kaart totdat de token slechts enkele tientallen pixels groot is. Als gezicht, rand en tekst nog steeds goed te onderscheiden zijn, werkt je token perfect tijdens drukke gevechten.' },
    { type: 'title', text: 'Houd labels kort en functioneel tijdens het spelen', level: 2 },
    { type: 'paragraph', html: 'Een token is geen vervanging voor een volledig karakterblad. Voeg alleen de belangrijkste informatie toe die de tafel voortdurend nodig heeft: een korte naam, een niveau, een rol of een status zoals verdoofd. Te lange zinnen zorgen voor visuele ruis en leiden af van het portret.' },
    { type: 'title', text: 'Maak in één keer tokens voor de hele avonturiersgroep zonder hun identiteit te verliezen', level: 2 },
    { type: 'paragraph', html: 'Met de batchexport geef je de hele avonturiersgroep dezelfde visuele stijl terwijl elk portret zijn eigen unieke uitstraling behoudt. Een consistente framing zorgt voor eenheid in de groep terwijl de gezichten direct herkenbaar blijven.' },
    { type: 'tip', title: 'Automatische lokale opslag op jouw apparaat', html: 'Je actieve marker wordt automatisch opgeslagen in de lokale opslag van je browser zodat je deze later eenvoudig kunt openen en aanpassen wanneer het karakter in niveau stijgt.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
