import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "verschwoerungsbrett-ersteller",
  title: "Verschwörungsbrett Ersteller: Online Detektiv RPG Ermittlungskarten",
  description: "Erstellen Sie interaktive Verschwörungsbretter und RPG-Ermittlungskarten. Verbinden Sie Verdächtige, Hinweise und Tatorte mit farbigen Fäden.",
  ui: {
  "title": "Verschwörungsbrett Ersteller",
  "addCard": "Karte hinzufügen",
  "searchPlaceholder": "Karten nach Name oder Hinweisen durchsuchen",
  "filterAll": "Alle Kategorien",
  "filterCharacter": "Charaktere",
  "filterClue": "Hinweise",
  "filterLocation": "Orte",
  "filterItem": "Gegenstände",
  "cardName": "Kartenname",
  "cardCategory": "Kategorie",
  "cardDescription": "Beschreibung",
  "cardNotes": "Private Notizen",
  "cardTags": "Tags durch Kommas getrennt",
  "cardColor": "Kartenhervorhebungsfarbe",
  "save": "Änderungen speichern",
  "delete": "Löschen",
  "cancel": "Abbrechen",
  "clearBoard": "Brett leeren",
  "connectionsTitle": "Beziehungsnetzwerk",
  "addConnection": "Verbindung hinzufügen",
  "connectionLabel": "Beziehungsbezeichnung",
  "connectionColor": "Linienfarbe",
  "sourceCard": "Ausgangskarte",
  "targetCard": "Zielkarte",
  "close": "Schließen",
  "character": "Charakter",
  "clue": "Hinweis",
  "location": "Ort",
  "item": "Gegenstand",
  "custom": "Benutzerdefiniert",
  "immersive": "Vollbild"
},
  seo: [
    { type: 'title', text: "Online Verschwörungsbrett Ersteller: Organisieren Sie Detektiv-RPG-Hinweise", level: 2 },
    { type: 'paragraph', html: "Das Entwirren eines komplexen Geflechts aus Lügen, das Verfolgen von Alibis von Verdächtigen und das Verknüpfen von Beweisen am Tatort kann jede Detektiv-RPG-Gruppe überfordern. Egal, ob Sie eine Call of Cthulhu-Kampagne, ein Cyberpunk-Krimi-Spiel, ein Detektiv-Abenteuer in D&D leiten oder einen Thriller schreiben - unser Online-Verschwörungsbrett-Ersteller ist das ultimative Werkzeug. Ziehen, kategorisieren und verknüpfen Sie Hinweise, NPCs und physische Beweise auf einer unbegrenzten digitalen Korktafel. Nutzen Sie farbcodierte Beziehungsfäden, um sofort zu sehen, wie Verdächtige mit Tatorten, Alibis und geheimen Motiven zusammenhängen. So gehören unübersichtliche Papierzettel der Vergangenheit an und Ihre Spieler bleiben vollständig in die Ermittlung eingetaucht." },
    {
      type: 'stats',
      items: [
        { value: "Unbegrenzt", label: "Knotenbrett" },
        { value: "4", label: "Kategorien" },
        { value: "Drag-and-Drop", label: "Schnittstelle" }
      ],
      columns: 3
    },
    { type: 'title', text: "Tipps zur Strukturierung Ihrer Detektiv-RPG-Ermittlungskarte", level: 2 },
    { type: 'tip', title: "Die Drei Hinweise Regel", html: "Fügen Sie für jede Schlussfolgerung oder Deduktion, die die Spieler ziehen sollen, mindestens drei verschiedene Hinweise auf dem Ermittlungsbrett hinzu. Verbinden Sie diese mit benutzerdefinierten farbigen Fäden, um alternative Argumentationslinien aufzuzeigen. Verwenden Sie Charakterkarten für Verdächtige und Zeugen, Ortskarten für Tatorte und Gegenstandskarten für physische Beweise oder Dokumente. Halten Sie die Notizen stets mit den Entdeckungen der Spieler auf dem neuesten Stand." },
    { type: 'title', text: "Digitale Verschwörungsbretter im Vergleich zu physischen Korktafeln mit rotem Faden", level: 2 },
    {
      type: 'proscons',
      title: "Digitale Verschwörungsbretter im Vergleich zu physischen Korktafeln mit rotem Faden",
      items: [
        { pro: "Unbegrenzte Brettgröße, um so viele Hinweise, Verdächtige und Charakterbeziehungen wie nötig ohne Platzmangel hinzuzufügen.", con: "Erfordert einen Bildschirm, ein Tablet oder ein digitales Gerät während der Spielrunde." },
        { pro: "Sofortige Suche und Kategoriefilter, um bestimmte Zeugen oder Hinweise während der Runden sofort zu finden.", con: "Es fehlt das haptische Gefühl von echtem roten Faden und Pins an einer echten Wand." },
        { pro: "Speichern, Laden und Teilen Sie Karten digital, ohne physischen Platz zwischen den Spieleabenden einzunehmen.", con: "Erfordert Internetzugang oder lokalen Speicher des Browsers, um den Zustand des Bretts zu sichern." }
      ]
    },
    { type: 'title', text: "Auswahl der Kartenkategorien für Ihre Ermittlungskarte", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Charakterknoten",
          description: "Stellt NPCs, Verdächtige, Zeugen oder Organisationen dar. Heben Sie Beziehungen mit farbigen Linien hervor.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Verdächtigen-Alibis und Motive verfolgen",
            "Familien- und Fraktionsverbindungen verknüpfen",
            "Zeugenaussagen im Detail festhalten"
          ]
        },
        {
          title: "Hinweisknoten",
          description: "Stellt physische Beweise, Berichte, Alibis oder Gerüchte dar, die von den Spielern entdeckt wurden.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Obduktionsberichte und forensische Analysen",
            "Physische Beweismittel vom Tatort",
            "Aufgeschnappte Gerüchte und Geheimnisse"
          ]
        },
        {
          title: "Ortsknoten",
          description: "Tatorte, Häuser von Verdächtigen, geheime Verstecke oder Städte.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Tatortfotos und Umgebungskarten",
            "Wohnorte wichtiger NPCs",
            "Geheime Unterschlüpfe und Portale"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Glossar zur Verschwörungskartierung", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Ermittlungsknoten", definition: "Jede Karte auf dem Brett, die eine Person, einen Ort, einen Hinweis oder einen Gegenstand darstellt." },
        { term: "Beziehungsfaden", definition: "Eine farbige Linie, die zwei Karten verbindet und zeigt, wie sie zusammenhängen (z. B. Verdächtig, Alibi, Eigentümer)." },
        { term: "Vollbildmodus", definition: "Ein Layout, das die Steuerungselemente ausblendet, um den Arbeitsbereich auf Mobilgeräten oder Tablets zu maximieren." },
        { term: "Hervorhebungspfad", definition: "Ein visueller Pfad, der nur die verbundenen Knoten einer ausgewählten Karte anzeigt und den Rest dimmt." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Leistungstipp für Mobilgeräte",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Wenn das Ziehen von Knoten auf älteren Tablets langsam ist, aktivieren Sie den Vollbildmodus. Stellen Sie sicher, dass das Einrasten am Raster aktiviert ist (Karten rasten alle 15px ein), um das Brett mit minimalem Aufwand ordentlich zu halten."
    }
  ],
  faq: [
    { question: "Wie füge ich Verbindungslinien hinzu?", answer: "Klicken Sie auf Verbindung hinzufügen oder wählen Sie eine Karte aus, klicken Sie auf das Link-Symbol und wählen Sie die Zielkarte." },
    { question: "Kann ich Karten auf dem Handy ziehen?", answer: "Ja, das Board unterstützt Touch-Events, um Karten auf Smartphones und Tablets reibungslos zu ziehen und zu bewegen." },
    { question: "Kann ich benutzerdefinierte Kartenfarben verwenden?", answer: "Ja. Doppelklicken Sie auf eine Karte, wählen Sie Custom in der Kategorie und wählen Sie eine Highlight-Farbe." },
    { question: "Speichert das Board meine Arbeit?", answer: "Ja. Ihr Fortschritt wird automatisch im lokalen Speicher Ihres Browsers unter dem aktuellen Brettnamen gespeichert." },
    { question: "Wie kann ich zoomen und mich auf dem Brett bewegen?", answer: "Verwenden Sie Pinch-to-Zoom-Gesten oder das Mausrad zum Zoomen. Ziehen Sie den Hintergrund, um das Brett zu bewegen." }
  ],
  bibliography,
  howTo: [
    { name: "Ermittlungskarten hinzufügen", text: "Erstellen Sie Karten, die NPCs, Hinweise, Tatorte oder Gegenstände darstellen." },
    { name: "Beziehungen verknüpfen", text: "Erstellen Sie Verbindungslinien zwischen Karten, um zu zeigen, wie Hinweise zusammenhängen." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Verschwörungsbrett Ersteller: Online Detektiv RPG Ermittlungskarten",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Wie füge ich Verbindungslinien hinzu?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klicken Sie auf Verbindung hinzufügen oder wählen Sie eine Karte aus, klicken Sie auf das Link-Symbol und wählen Sie die Zielkarte."
          }
        },
        {
          '@type': 'Question',
          'name': "Kann ich Karten auf dem Handy ziehen?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja, das Board unterstützt Touch-Events, um Karten auf Smartphones und Tablets reibungslos zu ziehen und zu bewegen."
          }
        },
        {
          '@type': 'Question',
          'name': "Kann ich benutzerdefinierte Kartenfarben verwenden?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja. Doppelklicken Sie auf eine Karte, wählen Sie Custom in der Kategorie und wählen Sie eine Highlight-Farbe."
          }
        },
        {
          '@type': 'Question',
          'name': "Speichert das Board meine Arbeit?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja. Ihr Fortschritt wird automatisch im lokalen Speicher Ihres Browsers unter dem aktuellen Brettnamen gespeichert."
          }
        },
        {
          '@type': 'Question',
          'name': "Wie kann ich zoomen und mich auf dem Brett bewegen?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Verwenden Sie Pinch-to-Zoom-Gesten oder das Mausrad zum Zoomen. Ziehen Sie den Hintergrund, um das Brett zu bewegen."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Wie man den Verschwörungsbrett Ersteller benutzt",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Ermittlungskarten hinzufügen",
          'text': "Erstellen Sie Karten, die NPCs, Hinweise, Tatorte oder Gegenstände darstellen."
        },
        {
          '@type': 'HowToStep',
          'name': "Beziehungen verknüpfen",
          'text': "Erstellen Sie Verbindungslinien zwischen Karten, um zu zeigen, wie Hinweise zusammenhängen."
        }
      ]
    }
  ]
};
