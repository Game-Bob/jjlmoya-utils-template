import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Startspieler Auswahl',
  instructions: 'Lege deine Finger auf den Bildschirm oder klicke, um Pins zu setzen',
  tapToSelect: 'Zum Auswählen tippen',
  winner: 'Gewinner ausgewählt!',
  reset: 'Zurücksetzen',
  start: 'Auswahl starten',
  setupTitle: 'Auswahleinstellungen',
  clearPlayers: 'Alle Pins entfernen',
  fingerMode: 'Fingermodus',
  wheelMode: 'Roulette-Modus',
  presetsTitle: 'Optionen',
  soundOn: 'Ton an',
  soundOff: 'Ton aus',
  playerCountLabel: 'Pins / Finger',
};

const faq = [
  {
    question: 'Wie funktioniert der Fingermodus?',
    answer: 'Im Fingermodus legt jeder Spieler einen Finger auf den mobilen Bildschirm. Das Tool erkennt alle Berührungspunkte, zeigt leuchtende farbige Ringe um sie herum an und startet automatisch einen kurzen Countdown. Sobald der Countdown endet, wird ein Spieler als Gewinner hervorgehoben, während die anderen ausgeblendet werden, begleitet von einer Partikelexplosion.',
  },
  {
    question: 'Kann ich dieses Tool auf einem Desktop-Computer verwenden?',
    answer: 'Ja! Wenn du ein Gerät ohne Touch-Funktion verwendest, wechselt das Tool automatisch in den Roulette-Modus. Du kannst auf die Leinwand klicken, um farbige Pins für die Spieler zu setzen, und dann die Schaltfläche "Auswahl starten" anklicken, um das Auswahlrad zu drehen.',
  },
  {
    question: 'Wie viele Spieler können teilnehmen?',
    answer: 'Das Tool unterstützt bis zu 10 gleichzeitige Spieler. Im Fingermodus können bis zu 10 Finger gleichzeitig erkannt werden. Im Roulette-Modus kannst du durch Klicken bis zu 10 farbige Pins auf der Leinwand platzieren.',
  },
  {
    question: 'Ist die Auswahl wirklich zufällig?',
    answer: 'Ja. Der Auswahlalgorithmus verwendet JavaScripts kryptografisch sicheren Math.random(), um unvoreingenommene Ergebnisse zu gewährleisten. Im Fingermodus wird der Gewinner gleichmäßig zufällig aus allen erkannten Berührungspunkten ausgewählt. Im Roulette-Modus verlangsamt sich das Rad realistisch mittels Reibungsphysik, und der endgültige Winkel bestimmt mathematisch den Gewinner.',
  },
  {
    question: 'Wie entferne ich einen Spieler-Pin im Roulette-Modus?',
    answer: 'Klicke einfach auf einen vorhandenen Pin, um ihn zu entfernen. Das Tool erkennt Klicks innerhalb von 30 Pixeln um jeden gesetzten Pin und löscht ihn, sodass du die Spieleraufstellung vor dem Auslösen des Drehvorgangs anpassen kannst.',
  },
  {
    question: 'Sammelt oder überträgt dieses Tool Daten?',
    answer: 'Überhaupt nicht. Alles läuft lokal in deinem Browser. Es werden niemals Fingerdaten, Berührungspositionen oder Auswahlergebnisse an einen Server gesendet. Dein Spieleabend bleibt absolut privat.',
  },
  {
    question: 'Funktioniert es auf Projektoren oder externen Bildschirmen?',
    answer: 'Ja. Der Roulette-Modus funktioniert hervorragend auf großen Bildschirmen und Projektoren für Tabletop-Sitzungen. Die kontrastreichen Neon-Visuals und der große Countdown-Timer sind so gestaltet, dass sie aus der ganzen Zimmerentfernung sichtbar sind.',
  },
  {
    question: 'Warum wird der Countdown zurückgesetzt, wenn jemand den Finger hebt?',
    answer: 'Das ist beabsichtigt. Im Fingermodus läuft der Countdown nur weiter, solange alle Spieler ihre Finger ruhig auf dem Bildschirm halten. Wenn jemand den Finger hebt oder verschiebt, wird der Timer zurückgesetzt, um sicherzustellen, dass alle bereit sind, bevor die Auswahl läuft. Dies verhindert versehentliche Auslösungen.',
  },
  {
    question: 'Kann ich den Ton ändern oder stummschalten?',
    answer: 'Ja. Klicke auf das Lautsprechersymbol in der oberen rechten Ecke, um den Ton ein- oder auszuschalten. Das Tool spielt ein Tick-Geräusch während des Countdowns und einen Fanfarenklang, wenn ein Gewinner ausgewählt wird.',
  },
  {
    question: 'Was passiert, wenn nur ein Spieler teilnimmt?',
    answer: 'In beiden Modi sind mindestens zwei Spieler erforderlich, um eine Auswahl zu treffen. Im Fingermodus startet der Countdown erst, wenn mindestens zwei Finger erkannt werden. Im Roulette-Modus bleibt die Schaltfläche "Auswahl starten" deaktiviert, bis du mindestens zwei Pins gesetzt hast.',
  },
];

const howTo = [
  {
    name: 'Finger oder Pins platzieren',
    text: 'Lege im Fingermodus alle Spieler einen Finger auf den Bildschirm. Klicke im Roulette-Modus irgendwo auf die Leinwand, um Spieler-Pins zu setzen.',
  },
  {
    name: 'Auswahl auslösen',
    text: 'Im Fingermodus startet die Auswahl automatisch nach einigen Sekunden Halten. Im Roulette-Modus klicke auf die Schaltfläche "Auswahl starten", um das Rad zu drehen.',
  },
  {
    name: 'Gewinner anzeigen',
    text: 'Der Gewinner wird mit einem Pulse-Effekt, Partikelausbruch und Sound-Fanfare hervorgehoben. Klicke auf "Zurücksetzen" oder hebe alle Finger an, um es erneut zu versuchen.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'erstspieler-auswahl',
  title: 'Startspielerauswahl: Finger Chooser & Zug Roulette',
  description: 'Wähle mit diesem spektakulären Finger Chooser und interaktiven Zug Roulette aus, wer in deinen Brettspielen beginnt.',
  ui,
  seo: [
    { type: 'title', text: 'Fairness und Strategie: Den Startspielervorteil in Brettspielen ausgleichen', level: 2 },
    { type: 'paragraph', html: 'Die Bestimmung des Startspielers in Tabletop-Runden kann den Spielverlauf stark beeinflussen. In der Spieltheorie bezeichnet der Startspielervorteil (First-Player Advantage, FPA) den statistischen Vorsprung, den der Spieler mit dem ersten Zug gegenüber seinen Gegnern hat. In strategischen Schachpartien, Kriegsspielen und modernen Eurogames wie Agricola oder Puerto Rico ermöglicht der erste Zug einem Spieler, kritische Ressourcen zu sichern oder Figuren zu positionieren, bevor Gegner reagieren können. Um FPA zu vermeiden und ein faires Spielfeld zu garantieren, ist eine zuverlässige, unvoreingenommene Auswahlmethode unerlässlich. Unser digitaler Startspieler-Auswahlgenerator garantiert absolute Zufälligkeit, sodass Spielgruppen sofort die Zugreihenfolge festlegen und direkt mit dem Spielen beginnen können.' },
    {
      type: 'stats',
      items: [
        { value: '100% Zufall', label: 'Unvoreingenommene Auswahl' },
        { value: '2 Sekunden', label: 'Countdown-Start' },
        { value: 'Multitouch', label: 'Mobil kompatibel' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Tabletop-Regeln vs. Digitale Zufallsgeneratoren: Die Touch-Revolution', level: 2 },
    { type: 'paragraph', html: 'Viele moderne Brettspielregelbücher enthalten thematische Startspielerregeln wie "der jüngste Spieler beginnt", "derjenige, der zuletzt auf einem Bauernhof war, beginnt" oder "der größte Spieler beginnt". Obwohl sie in den ersten Partien unterhaltsam sind, werden diese Regeln für regelmäßige Spielrunden schnell repetitiv, statisch und unfair. Physische Zufallsgeneratoren wie Würfelwürfe oder Kartenziehen verlängern die Aufbauzeit und sind anfällig für menschliche Voreingenommenheit oder schlechtes Mischen. Der Finger-Chooser-Mechanismus löst dieses Problem, indem er einen schnellen Touch-and-Hold-Zufallsgenerator bietet, der in Sekundenschnelle einen Startspieler auswählt, ohne zusätzliche Karten oder Würfel zu benötigen.' },
    {
      type: 'table',
      headers: ['Auswahlmethode', 'Geschwindigkeit und Aufbau', 'Zufallsqualität', 'Am besten geeignet für'],
      rows: [
        ['Beliebige Regelbuchregeln', 'Sofort, aber repetitiv', 'Keine Zufälligkeit nach dem ersten Spiel', 'Familienspiele und Partyspiele'],
        ['Würfelvergleich', 'Erfordert Würfelsuche und -wurf, anfällig für Gleichstand', 'Hohe Zufälligkeit, aber mühsam bei großen Gruppen', 'Kriegsspiele und Rollenspiele'],
        ['Kartenziehen', 'Erfordert Mischen und Austeilen', 'Gute Zufälligkeit, aber physische Karten nötig', 'Deck-Building- und Kartenspiele'],
        ['Touch-Finger-Auswahl', 'Sofort, kein Aufbau, visuelle Animationen', 'Absolute algorithmische Zufälligkeit', 'Alle Tabletop- und Brettspiele'],
      ],
    },
    {
      type: 'tip',
      title: 'Optimierung deines Multitouch Auswahl Setups',
      html: 'Für die beste Erfahrung im Fingermodus lege dein Tablet oder Smartphone flach in die Tischmitte. Alle Spieler sollten einen Finger deutlich auf die Leinwand legen. Der Countdown wird zurückgesetzt, wenn ein Spieler seinen Finger anhebt oder verschiebt, wodurch versehentliche Auslösungen verhindert und absolute Einigkeit vor dem Start des Auswahlvorgangs sichergestellt wird.',
    },
    {
      type: 'title',
      text: 'Werkzeugauswahl: Touch Finger Chooser vs. Spin Roulette',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Je nach Hardware-Setup und Umgebung kannst du zwischen zwei verschiedenen Layout-Modi wechseln, die die Bildschirmfläche und Zugänglichkeit maximieren:' },
    {
      type: 'proscons',
      title: 'Vergleich der Auswahlmodi',
      items: [
        {
          pro: 'Der Fingermodus bietet ein extrem schnelles und taktiles Erlebnis, bei dem bis zu 10 Spieler gleichzeitig Finger auflegen können.',
          con: 'Erfordert einen touchfähigen Bildschirm wie ein Smartphone oder Tablet.',
        },
        {
          pro: 'Der Roulette-Modus funktioniert auf jedem Laptop, Desktop oder Projektorbildschirm und ist ideal für virtuelle Sitzungen und Remote-Spieleabende.',
          con: 'Erfordert Klicken, um manuell Pins zu setzen, bevor der Spin ausgelöst wird.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Visuelle Optimierung: Multitouch Netze vs. Verzögerungsräder',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Multitouch Auswahl',
          description: 'Verfolgt mehrere einzelne Berührungspunkte auf dem Bildschirm. Zeichnet neonfarbene Verbindungsnetze und schrumpfende Countdown-Ringe um jeden Finger, die in einem Feier-Ausbruch gipfeln.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Gleichzeitige Berührungsverfolgung',
            'Taktile Halte- und Loslass-Prüfungen',
            'Spektakuläre Partikelexplosionen',
          ],
        },
        {
          title: 'Spin Roulette Rad',
          description: 'Zeichnet farbige Spieler-Pins um einen mathematischen Mittelpunkt. Dreht ein farbiges Sektor-Rad, das durch simulierte Reibung natürlich langsamer wird, bevor der Gewinner bestimmt wird.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Mittelpunkt-basierte Ausrichtung',
            'Reibungsbasierte Verlangsamungsphysik',
            'Universelle Desktop-Mausunterstützung',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Startspielervorteil (FPA)',
          definition: 'Eine Zugreihenfolge-Verzerrung in Brettspielen, bei der der beginnende Spieler einen statistisch signifikanten Vorteil bei der Aktionsauswahl oder Ressourcenkontrolle erhält.',
        },
        {
          term: 'Touch-Auswahl-Protokoll',
          definition: 'Eine Touch-and-Hold-Interaktion, bei der alle Teilnehmer ihre Finger auf einen Touchscreen legen, bis ein einzelner Gewinner zufällig hervorgehoben wird.',
        },
        {
          term: 'Verzögerungsphysik',
          definition: 'Eine mathematische Animationsroutine, die Reibungsmultiplikatoren auf ein sich drehendes Rad anwendet, um natürliche Trägheit zu simulieren und Spannung aufzubauen.',
        },
        {
          term: 'Mittelpunktberechnung',
          definition: 'Der berechnete Mittelpunkt einer verstreuten Menge von Koordinaten-Pins, der als Drehpunkt für die Roulette-Radgrafik dient.',
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
      'name': 'Startspielerauswahl & Finger Chooser',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5 und JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Startspielerauswahl verwenden',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
