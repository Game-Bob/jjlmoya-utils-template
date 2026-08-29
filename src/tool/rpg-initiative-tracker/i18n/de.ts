import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'InitiativenVerfolger',
  addCombatant: 'Kämpfer hinzufügen',
  removeCombatant: 'Entfernen',
  playerLabel: 'Spieler',
  npcLabel: 'NSC',
  initiativeLabel: 'Initiative',
  modifierLabel: 'Modifikator',
  namePlaceholder: 'Charaktername',
  initiativePlaceholder: 'Initiative',
  modifierPlaceholder: 'Modifikator',
  addButton: 'Hinzufügen',
  startCombat: 'Kampf beginnen',
  endCombat: 'Kampf beenden',
  nextTurn: 'Nächster Zug',
  prevTurn: 'Vorheriger Zug',
  roundLabel: 'Runde',
  turnLabel: 'Zug',
  noCombatants: 'Noch keine Kämpfer. Füge Charaktere hinzu, um zu beginnen.',
  statusInput: 'Status',
  combatStarted: 'Kampf begonnen!',
  combatEnded: 'Kampf beendet',
  yourTurn: 'Zug',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'initiativen-verfolger',
  title: 'RPG Initiativen Verfolger: Kampfreihenfolge & InitiativenManager',
  description: 'Verfolge die Initiative-Reihenfolge für jedes Tabletop-RPG. Füge Kämpfer hinzu, würfle Initiative, verwalte Statuseffekte und navigiere durch die Kampfzüge.',
  ui,
  seo: [
    { type: 'title', text: 'Wie Initiative in D&D und anderen Tabletop-RPGs funktioniert', level: 2 },
    { type: 'paragraph', html: 'Die Initiative bestimmt die Reihenfolge der Aktionen im Kampf. Jeder Teilnehmer würfelt zu Beginn eines Kampfes einen Geschicklichkeitswurf, und die Zugreihenfolge verläuft vom höchsten zum niedrigsten Wert. Ein digitaler Initiativen Verfolger automatisiert die Sortierung, hebt den aktiven Kämpfer hervor, verfolgt laufende Statuseffekte und informiert den gesamten Tisch darüber, wer als Nächstes an der Reihe ist. Dies ist besonders nützlich für Spielleiter, die komplexe Begegnungen mit mehreren Gegnertypen und Spielercharakteren leiten.' },
    {
      type: 'stats',
      items: [
        { value: 'Unbegrenzt', label: 'Kämpfer unterstützt' },
        { value: 'Auto-Sortierung', label: 'Nach Initiative-Wurf' },
        { value: 'Echtzeit', label: 'Zugverfolgung' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Standard Initiative-Regeln für D&D 5e', level: 2 },
    { type: 'paragraph', html: 'In D&D 5. Edition würfelt jeder Teilnehmer zu Beginn des Kampfes einen Geschicklichkeitswurf. Spieler würfeln einzeln. Der Spielleiter würfelt einmal für jede Gruppe identischer Monster. Die Zugreihenfolge verläuft vom höchsten zum niedrigsten Wert und springt dann für die nächste Runde zurück zum Anfang. Gleichstände werden durch den Geschicklichkeitswert entschieden oder der SL entscheidet. Ein digitaler Verfolger erledigt dies alles automatisch und zeigt die vollständige Zugreihenfolge auf einen Blick.' },
    {
      type: 'table',
      headers: ['Funktion', 'Manuelle Verfolgung', 'Digitaler Verfolger'],
      rows: [
        ['Sortierung', 'Liste neu schreiben, wenn sich die Initiative ändert', 'Sofortige automatische Neusortierung'],
        ['Aktueller Zug', 'Muss mündlich oder mit einem Marker verfolgt werden', 'Mit grünem Leuchten hervorgehoben'],
        ['Statuseffekte', 'Separater Notizblock oder Würfel neben der Miniatur', 'Klicken zum Umschalten bei jedem Kämpfer'],
        ['Rundenzählung', 'Im Kopf oder auf Schmierpapier zählen', 'Wird automatisch angezeigt'],
        ['Hinzufügen während des Kampfes', 'Reihenfolge ausradieren und neu schreiben', 'An der richtigen Position eingefügt'],
      ],
    },
    {
      type: 'tip',
      title: 'Tipps zur Initiative am Spieltisch',
      html: 'Würfle die Initiative für alle Monster vor der Sitzung aus, um während des Kampfes Zeit zu sparen. Füge einem Kämpfer häufige Statuseffekte wie Betäubt oder Vergiftet hinzu, sobald sie angewendet werden. So verhinderst du, dass eine Bedingung vergessen wird, wenn der betroffene Charakter an der Reihe ist. Verwende den Button "Vorheriger Zug", um nachzusehen, was passiert ist, falls du eine Regelentscheidung aus einer früheren Runde überprüfen musst.',
    },
    {
      type: 'title',
      text: 'Häufig verwendete Statuseffekte im Kampf',
      level: 3,
    },
    { type: 'paragraph', html: 'Das Verfolgen von Zuständen während des Kampfes ist eine der am häufigsten übersehenen Aufgaben. Ein Statuseffekt kann die Effektivität eines Charakters völlig verändern, und das Vergessen, ihn zu entfernen, kann das Gleichgewicht einer Begegnung kippen. Der Initiativen Verfolger ermöglicht es dir, Zustände mit einem einzigen Klick anzuwenden und zu entfernen, sodass sie neben dem Namen des Kämpfers sichtbar bleiben.' },
    {
      type: 'proscons',
      title: 'Statuseffekte digital vs. manuell verwalten',
      items: [
        {
          pro: 'Zustände sind direkt neben dem Charakternamen sichtbar, sodass niemand einen aktiven Effekt vergisst.',
          con: 'Erfordert, dass man daran denkt, Status ein- und auszuschalten, wenn sie angewendet und entfernt werden.',
        },
        {
          pro: 'Mehrere Status können gleichzeitig auf demselben Kämpfer aktiv sein und werden gemeinsam angezeigt.',
          con: 'Der Verfolger setzt die Regeln nicht automatisch durch; der SL muss sie weiterhin anwenden.',
        },
        {
          pro: 'Status können während des Kampfes hinzugefügt werden, ohne anzuhalten, um auf einem Charakterblatt zu schreiben.',
          con: 'Standardmäßig sind nur vordefinierte Status-Tags verfügbar.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alternative Initiative-Systeme',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standard Initiative',
          description: 'Jeder Kämpfer würfelt einmal zu Beginn. Dieselbe Reihenfolge wiederholt sich jede Runde. Einfach und vorhersehbar, aber die Reihenfolge ist nach dem ersten Wurf festgelegt. Funktioniert gut für die meisten Gruppen und Begegnungsgrößen.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Einfach zu lernen und zu lehren', 'Feste Zugreihenfolge jede Runde', 'Funktioniert für jede Gruppengröße'],
        },
        {
          title: 'Seiten Initiative',
          description: 'Alle Spielercharaktere handeln gemeinsam, dann alle Gegner gemeinsam. Üblich in älteren Editionen und OSR-Spielen. Beschleunigt den Kampf durch weniger individuelle Verfolgung, reduziert aber die taktische Vielfalt.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Schnellste Kampfauflösung', 'Fördert Gruppenkoordination', 'Weniger individuelle Zugvielfalt'],
        },
        {
          title: 'Geschwindigkeitsfaktor Variante',
          description: 'Jede Runde erklären die Teilnehmer zuerst ihre Aktionen, dann würfeln sie Initiative, modifiziert durch die gewählte Aktion. Wird in optionalen Regelsätzen verwendet. Erzeugt eine unvorhersehbare Zugreihenfolge, verleiht der Entscheidungsfindung aber mehr Tiefe.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Andere Reihenfolge jede Runde', 'Aktionswahl beeinflusst Timing', 'Mehr taktische Entscheidungen pro Zug'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Kampfverfolger-Glossar',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Initiative',
          definition: 'Ein Geschicklichkeitswurf zu Beginn des Kampfes, der die Reihenfolge der Züge bestimmt. Jeder Teilnehmer würfelt und handelt in absteigender Reihenfolge.',
        },
        {
          term: 'Runde',
          definition: 'Ein vollständiger Zyklus, in dem jeder Kämpfer einen Zug macht. Nachdem der letzte Kämpfer gehandelt hat, endet die Runde und eine neue Runde beginnt von oben in der Reihenfolge.',
        },
        {
          term: 'Statuseffekt',
          definition: 'Ein vorübergehender Zustand, der die Fähigkeiten eines Charakters verändert. Beispiele sind Betäubt (kann nicht handeln), Vergiftet (Nachteil auf Würfe) und Geblendet (Angriffe haben Nachteil).',
        },
        {
          term: 'NSC',
          definition: 'Nicht-Spieler-Charakter, der vom Spielleiter gesteuert wird. Bei der Initiative-Verfolgung sind NSC typischerweise Gegner oder neutrale Kreaturen in der Begegnung.',
        },
        {
          term: 'SC',
          definition: 'Spieler-Charakter, der von einem der Spieler am Tisch gesteuert wird. SC werden im Verfolger von NSC unterschieden, damit der SL freundliche Ziele erkennen kann.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wann die Initiative jede Runde neu würfeln?',
      icon: 'mdi:information-outline',
      badge: 'SL-TIPP',
      html: 'Manche SL würfeln die Initiative lieber jede Runde neu für Unvorhersehbarkeit, während die meisten aus Einfachheit dieselbe Reihenfolge beibehalten. Wenn ein neuer Kämpfer mitten im Kampf dazustößt, würfle seine Initiative und füge ihn an der aktuellen Position ein. Der Verfolger erledigt dies automatisch. Für Boss-Begegnungen solltest du dem Schurken eine feste Initiative zu einem bestimmten Wert geben, damit der Kampf strukturierter wirkt.',
    },
  ],
  faq: [
    {
      question: 'Wie füge ich Kämpfer zur Initiative-Reihenfolge hinzu?',
      answer: 'Gib den Charakternamen, den Initiative-Wurf und den Initiative-Modifikator ein und klicke dann auf Hinzufügen. Wechsle zwischen Spieler- und NSC-Typen, um Gruppenmitglieder optisch von Gegnern in der Liste zu unterscheiden.',
    },
    {
      question: 'Was passiert, wenn ich auf Kampf beginnen klicke?',
      answer: 'Alle Kämpfer werden nach Initiative vom höchsten zum niedrigsten Wert sortiert. Die Zugreihenfolge beginnt von oben, der Runden-Zähler startet bei 1 und der aktive Kämpfer wird mit einem grünen Leuchten hervorgehoben.',
    },
    {
      question: 'Wie verfolge ich Statuseffekte während des Kampfes?',
      answer: 'Klicke auf ein Status-Tag (Betäubt, Vergiftet, Geblendet usw.), um es für den ausgewählten Kämpfer ein- oder auszuschalten. Aktive Status erscheinen neben dem Charakternamen. So werden alle an laufende Effekte erinnert, wenn dieser Kämpfer an der Reihe ist.',
    },
    {
      question: 'Bleiben meine Kampfdaten erhalten, wenn ich die Seite aktualisiere?',
      answer: 'Ja. Der Initiativen Verfolger speichert den Kampfzustand im lokalen Speicher deines Browsers. Deine Kämpfer, Zugreihenfolge und Statuseffekte bleiben nach einem Seitenneuladen erhalten. Die Daten werden gelöscht, wenn du auf Kampf beenden klickst.',
    },
    {
      question: 'Kann ich zum vorherigen Zug zurückgehen?',
      answer: 'Ja. Der Button Vorheriger Zug ermöglicht es dir, rückwärts durch die Zugreihenfolge zu navigieren. Dies ist nützlich, um nachzusehen, was früher in der Runde passiert ist, oder um einen Fehler zu korrigieren.',
    },
    {
      question: 'Kann ich während des Kampfes Kämpfer hinzufügen oder entfernen?',
      answer: 'Ja. Neue Kämpfer können jederzeit hinzugefügt werden und werden automatisch an der richtigen Position basierend auf ihrem Initiative-Wurf eingefügt. Vorhandene Kämpfer können entfernt werden, wenn sie die Begegnung verlassen.',
    },
    {
      question: 'Funktioniert dies mit jedem RPG-System?',
      answer: 'Ja. Der Verfolger funktioniert mit jedem Tabletop-RPG, das eine initiativebasierte Zugreihenfolge verwendet. Gib einfach die Initiative-Werte ein, die dein System verwendet, sei es ein d20-Wurf plus Dex für D&D oder eine andere Mechanik für andere Spiele.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Kämpfer vor dem Kampf hinzufügen',
      text: 'Gib für jeden Charakter den Namen, den Initiative-Wurf und den Modifikator ein. Markiere sie als Spieler oder NSC. Füge so viele Kämpfer hinzu, wie deine Begegnung benötigt.',
    },
    {
      name: 'Kampf beginnen, um die Reihenfolge festzulegen',
      text: 'Klicke auf Kampf beginnen, um alle nach Initiative zu sortieren und die Zugverfolgung zu starten. Der erste Kämpfer in der Reihenfolge wird hervorgehoben.',
    },
    {
      name: 'Züge navigieren und Zustände verfolgen',
      text: 'Verwende Nächster Zug und Vorheriger Zug, um durch die Reihenfolge zu gehen. Wende Statuseffekte durch Klicken auf die Status-Tags an, um Zustände während des Kampfes zu verfolgen.',
    },
    {
      name: 'Kampf beenden, wenn fertig',
      text: 'Klicke auf Kampf beenden, um die Zugverfolgung zu stoppen. Dies löscht den aktiven Status und setzt den Runden-Zähler zurück, während die Kämpferliste für die nächste Begegnung erhalten bleibt.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'RPG Initiativen Verfolger',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie füge ich Kämpfer hinzu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gib den Charakternamen, den Initiative-Wurf und den Initiative-Modifikator ein und klicke dann auf Hinzufügen. Spieler und NSC können umgeschaltet werden, um sie in der Liste zu unterscheiden.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was passiert, wenn ich auf Kampf beginnen klicke?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Alle Kämpfer werden nach Initiative sortiert (höchster zuerst). Die Zugreihenfolge beginnt mit dem ersten Kämpfer und ein Runden-Zähler startet bei 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So verwendest du den Initiativen Verfolger',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Kämpfer hinzufügen',
          'text': 'Gib die Charakterdetails einschließlich Name, Initiative-Wurf und Modifikator ein. Wechsle zwischen Spieler- und NSC-Typen vor dem Hinzufügen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kampf beginnen',
          'text': 'Klicke auf Kampf beginnen, um alle Kämpfer nach Initiative zu sortieren und die Zugreihenfolge-Verfolgung zu starten.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Züge verwalten',
          'text': 'Verwende Nächster Zug und Vorheriger Zug, um durch die Zugreihenfolge zu navigieren. Der aktive Kämpfer wird mit einem grünen Leuchten hervorgehoben.',
        },
      ],
    },
  ],
};



