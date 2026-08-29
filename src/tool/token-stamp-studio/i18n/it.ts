import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Scegli una cornice',
  frameHint: 'Scegli la silhouette che indica al tavolo chi è questo personaggio prima ancora di leggerne il nome.',
  randomFrame: 'Cornice casuale',
  surfaceLegend: 'Dipingi il token',
  backgroundLabel: 'Sfondo',
  borderLabel: 'Bordo',
  textLabel: 'Testo',
  overlayLabel: 'Tinta',
  randomColors: 'Colori casuali',
  borderWidthLabel: 'Spessore bordo',
  opacityLabel: 'Opacità bordo',
  overlayOpacityLabel: 'Tinta ritratto',
  stageLabel: 'Fucina token in tempo reale',
  chooseImage: 'Scegli ritratto',
  positionHint: 'Trascina il ritratto o le etichette direttamente sul token.',
  markerName: 'Nome segnalino',
  markerNamePlaceholder: 'Assegna un nome a questo segnalino',
  textLegend: 'Aggiungi dettagli leggibili al tavolo',
  textHint: 'Usa etichette brevi come nome, livello, ruolo o stato. Trascina ciascuna sul token.',
  textPlaceholder: 'Nome personaggio o ruolo',
  addText: 'Aggiungi etichetta',
  removeText: 'Rimuovi etichetta',
  textSizeLabel: 'Dimensione testo',
  alignmentLabel: 'Allineamento testo',
  alignLeft: 'Allinea a sinistra',
  alignCenter: 'Centra',
  alignRight: 'Allinea a destra',
  imageLegend: 'Regola il ritratto',
  imageZoomLabel: 'Zoom ritratto',
  scaleLabel: 'Esportazione scala',
  savedMarkers: 'Segnalini salvati',
  noSavedMarkers: 'I segnalini salvati appariranno qui per essere riaperti, modificati e riutilizzati.',
  reuseMarker: 'Seleziona un segnalino per riaprirlo nella fucina.',
  deleteMarker: 'Elimina segnalino',
  newMarker: 'Nuovo segnalino',
  download: 'Scarica PNG',
  copy: 'Copia PNG',
  downloadBatch: 'Scarica lotto',
  batchLabel: 'Esportazione avanzata in lotto',
  batchHint: 'Opzionale: esporta più ritratti con la cornice e i colori attuali.',
  chooseBatch: 'Scegli ritratti',
  batchReady: '{count} ritratti pronti per la fucina.',
  noImage: 'Nessun ritratto caricato',
  noText: 'Nessuna etichetta. Aggiungi i dettagli utili per il tuo gruppo.',
  tokenDetails: 'Controlli del token personaggio',
  exportHint: 'Il PNG è trasparente all\'esterno della silhouette scelta, pronto per VTT o stampa.',
};

const faq = [
  {
    question: 'Cosa rende efficace il ritratto di un token personaggio?',
    answer: 'Scegli un\'immagine con un viso ben visibile e un buon contrasto rispetto alla cornice. Un taglio a mezzo busto rimane perfettamente leggibile sul tavolo virtuale.',
  },
  {
    question: 'Come posiziono al meglio il ritratto nella cornice?',
    answer: 'Carica l\'immagine e trascinala direttamente sul token. Usa lo zoom ritratto per ingrandire il volto senza alterare la forma del bordo.',
  },
  {
    question: 'Posso aggiungere nome e livello del personaggio?',
    answer: 'Sì. Aggiungi etichette brevi, regolane dimensione e allineamento, e trascinale in un punto ben visibile sul token.',
  },
  {
    question: 'Il file PNG mantiene la trasparenza all\'esterno del token?',
    answer: 'Sì. L\'immagine esportata conserva la trasparenza al di fuori della silhouette selezionata, rendendola perfetta da sovrapporre alle mappe.',
  },
  {
    question: 'Posso creare i token per l\'intero gruppo in una volta sola?',
    answer: 'Sì. Usa l\'esportazione in lotto per caricare più ritratti e scaricare un file PNG trasparente per ciascuno mantenedo le impostazioni di stile.',
  },
  {
    question: 'Dove vengono salvati i miei segnalini?',
    answer: 'I segnalini salvati rimangono nella memoria locale del tuo browser. Nessuna immagine viene caricata su server esterni.',
  },
];

const howTo = [
  { name: 'Scegli la silhouette del personaggio', text: 'Seleziona la cornice adatta al ruolo: circolare per un eroe, esagonale per scontro tattico o stella per un boss.' },
  { name: 'Inquadra il ritratto', text: 'Carica un\'immagine e trascinala fino a centrare il volto, regolando lo zoom secondo necessità.' },
  { name: 'Aggiungi le informazioni chiave', text: 'Inserisci un nome breve, livello o stato senza coprire i dettagli principali dell\'illustrazione.' },
  { name: 'Esporta in formato PNG', text: 'Scarica il PNG trasparente pronto per la tua piattaforma di gioco virtuale o scheda stampata.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'Crea token personaggio leggibili per GDR da tavolo con cornici personalizzate, etichette, trasparenza ed esportazione PNG in lotto.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come creare un token personaggio per GDR da tavolo',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'creatore-token-personaggi-gdr-tavolo',
  title: 'Creatore di Token Personaggio per GDR da Tavolo',
  description: 'Crea token personaggio leggibili per GDR da tavolo con cornici personalizzate, etichette, trasparenza ed esportazione PNG in lotto.',
  ui,
  seo: [
    { type: 'title', text: 'Crea token personaggio chiari e leggibili sulla mappa', level: 2 },
    { type: 'paragraph', html: 'Un token è un elemento di comunicazione al tavolo da gioco. La sua silhouette fa capire subito al gruppo se si tratta di un eroe, un mostro o un alleato. Scegli la cornice idonea e mantieni volto e testi ben visibili.' },
    { type: 'title', text: 'Scegli la cornice giusta per il personaggio', level: 2 },
    { type: 'list', items: ['<strong>Cerchio:</strong> ideale per personaggi giocanti e alleati.', '<strong>Esagono o ottagono:</strong> ottimo nei combattimenti tattici con molte unità.', '<strong>Stella:</strong> perfetto per boss, campioni o bersagli primari.', '<strong>Nuvola:</strong> forma morbida per spiriti, famigli e creature fatate.'] },
    { type: 'tip', title: 'Progetta per la dimensione minima di gioco', html: 'Riduci lo zoom della mappa finché il token non diventa piccolo. Se volto e testo rimangono distinguibili, il token funzionerà benissimo durante le sessioni.' },
    { type: 'title', text: 'Etichette brevi ed efficaci durante la partita', level: 2 },
    { type: 'paragraph', html: 'Il token non deve sostituire la scheda del personaggio. Aggiungi solo i dati consultati spesso: nome breve, livello o stato attuale.' },
    { type: 'title', text: 'Prepara l\'intero party senza perdere l\'identità dei singoli', level: 2 },
    { type: 'paragraph', html: 'L\'esportazione in lotto permette di uniformare lo stile del gruppo mantenendo distinti i volti di ciascun personaggio.' },
    { type: 'tip', title: 'Salvataggio automatico sul tuo dispositivo', html: 'Il segnalino attivo viene salvato nel browser così potrai riaprirlo e modificarlo quando il personaggio sale di livello.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
