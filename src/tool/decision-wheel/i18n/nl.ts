import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'beslissingsrad',
  title: 'Beslissingsrad: Willekeurige Kiezer en Keuze Generator',
  description: 'Draai aan een aanpasbaar beslissingsrad voor bordspellen. Voeg segmenten met gewichten toe om willekeurig uitkomsten te bepalen.',
  ui: {
    title: 'Beslissingsrad',
    spinButton: 'Draai aan het Rad',
    clearHistory: 'Geschiedenis Wissen',
    resultHeading: 'Resultaat',
    historyTitle: 'Draai Geschiedenis',
    noHistory: 'Nog niet gedraaid. Klik op Draai aan het Rad om te beginnen.',
    addSegmentLabel: 'Segment Toevoegen',
    removeSegmentLabel: 'Verwijderen',
    segmentLabelPlaceholder: 'Label',
    presetLabel: 'Voorinstellingen',
    presetYesNo: 'Ja of Nee',
    presetNumbers: 'Nummers 1-6',
    presetActions: 'Acties',
    presetCustom: 'Aangepast',
    presetD20: 'D20',
    presetAlignment: 'Karakter',
    presetLoot: 'Buit Zeldzaamheid',
    weightLabel: 'Gewicht',
    spinAgain: 'Nogmaals Draaien',
    noSegments: 'Voeg segmenten toe aan het rad voordat u draait.',
  },
  seo: [
    { type: 'title', text: 'Beslissingsrad voor Bordspellen en Groepsactiviteiten', level: 2 },
    { type: 'paragraph', html: 'Het beslissingsrad is een veelzijdige digitale tool voor bordspellen, RPGs en groepsactiviteiten. Het maakt het mogelijk om snel, eerlijk en volkomen willekeurig keuzes te maken. Elk segment kan worden aangepast met uw eigen teksten, kleuren en gewichten om de exacte kansen per optie in te stellen.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Segment Toevoegen' },
        { value: '7', label: 'Voorinstellingen' },
        { value: '10', label: 'Draai Geschiedenis' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Hoe het Beslissingsrad te Gebruiken', level: 2 },
    { type: 'paragraph', html: 'Kies een kant-en-klare voorinstelling zoals Ja/Nee, D20, Alignment of Buit, of stel uw eigen aangepaste lijst samen. Pas het gewicht aan van 1 tot 5 om de frequentie van elke optie te beïnvloeden. De natuurkundige animatie simuleert wrijving en vertraging voor extra spanning bij elke draai.' },
    { type: 'title', text: 'Meer beslisscenarios', level: 3 },
    { type: 'paragraph', html: 'Gebruik het rad voor snelle stemmingen in de groep, willekeurige ontmoetingen in rollenspellen, het verdelen van beurten of het kiezen van een startspeler.' },
    { type: 'title', text: 'Sjablonen voor bordspellen', level: 3 },
    { type: 'paragraph', html: 'Met de ingebouwde sjablonen laadt u veelvoorkomende spelbeslissingen in enkele seconden, wat tijd bespaart tijdens spelsessies en discussies aan tafel voorkomt.' },
    { type: 'title', text: 'Uitkomsten wegen', level: 3 },
    { type: 'paragraph', html: 'Door gewichten aan te passen kunt u de kansen van uitkomsten beïnvloeden. Een hoger gewicht vergroot het oppervlak op het rad, waardoor de kans dat die optie wordt gekozen toeneemt.' },
    { type: 'title', text: 'De geschiedenis bekijken', level: 3 },
    { type: 'paragraph', html: 'Het geschiedenispaneel bewaart de laatste tien draaien zodat alle spelers eerdere uitkomsten in volledige transparantie kunnen controleren.' },
  ],
  faq: [
    {
      question: 'Hoe werkt het beslissingsrad?',
      answer: 'Configureer uw keuzes, pas eventueel de gewichten aan voor de kansverdeling en druk op de draaiknop.',
    },
    {
      question: 'Kan ik kleuren en namen aanpassen?',
      answer: 'Ja, u kunt segmenten toevoegen, labels bewerken, kleuren kiezen en het gewicht van 1 tot 5 instellen.',
    },
    {
      question: "Kan ik kansen wijzigen?",
      answer: "Ja, wijzig het gewicht van een segment.",
    },
    {
      question: "Hoeveel segmenten zijn mogelijk?",
      answer: "Maximaal 16; er zijn minstens twee opties nodig.",
    },
    {
      question: "Welke sjablonen zijn er?",
      answer: "Ja of Nee, Getallen, Acties, eigen opties, D20, Uitlijning en Buit.",
    },
    {
      question: "Blijven eerdere draaien zichtbaar?",
      answer: "Ja, de browser toont de tien recentste resultaten.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Segmenten Aanmaken',
      text: 'Selecteer een voorinstelling of maak handmatig segmenten aan met labels en kleuren.',
    },
    {
      name: 'Draai aan het Rad',
      text: 'Klik op de knop om de rotatie-animatie met realistische vertraging te starten.',
    },
    {
      name: "Het resultaat controleren",
      text: "Controleer na het stoppen het winnende segment en de recente draaigeschiedenis.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Beslissingsrad',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Hoe werkt het beslissingsrad?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Configureer uw keuzes, pas eventueel de gewichten aan voor de kansverdeling en druk op de draaiknop.' } },
        { '@type': 'Question', 'name': 'Kan ik kleuren en namen aanpassen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, u kunt segmenten toevoegen, labels bewerken, kleuren kiezen en het gewicht van 1 tot 5 instellen.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Segmenten Aanmaken', 'text': 'Selecteer een voorinstelling of maak handmatig segmenten aan met labels en kleuren.' },
        { '@type': 'HowToStep', 'name': 'Draai aan het Rad', 'text': 'Klik op de knop om de rotatie-animatie met realistische vertraging te starten.' },
      ],
    },
  ],
};
