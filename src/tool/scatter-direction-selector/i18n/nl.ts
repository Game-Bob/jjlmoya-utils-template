import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Richtingskiezer Afwijking',
  setupTitle: 'Afwijkingsinstellingen',
  sectorsLabel: 'Kompassectoren',
  sectors8: '8 Richtingen',
  sectors12: '12 Richtingen (Klok)',
  diceLabel: 'Afwijkingsafstand Worp',
  diceD6: '1D6 Inch',
  dice2D6: '2D6 Inch',
  diceD10: '1D10 Inch',
  diceCustom: 'Aangepast Bereik',
  customMaxLabel: 'Maximale Afstand',
  hitChanceLabel: 'Directe Trefkans (%)',
  rollButton: 'Werp Afwijking',
  hitResult: 'Directe Treffer!',
  scatterResult: 'Afwijking!',
  distanceLabel: 'Afstand',
  angleLabel: 'Hoek',
  dragHint: 'Sleep het kompas om de windrichting handmatig in te stellen',
  historyTitle: 'Recente Worpen',
  clearHistory: 'Wis Geschiedenis',
  presetTitle: 'Wargaming Voorinstellingen',
  soundOn: 'Geluid Aan',
  soundOff: 'Geluid Uit',
  guideStep1: 'Sleep het kompas om het af te stemmen op je tafeloriëntatie',
  guideStep2: 'Kies sectoren, dobbelstenen en directe trefkans',
  guideStep3: 'Midden = je doelwit. Groene gloed betekent dat het daar precies is geland',
  guideStep3Scatter: 'Pijl = afwijkingsrichting. Verplaats het schot vanuit het midden dat aantal inch langs de pijl',
  scatterModeLabel: 'Afwijkingsrichting',
  scatterModeRandom: 'Willekeurig',
  scatterModeWind: 'Winddrift',
  scatterModeWindHint: 'Pijl volgt altijd het kompas - alleen de afstand is willekeurig',
};

const faq = [
  {
    question: 'Hoe werkt de Richtingskiezer Afwijking?',
    answer: 'Het berekent een willekeurige hoek (0-359 graden) en een afstand op basis van de geselecteerde dobbelsteenconfiguratie. Het simuleert ook een afwijkingsdobbelsteen en controleert op directe treffers.',
  },
  {
    question: 'Kan ik het sectorformaat wijzigen?',
    answer: 'Ja, je kunt schakelen tussen 8-richtings cardinale sectoren en 12-richtings klokzijdige sectoren.',
  },
  {
    question: 'Wat is de directe trefkans?',
    answer: 'Het vertegenwoordigt de kans dat het projectiel precies daar landt waar op werd gericht, zonder enige afwijking. Dit simuleert een "Treffer"-resultaat op een standaard afwijkingsdobbelsteen.',
  },
  {
    question: 'Is dit compatibel met Warhammer of Bolt Action?',
    answer: 'Ja, het ondersteunt standaard 8-richtings sjablonen en 12-richtings klokuitlijningen die in de meeste tactische wargames en miniatuurregelsets worden gebruikt.',
  },
  {
    question: 'Wat toont de projectielbaan animatie?',
    answer: 'Een gloeiend projectiel reist van het midden van het kompas naar de afwijkingslandingsplaats en laat een gestreept spoor achter. Bij een directe treffer blijft het projectiel gecentreerd en pulseren groene ringen naar buiten.',
  },
  {
    question: 'Hoe wordt de afwijkingsafstand visueel weergegeven?',
    answer: 'De afstand in inch verschijnt als een zwevend label op de inslagplaats, gepositioneerd langs de afwijkingsrichting. De rode kompaspijl vergrendelt ook op de uiteindelijke hoek voor snelle sjabloonuitlijning.',
  },
  { question: 'Hoe wordt de spreidingsrichting bepaald?', answer: 'De tool combineert het gekozen sectorsysteem met de worp en de ingestelde afwijkingsafstand.' },
  { question: 'Kan ik de windmodus gebruiken?', answer: 'Ja, de windmodus volgt de kompasrichting terwijl de afstand willekeurig blijft.' },
];

const howTo = [
  {
    name: 'Configureer Regels',
    text: 'Selecteer kompassectoren, kies een afstandsdobbelsteen en stel de directe trefkans in.',
  },
  {
    name: 'Werp of Sleep',
    text: 'Klik op Werp Afwijking om de afwijking te simuleren, of sleep aan het kompaswiel om de richting handmatig aan te passen.',
  },
  {
    name: 'Lees Uitkomst',
    text: 'Controleer het centrale display en de vectorpijl om de exacte afstand, hoek en richting van de afwijking te vinden.',
  },
  {
    name: 'Observeer de Baan',
    text: 'Na het werpen zie je het geanimeerde projectiel over het kompas reizen. Het gestreepte spoor toont het afwijkingspad en de inslagplaats geeft de afstand in inch weer.',
  },
  {
    name: 'Interpreteer het Resultaat',
    text: 'Een groene puls met "DIRECT HIT" betekent nul afwijking. Een rode explosie met een afstandslabel betekent dat het schot afweek  -  plaats je sjabloon dat aantal inch van het doelwit in de richting van de pijl.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'richtingskiezer-afwijking',
  title: 'Richtingskiezer Afwijking: Tactisch Kompas voor Tafelblad Wargames',
  description: 'Bepaal willekeurige afwijkingen, winddrift en spuitrichtingen voor miniatuur wargames met een tactiel 3D-kompas.',
  ui,  seo: [
    { type: 'title', text: 'Interactief Afwijkingskompas met Real Time Projectielanimatie', level: 2 },
    { type: 'paragraph', html: 'De Richtingskiezer Afwijking gaat verder dan statische nummergeneratie door een geanimeerde projectielbaan direct op de kompasoverlay weer te geven. Wanneer je op Werp Afwijking klikt, reist een gloeiend projectiel vanuit het midden langs de afwijkingshoek, laat een gestreept spoor achter en barst in deeltjes op de inslagplaats. Dit vereenvoudigt de visuele bepaling van gemiste schoten tijdens je tabletop spellen.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sectorsystemen', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Dobbelsteen Voorinstellingen', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Trefkans Bereik', icon: 'mdi:target' },
      { value: '10', label: 'Recente Worp Geschiedenis', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Hoe de Baananimatie de Besluitvorming bij Wargaming Verbeterd', level: 3 },
    { type: 'paragraph', html: 'Traditionele afwijkingshulpmiddelen tonen een numerieke hoek en afstand, waardoor spelers de verschuiving op de tafel mentaal moeten visualiseren. De geanimeerde baan overbrugt deze kloof door de exacte vluchtroute van het mikpunt naar de afwijkingslandingszone te tekenen. Dit versnelt het speltempo en voorkomt discussies bij het plaatsen van explosiesjablonen.' },
    { type: 'diagnostic', variant: 'success', title: 'Directe Treffer', html: 'Wanneer de worp de trefkans overtreft, barst het kompascentrum uit met pulserende groene ringen en een "DIRECT HIT" tekstanimatie. Het projectiel keert terug naar het centrum, wat een perfecte inslag zonder afwijking bevestigt.' },
    { type: 'diagnostic', variant: 'error', title: 'Afwijking', html: 'Bij een afwijkingsresultaat volgt het projectiel een gestreepte baan naar zijn landingsplaats. Een deeltjesuitbarsting, een gloeiende markering en de exacte afstand in inch (bijv. <strong>5"</strong>) verschijnen op de landingsplaats voor directe meting.' },
    { type: 'tip', title: 'Pro Tip: Winddrift Modus Gebruiken', html: 'Schakel Winddrift in om de afwijkingsrichting te vergrendelen op uw handmatig gedraaide kompashoek. Simuleert een heersende wind of een vaste verplaatsingsvector  -  ideaal voor ongeleide raketten, gaswolken, gebiedsbezweringen of mislukte teleportaties.' },
    { type: 'title', text: 'Spreiding in tabletop wargames oplossen', level: 2 },
    { type: 'paragraph', html: 'Veel wargames en tactische RPGs gebruiken afwijkingen om artillerie, mortierfeur, gasdrift of mislukte teleportaties realistisch en onvoorspelbaar te maken. Met flexibele dobbelopties (1D6, 2D6, 1D10) past dit digitale kompas bij elk regelboek.' },
    { type: 'table', headers: ['Spelscenario', 'Dobbelsteen Instelling', 'Afwijkingsmodus', 'Tactisch Effect'], rows: [['Artillerie & Mortieren', '2D6 inch', '8 Sectoren + Trefkans %', 'Willekeurige spreiding rond het doel'], ['Gaswolken & Wind', '1D6 inch', 'Winddrift (Vaste Hoek)', 'Verschuiving uitsluitend in de windrichting'], ['Teleportatie Fouten', '1D10 inch', '12 Kloksectoren', 'Rondom willekeurige afwijking']] },
    { type: 'title', text: 'Wind en afwijking beheren', level: 2 },
    { type: 'paragraph', html: 'Met een instelbare trefferkans beoordeel je de betrouwbaarheid van getrainde eenheden en verkort je metingen aan de speeltafel tijdens de schietfase aanzienlijk.' },
    { type: 'comparative', items: [{ title: 'Spreiding in tabletop wargames oplossen', description: 'Veel wargames gebruiken afwijkingen voor artillerie, wind of mislukte teleportatie. Dit digitale kompas voorkomt dat fysieke dobbelstenen terreinstukken verschuiven.', icon: 'mdi:compass-outline', highlight: true, points: ['Wind en afwijking beheren', 'Snelle meting zonder wrijving', 'Nauwkeurige vector visualisatie'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Wind en afwijking beheren', definition: 'Met een trefferkans beoordeel je de betrouwbaarheid van een eenheid en verkort je metingen tijdens het spel.' }] },
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
      'name': 'Richtingskiezer Afwijking',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe gebruik je de Richtingskiezer Afwijking',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
