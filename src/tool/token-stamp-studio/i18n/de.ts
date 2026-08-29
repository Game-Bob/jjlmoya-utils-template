import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Wähle einen Rahmen',
  frameHint: 'Wähle die Silhouette, die der Gruppe zeigt, wer dieser Charakter ist, bevor jemand den Namen liest.',
  randomFrame: 'Zufälliger Rahmen',
  surfaceLegend: 'Gestalte den Token',
  backgroundLabel: 'Hintergrund',
  borderLabel: 'Rahmen',
  textLabel: 'Beschriftung',
  overlayLabel: 'Tönung',
  randomColors: 'Zufällige Farben',
  borderWidthLabel: 'Rahmenstärke',
  opacityLabel: 'Rahmentransparenz',
  overlayOpacityLabel: 'Porträttönung',
  stageLabel: 'Live Token Schmiede',
  chooseImage: 'Porträt wählen',
  positionHint: 'Ziehe das Porträt oder Beschriftungen direkt auf den Token.',
  markerName: 'Marker Name',
  markerNamePlaceholder: 'Marker benennen',
  textLegend: 'Füge lesbare Details hinzu',
  textHint: 'Verwende kurze Angaben wie Name, Stufe, Rolle oder Zustand. Ziehe jede Beschriftung auf den Token.',
  textPlaceholder: 'Charaktername oder Rolle',
  addText: 'Beschriftung hinzufügen',
  removeText: 'Beschriftung entfernen',
  textSizeLabel: 'Schriftgröße',
  alignmentLabel: 'Textausrichtung',
  alignLeft: 'Links ausrichten',
  alignCenter: 'Zentrieren',
  alignRight: 'Rechts ausrichten',
  imageLegend: 'Porträt anpassen',
  imageZoomLabel: 'Porträt Zoom',
  scaleLabel: 'Export Skalierung',
  savedMarkers: 'Gespeicherte Marker',
  noSavedMarkers: 'Gespeicherte Marker erscheinen hier, um sie erneut zu öffnen, zu bearbeiten und wiederzuverwenden.',
  reuseMarker: 'Wähle einen Marker zum erneuten Öffnen.',
  deleteMarker: 'Marker löschen',
  newMarker: 'Neuer Marker',
  download: 'PNG herunterladen',
  copy: 'PNG kopieren',
  downloadBatch: 'Stapel herunterladen',
  batchLabel: 'Erweiterter Stapel Export',
  batchHint: 'Optional: Exportiere mehrere Porträts mit den aktuellen Rahmen und Farbeinstellungen.',
  chooseBatch: 'Porträts auswählen',
  batchReady: '{count} Porträts bereit zum Schmieden.',
  noImage: 'Kein Porträt geladen',
  noText: 'Noch keine Beschriftungen. Füge Details hinzu, die deine Gruppe benötigt.',
  tokenDetails: 'Charakter Token Steuerung',
  exportHint: 'Das PNG ist außerhalb der gewählten Silhouette transparent, bereit für VTT oder Druckbögen.',
};

const faq = [
  {
    question: 'Was macht ein gutes Charakter Token Porträt aus?',
    answer: 'Wähle ein Bild mit gut erkennbarem Gesicht oder starker Silhouette und ausreichend Kontrast zum Rahmen. Ein Kopf und Schultern Ausschnitt bleibt auch bei kleiner Darstellung auf dem VTT gut lesbar.',
  },
  {
    question: 'Wie platziere ich das Porträt optimal im Rahmen?',
    answer: 'Lade das Bild hoch und ziehe es direkt auf dem Token an die richtige Position. Nutze den Porträt Zoom, um das Gesicht zu vergrößern, ohne den Rahmen zu verändern.',
  },
  {
    question: 'Kann ich Charaktername und Stufe hinzufügen?',
    answer: 'Ja. Füge so viele kurze Beschriftungen hinzu wie nötig, wähle sie aus, passe Schriftgröße und Ausrichtung an und platziere sie gut lesbar auf dem Token.',
  },
  {
    question: 'Bleibt das PNG außerhalb des Tokens transparent?',
    answer: 'Ja. Das exportierte Bild behält den Bereich außerhalb der Silhouette transparent, sodass der Marker perfekt auf Spielplänen oder Druckbögen platziert werden kann.',
  },
  {
    question: 'Kann ich eine ganze Abenteurergruppe auf einmal erstellen?',
    answer: 'Ja. Lade mehrere Porträts im Stapel Export hoch, verwende dieselben Rahmen und Farbeinstellungen und lade für jedes Porträt ein transparentes PNG herunter.',
  },
  {
    question: 'Wo werden meine gespeicherten Marker abgelegt?',
    answer: 'Das Speichern auf diesem Gerät sichert den Marker im lokalen Browserspeicher. Es werden keine Bilder hochgeladen. Das Löschen von Browserdaten entfernt auch die lokale Kopie.',
  },
];

const howTo = [
  { name: 'Wähle die Charakter Silhouette', text: 'Starte mit einem Rahmen, der zum Charakter passt: Kreis für klassische Helden, Sechseck für taktische Spiele oder Stern für Bosse und Champions.' },
  { name: 'Porträt laden und ausrichten', text: 'Wähle ein Bild aus und ziehe es auf den Live Token. Positioniere das Gesicht mittig im Rahmen und passe den Zoom an.' },
  { name: 'Wichtige Details hinzufügen', text: 'Ergänze kurze Beschriftungen für Name, Stufe oder Status. Halte den Text kurz, damit das Bild gut erkennbar bleibt.' },
  { name: 'Speichern und als PNG exportieren', text: 'Der Marker wird automatisch gespeichert. Lade ein transparentes PNG für dein Virtual Tabletop oder den Druckbogen herunter.' },
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
  description: 'Erstelle gut lesbare Charakter Tokens für Pen and Paper Rollenspiele mit individuellen Rahmen, Beschriftungen, Transparenz und Stapel Export.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So erstellst du ein Charakter Token für Rollenspiele',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'character-token-maker-rpg-rollenspiel',
  title: 'Charakter Token Ersteller für Pen and Paper Rollenspiele',
  description: 'Erstelle gut lesbare Charakter Tokens und Marker aus Porträts mit ausdrucksstarken Rahmen, verschiebbaren Ausschnitten, Beschriftungen und transparentem PNG Export.',
  ui,
  seo: [
    { type: 'title', text: 'Gestalte deutliche Charakter Tokens für jede Kartengröße', level: 2 },
    { type: 'paragraph', html: 'Ein Token ist ein visueller Signalgeber am Spieltisch. Seine Silhouette verrät der Gruppe sofort, ob es sich um einen Helden, ein Monster oder ein wichtiges Ziel handelt. Wähle den passenden Rahmen und halte Gesicht und Text auch bei kleiner Darstellung auf dem VTT gut lesbar.' },
    { type: 'title', text: 'Der richtige Rahmen für jeden Charaktertyp', level: 2 },
    { type: 'list', items: ['<strong>Kreis oder Ring:</strong> bewährt für Spielercharaktere und Verbündete.', '<strong>Sechseck oder Achteck:</strong> ideal zur Unterscheidung in taktischen Gefechten mit vielen Einheiten.', '<strong>Stern:</strong> perfekt für Bosse, Champions oder Schlüsselpersonen.', '<strong>Wolke:</strong> sanfte Form für Geister, Vertraute und Fabelwesen.'] },
    { type: 'tip', title: 'Entwirf Tokens für die kleinste Spielansicht', html: 'Zoome auf der Karte heraus, bis der Token nur noch wenige Pixel klein ist. Wenn Gesicht, Rahmen und Text weiterhin gut trennbar sind, bleibt der Marker im Spielgeschehen optimal nutzbar.' },
    { type: 'title', text: 'Kurze und nützliche Beschriftungen am Spieltisch', level: 2 },
    { type: 'paragraph', html: 'Ein Token ersetzt keinen Charakterbogen. Ergänze nur die ein oder zwei Informationen, die am Tisch ständig gebraucht werden: Name, Stufe oder Status wie benommen. Lange Texte lenken nur vom Porträt ab.' },
    { type: 'title', text: 'Erstelle ganze Abenteurergruppen mit einheitlichem Stil', level: 2 },
    { type: 'paragraph', html: 'Der Stapel Export eignet sich hervorragend nach einer Session Zero. Nutze einen gemeinsamen Rahmenstil für die Gruppe, während jedes Gesicht individuell bleibt. Das sorgt für visuellen Zusammenhalt bei klarer Unterscheidbarkeit.' },
    { type: 'tip', title: 'Automatische Speicherung auf deinem Gerät', html: 'Das lokale Speichern behält den Ausschnitt und die Beschriftung auf deinem Gerät. Exportierte PNGs nutzt du im Spiel; der gespeicherte Marker bleibt deine bearbeitbare Vorlage.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
