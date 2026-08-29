import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Score Teller',
  addPlayer: 'Speler toevoegen',
  removePlayer: 'Verwijderen',
  renamePlayer: 'Hernoemen',
  startRound: 'Ronde 1 starten',
  nextRound: 'Volgende ronde',
  resetGame: 'Spel resetten',
  undoRound: 'Laatste ronde ongedaan maken',
  playerLabel: 'Speler',
  scoreLabel: 'Score',
  roundLabel: 'Ronde',
  totalLabel: 'Totaal',
  rankLabel: 'Rang',
  leaderboardTitle: 'Klassement',
  historyTitle: 'Scoregeschiedenis',
  noPlayersHint: 'Voeg spelers toe om te beginnen met scoren',
  playerNamePlaceholder: 'Spelersnaam',
  confirmLabel: 'Bevestigen',
  cancelLabel: 'Annuleren',
  deleteRoundConfirm: 'De laatste ronde verwijderen?',
  playerAdded: 'Speler toegevoegd',
  playerRemoved: 'Speler verwijderd',
  roundStarted: 'Ronde gestart',
  gameReset: 'Spel is gereset',
  noRoundsYet: 'Nog geen rondes geregistreerd',
  currentRoundLabel: 'Huidige ronde',
  scoringTitle: 'Rondescore',
  resetAllLabel: 'Alles resetten',
  confirmResetAll: 'Dit verwijdert alle spelers en scores. Weet je het zeker?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'score-teller',
  title: 'Score Teller: Multiplayer Scorekeeper en Klassementbeheerder',
  description: 'Houd scores bij voor elk bordspel. Voeg spelers toe, registreer ronde voor ronde scores en zie het klassement in realtime updaten met automatische rangschikking.',
  ui,
  seo: [
    { type: 'title', text: 'Bordspel Score Bijhouden: Hoe Je Scores Zonder Fouten Registreert', level: 2 },
    { type: 'paragraph', html: 'Scores bijhouden in bordspellen lijkt eenvoudig totdat je vijf rondes diep in een spel zit en iemand realiseert zich dat hij verkeerd heeft geteld. Of je nu Wingspan, Terraforming Mars, Catan of een ander overwinningspuntenspel speelt, nauwkeurig score bijhouden is het verschil tussen een eerlijk spel en een ruzie. Een digitale scoreteller elimineert rekenfouten, toont live klassementen en bewaart een volledige geschiedenis van elke ronde zodat je de eindstand kunt verifiëren.' },
    {
      type: 'stats',
      items: [
        { value: 'Onbeperkt', label: 'Spelers ondersteund' },
        { value: 'Realtime', label: 'Klassementupdates' },
        { value: 'Onbeperkt', label: 'Rondes geregistreerd' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Veelvoorkomende Scorefouten en Hoe Je Ze Vermijdt', level: 2 },
    { type: 'paragraph', html: 'De meest voorkomende fout is het vergeten van eindrondebonussen of het verkeerd optellen van een kolom getallen. Wanneer je scores digitaal bijhoudt, werkt de lopende total automatisch bij na elke invoer. Dit betekent dat je een fout kunt opmerken op het moment dat een getal er vreemd uitziet, in plaats van het te ontdekken aan het einde van het spel wanneer niemand zich de juiste waarde herinnert. De rondegeschiedenisfunctie stelt je in staat om elke eerdere ronde te controleren en fouten te corrigeren zonder het hele spel opnieuw te starten.' },
    {
      type: 'tip',
      title: 'Snelle Tips voor Score Bijhouden',
      html: 'Voer scores direct na elke ronde in terwijl iedereen de resultaten nog weet. Gebruik beschrijvende spelerslabels zoals kleuren of factienamen in plaats van echte namen voor spellen met verborgen rollen. Laat kinderen tijdens het spelen zelf de knoppen indrukken om ze betrokken te houden bij het scoreproces.',
    },
    {
      type: 'title',
      text: 'Per Ronde Scoren vs Alleen Eindtotaal',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Score per Ronde vs Alleen Eindscore',
      items: [
        {
          pro: 'Je kunt zien wie er leidde in elke fase van het spel en hoe het momentum verschoof.',
          con: 'Vereist het invoeren van gegevens na elke ronde in plaats van een keer aan het einde.',
        },
        {
          pro: 'Fouten zijn makkelijk te vinden omdat je individuele ronde-invoeren kunt controleren met je geheugen.',
          con: 'Kost iets meer tijd tijdens de spelsessie.',
        },
        {
          pro: 'Spelers kunnen hun eigen rondescores verifiëren, wat geschillen vermindert en vertrouwen opbouwt.',
          con: 'Werkt het beste wanneer één persoon het apparaat beheert of spelers om de beurt doen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Spellen met Ongebruikelijke Scoresystemen',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Overwinningspuntenspellen',
          description: 'De meeste eurospellen gebruiken overwinningspunten die gedurende het spel worden toegekend. De uitdaging is het bijhouden van meerdere VP-bronnen: grondstoffen, prestaties, eindspelbonussen. Een digitale tracker laat je punten invoeren zodra ze binnenkomen en de lopende totaal zien.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Meerdere scorecategorieën bijhouden',
            'Eindspelbonusberekeningen',
            'Directe gelijkspeloplossing',
          ],
        },
        {
          title: 'Spellen met Negatieve Score',
          description: 'Sommige spellen bestraffen spelers met negatieve punten voor bepaalde acties. Een digitale scoreverwerker gaat natuurlijk om met negatieve waarden en kleurt ze rood zodat de straf direct zichtbaar is. Dit is vooral nuttig in slagenspellen of deductiespellen met strafmechanismen.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Automatische negatieve verwerking',
            'Visuele strafindicatoren',
            'Nauwkeurige cumulatieve totalen',
          ],
        },
        {
          title: 'Campagnespellen',
          description: 'Legacy- en campagnespellen dragen scores over meerdere sessies heen. Zonder tracker moet je papieren notities bijhouden tussen spelavonden. Een digitale tool houdt je campagnescores georganiseerd en laat je zien hoe je beslissingen de algemene stand hebben beïnvloed.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Blijvende campagnetracking',
            'Vergelijking tussen sessies',
            'Sessie-voor-sessie uitsplitsing',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Scorewoordenlijst',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Overwinningspunten (VP)',
          definition: 'De standaard score-eenheid in de meeste moderne bordspellen. Spelers verdienen VP door acties en degene met de meeste VP aan het einde van het spel wint.',
        },
        {
          term: 'Rondescore',
          definition: 'Scores aan het einde van elke ronde registreren in plaats van alleen aan het einde van het spel. Dit creëert een gedetailleerde geschiedenis en maakt foutcontrole eenvoudig.',
        },
        {
          term: 'Klassement',
          definition: 'Een live ranglijst die de positie van elke speler toont op basis van de totaalscore. Het klassement herordent automatisch naarmate nieuwe scores worden ingevoerd.',
        },
        {
          term: 'Negatieve Score',
          definition: 'Een scoresysteem waarbij spelers punten kunnen verliezen door straffen of mislukte acties, wat resulteert in negatieve totalen. Een digitale tracker handelt dit af zonder handmatige aftrekfouten.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Omgaan met Betwiste Scores',
      icon: 'mdi:information-outline',
      badge: 'SPELTIP',
      html: 'Wanneer een speler een score betwist, verander deze dan niet onmiddellijk. Controleer eerst de rondegeschiedenis om te bevestigen wat er is ingevoerd. Als de invoer fout is, gebruik dan de +/- knoppen om het te corrigeren en het totaal werkt automatisch bij. Als de ronde-invoer correct is maar de speler het oneens is, biedt de geschiedenis een objectief verslag dat iedereen samen kan bekijken.',
    },
  ],
  faq: [
    {
      question: 'Hoeveel spelers kan ik bijhouden?',
      answer: 'Er is geen limiet. Voeg zoveel spelers toe als je spel ondersteunt en hernoem ze op elk moment tijdens de sessie.',
    },
    {
      question: 'Kan ik een fout ongedaan maken?',
      answer: 'Ja. Gebruik de knop Laatste Ronde Ongedaan Maken om de meest recente scoreronde te verwijderen, waarna alle totalen en rangschikkingen automatisch worden herberekend.',
    },
    {
      question: 'Slaat de scoreteller mijn gegevens op?',
      answer: 'De scoreteller werkt volledig in je browser. Gegevens blijven behouden tijdens de huidige sessie. Het verversen van de pagina reset alle scores.',
    },
    {
      question: 'Hoe werkt het klassement?',
      answer: 'Het klassement sorteert spelers op totaalscore in aflopende volgorde. Rangschikkingen worden automatisch bijgewerkt zodra je scores invoert of wijzigt in elke ronde.',
    },
    {
      question: 'Kan ik negatieve scores bijhouden?',
      answer: 'Ja. Met de +/- knoppen zijn zowel positieve als negatieve aanpassingen mogelijk, waardoor het geschikt is voor spellen met strafpunten of aftrekmechanismen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Spelers toevoegen',
      text: 'Voer spelersnamen in via het veld Speler Toevoegen. Je kunt op elk moment tijdens het spel spelers toevoegen of verwijderen.',
    },
    {
      name: 'Beginnen met scoren',
      text: 'Klik op Ronde Starten om een nieuwe scoreronde te beginnen. Gebruik de +/- knoppen om de score van elke speler voor die ronde aan te passen.',
    },
    {
      name: 'Ranglijsten bekijken',
      text: 'Het klassement werkt automatisch bij. Blader door het tabblad Scoregeschiedenis om eerdere ronde-invoeren te bekijken.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Score Teller & Scorekeeper',
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
          'name': 'Hoeveel spelers kan ik bijhouden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Er is geen limiet. Voeg zoveel spelers toe als je spel ondersteunt en hernoem ze op elk moment tijdens de sessie.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik een fout ongedaan maken?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Gebruik de knop Laatste Ronde Ongedaan Maken om de meest recente scoreronde te verwijderen, waarna alle totalen en rangschikkingen automatisch worden herberekend.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Slaat de scoreteller mijn gegevens op?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De scoreteller werkt volledig in je browser. Gegevens blijven behouden tijdens de huidige sessie. Het verversen van de pagina reset alle scores.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoe werkt het klassement?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Het klassement sorteert spelers op totaalscore in aflopende volgorde. Rangschikkingen worden automatisch bijgewerkt zodra je scores invoert of wijzigt in elke ronde.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik negatieve scores bijhouden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Met de +/- knoppen zijn zowel positieve als negatieve aanpassingen mogelijk, waardoor het geschikt is voor spellen met strafpunten of aftrekmechanismen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe Gebruik Je de Score Teller',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Spelers toevoegen',
          'text': 'Voer spelersnamen in via het veld Speler Toevoegen. Je kunt op elk moment tijdens het spel spelers toevoegen of verwijderen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Beginnen met scoren',
          'text': 'Klik op Ronde Starten om een nieuwe scoreronde te beginnen. Gebruik de +/- knoppen om de score van elke speler voor die ronde aan te passen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ranglijsten bekijken',
          'text': 'Het klassement werkt automatisch bij. Blader door het tabblad Scoregeschiedenis om eerdere ronde-invoeren te bekijken.',
        },
      ],
    },
  ],
};
