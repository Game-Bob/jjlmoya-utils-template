import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'entscheidungsrad',
  title: 'Entscheidungsrad: Zufallsgenerator und Auswahldrehrad',
  description: 'Drehen Sie ein anpassbares Entscheidungsrad für Brettspiele. Fügen Sie Segmente mit Gewichtungen hinzu, um Ergebnisse zufällig zu bestimmen.',
  ui: {
    title: 'Entscheidungsrad',
    spinButton: 'Rad Drehen',
    clearHistory: 'Verlauf Löschen',
    resultHeading: 'Ergebnis',
    historyTitle: 'Drehverlauf',
    noHistory: 'Noch keine Drehs. Klicken Sie auf Rad Drehen, um zu starten.',
    addSegmentLabel: 'Segment Hinzufügen',
    removeSegmentLabel: 'Entfernen',
    segmentLabelPlaceholder: 'Name',
    presetLabel: 'Vorlagen',
    presetYesNo: 'Ja oder Nein',
    presetNumbers: 'Zahlen 1-6',
    presetActions: 'Aktionen',
    presetCustom: 'Benutzerdefiniert',
    presetD20: 'D20',
    presetAlignment: 'Gesinnung',
    presetLoot: 'Beuteseltenheit',
    weightLabel: 'Gewicht',
    spinAgain: 'Nochmals Drehen',
    noSegments: 'Fügen Sie Segmente hinzu, bevor Sie drehen.',
  },
  seo: [
    { type: 'title', text: 'Entscheidungsrad für Brettspiele und Gruppenaktivitäten', level: 2 },
    { type: 'paragraph', html: 'Das Entscheidungsrad ist ein vielseitiges Werkzeug für Brettspiele, Rollenspiele und Gruppenentscheidungen am Spieltisch. Mit diesem Zufallsgenerator lassen sich beliebige Optionen rasch und fair auslosen. Sie können jedes Segment mit individuellen Bezeichnungen, Farben und Gewichtungen gestalten, um Wahrscheinlichkeiten exakt an Ihre Spielregeln anzupassen.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Segment Hinzufügen' },
        { value: '7', label: 'Vorlagen' },
        { value: '10', label: 'Drehverlauf' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'So Verwenden Sie das Entscheidungsrad', level: 2 },
    { type: 'paragraph', html: 'Wählen Sie eine der vordefinierten Vorlagen wie Ja/Nein, D20, Gesinnungen oder Beuteseltenheit, oder erstellen Sie eine komplett benutzerdefinierte Liste. Über die Gewichtung von 1 bis 5 steuern Sie die Chance für jedes einzelne Feld. Ein Physikmodell simuliert Schwung und Reibung beim Drehen des Rades.' },
    { type: 'title', text: 'Weitere Szenarien', level: 3 },
    { type: 'paragraph', html: 'Nutzen Sie das Rad für spontane Gruppenabstimmungen, zufällige Begegnungen in Rollenspielen, die Vergabe von Spielzügen oder die zufällige Verteilung von Aufgaben und Beute unter den Spielern.' },
    { type: 'title', text: 'Vorlagen nutzen', level: 3 },
    { type: 'paragraph', html: 'Die integrierten Vorlagen laden häufig benötigte Brettspiel- und Pen-and-Paper-Entscheidungen mit einem einzigen Klick. Das spart wertvolle Vorbereitungszeit beim Spielabend.' },
    { type: 'title', text: 'Gewichtungen einstellen', level: 3 },
    { type: 'paragraph', html: 'Mit der Gewichtungsfunktion bestimmen Sie, wie groß einzelne Abschnitte auf dem Rad dargestellt werden. Höhere Werte erhöhen die Wahrscheinlichkeit, dass die Nadel auf diesem Segment landet.' },
    { type: 'title', text: 'Verlauf prüfen', level: 3 },
    { type: 'paragraph', html: 'Der integrierte Drehverlauf speichert die letzten Ergebnisse für alle Mitspieler transparent ab. Dadurch lässt sich jederzeit nachvollziehen, welche Entscheidungen in vorangegangenen Runden getroffen wurden.' },
  ],
  faq: [
    {
      question: 'Wie funktioniert das Entscheidungsrad?',
      answer: 'Wählen Sie eine Vorlage oder erstellen Sie eigene Optionen, legen Sie Gewichtungen fest und klicken Sie auf Drehen.',
    },
    {
      question: 'Kann ich Farben und Namen anpassen?',
      answer: 'Ja, Sie können beliebig Segmente hinzufügen, Namen ändern, Farben wählen und die Gewichtung von 1 bis 5 anpassen.',
    },
    {
      question: "Kann ich Ergebniswahrscheinlichkeiten ändern?",
      answer: "Ja, ändern Sie das Gewicht eines Segments.",
    },
    {
      question: "Wie viele Segmente sind möglich?",
      answer: "Bis zu 16 Segmente sind möglich; mindestens zwei werden benötigt.",
    },
    {
      question: "Welche Vorlagen gibt es?",
      answer: "Ja oder Nein, Zahlen, Aktionen, eigene Optionen, D20, Gesinnung und Beute.",
    },
    {
      question: "Bleiben frühere Drehungen sichtbar?",
      answer: "Ja, die letzten zehn Ergebnisse werden im Browser angezeigt.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Segmente Erstellen',
      text: 'Wählen Sie eine Vorlage oder fügen Sie benutzerdefinierte Segmente mit Namen und Farben hinzu.',
    },
    {
      name: 'Das Rad Drehen',
      text: 'Klicken Sie auf Drehen und warten Sie, bis das Rad mit realistischer Verzögerung stoppt.',
    },
    {
      name: "Ergebnis prüfen",
      text: "Nach dem Stopp wird das Gewinnersegment hervorgehoben. Prüfen Sie den Verlauf der letzten Drehungen.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Entscheidungsrad',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie funktioniert das Entscheidungsrad?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Wählen Sie eine Vorlage oder erstellen Sie eigene Optionen, legen Sie Gewichtungen fest und klicken Sie auf Drehen.' },
        },
        { '@type': 'Question', 'name': 'Kann ich Farben und Namen anpassen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, Sie können beliebig Segmente hinzufügen, Namen ändern, Farben wählen und die Gewichtung von 1 bis 5 anpassen.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Segmente Erstellen', 'text': 'Wählen Sie eine Vorlage oder fügen Sie benutzerdefinierte Segmente mit Namen und Farben hinzu.' },
        { '@type': 'HowToStep', 'name': 'Das Rad Drehen', 'text': 'Klicken Sie auf Drehen und warten Sie, bis das Rad mit realistischer Verzögerung stoppt.' },
      ],
    },
  ],
};
