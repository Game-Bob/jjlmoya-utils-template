import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Timer Giochi da Tavolo',
  setupTitle: 'Configurazione Gioco',
  playerNamePlaceholder: 'Nome giocatore',
  addPlayer: 'Aggiungi Giocatore',
  removePlayer: 'Rimuovi',
  startGame: 'Avvia Gioco',
  pauseGame: 'Pausa',
  resumeGame: 'Riprendi',
  resetGame: 'Ripristina',
  nextTurn: 'Fine Turno',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Giocatore',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  expiredLabel: 'TEMPO SCADUTO',
  overtimeLabel: 'Tempo supplementare',
  turnIndicator: 'Tuo Turno',
  warningLowTime: 'Tempo basso',
  pausedOverlay: 'Gioco in Pausa',
  roundLabel: 'Round',
  settingsTitle: 'Impostazioni',
  baseTimeLabel: 'Tempo base',
  incrementLabel: 'Incremento/Ritardo',
  warningTimeLabel: 'Soglia avviso',
  confirmLabel: 'Conferma',
  cancelLabel: 'Annulla',
  noPlayersHint: 'Aggiungi almeno 2 giocatori per iniziare',
  addPlayerHint: 'Inserisci il nome del giocatore',
  timeUpLabel: 'Tempo scaduto!',
  presetsTitle: 'Preimpostazioni',
  timeControlTitle: 'Controllo Tempo',
  modeLabel: 'Modalità',
  modeNormal: 'Conto alla rovescia normale',
  modeFischer: 'Fischer (Incremento)',
  modeBronstein: 'Bronstein (Ritardo)',
  modeHourglass: 'Clessidra',
  modeTurn: 'Ripristino Turno',
  audioTitle: 'Avvisi Audio',
  soundAlerts: 'Effetti Sonori',
  playersTitle: 'Giocatori',
  playersAdded: 'Giocatori Aggiunti',
  statsTitle: 'Statistiche Partita',
  totalGameTime: 'Tempo Totale',
  totalRounds: 'Round Totali',
  slowestPlayer: 'Giocatore più lento',
  playerPerformance: 'Analisi Tempo Giocatori',
  playAgain: 'Nuovo Gioco',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'timer-giochi-da-tavolo-clessidra',
  title: 'Timer Giochi da Tavolo: Orologio da Scacchi e Gestione Turni',
  description: 'Monitora i turni e gestisci il tempo nelle tue partite di giochi da tavolo con un timer professionale. Supporta orologio da scacchi, modalità multigiocatore, incremento Fischer e ritardo Bronstein.',
  ui,
  seo: [
    { type: 'title', text: 'Padroneggiare il Ritmo al Tavolo: Come i Controlli Professionali Migliorano il Gioco', level: 2 },
    { type: 'paragraph', html: 'La gestione del tempo è un componente essenziale nei giochi da tavolo moderni. Sia che tu stia affrontando un gioco di società rapido o un profondo gioco di strategia, regolare il tempo di riflessione garantisce a tutti una partecipazione equa. L\'uso di metodi professionali come l\'incremento Fischer, il ritardo Bronstein o la modalità Clessidra elimina la paralisi da analisi, garantisce la fluidità della partita e aggiunge una dimensione strategica al tavolo da gioco.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Giocatori Supportati' },
        { value: '5 Modalità', label: 'Configurazioni Tempo' },
        { value: '100ms', label: 'Precisione Motore' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein e Clessidra: Spiegazione dei Controlli Tempo Avanzati', level: 2 },
    { type: 'paragraph', html: 'Il nostro timer per giochi da tavolo supporta diverse opzioni ispirate ai tornei competitivi, per far scorrere le tue partite in modo fluido:' },
    {
      type: 'table',
      headers: ['Modalità', 'Come funziona', 'Ideale per'],
      rows: [
        ['Conto alla rovescia normale', 'Un timer standard globale che si mette in pausa alla fine del turno.', 'Giochi casuali con una riserva di tempo comune'],
        ['Fischer (Incremento)', 'Aggiunge un numero fisso di secondi al tuo orologio dopo aver terminato un turno.', 'Eurogames strategici e wargames in cui i turni veloci creano riserva di tempo'],
        ['Bronstein (Ritardo)', 'Fornisce una finestra di ritardo prima che il timer principale inizi a scorrere.', 'Giochi tattici complessi in cui i brevi turni di gestione fisica sono gratuiti'],
        ['Clessidra', 'Il tuo timer diminuisce mentre quello dell\'avversario aumenta in tempo reale.', 'Duelli intensi a due giocatori e partite di scacchi competitive'],
        ['Ripristino Turno', 'Un timer fisso che si azzera completamente all\'inizio di ogni turno.', 'Giochi di società rapidi, quiz e round veloci'],
      ],
    },
    {
      type: 'tip',
      title: 'Trovare la Configurazione di Tempo Ideale',
      html: 'Un punto di partenza consigliato è di 30-45 secondi per i giochi di società veloci, 1-2 minuti con un ritardo Bronstein di 5 secondi per eurogames medi, e 30-45 minuti con un incremento Fischer di 10 secondi per wargames pesanti o campagne strategiche.',
    },
    {
      type: 'title',
      text: 'Ottimizzazione Visiva: Schermo Condiviso per Duelli vs Pulsante Centrale Multigiocatore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per i duelli testa a testa, l\'applicazione mostra automaticamente un orologio da scacchi a schermo condiviso. Questa visualizzazione consente ai giocatori di ruotare la propria metà dello schermo di 180 gradi, facilitando la lettura da lati opposti del tavolo. Per le partite con 3 o più partecipanti, l\'interfaccia passa a una griglia multigiocatore con evidenziazione del giocatore attivo, regolazioni delle singole schede e un grande pulsante centrale Fine Turno che funge da cicalino fisico condiviso.',
    },
    {
      type: 'proscons',
      title: 'Confronto tra Incremento Fischer e Ritardo Bronstein',
      items: [
        {
          pro: 'L\'incremento Fischer premia il gioco rapido accumulando riserve di tempo per i turni futuri.',
          con: 'Il tempo di gioco complessivo può allungarsi se i giocatori effettuano costantemente turni rapidissimi.',
        },
        {
          pro: 'Il ritardo Bronstein evita di perdere tempo nei piccoli turni amministrativi senza accumulare riserve massicce.',
          con: 'Richiede la configurazione di una soglia di ritardo adatta al tempo di gestione fisica del gioco.',
        },
        {
          pro: 'La modalità Clessidra crea tensione diretta nei duelli trasferendo il tuo tempo sottratto direttamente al rivale.',
          con: 'Diventa matematicamente complessa e meno strategica nei giochi con più di due giocatori.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Generi Comuni di Giochi da Tavolo che Beneficiano di un Timer di Turno',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Eurogames Strategici',
          description: 'Giochi di piazzamento lavoratori e gestione risorse in cui la complessità del turno varia. L\'incremento Fischer aiuta a prendere decisioni critiche a fine partita senza rallentare i round iniziali.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Mitiga la paralisi da analisi',
            'Supporto per turni a complessità variabile',
            'Il tempo diventa una risorsa attiva',
          ],
        },
        {
          title: 'Giochi di Società & Quiz',
          description: 'Giochi frenetici in cui la rapidità di pensiero è parte del divertimento. I timer a ripristino turno fisso mantengono alta l\'energia ed evitano che un giocatore blocchi il flusso.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Conto alla rovescia fisso e corto',
            'Mantiene il ritmo della festa',
            'Forza decisioni immediate',
          ],
        },
        {
          title: 'Partite Competitive in Duello',
          description: 'I duelli rigidi con orologio da scacchi richiedono layout precisi e ruotabili per garantire l\'integrità competitiva e una divisione equa in tutte le manche.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            'Rotazione dello schermo a 180 gradi',
            'Tracciamento accurato a intervalli di 100 ms',
            'Gestione di morte improvvisa o tempo supplementare',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Incremento Fischer',
          definition: 'Un metodo di controllo del tempo in cui una quantità prestabilita di secondi viene aggiunta al tempo rimanente del giocatore alla fine di ogni turno.',
        },
        {
          term: 'Ritardo Bronstein',
          definition: 'Un metodo di controllo del tempo in cui il conto alla rovescia viene ritardato per un periodo impostato all\'inizio di un turno, evitando detrazioni se il turno si chiude rapidamente.',
        },
        {
          term: 'Modalità Clessidra',
          definition: 'Un sistema dinamico di cronometraggio in cui il tempo sottratto a un giocatore viene trasferito direttamente e in tempo reale all\'avversario.',
        },
        {
          term: 'Paralisi da analisi',
          definition: 'Uno stato di riflessione eccessiva in cui un giocatore si sente sopraffatto dalle opzioni, rallentando il flusso del gioco e danneggiando l\'esperienza altrui.',
        },
        {
          term: 'Analisi della partita',
          definition: 'Metriche di rendimento a fine partita che riassumono i round trascorsi, la velocità media di pensiero, le durate massime dei turni e la classifica dei giocatori più lenti.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Come funziona il layout della modalità Duel?',
      answer: 'All\'avvio di una partita per 2 giocatori, l\'interfaccia mostra un orologio da scacchi a schermo condiviso. Ogni lato rappresenta un giocatore; toccando la propria metà si termina il turno. Gli schermi possono essere ruotati di 180 gradi per i giocatori seduti di fronte.',
    },
    {
      question: 'Qual è la differenza tra le modalità Fischer e Bronstein?',
      answer: 'La modalità Fischer aggiunge secondi extra alla riserva del giocatore dopo il turno, consentendo di accumulare tempo. La modalità Bronstein offre un ritardo all\'inizio del turno; se il turno termina entro il ritardo, non viene detratto tempo.',
    },
    {
      question: 'L\'applicazione traccia le statistiche dei turni?',
      answer: 'Sì! Al termine di una partita o allo scadere del tempo, il pannello delle statistiche mostra la durata totale, i round complessivi, il tempo medio per turno, il turno massimo e la classifica di velocità dei giocatori.',
    },
    {
      question: 'I miei giocatori vengono salvati quando ricarico la pagina?',
      answer: 'Sì, la configurazione dei giocatori e la selezione dei colori vengono salvate automaticamente nella memoria locale del browser, ripristinando l\'elenco quando si torna sulla pagina.',
    },
    {
      question: 'Posso aggiungere o rimuovere tempo durante la partita?',
      answer: 'Sì! Nella modalità multigiocatore, le schede dei giocatori presentano pulsanti dedicati +30s e -30s per regolare al volo il tempo rimanente.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configura la Partita',
      text: 'Seleziona una preimpostazione (Casual, Blitz, Strategica, Clessidra) o definisci parametri personalizzati: durata base, incremento o ritardo, e soglie di avviso.',
    },
    {
      name: 'Organizza i Giocatori',
      text: 'Inserisci i nomi dei giocatori e seleziona i colori. Modifica l\'ordine dei turni con i controlli a freccia; i dettagli vengono salvati automaticamente.',
    },
    {
      name: 'Avvia e Passa i Turni',
      text: 'Inizia il gioco. Nella modalità Duel, tocca la tua metà schermo per terminare il turno. Nella modalità Multigiocatore, fai clic sul grande pulsante centrale Fine Turno.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Timer Giochi da Tavolo & Gestione Turni',
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
          'name': 'Come funziona il layout della modalità Duel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'All\'avvio di una partita per 2 giocatori, l\'interfaccia mostra un orologio da scacchi a schermo condiviso. Ogni lato rappresenta un giocatore; toccando la propria metà si termina il turno. Gli schermi possono essere ruotati di 180 gradi per i giocatori seduti di fronte.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Qual è la differenza tra le modalità Fischer e Bronstein?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La modalità Fischer aggiunge secondi extra alla riserva del giocatore dopo il turno, consentendo di accumulare tempo. La modalità Bronstein offre un ritardo all\'inizio del turno; se il turno termina entro il ritardo, non viene detratto tempo.'
          }
        },
        {
          '@type': 'Question',
          'name': 'L\'applicazione traccia le statistiche dei turni?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì! Al termine di una partita o allo scadere del tempo, il pannello delle statistiche mostra la durata totale, i round complessivi, il tempo medio per turno, il turno massimo e la classifica di velocità dei giocatori.'
          }
        },
        {
          '@type': 'Question',
          'name': 'I miei giocatori vengono salvati quando ricarico la pagina?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì, la configurazione dei giocatori e la selezione dei colori vengono salvate automaticamente nella memoria locale del browser, ripristinando l\'elenco quando si torna sulla pagina.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Posso aggiungere o rimuovere tempo durante la partita?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì! Nella modalità multigiocatore, le schede dei giocatori presentano pulsanti dedicati +30s e -30s per regolare al volo il tempo rimanente.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come utilizzare il Timer Giochi da Tavolo',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Configura la Partita',
          'text': 'Seleziona una preimpostazione (Casual, Blitz, Strategica, Clessidra) o definisci parametri personalizzati: durata base, incremento o ritardo, e soglie di avviso.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Organizza i Giocatori',
          'text': 'Inserisci i nomi dei giocatori e seleziona i colori. Modifica l\'ordine dei turni con i controlli a freccia; i dettagli vengono salvati automaticamente.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Avvia e Passa i Turni',
          'text': 'Inizia il gioco. Nella modalità Duel, tocca la tua metà schermo per terminare il turno. Nella modalità Multigiocatore, fai clic sul grande pulsante centrale Fine Turno.'
        }
      ]
    }
  ],
};
