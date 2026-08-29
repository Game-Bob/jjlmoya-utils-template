import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'mondphasen-gezeiten-rechner',
  title: 'Mondphasenrechner für Tabletop RPG: Eigene Fantasiemonde und Gezeitenzyklen berechnen',
  description: 'Mondphasen für jede Fantasywelt mit eigenen Umlaufzeiten berechnen. Bis zu drei Monde gleichzeitig verfolgen, 10-Tage-Prognosen abrufen und einen Gezeitenstand für Magie- und Wettersysteme in D&D, Pathfinder oder anderen Rollenspielen ermitteln.',
  ui: {
    title: 'Mondphasen und Gezeitenrechner',
    moonsTitle: 'Mondkonfiguration',
    addMoon: 'Mond hinzufügen',
    removeMoon: 'Mond entfernen',
    moonName: 'Mondname',
    orbitalPeriod: 'Umlaufzeit (Tage)',
    startingOffset: 'Startversatz (Tage)',
    timelineTitle: 'Zeitsteuerung',
    currentDay: 'Aktueller Kampagnentag',
    tideTitle: 'Mystischer Gezeitenstand',
    tideLevel: 'Gezeitenenergie',
    magicModifier: 'Magischer Gezeiteneffekt',
    forecastTitle: 'Mondphasen- und Gezeitenprognose',
    dayLabel: 'Tag',
    resetButton: 'Auf Tag 0 zurücksetzen',
    presetTitle: 'Kampagnen-Voreinstellungen',
    presetSingle: 'Klassischer Mond',
    presetDouble: 'Zwillingsmonde der Magie',
    presetTriple: 'Dreifaches Finsternisreich',
    newMoon: 'Neumond',
    waxingCrescent: 'Zunehmende Sichel',
    firstQuarter: 'Erstes Viertel',
    waxingGibbous: 'Zunehmender Gibbous',
    fullMoon: 'Vollmond',
    waningGibbous: 'Abnehmender Gibbous',
    lastQuarter: 'Letztes Viertel',
    waningCrescent: 'Abnehmende Sichel',
  },
  seo: [
    { type: 'title', text: 'Mondphasen in Tabletop-Rollenspielen verfolgen', level: 2 },
    { type: 'paragraph', html: 'Die meisten Fantasywelten haben Monde mit anderen Umlaufzeiten als der reale Mond mit seinen 29,5 Tagen. Das Feld <strong>Umlaufzeit</strong> legt fest, wie viele Spieltage ein Mond für einen vollständigen Zyklus benötigt. Die Eberron-Welt verwendet 28 Tage, Mittelerde liegt bei ca. 30. Stellen Sie den Wert so ein, wie es das Lore Ihrer Welt vorgibt, oder wählen Sie einen Wert zwischen 5 und 60 Tagen.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Gleichzeitige Monde' },
        { value: '10', label: 'Tage Prognose' },
        { value: '5', label: 'Gezeitenstufen' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Was der Startversatz bewirkt', level: 2 },
    { type: 'paragraph', html: 'Der <strong>Startversatz</strong> verschiebt die Ausgangsphase eines Mondes am Kampagnentag 0. Ein Versatz von 0 beginnt beim Neumond. Ein Versatz von der Hälfte der Umlaufzeit startet beim Vollmond. Nutzen Sie dies, um die in Ihrer Einstiegsszene beschriebene Phase zu reproduzieren, oder damit zwei Monde nicht immer gleichzeitig stehen.' },
    { type: 'title', text: 'Was der Gezeitenstand im Spiel bedeutet', level: 2 },
    { type: 'paragraph', html: 'Der Gezeitenstand kombiniert die Anziehungskraft aller aktiven Monde anhand ihrer aktuellen Phasen. Eine <strong>Springflut</strong> (über 75%) entsteht, wenn Monde nahezu ausgerichtet sind. Eine <strong>Nipptide</strong> (unter 30%) tritt auf, wenn Monde entgegengesetzte Phasen haben. Binden Sie dies an Spielmechaniken: Rettungswurf-Boni, Werwolf-Verwandlungen oder Sturmschwere auf Küstenkarten.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Einzelner Mond',
          description: 'Ideal für Welten ähnlich der realen Welt oder mit einem dominanten Mond. Einfacher 8-Phasen-Zyklus.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Vergessene Reiche (Selune, 30 Tage)',
            'Werwolf- und Lykanthropie-Kampagnen',
            'Horror-Sitzungen beim Vollmond'
          ]
        },
        {
          title: 'Zwillingsmonde',
          description: 'Häufig in High-Fantasy-Settings. Erzeugt interessante Teilausrichtungen und abwechslungsreiche Gezeiten.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28T + Aryth 12T)',
            'Vorhersagbare Finsterniszeiten',
            'Gut für druidische Magiesysteme'
          ]
        },
        {
          title: 'Drei Monde',
          description: 'Seltene Dreifachausrichtungen erzeugen unvorhersehbare Energieschübe. Dramatisch nützlich für wilde Magieereignisse.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Wilde-Magie-Tabellen bei Ausrichtung',
            'Pathfinder Golarion-Komplexität',
            'Langperiodische Zyklen für epische Kampagnen'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Häufige Umlaufzeiten für Fantasywelten', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Vergessene Reiche)', definition: '30-tägige Umlaufzeit, einzelner Mond. Versatz 15 für Vollmond am ersten Spielabend.' },
        { term: 'Eberron-Monde', definition: 'Eberron hat 12 Monde mit Umlaufzeiten von 9 bis 28 Tagen. Die zwei handlungsrelevantesten als separate Mond-Instanzen verwenden.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion hat einen Mond, Somal, mit einem 29-Tage-Zyklus. Zweiter Mond mit kurzem Zyklus modelliert Finstere Tapisserie-Ereignisse.' },
        { term: 'Eigene Welt', definition: 'Ein 15-Tage-Mond erzeugt 24 Vollmonde pro Spieljahr. Ein 45-Tage-Mond nur 8. Kürzere Zyklen bedeuten häufigere Ereignisse, aber weniger Dramatik.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tipp: Bestimmte Phase für Sitzung 1 einrichten',
      icon: 'mdi:information-outline',
      badge: 'SETUP-TIPP',
      html: 'Für eine Sichel am Spielbeginn: Versatz auf etwa 20 % der Umlaufzeit setzen. Für Vollmond: 50 % der Umlaufzeit als Versatz verwenden. Beispiel: 28-Tage-Mond, Vollmond-Start: Versatz 14. Tageszähler auf den aktuellen Kampagnentag stellen und die Prognose zeigt automatisch die nächsten 10 Tage.'
    }
  ],
  faq: [
    { question: 'Welche Umlaufzeit sollte ich für meine Fantasywelt verwenden?', answer: 'Falls Ihr Setting nichts vorgibt, funktionieren 28 bis 30 Tage gut für einen einzelnen Mond. Für mehrere Monde wählen Sie Zeiten, die keine einfachen Vielfachen voneinander sind, damit Ausrichtungen nicht zu häufig vorkommen.' },
    { question: 'Wie bringe ich zwei Monde an einem bestimmten Kampagnenmoment zur Ausrichtung?', answer: 'Setzen Sie beide Monde auf denselben Versatzwert. Sie richten sich bei jedem gemeinsamen Vielfachen ihrer Umlaufzeiten neu aus. Für versetzten Start gibt der zweite Mond einen Versatz von der Hälfte seiner Umlaufzeit.' },
    { question: 'Was bedeutet Springflut in Spielmechaniken?', answer: 'Springflut bedeutet, dass alle aktiven Monde maximale Gezeitenenergie erzeugen. Nutzen Sie dies für wilde Magieauslöser, verstärkte Heilzauber, schwerere Stürme oder als heilige Nacht für religiöse Fraktionen.' },
    { question: 'Was bedeutet Nipptide in Spielmechaniken?', answer: 'Nipptide tritt auf, wenn Monde sich gegenseitig abschwächen. Gut für Antimagie-Effekte, Totenstille auf See oder für Antagonisten, die verlässliche Magieunterdrückung für ihre Pläne benötigen.' },
    { question: 'Kann ich dies für Cthulhu- oder Horror-Kampagnen verwenden?', answer: 'Ja. Einen 29-Tage-Mond verwenden und Versatz so setzen, dass der Vollmond auf den Sitzungshöhepunkt fällt. Der Gezeitenstand kann Mythos-Einfluss oder Höhepunkte der psychischen Empfindlichkeit darstellen.' },
    { question: 'Wie funktioniert die 10-Tage-Prognose?', answer: 'Die Prognose zeigt die Mondphase jedes aktiven Mondes als farbigen Punkt für jeden der nächsten 10 Kampagnentage. Der Prozentsatz ist der kombinierte Gezeitenstand. Hohe Werte eignen sich für dramatische Begegnungen.' },
    { question: 'Kann ich einen Mond mit sehr kurzem Zyklus, z. B. 7 Tagen, verfolgen?', answer: 'Ja. Umlaufzeit auf 7 setzen. Der Mond durchläuft alle 8 Phasen in einer Spielwoche. Nützlich für magische Systeme, die wöchentlich zurückgesetzt werden.' },
    { question: 'Wie gleiche ich die Mondphase aus einem veröffentlichten Abenteuermodul ab?', answer: 'Bestimmen Sie, welcher Phase im Abenteuer der beschriebene Zustand entspricht, und teilen Sie diesen Tageszähler durch die Umlaufzeit. Beispiel: Halbmond am Tag 0 eines 28-Tage-Mondes bedeutet Versatz 7.' }
  ],
  bibliography,
  howTo: [
    { name: 'Umlaufzeit festlegen', text: 'Anzahl der Spieltage eingeben, die der Mond für einen vollständigen Zyklus benötigt.' },
    { name: 'Startversatz festlegen', text: 'Startphase durch einen Tagesversatz verschieben. Hälfte der Umlaufzeit entspricht Vollmond-Start.' },
    { name: 'Tageszähler vorrücken', text: 'Schaltflächen oder Schieberegler auf den aktuellen Kampagnentag stellen und Phase sowie Gezeitenstand ablesen.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Mondphasenrechner für Tabletop RPG: Eigene Fantasiemonde und Gezeitenzyklen berechnen',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Welche Umlaufzeit sollte ich für meine Fantasywelt verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Falls Ihr Setting nichts vorgibt, funktionieren 28 bis 30 Tage gut für einen einzelnen Mond. Für mehrere Monde wählen Sie Zeiten, die keine einfachen Vielfachen voneinander sind.' } },
        { '@type': 'Question', 'name': 'Was bedeutet Springflut in Spielmechaniken?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Springflut bedeutet maximale Gezeitenenergie. Nutzen Sie dies für wilde Magieauslöser, verstärkte Heilzauber oder als heilige Nacht für religiöse Fraktionen.' } }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Mondphasen in einer Tabletop-RPG-Kampagne verfolgen',
      'step': [
        { '@type': 'HowToStep', 'name': 'Umlaufzeit festlegen', 'text': 'Anzahl der Spieltage eingeben, die der Mond für einen vollständigen Zyklus benötigt.' },
        { '@type': 'HowToStep', 'name': 'Startversatz festlegen', 'text': 'Startphase durch einen Tagesversatz verschieben.' },
        { '@type': 'HowToStep', 'name': 'Tageszähler vorrücken', 'text': 'Schieberegler auf den aktuellen Kampagnentag stellen und Phase ablesen.' }
      ]
    }
  ]
};
export default content;
