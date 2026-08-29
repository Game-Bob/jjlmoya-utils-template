import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Tracciatore Punteggio',
  addPlayer: 'Aggiungi Giocatore',
  removePlayer: 'Rimuovi',
  renamePlayer: 'Rinomina',
  startRound: 'Inizia Turno 1',
  nextRound: 'Turno Successivo',
  resetGame: 'Reimposta Partita',
  undoRound: 'Annulla Ultimo Turno',
  playerLabel: 'Giocatore',
  scoreLabel: 'Punteggio',
  roundLabel: 'Turno',
  totalLabel: 'Totale',
  rankLabel: 'Posizione',
  leaderboardTitle: 'Classifica',
  historyTitle: 'Cronologia Punteggi',
  noPlayersHint: 'Aggiungi giocatori per iniziare a registrare i punteggi',
  playerNamePlaceholder: 'Nome giocatore',
  confirmLabel: 'Conferma',
  cancelLabel: 'Annulla',
  deleteRoundConfirm: 'Eliminare l ultimo turno?',
  playerAdded: 'Giocatore aggiunto',
  playerRemoved: 'Giocatore rimosso',
  roundStarted: 'Turno iniziato',
  gameReset: 'La partita è stata reimpostata',
  noRoundsYet: 'Nessun turno ancora registrato',
  currentRoundLabel: 'Turno Corrente',
  scoringTitle: 'Punteggio Turno',
  resetAllLabel: 'Reimposta Tutto',
  confirmResetAll: 'Questo eliminerà tutti i giocatori e i punteggi. Sei sicuro?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'tracciatore-punteggio',
  title: 'Tracciatore Punteggio: Segnapunti Multigiocatore e Gestore Classifica',
  description: 'Tieni traccia dei punteggi per qualsiasi gioco da tavolo. Aggiungi giocatori, registra punteggi turno per turno e guarda la classifica aggiornarsi in tempo reale con classifiche automatiche.',
  ui,
  seo: [
    { type: 'title', text: 'Registrazione Punteggi nei Giochi da Tavolo: Come Tenere il Conto Senza Errori', level: 2 },
    { type: 'paragraph', html: 'Tenere il punteggio nei giochi da tavolo sembra semplice finché non sei a cinque turni di profondità e qualcuno si accorge di aver sbagliato i conti. Che tu giochi a Wingspan, Terraforming Mars, Catan o a qualsiasi gioco a punti vittoria, un segnapunti accurato fa la differenza tra una partita equa e una discussione. Un tracciatore digitale elimina gli errori di calcolo, mostra la classifica in tempo reale e conserva una cronologia completa di ogni turno in modo da poter verificare il totale finale.' },
    {
      type: 'stats',
      items: [
        { value: 'Illimitati', label: 'Giocatori Supportati' },
        { value: 'Tempo Reale', label: 'Aggiornamenti Classifica' },
        { value: 'Illimitati', label: 'Turni Registrati' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Errori Comuni nel Punteggio e Come Evitarli', level: 2 },
    { type: 'paragraph', html: 'L errore più frequente è dimenticare di aggiungere i bonus di fine turno o sbagliare a sommare una colonna di numeri. Quando registri i punteggi digitalmente, il totale corrente si aggiorna automaticamente dopo ogni inserimento. Questo significa che puoi notare un errore nel momento in cui un numero sembra strano, invece di scoprirlo alla fine della partita quando nessuno ricorda il valore corretto. La funzione di cronologia dei turni ti permette di controllare qualsiasi turno precedente e correggere errori senza dover ricominciare l intera partita.' },
    {
      type: 'tip',
      title: 'Consigli Rapidi per il Punteggio',
      html: 'Inserisci i punteggi subito dopo ogni turno finché tutti ricordano ancora i risultati. Usa etichette descrittive come colori o nomi di fazioni invece di nomi reali per giochi con ruoli nascosti. Quando giochi con bambini, lascia che siano loro a premere i pulsanti per mantenerli coinvolti nel processo di registrazione.',
    },
    {
      type: 'title',
      text: 'Punteggio per Turno vs Solo Totale Finale',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Punteggio per Turno vs Solo Punteggio Finale',
      items: [
        {
          pro: 'Puoi vedere chi era in testa in ogni fase del gioco e come è cambiata la dinamica.',
          con: 'Richiede l inserimento dei dati dopo ogni turno invece che una sola volta alla fine.',
        },
        {
          pro: 'Gli errori sono facili da individuare perché puoi confrontare le voci dei singoli turni con la memoria.',
          con: 'Richiede un po più di tempo durante la sessione di gioco.',
        },
        {
          pro: 'I giocatori possono verificare i propri punteggi di turno, riducendo le dispute e creando fiducia.',
          con: 'Funziona meglio quando una persona gestisce il dispositivo o i giocatori si alternano.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Giochi con Sistemi di Punteggio Insoliti',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Giochi a Punti Vittoria',
          description: 'La maggior parte degli Eurogames utilizza punti vittoria assegnati durante tutta la partita. La sfida è tenere traccia di molteplici fonti di PV: risorse, obiettivi, bonus di fine partita. Un tracciatore digitale ti permette di inserire i punti man mano che arrivano e vedere il totale corrente.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Tracciamento di più categorie',
            'Calcolo bonus fine partita',
            'Risoluzione immediata dei pareggi',
          ],
        },
        {
          title: 'Giochi con Punteggio Negativo',
          description: 'Alcuni giochi penalizzano i giocatori con punti negativi per determinate azioni. Un segnapunti digitale gestisce i valori negativi in modo naturale, colorandoli di rosso in modo che la penalità sia immediatamente visibile. Utile soprattutto nei giochi di prese o nei giochi di deduzione con meccaniche di penalità.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Gestione automatica dei negativi',
            'Indicatori visivi di penalità',
            'Totali cumulativi accurati',
          ],
        },
        {
          title: 'Giochi Campagna',
          description: 'I giochi legacy e campagna trasportano i punteggi attraverso più sessioni. Senza un tracciatore, devi conservare appunti cartacei tra una serata e l altra. Uno strumento digitale mantiene organizzati i punteggi della campagna e ti permette di rivedere come le tue decisioni hanno influenzato la classifica generale.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Tracciamento persistente della campagna',
            'Confronto tra sessioni',
            'Dettaglio sessione per sessione',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossario del Punteggio',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Punti Vittoria (PV)',
          definition: 'L unità di punteggio standard nella maggior parte dei giochi da tavolo moderni. I giocatori guadagnano PV attraverso azioni e chi ha più PV alla fine della partita vince.',
        },
        {
          term: 'Punteggio per Turno',
          definition: 'Registrare i punteggi alla fine di ogni turno anziché solo alla fine del gioco. Crea una cronologia dettagliata e semplifica il controllo degli errori.',
        },
        {
          term: 'Classifica',
          definition: 'Una classifica in tempo reale che mostra la posizione di ogni giocatore in base al punteggio totale. La classifica si riordina automaticamente man mano che vengono inseriti nuovi punteggi.',
        },
        {
          term: 'Punteggio Negativo',
          definition: 'Un sistema di punteggio in cui i giocatori possono perdere punti attraverso penalità o azioni fallite, risultando in totali negativi. Un tracciatore digitale gestisce questo senza errori di sottrazione manuale.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Come Gestire i Punteggi Contestati',
      icon: 'mdi:information-outline',
      badge: 'SUGGERIMENTO',
      html: 'Quando un giocatore contesta un punteggio, non modificarlo immediatamente. Prima controlla la cronologia dei turni per confermare cosa è stato inserito. Se l inserimento è sbagliato, usa i pulsanti +/- per correggerlo e il totale si aggiorna automaticamente. Se l inserimento del turno è corretto ma il giocatore non è d accordo, la cronologia fornisce una registrazione obiettiva che tutti possono consultare insieme.',
    },
  ],
  faq: [
    {
      question: 'Quanti giocatori posso tracciare?',
      answer: 'Non c è limite. Aggiungi tutti i giocatori che il tuo gioco supporta e rinominarli in qualsiasi momento durante la sessione.',
    },
    {
      question: 'Posso annullare un errore?',
      answer: 'Sì. Usa il pulsante Annulla Ultimo Turno per rimuovere il turno di punteggio più recente, che ricalcolerà automaticamente tutti i totali e le classifiche.',
    },
    {
      question: 'Il tracciatore punteggio salva i miei dati?',
      answer: 'Il tracciatore punteggio funziona interamente nel tuo browser. I dati persistono per la sessione corrente. Ricaricare la pagina reimposta tutti i punteggi.',
    },
    {
      question: 'Come funziona la classifica?',
      answer: 'La classifica ordina i giocatori per punteggio totale decrescente. Le posizioni si aggiornano automaticamente man mano che inserisci o modifichi i punteggi in ogni turno.',
    },
    {
      question: 'Posso registrare punteggi negativi?',
      answer: 'Sì. I pulsanti +/- permettono regolazioni sia positive che negative, rendendolo adatto per giochi con punti penalità o meccaniche di deduzione.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Aggiungi Giocatori',
      text: 'Inserisci i nomi dei giocatori usando il campo Aggiungi Giocatore. Puoi aggiungere o rimuovere giocatori in qualsiasi momento durante la partita.',
    },
    {
      name: 'Inizia a Registrare',
      text: 'Clicca Inizia Turno per cominciare un nuovo turno di punteggio. Usa i pulsanti +/- per regolare il punteggio di ogni giocatore per quel turno.',
    },
    {
      name: 'Visualizza Classifiche',
      text: 'La classifica si aggiorna automaticamente. Sfoglia la scheda Cronologia Punteggi per rivedere le voci dei turni precedenti.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tracciatore Punteggio & Segnapunti',
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
          'name': 'Quanti giocatori posso tracciare?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non c è limite. Aggiungi tutti i giocatori che il tuo gioco supporta e rinominarli in qualsiasi momento durante la sessione.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso annullare un errore?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì. Usa il pulsante Annulla Ultimo Turno per rimuovere il turno di punteggio più recente, che ricalcolerà automaticamente tutti i totali e le classifiche.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Il tracciatore punteggio salva i miei dati?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il tracciatore punteggio funziona interamente nel tuo browser. I dati persistono per la sessione corrente. Ricaricare la pagina reimposta tutti i punteggi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Come funziona la classifica?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La classifica ordina i giocatori per punteggio totale decrescente. Le posizioni si aggiornano automaticamente man mano che inserisci o modifichi i punteggi in ogni turno.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso registrare punteggi negativi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì. I pulsanti +/- permettono regolazioni sia positive che negative, rendendolo adatto per giochi con punti penalità o meccaniche di deduzione.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come Usare il Tracciatore Punteggio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Aggiungi Giocatori',
          'text': 'Inserisci i nomi dei giocatori usando il campo Aggiungi Giocatore. Puoi aggiungere o rimuovere giocatori in qualsiasi momento durante la partita.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Inizia a Registrare',
          'text': 'Clicca Inizia Turno per cominciare un nuovo turno di punteggio. Usa i pulsanti +/- per regolare il punteggio di ogni giocatore per quel turno.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Visualizza Classifiche',
          'text': 'La classifica si aggiorna automaticamente. Sfoglia la scheda Cronologia Punteggi per rivedere le voci dei turni precedenti.',
        },
      ],
    },
  ],
};
