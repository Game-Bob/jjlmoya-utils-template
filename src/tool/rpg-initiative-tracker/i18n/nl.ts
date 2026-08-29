import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Initiatief Volger',
  addCombatant: 'Strijder toevoegen',
  removeCombatant: 'Verwijderen',
  playerLabel: 'Speler',
  npcLabel: 'NPC',
  initiativeLabel: 'Initiatief',
  modifierLabel: 'Modifier',
  namePlaceholder: 'Karakter naam',
  initiativePlaceholder: 'Initiatief',
  modifierPlaceholder: 'Modifier',
  addButton: 'Toevoegen',
  startCombat: 'Gevecht starten',
  endCombat: 'Gevecht beëindigen',
  nextTurn: 'Volgende beurt',
  prevTurn: 'Vorige beurt',
  roundLabel: 'Ronde',
  turnLabel: 'Beurt',
  noCombatants: 'Nog geen strijders. Voeg personages toe om te beginnen.',
  statusInput: 'Status',
  combatStarted: 'Gevecht gestart!',
  combatEnded: 'Gevecht beëindigd',
  yourTurn: 'Beurt',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'initiatief-volger',
  title: 'RPG Initiatief Volger: Beurtvolgorde & Initiatief Beheerder',
  description: 'Volg de initiatiefvolgorde voor elke tabletop RPG. Voeg strijders toe, rol voor initiatief, beheer statuseffecten en navigeer door beurten in gevechten.',
  ui,
  seo: [
    { type: 'title', text: 'Hoe Initiatief Werkt in D&D en Andere Tabletop RPGs', level: 2 },
    { type: 'paragraph', html: 'Initiatief bepaalt de volgorde van acties in een gevecht. Elke deelnemer gooit een Behendigheidscheck aan het begin van een gevecht, en de beurtvolgorde gaat van hoog naar laag. Een digitale initiatiefvolger automatiseert het sorteren, markeert de actieve strijder, volgt lopende statuseffecten en houdt de hele tafel op de hoogte van wie de volgende beurt heeft. Dit is vooral handig voor Dungeon Masters die complexe ontmoetingen met meerdere vijandtypes en spelerspersonages leiden.' },
    {
      type: 'stats',
      items: [
        { value: 'Onbeperkt', label: 'Strijders ondersteund' },
        { value: 'Auto sorteren', label: 'Op initiatief worp' },
        { value: 'Realtime', label: 'Beurt bijhouden' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Standaard Initiatief Regels voor D&D 5e', level: 2 },
    { type: 'paragraph', html: 'In D&D 5e gooit elke deelnemer een Behendigheidscheck aan het begin van het gevecht. Spelers gooien individueel. De Dungeon Master gooit eenmaal voor elke groep identieke monsters. De beurtvolgorde gaat van hoog naar laag, dan terug naar het begin voor de volgende ronde. Gelijke worpen worden beslist door Behendigheidsscore, of de DM beslist. Een digitale volger handelt dit alles automatisch af en toont de volledige beurtvolgorde in één oogopslag.' },
    {
      type: 'table',
      headers: ['Functie', 'Handmatig bijhouden', 'Digitale volger'],
      rows: [
        ['Sorteren', 'Lijst herschrijven wanneer initiatief verandert', 'Direct automatisch herordenen'],
        ['Huidige beurt', 'Moet mondeling of met een token worden bijgehouden', 'Gemarkeerd met groene gloed'],
        ['Statuseffecten', 'Apart notitieblok of dobbelsteen bij de mini', 'Klik om aan te zetten per strijder'],
        ['Rondetelling', 'In je hoofd of op kladpapier tellen', 'Automatisch weergegeven'],
        ['Toevoegen tijdens gevecht', 'Volgorde uitgummen en herschrijven', 'Ingevoegd op de juiste positie'],
      ],
    },
    {
      type: 'tip',
      title: 'Tips voor het Leiden van Initiatief aan Tafel',
      html: 'Gooi initiatief voor alle monsters vóór de sessie om tijd te besparen tijdens het gevecht. Voeg veelvoorkomende statuseffecten zoals Verdoofd of Vergiftigd toe aan een strijder zodra ze worden toegepast. Dit voorkomt dat je een conditie vergeet wanneer de beurt van het getroffen personage komt. Gebruik de Vorige beurt knop om te bekijken wat er gebeurde als je een beslissing van eerder in de ronde moet controleren.',
    },
    {
      type: 'title',
      text: 'Veelgebruikte Statuseffecten in Gevechten',
      level: 3,
    },
    { type: 'paragraph', html: 'Het bijhouden van condities tijdens gevechten is een van de meest over het hoofd geziene taken. Een statuseffect kan de effectiviteit van een personage volledig veranderen, en vergeten het te verwijderen kan de balans van een ontmoeting doen kantelen. De initiatiefvolger laat je condities toepassen en verwijderen met één klik, zodat ze zichtbaar blijven naast de naam van de strijder.' },
    {
      type: 'proscons',
      title: 'Statuseffecten digitaal versus handmatig beheren',
      items: [
        {
          pro: 'Condities zijn zichtbaar direct naast de personagenaam, zodat niemand een actief effect vergeet.',
          con: 'Vereist dat je onthoudt statussen aan en uit te zetten wanneer ze worden toegepast en verwijderd.',
        },
        {
          pro: 'Meerdere statussen kunnen tegelijk actief zijn op dezelfde strijder en worden allemaal samen getoond.',
          con: 'De volger past de regels niet automatisch toe; de DM moet ze nog steeds toepassen.',
        },
        {
          pro: 'Statussen kunnen tijdens het gevecht worden toegevoegd zonder te stoppen om op een personageblad te schrijven.',
          con: 'Alleen vooraf gedefinieerde statustags zijn standaard beschikbaar.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alternatieve Initiatief Systemen',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standaard Initiatief',
          description: 'Elke strijder gooit eenmaal aan het begin. Dezelfde volgorde herhaalt zich elke ronde. Eenvoudig en voorspelbaar, maar de volgorde staat vast na de eerste worp. Werkt goed voor de meeste groepen en ontmoetingsgroottes.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Eenvoudig te leren en onderwijzen', 'Vaste beurtvolgorde elke ronde', 'Werkt voor elke groepsgrootte'],
        },
        {
          title: 'Kant Initiatief',
          description: 'Alle spelerspersonages handelen samen, dan alle vijanden samen. Gebruikelijk in oudere edities en OSR spellen. Versnelt gevechten door individueel bijhouden te verminderen maar vermindert tactische diepgang.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Snelste gevechtsafhandeling', 'Stimuleert partijcoördinatie', 'Minder variatie in individuele beurten'],
        },
        {
          title: 'Snelheidsfactor Variant',
          description: 'Elke ronde verklaren deelnemers eerst acties, dan gooien ze initiatief aangepast door de gekozen actie. Gebruikt in optionele regelsets. Creëert een onvoorspelbare beurtvolgorde maar voegt diepgang toe aan besluitvorming.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Andere volgorde elke ronde', 'Actiekeuze beïnvloedt timing', 'Meer tactische beslissingen per beurt'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Gevechtsvolger Verklarende Woordenlijst',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Initiatief',
          definition: 'Een Behendigheidscheck aan het begin van een gevecht om de volgorde van beurten te bepalen. Elke deelnemer gooit en handelt in aflopende volgorde.',
        },
        {
          term: 'Ronde',
          definition: 'Een volledige cyclus waarin elke strijder één beurt neemt. Nadat de laatste strijder heeft gehandeld, eindigt de ronde en begint een nieuwe ronde vanaf het begin van de volgorde.',
        },
        {
          term: 'Statuseffect',
          definition: 'Een tijdelijke conditie die de capaciteiten van een personage wijzigt. Voorbeelden zijn Verdoofd (kan niet handelen), Vergiftigd (nadeel op worpen) en Verblind (aanvallen hebben nadeel).',
        },
        {
          term: 'NPC',
          definition: 'Niet-Speler Personage bestuurd door de Dungeon Master. Bij initiatief bijhouden zijn NPCs typisch vijanden of neutrale wezens in de ontmoeting.',
        },
        {
          term: 'PC',
          definition: 'Spelers Personage bestuurd door een van de spelers aan tafel. PCs worden onderscheiden van NPCs in de volger om de DM te helpen vriendelijke doelen te identificeren.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wanneer Initiatief Elke Ronde Herrollen',
      icon: 'mdi:information-outline',
      badge: 'DM TIP',
      html: 'Sommige DMs geven er de voorkeur aan initiatief elke ronde te herrollen voor onvoorspelbaarheid, terwijl de meeste dezelfde volgorde aanhouden voor eenvoud. Als een nieuwe strijder midden in het gevecht meedoet, rol dan zijn initiatief en voeg hem in op de huidige positie. De volger handelt dit automatisch af. Voor baas ontmoetingen, overweeg de schurk een vast initiatief op een specifieke telling te geven om het gevecht gestructureerder te laten aanvoelen.',
    },
  ],
  faq: [
    {
      question: 'Hoe voeg ik strijders toe aan de initiatiefvolgorde?',
      answer: 'Voer de personagenaam, initiatiefworp en initiatiefmodifier in en klik vervolgens op Toevoegen. Schakel tussen Speler en NPC types om groepsleden visueel te onderscheiden van vijanden in de lijst.',
    },
    {
      question: 'Wat gebeurt er als ik op Gevecht starten klik?',
      answer: 'Alle strijders worden gesorteerd op initiatief van hoog naar laag. De beurtvolgorde begint bovenaan, de rondeteller start op 1 en de actieve strijder wordt gemarkeerd met een groene gloed.',
    },
    {
      question: 'Hoe houd ik statuseffecten bij tijdens het gevecht?',
      answer: 'Klik op een statustag (Verdoofd, Vergiftigd, Verblind, etc.) om deze aan of uit te zetten voor de geselecteerde strijder. Actieve statussen verschijnen naast de personagenaam. Dit herinnert iedereen aan lopende effecten wanneer de beurt van die strijder komt.',
    },
    {
      question: 'Blijven mijn gevechtsgegevens behouden als ik de pagina ververs?',
      answer: 'Ja. De initiatiefvolger slaat de gevechtsstatus op in de lokale opslag van je browser. Je strijders, beurtvolgorde en statuseffecten blijven behouden na een paginaverversing. Gegevens worden gewist wanneer je op Gevecht beëindigen klikt.',
    },
    {
      question: 'Kan ik teruggaan naar de vorige beurt?',
      answer: 'Ja. De Vorige beurt knop laat je achteruit navigeren door de beurtvolgorde. Dit is handig om te bekijken wat er eerder in de ronde gebeurde of om een fout te corrigeren.',
    },
    {
      question: 'Kan ik strijders toevoegen of verwijderen tijdens het gevecht?',
      answer: 'Ja. Nieuwe strijders kunnen op elk moment worden toegevoegd en worden automatisch op de juiste positie ingevoegd op basis van hun initiatiefworp. Bestaande strijders kunnen worden verwijderd als ze de ontmoeting verlaten.',
    },
    {
      question: 'Werkt dit met elk RPG systeem?',
      answer: 'Ja. De volger werkt met elke tabletop RPG die een op initiatief gebaseerde beurtvolgorde gebruikt. Voer gewoon de initiatiefwaarden in die jouw systeem gebruikt, of het nu een d20 worp plus Behendigheid is voor D&D of een ander mechanisme voor andere spellen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Voeg strijders toe voor het gevecht',
      text: 'Voer voor elk personage de naam, hun initiatiefworp en modifier in. Markeer ze als Speler of NPC. Voeg zoveel strijders toe als je ontmoeting nodig heeft.',
    },
    {
      name: 'Start gevecht om de volgorde vast te leggen',
      text: 'Klik op Gevecht starten om iedereen op initiatief te sorteren en te beginnen met het bijhouden van beurten. De eerste strijder in de volgorde wordt gemarkeerd.',
    },
    {
      name: 'Navigeer beurten en volg condities',
      text: 'Gebruik Volgende beurt en Vorige beurt om door de volgorde te gaan. Pas statuseffecten toe door op de statustags te klikken om condities bij te houden tijdens het gevecht.',
    },
    {
      name: 'Beëindig gevecht wanneer klaar',
      text: 'Klik op Gevecht beëindigen om het bijhouden van beurten te stoppen. Dit wist de actieve status en reset de rondeteller terwijl de strijderslijst behouden blijft voor de volgende ontmoeting.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'RPG Initiatief Volger',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Vereist HTML5. Vereist JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe voeg ik strijders toe?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Voer de personagenaam, initiatiefworp en initiatiefmodifier in en klik vervolgens op Toevoegen. Spelers en NPCs kunnen worden omgeschakeld om ze te onderscheiden in de lijst.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat gebeurt er als ik op Gevecht starten klik?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Alle strijders worden gesorteerd op initiatief (hoogste eerst). De beurtvolgorde begint met de eerste strijder en een rondeteller start op 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe de Initiatief Volger te Gebruiken',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Strijders toevoegen',
          'text': 'Voer persoonsgegevens in inclusief naam, initiatiefworp en modifier. Schakel tussen Speler en NPC types vóór het toevoegen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gevecht starten',
          'text': 'Klik op Gevecht starten om alle strijders op initiatief te sorteren en te beginnen met het bijhouden van de beurtvolgorde.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Beurten beheren',
          'text': 'Gebruik Volgende beurt en Vorige beurt om door de beurtvolgorde te navigeren. De actieve strijder wordt gemarkeerd met een groene gloed.',
        },
      ],
    },
  ],
};
