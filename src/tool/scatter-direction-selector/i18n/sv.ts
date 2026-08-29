import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Spridningsriktningsväljare',
  setupTitle: 'Spridningsinställningar',
  sectorsLabel: 'Kompasssektorer',
  sectors8: '8 Riktningar',
  sectors12: '12 Riktningar (Klocka)',
  diceLabel: 'Avvikelseavstånd Kast',
  diceD6: '1T6 Tum',
  dice2D6: '2T6 Tum',
  diceD10: '1T10 Tum',
  diceCustom: 'Anpassat Intervall',
  customMaxLabel: 'Maximalt Avstånd',
  hitChanceLabel: 'Direktträff Sannolikhet (%)',
  rollButton: 'Kasta Spridning',
  hitResult: 'Direktträff!',
  scatterResult: 'Spridning!',
  distanceLabel: 'Avstånd',
  angleLabel: 'Vinkel',
  dragHint: 'Dra kompassen för att ställa in vindriktningen manuellt',
  historyTitle: 'Senaste Kast',
  clearHistory: 'Rensa Historik',
  presetTitle: 'Wargaming Förinställningar',
  soundOn: 'Ljud På',
  soundOff: 'Ljud Av',
  guideStep1: 'Dra kompassen så att den matchar din bordsorientering',
  guideStep2: 'Välj sektorer, tärningar och direkt träff chans',
  guideStep3: 'Mitten = ditt mål. Grönt sken betyder att det landade precis där',
  guideStep3Scatter: 'Pil = avvikelseriktning. Flytta skottet från mitten så många tum längs pilen',
  scatterModeLabel: 'Spridningsriktning',
  scatterModeRandom: 'Slumpmässig',
  scatterModeWind: 'Vinddrift',
  scatterModeWindHint: 'Pilen följer alltid kompassen - bara avståndet är slumpmässigt',
};

const faq = [
  {
    question: 'Hur fungerar Spridningsriktningsväljaren?',
    answer: 'Den beräknar en slumpmässig vinkel (0-359 grader) och ett avstånd baserat på vald tärningskonfiguration. Den simulerar också en spridningstärning och kontrollerar om det blir en direktträff.',
  },
  {
    question: 'Kan jag ändra sektorformatet?',
    answer: 'Ja, du kan växla mellan 8-riktnings kardinalsektorer och 12-riktnings klocksektorer.',
  },
  {
    question: 'Vad är direktträff sannolikheten?',
    answer: 'Den representerar chansen att projektilen landar precis där du siktade, utan någon avvikelse eller spridning. Detta simulerar ett "Träff"-resultat på en vanlig spridningstärning.',
  },
  {
    question: 'Är detta kompatibelt med Warhammer eller Bolt Action?',
    answer: 'Ja, den stöder vanliga 8-riktnings mallar och 12-riktnings klockutriktningar som används i de flesta taktiska krigsspel och miniatyrregler.',
  },
  {
    question: 'Vad visar projektilbananimationen?',
    answer: 'Ett lysande projektil färdas från kompassens mitt till spridningslandningsplatsen och lämnar ett streckat spår efter sig. Vid en direktträff stannar projektilen i mitten och expanderande gröna ringar pulserar utåt.',
  },
  {
    question: 'Hur visas spridningsavståndet visuellt?',
    answer: 'Avståndet i tum visas som en flytande etikett vid nedslagspunkten, placerad längs avvikelseriktningen. Den röda kompasspilen låses också till den slutliga vinkeln för snabb mallutriktning.',
  },
  { question: 'Hur bestäms spridningsriktningen?', answer: 'Verktyget kombinerar det valda sektorsystemet med tärningskastet och den inställda avvikelsen.' },
  { question: 'Kan jag använda vindläget?', answer: 'Ja, vindläget följer kompassens vinkel medan avståndet förblir slumpmässigt.' },
];

const howTo = [
  {
    name: 'Konfigurera Regler',
    text: 'Välj kompasssektorer, välj en avståndstärning och justera direktträff sannolikheten.',
  },
  {
    name: 'Kasta eller Dra',
    text: 'Klicka på Kasta Spridning för att simulera avvikelsen, eller dra i kompasshjulet för att justera riktningen manuellt.',
  },
  {
    name: 'Läs Utfallet',
    text: 'Kontrollera den centrala displayen och vektorpilen för att hitta det exakta avståndet, vinkeln och riktningen för spridningen.',
  },
  {
    name: 'Observera Banan',
    text: 'Efter kastet, observera det animerade projektilen färdas över kompassen. Det streckade spåret visar avvikelsevägen och nedslagspunkten visar avståndet i tum.',
  },
  {
    name: 'Tolka Resultatet',
    text: 'En grön puls med "DIRECT HIT" betyder ingen avvikelse. En röd explosion med en avståndsetikett betyder att skottet spreds  -  placera din mall så många tum från målet i pilens riktning.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'spridningsriktningsvaljare',
  title: 'Spridningsriktningsväljare: Taktisk Kompass för Bordsspel Wargaming',
  description: 'Bestäm slumpmässiga avvikelser, vinddrift och spridningsriktningar för miniatyr krigsspel med en taktil 3D-kompass.',
  ui,
  seo: [
    { type: 'title', text: 'Interaktiv Spridningskompass med Realtids Projektilanimation', level: 2 },
    { type: 'paragraph', html: 'Spridningsriktningsväljaren går bortom statisk nummergenerering genom att rendera en animerad projektilbana direkt på kompassöverlägget. När du klickar på Kasta Spridning färdas ett lysande projektil från mitten längs avvikelsevinkeln, lämnar ett streckat spår och brister i partiklar vid nedslagspunkten. Detta förenklar avsevärd den visuella bedömningen av missade skott under alla dina figurspel.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sektorsystem', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Tärnings Förinställningar', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Träff Sannolikhetsintervall', icon: 'mdi:target' },
      { value: '10', label: 'Senaste Kast Historik', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Hur Bananimationen Förbättrar Beslutsfattande vid Wargaming', level: 3 },
    { type: 'paragraph', html: 'Traditionella spridningsverktyg visar en numerisk vinkel och ett avstånd, vilket tvingar spelare att mentalt visualisera förskjutningen på bordet. Den animerade banan överbryggar detta gap genom att rita den exakta flygvägen från siktningspunkten till spridningslandningszonen. Det snabbar upp speltempot och eliminerar alla tveksamheter vid placering av exploderande mallar.' },
    { type: 'diagnostic', variant: 'success', title: 'Direktträff', html: 'När kastet slår träffsannolikheten, briserar kompassens mitt med pulserande gröna ringar och en "DIRECT HIT" textanimation. Projektilet återvänder till mitten och bekräftar en perfekt träff utan någon avvikelse.' },
    { type: 'diagnostic', variant: 'error', title: 'Spridning', html: 'Vid ett spridningsresultat följer projektilen en streckad bana till sin landningsplats. En partikelexplosion, en lysande markör och det exakta avståndet i tum (t.ex. <strong>5"</strong>) visas på landningsplatsen för omedelbar mätning.' },
    { type: 'tip', title: 'Proffstips: Använd Vinddrift Läge', html: 'Aktivera Vinddrift för att låsa spridningsriktningen till din manuellt roterade kompassvinkel. Simulerar en rådande vind eller en fast förskjutningsvektor  -  idealisk för ostyrda raketer, gasmoln, trollformler med yteffekt eller misslyckade teleporteringar.' },
    { type: 'title', text: 'Hantera spridning i figurspel', level: 2 },
    { type: 'paragraph', html: 'Många krigsspel och taktiska rollspel använder avvikelser för att simulera artilleri, mörsare, vindavdrift eller misslyckad teleportering på ett realistiskt och oförutsägbart sätt. Med flexibla tärningsalternativ (1D6, 2D6, 1D10) anpassar sig denna digitala kompass till varje regelbok.' },
    { type: 'table', headers: ['Spelscenario', 'Tärningskonfiguration', 'Spridningsläge', 'Taktisk Effekt'], rows: [['Artilleri och Mörsare', '2D6 tum', '8 Sektorer + Träff %', 'Slumpmässig spridning runt målet'], ['Gasmoln och Vind', '1D6 tum', 'Vinddrift (Fast Vinkel)', 'Förskjutning enbart med vinden'], ['Teleporteringsfel', '1D10 tum', '12 Sektorer Klocka', 'Cirkulär spridning i valfri riktning']] },
    { type: 'title', text: 'Styra vind och avvikelse', level: 2 },
    { type: 'paragraph', html: 'Genom att ställa in en lämplig träffsannolikhet speglas besättningens träning och mättiden på bordet förkortas avsevärt under skjutfasen.' },
    { type: 'comparative', items: [{ title: 'Hantera spridning i figurspel', description: 'Många krigsspel använder avvikelser för att simulera artilleri, vind eller misslyckad teleportering. Denna digitala kompass förhindrar att tärningar av misstag rubbar terrängen.', icon: 'mdi:compass-outline', highlight: true, points: ['Styra vind och avvikelse', 'Snabb och smidig mätning', 'Exakt vektorvisualisering'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Styra vind och avvikelse', definition: 'Träffsannolikheten visar hur pålitlig en enhet är och gör mätningarna snabbare under spelet.' }] },
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
      'name': 'Spridningsriktningsväljare',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur du använder Spridningsriktningsväljaren',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
