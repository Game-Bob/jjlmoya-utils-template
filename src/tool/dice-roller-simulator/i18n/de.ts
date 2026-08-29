import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'wuerfel-rechner-wahrscheinlichkeit',
  title: 'Würfelrechner und Wahrscheinlichkeitssimulator',
  description: 'Werfen Sie virtuelle polyedrische Würfel (D4, D6, D8, D10, D12, D20, D100), fügen Sie Modifikatoren hinzu und sehen Sie Live-Statistiken sowie Wahrscheinlichkeiten für Tabletop und Brettspiele.',
  ui: {
    title: 'Würfelrechner und Wahrscheinlichkeitssimulator',
    rollButton: 'Würfel werfen',
    clearButton: 'Verlauf löschen',
    historyTitle: 'Wurfverlauf',
    noHistory: 'Noch keine Würfe aufgezeichnet. Fügen Sie Würfel hinzu und klicken Sie auf Würfeln, um zu starten.',
    totalRolls: 'Würfe insgesamt',
    averageRoll: 'Durchschnittliches Ergebnis',
    lastRoll: 'Letztes Wurfergebnis',
    modifierLabel: 'Modifikator (+/-)',
    probabilityTitle: 'Wahrscheinlichkeitsanalyse',
    selectDice: 'Würfel zum Werfen auswählen',
  },
  seo: [
    { type: 'title', text: 'Die Kontrolle über die Tabletop-Wahrscheinlichkeiten: Wie Würfel-Wahrscheinlichkeiten Ihr Spiel prägen', level: 2 },
    { type: 'paragraph', html: 'Polyedrische Würfel sind das Herzstück von Rollenspielen und modernen Brettspielen. Ob Sie einen Rettungswurf in Dungeons & Dragons machen oder Ressourcen erwürfeln, das Ergebnis wird durch mathematische Wahrscheinlichkeiten bestimmt. Zu verstehen, wie die Kombination verschiedener Würfel Ihre Gewinnchancen beeinflusst, ist entscheidend für taktische Entscheidungen im Spiel.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Chance auf eine natürliche 20' },
        { value: '10.5', label: 'Durchschnitt von 3d6' },
        { value: '9.75%', label: 'Natürliche 20 bei Vorteil' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Die Mathematik hinter mehreren Würfeln: Warum 3d6 sicherer ist als 1d20', level: 2 },
    { type: 'paragraph', html: 'Wenn Sie einen einzelnen D20 werfen, hat jedes Ergebnis von 1 bis 20 die gleiche Wahrscheinlichkeit von 5%, was eine flache Wahrscheinlichkeitsverteilung ergibt. Bei mehreren Würfeln wie 3d6 sammeln sich die Ergebnisse jedoch um den Durchschnittswert von 10.5. Diese Glockenkurve bedeutet, dass ein moderates Ergebnis weitaus wahrscheinlicher ist als extreme Werte, was für Konsistenz sorgt und die Unberechenbarkeit einzelner Würfelwürfe verringert.' },
    { type: 'title', text: 'D20-Wahrscheinlichkeiten erklärt: Kritische Treffer, Patzer und Modifikatoren', level: 2 },
    { type: 'paragraph', html: 'Ein einfacher Modifikator von plus zwei kann die Erfolgswahrscheinlichkeit drastisch verändern und schwierige Aufgaben in überschaubare Herausforderungen verwandeln. In vielen Spielsystemen stellt eine natürliche 20 einen automatischen kritischen Treffer dar (5% Chance), während eine natürliche 1 ein kritischer Fehler (Patzer) ist. Die Visualisierung dieser Ergebnisse hilft dabei, den Zufall zu entmystifizieren und taktische Züge statistisch abzusichern.' },
    {
      type: 'title',
      text: 'Referenztabelle für Standard-Polyederwürfel',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Würfeltyp', 'Minimaler Wurf', 'Maximaler Wurf', 'Durchschnittliches Ergebnis', 'Hauptrolle in Tabletop-RPGs'],
      rows: [
        ['D4', '1', '4', '2.5', 'Magische Geschosse, Dolche, kleinere Gefahren'],
        ['D6', '1', '6', '3.5', 'Feuerbälle, Standardschwerter, Attributsprüfungen'],
        ['D8', '1', '8', '4.5', 'Langschwerter, Heilzauber, mittlere Waffen'],
        ['D10', '1', '10', '5.5', 'Hellebarden, Zaubertrick-Schaden, Prozentzehner'],
        ['D12', '1', '12', '6.5', 'Zweihändige Äxte, Barbaren-Trefferpunkte'],
        ['D20', '1', '20', '10.5', 'Rettungswürfe, Angriffswürfe, Fertigkeitsproben'],
        ['D100', '1', '100', '50.5', 'Prozenttabellen, wilde Magieeffekte'],
      ],
    },
    {
      type: 'tip',
      title: 'Die Berechnung von Durchschnittswerten im Kopf',
      html: 'Um den Durchschnitt eines Würfels zu berechnen, addieren Sie den Mindest- (1) und Höchstwert und teilen Sie das Ergebnis durch 2. Beispiel D6: (1 + 6) / 2 = 3.5. Bei mehreren Würfeln multiplizieren Sie den Durchschnitt mit der Anzahl der Würfel (3d6: 3 * 3.5 = 10.5). Ein Modifikator wird einfach addiert (3d6 + 4: 10.5 + 4 = 14.5).',
    },
    {
      type: 'title',
      text: 'Vergleich von flachen und gekurvten Würfelsystemen',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'D20 System vs. 3d6 Glockenkurvensystem',
      items: [
        {
          pro: 'D20-Systeme sind schnell zu berechnen und haben eine konstante Chance von 5% für kritische Erfolge und Patzer.',
          con: 'D20-Ergebnisse sind sehr unbeständig, wodurch die Fähigkeiten eines Charakters weniger wiegen als das Glück.',
        },
        {
          pro: '3d6-Glockenkurven bevorzugen durchschnittliche Ergebnisse, sodass kompetente Charaktere einfache Aufgaben selten verfehlen.',
          con: '3d6-Systeme erfordern das Addieren dreier Würfel und machen kritische Erfolge (eine glatte 18) extrem selten (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wahrscheinlichkeitsmechaniken verstehen',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'D20 System Linear',
          description: 'Nutzt einen einzelnen 20-seitigen Würfel für Aktionen, bei dem jedes Ergebnis die gleiche Chance von 5% hat. Hohe Varianz und Unvorhersehbarkeit sorgen für Nervenkitzel, mindern aber die Planbarkeit.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Flache Chance von 5% pro Ergebnis',
            'Hohe Varianz und Schwankung',
            'Modifikatoren wirken sich linear aus',
          ],
        },
        {
          title: '3d6 System Glockenkurve',
          description: 'Summiert drei 6-seitige Würfel und erzeugt eine Normalverteilung mit dem Mittelpunkt 10.5. Die Ergebnisse sind sehr beständig, was extreme Ausreißer selten macht.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Mittlere Ergebnisse sind sehr wahrscheinlich',
            'Extreme Ergebnisse sind äußerst selten',
            'Modifikatoren haben nicht-lineare Auswirkungen',
          ],
        },
        {
          title: 'Prozentsystem (Unterwürfeln)',
          description: 'Verwendet zwei 10-seitige Würfel für Werte zwischen 1 und 100. Das Ziel ist es, unter dem Wert des Charakters zu bleiben, was die Erfolgsschancen direkt anzeigt.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Direkte Erfolgsquote in Prozent',
            'Auf den ersten Blick verständlich',
            'Fortschritt ist mathematisch klar ersichtlich',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Spielerfehlschluss: Warum Würfel kein Gedächtnis haben',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Ein häufiger Irrglaube im Tabletop-Gaming ist, dass vergangene Würfe zukünftige Ergebnisse beeinflussen. Wenn Sie dreimal hintereinander eine "1" auf einem D20 würfeln, haben Sie vielleicht das Gefühl, dass eine hohe Zahl "überfällig" ist. Tatsächlich ist jeder Wurf ein unabhängiges Ereignis. Die Wahrscheinlichkeit, beim nächsten Mal eine 20 zu würfeln, liegt immer noch bei genau 5%. Dies zu wissen hilft Spielern, objektive Entscheidungen zu treffen.',
    },
    {
      type: 'title',
      text: 'Würfel- und Wahrscheinlichkeits-Glossar',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Vorteil & Nachteil',
          definition: 'Ein Mechanismus, bei dem zwei D20 gewürfelt werden und das höhere (Vorteil) oder das niedrigere (Nachteil) Ergebnis zählt. Vorteil verschiebt den Schnitt von 10.5 auf 13.8.',
        },
        {
          term: 'Glockenkurve (Normalverteilung)',
          definition: 'Eine Verteilung, bei der sich die Ergebnisse um den Mittelwert häufen. Dies tritt beim Summieren mehrerer Würfel auf (wie 3d6 oder 2d10).',
        },
        {
          term: 'Kritischer Treffer',
          definition: 'Ein automatischer Erfolg, der in der Regel durch das Würfeln der maximalen Augenzahl erzielt wird (eine natürliche 20 auf einem D20).',
        },
        {
          term: 'Kritischer Fehler (Patzer)',
          definition: 'Ein automatischer Fehlschlag mit oft humorvollen oder katastrophalen Folgen, ausgelöst durch eine 1 auf einem D20.',
        },
        {
          term: 'Erwartungswert',
          definition: 'Das langfristige durchschnittliche Ergebnis Ihrer Würfe. Für einen einzelnen D6 beträgt der Erwartungswert 3.5, für einen D20 liegt er bei 10.5.',
        },
        {
          term: 'Prozentwürfel',
          definition: 'Zwei D10-Würfel (einer für Zehner, einer für Einer), die zusammen gewürfelt ein Ergebnis von 1 bis 100 liefern.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Wie funktioniert der Wahrscheinlichkeits-Simulator?',
      answer: 'Er berechnet die exakte Wahrscheinlichkeitsverteilung für die ausgewählte Würfelkombination und den Modifikator, sodass Sie die prozentuale Chance sehen, über oder unter bestimmten Werten zu liegen.',
    },
    {
      question: 'Welche Würfel werden unterstützt?',
      answer: 'Alle gängigen polyedrischen Würfel für Tabletop-RPGs und Brettspiele: D4, D6, D8, D10, D12, D20 und D100.',
    },
    {
      question: 'Was sind Modifikatoren und wie funktionieren sie?',
      answer: 'Modifikatoren sind feste Werte (+1, -2 usw.), die zum Wurfergebnis hinzugefügt oder abgezogen werden, um Boni oder Abzüge des Charakters darzustellen.',
    },
    {
      question: 'Was bedeutet das Würfeln mit Vorteil oder Nachteil?',
      answer: 'Würfeln mit Vorteil bedeutet, dass Sie zwei D20 werfen und das höhere Ergebnis wählen. Bei Nachteil werfen Sie ebenfalls zwei D20 und nehmen das niedrigere. Dies ist eine bekannte Mechanik in Tabletop-Rollenspielen.',
    },
    {
      question: 'Was sind kritische Treffer und Patzer?',
      answer: 'Ein kritischer Treffer tritt auf, wenn ein Würfel seine maximale Augenzahl zeigt (z. B. eine natürliche 20 auf dem D20), was zu einem automatischen Erfolg führt. Ein Patzer ist eine gewürfelte 1 und bedeutet automatischen Fehlschlag.',
    },
    {
      question: 'Wie berechnet der Simulator die Wurfwahrscheinlichkeiten?',
      answer: 'Der Simulator analysiert mathematisch jede mögliche Kombination Ihrer Würfel und Modifikatoren. Daraus berechnet er den exakten Prozentsatz für jedes Gesamtergebnis.',
    },
    {
      question: 'Warum ist ein Wurf mit 3d6 konstanter als mit einem einzelnen D20?',
      answer: 'Ein D20 bietet für jedes Ergebnis eine flache Chance von 5%. Bei 3d6 bildet sich eine Glockenkurve, wodurch Werte nahe 10.5 sehr wahrscheinlich sind, während extreme Werte extrem selten vorkommen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Würfel hinzufügen',
      text: 'Klicken Sie auf die Würfel-Symbole, um sie zu Ihrem Wurfpool hinzuzufügen.',
    },
    {
      name: 'Modifikator eingeben',
      text: 'Geben Sie einen positiven oder negativen Wert ein, der zum Gesamtergebnis addiert wird.',
    },
    {
      name: 'Würfeln und Statistik prüfen',
      text: 'Klicken Sie auf Würfeln, um die Animationen, den Verlauf und die Wahrscheinlichkeitsanalyse zu sehen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Würfelrechner und Wahrscheinlichkeitssimulator',
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
          'name': 'Wie funktioniert der Wahrscheinlichkeits-Simulator?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Er berechnet die exakte Wahrscheinlichkeitsverteilung für die ausgewählte Würfelkombination und den Modifikator, sodass Sie die prozentuale Chance sehen, über oder unter bestimmten Werten zu liegen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Welche Würfel werden unterstützt?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Alle gängigen polyedrischen Würfel für Tabletop-RPGs und Brettspiele: D4, D6, D8, D10, D12, D20 und D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Was sind Modifikatoren und wie funktionieren sie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modifikatoren sind feste Werte (+1, -2 usw.), die zum Wurfergebnis hinzugefügt oder abgezogen werden, um Boni oder Abzüge des Charakters darzustellen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Was bedeutet das Würfeln mit Vorteil oder Nachteil?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Würfeln mit Vorteil bedeutet, dass Sie zwei D20 werfen und das höhere Ergebnis wählen. Bei Nachteil werfen Sie ebenfalls zwei D20 und nehmen das niedrigere. Dies ist eine bekannte Mechanik in Tabletop-Rollenspielen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Was sind kritische Treffer und Patzer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ein kritischer Treffer tritt auf, wenn ein Würfel seine maximale Augenzahl zeigt (z. B. eine natürliche 20 auf dem D20), was zu einem automatischen Erfolg führt. Ein Patzer ist eine gewürfelte 1 und bedeutet automatischen Fehlschlag.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wie berechnet der Simulator die Wurfwahrscheinlichkeiten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der Simulator analysiert mathematisch jede mögliche Kombination Ihrer Würfel und Modifikatoren. Daraus berechnet er den exakten Prozentsatz für jedes Gesamtergebnis.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Warum ist ein Wurf mit 3d6 konstanter als mit einem einzelnen D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ein D20 bietet für jedes Ergebnis eine flache Chance von 5%. Bei 3d6 bildet sich eine Glockenkurve, wodurch Werte nahe 10.5 sehr wahrscheinlich sind, während extreme Werte extrem selten vorkommen.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Würfel hinzufügen',
          'text': 'Klicken Sie auf die Würfel-Symbole, um sie zu Ihrem Wurfpool hinzuzufügen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Modifikator eingeben',
          'text': 'Geben Sie einen positiven oder negativen Wert ein, der zum Gesamtergebnis addiert wird.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Würfeln und Statistik prüfen',
          'text': 'Klicken Sie auf Würfeln, um die Animationen, den Verlauf und die Wahrscheinlichkeitsanalyse zu sehen.'
        }
      ]
    }
  ],
};
