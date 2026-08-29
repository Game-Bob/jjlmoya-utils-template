import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Scegli un seme, imposta la griglia e seleziona uno stile architettonico. Genera una mappa connessa per appunti, stampa o tavolo virtuale.',
  seedLabel: 'Seme della mappa',
  seedHint: 'Riusa lo stesso seme con le stesse impostazioni per rigenerare esattamente la stessa mappa.',
  randomSeed: 'Nuovo seme',
  sizeLabel: 'Dimensione spedizione',
  sizeCompact: 'Sessione singola (One-shot)',
  sizeSession: 'Sessione standard',
  sizeStronghold: 'Fortezza',
  fineTuneGrid: 'Regolazione fine griglia e densità',
  columnsLabel: 'Colonne',
  rowsLabel: 'Righe',
  densityLabel: 'Densità stanze',
  densityHint: 'Una densità maggiore aggiunge più stanze e superficie calpestabile.',
  styleLabel: 'Architettura mappa',
  dungeonStyle: 'Dungeon',
  dungeonStyleHint: 'Stanze in pietra con corridoi a larghezza singola.',
  cavernStyle: 'Caverna',
  cavernStyleHint: 'Stanze naturali irregolari con bordi smussati.',
  scifiStyle: 'Sci-Fi',
  scifiStyleHint: 'Moduli ampi con corridoi a doppia larghezza.',
  generate: 'Disegna mappa',
  mapRegionLabel: 'Mappa dungeon generata e controlli di esportazione',
  connectedBadge: 'Tutte le stanze connesse',
  roomsLabel: 'Stanze',
  doorsLabel: 'Porte',
  floorLabel: 'Copertura pavimento',
  legendFloor: 'Pavimento calpestabile',
  legendWall: 'Muro solido',
  legendDoor: 'Porta o boccaporto',
  editHint: 'Tasto destro su una cella per modificare',
  editCell: 'Modifica questa cella',
  paintFloor: 'Pavimento',
  paintWall: 'Muro',
  paintDoor: 'Porta',
  mapData: 'Dati mappa',
  copyLink: 'Copia link mappa',
  linkCopied: 'Link copiato',
  exportPng: 'Scarica PNG',
  exportSvg: 'Scarica SVG',
  exportJson: 'Salva JSON',
  importJson: 'Apri JSON',
  importError: 'Questo file non contiene una configurazione di dungeon valida.',
  compactMap: 'Esplorazione tesa',
  balancedMap: 'Spedizione equilibrata',
  sprawlingMap: 'Fortezza aperta',
  compactHint: 'Corridoi più lunghi lasciano più spazio sconosciuto tra le stanze.',
  balancedHint: 'Stanze e corridoi dividono lo spazio in modo bilanciato.',
  sprawlingHint: 'Un ampia copertura del pavimento favorisce scontri e movimenti rapidi.',
  mapReady: 'Legenda mappa',
  dimensionsUnit: 'celle di griglia',
};

const faq = [
  {
    question: 'Lo stesso seme genera sempre la stessa mappa?',
    answer: 'Sì. Il seme, le dimensioni della griglia, la densità e lo stile formano una configurazione deterministica. Riusare i quattro parametri rigenera esattamente le stesse stanze e porte.',
  },
  {
    question: 'Tutte le stanze generate sono raggiungibili?',
    answer: 'Sì. Le stanze vengono collegate tramite un percorso principale dopo il posizionamento, garantendo che ogni area calpestabile appartenga a un unica mappa connessa.',
  },
  {
    question: 'Quali sono le differenze tra gli stili dungeon, caverna e Sci-Fi?',
    answer: 'Lo stile dungeon usa stanze quadrate in pietra. Le caverne creano stanze naturali irregolari. Lo stile Sci-Fi predilige moduli ampi con corridoi doppi.',
  },
  {
    question: 'Quale formato esportare per un tavolo virtuale (VTT)?',
    answer: 'PNG è l opzione migliore per la maggior parte dei VTT. SVG rimane nitido a qualsiasi scala ed è facile da modificare in programmi vettoriali.',
  },
  {
    question: 'Un altra persona può rigenerare la mia mappa aleatoria?',
    answer: 'Sì. Copia il link per includere la configurazione nell URL o invia il file JSON. Il destinatario caricherà lo stesso dungeon all istante.',
  },
  {
    question: 'Questo generatore aggiunge mostri, trappole o tesori?',
    answer: 'No. Crea una pianta architettonica neutrale affinché tu possa adattarla a qualsiasi sistema di gioco. La progettazione degli scontri spetta al Game Master.',
  },
];

const howTo = [
  {
    name: 'Imposta le dimensioni',
    text: 'Scegli il numero di colonne e righe in base allo spazio per i tuoi appunti o per la scena VTT.',
  },
  {
    name: 'Scegli l architettura',
    text: 'Seleziona dungeon, caverna o Sci-Fi, quindi regola la densità delle stanze.',
  },
  {
    name: 'Genera e ispeziona',
    text: 'Inserisci un seme o generane uno nuovo, disegna la mappa e controlla il riepilogo.',
  },
  {
    name: 'Esporta o condividi',
    text: 'Scarica in PNG o SVG per giocare, oppure salva la configurazione tramite link o file JSON.',
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
  name: 'Generatore di Mappe Dungeon Casuali',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Un generatore deterministico di mappe dungeon con stanze connesse, porte ed esportazioni locali.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come generare una mappa dungeon connessa',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'generatore-mappe-dungeon-casuali',
  title: 'Generatore di Mappe Dungeon Casuali per Giochi di Ruolo',
  description: 'Crea mappe riproducibili di dungeon, caverne e Sci-Fi con stanze connesse, porte ed esportazione PNG/SVG.',
  ui,
  seo: [
    { type: 'title', text: 'Genera una Mappa Dungeon Giocabile tramite un Seme Riusabile', level: 2 },
    { type: 'paragraph', html: 'Una mappa dungeon casuale ed efficace richiede molto più di un semplice rumore visivo senza logica. Ogni stanza deve essere raggiungibile tramite corridoi connessi, la griglia deve adattarsi alla superficie di gioco e il risultato deve poter essere recuperato in qualsiasi momento. Questo generatore tratta il seme e i controlli come una specifica di mappa deterministica.' },
    { type: 'title', text: 'Dimensioni della Griglia per Stampa e Tavoli Virtuali', level: 2 },
    { type: 'paragraph', html: 'Impostare la dimensione della griglia è il primo passo pratico. Una griglia piccola si stampa facilmente su carta per avventure brevi, mentre una mappa ampia lascia spazio per esplorazioni complesse e fazioni multiple. L immagine esportata mantiene celle perfettamente quadrate per allinearsi facilmente con la griglia dei VTT.' },
    {
      type: 'table',
      headers: ['Dimensione griglia', 'Uso tipico', 'Densità iniziale', 'Nota di pianificazione'],
      rows: [
        ['20 per 16 celle', 'Avventura breve (One-shot)', 'Da 35 a 45', 'Facile da stampare e di rapida lettura'],
        ['36 per 26 celle', 'Dungeon di sessione', 'Da 45 a 55', 'Ritmo equilibrato tra stanze e corridoi'],
        ['52 per 38 celle', 'Complesso multi-sessione', 'Da 50 a 65', 'Ampio spazio per fazioni e percorsi opzionali'],
      ],
    },
    { type: 'tip', title: 'Adatta la Mappa alla Scala degli Scontri', html: 'Calcola le celle necessarie per i tuoi combattimenti principali prima di scegliere la dimensione totale. Un grande dungeon con stanze minuscole risulterà stretto, mentre una pianta compatta con una stanza principale ampia favorirà scene memorabili.' },
    { type: 'title', text: 'Interpreta la Copertura del Pavimento come Ritmo di Gioco', level: 2 },
    { type: 'paragraph', html: 'La copertura del pavimento indica la percentuale di superficie calpestabile. Una copertura bassa accentua lo spazio sconosciuto e la tensione dell esplorazione. Una copertura media offre un esplorazione fluida. Una copertura elevata crea complessi fortificati in cui gli scontri possono estendersi alle stanze adiacenti.' },
    {
      type: 'list',
      items: [
        '<strong>Esplorazione tesa:</strong> sfrutta gli spazi vuoti per suggerire isolamento o passaggi segreti.',
        '<strong>Spedizione equilibrata:</strong> alterna stanze di indagine, corridoi di collegamento e aree di combattimento.',
        '<strong>Fortezza aperta:</strong> disegna linee di vista chiare, pattuglie ed eventi interconnessi.',
      ],
    },
    { type: 'title', text: 'Trasforma una Pianta Neutra in un Luogo d Avventura', level: 2 },
    { type: 'paragraph', html: 'La mappa generata fornisce solo l architettura di base. Assegna un ruolo narrativo a ogni stanza chiave e posiziona indizi, trappole e tesori di conseguenza.' },
    { type: 'tip', title: 'Salva la Configurazione prima di Aggiungere Note', html: 'Copia il link della mappa o salva il file JSON prima di aggiungere le tue note sugli scontri per conservare una copia pulita da consegnare ai giocatori.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
