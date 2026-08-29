import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Stellen Sie Gruppe und Bedrohung ein. Der Rechner gleicht die Begegnung mit den D&D 5e 2014 Schwellenwerten ab.',
  partySection: 'Die Gruppe',
  partyLevel: 'Charakterstufe',
  partyLevelHint: 'Verwenden Sie eine Stufe für Gruppen mit ähnlicher Charakterstufe.',
  partySize: 'Charaktere',
  partySizeHint: 'Die Regeln passen den Monster-Multiplikator für sehr kleine oder große Gruppen an.',
  threatSection: 'Die Bedrohung',
  monsterCr: 'Herausforderungsgrad (CR)',
  monsterCrHint: 'Wählen Sie den CR eines Monsters. Gemischte Gruppen erfordern eine eigene Berechnung.',
  moreCr: 'Höhere CR anzeigen',
  lessCr: 'Weniger CR anzeigen',
  monsterCount: 'Anzahl der Monster',
  monsterCountHint: 'Mehr Kreaturen erhöhen den Aktionsdruck selbst bei moderater Basis-XP.',
  presets: 'Mit einer Szene starten',
  presetClassic: 'Klassische Patrouille',
  presetBoss: 'Boss alleine',
  presetSwarm: 'Horde von Dienern',
  resultSection: 'Begegnungsdruck',
  belowEasyHint: 'Eine leichte Szene zur Ressourcenschonung für spätere Herausforderungen.',
  easyHint: 'Eine überschaubare Szene mit geringem Druck auf die Gruppe.',
  mediumHint: 'Eine spürbare Prüfung, die Trefferpunkte oder Ressourcen kosten kann.',
  hardHint: 'Eine gefährliche Szene, in der Taktik und Ressourcenwahl entscheiden.',
  deadlyHint: 'Signal für tödlichen Druck. Prüfen Sie Fluchtwege, Gelände und Fehlerkosten.',
  adjustedXp: 'Angepasste XP',
  baseXp: 'Basis-XP',
  multiplier: 'Gruppen-Multiplikator',
  partyThreshold: 'Mittlere Schwelle',
  belowEasy: 'Unter Leicht',
  easy: 'Leicht',
  medium: 'Mittel',
  hard: 'Schwer',
  deadly: 'Tödlich',
  warning: 'Hinweis',
  partyAdjustment: 'Der Multiplikator wurde angepasst, da die Gruppe weniger als drei oder mehr als fünf Charaktere umfasst.',
  highCr: 'Ein Monster mit höherem CR als die Gruppenstufe kann Charaktere schnell zu Boden werfen.',
  manyMonsters: 'Elf oder mehr Monster erschweren die Kampfverwaltung und erzeugen starke Aktionsschwankungen.',
  rulesNote: 'Schätzung nach D&D 5e 2014 Regeln. Gelände, Taktik, Zauber und magische Gegenstände werden nicht berücksichtigt.',
  rulesLinkLabel: 'Quellregeln lesen',
  reset: 'Auf Beispiel zurücksetzen',
  xpUnit: 'XP',
  sceneLabel: 'Grafische Begegnungsdruck-Anzeige',
  partyMarker: 'Gruppe',
  threatMarker: 'Bedrohung',
};

const faq = [
  {
    question: 'Welche Regeln nutzt dieser Begegnungsrechner?',
    answer: 'Er nutzt die D&D 5e 2014 Regeln aus den Grundregeln. Er addiert die Gruppenschwellen für leicht, mittel, schwer und tödlich und vergleicht sie mit den angepassten XP.',
  },
  {
    question: 'Warum unterscheidet sich die angepasste XP von der Belohnungs-XP?',
    answer: 'Die Regeln multiplizieren die Gesamt-XP der Monster, um die Gefahr mehrerer agierender Kreaturen abzubilden. Angepasste XP dienen nur dem Schwierigkeitsvergleich.',
  },
  {
    question: 'Kann ich gemischte Monstergruppen berechnen?',
    answer: 'Nutzen Sie das Tool als schnelle Schätzung für gleiche Monster. Für gemischte Gruppen addieren Sie die XP aller Kreaturen und wenden den Multiplikator an.',
  },
  {
    question: 'Bedeutet ein tödliches Ergebnis den sicheren Tod?',
    answer: 'Nein. Tödlich bedeutet, dass die angepasste XP die tödliche Schwelle erreicht. Taktik, Gelände, Zauber und Entscheidungen verändern das reale Ergebnis.',
  },
  {
    question: 'Warum ändert die Gruppengröße den Multiplikator?',
    answer: 'Die Grundregeln empfehlen eine Erhöhung des Multiplikators für Gruppen unter drei Charakteren und eine Verringerung für Gruppen ab sechs Charakteren.',
  },
];

const howTo = [
  {
    name: 'Gruppenstufe festlegen',
    text: 'Wählen Sie die durchschnittliche Stufe der Charaktere.',
  },
  {
    name: 'Gruppengröße wählen',
    text: 'Geben Sie die Anzahl der teilnehmenden Charaktere ein.',
  },
  {
    name: 'Bedrohung beschreiben',
    text: 'Wählen Sie den Herausforderungsgrad (CR) und die Anzahl der Monster.',
  },
  {
    name: 'Druck ablesen',
    text: 'Vergleichen Sie die angepassten XP mit den Schwellenwerten.',
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
  name: 'D&D 5e Begegnungs-Schwierigkeitsrechner',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Berechnen Sie die Begegnungsschwierigkeit für D&D 5e 2014 basierend auf Stufe, Gruppengröße, Monster-CR, Anzahl und offiziellen Schwellenwerten.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Wie man die D&D 5e Begegnungsschwierigkeit berechnet',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-begegnungs-schwierigkeitsrechner',
  title: 'D&D 5e Begegnungs Schwierigkeitsrechner',
  description: 'Schätzen Sie den Begegnungsdruck für D&D 5e 2014 mit Stufe, Gruppengröße, Monster-CR, Anzahl, angepassten XP und Schwellenwerten.',
  ui,
  seo: [
    { type: 'title', text: 'Begegnungsschwierigkeit vor der Initiative einschätzen', level: 2 },
    { type: 'paragraph', html: 'Ein D&D-Kampf ist mehr als nur die gedruckte Zahl eines Monsters. Dieser Rechner wandelt Gruppengröße, Stufe, CR und Monsteranzahl in die angepassten XP nach den D&D 5e 2014 Regeln um. Das visuelle Ergebnis zeigt übersichtlich, wo die geplante Szene im Vergleich zu den Schwellenwerten für leicht, mittel, schwer und tödlich liegt.' },
    { type: 'title', text: 'Wie die D&D 5e Begegnungsformel funktioniert', level: 2 },
    { type: 'paragraph', html: 'Die Methode addiert die XP-Schwellenwerte jedes Charakters für jede Schwierigkeitsstufe, summiert die Monster-XP und wendet den Gruppenmultiplikator an. Gruppen mit weniger als drei Charakteren nutzen den nächsthöheren Multiplikator, während Gruppen ab sechs Charakteren den nächstniedrigeren Multiplikator verwenden.' },
    {
      type: 'table',
      headers: ['Signal', 'Bedeutung am Spieltisch'],
      rows: [
        ['Unter Leicht', 'Die Szene dient als Aufwärmung oder zum leichten Ressourcenverbrauch.'],
        ['Leicht', 'Die Gruppe gewinnt in der Regel ohne großen Ressourceneinsatz.'],
        ['Mittel', 'Erwarten Sie spürbaren Druck und Entscheidungen über Ressourceneinsatz.'],
        ['Schwer', 'Planen Sie den Verlust von Trefferpunkten und Zauberslots ein.'],
        ['Tödlich', 'Prüfen Sie Taktik, Gelände und die Folgen schlechter Würfe.'],
      ],
    },
    { type: 'title', text: 'Warum die Monsteranzahl entscheidend ist', level: 2 },
    { type: 'paragraph', html: 'Mehrere Monster erzeugen durch mehr Aktionen und Reaktionen höhere Gefahr als ein einzelnes Monster mit gleichen Gesamt-XP. Deshalb nutzt ein Paar von Kreaturen einen höheren Multiplikator als eine einzelne Kreatur mit derselben kombinierten XP-Zahl.' },
    { type: 'tip', title: 'Hohen CR als spezifisches Warnsignal betrachten', html: 'Ein Monster mit höherem CR als die Gruppenstufe kann Charaktere mit einem Angriff ausschalten. Prüfen Sie Schaden und Effekte genau.' },
    { type: 'title', text: 'Das Ergebnis als Vorbereitungshilfe nutzen', level: 2 },
    { type: 'paragraph', html: 'Prüfen Sie vor schweren oder tödlichen Begegnungen Raumgröße, Deckung und Zauberoptionen der Charaktere. Enge Räume, Überraschung, Umgebungsschaden und Erschöpfung können die tatsächliche Gefahr am Spieltisch erheblich verändern.' },
    { type: 'tip', title: 'Gemischte Gruppen manuell anpassen', html: 'Addieren Sie für gemischte Gruppen die Basis-XP aller Kreaturen und wenden Sie den Multiplikator auf die Gesamtzahl an.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
