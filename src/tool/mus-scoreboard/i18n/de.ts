import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Benennen Sie die zwei Paare, stellen Sie die Regeln ein und tippen Sie Steine, wenn die Hände gezählt werden.',
  pairOneLabel: 'Paar eins',
  pairTwoLabel: 'Paar zwei',
  pairOneDefault: 'Tisch Nord',
  pairTwoDefault: 'Tisch Süd',
  targetPointsLabel: 'Punkte pro Spiel',
  targetPointsHint: 'Wählen Sie das Ziel für jedes Spiel (30, 40 oder 50 Punkte).',
  gamesToWinLabel: 'Spiele für den Vaca-Sieg',
  gamesToWinHint: 'Das erste Paar mit dieser Anzahl gewinnt das Match.',
  deckLabel: 'Kartendeck am Tisch',
  deckHint: 'Das spanische Blatt (Baraja española) ist die traditionelle Wahl für Mus. Französische Karten können angepasst werden.',
  spanishDeck: 'Baraja española (Spanisches Blatt)',
  frenchDeck: 'Französisches Blatt',
  frenchDeckNotice: 'Entfernen Sie die 8er, 9er und 10er aus dem französischen Blatt, um mit 40 Karten zu spielen. Buben sind Sotas, Damen sind Caballos und Könige sind Reyes.',
  pointsOption30: '30 Punkte',
  pointsOption40: '40 Punkte',
  pointsOption50: '50 Punkte',
  gamesOption1: '1 Spiel',
  gamesOption2: '2 Spiele',
  gamesOption3: '3 Spiele',
  startMatch: 'Punktezähler öffnen',
  matchSettings: 'Paare und Regeln einstellen',
  liveMatch: 'Laufendes Spiel',
  targetLabel: 'Punkte-Spiel',
  gameLabel: 'Spiel',
  gamePlural: 'Spiele',
  vacaLabel: 'Spiele zum Sieg',
  scoreLabel: 'Aktuelle Steine',
  handLabel: 'Wählen Sie, welches Paar Vorhand (Mano) ist',
  handSelected: 'ist Vorhand (Mano).',
  stonesLabel: 'Zählmarken',
  stoneSingular: 'Stein (Piedra)',
  stonePlural: 'Steine (Piedras)',
  amarracoSingular: 'Amarraco',
  amarracoPlural: 'Amarracos',
  pointsToGo: 'bis zum Ziel',
  addStone: 'Stein',
  addAmarraco: 'Amarraco',
  closeGame: 'Spiel beenden',
  closeGamePrompt: 'Bestätigen, dass dieses Paar das Spiel gewonnen hat und das nächste beginnt?',
  confirmationTitle: 'Aktion am Tisch bestätigen',
  confirmAction: 'Bestätigen',
  cancelAction: 'Weiterspielen',
  undo: 'Rückgängig',
  resetMatch: 'Match zurücksetzen',
  resetMatchPrompt: 'Das aktuelle Match zurücksetzen und den Verlauf löschen?',
  historyTitle: 'Letzte Wertungen',
  noHistory: 'Noch keine Wertungen. Jede Eingabe erscheint hier.',
  matchReady: 'Der Tisch ist bereit.',
  closeGameHint: 'Ein Paar hat das Punktziel erreicht. Bestätigen Sie den Spielsieger.',
  waitingForScore: 'Weiter zählen. Verbleibende Punkte für die Führenden:',
  gameWon: 'Spiel beendet.',
  vacaWon: 'Vaca gewonnen. Starten Sie ein neues Match, wenn der Tisch bereit ist.',
  gameClosed: 'hat das Spiel beendet.',
  pointsAdded: 'erzielte',
  matchSaved: 'Punktestand auf diesem Gerät gespeichert.',
  lastAction: 'Letzte Aktion',
  settingsApplied: 'Neue Regeln angewendet. Das Match wurde zurückgesetzt.',
  pairNameRequired: 'Geben Sie beiden Paaren einen Namen, bevor Sie den Zähler öffnen.',
  visualScoreLabel: 'Mus-Punktezähler am Tisch mit Steinen, Amarracos, Spielen und Zielwert',
};

const faq = [
  {
    question: 'Was erfasst dieser Online Mus Punktezähler?',
    answer: 'Er erfasst zwei Paare, Steine (Piedras, Einzelpunkte) und Amarracos (5-Punkte-Blöcke), gewonnene Spiele (Chicos), die Vaca-Gesamtwertung, wer die Vorhand (Mano) innehat und den Punkteverlauf.',
  },
  {
    question: 'Warum werden Steine und Amarracos getrennt angezeigt?',
    answer: 'Ein Stein (Piedra) steht für 1 Punkt und ein Amarraco für 5 Steine. Die getrennte Anzeige erleichtert den Vergleich mit echten Spielsteinen oder Bohnen auf dem Mus-Tisch.',
  },
  {
    question: 'Kann man auf 30, 40 oder 50 Punkte spielen?',
    answer: 'Ja. Vor dem Start können Sie 30, 40 oder 50 Punkte wählen. Die Anzeige und die Beendigungsprüfung passen sich automatisch an.',
  },
  {
    question: 'Wie wird ein abgeschlossenes Spiel gewertet?',
    answer: 'Wenn ein Paar das Ziel erreicht, wird die Schaltfläche zum Beenden aktiv. Nach Bestätigung wird dem Siegerpaar ein Spiel gutgeschrieben und die Punkte werden auf null zurückgesetzt.',
  },
  {
    question: 'Speichert der Punktezähler ein unterbrochenes Match?',
    answer: 'Ja. Alle Einstellungen, Namen und Punkte bleiben lokal im Browser Ihres Geräts gespeichert.',
  },
  {
    question: 'Werden regionale Mus-Sonderregeln erzwungen?',
    answer: 'Nein. Mus bietet regionale Variationen. Dieser Zähler konzentriert sich auf die genaue Erfassung von Punkten und Spielen am Tisch.',
  },
  {
    question: 'Wird mit spanischem oder französischem Blatt gespielt?',
    answer: 'Mus wird traditionell mit dem spanischen 40-Karten-Blatt gespielt. Für ein französisches Blatt entfernen Sie die 8er, 9er und 10er. Buben gelten als Sotas, Damen als Caballos und Könige als Reyes.',
  },
];

const howTo = [
  {
    name: 'Namen der Paare eingeben',
    text: 'Tragen Sie die Namen der Spielerpaare ein, um sie am Tisch eindeutig zuzuordnen.',
  },
  {
    name: 'Zielpunkte und Vaca festlegen',
    text: 'Wählen Sie 30, 40 oder 50 Punkte pro Spiel sowie die Anzahl benötigter Siege für die Vaca.',
  },
  {
    name: 'Punkte und Amarracos zählen',
    text: 'Tippen Sie auf Stein (+1) oder Amarraco (+5), sobald Punkte in den Runden vergeben werden.',
  },
  {
    name: 'Spiel bestätigen und fortfahren',
    text: 'Sobald das Ziel erreicht ist, bestätigen Sie den Sieger, um das Spiel zu werten und das nächste zu starten.',
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
  name: 'Online Mus Punktezähler',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Digitaler Punktezähler für das traditionelle spanische Kartenspiel Mus am realen Tisch.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Anleitung zum Zählen bei einer Mus Partie',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'online-mus-punktezaehler',
  title: 'Online Mus Punktezähler für Live Partien',
  description: 'Zählen Sie Steine, Amarracos und Vacas beim spanischen Kartenspiel Mus. Für spanisches und französisches Blatt mit lokaler Speicherung.',
  ui,
  seo: [
    { type: 'title', text: 'Übersichtlicher Punktezähler für lebendige Mus Runden', level: 2 },
    { type: 'paragraph', html: 'Mus ist ein traditionelles spanisches Kartenspiel voller Dynamik und Bluffing. Da in jeder Hand mehrere Runden (Grande, Chica, Pares, Juego, Punto) gewertet werden, hält dieser Zähler die Punkte beider Paare übersichtlich fest.' },
    { type: 'title', text: 'Zielpunkte vor der ersten Hand festlegen', level: 2 },
    { type: 'paragraph', html: 'Klassischerweise wird auf 40 Punkte gespielt, aber viele Runden bevorzugen 30 oder 50 Punkte. Stellen Sie das Ziel vor dem Austeilen ein, damit die Verbleibenden Punkte exakt stimmen.' },
    {
      type: 'table',
      headers: ['Einstellung', 'Funktion', 'Empfehlung'],
      rows: [
        ['30 Punkte', 'Kurzes Spiel', 'Schnelle Runden oder lokale Regeln'],
        ['40 Punkte', 'Standard Spiel', 'Der klassische Standard unter Freunden'],
        ['50 Punkte', 'Langes Spiel', 'Tische mit mehr taktischem Spielraum'],
      ],
    },
    { type: 'tip', title: 'Regeln vor Spielbeginn absprechen', html: 'Klären Sie vor dem Geben, ob mit 8 Königen und 8 Assen (3er als Könige, 2er als Asse) gespielt wird und wer die Spielsteine am Tisch verwaltet.' },
    { type: 'title', text: 'Spanisches und französisches Kartendeck', level: 2 },
    { type: 'paragraph', html: 'Das spanische Blatt mit 40 Karten (Oros, Copas, Espadas, Bastos) ist der Standard. Bei einem französischen Blatt werden 8er, 9er und 10er entfernt. Buben zählen als Sotas, Damen als Caballos, Könige als Reyes.' },
    { type: 'title', text: 'Digitale Punktezählung direkt am Spielfeldrand', level: 2 },
    { type: 'paragraph', html: 'Die große Anzeige zeigt die Gesamtpunktzahl an. Die Zeile darunter übersetzt diese Summe automatisch in Amarracos und Steine, während die visuellen Elemente einen schnellen Abgleich ermöglichen.' },
    { type: 'list', items: ['<strong>Stein (Piedra):</strong> 1 Einzelpunkt in der Wertung.', '<strong>Amarraco:</strong> 1 Block im Wert von 5 Steinen.', '<strong>Spiel (Chico):</strong> Eine gewonnene Punktrunde bis zum Zielwert.', '<strong>Vaca:</strong> Der Gesamtsieg nach der festgelegten Anzahl an Spielen.'] },
    { type: 'title', text: 'Spielabschluss und Fehlerkorrektur', level: 2 },
    { type: 'paragraph', html: 'Das Erreichen der Zielpunktzahl berechtigt ein Paar zum Spielabschluss, wird jedoch erst nach Bestätigung durch beide Paare gewertet. Dies garantiert eine faire Auswertung aller Punkte der letzten Hand.' },
    { type: 'tip', title: 'Rückgängig Funktion bei Fehlern nutzen', html: 'Falls versehentlich Punkte dem falschen Paar gutgeschrieben werden, nutzen Sie sofort die Rückgängig Schaltfläche, um den Stand der aktuellen Hand zu korrigieren.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
