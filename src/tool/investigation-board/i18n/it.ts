import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "creatore-lavagna-cospirazione",
  title: "Creatore Lavagna Cospirazione: Mappa di Relazioni & Indizi RPG Online",
  description: "Progetta lavagne interattive di cospirazione e mappe investigative RPG. Collega sospetti, indizi e luoghi con fili colorati.",
  ui: {
  "title": "Creatore Lavagna Cospirazione",
  "addCard": "Aggiungi Carta",
  "searchPlaceholder": "Cerca carte per nome o indizi",
  "filterAll": "Tutte le Categorie",
  "filterCharacter": "Personaggi",
  "filterClue": "Indizi",
  "filterLocation": "Luoghi",
  "filterItem": "Oggetti",
  "cardName": "Nome Carta",
  "cardCategory": "Categoria",
  "cardDescription": "Descrizione",
  "cardNotes": "Note Private",
  "cardTags": "Tag separati da virgole",
  "cardColor": "Colore Evidenziatore Carta",
  "save": "Salva Modifiche",
  "delete": "Elimina",
  "cancel": "Annulla",
  "clearBoard": "Pulisci Lavagna",
  "connectionsTitle": "Mappa delle Relazioni",
  "addConnection": "Aggiungi Connessione",
  "connectionLabel": "Etichetta Relazione",
  "connectionColor": "Colore Linea",
  "sourceCard": "Da Carta",
  "targetCard": "A Carta",
  "close": "Chiudi",
  "character": "Personaggio",
  "clue": "Indizio",
  "location": "Luogo",
  "item": "Oggetto",
  "custom": "Personalizzato",
  "immersive": "Schermo Intero"
},
  seo: [
    { type: 'title', text: "Creatore Lavagna Cospirazione Online: Organizza Indizi RPG e Mappe Relazionali", level: 2 },
    { type: 'paragraph', html: "Districare una complessa rete di bugie, tracciare alibi e collegare prove sulla scena del crimine può sopraffare qualsiasi gruppo di gioco di ruolo investigativo. Sia che tu stia gestendo una campagna di Il Richiamo di Cthulhu, un mistero cyberpunk, un'indagine fantasy in D&D o stia scrivendo un thriller, il nostro creatore di lavagne di cospirazione online è lo strumento definitivo. Trascina, rilascia, categorizza e collega indizi, PNG e prove fisiche su una lavagna digitale infinita. Usa fili di relazione colorati per vedere all'istante come i sospetti sono legati a scene del crimine, alibi e moventi nascosti, eliminando note cartacee." },
    {
      type: 'stats',
      items: [
        { value: "Illimitato", label: "Lavagna Nodi" },
        { value: "4", label: "Categorie" },
        { value: "Trascina e Rilascia", label: "Interfaccia" }
      ],
      columns: 3
    },
    { type: 'title', text: "Consigli per Strutturare la tua Mappa Investigativa RPG", level: 2 },
    { type: 'tip', title: "La Regola dei Tre Indizi", html: "Per ogni conclusione o deduzione che vuoi che i giocatori raggiungano, aggiungi almeno tre indizi diversi alla lavagna investigativa. Collegali usando fili colorati personalizzati per mostrare percorsi di ragionamento alternativi. Usa carte Personaggio per sospetti e testimoni, Luoghi per scene del crimine e Oggetti per prove fisiche o documenti. Aggiorna costantemente le note private." },
    { type: 'title', text: "Lavagne di Cospirazione Digitali vs Lavagne in Sughero Fisiche", level: 2 },
    {
      type: 'proscons',
      title: "Lavagne di Cospirazione Digitali vs Lavagne in Sughero Fisiche",
      items: [
        { pro: "Dimensioni lavagna illimitate per aggiungere tutti gli indizi, sospetti e relazioni di cui hai bisogno senza limiti di spazio.", con: "Richiede uno schermo o tablet sul tavolo da gioco durante la sessione di gioco." },
        { pro: "Ricerca istantanea e filtri di categoria per trovare testimoni o indizi durante le sessioni di gioco.", con: "Manca la sensazione tattile dello spago rosso e delle puntine fisiche su una parete vera." },
        { pro: "Salva, carica e condividi mappe digitalmente senza occupare spazio fisico in casa tra le sessioni.", con: "Richiede accesso a Internet o memoria locale del browser per salvare lo stato della lavagna." }
      ]
    },
    { type: 'title', text: "Scegliere le Categorie di Carte per la tua Mappa dei Misteri", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Nodi Personaggio",
          description: "Rappresentano PNG, sospetti, testimoni o organizzazioni. Evidenzia le relazioni con linee colorate.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Traccia alibi e moventi dei sospetti",
            "Collega legami familiari e alleanze di fazione",
            "Annota dettagli delle testimonianze"
          ]
        },
        {
          title: "Nodi Indizio",
          description: "Rappresentano prove fisiche, autopsie, alibi o voci scoperte dai giocatori durante la campagna.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Referti autoptici e analisi scientifiche",
            "Oggetti fisici raccolti sulla scena del crimine",
            "Voci di corridoio ascoltate e segreti"
          ]
        },
        {
          title: "Nodi Luogo",
          description: "Scene del crimine, case di sospetti, nascondigli segreti o città.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Foto scene del crimine e mappe",
            "Residenze dei principali PNG",
            "Nascondigli segreti e portali dimensionali"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Glossario delle Mappe di Cospirazione", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Nodo Investigativo", definition: "Qualsiasi carta sulla lavagna che rappresenta una persona, luogo, indizio o oggetto." },
        { term: "Filo di Relazione", definition: "Una linea colorata che collega due carte, indicando la loro relazione (ad es. Sospetto, Alibi, Proprietario)." },
        { term: "Modo Immersivo", definition: "Un layout a schermo intero che nasconde i menu di controllo per massimizzare lo spazio su mobile o tablet." },
        { term: "Percorso Evidenziato", definition: "Un percorso visivo che mostra solo i nodi e le linee collegate a una carta selezionata, oscurando il resto della lavagna." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Consiglio Prestazioni per Dispositivi Mobili",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Se lo spostamento dei nodi è lento su tablet datati, attiva la modalità schermo intero per nascondere i menu. Assicurati che l'allineamento alla griglia sia attivo (le carte si allineano ogni 15px) per tenere ordinata la lavagna."
    }
  ],
  faq: [
    { question: "Come faccio ad aggiungere linee di connessione?", answer: "Fai clic su Aggiungi connessione o fai clic sull'icona del collegamento su una carta e seleziona la carta di destinazione." },
    { question: "Posso trascinare le carte su mobile?", answer: "Sì, la lavagna supporta il touch per trascinare e spostare facilmente le carte su smartphone e tablet." },
    { question: "Posso usare colori di carta personalizzati?", answer: "Sì. Fai doppio clic su una carta, seleziona Personalizzato sotto Categoria e scegli un colore." },
    { question: "La lavagna salva il mio lavoro?", answer: "Sì. I tuoi progressi vengono salvati automaticamente nella memoria locale del browser." },
    { question: "Come posso zoomare e muovermi sulla lavagna?", answer: "Usa le dita per zoomare o la rotellina del mouse. Trascina lo sfondo per spostare la lavagna." }
  ],
  bibliography,
  howTo: [
    { name: "Aggiungi Carte Investigazione", text: "Crea carte che rappresentano NPC, indizi, scene del crimine o oggetti." },
    { name: "Collega Relazioni", text: "Crea linee di connessione tra le carte per mostrare come sono correlati gli indizi." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Creatore Lavagna Cospirazione: Mappa di Relazioni & Indizi RPG Online",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Come faccio ad aggiungere linee di connessione?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Fai clic su Aggiungi connessione o fai clic sull'icona del collegamento su una carta e seleziona la carta di destinazione."
          }
        },
        {
          '@type': 'Question',
          'name': "Posso trascinare le carte su mobile?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sì, la lavagna supporta il touch per trascinare e spostare facilmente le carte su smartphone e tablet."
          }
        },
        {
          '@type': 'Question',
          'name': "Posso usare colori di carta personalizzati?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sì. Fai doppio clic su una carta, seleziona Personalizzato sotto Categoria e scegli un colore."
          }
        },
        {
          '@type': 'Question',
          'name': "La lavagna salva il mio lavoro?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Sì. I tuoi progressi vengono salvati automaticamente nella memoria locale del browser."
          }
        },
        {
          '@type': 'Question',
          'name': "Come posso zoomare e muovermi sulla lavagna?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Usa le dita per zoomare o la rotellina del mouse. Trascina lo sfondo per spostare la lavagna."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Come Usare il Creatore di Lavagne di Cospirazione",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Aggiungi Carte Investigazione",
          'text': "Crea carte che rappresentano NPC, indizi, scene del crimine o oggetti."
        },
        {
          '@type': 'HowToStep',
          'name': "Collega Relazioni",
          'text': "Crea linee di connessione tra le carte per mostrare come sono correlati gli indizi."
        }
      ]
    }
  ]
};
