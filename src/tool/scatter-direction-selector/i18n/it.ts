import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Selettore Direzione Deviazione',
  setupTitle: 'Impostazioni Deviazione',
  sectorsLabel: 'Settori della Bussola',
  sectors8: '8 Direzioni',
  sectors12: '12 Direzioni (Orologio)',
  diceLabel: 'Tiro di Distanza Deviazione',
  diceD6: '1D6 Pollici',
  dice2D6: '2D6 Pollici',
  diceD10: '1D10 Pollici',
  diceCustom: 'Intervallo Personalizzato',
  customMaxLabel: 'Distanza Massima',
  hitChanceLabel: 'Probabilità di Impatto Diretto (%)',
  rollButton: 'Tira Deviazione',
  hitResult: 'Impatto Diretto!',
  scatterResult: 'Deviazione!',
  distanceLabel: 'Distanza',
  angleLabel: 'Angolo',
  dragHint: 'Trascina la bussola per impostare manualmente la direzione del vento',
  historyTitle: 'Tiri Recenti',
  clearHistory: 'Cancella Cronologia',
  presetTitle: 'Preset per Wargaming',
  soundOn: 'Suono Attivo',
  soundOff: 'Suono Disattivato',
  guideStep1: 'Trascina la bussola per allinearla al tuo tavolo da gioco',
  guideStep2: 'Scegli settori, dadi e probabilità di impatto diretto',
  guideStep3: 'Centro = il tuo bersaglio. Il bagliore verde significa che è caduto esattamente lì',
  guideStep3Scatter: 'Freccia = direzione di deviazione. Sposta il colpo dal centro di quel numero di pollici lungo la freccia',
  scatterModeLabel: 'Direzione Deviazione',
  scatterModeRandom: 'Casuale',
  scatterModeWind: 'Deriva del Vento',
  scatterModeWindHint: 'La freccia segue sempre la bussola  -  solo la distanza è casuale',
};

const faq = [
  {
    question: 'Come funziona il Selettore Direzione Deviazione?',
    answer: 'Calcola un angolo casuale (0-359 gradi) e una distanza in base alla configurazione dei dadi selezionata. Simula inoltre un dado di deviazione, verificando la presenza di impatti diretti.',
  },
  {
    question: 'Posso cambiare il formato dei settori?',
    answer: 'Sì, puoi passare dai settori cardinali a 8 direzioni ai settori a 12 direzioni con formato orologio.',
  },
  {
    question: 'Cos\u2019è la probabilità di impatto diretto?',
    answer: 'Rappresenta la probabilità che il proiettile colpisca esattamente il punto mirato senza alcuna deviazione, simulando un risultato "Colpito" su un dado di deviazione standard.',
  },
  {
    question: 'È compatibile con Warhammer o Bolt Action?',
    answer: 'Sì, supporta i template standard a 8 direzioni e gli allineamenti a 12 direzioni usati nella maggior parte dei wargame tattici e dei regolamenti per miniature.',
  },
  {
    question: 'Come viene visualizzata la distanza di deviazione?',
    answer: 'La distanza in pollici appare come un\u2019etichetta galleggiante nel punto d\u2019impatto, posizionata lungo la direzione di deviazione. Anche la freccia rossa della bussola si blocca sull\u2019angolo finale per un rapido allineamento del template.',
  },
  {
    question: 'Posso disattivare l\u2019animazione per ottenere risultati più veloci?',
    answer: 'L\u2019animazione dura circa due secondi, dopo i quali il risultato finale viene mostrato al centro e la freccia della bussola si blocca. Al momento non c\u2019è un\u2019opzione per saltarla, ma il ritardo è studiato per riprodurre il ritmo del lancio fisico dei dadi.',
  },
  { question: 'Come viene determinata la direzione della dispersione?', answer: 'Lo strumento combina il sistema di settori scelto con il tiro e la distanza di deviazione impostata.' },
  { question: 'Posso usare la modalità vento?', answer: 'Sì, la modalità vento segue l\'angolo della bussola lasciando casuale la distanza.' },
];

const howTo = [
  {
    name: 'Configurare le Regole',
    text: 'Seleziona i settori della bussola, scegli un dado per la distanza e regola la probabilità di impatto diretto.',
  },
  {
    name: 'Tirare o Trascinare',
    text: 'Clicca su Tira Deviazione per simulare la deviazione, o trascina la ruota della bussola per regolare manualmente la direzione.',
  },
  {
    name: 'Leggere il Risultato',
    text: 'Controlla il display centrale e la freccia vettoriale per trovare distanza, angolo e direzione esatti della deviazione.',
  },
  {
    name: 'Osservare la Traiettoria',
    text: 'Dopo il tiro, guarda il proiettile animato viaggiare attraverso la bussola. La scia tratteggiata mostra il percorso di deviazione e il punto d\u2019impatto indica la distanza in pollici.',
  },
  {
    name: 'Interpretare il Risultato',
    text: 'Un impulso verde con "DIRECT HIT" significa deviazione zero. Un\u2019esplosione rossa con un\u2019etichetta di distanza significa che il colpo è deviato  -  posiziona il tuo template a quella distanza dal bersaglio nella direzione della freccia.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'selettore-direzione-deviazione',
  title: 'Selettore Direzione Deviazione: Bussola Tattile per Wargame con Miniature',
  description: 'Determina deviazioni casuali, deriva del vento e direzioni di dispersione per wargame con miniature usando una bussola tattile 3D.',
  ui,
  seo: [
    { type: 'title', text: 'Bussola Interattiva di Deviazione con Animazione Proiettile in Tempo Reale', level: 2 },
    { type: 'paragraph', html: 'Il Selettore Direzione Deviazione va oltre la semplice generazione numerica, mostrando una traiettoria animata del proiettile direttamente sulla bussola. Quando clicchi su Tira Deviazione, un proiettile luminoso viaggia dal centro lungo l angolo di deviazione, lasciando una scia tratteggiata ed esplodendo in particelle nel punto d impatto. Questo semplifica notevolmente la risoluzione visiva dei tiri deviati durante le tue partite.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sistemi di Settori', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Preset di Dadi', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Intervallo Probabilità Impatto', icon: 'mdi:target' },
      { value: '10', label: 'Cronologia Tiri Recenti', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Come l Animazione della Traiettoria Migliora le Decisioni nei Wargame', level: 3 },
    { type: 'paragraph', html: 'Gli strumenti tradizionali mostrano un angolo e una distanza numerici, costringendo i giocatori a visualizzare mentalmente lo spostamento sul tavolo. La traiettoria animata colma questo divario disegnando il percorso di volo esatto dal punto di mira alla zona d atterraggio della deviazione. Questo velocizza il ritmo di gioco ed elimina ogni dubbio durante il posizionamento delle sagome d esplosione.' },
    { type: 'diagnostic', variant: 'success', title: 'Impatto Diretto', html: 'Quando il tiro supera la probabilità d impatto, il centro della bussola si illumina con anelli verdi pulsanti e un animazione "DIRECT HIT". Il proiettile torna al centro, confermando un impatto perfetto senza alcuna deviazione.' },
    { type: 'diagnostic', variant: 'error', title: 'Deviazione', html: 'Su un risultato di deviazione, il proiettile segue una traiettoria tratteggiata fino al punto d atterraggio. Un esplosione di particelle, un indicatore luminoso e la distanza esatta in pollici (es. <strong>5"</strong>) appaiono nel punto d impatto per misurare immediatamente lo spostamento.' },
    { type: 'tip', title: 'Consiglio: Usare la Modalità Deriva del Vento', html: 'Attiva la Deriva del Vento per bloccare la direzione di deviazione sull angolo della bussola impostato manualmente. Simula un vento prevalente o un vettore di spostamento fisso  -  ideale per razzi non guidati, nubi di gas, incantesimi d area o incidenti di teletrasporto.' },
    { type: 'title', text: 'Gestire la dispersione nei wargame', level: 2 },
    { type: 'paragraph', html: 'Molti wargame e giochi di ruolo tattici usano la deviazione per simulare artiglieria, tiri di mortaio, deriva dei gas o teletrasporti falliti in modo realistico e imprevedibile. Grazie alle opzioni di dadi flessibili (1D6, 2D6, 1D10), questa bussola si adatta a qualsiasi regolamento tattico.' },
    { type: 'table', headers: ['Scenario di Gioco', 'Configurazione Dadi', 'Modalità Deviazione', 'Effetto Tattico'], rows: [['Artiglieria e Mortai', '2D6 pollici', '8 Settori + Impatto %', 'Dispersione casuale attorno al bersaglio'], ['Nubi di Gas e Vento', '1D6 pollici', 'Deriva del Vento (Angolo Fisso)', 'Spostamento esclusivo nella direzione del vento'], ['Fallimenti Teletrasporto', '1D10 pollici', '12 Settori Orologio', 'Deviazione circolare in qualsiasi direzione']] },
    { type: 'title', text: 'Controllare vento e deviazione', level: 2 },
    { type: 'paragraph', html: 'Configurare una probabilità d impatto adeguata permette di riflettere l addestramento della squadra e velocizza notevolmente la misurazione al tavolo durante la fase di tiro.' },
    { type: 'comparative', items: [{ title: 'Gestire la dispersione nei wargame', description: 'Molti wargame usano la deviazione per simulare artiglieria, vento o teletrasporti falliti. Questa bussola digitale evita lo spostamento accidentale dei dadi sul terreno di gioco.', icon: 'mdi:compass-outline', highlight: true, points: ['Controllare vento e deviazione', 'Misurazione rapida e senza attriti', 'Visualizzazione precisa dei vettori'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Controllare vento e deviazione', definition: 'La probabilità di colpire aiuta a valutare l affidabilità di un unità e velocizza le misurazioni in partita.' }] },
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
      'name': 'Selettore Direzione Deviazione',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come usare il Selettore Direzione Deviazione',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
