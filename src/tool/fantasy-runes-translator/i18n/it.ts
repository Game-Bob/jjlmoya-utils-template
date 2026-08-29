import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Traduttore di Rune Fantasy',
  inputPlaceholder: 'Scrivi una parola o un nome da tradurre...',
  alphabetLabel: 'Alfabeto Runico',
  elderFuthark: 'Futhark Antico',
  angloSaxon: 'Anglosassone',
  fantasy: 'Scrittura Fantasy',
  theban: 'Tebano',
  enochian: 'Enochiano',
  daemonic: 'Demoniaco',
  ogham: 'Ogham',
  translate: 'Traduci',
  clear: 'Cancella',
  copy: 'Copia testo',
  copied: 'Copiato!',
  runeName: 'Nome',
  runeMeaning: 'Significato',
  runePhonetic: 'Fonetico',
  clickHint: 'Clicca una runa per vedere i dettagli',
  outputLabel: 'Output runico',
  noInput: 'Inserisci il testo sopra per tradurlo in rune',
  unknownChar: '?',
  gmMode: 'Modalità GM',
  exitGmMode: 'Esci',
  gmHint: 'Mostra questo ai tuoi giocatori',
  seedLabel: 'Seme',
  seedPlaceholder: 'Opzionale',
  seedApplied: 'Bloccato',
  shuffleSeed: 'Mescola',
};

const faq = [
  {
    question: 'Cos\'è il Futhark Antico?',
    answer: 'Il Futhark Antico è la più antica forma degli alfabeti runici, usato dalle tribù germaniche dal II all\'VIII secolo. È composto da 24 rune divise in tre gruppi di otto chiamati aettir. Ogni runa ha un valore fonetico e un nome simbolico che rappresenta concetti naturali o mitologici.',
  },
  {
    question: 'Qual è la differenza tra il Futhark Antico e le rune anglosassoni?',
    answer: 'Il Futhorc anglosassone è una versione estesa del Futhark Antico sviluppata in Inghilterra. Aggiunge rune supplementari per rappresentare suoni specifici dell\'inglese antico, espandendosi da 24 fino a 33 caratteri. Anche i significati e i valori fonetici sono cambiati nel tempo.',
  },
  {
    question: 'Questo traduttore converte le parole perfettamente?',
    answer: 'Questo strumento fornisce una traslitterazione lettera per lettera in simboli runici. L\'uso storico delle rune era fonetico piuttosto che letterale, quindi il risultato è un\'interpretazione moderna. L\'opzione Scrittura Fantasy offre un alfabeto narrativo creativo per l\'ambientazione dei giochi di ruolo da tavolo.',
  },
  {
    question: 'Posso usare queste rune nelle mie campagne di GDR da tavolo?',
    answer: 'Sì! I master e i giocatori possono usare il traduttore per creare iscrizioni runiche, scritti magici, messaggi criptici o nomi decorativi per personaggi e luoghi. L\'opzione Scrittura Fantasy è progettata specificamente per ambientazioni fantasy.',
  },
  {
    question: 'Questo strumento memorizza il testo che inserisco?',
    answer: 'No. Tutto funziona localmente nel tuo browser. Nessun testo, traduzione o selezione viene mai inviato a un server. Il tuo lavoro creativo rimane completamente privato.',
  },
  {
    question: 'Cosa succede quando clicco su una runa?',
    answer: 'Cliccando su qualsiasi carta runa viene mostrato il suo nome tradizionale, il significato simbolico e il valore fonetico. Questo ti aiuta a imparare le rune e scegliere il simbolo giusto per le tue esigenze di GDR.',
  },
];

const howTo = [
  {
    name: 'Inserisci testo',
    text: 'Scrivi qualsiasi parola, nome o frase in inglese nel campo di input. Il traduttore funziona meglio con parole singole o frasi brevi.',
  },
  {
    name: 'Seleziona un alfabeto',
    text: 'Scegli tra Futhark Antico (germanico antico), Anglosassone (inglese medievale) o Scrittura Fantasy (stile GDR da tavolo).',
  },
  {
    name: 'Traduci ed esplora',
    text: 'Clicca su Traduci per convertire il tuo testo. Ogni runa appare come una carta. Clicca su qualsiasi runa per scoprire il suo nome, significato e suono. Usa il pulsante Copia per salvare il testo runico negli appunti.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'traduttore-rune-fantasy',
  title: 'Traduttore di Rune Fantasy / Convertitore di Rune Futhark Antico, Tebano, Enochiano e Demoniaco',
  description: 'Traduci testo in Futhark Antico, Futhorc Anglosassone, Tebano, Enochiano, Demoniaco, Ogham o scritture fantasy. Perfetto per enigmi di GDR da tavolo, campagne, pergamene magiche e rune mistiche.',
  ui,
  seo: [
    { type: 'title', text: 'Alfabeti Runici e Scritture Mistiche per la Creazione di Mondi nei GDR da Tavolo', level: 2 },
    { type: 'paragraph', html: 'Gli alfabeti runici mistici, i simboli antichi e le scritture segrete portano un\'immersione senza pari ai giochi di ruolo fantasy da tavolo come D&D, Pathfinder e Warhammer. Che tu stia creando rovine nane nascoste incise con il Futhark Antico, progettando un grimorio arcano con scritture angeliche enochiane, spargendo indizi da strega con l\'alfabeto tebano o scrivendo messaggi demoniaci proibiti, il nostro generatore di rune trasforma il testo inglese standard in simboli stilizzati in tempo reale. Stimola la curiosità dei giocatori con oggetti di scena fisici, cifrari misteriosi e antiche incisioni su pietra.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Alfabeti Runici' },
        { value: '150+', label: 'Variazioni di Simboli' },
        { value: 'Istantanea', label: 'Traslit. Visiva' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Futhark Antico e Futhorc Anglosassone: Rune Germaniche e Nordiche', level: 2 },
    { type: 'paragraph', html: 'Risalente al II secolo, il Futhark Antico è il più antico sistema runico, composto da 24 caratteri che rappresentano le forze fondamentali della natura. Il Futhorc anglosassone ha esteso questo sistema fino a includere 33 caratteri per la fonetica dell\'inglese antico. Questi simboli storici sono perfetti per rappresentare clan nanici, culture ispirate alla mitologia norrena, incisioni vichinghe e insegne di clan barbari nelle tue campagne di GDR.' },
    { type: 'title', text: 'Tebano e Ogham: Alfabeti di Stregoneria Medievale e Alberi Celtico', level: 2 },
    { type: 'paragraph', html: 'Spesso chiamata le Rune di Onorio o l\'Alfabeto della Strega, la scrittura tebana è un cifrario medievale storicamente popolare usato nelle tradizioni occulte e nella Wicca. L\'Ogham, un alfabeto altomedievale, utilizza tratti lineari incisi lungo i bordi, famosamente legato al folklore celtico e alla magia arborea druidica. Usa queste scritture per abbellire santuari druidici, foreste elfiche, altari pagani o messaggi nascosti di congre di streghe.' },
    { type: 'title', text: 'Enochiano e Scritture Demoniache: Linguaggi Angelici e Abissali', level: 2 },
    { type: 'paragraph', html: 'Registrato per la prima volta da John Dee e Edward Kelley nel XVI secolo, l\'Enochiano è un linguaggio costruito dettagliato ritenuto essere la lingua degli angeli. Le scritture demoniache rappresentano glifi abissali, patti oscuri e marchi infernali. Alza la posta narrativa della tua campagna lasciando contratti demoniaci decifrabili, incisioni di culti oscuri e reliquie angeliche per i tuoi maghi, paladini e chierici da investigare.' },
    { type: 'title', text: 'Scrittura Fantasy Personalizzata: Alfabeti Creativi Pronti per il Gioco', level: 2 },
    { type: 'paragraph', html: 'Per mondi che vanno oltre la storia reale, la nostra Scrittura Fantasy personalizzata offre un insieme fittizio di rune costruite specificamente per evocare l\'estetica classica dell\'alta fantasia. Ogni runa è progettata per risaltare su stampe del master, mappe digitali e segnalini personalizzati dei giocatori. Abbinala a randomizzazioni basate su seme per creare lingue segrete uniche per diverse fazioni, nazioni o divinità antiche.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Traduttore di Rune Fantasy',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come usare il Traduttore di Rune Fantasy',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
