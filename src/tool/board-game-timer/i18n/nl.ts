import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Bordspel Timer',
  setupTitle: 'Spel Setup',
  playerNamePlaceholder: 'Naam speler',
  addPlayer: 'Speler toevoegen',
  removePlayer: 'Verwijderen',
  startGame: 'Spel starten',
  pauseGame: 'Pauze',
  resumeGame: 'Hervatten',
  resetGame: 'Reset',
  nextTurn: 'Beurt beëindigen',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Speler',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  expiredLabel: 'TIJD OM',
  overtimeLabel: 'Overwerk',
  turnIndicator: 'Jouw beurt',
  warningLowTime: 'Tijd bijna om',
  pausedOverlay: 'Spel gepauzeerd',
  roundLabel: 'Ronde',
  settingsTitle: 'Instellingen',
  baseTimeLabel: 'Basistijd',
  incrementLabel: 'Increment/Vertraging',
  warningTimeLabel: 'Waarschuwingslimiet',
  confirmLabel: 'Bevestigen',
  cancelLabel: 'Annuleren',
  noPlayersHint: 'Voeg minimaal 2 spelers toe om te starten',
  addPlayerHint: 'Voer spelersnaam in',
  timeUpLabel: 'Tijd is om!',
  presetsTitle: 'Presets',
  timeControlTitle: 'Tijdcontrole',
  modeLabel: 'Modus',
  modeNormal: 'Normale countdown',
  modeFischer: 'Fischer (Increment)',
  modeBronstein: 'Bronstein (Vertraging)',
  modeHourglass: 'Zandloper',
  modeTurn: 'Beurt reset',
  audioTitle: 'Audio waarschuwingen',
  soundAlerts: 'Geluidseffecten',
  playersTitle: 'Spelers',
  playersAdded: 'Toegevoegde spelers',
  statsTitle: 'Spelstatistieken',
  totalGameTime: 'Totale tijd',
  totalRounds: 'Totaal rondes',
  slowestPlayer: 'Langzaamste speler',
  playerPerformance: 'Tijdanalyse per speler',
  playAgain: 'Nieuw spel',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'bordspel-timer-schaakklok',
  title: 'Bordspel Timer: Duel Schaakklok & Multiplayer Beurt Manager',
  description: 'Volg beurten en beheer tijd in uw tafelspellen met een professionele bordspeltimer. Ondersteunt schaakklok-duelmodus, multiplayer-lay-outs, Fischer-increment en Bronstein-vertraging.',
  ui,
  seo: [
    { type: 'title', text: 'Het tempo aan de speltafel beheersen: hoe professionele tijdcontroles spelhervatting verbeteren', level: 2 },
    { type: 'paragraph', html: 'Tijdmanagement is een essentieel onderdeel in moderne bordspellen. Of u nu deelneemt aan een snel gezelschapsspel of een diep strategisch spel speelt - het reguleren van de denktijd zorgt ervoor dat alle deelnemers een eerlijk deel van de aandacht krijgen. Het gebruik van professionele timingmethoden zoals Fischer-increment, Bronstein-vertraging of de zandloper-modus elimineert analyseparalyse, garandeert een consistent speeltempo en voegt een extra strategische laag toe aan het speelbord.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Ondersteunde spelers' },
        { value: '5 Modi', label: 'Tijdconfiguraties' },
        { value: '100ms', label: 'Precisie motor' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein en Zandloper: Geavanceerde tijdcontroles uitgelegd', level: 2 },
    { type: 'paragraph', html: 'Onze bordspeltimer ondersteunt meerdere timingopties die geïnspireerd zijn op toernooispellen, zodat uw speelsessies soepel verlopen:' },
    {
      type: 'table',
      headers: ['Modus', 'Hoe het werkt', 'Best geschikt voor'],
      rows: [
        ['Normale countdown', 'Een standaard countdown-timer die pauzeert aan het einde van de beurt.', 'Casual bordspellen met een gemeenschappelijke denktijdpool'],
        ['Fischer (Increment)', 'Voegt een vooraf ingesteld aantal seconden toe aan uw klok nadat u uw beurt hebt beëindigd.', 'Strategische eurogames en wargames waarbij snelle beurten een tijdbuffer opbouwen'],
        ['Bronstein (Vertraging)', 'Biedt een vertragingsvenster waarin uw hoofdtimer niet aftelt.', 'Complexere tactische spellen waarbij korte administratieve beurten gratis zouden moeten zijn'],
        ['Zandloper', 'Uw timer neemt af terwijl de timer van uw tegenstander tegelijkertijd toeneemt.', 'Intense duels voor twee spelers en schaakpartijen'],
        ['Beurt reset', 'Een vaste countdown-timer die bij elke beurt volledig wordt gereset.', 'Snelle partyspellen, quizrondes en snelle spelrondes'],
      ],
    },
    {
      type: 'tip',
      title: 'De ideale tijdconfiguratie vinden',
      html: 'Een aanbevolen startpunt is het toewijzen van 30 tot 45 seconden voor snelle gezelschapsspellen, 1 tot 2 minuten met een Bronstein-vertraging van 5 seconden voor eurogames van gemiddeld gewicht, en 30 tot 45 minuten met een Fischer-increment van 10 seconden voor zwaardere wargames of strategische campagnes.',
    },
    {
      type: 'title',
      text: 'Visuele optimalisatie: Gesplitst scherm voor duels vs. centrale beurtknop voor multiplayer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor rechtstreekse duels biedt de applicatie een gesplitst schaakklok-lay-out. Met deze weergave kunnen spelers hun schermhelften 180 graden draaien, zodat ze gemakkelijk vanaf de tegenovergestelde zijde van de tafel kunnen worden afgelezen. Voor spellen met 3 of meer deelnemers verandert de interface in een multiplayer-raster met actieve speler-highlights, individuele kaartaanpassingen en een grote centrale End Turn-knop die fungeert als een gedeelde fysieke buzzer in het midden van het speelveld.',
    },
    {
      type: 'proscons',
      title: 'Fischer increment versus Bronstein vertraging vergeleken',
      items: [
        {
          pro: 'Fischer-increment beloont snel spelen door een tijdbuffer op te bouwen voor toekomstige beurten.',
          con: 'De totale speeltijd kan langer worden als spelers constant extreem snelle beurten maken.',
        },
        {
          pro: 'De Bronstein-vertraging voorkomt tijdverlies bij snelle administratieve handelingen, zonder enorme reserves op te bouwen.',
          con: 'Vereist het configureren van een vertragingsdrempel die past bij de fysieke beheertijd van het spel.',
        },
        {
          pro: 'De zandloper-modus creëert directe spanning in duels door uw tijd actief af te trekken en aan de tegenstander te geven.',
          con: 'Wordt wiskundig complex en minder strategisch bij meer dan twee spelers.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende bordspelgenres die profiteren van beurttimers',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Strategische Eurogames',
          description: 'Worker-placement en resource-management spellen waarbij beurten in complexiteit kunnen variëren. Fischer-increment helpt spelers om kritieke beslissingen in de eindfase te nemen zonder de eerste rondes te vertragen.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Vermindert analyseparalyse',
            'Ondersteuning voor variabele beurtcomplexiteit',
            'Tijd wordt een actieve hulpbron',
          ],
        },
        {
          title: 'Party en Quizspellen',
          description: 'Snelle spellen waarbij snel denken deel uitmaakt van het plezier. Vaste beurt-reset-timers houden het tempo hoog en voorkomen dat één speler de voortgang blokkeert.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Korte vaste countdowns',
            'Behoudt het tempo van het feestje',
            'Dwingt directe actie af',
          ],
        },
        {
          title: 'Toernooigevechten in duel',
          description: 'Strikte schaakklokduels vereisen nauwkeurige, draaibare lay-outs om de sportieve integriteit en een eerlijke tijdsverdeling in alle rondes te garanderen.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '180 graden schermrotatie',
            'Nauwkeurige tijdregistratie in intervallen van 100ms',
            'Sudden death- of overtijdsstatussen',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fischer-increment',
          definition: 'Een methode van tijdcontrole waarbij na elke beëindigde beurt een vooraf ingestelde hoeveelheid seconden aan de resterende tijd van een speler wordt toegevoegd.',
        },
        {
          term: 'Bronstein-vertraging',
          definition: 'Een methode van tijdcontrole waarbij de countdown aan het begin van een beurt voor een ingestelde tijd wordt uitgesteld, zodat er geen aftrek plaatsvindt als de beurt snel wordt beëindigd.',
        },
        {
          term: 'Zandloper-modus',
          definition: 'Een dynamisch tijdsysteem waarbij de afgetrokken tijd van een speler in realtime rechtstreeks op de tijdrekening van de tegenstander wordt bijgeschreven.',
        },
        {
          term: 'Analyseparalyse',
          definition: 'Een toestand van overdenken waarin een speler overweldigd raakt door de opties, waardoor de spelgang stagneert en de ervaring van anderen wordt geschaad.',
        },
        {
          term: 'Spelanalyse',
          definition: 'Prestatiegegevens na het spel die de verstreken rondes, de gemiddelde denksnelheid, de maximale beurtduur en het klassement van de langzaamste beurten samenvatten.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hoe werkt de lay-out in de Duel-modus?',
      answer: 'Bij een spel voor 2 spelers toont de gebruikersinterface een gesplitste schaakklok. Elke kant vertegenwoordigt een speler; tikken op de eigen helft beëindigt de beurt. De displays kunnen 180 graden worden gedraaid voor spelers die tegenover elkaar zitten.',
    },
    {
      question: 'Wat is het verschil tussen de Fischer- en Bronstein-modus?',
      answer: 'De Fischer-modus voegt na de beurt extra seconden toe aan het spelerstijdtegoed, zodat spelers tijd kunnen opsparen. De Bronstein-modus biedt een vertraging aan het begin van de beurt; als de beurt binnen de vertraging eindigt, wordt er geen tijd afgetrokken.',
    },
    {
      question: 'Houdt de app spelstatistieken bij?',
      answer: 'Ja! Na afloop van het spel of bij tijdsoverschrijding toont de statistiekenmodule de totale duur, ronde-aantallen, gemiddelde en maximale beurttijd en een snelheidsranglijst van de spelers.',
    },
    {
      question: 'Worden mijn spelers opgeslagen bij het vernieuwen?',
      answer: 'Ja, de spelersconfiguratie en de geselecteerde kleuren worden automatisch in het lokale browsergeheugen opgeslagen en bij een volgend bezoek weer geladen.',
    },
    {
      question: 'Kan ik tijd toevoegen of aftrekken tijdens een actief spel?',
      answer: 'Ja! In de multiplayer-modus hebben spelerskaarten speciale knoppen voor +30s en -30s om de resterende tijd tijdens het spel aan te passen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Spel-setup configureren',
      text: 'Kies een preset (Casual, Blitz, Strategisch, Zandloper) of stel uw eigen parameters in: basisduur, increment/vertraging en waarschuwingsdrempels.',
    },
    {
      name: 'Spelers toevoegen en opslaan',
      text: 'Voer de spelersnamen in en kies kleur-id\'s. Wijzig de beurtvolgorde met de pijltjestoetsen; de gegevens worden automatisch opgeslagen.',
    },
    {
      name: 'Starten en beurten beëindigen',
      text: 'Start het spel. Tik in de Duel-modus op uw schermhelft om uw beurt te beëindigen. Klik in de multiplayer-modus op de grote knop Beurt beëindigen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Bordspel Timer & Beurt Manager',
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
          'name': 'Hoe werkt de lay-out in de Duel-modus?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bij een spel voor 2 spelers toont de gebruikersinterface een gesplitste schaakklok. Elke kant vertegenwoordigt een speler; tikken op de eigen helft beëindigt de beurt. De displays kunnen 180 graden worden gedraaid voor spelers die tegenover elkaar zitten.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wat is het verschil tussen de Fischer- en Bronstein-modus?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De Fischer-modus voegt na de beurt extra seconden toe aan het spelerstijdtegoed, zodat spelers tijd kunnen opsparen. De Bronstein-modus biedt een vertraging aan het begin van de beurt; als de beurt binnen de vertraging eindigt, wordt er geen tijd afgetrokken.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Houdt de app spelstatistieken bij?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja! Na afloop van het spel of bij tijdsoverschrijding toont de statistiekenmodule de totale duur, ronde-aantallen, gemiddelde en maximale beurttijd en een snelheidsranglijst van de spelers.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Worden mijn spelers opgeslagen bij het vernieuwen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, de spelersconfiguratie en de geselecteerde kleuren worden automatisch in het lokale browsergeheugen opgeslagen en bij een volgend bezoek weer geladen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kan ik tijd toevoegen of aftrekken tijdens een actief spel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja! In de multiplayer-modus hebben spelerskaarten speciale knoppen voor +30s en -30s om de resterende tijd tijdens het spel aan te passen.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe de Bordspel Timer te gebruiken',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Spel-setup configureren',
          'text': 'Kies een preset (Casual, Blitz, Strategisch, Zandloper) of stel uw eigen parameters in: basisduur, increment/vertraging en waarschuwingsdrempels.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Spelers toevoegen en opslaan',
          'text': 'Voer de spelersnamen in en kies kleur-id\'s. Wijzig de beurtvolgorde met de pijltjestoetsen; de gegevens worden automatisch opgeslagen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Starten en beurten beëindigen',
          'text': 'Start het spel. Tik in de Duel-modus op uw schermhelft om uw beurt te beëindigen. Klik in de multiplayer-modus op de grote knop Beurt beëindigen.'
        }
      ]
    }
  ],
};
