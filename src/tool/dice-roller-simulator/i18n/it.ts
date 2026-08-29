import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'simulatore-lancio-dadi-probabilita',
  title: 'Simulatore di Lancio Dadi & Calcolo Probabilità',
  description: 'Lancia dadi poliedrici virtuali (D4, D6, D8, D10, D12, D20, D100), aggiungi modificatori e visualizza statistiche in tempo reale e probabilità per giochi di ruolo e da tavolo.',
  ui: {
    title: 'Simulatore di Lancio Dadi & Calcolo Probabilità',
    rollButton: 'Lancia i dadi',
    clearButton: 'Cancella cronologia',
    historyTitle: 'Cronologia lanci',
    noHistory: 'Nessun lancio registrato. Aggiungi dadi e clicca su Lancia per iniziare.',
    totalRolls: 'Lanci totali',
    averageRoll: 'Risultato medio',
    lastRoll: 'Ultimo totale',
    modifierLabel: 'Modificatore (+/-)',
    probabilityTitle: 'Analisi delle probabilità',
    selectDice: 'Seleziona i dadi da lanciare',
  },
  seo: [
    { type: 'title', text: 'Padroneggiare le probabilità nei giochi di ruolo: Come la statistica dei dadi influenza il gioco', level: 2 },
    { type: 'paragraph', html: 'I dadi poliedrici sono l\'anima dei giochi di ruolo e dei giochi da tavolo moderni. Sia che tu stia cercando di superare un tiro salvezza in Dungeons & Dragons o che stia lanciando per produrre risorse, il risultato è regolato dalle probabilità matematiche. Capire in che modo la combinazione di diversi tipi di dadi influenza le tue probabilità è fondamentale per prendere decisioni tattiche durante la partita.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Probabilità di 20 naturale' },
        { value: '10.5', label: 'Media di un lancio di 3d6' },
        { value: '9.75%', label: '20 naturale con vantaggio' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'La matematica dietro i dadi multipli: Perché 3d6 è più sicuro di 1d20', level: 2 },
    { type: 'paragraph', html: 'Quando lanci un singolo D20, ogni risultato da 1 a 20 ha la stessa probabilità del 5%, dando vita a una distribuzione di probabilità piatta. Tuttavia, quando si lanciano più dadi come 3d6, i risultati si concentrano intorno al valore medio di 10.5. Questa curva a campana indica che è molto più probabile ottenere un risultato moderato rispetto a valori estremi, garantendo stabilità e riducendo l\'imprevedibilità del dado singolo.' },
    { type: 'title', text: 'Probabilità del D20 spiegate: Colpi critici, pifia e impatto dei modificatori', level: 2 },
    { type: 'paragraph', html: 'Un semplice modificatore di più due può cambiare drasticamente la probabilità di successo, trasformando compiti difficili in sfide gestibili. In molti sistemi di gioco, un 20 naturale rappresenta un colpo critico automatico (il 5% di probabilità), mentre un 1 naturale è un fallimento critico (la pifia). Visualizzare questi risultati aiuta a demistificare il caso e ti permette di pianificare le tue mosse tattiche con un solido supporto statistico.' },
    {
      type: 'title',
      text: 'Tabella di riferimento dei dadi poliedrici standard',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo di dado', 'Lancio minimo', 'Lancio massimo', 'Risultato medio', 'Ruolo principale nei GdR'],
      rows: [
        ['D4', '1', '4', '2.5', 'Dardi incantati, pugnali, pericoli minori'],
        ['D6', '1', '6', '3.5', 'Palle di fuoco, spade comuni, prove di caratteristica'],
        ['D8', '1', '8', '4.5', 'Spade lunghe, incantesimi di cura, armi medie'],
        ['D10', '1', '10', '5.5', 'Alabarde, trucchetti, decine di percentili'],
        ['D12', '1', '12', '6.5', 'Grandi asce, punti ferita del barbaro'],
        ['D20', '1', '20', '10.5', 'Tiri salvezza, tiri per colpire, prove di abilità'],
        ['D100', '1', '100', '50.5', 'Tabelle percentuali, effetti di magia selvaggia'],
      ],
    },
    {
      type: 'tip',
      title: 'Calcolare le medie dei dadi a mente',
      html: 'Per trovare la media di qualsiasi dado, somma il valore minimo (1) e il massimo, quindi dividi per 2. Ad esempio, la media di un D6 è (1 + 6) / 2 = 3.5. Per dadi multipli, moltiplica la media del dado singolo per il numero di dadi (ad esempio, la media di 3d6 è 3 * 3.5 = 10.5). Aggiungere un modificatore fisso si limita a sommare quel valore alla media (3d6 + 4 promedia 14.5).',
    },
    {
      type: 'title',
      text: 'Confronto tra sistemi di dadi piatti e curvi',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Sistema D20 contro sistema a curva di campana di 3d6',
      items: [
        {
          pro: 'I sistemi D20 sono veloci da calcolare e offrono un 5% fisso per critici e pifia.',
          con: 'I risultati del D20 sono molto instabili, rendendo l\'abilità del personaggio troppo dipendente dalla fortuna.',
        },
        {
          pro: 'Le curve di campana di 3d6 favoriscono i risultati medi, garantendo che i personaggi competenti falliscano raramente prove facili.',
          con: 'I sistemi di 3d6 richiedono la somma di tre dadi e rendono i colpi critici perfetti (un 18) estremamente rari (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comprendere le meccaniche delle probabilità',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sistema D20 (Lineare)',
          description: 'Utilizza un singolo dado a 20 facce per le azioni, in cui ogni risultato ha la stessa probabilità del 5%. L\'alta variabilità crea tensione ma riduce la costanza.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            '5% di probabilità fissa per risultato',
            'Alta variabilità e oscillazioni',
            'I modificatori aumentano il successo in modo lineare',
          ],
        },
        {
          title: 'Sistema 3d6 (Curva di campana)',
          description: 'Somma tre dadi a 6 facce, creando una distributione normale centrata su 10.5. I risultati sono molto costanti, rendendo le deviazioni estreme insolite.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Risultati medi molto probabili',
            'Risultati estremi molto rari',
            'I modificatori hanno un impatto non lineare',
          ],
        },
        {
          title: 'Sistema percentile (Tiro sotto il punteggio)',
          description: 'Utilizza due dadi a 10 facce per ottenere un numero compreso tra 1 e 100. L\'obiettivo è fare meno del punteggio del personaggio, rendendo le chance evidenti.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Percentuale diretta di probabilità di successo',
            'Facile da capire a prima vista',
            'Il progresso del personaggio è matematicamente chiaro',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La fallacia dello scommettitore: Perché i dadi non hanno memoria',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Un errore comune nel gioco di ruolo è credere che i lanci passati influenzino quelli futuri. Se ottieni tre "1" di fila su un D20, potresti sentire che un tiro alto è "dovuto". In realtà, ogni lancio è indipendente. La probabilità di ottenere un 20 al lancio successivo rimane esattamente del 5%. Sapere questo aiuta a prendere decisioni tattiche oggettive.',
    },
    {
      type: 'title',
      text: 'Glossario di dadi e probabilità nei giochi di ruolo',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Vantaggio e Svantaggio',
          definition: 'Meccanica per cui un giocatore lancia due D20 e sceglie il risultato più alto (Vantaggio) o quello più basso (Svantaggio). Il vantaggio sposta la media da 10.5 a 13.8.',
        },
        {
          term: 'Curva a campana (distribuzione normale)',
          definition: 'Distribuzione in cui i risultati si concentrano intorno al valore medio. Si verifica sommando più dadi (come 3d6 o 2d10).',
        },
        {
          term: 'Colpo critico',
          definition: 'Successo automatico ottenuto realizzando il valore massimo del dado (20 naturale su un D20), che spesso conferisce danni extra o bonus.',
        },
        {
          term: 'Fallimento critico',
          definition: 'Fallimento automatico dalle conseguenze catastrofiche o comiche, attivato da un 1 su un D20.',
        },
        {
          term: 'Valore atteso',
          definition: 'La media a lungo termine dei tuoi lanci. Per un singolo D6 è 3.5; per un D20 è 10.5.',
        },
        {
          term: 'Dadi percentili',
          definition: 'Coppia di dadi a 10 facce (uno per le decine e uno per le unità) lanciati insieme per ottenere un risultato da 1 a 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Come funziona il simulatore di probabilità?',
      answer: 'Calcola la distribuzione esatta delle probabilità per la combinazione di dadi e il modificatore selezionati utilizzando formule matematiche e combinatorie, permettendoti di visualizzare le probabilità di posizionarsi sopra o sotto determinate soglie.',
    },
    {
      question: 'Quali dadi sono supportati?',
      answer: 'Tutti i dadi poliedrici più diffusi nei giochi da tavolo e di ruolo: D4, D6, D8, D10, D12, D20 e D100.',
    },
    {
      question: 'Cosa sono i modificatori e come funzionano?',
      answer: 'I modificatori sono valori fissi (+1, -2, ecc.) da aggiungere o sottrarre al totale del lancio per rappresentare bonus o penalità relativi al proprio personaggio o alla situazione.',
    },
    {
      question: 'Che cosa significa lanciare con Vantaggio o Svantaggio?',
      answer: 'Lanciare con Vantaggio significa lanciare due dadi D20 e scegliere il valore maggiore. Con Svantaggio, invece, si lanciano due dadi e si sceglie il minore. È una meccanica classica di D&D e altri GdR.',
    },
    {
      question: 'Cosa sono i colpi critici e i fallimenti critici?',
      answer: 'Un colpo critico si verifica quando si ottiene il massimo punteggio del dado (come un 20 naturale sul D20), garantendo il successo. Un fallimento critico si verifica quando si ottiene un 1, portando ad un fallimento automatico e ad eventi spesso imprevedibili.',
    },
    {
      question: 'Come calcola il simulatore le probabilità di lancio?',
      answer: 'Il simulatore esamina matematicamente ogni combinazione possibile risultante dai dadi selezionati e dai modificatori, visualizzando la percentuale esatta di probabilità per ciascun risultato totale.',
    },
    {
      question: 'Perché un lancio di 3d6 è più stabile rispetto ad un singolo D20?',
      answer: 'Mentre un singolo D20 offre una probabilità piatta del 5% per ogni numero, lanciare 3d6 crea una curva a campana in cui i risultati tendono a raggrupparsi vicino alla media di 10.5, riducendo drasticamente le probabilità di valori estremamente alti o bassi.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Aggiungi dadi',
      text: 'Clicca sui pulsanti dei dadi per aggiungerli alla tua riserva attiva.',
    },
    {
      name: 'Aggiungi modificatore',
      text: 'Inserisci un valore positivo o negativo per incrementare o decrementare il totale.',
    },
    {
      name: 'Lancia e visualizza statistiche',
      text: 'Clicca sul pulsante Lancia per guardare le animazioni di risultato, la cronologia e l\'analisi delle probabilità.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Simulatore di Lancio Dadi & Calcolo Probabilità',
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
          'name': 'Come funziona il simulatore di probabilità?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Calcola la distribuzione esatta delle probabilità per la combinazione di dadi e il modificatore selezionati utilizzando formule matematiche e combinatorie, permettendoti di visualizzare le probabilità di posizionarsi sopra o sotto determinate soglie.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quali dadi sono supportati?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tutti i dadi poliedrici più diffusi nei giochi da tavolo e di ruolo: D4, D6, D8, D10, D12, D20 e D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Cosa sono i modificatori e come funzionano?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'I modificatori sono valori fissi (+1, -2, ecc.) da aggiungere o sottrarre al totale del lancio per rappresentare bonus o penalità relativi al proprio personaggio o alla situazione.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Che cosa significa lanciare con Vantaggio o Svantaggio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lanciare con Vantaggio significa lanciare due dadi D20 e scegliere il valore maggiore. Con Svantaggio, invece, si lanciano due dadi e si sceglie il minore. È una meccanica classica di D&D e altri GdR.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Cosa sono i colpi critici e i fallimenti critici?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un colpo critico si verifica quando si ottiene il massimo punteggio del dado (come un 20 naturale sul D20), garantendo il successo. Un fallimento critico si verifica quando si ottiene un 1, portando ad un fallimento automatico e ad eventi spesso imprevedibili.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Come calcola il simulatore le probabilità di lancio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il simulatore esamina matematicamente ogni combinazione possibile risultante dai dadi selezionati e dai modificatori, visualizzando la percentuale esatta di probabilità per ciascun risultato totale.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Perché un lancio di 3d6 è più stabile rispetto ad un singolo D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mentre un singolo D20 offre una probabilità piatta del 5% per ogni numero, lanciare 3d6 crea una curva a campana in cui i risultati tendono a raggrupparsi vicino alla media di 10.5, riducendo drasticamente le probabilità di valori estremamente alti o bassi.'
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
          'name': 'Aggiungi dadi',
          'text': 'Clicca sui pulsanti dei dadi per aggiungerli alla tua riserva attiva.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Aggiungi modificatore',
          'text': 'Inserisci un valore positivo o negativo per incrementare o decrementare il totale.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lancia e visualizza statistiche',
          'text': 'Clicca sul pulsante Lancia per guardare le animazioni di risultato, la cronologia e l\'analisi delle probabilità.'
        }
      ]
    }
  ],
};
