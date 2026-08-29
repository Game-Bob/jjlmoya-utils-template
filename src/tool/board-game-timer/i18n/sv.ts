import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Tidstagare för Sällskapsspel',
  setupTitle: 'Spelinställningar',
  playerNamePlaceholder: 'Spelarnamn',
  addPlayer: 'Lägg till spelare',
  removePlayer: 'Ta bort',
  startGame: 'Starta spel',
  pauseGame: 'Pausa',
  resumeGame: 'Återuppta',
  resetGame: 'Återställ',
  nextTurn: 'Avsluta tur',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Spelare',
  minutesLabel: 'min',
  secondsLabel: 'sek',
  expiredLabel: 'TIDEN UT',
  overtimeLabel: 'Övertid',
  turnIndicator: 'Din tur',
  warningLowTime: 'Lite tid kvar',
  pausedOverlay: 'Spel pausat',
  roundLabel: 'Runda',
  settingsTitle: 'Inställningar',
  baseTimeLabel: 'Bas tid',
  incrementLabel: 'Inkrement/Fördröjning',
  warningTimeLabel: 'Varningströskel',
  confirmLabel: 'Bekräfta',
  cancelLabel: 'Avbryt',
  noPlayersHint: 'Lägg till minst 2 spelare för att starta',
  addPlayerHint: 'Ange spelarnamn',
  timeUpLabel: 'Tiden är ute!',
  presetsTitle: 'Mallar',
  timeControlTitle: 'Tidskontroll',
  modeLabel: 'Läge',
  modeNormal: 'Normal nedräkning',
  modeFischer: 'Fischer (Inkrement)',
  modeBronstein: 'Bronstein (Fördröjning)',
  modeHourglass: 'Timglas',
  modeTurn: 'Återställ tur',
  audioTitle: 'Ljudvarningar',
  soundAlerts: 'Ljudeffekter',
  playersTitle: 'Spelare',
  playersAdded: 'Tillagda spelare',
  statsTitle: 'Spelstatistik',
  totalGameTime: 'Total tid',
  totalRounds: 'Totala rundor',
  slowestPlayer: 'Långsammaste spelare',
  playerPerformance: 'Tidsanalys per spelare',
  playAgain: 'Nytt spel',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'tidstagare-for-sallskapsspel-schackklocka',
  title: 'Tidstagare för Sällskapsspel: Duell Schackklocka & Runden Manager',
  description: 'Spåra turer och hantera tid i dina sällskapsspel med en professionell tidstagare. Stöder schackklocka-duelläge, multiplayer-layouter, Fischer-inkrement och Bronstein-fördröjning.',
  ui,
  seo: [
    { type: 'title', text: 'Att bemästra tempot vid spelbordet: hur professionella tidskontroller förbättrar upplevelsen', level: 2 },
    { type: 'paragraph', html: 'Tidsplanering är en viktig del i moderna brädspel. Oavsett om du spelar ett snabbt sällskapsspel eller deltar i ett djupt strategiskt spel - att reglera tänketiden säkerställer att alla deltagare får en rättvis del av rampljuset. Användning av professionella metoder som Fischer-inkrement, Bronstein-fördröjning eller timglasläge eliminerar analysförlamning, garanterar ett jämnt speltempo och lägger till ett extra strategiskt lager på spelplanen.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Spelare som stöds' },
        { value: '5 Lägen', label: 'Tidskonfigurationer' },
        { value: '100ms', label: 'Motorprecision' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein och Timglas: Avancerade tidskontroller förklarade', level: 2 },
    { type: 'paragraph', html: 'Vår brädspelstidtagare stöder flera tidsalternativ inspirerade av turneringar för att hålla dina spelsessioner igång smidigt:' },
    {
      type: 'table',
      headers: ['Läge', 'Hur det fungerar', 'Bäst lämpad för'],
      rows: [
        ['Normal nedräkning', 'En standard global nedräkningstimer som pausar vid slutet av turen.', 'Casual brädspel med en gemensam tänketidspool'],
        ['Fischer (Inkrement)', 'Lägger till ett bestämt antal sekunder till din klocka efter att du har avslutat din tur.', 'Strategiska eurospel och wargames där snabba turer bygger upp en tidsbuffert'],
        ['Bronstein (Fördröjning)', 'Ger ett fördröjningsfönster där din huvudtimer inte räknar ner.', 'Komplexa taktiska spel där korta administrativa turer ska vara gratis'],
        ['Timglas', 'Din timer minskar medan din motståndares timer ökar i realtid.', 'Intensiva tvåspelardueller och schackpartier'],
        ['Återställ tur', 'En fast nedräkningstimer som återställs helt vid varje ny tur.', 'Snabba sällskapsspel, frågesporter och snabba spelrundor'],
      ],
    },
    {
      type: 'tip',
      title: 'Hitta den perfekta tidskonfigurationen',
      html: 'En rekommenderad startpunkt är att tilldela 30 till 45 sekunder för lätta sällskapsspel, 1 till 2 minuter med en 5-sekunders Bronstein-fördröjning för medeltunga eurospel, och 30 till 45 minuter med ett 10-sekunders Fischer-inkrement för tunga wargames eller strategiska kampanjer.',
    },
    {
      type: 'title',
      text: 'Visuell optimering: Delad skärm för duell vs. central turknapp för multiplayer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För direkta dueller erbjuder applikationen en delad schackklocks-layout. Denna vy gör det möjligt för spelare att rotera sina skärmhalvor med 180 grader, vilket underlättar avläsningen från motsatta sidor av bordet. För spel med 3 eller fler deltagare ändras gränssnittet till ett multiplayer-rutnät med aktiva spelar-highlights, individuella kortjusteringar och en stor central knapp för att avsluta turen som fungerar som en gemensam fysisk buzzer mitt på spelplanen.',
    },
    {
      type: 'proscons',
      title: 'Fischer inkrement jämfört med Bronstein fördröjning',
      items: [
        {
          pro: 'Fischer-inkrement belönar snabbt spel genom att bygga upp en tidsbuffert för framtida turer.',
          con: 'Den totala speltiden kan bli längre om spelarna ständigt gör extremt snabba turer.',
        },
        {
          pro: 'Bronstein-fördröjningen förhindrar tidsförlust vid snabba administrativa handlingar utan att bygga upp massiva reserver.',
          con: 'Kräver konfigurering av en fördröjningsgräns som passar brädets fysiska hanteringstid.',
        },
        {
          pro: 'Timglasläget skapar direkt spänning i dueller genom att aktivt dränera din tid för att mata motståndaren.',
          con: 'Blir matematiskt komplext och mindre strategiskt i spel med fler än två spelare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vanliga brädspelsgenrer som drar nytta av turtidtagare',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Strategiska Eurospel',
          description: 'Worker-placement och resurshantering spel där turer kan variera i komplexitet. Fischer-inkrement hjälper spelare att fatta kritiska beslut i slutfasen utan att sakta ner de inledande rundorna.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Minskar analysförlamning',
            'Stöd för rörlig turkomplexitet',
            'Tid blir en aktiv resurs',
          ],
        },
        {
          title: 'Party och Frågespel',
          description: 'Snabba spel där snabbt tänkande är en del av det roliga. Fasta tidsgränser per tur håller tempot uppe och förhindrar att en enskild spelare blockerar flytet.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Korta fasta nedräkningar',
            'Behåller partytempot',
            'Tvingar fram omedelbara åtgärder',
          ],
        },
        {
          title: 'Turneringsdueller i duell',
          description: 'Strikta schackklocksdueller kräver exakta, roterbara layouter för att garantera sportslig rättvisa och en rättvis tidsfördelning i alla rundor.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '180 graders skärmrotation',
            'Exakt tidsregistrering i intervall om 100ms',
            'Sudden death- eller övertidsstatusar',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fischer-inkrement',
          definition: 'En metod för tidskontroll där ett förutbestämt antal sekunder läggs till spelarens återstående tid efter varje avslutad tur.',
        },
        {
          term: 'Bronstein-fördröjning',
          definition: 'En metod för tidskontroll där nedräkningen fördröjs med en inställd tid i början av en tur, vilket förhindrar tidsavdrag om turen avslutas snabbt.',
        },
        {
          term: 'Timglasläge',
          definition: 'Ett dynamiskt tidssystem där den tid som dras av från en spelare direkt överförs i realtid till motståndarens tidskonto.',
        },
        {
          term: 'Analysförlamning',
          definition: 'Ett tillstånd av övertänkande där en spelare blir överväldigad av alternativen, vilket gör att spelflödet stagnerar och förstör upplevelsen för andra.',
        },
        {
          term: 'Spelanalys',
          definition: 'Prestandamått efter spelet som sammanfattar förflutna rundor, genomsnittlig tänkhastighet, maximala turtider och rankning av de långsammaste turerna.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hur fungerar layouten i Duel-läget?',
      answer: 'När du startar ett spel för 2 spelare visar användargränssnittet en delad schackklocka. Varje sida representerar en spelare; genom att trycka på sin skärmhalva avslutas turen. Displayerna kan roteras 180 grader för spelare som sitter mitt emot varandra.',
    },
    {
      question: 'Vad är skillnaden mellan Fischer- och Bronstein-läge?',
      answer: 'Fischer-läget lägger till extra sekunder till spelarens tidspool efter att turen avslutats, så att spelare kan spara tid. Bronstein-läget ger en fördröjning i början av turen; om turen slutförs inom fördröjningen dras ingen tid av.',
    },
    {
      question: 'Följer appen spelstatistik under spel?',
      answer: 'Ja! Efter avslutat spel eller när tiden har gått ut visar statistikmodalen den totala speltiden, antal rundor, genomsnittlig och maximal turtid samt en hastighetsrankning av spelarna.',
    },
    {
      question: 'Sparas mina spelare när jag uppdaterar sidan?',
      answer: 'Ja, spelarkonfigurationen och de valda färgerna sparas automatiskt i webbläsarens lokala minne och återställs vid nästa besök.',
    },
    {
      question: 'Kan jag lägga till eller dra av tid under spelets gång?',
      answer: 'Ja! I multiplayer-läget har spelarkorten speciella knappar för +30s och -30s för att snabbt anpassa den återstående tiden under spelets gång.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Konfigurera spelinställningar',
      text: 'Välj en mall (Casual, Blitz, Strategisk, Timglas) eller ange egna parametrar: basvaraktighet, inkrement/fördröjning och varningströsklar.',
    },
    {
      name: 'Lägg till och spara spelare',
      text: 'Skriv in spelarnamn och välj färg-id:n. Ändra turordningen med hjälp av pilarna; informationen sparas automatiskt.',
    },
    {
      name: 'Starta och avsluta turer',
      text: 'Starta spelet. I Duel-läget trycker du på din skärmhalva för att avsluta din tur. I multiplayer-läget klickar du på den stora knappen Avsluta tur.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tidstagare för Sällskapsspel & Runden Manager',
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
          'name': 'Hur fungerar layouten i Duel-läget?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'När du startar ett spel för 2 spelare visar användargränssnittet en delad schackklocka. Varje sida representerar en spelare; genom att trycka på sin skärmhalva avslutas turen. Displayerna kan roteras 180 grader för spelare som sitter mitt emot varandra.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Vad är skillnaden mellan Fischer- och Bronstein-läge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Fischer-läget lägger till extra sekunder till spelarens tidspool efter att turen avslutats, så att spelare kan spara tid. Bronstein-läget ger en fördröjning i början av turen; om turen slutförs inom fördröjningen dras ingen tid av.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Följer appen spelstatistik under spel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja! Efter avslutat spel eller när tiden har gått ut visar statistikmodalen den totala speltiden, antal rundor, genomsnittlig och maximal turtid samt en hastighetsrankning av spelarna.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Sparas mina spelare när jag uppdaterar sidan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, spelarkonfigurationen och de valda färgerna sparas automatiskt i webbläsarens lokala minne och återställs vid nästa besök.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kan jag lägga till eller dra av tid under spelets gång?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja! I multiplayer-läget har spelarkorten speciella knappar för +30s och -30s för att snabbt anpassa den återstående tiden under spelets gång.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man använder tidstagaren för sällskapsspel',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Konfigurera spelinställningar',
          'text': 'Välj en mall (Casual, Blitz, Strategisk, Timglas) eller ange egna parametrar: basvaraktighet, inkrement/fördröjning och varningströsklar.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lägg till och spara spelare',
          'text': 'Skriv in spelarnamn och välj färg-id:n. Ändra turordningen med hjälp av pilarna; informationen sparas automatiskt.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Starta och avsluta turer',
          'text': 'Starta spelet. I Duel-läget trycker du på din skärmhalva för att avsluta din tur. I multiplayer-läget klickar du på den stora knappen Avsluta tur.'
        }
      ]
    }
  ],
};
