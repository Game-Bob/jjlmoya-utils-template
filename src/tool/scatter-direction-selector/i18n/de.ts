import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Streuwahl Richtung',
  setupTitle: 'Streueinstellungen',
  sectorsLabel: 'Kompasssektoren',
  sectors8: '8 Richtungen',
  sectors12: '12 Richtungen (Uhr)',
  diceLabel: 'Abweichungsdistanz',
  diceD6: '1W6 Zoll',
  dice2D6: '2W6 Zoll',
  diceD10: '1W10 Zoll',
  diceCustom: 'Benutzerdefinierter Bereich',
  customMaxLabel: 'Maximale Distanz',
  hitChanceLabel: 'Direkttrefferwahrscheinlichkeit (%)',
  rollButton: 'Streuwurf',
  hitResult: 'Direkttreffer!',
  scatterResult: 'Streuung!',
  distanceLabel: 'Distanz',
  angleLabel: 'Winkel',
  dragHint: 'Ziehe den Kompass, um die Windrichtung manuell einzustellen',
  historyTitle: 'Letzte Würfe',
  clearHistory: 'Verlauf löschen',
  presetTitle: 'Wargaming-Voreinstellungen',
  soundOn: 'Sound an',
  soundOff: 'Sound aus',
  guideStep1: 'Ziehe den Kompass, um ihn an deiner Tischausrichtung auszurichten',
  guideStep2: 'Wähle Sektoren, Würfel und Direkttrefferchance',
  guideStep3: 'Mitte = dein Ziel. Grünes Leuchten bedeutet Volltreffer',
  guideStep3Scatter: 'Pfeil = Abweichungsrichtung. Versetze den Schuss von der Mitte um die angegebenen Zoll entlang des Pfeils',
  scatterModeLabel: 'Streurichtung',
  scatterModeRandom: 'Zufällig',
  scatterModeWind: 'Winddrift',
  scatterModeWindHint: 'Der Pfeil folgt immer dem Kompass - nur die Distanz ist zufällig',
};

const faq = [
  {
    question: 'Wie funktioniert der Streuwahl Richtung-Wähler?',
    answer: 'Er berechnet einen zufälligen Winkel (0-359 Grad) und eine Distanz basierend auf der gewählten Würfelkonfiguration. Außerdem simuliert er einen Streuwürfel und prüft auf Direkttreffer.',
  },
  {
    question: 'Kann ich das Sektorformat ändern?',
    answer: 'Ja, du kannst zwischen 8-Richtungs-Kardinalsektoren und 12-Richtungs-Uhrzeitsektoren umschalten.',
  },
  {
    question: 'Was ist die Direkttrefferwahrscheinlichkeit?',
    answer: 'Sie gibt die Chance an, dass das Projektil genau dort landet, wo gezielt wurde, ohne Abweichung. Dies simuliert ein "Treffer"-Ergebnis eines normalen Streuwürfels.',
  },
  {
    question: 'Ist das mit Warhammer oder Bolt Action kompatibel?',
    answer: 'Ja, es unterstützt die üblichen 8-Richtungs-Kardinalvorlagen und 12-Richtungs-Uhrzeitausrichtungen der meisten taktischen Tabletop-Spiele.',
  },
  {
    question: 'Was zeigt die Projektilbahn-Animation?',
    answer: 'Ein leuchtendes Projektil fliegt von der Kompassmitte zum Streulandeplatz und hinterlässt eine gestrichelte Spur. Bei einem Direkttreffer bleibt das Projektil zentriert und grüne Ringe breiten sich pulsend aus.',
  },
  {
    question: 'Wie wird die Streudistanz visuell dargestellt?',
    answer: 'Die Distanz in Zoll erscheint als schwebende Markierung am Einschlagpunkt entlang der Abweichungsrichtung. Der rote Kompasspfeil fixiert sich auf den endgültigen Winkel für eine schnelle Schablonenausrichtung.',
  },
  { question: 'Wie wird die Streurichtung bestimmt?', answer: 'Das Tool kombiniert das gewählte Sektorsystem mit dem Würfelwurf und der eingestellten Abweichungsdistanz.' },
  { question: 'Kann ich Winddrift verwenden?', answer: 'Ja, im Winddrift-Modus folgt die Richtung dem gedrehten Kompass, während die Entfernung zufällig bleibt.' },
];

const howTo = [
  {
    name: 'Regeln konfigurieren',
    text: 'Wähle Kompasssektoren, einen Distanzwürfel und stelle die Direkttrefferwahrscheinlichkeit ein.',
  },
  {
    name: 'Würfeln oder Ziehen',
    text: 'Klicke auf Streuwurf, um die Abweichung zu simulieren, oder ziehe am Kompassrad, um die Richtung manuell anzupassen.',
  },
  {
    name: 'Ergebnis ablesen',
    text: 'Überprüfe die zentrale Anzeige und den Vektorpfeil, um die genaue Distanz, den Winkel und die Richtung der Streuung zu ermitteln.',
  },
  {
    name: 'Bahn beobachten',
    text: 'Beobachte nach dem Wurf das animierte Projektil über den Kompass fliegen. Die gestrichelte Spur zeigt den Abweichungspfad, und der Einschlagpunkt zeigt die Distanz in Zoll an.',
  },
  {
    name: 'Ergebnis interpretieren',
    text: 'Ein grüner Puls mit "DIRECT HIT" bedeutet keine Abweichung. Eine rote Explosion mit Distanzangabe bedeutet Streuung  -  platziere deine Schablone in Pfeilrichtung in dieser Entfernung vom Ziel.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'streuwahl-richtung',
  title: 'Streuwahl Richtung: Taktischer Kompass für Tabletop Wargames',
  description: 'Ermittle zufällige Abweichungen, Winddrift und Streurichtungen für Miniaturen-Wargames mit einem taktilen 3D-Kompass.',
  ui,
  seo: [
    { type: 'title', text: 'Interaktiver Streukompass mit Echtzeit Projektilanimation', level: 2 },
    { type: 'paragraph', html: 'Der Streuwahl Richtung-Wähler geht über die reine Zahlengenerierung hinaus, indem er eine animierte Projektilbahn direkt auf der Kompassüberlagerung darstellt. Beim Klicken auf Streuwurf fliegt ein leuchtendes Projektil vom Zentrum entlang des Abweichungswinkels, hinterlässt eine gestrichelte Spur und zerplatzt am Einschlagpunkt in Partikel. Dies vereinfacht die Bestimmung von Fehlschüssen bei Artillerie und Zaubern im Tabletop-Spiel erheblich.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sektorsysteme', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Würfelvoreinstellungen', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Trefferwahrscheinlichkeit', icon: 'mdi:target' },
      { value: '10', label: 'Letzte Würfe', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Wie die Flugbahn Animation die Entscheidungsfindung beim Wargaming verbessert', level: 3 },
    { type: 'paragraph', html: 'Herkömmliche Streuwerkzeuge zeigen nur einen numerischen Winkel und eine Distanz an, sodass Spieler den Versatz auf dem Spieltisch mental visualisieren müssen. Die animierte Bahn schließt diese Lücke, indem sie den exakten Flugweg vom Zielpunkt bis zur Streulandszone anschaulich einzeichnet. Das beschleunigt den Spielfluss und vermeidet Regeldissense am Spielfeldrand.' },
    { type: 'diagnostic', variant: 'success', title: 'Direkttreffer', html: 'Wenn der Wurf die Trefferwahrscheinlichkeit übertrifft, erstrahlt die Kompassmitte in pulsierenden grünen Ringen und einer "DIRECT HIT"-Textanimation. Das Projektil kehrt zur Mitte zurück und bestätigt einen perfekten Treffer ohne jegliche Abweichung.' },
    { type: 'diagnostic', variant: 'error', title: 'Streuung', html: 'Bei einem Streuergebnis folgt das Projektil einer gestrichelten Bahn zum Einschlagspunkt. Eine Partikelexplosion, eine leuchtende Markierung und die genaue Distanz in Zoll (z. B. <strong>5"</strong>) erscheinen am Landeort, um das Ausmessen der Schablone sofort zu ermöglichen.' },
    { type: 'tip', title: 'Profi Tipp: Winddrift Modus nutzen', html: 'Aktiviere den Winddrift-Modus, um die Streurichtung auf den manuell eingestellten Kompasswinkel zu fixieren. Dies simuliert vorherrschenden Wind oder einen festen Verschiebungsvektor  -  ideal für ungelenkte Raketen, Gaswolken, Zaubersprüche oder fehlgeschlagene Teleportationen.' },
    { type: 'title', text: 'Streuung in Tabletop Spielen auflösen', level: 2 },
    { type: 'paragraph', html: 'Viele Wargames und Pen-and-Paper-Systeme verwenden Abweichungen, um Artillerie, Mörserfeuer, Abdrift von Gasgranaten oder fehlgeschlagene Teleportationen unvorhersehbar und realistisch zu gestalten. Mit flexiblen Würfeloptionen wie 1W6, 2W6 oder 1W10 lässt sich jedes Regelwerk punktgenau abbilden.' },
    { type: 'table', headers: ['System / Szenario', 'Typischer Würfel', 'Abweichungsmodus', 'Taktische Auswirkung'], rows: [['Artillerie & Mörser', '2W6 Zoll', '8 Sektoren + Hit %', 'Zufällige Streuung um den Zielpunkt'], ['Winddrift / Gas', '1W6 Zoll', 'Winddrift (Fester Winkel)', 'Verschiebung ausschließlich in Windrichtung'], ['Teleportations-Patzer', '1W10 Zoll', '12 Uhrzeit-Sektoren', 'Rundherum zufällige Fehllandung']] },
    { type: 'title', text: 'Taktischer Umgang mit Wind und Abweichung', level: 2 },
    { type: 'paragraph', html: 'Eine einstellbare Trefferwahrscheinlichkeit hilft dabei, die Zuverlässigkeit einer erfahrenen Crew im Vergleich zu Rokie-Einheiten abzubilden und die Messung am Spieltisch spürbar zu beschleunigen. So bleibt mehr Zeit für die strategischen Entscheidungen der Generäle.' },
    { type: 'comparative', items: [{ title: 'Streuung in Tabletop Spielen auflösen', description: 'Viele Wargames verwenden Abweichungen, um Artillerie, Winddrift oder fehlgeschlagene Teleportationen unvorhersehbar zu machen. Ein digitaler Streukompass eliminiert das Verrutschen von physischen Würfeln auf dem Spielfeld.', icon: 'mdi:compass-outline', highlight: true, points: ['Taktischer Umgang mit Wind und Abweichung', 'Schnelles Ausmessen ohne Reibungsverluste', 'Genaue Vektor-Visualisierung'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Taktischer Umgang mit Wind und Abweichung', definition: 'Eine Trefferwahrscheinlichkeit hilft, die Zuverlässigkeit einer Einheit einzuschätzen und die Messung am Spieltisch zu beschleunigen.' }] },
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
      'name': 'Streuwahl Richtung',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So verwendest du den Streuwahl Richtung-Wähler',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
