import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Tracciatore d\'Iniziativa',
  addCombatant: 'Aggiungi combattente',
  removeCombatant: 'Rimuovi',
  playerLabel: 'Giocatore',
  npcLabel: 'PNG',
  initiativeLabel: 'Iniziativa',
  modifierLabel: 'Modificatore',
  namePlaceholder: 'Nome personaggio',
  initiativePlaceholder: 'Iniziativa',
  modifierPlaceholder: 'Modificatore',
  addButton: 'Aggiungi',
  startCombat: 'Inizia combattimento',
  endCombat: 'Termina combattimento',
  nextTurn: 'Turno successivo',
  prevTurn: 'Turno precedente',
  roundLabel: 'Round',
  turnLabel: 'Turno',
  noCombatants: 'Nessun combattente ancora. Aggiungi personaggi per iniziare.',
  statusInput: 'Stato',
  combatStarted: 'Combattimento iniziato!',
  combatEnded: 'Combattimento terminato',
  yourTurn: 'Turno',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'tracciatore-iniziativa',
  title: 'Tracciatore d\'Iniziativa RPG: Ordine di Turno & Gestore d\'Iniziativa',
  description: 'Tieni traccia dell\'ordine di iniziativa per qualsiasi gioco di ruolo da tavolo. Aggiungi combattenti, tira l\'iniziativa, gestisci effetti di stato e naviga tra i turni in combattimento.',
  ui,
  seo: [
    { type: 'title', text: 'Come funziona l\'Iniziativa in D&D e altri GDR da tavolo', level: 2 },
    { type: 'paragraph', html: 'L\'iniziativa determina l\'ordine delle azioni in combattimento. Ogni partecipante effettua una prova di Destrezza all\'inizio dello scontro e l\'ordine dei turni va dal più alto al più basso. Un tracciatore d\'iniziativa digitale automatizza l\'ordinamento, evidenzia il combattente attivo, tiene traccia degli effetti di stato in corso e mantiene l\'intero tavolo informato su chi deve giocare. È particolarmente utile per i Dungeon Master che gestiscono incontri complessi con molteplici tipi di nemici e personaggi giocanti.' },
    {
      type: 'stats',
      items: [
        { value: 'Illimitati', label: 'Combattenti supportati' },
        { value: 'Ordine auto', label: 'Per tiro d\'iniziativa' },
        { value: 'Tempo reale', label: 'Tracciamento turni' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Regole d\'Iniziativa Standard per D&D 5e', level: 2 },
    { type: 'paragraph', html: 'In D&D 5a Edizione, ogni partecipante effettua una prova di Destrezza all\'inizio del combattimento. I giocatori tirano individualmente. Il Dungeon Master tira una volta per ogni gruppo di mostri identici. L\'ordine dei turni va dal più alto al più basso, poi torna all\'inizio per il round successivo. I pareggi vengono risolti dal punteggio di Destrezza o decide il DM. Un tracciatore digitale gestisce tutto automaticamente e mostra l\'ordine completo dei turni a colpo d\'occhio.' },
    {
      type: 'table',
      headers: ['Funzione', 'Tracciamento manuale', 'Tracciatore digitale'],
      rows: [
        ['Ordinamento', 'Riscrivere la lista quando l\'iniziativa cambia', 'Riordino automatico istantaneo'],
        ['Turno corrente', 'Deve essere tracciato verbalmente o con un segnalino', 'Evidenziato con bagliore verde'],
        ['Effetti di stato', 'Blocco note separato o dado vicino alla miniatura', 'Clicca per attivare su ogni combattente'],
        ['Conteggio round', 'Contare a mente o su un foglio', 'Mostrato automaticamente'],
        ['Aggiunta in combattimento', 'Cancellare e riscrivere l\'ordine', 'Inserito nella posizione corretta'],
      ],
    },
    {
      type: 'tip',
      title: 'Consigli per gestire l\'Iniziativa al tavolo',
      html: 'Tira l\'iniziativa per tutti i mostri prima della sessione per risparmiare tempo durante il combattimento. Aggiungi effetti di stato comuni come Stordito o Avvelenato a un combattente non appena vengono applicati. Questo evita di dimenticare una condizione quando arriva il turno del personaggio affetto. Usa il pulsante Turno precedente per rivedere cosa è successo se devi controllare una decisione presa prima nel round.',
    },
    {
      type: 'title',
      text: 'Effetti di Stato Comunemente Usati in Combattimento',
      level: 3,
    },
    { type: 'paragraph', html: 'Tenere traccia delle condizioni durante il combattimento è uno dei compiti più spesso trascurati. Un effetto di stato può cambiare completamente l\'efficacia di un personaggio e dimenticare di rimuoverlo può far pendere la bilancia di un incontro. Il tracciatore d\'iniziativa ti consente di applicare e rimuovere condizioni con un singolo clic, in modo che rimangano visibili accanto al nome del combattente.' },
    {
      type: 'proscons',
      title: 'Gestione digitale vs manuale degli effetti di stato',
      items: [
        {
          pro: 'Le condizioni sono visibili accanto al nome del personaggio, così nessuno dimentica un effetto attivo.',
          con: 'Richiede di ricordarsi di attivare e disattivare gli stati man mano che vengono applicati e rimossi.',
        },
        {
          pro: 'Più stati possono essere attivi sullo stesso combattente e vengono mostrati tutti insieme.',
          con: 'Il tracciatore non applica automaticamente gli effetti delle regole; il DM deve comunque gestirli.',
        },
        {
          pro: 'Gli stati possono essere aggiunti durante il combattimento senza fermarsi a scrivere su una scheda personaggio.',
          con: 'Solo i tag di stato predefiniti sono disponibili di base.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sistemi d\'Iniziativa Alternativi',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iniziativa Standard',
          description: 'Ogni combattente tira una volta all\'inizio. Lo stesso ordine si ripete ogni round. Semplice e prevedibile, ma l\'ordine è fisso dopo il primo tiro. Funziona bene per la maggior parte dei gruppi e delle dimensioni di incontri.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Semplice da imparare e insegnare', 'Ordine turni fisso ogni round', 'Funziona per qualsiasi gruppo'],
        },
        {
          title: 'Iniziativa di Fazione',
          description: 'Tutti i personaggi giocanti agiscono insieme, poi tutti i nemici insieme. Comune nelle edizioni più vecchie e nei giochi OSR. Accelera il combattimento riducendo il tracciamento individuale ma riduce la profondità tattica.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Risoluzione più rapida del combattimento', 'Incoraggia la coordinazione del gruppo', 'Meno varietà nei singoli turni'],
        },
        {
          title: 'Variante Fattore di Velocità',
          description: 'Ogni round i partecipanti dichiarano prima le azioni, poi tirano l\'iniziativa modificata dall\'azione scelta. Usato in sistemi di regole opzionali. Crea un ordine di turno imprevedibile ma aggiunge profondità al processo decisionale.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Ordine diverso ogni round', 'La scelta dell\'azione influenza i tempi', 'Più decisioni tattiche per turno'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossario del Tracciatore di Combattimento',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Iniziativa',
          definition: 'Una prova di Destrezza effettuata all\'inizio del combattimento per determinare la sequenza dei turni. Ogni partecipante tira e agisce in ordine decrescente.',
        },
        {
          term: 'Round',
          definition: 'Un ciclo completo in cui ogni combattente effettua un turno. Dopo l\'ultimo combattente, il round termina e un nuovo round inizia dall\'inizio dell\'ordine.',
        },
        {
          term: 'Effetto di Stato',
          definition: 'Una condizione temporanea che modifica le capacità di un personaggio. Esempi includono Stordito (non può agire), Avvelenato (svantaggio ai tiri) e Accecato (attacchi in svantaggio).',
        },
        {
          term: 'PNG',
          definition: 'Personaggio Non Giocante controllato dal Dungeon Master. Nel tracciamento dell\'iniziativa, i PNG sono tipicamente nemici o creature neutrali nell\'incontro.',
        },
        {
          term: 'PG',
          definition: 'Personaggio Giocante controllato da uno dei giocatori al tavolo. I PG sono distinti dai PNG nel tracciatore per aiutare il DM a identificare i bersagli amici.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando rilanciare l\'Iniziativa ogni round',
      icon: 'mdi:information-outline',
      badge: 'CONSIGLIO DM',
      html: 'Alcuni DM preferiscono rilanciare l\'iniziativa ogni round per maggiore imprevedibilità, mentre la maggior parte mantiene lo stesso ordine per semplicità. Se un nuovo combattente si unisce alla mischia, tira la sua iniziativa e inseriscilo nella posizione corrente. Il tracciatore gestisce tutto automaticamente. Per gli incontri con boss, considera di dare al villain un\'iniziativa fissa a un valore specifico per rendere lo scontro più strutturato.',
    },
  ],
  faq: [
    {
      question: 'Come aggiungo combattenti all\'ordine di iniziativa?',
      answer: 'Inserisci il nome del personaggio, il tiro d\'iniziativa e il modificatore d\'iniziativa, poi clicca su Aggiungi. Alterna tra i tipi Giocatore e PNG per distinguere visivamente i membri del gruppo dai nemici nell\'elenco.',
    },
    {
      question: 'Cosa succede quando clicco su Inizia combattimento?',
      answer: 'Tutti i combattenti vengono ordinati per iniziativa dal più alto al più basso. L\'ordine dei turni inizia dall\'alto, il contatore dei round parte da 1 e il combattente attivo viene evidenziato con un bagliore verde.',
    },
    {
      question: 'Come tengo traccia degli effetti di stato durante il combattimento?',
      answer: 'Clicca su un tag di stato (Stordito, Avvelenato, Accecato, ecc.) per attivarlo o disattivarlo per il combattente selezionato. Gli stati attivi appaiono accanto al nome del personaggio. Questo ricorda a tutti gli effetti in corso quando arriva il turno di quel combattente.',
    },
    {
      question: 'I miei dati di combattimento persistono se aggiorno la pagina?',
      answer: 'Sì. Il tracciatore d\'iniziativa salva lo stato del combattimento nella memoria locale del browser. I tuoi combattenti, l\'ordine dei turni e gli effetti di stato rimangono dopo un ricaricamento della pagina. I dati vengono cancellati quando clicchi su Termina combattimento.',
    },
    {
      question: 'Posso tornare al turno precedente?',
      answer: 'Sì. Il pulsante Turno precedente ti consente di navigare all\'indietro nell\'ordine dei turni. È utile per rivedere cosa è successo prima nel round o per correggere un errore.',
    },
    {
      question: 'Posso aggiungere o rimuovere combattenti durante il combattimento?',
      answer: 'Sì. Nuovi combattenti possono essere aggiunti in qualsiasi momento e vengono automaticamente inseriti nella posizione corretta in base al loro tiro d\'iniziativa. I combattenti esistenti possono essere rimossi se lasciano l\'incontro.',
    },
    {
      question: 'Funziona con qualsiasi sistema di GDR?',
      answer: 'Sì. Il tracciatore funziona con qualsiasi gioco di ruolo da tavolo che usa un ordine di turno basato sull\'iniziativa. Inserisci i valori di iniziativa che il tuo sistema utilizza, che sia un tiro di d20 più Destrezza per D&D o un meccanismo diverso per altri giochi.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Aggiungi combattenti prima del combattimento',
      text: 'Inserisci il nome di ogni personaggio, il suo tiro d\'iniziativa e il modificatore. Marchiali come Giocatore o PNG. Aggiungi tanti combattenti quanti ne richiede il tuo incontro.',
    },
    {
      name: 'Inizia il combattimento per bloccare l\'ordine',
      text: 'Clicca su Inizia combattimento per ordinare tutti per iniziativa e iniziare a tracciare i turni. Il primo combattente nell\'ordine viene evidenziato.',
    },
    {
      name: 'Naviga tra i turni e traccia le condizioni',
      text: 'Usa Turno successivo e Turno precedente per spostarti nell\'ordine. Applica effetti di stato cliccando sui tag di stato per tracciare le condizioni durante il combattimento.',
    },
    {
      name: 'Termina il combattimento quando finito',
      text: 'Clicca su Termina combattimento per fermare il tracciamento dei turni. Questo cancella lo stato attivo e resetta il contatore dei round mantenendo l\'elenco dei combattenti per il prossimo incontro.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tracciatore d\'Iniziativa RPG',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Come aggiungo combattenti?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Inserisci il nome del personaggio, il tiro d\'iniziativa e il modificatore d\'iniziativa, poi clicca su Aggiungi. Giocatori e PNG possono essere alternati per distinguerli nell\'elenco.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa succede quando clicco su Inizia combattimento?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tutti i combattenti vengono ordinati per iniziativa (dal più alto). L\'ordine dei turni inizia con il primo combattente e un contatore round parte da 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come usare il Tracciatore d\'Iniziativa',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Aggiungi combattenti',
          'text': 'Inserisci i dettagli del personaggio: nome, tiro d\'iniziativa e modificatore. Alterna tra Giocatore e PNG prima di aggiungere.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Inizia combattimento',
          'text': 'Clicca su Inizia combattimento per ordinare tutti i combattenti per iniziativa e iniziare il tracciamento dell\'ordine dei turni.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gestisci i turni',
          'text': 'Usa Turno successivo e Turno precedente per navigare l\'ordine dei turni. Il combattente attivo è evidenziato con un bagliore verde.',
        },
      ],
    },
  ],
};
