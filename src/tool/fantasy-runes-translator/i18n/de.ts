import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Fantasy Runen Übersetzer',
  inputPlaceholder: 'Gib ein Wort oder einen Namen zur Übersetzung ein...',
  alphabetLabel: 'Runen-Alphabet',
  elderFuthark: 'Älterer Futhark',
  angloSaxon: 'Angelsächsisch',
  fantasy: 'Fantasy-Schrift',
  theban: 'Thebanisch',
  enochian: 'Henochisch',
  daemonic: 'Dämonisch',
  ogham: 'Ogham',
  translate: 'Übersetzen',
  clear: 'Löschen',
  copy: 'Text kopieren',
  copied: 'Kopiert!',
  runeName: 'Name',
  runeMeaning: 'Bedeutung',
  runePhonetic: 'Lautwert',
  clickHint: 'Klicke auf eine Rune, um Details zu sehen',
  outputLabel: 'Runen-Ausgabe',
  noInput: 'Gib oben Text ein, um ihn in Runen zu übersetzen',
  unknownChar: '?',
  gmMode: 'SL-Modus',
  exitGmMode: 'Beenden',
  gmHint: 'Zeige dies deinen Spielern',
  seedLabel: 'Seed',
  seedPlaceholder: 'Optional',
  seedApplied: 'Fixiert',
  shuffleSeed: 'Mischen',
};

const faq = [
  {
    question: 'Was ist der Ältere Futhark?',
    answer: 'Der Ältere Futhark ist die älteste Form der Runenalphabete und wurde von germanischen Stämmen vom 2. bis zum 8. Jahrhundert verwendet. Er besteht aus 24 Runen, die in drei Gruppen zu je acht, sogenannte Aettir, unterteilt sind. Jede Rune hat einen Lautwert und einen symbolischen Namen, der natürliche oder mythologische Konzepte repräsentiert.',
  },
  {
    question: 'Was ist der Unterschied zwischen dem Älteren Futhark und den angelsächsischen Runen?',
    answer: 'Das angelsächsische Futhorc ist eine erweiterte Version des Älteren Futhark, die in England entwickelt wurde. Es fügt weitere Runen hinzu, um für das Altenglische spezifische Laute darzustellen, und erweitert den Zeichensatz von 24 auf bis zu 33 Zeichen. Auch die Bedeutungen und Lautwerte haben sich im Laufe der Zeit verändert.',
  },
  {
    question: 'Übersetzt dieser Übersetzer Wörter perfekt?',
    answer: 'Dieses Werkzeug bietet eine buchstabengetreue Umschrift in Runensymbole. Der historische Runengebrauch war eher phonetisch als wörtlich Buchstabe für Buchstabe, daher ist das Ergebnis eine moderne Interpretation. Die Fantasy-Schrift bietet ein kreatives, fiktionales Alphabet für den Einsatz in Tabletop-Rollenspielen.',
  },
  {
    question: 'Kann ich diese Runen in meinen Tabletop-RPG-Kampagnen verwenden?',
    answer: 'Ja! Spielleiter und Spieler können den Übersetzer nutzen, um Runeninschriften, magische Schriftzüge, verschlüsselte Botschaften oder dekorative Namen für Charaktere und Orte zu erstellen. Die Fantasy-Schrift wurde speziell für Fantasy-Rollenspielsettings entwickelt.',
  },
  {
    question: 'Speichert dieses Werkzeug eingegebenen Text?',
    answer: 'Nein. Alles läuft lokal in deinem Browser ab. Weder Text, Übersetzungen noch Auswahlen werden jemals an einen Server gesendet. Deine kreative Arbeit bleibt absolut privat.',
  },
  {
    question: 'Was passiert, wenn ich auf eine Rune klicke?',
    answer: 'Ein Klick auf eine Runenkarte zeigt ihren traditionellen Namen, ihre symbolische Bedeutung und ihren Lautwert an. Das hilft dir, die Runen zu lernen und das passende Symbol für dein Rollenspiel auszuwählen.',
  },
];

const howTo = [
  {
    name: 'Text eingeben',
    text: 'Gib ein beliebiges englisches Wort, einen Namen oder einen Satz in das Eingabefeld ein. Der Übersetzer funktioniert am besten mit einzelnen Wörtern oder kurzen Sätzen.',
  },
  {
    name: 'Alphabet auswählen',
    text: 'Wähle zwischen Älterem Futhark (altgermanisch), Angelsächsisch (mittelalterliches Englisch) oder Fantasy-Schrift (Tabletop-Rollenspiel-Stil).',
  },
  {
    name: 'Übersetzen und erkunden',
    text: 'Klicke auf Übersetzen, um deinen Text umzuwandeln. Jede Rune erscheint als Karte. Klicke auf eine Rune, um ihren Namen, ihre Bedeutung und ihren Laut zu erfahren. Nutze die Kopieren-Schaltfläche, um den Runentext in die Zwischenablage zu speichern.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantasie-runen-ubersetzer',
  title: 'Fantasy Runen Übersetzer / Älterer Futhark, Thebanisch, Henochisch and Dämonisch Runen Konverter',
  description: 'Übersetze Text in Älteren Futhark, Angelsächsisches Futhorc, Thebanisch, Henochisch, Dämonisch, Ogham oder Fantasy-Schriften. Perfekt für Tabletop-RPG-Rätsel, Kampagnen, Zauberrollen und mystische Runen.',
  ui,
  seo: [
    { type: 'title', text: 'Runenalphabete und Mystische Schriften für Tabletop-RPG-Weltenbau', level: 2 },
    { type: 'paragraph', html: 'Mystische Runenalphabete, uralte Symbole und Geheimschriften verleihen Fantasy-Tabletop-Rollenspielen wie D&D, Pathfinder und Warhammer eine unvergleichliche Atmosphäre. Ob du versteckte Zwergenruinen mit Älterem Futhark beschriftest, ein arkanes Zauberbuch mit henochischen Engelschriften gestaltest, hexenhafte Hinweise mit dem Thebanischen Alphabet verteilst oder verbotene dämonische Botschaften verfasst - unser Runengenerator wandelt normalen englischen Text in Echtzeit in stilisierte Symbole um. Wecke die Neugier deiner Spieler mit physischen Requisiten, mysteriösen Chiffren und uralten Steinritzungen.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Runen-Alphabete' },
        { value: '150+', label: 'Symbol-Varianten' },
        { value: 'Sofort', label: 'Visuelle Umschrift' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Älterer Futhark & Angelsächsisches Futhorc: Germanische und Nordische Runen', level: 2 },
    { type: 'paragraph', html: 'Der Ältere Futhark stammt aus dem 2. Jahrhundert und ist das älteste Runensystem. Er besteht aus 24 Zeichen, die grundlegende Kräfte der Natur repräsentieren. Das angelsächsische Futhorc erweiterte dieses System auf bis zu 33 Zeichen für die altenglische Phonetik. Diese historischen Symbole eignen sich perfekt für die Darstellung von Zwergensippen, Kulturen inspiriert von der nordischen Mythologie, Wikingerschnitzereien und Barbarenclan-Insignien in deinen RPG-Kampagnen.' },
    { type: 'title', text: 'Thebanisch & Ogham: Mittelalterliche Hexenschriften und Keltische Baumalphabete', level: 2 },
    { type: 'paragraph', html: 'Die Thebanische Schrift, auch als Runen des Honorius oder Hexenalphabet bekannt, ist eine historisch beliebte mittelalterliche Chiffre, die in okkulten Traditionen und der Wicca-Religion verwendet wurde. Ogham, ein frühmittelalterliches Alphabet, verwendet lineare Striche entlang von Kanten und ist eng mit der keltischen Folklore und druidischer Baumagie verbunden. Verwende diese Schriften, um druidische Schreine, Elfenwälder, heidnische Altäre oder geheime Botschaften von Hexenzirkeln zu verzieren.' },
    { type: 'title', text: 'Henochisch & Dämonische Schriften: Arkane Engels- und Abgrundsprachen', level: 2 },
    { type: 'paragraph', html: 'Erstmals im 16. Jahrhundert von John Dee und Edward Kelley aufgezeichnet, ist Henochisch eine detaillierte konstruierte Sprache, die als die Sprache der Engel gilt. Dämonische Schriften repräsentieren abgründige Glyphen, dunkle Pakte und höllische Zeichen. Erhöhe die narrativen Einsätze deiner Kampagne, indem du entzifferbare dämonische Verträge, Kultzerschriften und Engelsrelikte hinterlässt, die deine Zauberer, Paladine und Kleriker untersuchen können.' },
    { type: 'title', text: 'Benutzerdefinierte Fantasy-Schrift: Rollenspielbereite Kreativalphabete', level: 2 },
    { type: 'paragraph', html: 'Für Welten, die über die reale Geschichte hinausgehen, bietet unsere maßgeschneiderte Fantasy-Schrift einen fiktionalen Runensatz, der speziell dafür entwickelt wurde, klassische High-Fantasy-Ästhetik heraufzubeschwören. Jede Rune ist darauf ausgelegt, auf Spielleiter-Ausdrucken, digitalen Karten und individuellen Spielerplättchen hervorzustechen. Kombiniere sie mit seed-basierten Zufallsgeneratoren, um geheime Sprachen für verschiedene Fraktionen, Nationen oder uralte Götter einzigartig zu machen.' },
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
      'name': 'Fantasy Runen Übersetzer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie man den Fantasy Runen Übersetzer verwendet',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
