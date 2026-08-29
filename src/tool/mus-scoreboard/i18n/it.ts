import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Assegna un nome alle due coppie, imposta le regole del tavolo e tocca le pietre per registrare i punti ad ogni mano.',
  pairOneLabel: 'Coppia uno',
  pairTwoLabel: 'Coppia due',
  pairOneDefault: 'Tavolo Nord',
  pairTwoDefault: 'Tavolo Sud',
  targetPointsLabel: 'Punti bersaglio per gioco',
  targetPointsHint: 'Scegli la quota punti per ogni gioco (30, 40 o 50 punti).',
  gamesToWinLabel: 'Giochi per vincere la vaca',
  gamesToWinHint: 'La prima coppia che raggiunge questo numero vince l\'incontro.',
  deckLabel: 'Mazzo di carte del tavolo',
  deckHint: 'Il mazzo spagnolo (Baraja española) da 40 carte è la scelta tradizionale per il Mus. Con un mazzo francese occorre rimuovere 8, 9 e 10.',
  spanishDeck: 'Baraja española (Mazzo spagnolo)',
  frenchDeck: 'Mazzo francese',
  frenchDeckNotice: 'Ricorda di rimuovere 8, 9 e 10 dal mazzo francese per giocare con 40 carte. I Fanti sono Sotas, le Donne Caballos e i Re Reyes.',
  pointsOption30: '30 punti',
  pointsOption40: '40 punti',
  pointsOption50: '50 punti',
  gamesOption1: '1 gioco',
  gamesOption2: '2 giochi',
  gamesOption3: '3 giochi',
  startMatch: 'Apri il segnapunti',
  matchSettings: 'Imposta coppie e regole',
  liveMatch: 'Partita in corso',
  targetLabel: 'punti per gioco',
  gameLabel: 'gioco',
  gamePlural: 'giochi',
  vacaLabel: 'giochi per la vittoria',
  scoreLabel: 'Pietre attuali',
  handLabel: 'Scegli quale coppia è di mano (Mano)',
  handSelected: 'è di mano (Mano).',
  stonesLabel: 'Segnapunti',
  stoneSingular: 'pietra (piedra)',
  stonePlural: 'pietre (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'punti mancanti',
  addStone: 'pietra',
  addAmarraco: 'amarraco',
  closeGame: 'Chiudi gioco',
  closeGamePrompt: 'Confermi che questa coppia ha vinto il gioco e vuoi iniziare il successivo?',
  confirmationTitle: 'Conferma azione sul tavolo',
  confirmAction: 'Conferma',
  cancelAction: 'Continua a giocare',
  undo: 'Annulla',
  resetMatch: 'Ripristina partita',
  resetMatchPrompt: 'Vuoi azzerare la partita attuale e cancellare lo storico dei punti?',
  historyTitle: 'Ultime annotazioni',
  noHistory: 'Nessuna annotazione al momento.',
  matchReady: 'Il tavolo è pronto.',
  closeGameHint: 'Una coppia ha raggiunto il punteggio bersaglio. Conferma il vincitore del gioco.',
  waitingForScore: 'Continua a contare. Punti rimanenti per la coppia in testa:',
  gameWon: 'Gioco concluso.',
  vacaWon: 'Vaca vinta! Inizia una nuova partita quando il tavolo è pronto.',
  gameClosed: 'ha chiuso il gioco.',
  pointsAdded: 'ha ottenuto',
  matchSaved: 'Punteggio salvato su questo dispositivo.',
  lastAction: 'Ultima azione',
  settingsApplied: 'Nuove regole applicate. La partita è stata azzerata.',
  pairNameRequired: 'Inserisci un nome per entrambe le coppie prima di aprire il segnapunti.',
  visualScoreLabel: 'Segnapunti digitale Mus con pietre, amarracos e partite',
};

const faq = [
  {
    question: 'Che cosa tiene traccia questo segnapunti Mus online?',
    answer: 'Tiene traccia delle due coppie, delle pietre (punti singoli), degli amarracos (blocchi da 5 punti), dei giochi vinti (chicos), della vaca generale, di quale coppia è di mano (Mano) e dello storico delle chiamate.',
  },
  {
    question: 'Perché le pietre e gli amarracos sono mostrati separatamente?',
    answer: 'Una pietra (Piedra) vale 1 punto e un Amarraco equivale a 5 pietre. La visualizzazione separata consente un riscontro immediato con i fagioli o le fiches fisiche presenti sul tavolo.',
  },
  {
    question: 'È possibile giocare a 30, 40 o 50 punti?',
    answer: 'Sì. Puoi selezionare 30, 40 o 50 punti per gioco prima di aprire il segnapunti. Il conteggio e la chiusura automatica si adatteranno al bersaglio scelto.',
  },
  {
    question: 'Come si chiude un gioco quando si raggiunge il punteggio?',
    answer: 'Quando una coppia raggiunge i punti bersaglio, il pulsante di chiusura si attiva. Dopo la conferma, viene assegnato 1 gioco e il conteggio delle pietre si azzera.',
  },
  {
    question: 'I dati della partita vengono salvati se ricarico la pagina?',
    answer: 'Sì. La configurazione delle coppie, le pietre e i giochi vinti rimangono salvati localmente nel browser del tuo dispositivo.',
  },
  {
    question: 'Questo segnapunti applica le regole regionali del Mus?',
    answer: 'No. Il Mus presenta diverse varianti locali. Questo segnapunti gestisce con precisione i punti e i giochi concordati, lasciando i segnali e gli inviti al tavolo reale.',
  },
  {
    question: 'Come si adatta un mazzo francese per giocare a Mus?',
    answer: 'Rimuovi 8, 9 e 10 dal mazzo francese per mantenere 40 carte. I Fanti contano come Sotas, le Donne come Caballos e i Re come Reyes.',
  },
];

const howTo = [
  {
    name: 'Inserisci i nomi delle coppie',
    text: 'Digita i nomi delle due coppie di giocatori per identificarle chiaramente sul tavolo.',
  },
  {
    name: 'Imposta il bersaglio e la vaca',
    text: 'Scegli 30, 40 o 50 punti per gioco e stabilisci quanti giochi sono necessari per vincere la vaca.',
  },
  {
    name: 'Conta pietre e amarracos',
    text: 'Premi pietra (+1) o amarraco (+5) man mano che i punti vengono assegnati al termine delle mani.',
  },
  {
    name: 'Conferma la vittoria del gioco',
    text: 'Al raggiungimento del bersaglio, conferma il vincitore per registrare il gioco e azzerare le pietre.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Segnapunti Mus Online',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Segnapunti digitale veloce per il gioco di carte tradizionale spagnolo Mus.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come tenere il punteggio nel gioco del Mus',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'segnapunti-mus-online',
  title: 'Segnapunti Mus Online per Partite dal Vivo',
  description: 'Conta pietre, amarracos, giochi e vacas per le tue partite al gioco spagnolo Mus. Per mazzo spagnolo o francese con salvataggio locale.',
  ui,
  seo: [
    { type: 'title', text: 'Un Conteggio Chiaro e Veloce per il Tuo Tavolo di Mus', level: 2 },
    { type: 'paragraph', html: 'Il Mus è un famoso gioco di carte tradizionale spagnolo ricco di bluff e dinamismo. Poiché i punti vengono contati rapidamente al termine di ogni fase (Grande, Chica, Pares, Juego, Punto), questo segnapunti digitale evita discussioni al tavolo.' },
    { type: 'title', text: 'Imposta la Meta dei Punti Prima di Servire le Carte', level: 2 },
    { type: 'paragraph', html: 'Sebbene lo standard tradizionale sia a 40 punti, in molte tavolate si gioca a 30 o 50 punti. Regola la meta prima del primo invito affinché il segnapunti digitale rispecchi perfettamente le vostre regole.' },
    {
      type: 'table',
      headers: ['Impostazione', 'Effetto', 'Consigliato per'],
      rows: [
        ['30 punti', 'Gioco breve', 'Partite veloci o tornei lampo'],
        ['40 punti', 'Gioco standard', 'Il formato classico tradizionale tra amici'],
        ['50 punti', 'Gioco lungo', 'Partite ad alta strategia e maggiore durata'],
      ],
    },
    { type: 'tip', title: 'Conferma le Regole del Tavolo a Voce Alta', html: 'Accertati con gli avversari se giocate con la regola degli 8 Re e 8 Assi e chi gestisce le fiches o i fagioli fisici.' },
    { type: 'title', text: 'Adattamento tra Mazzo Spagnolo e Mazzo Francese', level: 2 },
    { type: 'paragraph', html: 'Il mazzo spagnolo originale da 40 carte (Oros, Copas, Espadas, Bastos) è il riferimento naturale. Se utilizzate carte francesi, scartate 8, 9 e 10. I Fanti valgono Sotas, le Donne Caballos e i Re Reyes.' },
    { type: 'title', text: 'Lettura del Punteggio Digitale al Bordo del Tavolo', level: 2 },
    { type: 'paragraph', html: 'La cifra principale indica i punti totali. La riga sottostante li traduce automaticamente in amarracos (blocchi da 5) e pietre singole per una verifica visiva immediata.' },
    { type: 'list', items: ['<strong>Pietra (Piedra):</strong> 1 punto singolo nel conteggio.', '<strong>Amarraco:</strong> 1 fiche equivalente a 5 pietre.', '<strong>Gioco (Chico):</strong> La manche vinta al raggiungimento della meta.', '<strong>Vaca:</strong> La vittoria finale del match dopo aver ottenuto i giochi prefissati.'] },
    { type: 'title', text: 'Chiusura del Gioco e Correzione degli Errori', level: 2 },
    { type: 'paragraph', html: 'Al raggiungimento del bersaglio si attiva il pulsante di chiusura con conferma deliberata. In caso di errore durante l\'inserimento di un punto, il pulsante Annulla ripristina la situazione precedente.' },
    { type: 'tip', title: 'Usa il Tasto Annulla in Caso di Errore', html: 'Se assegni per sbaglio un punto alla coppia avversaria, premi subito Annulla per ripristinare il punteggio senza alterare lo storico.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
