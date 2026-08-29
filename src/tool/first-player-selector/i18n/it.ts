import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Selettore del Primo Giocatore',
  instructions: 'Posiziona le dita sullo schermo o clicca per aggiungere spilli',
  tapToSelect: 'Tocca per selezionare',
  winner: 'Vincitore scelto!',
  reset: 'Reimposta',
  start: 'Avvia scelta',
  setupTitle: 'Impostazioni selettore',
  clearPlayers: 'Cancella tutti gli spilli',
  fingerMode: 'Modalità Dito',
  wheelMode: 'Modalità Roulette',
  presetsTitle: 'Opzioni',
  soundOn: 'Audio attivo',
  soundOff: 'Audio disattivato',
  playerCountLabel: 'Spilli / Dita',
};

const faq = [
  {
    question: 'Come funziona la Modalità Dito?',
    answer: 'In Modalità Dito, ogni giocatore appoggia un dito sullo schermo del dispositivo mobile. Lo strumento rileva tutti i punti di contatto, mostra anelli luminosi colorati attorno a essi e avvia automaticamente un breve conto alla rovescia. Al termine del conto alla rovescia, un giocatore viene evidenziato come vincitore mentre gli altri scompaiono gradualmente, accompagnato da un\'esplosione di particelle.',
  },
  {
    question: 'Posso usare questo strumento su un computer desktop?',
    answer: 'Sì! Se sei su un dispositivo non tattile, lo strumento passa automaticamente in Modalità Roulette. Puoi cliccare sull\'area per posizionare spilli colorati che rappresentano i giocatori, quindi cliccare sul pulsante Avvia scelta per far girare la ruota del selettore.',
  },
  {
    question: 'Quanti giocatori possono partecipare?',
    answer: 'Lo strumento supporta fino a 10 giocatori simultaneamente. In Modalità Dito, fino a 10 dita possono essere rilevate contemporaneamente. In Modalità Roulette, puoi posizionare fino a 10 spilli colorati sull\'area cliccando.',
  },
  {
    question: 'La selezione è davvero casuale?',
    answer: 'Sì. L\'algoritmo di selezione utilizza Math.random() di JavaScript, di qualità crittografica, per garantire risultati imparziali. In Modalità Dito, il vincitore viene scelto uniformemente a caso tra tutti i punti di contatto rilevati. In Modalità Roulette, la ruota decelera in modo realistico usando la fisica della frizione, e l\'angolo finale determina matematicamente il vincitore.',
  },
  {
    question: 'Come rimuovo uno spillo giocatore in Modalità Roulette?',
    answer: 'Basta cliccare su uno spillo esistente per rimuoverlo. Lo strumento rileva i clic entro 30 pixel da qualsiasi spillo posizionato e lo elimina, permettendoti di regolare la composizione dei giocatori prima di avviare il giro.',
  },
  {
    question: 'Questo strumento raccoglie o trasmette dati?',
    answer: 'Per niente. Tutto viene eseguito localmente nel tuo browser. Nessun dato sulle dita, posizioni tattili o risultati di selezione viene mai inviato a un server. La tua serata di gioco rimane completamente privata.',
  },
  {
    question: 'Funziona su proiettori o schermi esterni?',
    answer: 'Sì. La Modalità Roulette funziona perfettamente su schermi grandi e proiettori per sessioni da tavolo. I visivi al neon ad alto contrasto e il grande conto alla rovescia sono progettati per essere visibili dall\'altra parte della stanza.',
  },
  {
    question: 'Perché il conto alla rovescia si azzera quando qualcuno solleva il dito?',
    answer: 'È intenzionale. In Modalità Dito, il conto alla rovescia procede solo finché tutti i giocatori tengono le dita ferme sullo schermo. Se qualcuno solleva o sposta il dito, il timer si azzera per garantire che tutti siano impegnati prima dell\'esecuzione della selezione. Questo previene attivazioni accidentali.',
  },
  {
    question: 'Posso cambiare l\'audio o silenziarlo?',
    answer: 'Sì. Clicca sull\'icona dell\'altoparlante nell\'angolo in alto a destra per attivare o disattivare l\'audio. Lo strumento riproduce un ticchettio durante il conto alla rovescia e una fanfara quando viene scelto un vincitore.',
  },
  {
    question: 'Cosa succede se c\'è un solo giocatore?',
    answer: 'In entrambe le modalità, sono necessari almeno due giocatori per effettuare una selezione. In Modalità Dito, il conto alla rovescia non si avvia finché non vengono rilevate almeno due dita. In Modalità Roulette, il pulsante Avvia scelta rimane disabilitato finché non posizioni almeno due spilli.',
  },
];

const howTo = [
  {
    name: 'Posiziona le Dita o gli Spilli',
    text: 'In Modalità Dito, chiedi a tutti i giocatori di appoggiare un dito sullo schermo. In Modalità Roulette, clicca ovunque sull\'area per posizionare gli spilli dei giocatori.',
  },
  {
    name: 'Avvia la Selezione',
    text: 'Per la Modalità Dito, la selezione si avvia automaticamente dopo aver tenuto premuto per alcuni secondi. Per la Modalità Roulette, clicca sul pulsante Avvia scelta per far girare.',
  },
  {
    name: 'Guarda il Vincitore',
    text: 'Il vincitore viene evidenziato con un effetto pulsante, un\'esplosione di particelle e una fanfara sonora. Clicca su Reimposta o solleva tutte le dita per riprovare.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'selettore-primo-giocatore',
  title: 'Selettore del Primo Giocatore: Scelta al Dito & Roulette dei Turni',
  description: 'Scegli chi inizia per primo nei tuoi giochi da tavolo con questo spettacolare selettore al dito e roulette interattiva dei turni.',
  ui,
  seo: [
    { type: 'title', text: 'Equità e Strategia: Risolvere il Vantaggio del Primo Giocatore nei Giochi da Tavolo', level: 2 },
    { type: 'paragraph', html: 'Determinare il giocatore iniziale nelle sessioni da tavolo può influenzare pesantemente le dinamiche di gioco. Nella teoria dei giochi, il Vantaggio del Primo Giocatore (FPA) si riferisce al margine statistico di cui gode il giocatore che compie la prima mossa rispetto ai suoi avversari. Nelle partite di scacchi strategiche, nei wargame e negli Eurogame moderni come Agricola o Puerto Rico, agire per primi permette di assicurarsi risorse critiche o posizionare pezzi prima che gli avversari possano reagire. Per mitigare il FPA e garantire un campo di gioco equilibrato, un metodo di selezione affidabile e imparziale è essenziale. Il nostro selettore digitale del primo giocatore garantisce un casualità assoluta, consentendo ai gruppi di gioco di stabilire l\'ordine di turno all\'istante e iniziare subito a giocare.' },
    {
      type: 'stats',
      items: [
        { value: '100% Casuale', label: 'Selezione Imparziale' },
        { value: '2 Secondi', label: 'Attivazione Conto alla Rovescia' },
        { value: 'Multitouch', label: 'Compatibile Mobile' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Regole da Tavolo vs. Generatori Casuali Digitali: La Rivoluzione Tattile', level: 2 },
    { type: 'paragraph', html: 'Molti regolamenti di giochi da tavolo moderni includono regole tematiche per il primo giocatore, come "il giocatore più giovane inizia", "l\'ultimo ad aver visitato una fattoria inizia" o "il giocatore più alto inizia". Sebbene divertenti durante le prime partite, queste regole diventano rapidamente ripetitive, statiche e ingiuste per gruppi di gioco abituali. I generatori casuali fisici come i tiri di dado o l\'estrazione di carte aggiungono tempo di preparazione e sono soggetti a pregiudizi umani o a una mescolatura insufficiente. Il meccanismo di scelta al dito risolve questo problema offrendo un generatore casuale rapido, tattile e istantaneo che seleziona un primo giocatore in secondi senza bisogno di carte o dadi aggiuntivi.' },
    {
      type: 'table',
      headers: ['Metodo di Selezione', 'Velocità e Preparazione', 'Qualità del Caso', 'Ideale per'],
      rows: [
        ['Regole Arbitrarie del Regolamento', 'Istantaneo, ma ripetitivo', 'Zero casualità dopo la prima partita', 'Giochi familiari e giochi di società'],
        ['Tiri di Dado', 'Richiede di trovare e lanciare dadi, soggetto a pareggi', ' Alta casualità, ma noioso per gruppi numerosi', 'Wargame e GDR'],
        ['Estrazione di Carte', 'Richiede mescolatura e distribuzione', 'Buona casualità, ma richiede carte fisiche', 'Deck-builder e giochi di carte'],
        ['Selettore Tattile al Dito', 'Istantaneo, zero preparazione, animazioni visive', 'Casualità algoritmica assoluta', 'Tutti i giochi da tavolo e di società'],
      ],
    },
    {
      type: 'tip',
      title: 'Ottimizzare la Tua Configurazione Multitouch',
      html: 'Per la migliore esperienza in Modalità Dito, posiziona il tablet o lo smartphone piatto al centro del tavolo. Chiedi a tutti i giocatori di appoggiare chiaramente un dito sull\'area tattile. Il conto alla rovescia si azzera se un giocatore solleva o sposta il dito, prevenendo selezioni accidentali e garantendo il consenso assoluto prima dell\'esecuzione del selettore.',
    },
    {
      type: 'title',
      text: 'Scegliere il Tuo Strumento: Selettore Tattile al Dito vs. Roulette a Giro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A seconda della configurazione hardware e dell\'ambiente, puoi passare da una modalità all\'altra tra due modalità di visualizzazione distinte progettate per massimizzare lo spazio sullo schermo e l\'accessibilità:',
    },
    {
      type: 'proscons',
      title: 'Confronto tra le Modalità di Selezione',
      items: [
        {
          pro: 'La Modalità Dito offre un\'esperienza estremamente rapida e tattile, consentendo a fino a 10 giocatori di posizionare le dita contemporaneamente.',
          con: 'Richiede uno schermo tattile come uno smartphone o un tablet.',
        },
        {
          pro: 'La Modalità Roulette funziona su qualsiasi laptop, desktop o schermo proiettato, ideale per sessioni virtuali e serate di gioco a distanza.',
          con: 'Richiede di cliccare per posizionare manualmente gli spilli prima di avviare il giro.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ottimizzazione Visiva: Reti Multitouch vs. Ruote a Decelerazione',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Selettore Multitouch',
          description: 'Traccia più punti di contatto distinti sullo schermo. Mostra reti di connessione al neon e anelli di conto alla rovescia che si restringono attorno a ciascun dito, culminando in un\'esplosione di celebrazione.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Rilevamento tattile simultaneo',
            'Controllo tattile con tenuta e rilascio',
            'Spettacolari esplosioni di particelle',
          ],
        },
        {
          title: 'Roulette a Giro',
          description: 'Posiziona spilli colorati attorno a un centroide matematico. Fa girare una ruota a settori colorati che rallenta naturalmente usando una frizione simulata prima di designare il vincitore.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Allineamento basato su centroide',
            'Fisica di rallentamento per frizione',
            'Supporto universale del mouse su desktop',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Vantaggio del Primo Giocatore (FPA)',
          definition: 'Un bias nell\'ordine di turno nei giochi da tavolo in cui il giocatore che inizia ottiene un vantaggio statisticamente significativo nella selezione delle azioni o nel controllo delle risorse.',
        },
        {
          term: 'Protocollo di Selezione Tattile',
          definition: 'Un\'interazione di tenuta tattile in cui tutti i partecipanti posizionano le dita su uno schermo tattile finché un singolo vincitore non viene evidenziato casualmente.',
        },
        {
          term: 'Fisica di Decelerazione',
          definition: 'Una routine di animazione matematica che applica moltiplicatori di frizione a una ruota in rotazione per simulare l\'inerzia naturale e creare anticipazione.',
        },
        {
          term: 'Calcolo del Centroide',
          definition: 'Il punto centrale calcolato di un insieme sparso di coordinate di spillo, utilizzato come perno di rotazione per la grafica della roulette.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'Selettore del Primo Giocatore e Scelta al Dito',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Usare il Selettore del Primo Giocatore',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
