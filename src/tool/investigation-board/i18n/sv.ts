import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "konspirationsbrade-skapare",
  title: "Konspirationsbrädsmakare: Online Detektiv RPG Utredningskartor",
  description: "Skapa interaktiva konspirationsbräden och RPG-utredningskartor. Koppla samman misstänkta, ledtrådar och platser med färgade trådar.",
  ui: {
  "title": "Konspirationsbrädsmakare",
  "addCard": "Lägg till Kort",
  "searchPlaceholder": "Sök kort efter namn eller ledtrådar",
  "filterAll": "Alla Kategorier",
  "filterCharacter": "Karaktärer",
  "filterClue": "Ledtrådar",
  "filterLocation": "Platser",
  "filterItem": "Föremål",
  "cardName": "Kortnamn",
  "cardCategory": "Kategori",
  "cardDescription": "Beskrivning",
  "cardNotes": "Privata Anteckningar",
  "cardTags": "Taggar separerade med kommatecken",
  "cardColor": "Kortets markeringsfärg",
  "save": "Spara ändringar",
  "delete": "Ta bort",
  "cancel": "Avbryt",
  "clearBoard": "Töm bräde",
  "connectionsTitle": "Relationskarta",
  "addConnection": "Lägg till koppling",
  "connectionLabel": "Relationsetikett",
  "connectionColor": "Linjefärg",
  "sourceCard": "Från kort",
  "targetCard": "Till kort",
  "close": "Stäng",
  "character": "Karaktär",
  "clue": "Ledtråd",
  "location": "Plats",
  "item": "Föremål",
  "custom": "Anpassad",
  "immersive": "Helskärm"
},
  seo: [
    { type: 'title', text: "Online Konspirationsbrädsmakare: Organisera RPG-ledtrådar och Relationer", level: 2 },
    { type: 'paragraph', html: "Att nysta upp en komplex väv av lögner, spåra misstänktas alibin och koppla samman bevis på en brottsplats kan överväldiga vilken detektiv-RPG-grupp som helst. Oavsett om du leder en Call of Cthulhu-kampanj, ett Cyberpunk-mordmysterium, en D&D-detektivutredning eller skriver en thrillerroman, är vår online konspirationsbrädsmakare det ultimata verktyget. Dra, släpp, kategorisera och länka ledtrådar, NPC:er och fysiska bevis på en oändlig digital anslagstavla. Använd färgkodade relationstrådar för att direkt se hur misstänkta relaterar till brottsplatser, alibin och dolda motiv." },
    {
      type: 'stats',
      items: [
        { value: "Obegränsat", label: "Nodbräde" },
        { value: "4", label: "Kategorier" },
        { value: "Dra-och-Släpp", label: "Gränssnitt" }
      ],
      columns: 3
    },
    { type: 'title', text: "Tips för att strukturera ditt RPG-detektivbräde", level: 2 },
    { type: 'tip', title: "De Tre Ledtrådarnas Regel", html: "För varje slutsats eller deduktion du vill att spelarna ska göra, lägg till minst tre olika ledtrådar på utredningsbrädet. Koppla samman dem med färgade trådar för att visa alternativa tankebanor. Använd Karaktärskort för misstänkta, Platser för brottsplatser och Föremål för fysiska bevis. Uppdatera anteckningar löpande." },
    { type: 'title', text: "Digitala Konspirationsbrädor vs Fysiska Korktavlor", level: 2 },
    {
      type: 'proscons',
      title: "Digitala Konspirationsbrädor vs Fysiska Korktavlor",
      items: [
        { pro: "Oändlig brädstorlek för att lägga till så många ledtrådar, misstänkta och relationer som behövs utan utrymmesbegränsning.", con: "Kräver en skärm, surfplatta eller digital enhet under spelsessionen vid bordet." },
        { pro: "Snabb sökning och kategorifilter för att omedelbart hitta specifika vittnen eller ledtrådar under sessionerna.", con: "Saknar den taktila känslan av riktiga röda trådar och nålar på en riktig vägg." },
        { pro: "Spara, ladda och dela kartor digitalt utan att ta upp fysisk plats hemma mellan spelsessionerna.", con: "Kräver internetanslutning eller webbläsarens lokala lagring för att spara brädets tillstånd." }
      ]
    },
    { type: 'title', text: "Välj kortkategorier för din mysteriekarta", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Karaktärsnoder",
          description: "Representerar NPC:er, misstänkta, vittnen eller organisationer. Markera relationer med färgade linjer.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Följ misstänktas alibin och motiv",
            "Koppla familjeband och fraktionsallianser",
            "Dokumentera vittnesmål i detalj"
          ]
        },
        {
          title: "Ledtrådsnoder",
          description: "Representerar fysiska bevis, obduktionsrapporter, alibin eller rykten som spelarna upptäcker under kampanjen.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Obduktionsrapporter och forensiska analyser",
            "Fysiska föremål funna på brottsplatser",
            "Tjuvlyssnade rykten och hemligheter"
          ]
        },
        {
          title: "Platsnoder",
          description: "Brottsplatser, misstänktas hem, hemliga gömställen eller städer.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Foton och kartor över brottsplatser",
            "Bostäder för viktiga NPC:er",
            "Hemliga tillhåll och dimensionsportaler"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Ordlista för Konspirationskartläggning", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Utredningsnod", definition: "Valfritt kort på ritytan som representerar en person, plats, ledtråd eller ett föremål." },
        { term: "Relationstråd", definition: "En färgad linje som kopplar samman två kort och visar deras relation (t.ex. Misstänkt, Alibi, Ägare)." },
        { term: "Helskärmsläge", definition: "En layout som döljer kontrollpanelerna för att maximera arbetsytan på mobiler eller surfplattor." },
        { term: "Markeringsväg", definition: "En visuell effekt som endast visar det valda kortets anslutna noder och linjer, medan resten tonas ner." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Prestandatips för Mobila Enheter",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Om det går trögt att dra noder på äldre surfplattor, aktivera helskärmsläget för att dölja menyerna. Se till att rutnätsinpassning är aktiv (korten snäpper var 15px) för att hålla ordning med minimal ansträngning."
    }
  ],
  faq: [
    { question: "Hur lägger jag till kopplingslinjer?", answer: "Klicka på Lägg till koppling i kontrollpanelen, eller klicka på länkikonen på ett kort och välj målkortet." },
    { question: "Kan jag dra kort på mobilen?", answer: "Ja, brädet stöder pekgester för att dra och flytta kort smidigt på smartphones och surfplattor." },
    { question: "Kan jag använda anpassade kortfärger?", answer: "Ja. Dubbelklicka på ett kort, välj Anpassad under Kategori och välj en markeringsfärg." },
    { question: "Sparar brädet mitt arbete?", answer: "Ja. Dina framsteg sparas automatiskt i webbläsarens lokala lagring under det aktuella brädnamnet." },
    { question: "Hur zoomar och flyttar jag mig på brädet?", answer: "Använd nypgester eller mushjulet för att zooma in och ut. Dra bakgrunden för att panorera runt på ritytan." }
  ],
  bibliography,
  howTo: [
    { name: "Lägg till Utredningskort", text: "Skapa kort som representerar NPC:er, ledtrådar, brottsplatser eller föremål." },
    { name: "Länka Relationer", text: "Skapa kopplingslinjer mellan kort för att visa hur ledtrådar hänger ihop." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Konspirationsbrädsmakare: Online Detektiv RPG Utredningskartor",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Hur lägger jag till kopplingslinjer?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klicka på Lägg till koppling i kontrollpanelen, eller klicka på länkikonen på ett kort och välj målkortet."
          }
        },
        {
          '@type': 'Question',
          'name': "Kan jag dra kort på mobilen?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja, brädet stöder pekgester för att dra och flytta kort smidigt på smartphones och surfplattor."
          }
        },
        {
          '@type': 'Question',
          'name': "Kan jag använda anpassade kortfärger?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja. Dubbelklicka på ett kort, välj Anpassad under Kategori och välj en markeringsfärg."
          }
        },
        {
          '@type': 'Question',
          'name': "Sparar brädet mitt arbete?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja. Dina framsteg sparas automatiskt i webbläsarens lokala lagring under det aktuella brädnamnet."
          }
        },
        {
          '@type': 'Question',
          'name': "Hur zoomar och flyttar jag mig på brädet?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Använd nypgester eller mushjulet för att zooma in och ut. Dra bakgrunden för att panorera runt på ritytan."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Hur man använder Konspirationsbrädsmakaren",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Lägg till Utredningskort",
          'text': "Skapa kort som representerar NPC:er, ledtrådar, brottsplatser eller föremål."
        },
        {
          '@type': 'HowToStep',
          'name': "Länka Relationer",
          'text': "Skapa kopplingslinjer mellan kort för att visa hur ledtrådar hänger ihop."
        }
      ]
    }
  ]
};
