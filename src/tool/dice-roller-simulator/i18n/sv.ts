import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'tarnings-kalkylator-sannolikhet',
  title: 'Tärningskalkylator och Sannolikhetssimulator',
  description: 'Slå virtuella polyedriska tärningar (D4, D6, D8, D10, D12, D20, D100), lägg till modifierare och visa liveresultat och sannolikheter för bräd och rollspel.',
  ui: {
    title: 'Tärningskalkylator och Sannolikhetssimulator',
    rollButton: 'Slå tärning',
    clearButton: 'Rensa historik',
    historyTitle: 'Slåhistorik',
    noHistory: 'Inga slag har registrerats än. Lägg till tärningar och klicka på Slå för att börja.',
    totalRolls: 'Totalt antal slag',
    averageRoll: 'Genomsnittligt resultat',
    lastRoll: 'Senaste totalt',
    modifierLabel: 'Modifierare (+/-)',
    probabilityTitle: 'Sannolikhetsanalys',
    selectDice: 'Välj tärningar att slå',
  },
  seo: [
    { type: 'title', text: 'Bemästra tabletop-odds: Hur tärningssannolikheter formar ditt spel', level: 2 },
    { type: 'paragraph', html: 'Polyedriska tärningar är hjärtat i rollspel och moderna brädspel. Oavsett om du siktar på ett högt räddningsslag i Dungeons & Dragons eller slår för resursproduktion, styrs resultatet av matematisk sannolikhet. Att förstå hur kombinationen av olika tärningstyper påverkar dina odds är avgörande for taktiskt beslutsfattande under spelets gång.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Chans för naturlig 20' },
        { value: '10.5', label: 'Genomsnittligt 3d6-slag' },
        { value: '9.75%', label: 'Naturlig 20 med fördel' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Matematiken bakom flera tärningar: Varför 3d6 är säkrare än 1d20', level: 2 },
    { type: 'paragraph', html: 'När du slår en enskild D20 har varje utfall från 1 till 20 en lika stor chans på 5%, vilket resulterar i en platt sannolikhetsfördelning. Men när du slår flera tärningar som 3d6, samlas resultaten runt det genomsnittliga värdet av 10.5. Denna klockkurva innebär att det är mycket mer sannolikt att du slår ett måttligt resultat än extrema värden, vilket ger stabilitet och minskar den svajiga karaktären hos enskilda tärningar.' },
    { type: 'title', text: 'D20-odds förklarade: Kritiska träffar, fummel och modifierares effekt', level: 2 },
    { type: 'paragraph', html: 'En simpel modifierare på plus två kan drastiskt förändra sannolikheten för framgång, vilket förvandlar svåra uppgifter till hanterbara utmaningar. I många spelsystem representerar en naturlig 20 en automatisk kritisk träff (5% chans), medan en naturlig 1 är en kritisk miss (fummel). Visualisering av dessa utfall hjälper till att avmystifiera slumpen och låter dig planera dina taktiska drag med statistiskt stöd.' },
    {
      type: 'title',
      text: 'Referenstabell för standard polyedriska tärningar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tärningstyp', 'Minsta slag', 'Högsta slag', 'Genomsnittligt resultat', 'Huvudroll i brädspel'],
      rows: [
        ['D4', '1', '4', '2.5', 'Magiska pilar, dolkar, mindre faror'],
        ['D6', '1', '6', '3.5', 'Eldklot, standardvärd, attributkontroller'],
        ['D8', '1', '8', '4.5', 'Långsvärd, helande trollformler, medelstora vapen'],
        ['D10', '1', '10', '5.5', 'Hillebarder, cantrips, tiotal i percentilslag'],
        ['D12', '1', '12', '6.5', 'Stonyxor, barbarian hit points'],
        ['D20', '1', '20', '10.5', 'Räddningsslag, attackslag, färdighetskontroller'],
        ['D100', '1', '100', '50.5', 'Percentiltabeller, vild magi'],
      ],
    },
    {
      type: 'tip',
      title: 'Räkna ut tärningsgenomsnitt i huvudet',
      html: 'För att hitta genomsnittet för en tärning, lägg ihop minsta (1) och högsta värde och dela med 2. D6-genomsnittet är till exempel (1 + 6) / 2 = 3.5. För flera tärningar multiplicerar du helt enkelt det genomsnittliga värdet med antalet tärningar (t.ex. 3d6-genomsnittet är 3 * 3.5 = 10.5). Att lägga till en platt modifierare adderar helt enkelt till detta genomsnitt (t.ex. 3d6 + 4 ger 14.5 i snitt).',
    },
    {
      type: 'title',
      text: 'Jämförelse av platta kontra kurviga tärningssystem',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'D20 system kontra 3d6 klockkurvesystem',
      items: [
        {
          pro: 'D20-system är snabba att räkna ut och har en konstant chans på 5% för kritiska träffar och fummel.',
          con: 'D20-resultat är mycket svajiga, vilket gör att karaktärsskicklighet spelar mindre roll än tärningsturen.',
        },
        {
          pro: '3d6-klockkurvor prioriterar genomsnittliga slag, vilket säkerställer att skickliga karaktärer sällan misslyckas med enkla uppgifter.',
          con: '3d6-system kräver att man adderar tre tärningar och gör perfekta 18s (kritiskt) extremt sällsynta (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Förstå sannolikhetsmekanik',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'D20 system Linjärt',
          description: 'Använder en enskild 20-sidig tärning för handlingar, där varje utfall har en lika stor chans på 5%. Hög varians skapar spänning men ger mindre stabilitet.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Platt 5% chans per utfall',
            'Hög varians och svängningar',
            'Modifierare ökar framgången linjärt',
          ],
        },
        {
          title: '3d6 system Klockkurva',
          description: 'Adderar tre 6-sidiga tärningar, vilket skapar en normalfördelning centrerad kring 10.5. Resultaten är mycket stabila.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Genomsnittliga resultat är mycket troliga',
            'Extrema resultat är extremt sällsynta',
            'Modifierare har en icke-linjär effekt',
          ],
        },
        {
          title: 'Percentilsystem (Slå under)',
          description: 'Använder två 10-sidiga tärningar för att generera ett tal mellan 1 och 100. Målet är att slå under karaktärens värde, vilket gör chanserna tydliga direkt.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Direkt procentuell chans till framgång',
            'Enkelt att förstå vid en första anblick',
            'Matematiskt tydlig utveckling av skicklighet',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Spelarens misstag: Varför tärningar inte har något minne',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Ett vanligt misstag i rollspel är tron att tidigare slag påverkar framtida resultat. Om du slår tre "1" i rad på en D20, kan du känna att ett högt slag är "på gång". I verkligheten är varje slag en oberoende händelse. Sannolikheten att slå en 20 på nästa slag är fortfarande exakt 5%. Att veta detta hjälper spelare att göra objektiva taktiska val.',
    },
    {
      type: 'title',
      text: 'Ordlista för tärningar & sannolikhet',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fördel & Nackdel',
          definition: 'En mekanik där en spelare slår två D20 och tar antingen det högre resultatet (Fördel) eller det lägre (Nackdel). Fördel höjer genomsnittet från 10.5 till 13.8.',
        },
        {
          term: 'Klockkurva (normalfördelning)',
          definition: 'En sannolikhetsfördelning formad som en klocka, där resultat samlas runt det centrala genomsnittet. Det sker när man summerar flera tärningar (som 3d6 eller 2d10).',
        },
        {
          term: 'Kritisk träff',
          definition: 'En automatisk framgång som vanligtvis uppnås genom att slå det högsta värdet på en tärning (en naturlig 20 på en D20), vilket ofta ger extra skada.',
        },
        {
          term: 'Kritiskt fummel',
          definition: 'Ett automatiskt och ofta katastrofalt misslyckande, utlöst av att slå en 1:a på en D20.',
        },
        {
          term: 'Förväntat värde',
          definition: 'Det långsiktiga genomsnittliga resultatet av dina slag. För en enskild D6 är det förväntade värdet 3.5; för en D20 är det 10.5.',
        },
        {
          term: 'Percentiltärningar',
          definition: 'Ett par D10-tärningar (en som representerar tiotal, en som representerar ental) som slås tillsammans för att ge ett resultat mellan 1 och 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hur fungerar sannolikhetssimulatorn?',
      answer: 'Den beräknar den exakta sannolikhetsfördelningen för den valda tärningskombinationen och modifieraren med hjälp av kombinationsmatematik, så att du kan se dina chanser att slå över eller under målvärden.',
    },
    {
      question: 'Vilka tärningar stöds?',
      answer: 'Polyedriska tärningar som vanligtvis används i rollspel och brädspel, inklusive D4, D6, D8, D10, D12, D20 och D100.',
    },
    {
      question: 'Vad är modifierare och hur fungerar de?',
      answer: 'Modifierare är fasta värden (+1, -2, etc.) som du lägger till eller drar ifrån ditt totala slag för att representera karaktärsfärdigheter, bonusar eller straff.',
    },
    {
      question: 'Vad innebär det att slå med Fördel eller Nackdel?',
      answer: 'Att slå med Fördel innebär att du slår två D20-tärningar och väljer det högsta resultatet. Att slå med Nackdel innebär att du slår två D20-tärningar och väljer det lägsta resultatet. Detta är en vanlig mekanik i rollspel.',
    },
    {
      question: 'Vad är kritiska träffar och kritiska fummel?',
      answer: 'En kritisk träff sker när en tärning visar sitt högsta värde (t.ex. en naturlig 20 på en D20), vilket oftast ger automatisk framgång eller dubbel skada. Ett kritiskt fummel inträffar när en tärning visar en 1:a, vilket innebär ett automatiskt och ofta kaotiskt misslyckande.',
    },
    {
      question: 'Hur beräknar simulatorn sannolikheter för slagen?',
      answer: 'Simulatorn analyserar matematiskt varje möjligt utfall för dina valda tärningar och modifierare. Den visar sedan en procentuell sammanställning av hur troligt det är att du slår varje specifik summa.',
    },
    {
      question: 'Varför är ett 3d6-slag mer stabilt än att slå en enskild D20?',
      answer: 'Att slå en enskild D20 ger varje siffra en lika stor chans på 5%. Att slå 3d6 skapar en klockkurva där resultaten tenderar att samlas kring genomsnittet 10.5, vilket gör extremt höga eller låga resultat sällsynta.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Lägg till tärningar',
      text: 'Klicka på tärningsknapparna för att lägga till dem i din aktiva tärningspool.',
    },
    {
      name: 'Lägg till modifierare',
      text: 'Ange ett positivt eller negativt modifierarvärde att lägga till på ditt totala resultat.',
    },
    {
      name: 'Slå och se statistik',
      text: 'Klicka på Slå-knappen för att se det animerade resultatet, historiken och sannolikhetsanalysen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tärningskalkylator och Sannolikhetssimulator',
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
          'name': 'Hur fungerar sannolikhetssimulatorn?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Den beräknar den exakta sannolikhetsfördelningen för den valda tärningskombinationen och modifieraren med hjälp av kombinationsmatematik, så att du kan se dina chanser att slå över eller under målvärden.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Vilka tärningar stöds?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Polyedriska tärningar som vanligtvis används i rollspel och brädspel, inklusive D4, D6, D8, D10, D12, D20 och D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Vad är modifierare och hur fungerar de?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modifierare är fasta värden (+1, -2, etc.) som du lägger till eller drar ifrån ditt totala slag för att representera karaktärsfärdigheter, bonusar eller straff.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Vad innebär det att slå med Fördel eller Nackdel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Att slå med Fördel innebär att du slår två D20-tärningar och väljer det högsta resultatet. Att slå med Nackdel innebär att du slår två D20-tärningar och väljer det lägsta resultatet. Detta är en vanlig mekanik i rollspel.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Vad är kritiska träffar och kritiska fummel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En kritisk träff sker när en tärning visar sitt högsta värde (t.ex. en naturlig 20 på en D20), vilket oftast ger automatisk framgång eller dubbel skada. Ett kritiskt fummel inträffar när en tärning visar en 1:a, vilket innebär ett automatiskt och ofta kaotiskt misslyckande.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hur beräknar simulatorn sannolikheter för slagen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Simulatorn analyserar matematiskt varje möjligt utfall för dina valda tärningar och modifierare. Den visar sedan en procentuell sammanställning av how troligt det är att du slår varje specifik summa.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Varför är ett 3d6-slag mer stabilt än att slå en enskild D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Att slå en enskild D20 ger varje siffra en lika stor chans på 5%. Att slå 3d6 skapar en klockkurva där resultaten tenderar att samlas kring genomsnittet 10.5, vilket gör extremt höga eller låga resultat sällsynta.'
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
          'name': 'Lägg till tärningar',
          'text': 'Klicka på tärningsknapparna för att lägga till dem i din aktiva tärningspool.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lägg till modifierare',
          'text': 'Ange ett positivt eller negativt modifierarvärde att lägga till på ditt totala resultat.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Slå och se statistik',
          'text': 'Klicka på Slå-knappen för att se det animerade resultatet, historiken och sannolikhetsanalysen.'
        }
      ]
    }
  ],
};
