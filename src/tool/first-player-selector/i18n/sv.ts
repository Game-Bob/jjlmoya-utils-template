import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Väljare för Första Spelare',
  instructions: 'Placera fingrarna på skärmen eller klicka för att lägga till markörer',
  tapToSelect: 'Tryck för att välja',
  winner: 'Vinnare utsedd!',
  reset: 'Återställ',
  start: 'Starta val',
  setupTitle: 'Väljarinställningar',
  clearPlayers: 'Rensa alla markörer',
  fingerMode: 'Fingerläge',
  wheelMode: 'Rouletteläge',
  presetsTitle: 'Alternativ',
  soundOn: 'Ljud på',
  soundOff: 'Ljud av',
  playerCountLabel: 'Markörer / Fingrar',
};

const faq = [
  {
    question: 'Hur fungerar fingerläget?',
    answer: 'I fingerläge placerar varje spelare ett finger på mobilskärmen. Verktyget detekterar alla beröringspunkter, visar glödande färgringar runt dem och startar automatiskt en kort nedräkning. När nedräkningen avslutas markeras en spelare som vinnare medan andra tonas ut, åtföljt av en explosion av partiklar.',
  },
  {
    question: 'Kan jag använda detta verktyg på en stationär dator?',
    answer: 'Ja! Om du är på en enhet utan pekskärm, använder verktyget automatiskt rouletteläge som standard. Du kan klicka på duken för att placera färgade markörer som representerar spelare, klicka sedan på knappen Starta val för att snurra väljarhjulet.',
  },
  {
    question: 'Hur många spelare kan delta?',
    answer: 'Verktyget stöder upp till 10 samtidiga spelare. I fingerläge kan upp till 10 fingrar detekteras samtidigt. I rouletteläge kan du placera upp till 10 färgade markörer på duken genom att klicka.',
  },
  {
    question: 'Är urvalet verkligen slumpmässigt?',
    answer: 'Ja. Urvalsalgoritmen använder JavaScripts kryptografiska Math.random() för att säkerställa opartiska resultat. I fingerläge väljs vinnaren enhetligt slumpmässigt bland alla detekterade beröringspunkter. I rouletteläge saktar hjulet realistiskt med hjälp av friktionsfysik, och den slutliga vinkeln bestämmer vinnaren matematiskt.',
  },
  {
    question: 'Hur tar jag bort en spelarmarkör i rouletteläge?',
    answer: 'Klicka helt enkelt på en befintlig markör för att ta bort den. Verktyget detekterar klick inom 30 pixlar från en placerad markör och tar bort den, så att du kan justera spelaruppställningen innan du startar snurrningen.',
  },
  {
    question: 'Samlar eller överför detta verktyg någon data?',
    answer: 'Inte alls. Allt körs lokalt i din webbläsare. Inga fingerdata, beröringspositioner eller urvalsresultat skickas någonsin till någon server. Din spelkväll förblir helt privat.',
  },
  {
    question: 'Fungerar det på projektorer eller externa skärmar?',
    answer: 'Ja. Rouletteläge fungerar utmärkt på stora skärmar och projektorer för sällskapsspel. De högkontrastrika neonvisualiseringarna och den stora nedräkningstimern är designade för att synas från andra sidan rummet.',
  },
  {
    question: 'Varför återställs nedräkningen när någon lyfter sitt finger?',
    answer: 'Detta är avsiktligt. I fingerläge fortsätter nedräkningen endast medan alla spelare håller fingrarna stadigt på skärmen. Om någon lyfter eller flyttar sig återställs timern för att säkerställa att alla är engagerade innan urvalet körs. Detta förhindrar oavsiktliga utlösningar.',
  },
  {
    question: 'Kan jag ändra ljudet eller stänga av det?',
    answer: 'Ja. Klicka på högtalarikonen i det övre högra hörnet för att växla ljud på eller av. Verktyget spelar ett tickljud under nedräkningen och en fanfar när en vinnare utses.',
  },
  {
    question: 'Vad händer om det bara finns en spelare?',
    answer: 'I båda lägena krävs minst två spelare för att göra ett urval. I fingerläge startar nedräkningen inte förrän minst två fingrar detekteras. I rouletteläge förblir knappen Starta val inaktiverad tills du placerar minst två markörer.',
  },
];

const howTo = [
  {
    name: 'Placera fingrar eller markörer',
    text: 'I fingerläge placerar alla spelare ett finger på skärmen. I rouletteläge klickar du var som helst på duken för att placera spelarmarkörer.',
  },
  {
    name: 'Utlös urval',
    text: 'I fingerläge startar urvalet automatiskt efter att ha hållit i några sekunder. I rouletteläge klickar du på knappen Starta val för att snurra.',
  },
  {
    name: 'Se vinnaren',
    text: 'Vinnaren markeras med en pulseffekt, partikelexplosion och ljudfanfar. Klicka på Återställ eller lyft alla fingrar för att försöka igen.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'forsta-spelare-valjare',
  title: 'Väljare för Första Spelare: Finger väljare & Tur Roulett',
  description: 'Välj vem som ska börja i dina brädspel med denna spektakulära finger väljare och interaktiva tur roulett.',
  ui,
  seo: [
    { type: 'title', text: 'Rättvisa och Strategi: Att lösa förstaspelarfördelen i brädspel', level: 2 },
    { type: 'paragraph', html: 'Att bestämma startspelaren i sällskapsspel kan kraftigt påverka spelets dynamik. Inom spelteori avser Förstaspelarfördelen (FPA) den statistiska fördel som spelaren som tar första turen har över sina motståndare. I strategiska schackpartier, krigsspel och moderna Eurospel som Agricola eller Puerto Rico gör första handlingen att en spelare kan säkra kritiska resurser eller placera pjäser innan motståndarna hinner reagera. För att minska FPA och garantera en balanserad spelplan är en pålitlig, opartisk urvalsmetod nödvändig. Vår digitala startspelarväljare garanterar absolut slumpmässighet, så att spelgrupper kan fastställa turordning omedelbart och komma rakt till spel.' },
    {
      type: 'stats',
      items: [
        { value: '100% Slump', label: 'Opartiskt urval' },
        { value: '2 Sekunder', label: 'Nedräkningsutlösare' },
        { value: 'Touch', label: 'Mobilkompatibel' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Spelregler vs. Digitala slumpgeneratorer: Beröringsrevolutionen', level: 2 },
    { type: 'paragraph', html: 'Många moderna brädspelsregelböcker innehåller tematiska startspelarregler, såsom "den yngsta spelaren börjar", "den senaste personen som besökte en gård börjar" eller "den längsta spelaren börjar". Även om dessa är underhållande under första omgångarna blir de snabbt repetitiva, statiska och orättvisa för regelbundna spelgrupper. Fysiska slumpgeneratorer som tärningskast eller kortdragning ökar förberedelsetiden och är benägna att påverkas av mänsklig bias eller dålig blandning. Finger-väljarmekaniken löser detta genom att erbjuda en snabb, tryck-och-håll slumpgenerator som väljer en startspelare på några sekunder utan extra kort eller tärningar.' },
    {
      type: 'table',
      headers: ['Urvalsmetod', 'Hastighet och förberedelse', 'Slumpkvalitet', 'Bäst lämpad för'],
      rows: [
        ['Godtyckliga regelboksregler', 'Omedelbart, men repetitivt', 'Ingen slump efter första omgången', 'Familjespel och partyspel'],
        ['Tärningskast', 'Kräver att hitta och kasta tärningar, risk för lika', 'Hög slump, men tråkigt för stora grupper', 'Krigsspel och RPG'],
        ['Kortdragning', 'Kräver blandning och utdelning', 'Bra slump, men kräver fysiska kort', 'Kortbyggarspel och kortspel'],
        ['Tryckfinger-väljare', 'Omedelbar, ingen förberedelse, visuella animationer', 'Absolut algoritmisk slump', 'Alla sällskaps- och brädspel'],
      ],
    },
    {
      type: 'tip',
      title: 'Optimera din Touch väljarinställning',
      html: 'För bästa upplevelse i fingerläge, placera din surfplatta eller smartphone plant i mitten av bordet. Låt alla spelare placera ett finger tydligt på duken. Nedräkningen återställs om en spelare lyfter eller flyttar sitt finger, vilket förhindrar oavsiktliga utlösningar och säkerställer absolut konsensus innan väljaren körs.',
    },
    {
      type: 'title',
      text: 'Välj ditt verktyg: Tryckfinger väljare vs. Snurrroulett',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beroende på din hårdvaruuppsättning och miljö kan du växla mellan två distinkta layoutlägen utformade för att maximera skärmyta och tillgänglighet:' },
    {
      type: 'proscons',
      title: 'Jämförelse av urvalslägen',
      items: [
        {
          pro: 'Fingerläge erbjuder en otroligt snabb och taktil upplevelse, som tillåter upp till 10 spelare att placera fingrar samtidigt.',
          con: 'Kräver en pekkänslig skärm som en smartphone eller surfplatta.',
        },
        {
          pro: 'Rouletteläge fungerar på alla bärbara datorer, stationära datorer eller projektorskärmar, vilket gör det idealiskt för virtuella sessioner och distansspelkvällar.',
          con: 'Kräver klick för att manuellt placera markörer innan snurrningen startas.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Visuell optimering: Touch vävar vs. Bromsande hjul',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Touch väljare',
          description: 'Spårar flera distinkta beröringspunkter på skärmen. Ritar neonförbindelsevävar och krympande nedräkningsringar runt varje finger, kulminerande i en festexplosion.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Simultan beröringsspårning',
            'Taktila håll-och-släpp-kontroller',
            'Spektakulära partikelexplosioner',
          ],
        },
        {
          title: 'Snurrroulett hjul',
          description: 'Placerar färgade spelarmarkörer runt en matematisk tyngdpunkt. Snurrar ett färgat sektorhjul som saktar ner naturligt med simulerad friktion innan vinnaren utses.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Tyngdpunktsbaserad justering',
            'Friktionsbaserad inbromsningsfysik',
            'Universellt stöd för datormus',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Förstaspelarfördel (FPA)',
          definition: 'En turordningsbias i brädspel där startspelaren får en statistiskt signifikant fördel i aktionsval eller resurskontroll.',
        },
        {
          term: 'Beröringsurvalsprotokoll',
          definition: 'En tryck-och-håll-interaktion där alla deltagare placerar sina fingrar på en pekskärm tills en enda vinnare slumpmässigt markeras.',
        },
        {
          term: 'Inbromsningsfysik',
          definition: 'En matematisk animationsrutin som applicerar friktionsmultiplikatorer på ett snurrande hjul för att simulera naturlig tröghet och bygga upp förväntan.',
        },
        {
          term: 'Tyngdpunktsberäkning',
          definition: 'Den beräknade mittpunkten av en spridd uppsättning koordinatmarkörer, som används som rotationspunkt för roulett-hjulets grafik.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'Väljare för Första Spelare och Finger-väljare',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the First Player Selector',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
