import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Poang Raknare',
  addPlayer: 'Lagg till spelare',
  removePlayer: 'Ta bort',
  renamePlayer: 'Byt namn',
  startRound: 'Borja omgang 1',
  nextRound: 'Nasta omgang',
  resetGame: 'Aterstall spel',
  undoRound: 'Angra senaste omgangen',
  playerLabel: 'Spelare',
  scoreLabel: 'Poang',
  roundLabel: 'Omgang',
  totalLabel: 'Total',
  rankLabel: 'Placering',
  leaderboardTitle: 'Ledartavla',
  historyTitle: 'Poanghistorik',
  noPlayersHint: 'Lagg till spelare for att borja poangsatta',
  playerNamePlaceholder: 'Spelarnamn',
  confirmLabel: 'Bekrafta',
  cancelLabel: 'Avbryt',
  deleteRoundConfirm: 'Ta bort den senaste omgangen?',
  playerAdded: 'Spelare tillagd',
  playerRemoved: 'Spelare borttagen',
  roundStarted: 'Omgang startad',
  gameReset: 'Spelet har aterstallts',
  noRoundsYet: 'Inga omgangar registrerade an',
  currentRoundLabel: 'Nuvarande omgang',
  scoringTitle: 'Omgangspoang',
  resetAllLabel: 'Aterstall alla',
  confirmResetAll: 'Detta tar bort alla spelare och poang. Ar du saker?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'poang-raknare',
  title: 'Poang Raknare: Multiplayer Poangraknare och Ledartavlehanterare',
  description: 'Hall reda pa poang for alla bordsspel. Lagg till spelare, registrera poang omgang for omgang och se ledartavlan uppdateras i realtid med automatisk rangordning.',
  ui,
  seo: [
    { type: 'title', text: 'Poangrakning i Bordsspel: Hur du Haller Koll pa Poang Utan Misstag', level: 2 },
    { type: 'paragraph', html: 'Att halla reda pa poang i bordsspel verkar enkelt tills du ar fem omgangar in i ett spel och nagon inser att hen har raknat fel. Oavsett om du spelar Wingspan, Terraforming Mars, Catan eller nagot annat poangspel ar korrekt poangrakning skillnaden mellan ett rattvist spel och ett argument. En digital poangrakare eliminerar raknefel, visar liveplaceringar och behaller en fullstandig historik over varje omgang sa att du kan verifiera slutsumman.' },
    {
      type: 'stats',
      items: [
        { value: 'Obegransat', label: 'Spelare som stods' },
        { value: 'Realtid', label: 'Uppdateringar av ledartavla' },
        { value: 'Obegransat', label: 'Registrerade omgangar' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Vanliga Poangrakningsfel och Hur du Undviker Dem', level: 2 },
    { type: 'paragraph', html: 'Det vanligaste felet ar att glomma att lagga till bonusar i slutet av omgangen eller att summera en kolumn med siffror fel. Nar du registrerar poang digitalt uppdateras den lopande summan automatiskt efter varje inmatning. Det innebar att du kan upptacka ett fel i samma stund som en siffra ser konstig ut, istallet for att upptacka det i slutet av spelet nar ingen kommer ihag det korrekta vardet. Omgangshistoriken later dig granska vilken tidigare omgang som helst och korrigera fel utan att borja om hela spelet.' },
    {
      type: 'tip',
      title: 'Snabba Tips for Poangrakning',
      html: 'For in poang omedelbart efter varje omgang medan alla fortfarande kommer ihag resultaten. Anvand beskrivande spelareticetter som farger eller fraktionsnamn istallet for riktiga namn i spel med dolda roller. Lat barnen trycka pa knapparna sjalva nar ni spelar med dem for att halla dem engagerade i poangrakningsprocessen.',
    },
    {
      type: 'title',
      text: 'Poang per Omgang vs Endast Totalsumma',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Poang per Omgang vs Endast Slutpoang',
      items: [
        {
          pro: 'Du kan se vem som ledde i varje skede av spelet och hur momentumet skiftade.',
          con: 'Kraver datainmatning efter varje omgang istallet for en gang i slutet.',
        },
        {
          pro: 'Fel ar latta att hitta eftersom du kan jamfora enskilda omgangsinmatningar mot minnet.',
          con: 'Tar nagot mer tid under spelsessionen.',
        },
        {
          pro: 'Spelare kan verifiera sina egna omgangspoang, vilket minskar tvister och bygger fortroende.',
          con: 'Fungerar bast nar en person hanterar enheten eller spelarna turas om.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Spel med Ovanliga Poangsystem',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Poangspel',
          description: 'De flesta eurospel anvander poang som delas ut under spelets gang. Utmaningen ar att halla reda pa flera VP-kallor: resurser, prestationer, slutspeisbonusar. En digital poangrakare later dig for in poang allteftersom de kommer och se den lopande summan.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Folj flera poangkategorier',
            'Berakning av slutspeisbonusar',
            'Omedelbar losning av oavgjort',
          ],
        },
        {
          title: 'Spel med Negativ Poangsattning',
          description: 'Vissa spel straffar spelare med negativa poang for vissa handlingar. En digital poangrakare hanterar negativa varden naturligt och fargar dem roda sa att straffet syns omedelbart. Detta ar sarskilt anvandbart i sticktagningsspel eller deduktionsspel med straffmekaniker.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Automatisk hantering av negativa varden',
            'Visuella straffindikatorer',
            'Korrekta kumulativa summor',
          ],
        },
        {
          title: 'Kampanjspel',
          description: 'Legacy- och kampanjspel bar poang over flera sessioner. Utan en poangrakare maste du ha pappersanteckningar mellan spelkvallarna. Ett digitalt verktyg haller dina kampanjpoang organiserade och later dig se hur dina beslut paverkade den overgripande standingslistan.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Bestående kampanjuppfoljning',
            'Jamforelse mellan sessioner',
            'Session-for-session nedbrytning',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Poangrakningsordlista',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Poang (VP)',
          definition: 'Standardenheten for poangsattning i de flesta moderna bordsspel. Spelare tjanar VP genom handlingar och den med flest VP nar spelet slutar vinner.',
        },
        {
          term: 'Omgangspoang',
          definition: 'Att registrera poang i slutet av varje omgang istallet for bara i slutet av spelet. Detta skapar en detaljerad historik och gor felkontroll enkel.',
        },
        {
          term: 'Ledartavla',
          definition: 'En live-ranking som visar varje spelares position baserat pa totalpoang. Ledartavlan sorterar om automatiskt allteftersom nya poang fors in.',
        },
        {
          term: 'Negativ Poangsattning',
          definition: 'Ett poangsystem dar spelare kan forlora poang genom straff eller misslyckade handlingar, vilket resulterar i negativa summor. En digital poangrakare hanterar detta utan manuella subtraktionsfel.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hur du Hanterar Omtvistade Poang',
      icon: 'mdi:information-outline',
      badge: 'SPELTIPS',
      html: 'Nar en spelare ifragasatter ett poang, andra det inte omedelbart. Borja med att kontrollera omgangshistoriken for att bekrafta vad som matades in. Om inmatningen ar fel, anvanda +/- knapparna for att korrigera den och summan uppdateras automatiskt. Om omgangsinmatningen ar korrekt men spelaren inte haller med, ger historiken en objektiv registrering som alla kan ga igenom tillsammans.',
    },
  ],
  faq: [
    {
      question: 'Hur manga spelare kan jag folja?',
      answer: 'Det finns ingen grans. Lagg till sa manga spelare som ditt spel stoder och byt namn pa dem nar som helst under sessionen.',
    },
    {
      question: 'Kan jag angra ett misstag?',
      answer: 'Ja. Anvand knappen Angra Senaste Omgangen for att ta bort den senaste poangomgangen, vilket automatiskt raknar om alla summor och placeringar.',
    },
    {
      question: 'Sparar poangrakaren mina data?',
      answer: 'Poangrakaren kors helt i din webblasare. Data bevaras under den aktuella sessionen. Om du uppdaterar sidan aterstalls alla poang.',
    },
    {
      question: 'Hur fungerar ledartavlan?',
      answer: 'Ledartavlan sorterar spelare efter totalpoang i fallande ordning. Placeringarna uppdateras automatiskt nar du anger eller andrar poang i varje omgang.',
    },
    {
      question: 'Kan jag folja negativa poang?',
      answer: 'Ja. +/- knapparna mojliggor bade positiva och negativa justeringar, vilket gor det lampligt for spel med straffpoang eller avdrags mekaniker.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Lagg till spelare',
      text: 'Ange spelarnamn med inputfaltet Lagg till Spelare. Du kan lagga till eller ta bort spelare nar som helst under spelet.',
    },
    {
      name: 'Borja poangsatta',
      text: 'Klicka pa Borja Omgang for att pa borja en ny poangomgang. Anvand +/- knapparna for att justera varje spelares poang for den omgangen.',
    },
    {
      name: 'Se placeringar',
      text: 'Ledartavlan uppdateras automatiskt. Bladdra igenom fliken Poanghistorik for att granska tidigare omgangsinmatningar.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Poang Raknare & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur manga spelare kan jag folja?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Det finns ingen grans. Lagg till sa manga spelare som ditt spel stoder.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag angra ett misstag?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Anvand knappen Angra Senaste Omgangen for att ta bort den senaste poangomgangen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sparar poangrakaren mina data?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Poangrakaren kors i din webblasare. Data bevaras under sessionen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur fungerar ledartavlan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ledartavlan sorterar spelare efter totalpoang i fallande ordning.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag folja negativa poang?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. +/- knapparna mojliggor bade positiva och negativa justeringar.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur du Anvander Poang Raknare',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Lagg till spelare',
          'text': 'Ange spelarnamn med inputfaltet Lagg till Spelare.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Borja poangsatta',
          'text': 'Klicka pa Borja Omgang och anvand +/- knapparna.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Se placeringar',
          'text': 'Ledartavlan uppdateras automatiskt.',
        },
      ],
    },
  ],
};
