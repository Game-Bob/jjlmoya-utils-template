import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "samenzweringsbord-maker",
  title: "Samenzweringsbord Maker: Online Detective RPG Onderzoekskaarten",
  description: "Ontwerp interactieve complotborden en onderzoekskaarten voor RPG-campagnes. Verbind personages, aanwijzingen en locaties met rode draden.",
  ui: {
  "title": "Samenzweringsbord Maker",
  "addCard": "Kaart toevoegen",
  "searchPlaceholder": "Zoek kaarten op naam of aanwijzingen",
  "filterAll": "Alle categorieën",
  "filterCharacter": "Personages",
  "filterClue": "Aanwijzingen",
  "filterLocation": "Locaties",
  "filterItem": "Voorwerpen",
  "cardName": "Kaartnaam",
  "cardCategory": "Categorie",
  "cardDescription": "Beschrijving",
  "cardNotes": "Privénotities",
  "cardTags": "Tags gescheiden door komma\\'s",
  "cardColor": "Kaartmarkeringskleur",
  "save": "Wijzigingen opslaan",
  "delete": "Verwijderen",
  "cancel": "Annuleren",
  "clearBoard": "Bord leegmaken",
  "connectionsTitle": "Relatiekaart",
  "addConnection": "Verbinding toevoegen",
  "connectionLabel": "Relatielabel",
  "connectionColor": "Lijnkleur",
  "sourceCard": "Van kaart",
  "targetCard": "Naar kaart",
  "close": "Sluiten",
  "character": "Personage",
  "clue": "Aanwijzing",
  "location": "Locatie",
  "item": "Voorwerp",
  "custom": "Aangepast",
  "immersive": "Volledig scherm"
},
  seo: [
    { type: 'title', text: "Online Samenzweringsbord Maker: Organiseer RPG-aanwijzingen & Relaties", level: 2 },
    { type: 'paragraph', html: "Het ontwarren van een complex web van leugens, het volgen van alibi's van verdachten en het leggen van verbanden tussen bewijsmateriaal op een plaats delict kan elke detective RPG-groep overweldigen. Of je nu een Call of Cthulhu-campagne, een Cyberpunk-moordmysterie, een homebrew D&D-detectiveavontuur leidt of een thrillerroman schrijft: onze online complotbord-maker is de ultieme tool. Sleep, categoriseer en verbind aanwijzingen, NPC's en fysiek bewijs op een oneindig digitaal complotbord. Gebruik gekleurde relatiedraden om direct te zien hoe verdachten zich verhouden tot scènes, alibi's en verborgen motieven." },
    {
      type: 'stats',
      items: [
        { value: "Onbeperkt", label: "Knooppuntenbord" },
        { value: "4", label: "Categorieën" },
        { value: "Sleep-en-Neerzet", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Tips voor het structureren van je RPG-detectivebord", level: 2 },
    { type: 'tip', title: "De Drie Aanwijzingen Regel", html: "Voor elke conclusie of deductie die je wilt dat de spelers maken, voeg je ten minste drie afzonderlijke aanwijzingen toe aan het onderzoeksbord. Verbind ze met gekleurde draden om alternatieve redeneringen te tonen. Gebruik Personagekaarten voor verdachten, Locaties voor plaatsen delict en Voorwerpen voor fysiek bewijsmateriaal. Werk privénotities voortdurend bij." },
    { type: 'title', text: "Digitale Complotborden versus Fysieke Kurkenborden", level: 2 },
    {
      type: 'proscons',
      title: "Digitale Complotborden versus Fysieke Kurkenborden",
      items: [
        { pro: "Onbeperkte bordgrootte om zoveel aanwijzingen, verdachten en relaties toe te voegen als nodig is zonder ruimtelimiet.", con: "Vereist een scherm, tablet of digitaal apparaat tijdens de spelsessie aan tafel." },
        { pro: "Directe zoekfunctie en categorie-filters om specifieke getuigen of bewijsstukken tijdens sessies direct te vinden.", con: "Mist het tactiele gevoel van echte rode draden en punaises op een echte muur." },
        { pro: "Sla kaarten digitaal op, laad ze en deel ze zonder fysieke ruimte in te nemen tussen spelsessies door.", con: "Vereist internettoegang of lokale browseropslag om de staat van het bord op te slaan." }
      ]
    },
    { type: 'title', text: "Kaartcategorieën kiezen voor je mysteriekaart", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Karakterkaarten",
          description: "Vertegenwoordigen NPC's, verdachten, getuigen of organisaties. Markeer relaties met gekleurde lijnen.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Volg alibi's en motieven van verdachten",
            "Verbind familiebanden en factie-allianties",
            "Leg getuigenverklaringen in detail vast"
          ]
        },
        {
          title: "Aanwijzingen",
          description: "Vertegenwoordigen fysiek bewijs, autopsierapporten, alibi's of geruchten die spelers ontdekken tijdens de campagne.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Autopsie- en forensische rapporten",
            "Fysieke objecten gevonden op plaatsen delict",
            "Opgevangen geruchten en geheimen"
          ]
        },
        {
          title: "Locatiekaarten",
          description: "Plaatsen delict, huizen van verdachten, schuilplaatsen of steden.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Foto's en plattegronden van plaatsen delict",
            "Woningen van belangrijke NPC's",
            "Geheime schuilplaatsen en portalen"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Begrippenlijst Samenzweringskaarten", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Onderzoeksknooppunt", definition: "Elke kaart op het canvas die een persoon, locatie, aanwijzing of voorwerp vertegenwoordigt." },
        { term: "Relatiedraad", definition: "Een gekleurde lijn die twee kaarten verbindt en hun relatie aangeeft (bijv. Verdachte, Alibi, Eigenaar)." },
        { term: "Volledig schermmodus", definition: "Een lay-out die bedieningspanelen verbergt om de werkruimte op mobiel of tablet te maximaliseren." },
        { term: "Highlight-pad", definition: "Een visueel pad dat alleen de verbonden kaarten en lijnen van een geselecteerde kaart toont en de rest dimt." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Prestatietip voor Mobiele Apparaten",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Als het slepen van kaarten traag aanvoelt op oudere tablets of telefoons, activeer dan de schermvullende modus. Zorg ervoor dat rasteruitlijning aanstaat (kaarten lijnen uit op elke 15px) om het bord netjes te houden."
    }
  ],
  faq: [
    { question: "Hoe voeg ik verbindingen toe?", answer: "Klik op Verbinding toevoegen in het bedieningspaneel of klik op het link-icoon van een kaart en selecteer de doelkaart." },
    { question: "Kan ik kaarten slepen op mobiel?", answer: "Ja, het bord ondersteunt aanraakbediening om kaarten soepel te slepen en te verplaatsen op smartphones en tablets." },
    { question: "Kan ik aangepaste kaartkleuren gebruiken?", answer: "Ja. Dubbelklik op een kaart, selecteer Aangepast onder Categorie en kies een highlight-kleur." },
    { question: "Slaat het bord mijn werk op?", answer: "Ja. Je voortgang wordt automatisch opgeslagen in de lokale opslag van je browser." },
    { question: "Hoe kan ik zoomen en over het bord bewegen?", answer: "Gebruik knijpgebaren of het muiswiel om in en uit te zoomen. Sleep de achtergrond om over het bord te bewegen." }
  ],
  bibliography,
  howTo: [
    { name: "Onderzoekskaarten toevoegen", text: "Maak kaarten die NPC's, aanwijzingen, plaatsen delict of voorwerpen vertegenwoordigen." },
    { name: "Relaties koppelen", text: "Maak verbindingslijnen tussen kaarten om te tonen hoe aanwijzingen samenhangen." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Samenzweringsbord Maker: Online Detective RPG Onderzoekskaarten",
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
          'name': "Hoe voeg ik verbindingen toe?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Klik op Verbinding toevoegen in het bedieningspaneel of klik op het link-icoon van een kaart en selecteer de doelkaart."
          }
        },
        {
          '@type': 'Question',
          'name': "Kan ik kaarten slepen op mobiel?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja, het bord ondersteunt aanraakbediening om kaarten soepel te slepen en te verplaatsen op smartphones en tablets."
          }
        },
        {
          '@type': 'Question',
          'name': "Kan ik aangepaste kaartkleuren gebruiken?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja. Dubbelklik op een kaart, selecteer Aangepast onder Categorie en kies een highlight-kleur."
          }
        },
        {
          '@type': 'Question',
          'name': "Slaat het bord mijn werk op?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Ja. Je voortgang wordt automatisch opgeslagen in de lokale opslag van je browser."
          }
        },
        {
          '@type': 'Question',
          'name': "Hoe kan ik zoomen en over het bord bewegen?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Gebruik knijpgebaren of het muiswiel om in en uit te zoomen. Sleep de achtergrond om over het bord te bewegen."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Hoe de Samenzweringsbord Maker te gebruiken",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Onderzoekskaarten toevoegen",
          'text': "Maak kaarten die NPC's, aanwijzingen, plaatsen delict of voorwerpen vertegenwoordigen."
        },
        {
          '@type': 'HowToStep',
          'name': "Relaties koppelen",
          'text': "Maak verbindingslijnen tussen kaarten om te tonen hoe aanwijzingen samenhangen."
        }
      ]
    }
  ]
};
