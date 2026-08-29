import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'dobbelsteen-roller-kans-simulator',
  title: 'Dobbelsteen Roller en Kans Simulator',
  description: 'Rol virtuele polyedrische dobbelstenen (D4, D6, D8, D10, D12, D20, D100), voeg modificatoren toe en bekijk live statistieken en rolkansen voor tabletop en bordspellen.',
  ui: {
    title: 'Dobbelsteen Roller en Kans Simulator',
    rollButton: 'Dobbelstenen rollen',
    clearButton: 'Geschiedenis wissen',
    historyTitle: 'Rolgeschiedenis',
    noHistory: 'Nog geen rollen geregistreerd. Voeg dobbelstenen toe en klik op Rollen om te beginnen.',
    totalRolls: 'Totaal aantal rollen',
    averageRoll: 'Gemiddeld resultaat',
    lastRoll: 'Laatste totaal',
    modifierLabel: 'Modificator (+/-)',
    probabilityTitle: 'Kansanalyse',
    selectDice: 'Selecteer te rollen dobbelstenen',
  },
  seo: [
    { type: 'title', text: 'Tabletop-kansen beheersen: Hoe dobbelsteenkansen uw spel bepalen', level: 2 },
    { type: 'paragraph', html: 'Polyedrische dobbelstenen vormen het hart van tabletop RPG\'s en moderne bordspellen. Of u nu mikt op een hoge reddingsworp in Dungeons & Dragons of rolt voor grondstoffen, het resultaat wordt bepaald by wiskundige kansberekening. Begrijpen hoe de combinatie van verschillende dobbelstenen uw kansen beïnvloedt, is cruciaal voor tactische beslissingen tijdens het spel.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Kans op natuurlijke 20' },
        { value: '10.5', label: 'Gemiddelde 3d6 rol' },
        { value: '9.75%', label: 'Natuurlijke 20 met voordeel' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'De wiskunde achter meerdere dobbelstenen: Waarom 3d6 veiliger is dan 1d20', level: 2 },
    { type: 'paragraph', html: 'Echter, bij het rollen van meerdere dobbelstenen zoals 3d6, clusteren de resultaten rond de gemiddelde waarde van 10.5. Deze klokcurve betekent dat u veel sneller een gematigd resultaat rolt dan extreme waarden, wat consistentie biedt en de wisselvalligheid van een enkele dobbelsteen vermindert.' },
    { type: 'title', text: 'D20-kansen uitgelegd: Kritieke treffers, pifia\'s en impact van modificatoren', level: 2 },
    { type: 'paragraph', html: 'Een eenvoudige modificator van plus twee kan de kans op succes drastisch veranderen, waardoor moeilijke taken beheersbare uitdagingen worden. In veel spelsystemen vertegenwoordigt een natuurlijke 20 een automatische kritieke treffer (5% kans), terwijl een natuurlijke 1 een kritieke blunder (pifia) is. Het visualiseren van deze uitkomsten helpt om de willekeur te demystificieren en stelt u in staat om uw tactische zetten statistisch te plannen.' },
    {
      type: 'title',
      text: 'Referentietabel voor standaard polyedrische dobbelstenen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Type dobbelsteen', 'Minimale rol', 'Maximale rol', 'Gemiddeld resultaat', 'Hoofdrol in tabletop RPG\'s'],
      rows: [
        ['D4', '1', '4', '2.5', 'Magische projectielen, dolken, kleine gevaren'],
        ['D6', '1', '6', '3.5', 'Vuurballen, standaardzwaarden, attribuutcontroles'],
        ['D8', '1', '8', '4.5', 'Langzwaarden, genezingsspreuken, middelgrote wapens'],
        ['D10', '1', '10', '5.5', 'Hellebaarden, cantrips, tientallen van percentiel'],
        ['D12', '1', '12', '6.5', 'Strijdbijlen, barbarian hit points'],
        ['D20', '1', '20', '10.5', 'Reddingsworpen, aanvalsworpen, vaardigheidscontroles'],
        ['D100', '1', '100', '50.5', 'Percentieltabellen, wilde magie-effecten'],
      ],
    },
    {
      type: 'tip',
      title: 'Gemiddelde dobbelsteenwaarden uit je hoofd uitrekenen',
      html: 'Om het gemiddelde van een enkele dobbelsteen te vinden, tel de minimale (1) en maximale waarde bij elkaar op en deel door 2. Een D6 gemiddelde is bijvoorbeeld (1 + 6) / 2 = 3.5. Voor meerdere dobbelstenen vermenigvuldigt u het gemiddelde van één dobbelsteen met het aantal dobbelstenen (3d6 gemiddelde is 3 * 3.5 = 10.5). Een modificator telt u hier simpelweg bij op (3d6 + 4 geeft gemiddeld 14.5).',
    },
    {
      type: 'title',
      text: 'Vergelijking van vlakke vs. gekromde dobbelsteensystemen',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'D20 systeem vs. 3d6 klokcurvesysteem',
      items: [
        {
          pro: 'D20-systemen zijn snel uit te rekenen en hebben een constante 5% kans op kritieke successen en blunders.',
          con: 'D20-resultaten zijn erg onvoorspelbaar, waardoor de vaardigheid van het personage minder zwaar weegt dan geluk.',
        },
        {
          pro: '3d6 klokcurves geven de voorkeur aan gemiddelde rollen, waardoor vaardige personages zelden falen bij eenvoudige taken.',
          con: '3d6-systemen vereisen het optellen van drie dobbelstenen en maken perfecte 18s (kritiek) uiterst zeldzaam (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kansmechanismen begrijpen',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'D20 systeem Lineair',
          description: 'Gebruikt een enkele 20-zijdige dobbelsteen voor acties, waarbij elke uitkomst een gelijke kans van 5% heeft. Hoge variantie zorgt voor spanning maar vermindert de betrouwbaarheid.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Vlakke 5% kans per uitkomst',
            'Hoge variantie en schommelingen',
            'Modificatoren verhogen succes lineair',
          ],
        },
        {
          title: '3d6 systeem Klokcurve',
          description: 'Sommeert drie 6-zijdige dobbelstenen, wat zorgt voor een normale verdeling gecentreerd op 10.5. Resultaten zijn erg consistent.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Gemiddelde resultaten zeer waarschijnlijk',
            'Extreme resultaten uiterst zeldzaam',
            'Modificatoren hebben niet-lineaire impact',
          ],
        },
        {
          title: 'Percentielsysteem (Onder rollen)',
          description: 'Gebruikt twee 10-zijdige dobbelstenen voor een getal tussen 1 en 100. Het doel is om onder de score van je personage te rollen, wat kansen direct duidelijk maakt.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Direct succespercentage',
            'Gemakkelijk in één oogopslag te begrijpen',
            'Vaardigheidsgroei is wiskundig helder',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'De misvatting van de gokker: Waarom dobbelstenen geen geheugen hebben',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Een veelgemaakte fout in tabletop gaming is geloven dat eerdere rollen toekomstige resultaten beïnvloeden. Als u drie keer achter elkaar een "1" rolt op een D20, heeft u misschien het gevoel dat een hoge rol "moet komen". In werkelijkheid is elke rol een onafhankelijke gebeurtenis. De kans op een 20 bij de volgende rol blijft precies 5%. Dit weten helpt spelers om objectieve tactische keuzes te maken.',
    },
    {
      type: 'title',
      text: 'Verklarende woordenlijst voor tabletop dobbelstenen & kansberekening',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Voordeel & Nadeel',
          definition: 'Een mechaniek waarbij een speler twee D20s rolt en respectievelijk het hoogste (Voordeel) of laagste (Nadeel) resultaat neemt. Voordeel verhoogt het gemiddelde van 10.5 naar 13.8.',
        },
        {
          term: 'Klokcurve (normale verdeling)',
          definition: 'Een kansverdeling in de vorm van een klok, waarbij resultaten rond het centrale gemiddelde clusteren. Dit gebeurt bij het optellen van meerdere dobbelstenen (zoals 3d6 of 2d10).',
        },
        {
          term: 'Kritieke treffer',
          definition: 'Een automatische succesrol, meestal behaald door de maximale waarde op een dobbelsteen te rollen (een natuurlijke 20 op een D20), wat vaak bonus schade oplevert.',
        },
        {
          term: 'Kritieke blunder',
          definition: 'Een automatisch en vaak catastrofaal falen, veroorzaakt door het rollen van een 1 op een D20.',
        },
        {
          term: 'Verwachte waarde',
          definition: 'Het gemiddelde resultaat van uw rollen op de lange termijn. Voor een enkele D6 is de verwachte waarde 3.5; voor een enkele D20 is dat 10.5.',
        },
        {
          term: 'Percentieldobbelstenen',
          definition: 'Een paar D10s (één voor tientallen, één voor eenheden) die samen worden gerold om een getal van 1 tot 100 te verkrijgen.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hoe werkt de kanssimulator?',
      answer: 'Het berekent de exacte kansverdeling voor de gekozen dobbelsteencombinatie en modificator met behulp van combinatorische wiskunde, zodat u uw kansen kunt zien om boven of onder doelwaarden te rollen.',
    },
    {
      question: 'Welke dobbelstenen worden ondersteund?',
      answer: 'Polyedrische dobbelstenen die vaak worden gebruikt in tabletop RPG\'s en bordspellen, waaronder D4, D6, D8, D10, D12, D20 en D100.',
    },
    {
      question: 'Wat zijn modificatoren en hoe werken ze?',
      answer: 'Modificatoren zijn vaste waarden (+1, -2, enz.) die u optelt bij of aftrekt van uw roltotaal om karaktervaardigheden, bonussen of straffen te vertegenwoordigen.',
    },
    {
      question: 'Wat betekent rollen met Voordeel of Nadeel?',
      answer: 'Rollen met Voordeel betekent dat u twee D20 dobbelstenen rolt en het hoogste resultaat neemt. Rollen met Nadeel betekent dat u er twee rolt en het laagste resultaat neemt. Dit is een veelgebruikte mechaniek in tabletop RPG\'s.',
    },
    {
      question: 'Wat zijn kritieke treffers en kritieke blunders?',
      answer: 'Een kritieke treffer vindt plaats wanneer een dobbelsteen zijn maximale waarde bereikt (zoals een natuurlijke 20 op een D20), wat meestal resulteert in automatisch succes of dubbele schade. Een kritieke blunder vindt plaats wanneer een dobbelsteen een 1 rolt, wat resulteert in automatisch en vaak chaotisch falen.',
    },
    {
      question: 'Hoe berekent de simulator de rolkansen?',
      answer: 'De simulator analyseert wiskundig elke mogelijke uitkomst van uw geselecteerde dobbelstenen en modificator. Het presenteert vervolgens een percentageoverzicht dat laat zien hoe waarschijnlijk het is dat u elk specifiek totaal rolt.',
    },
    {
      question: 'Waarom is een 3d6 rol consistenter dan het rollen van een enkele D20?',
      answer: 'Het rollen van een enkele D20 geeft elk getal een gelijke kans van 5%. Het rollen van 3d6 creëert een klokcurve waarbij resultaten de neiging hebben om rond het gemiddelde van 10.5 te clusteren, waardoor extreem hoge of lage resultaten zeldzaam zijn.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dobbelstenen toevoegen',
      text: 'Klik op de dobbelsteenknoppen om ze toe te voegen aan uw actieve dobbelsteenpool.',
    },
    {
      name: 'Modificator toevoegen',
      text: 'Voer een positieve of negatieve modificatorwaarde in om aan uw totaal toe te voegen.',
    },
    {
      name: 'Rollen en statistieken bekijken',
      text: 'Klik op de knop Rollen om visuele resultaten, geschiedenis en kansanalyse te bekijken.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Dobbelsteen Roller en Kans Simulator',
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
          'name': 'Hoe werkt de kanssimulator?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Het berekent de exacte kansverdeling voor de gekozen dobbelsteencombinatie en modificator met behulp van combinatorische wiskunde, zodat u uw kansen kunt zien om boven of onder doelwaarden te rollen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Welke dobbelstenen worden ondersteund?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Polyedrische dobbelstenen die vaak worden gebruikt in tabletop RPG\'s en bordspellen, waaronder D4, D6, D8, D10, D12, D20 en D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wat zijn modificatoren en hoe werken ze?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modificatoren zijn vaste waarden (+1, -2, enz.) die u optelt bij of aftrekt van uw roltotaal om karaktervaardigheden, bonussen of straffen te vertegenwoordigen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wat betekent rollen met Voordeel of Nadeel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rollen met Voordeel betekent dat u twee D20 dobbelstenen rolt en het hoogste resultaat neemt. Rollen met Nadeel betekent dat u er twee rolt en het laagste resultaat neemt. Dit is een veelgebruikte mechaniek in tabletop RPG\'s.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wat zijn kritieke treffers en kritieke blunders?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Een kritieke treffer vindt plaats wanneer een dobbelsteen zijn maximale waarde bereikt (zoals een natuurlijke 20 op een D20), wat meestal resulteert in automatisch succes of dubbele schade. Een kritieke blunder vindt plaats wanneer een dobbelsteen een 1 rolt, wat resulteert in automatisch en vaak chaotisch falen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hoe berekent de simulator de rolkansen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De simulator analyseert wiskundig elke mogelijke uitkomst van uw geselecteerde dobbelstenen en modificator. Het presenteert vervolgens een percentageoverzicht dat laat zien hoe waarschijnlijk het is dat u elk specifiek totaal rolt.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Waarom is een 3d6 rol consistenter dan het rollen van een enkele D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Het rollen van een enkele D20 geeft elk getal een gelijke kans van 5%. Het rollen van 3d6 creëert een klokcurve waarbij resultaten de neiging hebben om rond het gemiddelde van 10.5 te clusteren, waardoor extreem hoge of lage resultaten zeldzaam zijn.'
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
          'name': 'Dobbelstenen toevoegen',
          'text': 'Klik op de dobbelsteenknoppen om ze toe te voegen aan uw actieve dobbelsteenpool.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Modificator toevoegen',
          'text': 'Voer een positieve of negatieve modificatorwaarde in om aan uw totaal toe te voegen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Rollen en statistieken bekijken',
          'text': 'Klik op de knop Rollen om visuele resultaten, geschiedenis en kansanalyse te bekijken.'
        }
      ]
    }
  ],
};
