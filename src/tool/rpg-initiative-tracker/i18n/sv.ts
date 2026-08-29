import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Initiativ Spårare',
  addCombatant: 'Lägg till stridande',
  removeCombatant: 'Ta bort',
  playerLabel: 'Spelare',
  npcLabel: 'IP',
  initiativeLabel: 'Initiativ',
  modifierLabel: 'Modifikation',
  namePlaceholder: 'Karaktärsnamn',
  initiativePlaceholder: 'Initiativ',
  modifierPlaceholder: 'Modifikation',
  addButton: 'Lägg till',
  startCombat: 'Påbörja strid',
  endCombat: 'Avsluta strid',
  nextTurn: 'Nästa tur',
  prevTurn: 'Föregående tur',
  roundLabel: 'Runda',
  turnLabel: 'Tur',
  noCombatants: 'Inga stridande ännu. Lägg till karaktärer för att börja.',
  statusInput: 'Status',
  combatStarted: 'Strid påbörjad!',
  combatEnded: 'Strid avslutad',
  yourTurn: 'Tur',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'initiativ-sparare',
  title: 'RPG Initiativ Spårare: Stridsturordning & Initiativhanterare',
  description: 'Håll koll på initiativordningen för alla bordsrollspel. Lägg till stridande, slå initiativ, hantera statuseffekter och navigera mellan turer i strid.',
  ui,
  seo: [
    { type: 'title', text: 'Hur Initiativ Fungerar i D&D och Andra Bordsrollspel', level: 2 },
    { type: 'paragraph', html: 'Initiativ bestämmer ordningen för handlingar i strid. Varje deltagare gör ett Smyghetsslag i början av en fight, och turordningen går från högst till lägst. En digital initiativspårare automatiserar sorteringen, markerar den aktiva stridande, håller koll på pågående statuseffekter och informerar hela bordet om vems tur det är härnäst. Detta är särskilt användbart för Dungeon Masters som leder komplexa möten med flera fiendetyper och spelarkaraktärer.' },
    {
      type: 'stats',
      items: [
        { value: 'Obegränsat', label: 'Stridande som stöds' },
        { value: 'Auto-sortera', label: 'Efter initiativslag' },
        { value: 'Realtid', label: 'Turspårning' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Standard Initiativregler för D&D 5e', level: 2 },
    { type: 'paragraph', html: 'I D&D 5e gör varje deltagare ett Smyghetsslag i början av striden. Spelare slår individuellt. Dungeon Master slår en gång för varje grupp av identiska monster. Turordningen går från högst till lägst, sedan tillbaka till toppen för nästa runda. Lika slag avgörs av Smyghetsvärde, eller så bestämmer DM. En digital spårare hanterar allt detta automatiskt och visar hela turordningen i en blick.' },
    {
      type: 'table',
      headers: ['Funktion', 'Manuell spårning', 'Digital spårare'],
      rows: [
        ['Sortering', 'Skriv om listan när initiativ ändras', 'Omedelbar automatisk omordning'],
        ['Aktuell tur', 'Måste spåras muntligt eller med en markör', 'Markerad med grön glöd'],
        ['Statuseffekter', 'Separat anteckningsblock eller tärning vid miniatyren', 'Klicka för att växla på varje stridande'],
        ['Rundräkning', 'Håll räkningen i huvudet eller på kladdpapper', 'Visas automatiskt'],
        ['Lägga till mitt i strid', 'Radera och skriv om ordningen', 'Infogas på rätt position'],
      ],
    },
    {
      type: 'tip',
      title: 'Tips för att leda Initiativ vid bordet',
      html: 'Slå initiativ för alla monster före sessionen för att spara tid under striden. Lägg till vanliga statuseffekter som Bedövad eller Förgiftad till en stridande så snart de appliceras. Detta förhindrar att man glömmer ett tillstånd när den påverkade karaktärens tur kommer. Använd knappen Föregående tur för att granska vad som hände om du behöver kontrollera ett beslut från tidigare i rundan.',
    },
    {
      type: 'title',
      text: 'Vanliga Statuseffekter i Strid',
      level: 3,
    },
    { type: 'paragraph', html: 'Att hålla koll på tillstånd under strid är en av de mest förbisedda uppgifterna. En statuseffekt kan helt förändra en karaktärs effektivitet, och att glömma att ta bort den kan rubba balansen i ett möte. Initiativspåraren låter dig applicera och ta bort tillstånd med ett enda klick så att de förblir synliga bredvid den stridandes namn.' },
    {
      type: 'proscons',
      title: 'Digital vs manuell hantering av statuseffekter',
      items: [
        {
          pro: 'Tillstånd är synliga precis bredvid karaktärsnamnet så ingen glömmer en aktiv effekt.',
          con: 'Kräver att man kommer ihåg att växla statusar på och av när de appliceras och tas bort.',
        },
        {
          pro: 'Flera statusar kan vara aktiva på samma stridande och visas alla tillsammans.',
          con: 'Spåraren tillämpar inte reglerna automatiskt; DM måste fortfarande applicera dem.',
        },
        {
          pro: 'Statusar kan läggas till mitt i striden utan att pausa för att skriva på ett karaktärsblad.',
          con: 'Endast fördefinierade statustaggar är tillgängliga som standard.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alternativa Initiativsystem',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standard Initiativ',
          description: 'Varje stridande slår en gång i början. Samma ordning upprepas varje runda. Enkelt och förutsägbart, men ordningen är låst efter första slaget. Fungerar bra för de flesta grupper och mötesstorlekar.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Enkelt att lära och lära ut', 'Fast turordning varje runda', 'Fungerar för alla gruppstorlekar'],
        },
        {
          title: 'Sides Initiativ',
          description: 'Alla spelarkaraktärer agerar tillsammans, sedan alla fiender tillsammans. Vanligt i äldre editioner och OSR-spel. Snabbar upp strid genom att minska individuell spårning men minskar taktisk nyans.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Snabbaste stridslösningen', 'Uppmuntrar partikoordination', 'Mindre variation i individuella turer'],
        },
        {
          title: 'Hastighetsfaktor Variant',
          description: 'Varje runda deklarerar deltagarna först handlingar, sedan slår de initiativ modifierat av den valda handlingen. Används i valfria regelsystem. Skapar oförutsägbar turordning men lägger till djup i beslutsfattande.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Annan ordning varje runda', 'Handlingsval påverkar timing', 'Fler taktiska beslut per tur'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Stridsspårare Ordlista',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Initiativ',
          definition: 'Ett Smyghetsslag i början av strid för att bestämma turordningen. Varje deltagare slår och agerar i fallande ordning.',
        },
        {
          term: 'Runda',
          definition: 'En fullständig cykel där varje stridande tar en tur. Efter den sista stridande agerat slutar rundan och en ny runda börjar från toppen av ordningen.',
        },
        {
          term: 'Statuseffekt',
          definition: 'Ett tillfälligt tillstånd som ändrar en karaktärs förmågor. Exempel inkluderar Bedövad (kan inte agera), Förgiftad (nackdel på slag) och Bländad (attacker har nackdel).',
        },
        {
          term: 'IP',
          definition: 'Icke-spelarkaraktär som styrs av Dungeon Master. I initiativspårning är IPs typiskt fiender eller neutrala varelser i mötet.',
        },
        {
          term: 'SP',
          definition: 'Spelarkaraktär som styrs av en av spelarna vid bordet. SPs särskiljs från IPs i spåraren för att hjälpa DM att identifiera vänliga mål.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'När man ska slå om Initiativ varje runda',
      icon: 'mdi:information-outline',
      badge: 'DM TIPS',
      html: 'Vissa DM föredrar att slå om initiativ varje runda för oförutsägbarhet, medan de flesta behåller samma ordning för enkelhetens skull. Om en ny stridande ansluter mitt i striden, slå deras initiativ och infoga dem på den aktuella positionen. Spåraren hanterar detta automatiskt. För bossmöten, överväg att ge skurken ett fast initiativ vid en specifik räkning för att få striden att kännas mer strukturerad.',
    },
  ],
  faq: [
    {
      question: 'Hur lägger jag till stridande i initiativordningen?',
      answer: 'Ange karaktärsnamn, initiativslag och initiativmodifikation, klicka sedan på Lägg till. Växla mellan Spelare och IP-typer för att visuellt särskilja gruppmedlemmar från fiender i listan.',
    },
    {
      question: 'Vad händer när jag klickar på Påbörja strid?',
      answer: 'Alla stridande sorteras efter initiativ från högst till lägst. Turordningen börjar uppifrån, rundräknaren startar på 1 och den aktiva stridande markeras med en grön glöd.',
    },
    {
      question: 'Hur håller jag koll på statuseffekter under strid?',
      answer: 'Klicka på en statustagg (Bedövad, Förgiftad, Bländad, etc.) för att växla den på eller av för den valda stridande. Aktiva statusar visas bredvid karaktärsnamnet. Detta påminner alla om pågående effekter när den stridandes tur kommer.',
    },
    {
      question: 'Finns mina stridsdata kvar om jag uppdaterar sidan?',
      answer: 'Ja. Initiativspåraren sparar stridstillståndet i din webbläsares lokala lagring. Dina stridande, turordning och statuseffekter finns kvar efter en sidomladdning. Data rensas när du klickar på Avsluta strid.',
    },
    {
      question: 'Kan jag gå tillbaka till föregående tur?',
      answer: 'Ja. Knappen Föregående tur låter dig navigera bakåt i turordningen. Detta är användbart för att granska vad som hände tidigare i rundan eller korrigera ett misstag.',
    },
    {
      question: 'Kan jag lägga till eller ta bort stridande under strid?',
      answer: 'Ja. Nya stridande kan läggas till när som helst och infogas automatiskt på rätt position baserat på deras initiativslag. Befintliga stridande kan tas bort om de lämnar mötet.',
    },
    {
      question: 'Fungerar detta med vilket RPG-system som helst?',
      answer: 'Ja. Spåraren fungerar med alla bordsrollspel som använder initiativbaserad turordning. Ange bara de initiativvärden ditt system använder, oavsett om det är ett d20-slag plus Smyghet för D&D eller en annan mekanik för andra spel.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Lägg till stridande före strid',
      text: 'Ange varje karaktärs namn, deras initiativslag och modifikation. Markera dem som Spelare eller IP. Lägg till så många stridande som ditt möte behöver.',
    },
    {
      name: 'Påbörja strid för att låsa ordningen',
      text: 'Klicka på Påbörja strid för att sortera alla efter initiativ och börja spåra turer. Den första stridande i ordningen markeras.',
    },
    {
      name: 'Navigera turer och spåra tillstånd',
      text: 'Använd Nästa tur och Föregående tur för att röra dig genom ordningen. Applicera statuseffekter genom att klicka på statustaggarna för att spåra tillstånd under striden.',
    },
    {
      name: 'Avsluta strid när du är klar',
      text: 'Klicka på Avsluta strid för att stoppa turspårningen. Detta rensar det aktiva tillståndet och återställer rundräknaren medan stridandelistan behålls för nästa möte.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'RPG Initiativ Spårare',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur lägger jag till stridande?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ange karaktärsnamn, initiativslag och initiativmodifikation, klicka sedan på Lägg till. Spelare och IPs kan växlas för att särskilja dem i listan.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad händer när jag klickar på Påbörja strid?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Alla stridande sorteras efter initiativ (högst först). Turordningen börjar med den första stridande och en rundräknare startar på 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man använder Initiativ Spåraren',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Lägg till stridande',
          'text': 'Ange karaktärsdetaljer inklusive namn, initiativslag och modifikation. Växla mellan Spelare och IP-typer före tillägg.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Påbörja strid',
          'text': 'Klicka på Påbörja strid för att sortera alla stridande efter initiativ och börja spårning av turordning.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Hantera turer',
          'text': 'Använd Nästa tur och Föregående tur för att navigera turordningen. Den aktiva stridande markeras med en grön glöd.',
        },
      ],
    },
  ],
};
