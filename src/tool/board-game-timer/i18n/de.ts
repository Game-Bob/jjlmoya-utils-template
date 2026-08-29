import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Brettspiel Timer',
  setupTitle: 'Spiel-Setup',
  playerNamePlaceholder: 'Spielername',
  addPlayer: 'Spieler hinzufügen',
  removePlayer: 'Entfernen',
  startGame: 'Spiel starten',
  pauseGame: 'Pause',
  resumeGame: 'Fortsetzen',
  resetGame: 'Zurücksetzen',
  nextTurn: 'Zug beenden',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Spieler',
  minutesLabel: 'Min',
  secondsLabel: 'Sek',
  expiredLabel: 'ZEIT ABGELAUFEN',
  overtimeLabel: 'Überzeit',
  turnIndicator: 'Dein Zug',
  warningLowTime: 'Wenig Zeit',
  pausedOverlay: 'Spiel pausiert',
  roundLabel: 'Runde',
  settingsTitle: 'Einstellungen',
  baseTimeLabel: 'Basiszeit',
  incrementLabel: 'Inkrement/Verzögerung',
  warningTimeLabel: 'Warnung-Schwelle',
  confirmLabel: 'Bestätigen',
  cancelLabel: 'Abbrechen',
  noPlayersHint: 'Fügen Sie mindestens 2 Spieler hinzu',
  addPlayerHint: 'Spielername eingeben',
  timeUpLabel: 'Zeit abgelaufen!',
  presetsTitle: 'Voreinstellungen',
  timeControlTitle: 'Zeitkontrolle',
  modeLabel: 'Modus',
  modeNormal: 'Normaler Countdown',
  modeFischer: 'Fischer (Inkrement)',
  modeBronstein: 'Bronstein (Verzögerung)',
  modeHourglass: 'Sanduhr',
  modeTurn: 'Runden-Reset',
  audioTitle: 'Audio-Warnungen',
  soundAlerts: 'Soundeffekte',
  playersTitle: 'Spieler',
  playersAdded: 'Hinzugefügte Spieler',
  statsTitle: 'Spielstatistiken',
  totalGameTime: 'Gesamtzeit',
  totalRounds: 'Runden gesamt',
  slowestPlayer: 'Langsamster Spieler',
  playerPerformance: 'Spieler-Zeitanalyse',
  playAgain: 'Neues Spiel',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'brettspiel-timer-schach-uhr',
  title: 'Brettspiel Timer: Duell Schachuhr und Mehrspieler Rundenmanager',
  description: 'Verfolgen Sie Züge und verwalten Sie die Zeit in Ihren Tabletop-Sitzungen mit einem professionellen Brettspiel-Timer. Unterstützt Schachuhr-Duellmodus, Mehrspieler-Layouts, Fischer-Inkrement, Bronstein-Verzögerung und detaillierte Statistiken.',
  ui,
  seo: [
    { type: 'title', text: 'Das Tempo am Spieltisch beherrschen: Wie professionelle Zeitkontrollen das Spielerlebnis verbessern', level: 2 },
    { type: 'paragraph', html: 'Zeitmanagement ist ein wesentlicher Bestandteil moderner Brettspiele. Egal, ob Sie sich in einem schnellen Partyspiel messen oder ein tiefes Strategiespiel austragen - die Regulierung der Denkzeit sorgt dafür, dass alle Teilnehmer ihren fairen Anteil am Rampenlicht erhalten. Die Verwendung professioneller Timing-Methoden wie Fischer-Inkrement, Bronstein-Verzögerung oder Sanduhr-Modus eliminiert Analyseparalyse, garantiert ein gleichmäßiges Spieltempo und fügt dem Spielfeld eine zusätzliche strategische Ebene hinzu.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Unterstützte Spieler' },
        { value: '5 Modi', label: 'Zeitkonfigurationen' },
        { value: '100ms', label: 'Engine-Präzision' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein und Sanduhr: Erweiterte Zeitkontrollen erklärt', level: 2 },
    { type: 'paragraph', html: 'Unser Brettspiel-Timer unterstützt mehrere Timing-Optionen, die von Turnierspielen inspiriert sind und dafür sorgen, dass Ihre Spielrunden reibungslos ablaufen:' },
    {
      type: 'table',
      headers: ['Modus', 'Funktionsweise', 'Bestens geeignet für'],
      rows: [
        ['Normaler Countdown', 'Ein standardmäßiger globaler Countdown, der am Rundenende pausiert.', 'Gelegenheitsspiele mit einem gemeinsamen Denkzeitpool'],
        ['Fischer (Inkrement)', 'Fügt Ihrer Uhr nach jedem Zug eine festgelegte Anzahl von Sekunden hinzu.', 'Strategische Eurogames und Wargames, bei denen schnelle Züge Zeitpuffer aufbauen'],
        ['Bronstein (Verzögerung)', 'Bietet ein Verzögerungsfenster, in dem Ihr Haupttimer nicht herunterzählt.', 'Komplexe taktische Spiele, bei denen kurze Verwaltungsaktionen kostenlos sein sollten'],
        ['Sanduhr', 'Ihr Timer verringert sich, während der Timer des Gegners gleichzeitig zunimmt.', 'Intensive Zwei-Spieler-Duelle und Schachpartien'],
        ['Runden-Reset', 'Ein fester, frischer Countdown-Timer, der bei jeder Runde vollständig zurückgesetzt wird.', 'Schnelle Partyspiele, Quizrunden und schnelle Runden'],
      ],
    },
    {
      type: 'tip',
      title: 'Die ideale Zeitkonfiguration finden',
      html: 'Ein empfohlener Ausgangspunkt sind 30 bis 45 Sekunden für leichte Partyspiele, 1 bis 2 Minuten mit einer Bronstein-Verzögerung von 5 Sekunden für mittelschwere Eurogames und 30 bis 45 Minuten mit einem Fischer-Inkrement von 10 Sekunden für schwere Wargames oder strategische Kampagnen.',
    },
    {
      type: 'title',
      text: 'Visuelle Optimierung: Geteilter Bildschirm für Duelle vs. zentraler Rundenknopf für Mehrspieler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Für direkte Duelle bietet die Anwendung ein geteiltes Schachuhr-Layout. Diese Ansicht ermöglicht es den Spielern, ihre Bildschirmhälften um 180 Grad zu drehen, sodass sie bequem von gegenüberliegenden Seiten des Tisches aus betrachtet werden können. Für Spiele mit 3 oder mehr Teilnehmern wechselt die Benutzeroberfläche in ein Mehrspieler-Raster mit aktiven Spieler-Hervorhebungen, individuellen Kartenanpassungen und einem riesigen zentralen Button zum Beenden des Zugs, der als gemeinsamer Buzzer fungiert.',
    },
    {
      type: 'proscons',
      title: 'Fischer Inkrement vs. Bronstein Verzögerung im Vergleich',
      items: [
        {
          pro: 'Fischer-Inkremente belohnen schnelles Spielen, indem sie einen Zeitpuffer für zukünftige Runden aufbauen.',
          con: 'Die Gesamtspielzeit kann länger werden, wenn Spieler ständig extrem schnelle Züge machen.',
        },
        {
          pro: 'Die Bronstein-Verzögerung verhindert den Zeitverlust bei schnellen Verwaltungsaktionen, ohne massive Reserven anzuhäufen.',
          con: 'Erfordert die Konfiguration eines Verzögerungsschwellenwerts, der zur physischen Verwaltungszeit des Spiels passt.',
        },
        {
          pro: 'Der Sanduhr-Modus erzeugt direkte Spannung in Duellen, indem er Ihre Zeit aktiv abzieht und sie dem Gegner gutschreibt.',
          con: 'Wird bei mehr als zwei Spielern mathematisch komplex und weniger strategisch.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Häufige Brettspiel-Genres, die von Runden-Timern profitieren',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Strategische Eurogames',
          description: 'Worker-Placement- und Ressourcenmanagementspiele mit unterschiedlich komplexen Zügen. Fischer-Inkremente helfen Spielern, kritische Entscheidungen in der Endphase zu treffen, ohne die ersten Runden zu verlangsamen.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Mitigiert Analyseparalyse',
            'Unterstützung für variable Rundenkomplexität',
            'Zeit wird zur aktiven Ressource',
          ],
        },
        {
          title: 'Party und Quizspiele',
          description: 'Rasante Spiele, bei denen schnelles Denken Teil des Spaßes ist. Feste Runden-Reset-Timer halten die Energie hoch und verhindern, dass ein einzelner Spieler den Spielfluss blockiert.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Kurze, feste Countdowns',
            'Hält das Party-Tempo hoch',
            'Erzwingt sofortiges Handeln',
          ],
        },
        {
          title: 'Turnier Duellspiele',
          description: 'Strikte Schachuhr-Duelle erfordern präzise, drehbare Layouts, um die sportliche Integrität und eine faire Zeitverteilung in allen Runden zu gewährleisten.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '180-Grad-Bildschirmdrehung',
            'Präzise Zeiterfassung in 100ms-Intervallen',
            'Sudden Death/Überzeit-Zustände',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fischer-Inkrement',
          definition: 'Eine Methode der Zeitkontrolle, bei der nach jedem beendeten Zug eine festgelegte Anzahl von Sekunden zur verbleibenden Zeit eines Spielers hinzugefügt wird.',
        },
        {
          term: 'Bronstein-Verzögerung',
          definition: 'Eine Methode der Zeitkontrolle, bei der der Countdown zu Beginn eines Zugs für eine festgelegte Zeit verzögert wird, sodass kein Zeitabzug erfolgt, wenn der Zug schnell beendet wird.',
        },
        {
          term: 'Sanduhr-Modus',
          definition: 'Ein dynamisches Zeitsystem, bei dem die abgezogene Zeit eines Spielers in Echtzeit direkt dem Zeitkonto des Gegners gutgeschrieben wird.',
        },
        {
          term: 'Analyseparalyse',
          definition: 'Ein Zustand des Überdenkens, in dem ein Spieler von den Möglichkeiten überfordert ist, wodurch der Spielfluss stockt und das Erlebnis anderer beeinträchtigt wird.',
        },
        {
          term: 'Spielanalyse',
          definition: 'Leistungsmetriken nach dem Spiel, die die verstrichenen Runden, die durchschnittliche Denkgeschwindigkeit, die maximale Zugdauer und das Ranking der langsamsten Züge zusammenfassen.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Wie funktioniert das Layout im Duellmodus?',
      answer: 'Bei einem Spiel für 2 Spieler zeigt die Benutzeroberfläche eine geteilte Schachuhr. Jede Seite repräsentiert einen Spieler; das Tippen auf die eigene Hälfte beendet den Zug. Die Displays können um 180 Grad gedreht werden für Spieler, die sich gegenübersitzen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Fischer- und Bronstein-Modus?',
      answer: 'Der Fischer-Modus fügt nach dem Zug zusätzliche Sekunden hinzu, sodass Spieler Zeit ansparen können. Der Bronstein-Modus bietet eine Verzögerung zu Beginn des Zugs; wird der Zug innerhalb dieser Verzögerung beendet, wird keine Zeit abgezogen.',
    },
    {
      question: 'Verfolgt die App Spielstatistiken?',
      answer: 'Ja! Nach Spielende oder Zeitablauf zeigt das Statistik-Modal die Gesamtzeit, Rundenanzahl, durchschnittliche und maximale Rundenzeit sowie ein Geschwindigkeits-Ranking der Spieler.',
    },
    {
      question: 'Werden meine Spieler beim Aktualisieren gespeichert?',
      answer: 'Ja, die Spielerkonfiguration und die ausgewählten Farben werden automatisch im lokalen Browserspeicher gespeichert und beim nächsten Besuch wieder geladen.',
    },
    {
      question: 'Kann ich während eines laufenden Spiels Zeit hinzufügen oder abziehen?',
      answer: 'Ja! Im Mehrspielermodus verfügen die Spielerkarten über Schaltflächen für +30s und -30s, um die verbleibende Zeit im laufenden Betrieb anzupassen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Spiel-Setup konfigurieren',
      text: 'Wählen Sie eine Voreinstellung (Casual, Blitz, Strategisch, Sanduhr) oder legen Sie eigene Parameter fest: Basisdauer, Inkrement/Verzögerung und Warnschwellen.',
    },
    {
      name: 'Spieler zusammenstellen und speichern',
      text: 'Geben Sie Spielernamen ein und wählen Sie Farb-IDs. Ändern Sie die Zugreihenfolge mit den Pfeiltasten; die Daten werden automatisch gesichert.',
    },
    {
      name: 'Starten und Züge beenden',
      text: 'Starten Sie das Spiel. Tippen Sie im Duellmodus auf Ihre Bildschirmhälfte, um Ihren Zug zu beenden. Klicken Sie im Mehrspielermodus auf die große Schaltfläche Zug beenden.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Brettspiel-Timer & Runden-Manager',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie funktioniert das Layout im Duellmodus?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bei einem Spiel für 2 Spieler zeigt die Benutzeroberfläche eine geteilte Schachuhr. Jede Seite repräsentiert einen Spieler; das Tippen auf die eigene Hälfte beendet den Zug. Die Displays können um 180 Grad gedreht werden für Spieler, die sich gegenübersitzen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Was ist der Unterschied zwischen Fischer- und Bronstein-Modus?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der Fischer-Modus fügt nach dem Zug zusätzliche Sekunden hinzu, sodass Spieler Zeit ansparen können. Der Bronstein-Modus bietet eine Verzögerung zu Beginn des Zugs; wird der Zug innerhalb dieser Verzögerung beendet, wird keine Zeit abgezogen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Verfolgt die App Spielstatistiken?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja! Nach Spielende oder Zeitablauf zeigt das Statistik-Modal die Gesamtzeit, Rundenanzahl, durchschnittliche und maximale Rundenzeit sowie ein Geschwindigkeits-Ranking der Spieler.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Werden meine Spieler beim Aktualisieren gespeichert?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, die Spielerkonfiguration und die ausgewählten Farben werden automatisch im lokalen Browserspeicher gespeichert und beim nächsten Besuch wieder geladen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kann ich während eines laufenden Spiels Zeit hinzufügen oder abziehen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja! Im Mehrspielermodus verfügen die Spielerkarten über Schaltflächen für +30s und -30s, um die verbleibende Zeit im laufenden Betrieb anzupassen.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So verwenden Sie den Brettspiel-Timer',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Spiel-Setup konfigurieren',
          'text': 'Wählen Sie eine Voreinstellung (Casual, Blitz, Strategisch, Sanduhr) oder legen Sie eigene Parameter fest: Basisdauer, Inkrement/Verzögerung und Warnschwellen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Spieler zusammenstellen und speichern',
          'text': 'Geben Sie Spielernamen ein und wählen Sie Farb-IDs. Ändern Sie die Zugreihenfolge mit den Pfeiltasten; die Daten werden automatisch gesichert.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Starten und Züge beenden',
          'text': 'Starten Sie das Spiel. Tippen Sie im Duellmodus auf Ihre Bildschirmhälfte, um Ihren Zug zu beenden. Klicken Sie im Mehrspielermodus auf die große Schaltfläche Zug beenden.'
        }
      ]
    }
  ],
};
