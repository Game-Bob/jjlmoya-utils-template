import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'manfaserna-tidvatten-raknare',
  title: 'Månfasräknare för Rollspel: Spåra Anpassade Fantasimånar och Tidvattencykler',
  description: 'Beräkna månfaser för alla fantasi världar med anpassade omloppsperioder. Håll koll på flera månar samtidigt, se 10-dagars prognoser och få en kombinerad tidvattennivå för magi- och vädersystem i D&D, Pathfinder eller andra rollspel.',
  ui: {
    title: 'Månfas & mystisk tidvatten spårare',
    moonsTitle: 'Månkonfiguration',
    addMoon: 'Lägg till anpassad måne',
    removeMoon: 'Ta bort måne',
    moonName: 'Månens namn',
    orbitalPeriod: 'Omloppsperiod (dagar)',
    startingOffset: 'Startförskjutning (dagar)',
    timelineTitle: 'Tidskontroller',
    currentDay: 'Nuvarande kampanjdag',
    tideTitle: 'Mystisk tidvattenstatus',
    tideLevel: 'Tidvattenenerginivå',
    magicModifier: 'Magisk tidvatteneffekt',
    forecastTitle: 'Månfas & tidvattenprognos',
    dayLabel: 'Dag',
    resetButton: 'Återställ till dag 0',
    presetTitle: 'Kampanjförinställningar',
    presetSingle: 'Klassisk måne',
    presetDouble: 'Tvillingsmånar av magi',
    presetTriple: 'Trippel förmörkelserike',
    newMoon: 'Nymåne',
    waxingCrescent: 'Tilltagande skära',
    firstQuarter: 'Första kvartilen',
    waxingGibbous: 'Tilltagande halvmåne',
    fullMoon: 'Fullmåne',
    waningGibbous: 'Avtagande halvmåne',
    lastQuarter: 'Sista kvartilen',
    waningCrescent: 'Avtagande skära',
  },
  seo: [
    { type: 'title', text: 'Hur man spårar månfaser i en fantasy-rollspelskampanj', level: 2 },
    { type: 'paragraph', html: 'De flesta fantasi-världar har månar med omloppsperioder som skiljer sig från den verkliga måncykeln på 29,5 dagar. Fältet <strong>Omloppsperiod</strong> anger hur många speltimmar det tar för en måne att genomföra en hel cykel. Jordens måne tar 29 dagar; Eberron-världen använder 28; Tolkiens Midgård har en måncykel nära 30. Ställ in detta till vad din världs övertygelse specificerar, eller välj ett tal mellan 5 och 60 dagar som ger den förmörkelsefrekvens du önskar.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Månar som spåras samtidigt' },
        { value: '10', label: 'Dagars prognosintervall' },
        { value: '5', label: 'Tidvattenstadier (Nipp till Spring)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Förstå fältet för startförskjutning', level: 2 },
    { type: 'paragraph', html: '<strong>Startförskjutningen</strong> anger var i cykeln en måne befinner sig på kampanjens dag 0. En förskjutning på 0 innebär att månen startar som nymåne. En förskjutning lika med halva omloppsperioden startar den som fullmåne. Använd detta för att matcha den fas som beskrivs i din kampanjs öppningsscen, eller för att säkerställa att två månar börjar i olika positioner så att de inte alltid är i linje.' },
    { type: 'title', text: 'Vad tidvattennivån betyder för ditt spel', level: 2 },
    { type: 'paragraph', html: 'Tidvattennivån kombinerar gravitationskraften från alla aktiva månar baserat på deras nuvarande faser. En <strong>Springflod</strong> (över 75 %) inträffar när månarna är nästan i linje vid full- eller nymåne och drar i samma riktning. En <strong>Nippflod</strong> (under 30 %) inträffar när månar är i motsatta faser och delvis tar ut varandra. Du kan knyta detta direkt till vilket mekaniskt system som helst: bonusar till räddningsslag mot trollformler, varaktighet för druidens förvandling, varulvens tröskelvärden för förvandling eller stormstyrka på kartor över kustområden.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Enkel måne',
          description: 'Bäst för världar som liknar den verkliga världen eller har en enda dominerande måne. Enkel 8-fas cykel, lätt att följa utan referens.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'Passar för D&D Forgotten Realms (Selune, 30 dagar)',
            'Varulvs- och lykantropkampanjer',
            'Skräcksessioner kopplade till fullmånen'
          ]
        },
        {
          title: 'Tvillingsmånar',
          description: 'Vanligt i hög-fantasy-världar. Skapar frekventa partiella linjeringar och intressanta mittcykel-tidvatten. Linjeringar sker ungefär varje MGM(period1, period2) dag.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28d + Aryth 12d)',
            'Skapar förutsägbara förmörkelsesäsonger',
            'Passar för druidiska eller elementära magisystem'
          ]
        },
        {
          title: 'Trippelmånar',
          description: 'Sällsynta trippla linjeringar skapar oförutsägbara svall. Det kombinerade tidvattnet blir kaotiskt och svårt att förutsäga utan detta verktyg, vilket är det som gör det dramatiskt användbart.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Vild magi-svalltabeller vid linjering',
            'Pathfinder Golarion-liknande komplexitet',
            'Långperiodscykler för episka kampanjer'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Vanliga omloppsperioder för fantasi-världar', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: 'Omloppsperiod på 30 dagar, enkel måne. Använd förskjutning 15 för att börja med fullmåne i session 1.' },
        { term: 'Eberrons månar', definition: 'Eberron har 12 månar med perioder från 9 till 28 dagar. Kör varje som en separat måneinstans, eller välj de två mest plotrelevanta.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion har en enda måne, Somal, med en 29-dagars cykel. Mörka tapethändelser kan modelleras genom att sätta en andra måne med låg period och förskjutningsinterferens.' },
        { term: 'Anpassad värld', definition: 'En 15-dagars måne ger 24 fullmånar per år. En 45-dagars måne ger ungefär 8. Kortare perioder innebär fler förmörkelser men minskar deras narrativa vikt.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tips: Ställ in en specifik fas för session 1',
      icon: 'mdi:information-outline',
      badge: 'INSTÄLLNINGSTIPS',
      html: 'Om din kampanj börjar med en skärmåne, sätt förskjutningen till cirka 20 % av omloppsperioden. För en fullmånestart, använd 50 % av perioden som förskjutning. Till exempel skulle en 28-dagars måne som startar som fullmåne använda förskjutning 14. Flytta dagräknaren till din nuvarande kampanjdag så visar prognosen automatiskt de nästa 10 dagarna.'
    }
  ],
  faq: [
    { question: 'Vilken omloppsperiod ska jag använda för min fantasi-värld?', answer: 'Om din värld inte specificerar en så fungerar 28 till 30 dagar bra för en enda måne. För flera månar, välj perioder som inte är enkla multiplar av varandra (t.ex. 20 och 27) så att linjeringar inte upprepas för ofta. Kortare perioder (10 till 15 dagar) fungerar bra för sekundära månar som skapar frekventa mindre tidvatten.' },
    { question: 'Hur får jag två månar att linjera vid ett specifikt kampanjmoment?', answer: 'Sätt båda månarna till samma förskjutningsvärde. De börjar i samma fas på dag 0 och linjerar igen vid varje gemensam multipel av deras två perioder. För att förskjuta dem, ge den andra månen en förskjutning lika med halva dess omloppsperiod så att de börjar mitt emot varandra.' },
    { question: 'Vad betyder en springflod i spelmekaniska termer?', answer: 'Springflod innebär att alla aktiva månar drar i linje och producerar maximal tidvattenenergi. Du kan använda detta för att utlösa vild magi-svall, öka räckvidden på helande trollformler, förvärra stormstyrka eller markera det som en helig natt för religiösa fraktioner i din värld.' },
    { question: 'Vad betyder en nippflod i spelmekaniska termer?', answer: 'Nippflod inträffar när månar delvis tar ut varandra. Det är ett bra tillfälle för antimagiska effekter, en död vindstilla till sjöss, eller för skurkar som behöver förutsägbar magiundertryckning för att genomföra sina planer.' },
    { question: 'Kan jag använda detta för Call of Cthulhu eller skräckkampanjer?', answer: 'Ja. Använd en enda 29-dagars måne och sätt förskjutningen så att fullmånen infaller under sessionens klimax. Tidvattenspåraren kan representera Mythos-inflytande eller psykisk känslighetstoppar som skalar med fasprocenten.' },
    { question: 'Hur fungerar 10-dagars prognosen?', answer: 'Prognosen visar månfasen för varje aktiv måne som en färgad prick för var och en av de nästa 10 kampanjdagarna, med start från den aktuella dagen. Procentandelen under varje dagskolumn är den kombinerade tidvattennivån. Dagar med hög procent är bra kandidater för dramatiska möten kopplade till magi eller väder.' },
    { question: 'Kan jag spåra en måne med en mycket kort cykel, som 7 dagar?', answer: 'Ja. Ställ in omloppsperioden till 7. Månen genomför en hel cykel varje vecka i speltid och går igenom alla 8 faser. Detta är användbart för kampanjvärldar där månmagi återställs varje vecka, eller för att spåra en liten kometliknande himlakropp som passerar regelbundet.' },
    { question: 'Hur matchar jag månfasen från en publicerad äventyrsmodul?', answer: 'Slå upp kampanjdagen i äventyret och notera den beskrivna fasen. Räkna hur många dagar in i cykeln det motsvarar, dividera med omloppsperioden och använd det som din förskjutning. Till exempel, en halvmåne på dag 0 av en 28-dagars cykel innebär en förskjutning på 7 (en fjärdedel av 28).' }
  ],
  bibliography,
  howTo: [
    { name: 'Ställ in omloppsperioden', text: 'Ange antalet speltimmar din måne tar att genomföra en hel cykel. Använd din världs övertygelse eller välj ett värde mellan 5 och 60.' },
    { name: 'Ställ in startförskjutningen', text: 'Förskjut stafasen genom att ange ett dagantal. En förskjutning på 0 börjar vid nymåne. Halva omloppsperioden börjar vid fullmåne.' },
    { name: 'Flytta dagräknaren framåt', text: 'Använd stegknapparna eller skjutreglaget för att gå till din nuvarande kampanjdag och läs av fasen och tidvattennivån i realtid.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Månfasräknare för Rollspel: Spåra Anpassade Fantasimånar och Tidvattencykler',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Vilken omloppsperiod ska jag använda för min fantasi-värld?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Om din värld inte specificerar en så fungerar 28 till 30 dagar bra för en enda måne. För flera månar, välj perioder som inte är enkla multiplar av varandra så att linjeringar inte upprepas för ofta.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Vad betyder en springflod i spelmekaniska termer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Springflod innebär att alla aktiva månar drar i linje. Använd detta för att utlösa vild magi-svall, öka räckvidden på helande trollformler, förvärra stormstyrka eller markera det som en helig natt för religiösa fraktioner.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hur får jag två månar att linjera vid ett specifikt kampanjmoment?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sätt båda månarna till samma förskjutningsvärde. De linjerar igen vid varje gemensam multipel av sina två omloppsperioder. För att förskjuta dem, ge den andra månen en förskjutning lika med halva dess omloppsperiod.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hur fungerar 10-dagars prognosen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Prognosen visar månfasen för varje aktiv måne som en färgad prick för var och en av de nästa 10 kampanjdagarna. Procentandelen som visas är den kombinerade tidvattennivån. Dagar med hög procent är kandidater för dramatiska magi- eller väderhändelser.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kan jag använda detta för Call of Cthulhu eller skräckkampanjer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Använd en enda 29-dagars måne och sätt förskjutningen så att fullmånen infaller under sessionens klimax. Tidvattenspåraren kan representera Mythos-inflytande eller psykisk känslighetstoppar som skalar med fasprocenten.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hur matchar jag månfasen från en publicerad äventyrsmodul?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Notera den beskrivna fasen och räkna hur många dagar in i cykeln det motsvarar. Dividera med omloppsperioden och använd den andelen som din förskjutning. Till exempel, en halvmåne på en 28-dagars cykel innebär en förskjutning på 7.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man spårar månfaser i en rollspelskampanj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ställ in omloppsperioden',
          'text': 'Ange antalet speltimmar din måne tar att genomföra en hel cykel.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Ställ in startförskjutningen',
          'text': 'Förskjut stafasen genom att ange ett dagantal. Halva omloppsperioden börjar vid fullmåne.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Flytta dagräknaren framåt',
          'text': 'Använd stegknapparna eller skjutreglaget för att gå till din nuvarande kampanjdag och läs av fasen och tidvattennivån.'
        }
      ]
    }
  ]
};
export default content;
