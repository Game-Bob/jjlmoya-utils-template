import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'beslutsjhjul',
  title: 'Beslutshjul: Slumpmässig Väljare och Alternativgenerator',
  description: 'Snurra ett anpassningsbart beslutshjul för brädspel. Lägg till segment med vikter för att slumpa fram resultat.',
  ui: {
    title: 'Beslutshjul',
    spinButton: 'Snurra Hjulet',
    clearHistory: 'Rensa Historik',
    resultHeading: 'Resultat',
    historyTitle: 'Snurrhistorik',
    noHistory: 'Inga snurr än. Klicka på Snurra Hjulet för att starta.',
    addSegmentLabel: 'Lägg Till Segment',
    removeSegmentLabel: 'Ta bort',
    segmentLabelPlaceholder: 'Etikett',
    presetLabel: 'Mallar',
    presetYesNo: 'Ja eller Nej',
    presetNumbers: 'Siffror 1-6',
    presetActions: 'Aktioner',
    presetCustom: 'Anpassad',
    presetD20: 'D20',
    presetAlignment: 'Inriktning',
    presetLoot: 'Byte Sällsynthet',
    weightLabel: 'Vikt',
    spinAgain: 'Snurra Igen',
    noSegments: 'Lägg till segment på hjulet innan du snurrar.',
  },
  seo: [
    { type: 'title', text: 'Beslutshjul för Brädspel och Gruppaktiviteter', level: 2 },
    { type: 'paragraph', html: 'Beslutshjulet är ett mångsidigt digitalt verktyg för brädspel, rollspel och gruppaktiviteter. Det gör det möjligt att avgöra val snabbt, rättvist och helt slumpmässigt. Varje segment kan anpassas med egna etiketter, färger och sannolikhetsvikter för att passa just ditt spel.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Lägg Till Segment' },
        { value: '7', label: 'Mallar' },
        { value: '10', label: 'Snurrhistorik' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Hur du Använder Beslutshjulet', level: 2 },
    { type: 'paragraph', html: 'Välj en färdig mall som Ja/Nej, D20, Alignment eller Bytesskatter, eller skapa din egen anpassade lista. Justera vikterna från 1 till 5 för att ändra hur ofta varje alternativ dras. Fysikmotorn simulerar friktion och inbromsning för att ge spänning åt varje snurr.' },
    { type: 'title', text: 'Fler beslutsscenarier', level: 3 },
    { type: 'paragraph', html: 'Använd hjulet för snabba omröstningar i gruppen, slumpmässiga möten i rollspel, fördelning av spelturer eller för att välja vilken spelare som väljer karaktär först.' },
    { type: 'title', text: 'Mallar för sällskapsspel', level: 3 },
    { type: 'paragraph', html: 'De inbyggda mallarna låter dig ladda vanliga beslut på ett par sekunder, vilket sparar värdefull tid under spelsessioner och undviker onödiga diskussioner runt bordet.' },
    { type: 'title', text: 'Justera resultatvikter', level: 3 },
    { type: 'paragraph', html: 'Genom att ändra vikter kan du balansera eller styra dragningschanserna. En högre vikt ger segmentet en större yta på hjulet, vilket ökar sannolikheten att det väljs.' },
    { type: 'title', text: 'Granska historiken', level: 3 },
    { type: 'paragraph', html: 'Historikpanelen sparar de senaste tio snurren så att alla spelare kan kontrollera tidigare resultat i full transparens under spelets gång.' },
  ],
  faq: [
    {
      question: 'Hur fungerar beslutshjulet?',
      answer: 'Skapa dina val, ställ in vikter om du vill ändra chanserna och tryck på snurrknappen för resultat.',
    },
    {
      question: 'Kan jag ändra färger och namn?',
      answer: 'Ja, du kan lägga till segment, ändra namnen, välja egna färger och ställa in vikten från 1 till 5.',
    },
    {
      question: "Kan jag ändra sannolikheten?",
      answer: "Ja, ändra segmentets vikt.",
    },
    {
      question: "Hur många segment är möjliga?",
      answer: "Upp till 16; minst två alternativ krävs.",
    },
    {
      question: "Vilka mallar finns?",
      answer: "Ja eller Nej, Siffror, Handlingar, egna alternativ, D20, Justering och Byte.",
    },
    {
      question: "Visas tidigare snurr?",
      answer: "Ja, webbläsaren visar de tio senaste resultaten.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Skapa Segment',
      text: 'Välj en snabbmall eller skapa dina egna segment med etiketter och färger.',
    },
    {
      name: 'Snurra Hjulet',
      text: 'Klicka på snurra-knappen för att starta hjulet med realistisk friktionsinbromsning.',
    },
    {
      name: "Kontrollera resultatet",
      text: "När hjulet stannar kontrollerar du det vinnande segmentet och historiken.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Beslutshjul',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Hur fungerar beslutshjulet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Skapa dina val, ställ in vikter om du vill ändra chanserna och tryck på snurrknappen för resultat.' } },
        { '@type': 'Question', 'name': 'Kan jag ändra färger och namn?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, du kan lägga till segment, ändra namnen, välja egna färger och ställa in vikten från 1 till 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Skapa Segment', 'text': 'Välj en snabbmall eller skapa dina egna segment med etiketter och färger.' },
        { '@type': 'HowToStep', 'name': 'Snurra Hjulet', 'text': 'Klicka på snurra-knappen för att starta hjulet med realistisk friktionsinbromsning.' },
      ],
    },
  ],
};
