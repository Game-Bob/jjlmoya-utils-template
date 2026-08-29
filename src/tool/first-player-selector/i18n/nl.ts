import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Eerste Speler Kiezer',
  instructions: 'Plaats uw vingers op het scherm of klik om spelers toe te voegen',
  tapToSelect: 'Tik om te Kiezen',
  winner: 'Winnaar gekozen!',
  reset: 'Opnieuw',
  start: 'Start Keuze',
  setupTitle: 'Instellingen van de Kiezer',
  clearPlayers: 'Wis Alle Spelers',
  fingerMode: 'Vinger Modus',
  wheelMode: 'Roulette Modus',
  presetsTitle: 'Opties',
  soundOn: 'Geluid Aan',
  soundOff: 'Geluid Uit',
  playerCountLabel: 'Spelers / Vingers',
};

const faq = [
  {
    question: 'Hoe werkt de Vinger Modus?',
    answer: 'In de Vinger Modus plaatst elke speler een vinger op het mobiele scherm. Het gereedschap detecteert alle aanraakpunten, toont gloeiende gekleurde ringen eromheen en start automatisch een korte aftelling. Zodra de aftelling eindigt, wordt één speler gemarkeerd als winnaar terwijl de anderen vervagen, vergezeld door een explosie van deeltjes.',
  },
  {
    question: 'Kan ik dit gereedschap op een desktopcomputer gebruiken?',
    answer: 'Ja! Als u een apparaat zonder aanraakscherm gebruikt, schakelt het gereedschap automatisch naar de Roulette Modus. U kunt op het canvas klikken om gekleurde spelerspinnen te plaatsen en vervolgens op de Start Keuze knop klikken om het selectiewiel te laten draaien.',
  },
  {
    question: 'Hoeveel spelers kunnen meedoen?',
    answer: 'Het gereedschap ondersteunt tot 10 gelijktijdige spelers. In de Vinger Modus kunnen tot 10 vingers tegelijk worden gedetecteerd. In de Roulette Modus kunt u tot 10 gekleurde spelerspinnen op het canvas plaatsen door te klikken.',
  },
  {
    question: 'Is de selectie echt willekeurig?',
    answer: 'Ja. Het selectie-algoritme gebruikt JavaScript\'s cryptografische Math.random() om onpartijdige resultaten te garanderen. In de Vinger Modus wordt de winnaar uniform willekeurig gekozen uit alle gedetecteerde aanraakpunten. In de Roulette Modus vertraagt het wiel realistisch met wrijvingsfysica, en de uiteindelijke hoek bepaalt wiskundig de winnaar.',
  },
  {
    question: 'Hoe verwijder ik een spelerpin in de Roulette Modus?',
    answer: 'Klik eenvoudig op een bestaande pin om deze te verwijderen. Het gereedschap detecteert klikken binnen 30 pixels van een geplaatste pin en verwijdert deze, zodat u de spelersopstelling kunt aanpassen voordat u de spin start.',
  },
  {
    question: 'Verzamelt of verzendt dit gereedschap gegevens?',
    answer: 'Helemaal niet. Alles wordt lokaal in uw browser uitgevoerd. Geen vingergegevens, aanraakposities of selectieresultaten worden ooit naar een server verzonden. Uw spelavond blijft volledig privé.',
  },
  {
    question: 'Werkt het op projectoren of externe schermen?',
    answer: 'Ja. De Roulette Modus werkt uitstekend op grote schermen en projectoren voor bordspelsessies. De hoogcontrast neon visuals en grote afteltimer zijn ontworpen om vanaf de andere kant van de kamer zichtbaar te zijn.',
  },
  {
    question: 'Waarom wordt de aftelling gereset wanneer iemand zijn vinger optilt?',
    answer: 'Dit is opzettelijk. In de Vinger Modus gaat de aftelling alleen door terwijl alle spelers hun vingers stil op het scherm houden. Als iemand de vinger optilt of verschuift, wordt de timer gereset om ervoor te zorgen dat iedereen betrokken is voordat de selectie wordt uitgevoerd. Dit voorkomt onbedoelde activeringen.',
  },
  {
    question: 'Kan ik het geluid wijzigen of uitschakelen?',
    answer: 'Ja. Klik op het luidsprekerpictogram rechtsboven om het geluid aan of uit te zetten. Het gereedschap speelt een tikkend geluid tijdens de aftelling en een fanfare wanneer een winnaar is gekozen.',
  },
  {
    question: 'Wat gebeurt er als er maar één speler is?',
    answer: 'In beide modi zijn ten minste twee spelers vereist om een selectie te maken. In de Vinger Modus start de aftelling pas wanneer ten minste twee vingers worden gedetecteerd. In de Roulette Modus blijft de Start Keuze knop uitgeschakeld totdat u ten minste twee pinnen plaatst.',
  },
];

const howTo = [
  {
    name: 'Plaats Vingers of Spelers',
    text: 'In de Vinger Modus laten alle spelers één vinger op het scherm plaatsen. In de Roulette Modus klikt u ergens op het canvas om spelerspinnen te plaatsen.',
  },
  {
    name: 'Start de Selectie',
    text: 'In de Vinger Modus start de selectie automatisch na een paar seconden vasthouden. In de Roulette Modus klikt u op de Start Keuze knop om te draaien.',
  },
  {
    name: 'Zie de Winnaar',
    text: 'De winnaar wordt gemarkeerd met een pulseffect, deelexplosie en geluidsfanfare. Klik op Opnieuw of til alle vingers op om het opnieuw te proberen.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'eerste-speler-kiezer',
  title: 'Eerste Speler Kiezer: Vingerkiezer & Beurtenroulette',
  description: 'Kies wie er als eerste mag in uw bordspellen met deze spectaculaire vingerkiezer en interactieve beurtenroulette.',
  ui,
  seo: [
    { type: 'title', text: 'Eerlijkheid en Strategie: Het Eerste Spelersvoordeel in Bordspellen Oplossen', level: 2 },
    { type: 'paragraph', html: 'Het bepalen van de startspeler in bordspelsessies kan de spel dynamiek sterk beïnvloeden. In de speltheorie verwijst het Eerste-Spelersvoordeel (FPA) naar het statistische voordeel dat de speler die de eerste beurt heeft, heeft ten opzichte van tegenstanders. In strategische schaakpartijen, wargames en moderne Eurogames zoals Agricola of Puerto Rico stelt het nemen van de eerste actie een speler in staat om kritieke grondstoffen veilig te stellen of stukken te positioneren voordat tegenstanders kunnen reageren. Om FPA te beperken en een gebalanceerd speelveld te garanderen, is een betrouwbare, onpartijdige selectiemethode essentieel. Onze digitale startspeler kiezer garandeert absolute willekeur, waardoor speelgroepen direct de beurtvolgorde kunnen bepalen en meteen kunnen beginnen met spelen.' },
    {
      type: 'stats',
      items: [
        { value: '100% Willekeurig', label: 'Onpartijdige Selectie' },
        { value: '2 Seconden', label: 'Aftel Trigger' },
        { value: 'Touch', label: 'Mobiel Compatibel' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Spelregels vs. Digitale Randomizers: De Aanraakrevolutie', level: 2 },
    { type: 'paragraph', html: 'Veel moderne bordspelregelboeken bevatten thematische startspelerregels, zoals "de jongste speler begint", "de laatste die een boerderij bezocht begint" of "de langste speler begint". Hoewel vermakelijk tijdens initiële spelletjes, worden deze regels snel repetitief, statisch en oneerlijk voor regelmatige speelgroepen. Fysieke randomizers zoals dobbelsteenworpen of kaarttrekkingen verlengen de opzettijd en zijn gevoelig voor menselijke vooringenomenheid of slecht schudden. De vingerkiezer-mechaniek lost dit op door een snelle, aanraak-en-vasthoud randomizer te bieden die in seconden een startspeler selecteert zonder extra kaarten of dobbelstenen.' },
    {
      type: 'table',
      headers: ['Selectiemethode', 'Snelheid en Opzet', 'Kwaliteit van Willekeur', 'Het Beste Geschikt Voor'],
      rows: [
        ['Willekeurige Spelregels', 'Direct, maar repetitief', 'Geen willekeur na het eerste spel', 'Gezinsspellen en feestspellen'],
        ['Dobbelsteen Worpen', 'Vereist dobbelstenen zoeken en gooien, vatbaar voor gelijke standen', 'Hoge willekeur, maar vervelend voor grote groepen', 'Wargames en RPGs'],
        ['Kaarten Trekken', 'Vereist schudden en uitdelen', 'Goede willekeur, maar vereist fysieke kaarten', 'Deck-builders en kaartspellen'],
        ['Aanraak Vingerkiezer', 'Direct, geen opzet, visuele animaties', 'Absolute algoritmische willekeur', 'Alle bord- en tafelspellen'],
      ],
    },
    {
      type: 'tip',
      title: 'Optimaliseer Uw Touch Kiezer Opstelling',
      html: 'Voor de beste ervaring in Vinger Modus, plaats uw tablet of smartphone plat in het midden van de tafel. Laat alle spelers één duidelijke vinger op het aanraakvlak plaatsen. De aftelling wordt gereset als een speler zijn vinger optilt of verschuift, waardoor onbedoelde selecties worden voorkomen en absolute consensus wordt gegarandeerd voordat de kiezer wordt gestart.',
    },
    {
      type: 'title',
      text: 'Uw Gereedschap Kiezen: Aanraak Vingerkiezer vs. Spinroulette',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Afhankelijk van uw hardware-opstelling en omgeving kunt u schakelen tussen twee verschillende lay-outmodi die zijn ontworpen om de schermruimte en toegankelijkheid te maximaliseren:' },
    {
      type: 'proscons',
      title: 'Selectiemodi Vergelijken',
      items: [
        {
          pro: 'Vinger Modus biedt een ongelooflijk snelle en tactiele ervaring, waardoor tot 10 spelers tegelijkertijd hun vingers kunnen plaatsen.',
          con: 'Vereist een aanraakscherm zoals een smartphone of tablet.',
        },
        {
          pro: 'Roulette Modus werkt op elke laptop, desktop of projectorscherm, ideaal voor virtuele sessies en remote spelavonden.',
          con: 'Vereist klikken om handmatig spelers te plaatsen voordat de spin wordt gestart.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Visuele Optimalisatie: Touch Webpatronen vs. Vertragende Wiel',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Touch Kiezer',
          description: 'Volgt meerdere afzonderlijke aanraakpunten op het scherm. Tekent neon-verbindingswebben en krimpende aftelringen rond elke vinger, uitmondend in een vieringsexplosie.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Gelijktijdige aanraakregistratie',
            'Tactiele vasthoud-en-loslaat controles',
            'Spectaculaire deelexplosies',
          ],
        },
        {
          title: 'Spin Roulette Wiel',
          description: 'Plaatst gekleurde spelerspinnen rond een wiskundig middelpunt. Laat een gekleurd sectorwiel draaien dat op natuurlijke wijze vertraagt met behulp van gesimuleerde wrijving voordat de winnaar wordt aangewezen.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Centrum-gebaseerde uitlijning',
            'Wrijvingsgebaseerde vertragingsfysica',
            'Universele desktop muisondersteuning',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Eerste-Spelersvoordeel (FPA)',
          definition: 'Een beurtvolgorde-vooringenomenheid in bordspellen waarbij de startspeler een statistisch significant voordeel behaalt in actie-selectie of resourcebeheer.',
        },
        {
          term: 'Aanraakselectieprotocol',
          definition: 'Een aanraak-en-vasthoud interactie waarbij alle deelnemers hun vingers op een aanraakscherm plaatsen totdat één enkele winnaar willekeurig wordt gemarkeerd.',
        },
        {
          term: 'Vertragingsfysica',
          definition: 'Een wiskundige animatieroutine die wrijvingsmultiplicatoren toepast op een draaiend wiel om natuurlijke traagheid te simuleren en spanning op te bouwen.',
        },
        {
          term: 'Centrum Berekening',
          definition: 'Het berekende middelpunt van een verspreide set coördinaat-spelers, gebruikt als rotatiepivot voor de roulettewiel graphics.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'Eerste Speler Kiezer & Vingerkiezer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the First Player Selector',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
