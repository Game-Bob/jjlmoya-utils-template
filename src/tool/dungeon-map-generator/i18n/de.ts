import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Wählen Sie einen Seed, stellen Sie das Raster ein und wählen Sie einen Stil. Generieren Sie eine verbundene Karte für Notizen, Druck oder VTT.',
  seedLabel: 'Karten-Seed',
  seedHint: 'Verwenden Sie denselben Seed bei gleichen Einstellungen, um die exakt gleiche Karte zu erstellen.',
  randomSeed: 'Neuer Seed',
  sizeLabel: 'Expeditionsgröße',
  sizeCompact: 'One-Shot',
  sizeSession: 'Sitzung',
  sizeStronghold: 'Festung',
  fineTuneGrid: 'Raster und Dichte feinabstimmen',
  columnsLabel: 'Spalten',
  rowsLabel: 'Zeilen',
  densityLabel: 'Raumdichte',
  densityHint: 'Höhere Dichte erzeugt mehr Räume und nutzbare Bodenfläche.',
  styleLabel: 'Kartenarchitektur',
  dungeonStyle: 'Dungeon',
  dungeonStyleHint: 'Steinräume mit einfachen Gängen.',
  cavernStyle: 'Höhle',
  cavernStyleHint: 'Unregelmäßige Räume mit weichen Kanten.',
  scifiStyle: 'Sci-Fi',
  scifiStyleHint: 'Breite Module mit doppelten Verbindungsgängen.',
  generate: 'Karte zeichnen',
  mapRegionLabel: 'Generierte Dungeon-Karte und Export-Steuerung',
  connectedBadge: 'Alle Räume verbunden',
  roomsLabel: 'Räume',
  doorsLabel: 'Türen',
  floorLabel: 'Bodenabdeckung',
  legendFloor: 'Begehbarer Boden',
  legendWall: 'Feste Wand',
  legendDoor: 'Tür oder Schott',
  editHint: 'Rechtsklick auf eine Zelle zum Bearbeiten',
  editCell: 'Zelle bearbeiten',
  paintFloor: 'Boden',
  paintWall: 'Wand',
  paintDoor: 'Tür',
  mapData: 'Kartendaten',
  copyLink: 'Link kopieren',
  linkCopied: 'Link kopiert',
  exportPng: 'PNG herunterladen',
  exportSvg: 'SVG herunterladen',
  exportJson: 'JSON speichern',
  importJson: 'JSON öffnen',
  importError: 'Diese Datei enthält keine gültige Dungeon-Konfiguration.',
  compactMap: 'Angespannte Erkundung',
  balancedMap: 'Ausgewogene Expedition',
  sprawlingMap: 'Offene Festung',
  compactHint: 'Längere Übergänge lassen mehr unbekannten Raum zwischen Räumen.',
  balancedHint: 'Räume und Gänge teilen sich die Fläche gleichmäßig.',
  sprawlingHint: 'Große Bodenfläche begünstigt Begegnungen und schnelle Bewegung.',
  mapReady: 'Kartenlegende',
  dimensionsUnit: 'Rasterzellen',
};

const faq = [
  {
    question: 'Erzeugt derselbe Seed immer dieselbe Dungeon-Karte?',
    answer: 'Ja. Seed, Rasterabmessungen, Dichte und Stil bilden eine deterministische Konfiguration. Die Wiederverwendung aller vier Einstellungen baut exakt dieselben Räume und Türen auf.',
  },
  {
    question: 'Sind alle generierten Räume erreichbar?',
    answer: 'Ja. Die Räume werden nach der Platzierung über eine Hauptroute verbunden, sodass jeder begehbare Bereich zu einer einzigen verbundenen Karte gehört.',
  },
  {
    question: 'Was unterscheidet Dungeon-, Höhlen- und Sci-Fi-Stile?',
    answer: 'Dungeons nutzen regelmäßige Steinräume. Höhlen erzeugen unregelmäßige, abgerundete Kammern. Sci-Fi-Karten bevorzugen breite Module mit doppelten Schotts.',
  },
  {
    question: 'Welches Format eignet sich für ein Virtual Tabletop (VTT)?',
    answer: 'PNG ist für die meisten VTTs am einfachsten. SVG bleibt bei jeder Skalierung scharf und lässt sich in Vektorprogrammen leicht bearbeiten.',
  },
  {
    question: 'Kann jemand anderes meine Dungeon-Karte regenerieren?',
    answer: 'Ja. Kopieren Sie den Link oder senden Sie die JSON-Datei. Der Empfänger kann dieselbe Konfiguration sofort laden.',
  },
  {
    question: 'Fügt dieser Generator Monster, Fallen oder Schätze hinzu?',
    answer: 'Nein. Er erstellt einen neutralen Grundriss, den Sie für jedes Regelwerk anpassen können. Die Ausgestaltung obliegt dem Spielleiter.',
  },
];

const howTo = [
  {
    name: 'Rasterabmessungen festlegen',
    text: 'Wählen Sie Spalten und Zeilen passend für Ihre Notizen oder VTT-Szene.',
  },
  {
    name: 'Architektur wählen',
    text: 'Wählen Sie Dungeon, Höhle oder Sci-Fi und passen Sie die Raumdichte an.',
  },
  {
    name: 'Generieren und prüfen',
    text: 'Geben Sie einen Seed ein, zeichnen Sie die Karte und prüfen Sie die Übersicht.',
  },
  {
    name: 'Exportieren oder teilen',
    text: 'Laden Sie PNG oder SVG herunter oder speichern Sie die Konfiguration per Link oder JSON.',
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
  name: 'Zufalls-Dungeon-Kartengenerator',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Ein deterministischer Generator für Dungeon-Karten mit verbundenen Räumen, Türen und lokalen Exporten.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So generieren Sie eine verbundene Dungeon-Karte',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'zufalls-dungeon-karten-generator',
  title: 'Dungeon Kartengenerator für Rollenspiele',
  description: 'Erstellen Sie reproduzierbare Dungeon-, Höhlen- und Sci-Fi-Karten mit verbundenen Räumen, Türen und PNG/SVG-Export.',
  ui,
  seo: [
    { type: 'title', text: 'Erstellen Sie eine spielbare Dungeon-Karte aus einem wiederverwendbaren Seed', level: 2 },
    { type: 'paragraph', html: 'Eine nützliche Zufalls-Dungeon-Karte erfordert mehr als beliebiges visuelles Rauschen. Jede Kammer muss erreichbar sein, das Raster muss zur Spielfläche passen und das Ergebnis muss jederzeit wiederherstellbar sein. Dieser Generator behandelt Seed und Einstellungen als deterministische Kartenspezifikation. Dieselben Einstellungen erzeugen stets denselben Plan.' },
    { type: 'title', text: 'Rasterabmessungen für Druck und Virtual Tabletops wählen', level: 2 },
    { type: 'paragraph', html: 'Die Wahl der Rastergröße ist der erste praktische Schritt. Ein kleineres Raster lässt sich leicht ausdrucken und eignet sich für kurze Abenteuer, während ein großes Raster Raum für Erkundungen bietet. Das exportierte Bild behält quadratische Zellen bei, um sich nahtlos an VTT-Raster anzupassen.' },
    {
      type: 'table',
      headers: ['Rastergröße', 'Typische Nutzung', 'Start-Dichte', 'Planungshinweis'],
      rows: [
        ['20 mal 16 Zellen', 'One-Shot Ort', '35 bis 45', 'Schnell zu lesen und einfach zu drucken'],
        ['36 mal 26 Zellen', 'Sitzungs-Dungeon', '45 bis 55', 'Ausgewogener Rhythmus zwischen Raum und Gang'],
        ['52 mal 38 Zellen', 'Mehrteiliger Komplex', '50 bis 65', 'Viel Platz für Fraktionen und optionale Wege'],
      ],
    },
    { type: 'tip', title: 'Passen Sie die Karte an die Begegnungsgröße an', html: 'Berechnen Sie den benötigten Platz für große Begegnungen vor der Größenwahl. Ein großer Dungeon mit winzigen Räumen wirkt eng, während ein kompakter Plan mit einem großzügigen Hauptraum einprägsame Szenen ermöglicht.' },
    { type: 'title', text: 'Bodenabdeckung als Tempo-Signal verstehen', level: 2 },
    { type: 'paragraph', html: 'Die Bodenabdeckung beschreibt den Prozentsatz der begehbaren Fläche. Geringe Abdeckung betont Isolation und unentdeckten Raum. Mittlere Abdeckung sorgt für stetigen Spielfluss. Hohe Abdeckung schafft komplexe Festungen mit dynamischen Kämpfen.' },
    {
      type: 'list',
      items: [
        '<strong>Angespannte Erkundung:</strong> Nutzen Sie leeren Raum für Isolation oder Geheimgänge.',
        '<strong>Ausgewogene Expedition:</strong> Wechseln Sie Räume und Verbindungswege ab.',
        '<strong>Offene Festung:</strong> Planen Sie Sichtlinien und Patrouillenwege ein.',
      ],
    },
    { type: 'title', text: 'Vom neutralen Grundriss zum Abenteuerort', level: 2 },
    { type: 'paragraph', html: 'Die generierte Karte liefert die reine Architektur. Weisen Sie Räumen erzählerische Funktionen zu und platzieren Sie Hinweise, Fallen und Schätze entsprechend.' },
    { type: 'tip', title: 'Konfiguration vor dem Ausgestalten sichern', html: 'Kopieren Sie den Link oder speichern Sie das JSON vor dem Hinzufügen von Notizen, um den Spielern eine saubere Karte ohne Spielleiter-Notizen zu geben.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
