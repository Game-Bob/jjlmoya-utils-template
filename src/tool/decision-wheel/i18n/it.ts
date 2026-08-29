import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'ruota-delle-decisioni',
  title: 'Ruota delle Decisioni: Selettore Casuale e Generatore di Scelte',
  description: 'Gira una ruota delle decisioni personalizzabile per i tuoi giochi da tavolo. Aggiungi ed edita spicchi con pesi per determinare risultati casuali.',
  ui: {
    title: 'Ruota delle Decisioni',
    spinButton: 'Gira la Ruota',
    clearHistory: 'Cancella Cronologia',
    resultHeading: 'Risultato',
    historyTitle: 'Cronologia Giri',
    noHistory: 'Nessun giro registrato. Clicca su Gira la Ruota per iniziare.',
    addSegmentLabel: 'Aggiungi Spicchio',
    removeSegmentLabel: 'Rimuovi',
    segmentLabelPlaceholder: 'Etichetta',
    presetLabel: 'Preimpostazioni',
    presetYesNo: 'Sì o No',
    presetNumbers: 'Numeri 1-6',
    presetActions: 'Azioni',
    presetCustom: 'Personalizzato',
    presetD20: 'D20',
    presetAlignment: 'Allineamento',
    presetLoot: 'Rarità del Bottino',
    weightLabel: 'Peso',
    spinAgain: 'Gira di Nuovo',
    noSegments: 'Aggiungi spicchi alla ruota prima di girare.',
  },
  seo: [
    { type: 'title', text: 'Ruota delle Decisioni per Giochi da Tavolo e Attività di Gruppo', level: 2 },
    { type: 'paragraph', html: 'La ruota delle decisioni è uno strumento digitale versatile per giochi da tavolo, RPG e attività di gruppo. Permette di sorteggiare opzioni casuali in modo rapido, equo e completamente imparziale. Ogni spicchio può essere personalizzato con testi, colori e pesi di probabilità configurabili secondo le regole del tuo gioco.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Aggiungi Spicchio' },
        { value: '7', label: 'Preimpostazioni' },
        { value: '10', label: 'Cronologia Giri' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Come Usare la Ruota delle Decisioni', level: 2 },
    { type: 'paragraph', html: 'Scegli uno dei preset pronti all uso come Sì/No, D20, Allineamenti o Bottino, oppure crea la tua lista personalizzata. Regola i pesi da 1 a 5 per modificare la frequenza di comparsa di ciascun risultato. Il motore fisico simula inerzia e attrito di rotazione per aggiungere suspense a ogni tiro.' },
    { type: 'title', text: 'Altri scenari decisionali', level: 3 },
    { type: 'paragraph', html: 'Utilizza la ruota per organizzare votazioni rapide del gruppo, generare incontri casuali nei giochi di ruolo, distribuire i turni di gioco o scegliere quale giocatore seleziona per primo il personaggio.' },
    { type: 'title', text: 'Preset per giochi da tavolo', level: 3 },
    { type: 'paragraph', html: 'I preset predefiniti ti consentono di caricare decisioni comuni in pochi secondi, risparmiando tempo prezioso durante le serate di gioco ed evitando discussioni al tavolo.' },
    { type: 'title', text: 'Regolare i pesi', level: 3 },
    { type: 'paragraph', html: 'I pesi ti permettono di bilanciare o orientare i risultati. Aumentando il peso di uno spicchio, questo occuperà un arco proporzionalmente maggiore sulla ruota, incrementando la probabilità di selezione.' },
    { type: 'title', text: 'Consultare la cronologia', level: 3 },
    { type: 'paragraph', html: 'Il pannello della cronologia conserva i dieci giri recenti affinché tutti i giocatori possano verificare i risultati precedenti in totale trasparenza durante la sessione.' },
  ],
  faq: [
    {
      question: 'Come funziona la ruota delle decisioni?',
      answer: 'Configura le tue opzioni, assegna un peso per variare le probabilità e premi Gira la Ruota per visualizzare il risultato.',
    },
    {
      question: 'Posso personalizzare colori e testi?',
      answer: 'Sì, puoi aggiungere nuovi spicchi, rinominarli, scegliere un colore e impostare un peso tra 1 e 5.',
    },
    {
      question: "Posso cambiare le probabilità?",
      answer: "Sì, modifica il peso di un segmento.",
    },
    {
      question: "Quanti segmenti sono possibili?",
      answer: "Sono supportati fino a 16 segmenti e ne servono almeno due.",
    },
    {
      question: "Quali preset sono disponibili?",
      answer: "Sì o No, Numeri, Azioni, opzioni proprie, D20, Allineamento e Bottino.",
    },
    {
      question: "I giri precedenti restano visibili?",
      answer: "Sì, il browser mostra gli ultimi dieci risultati.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurare gli Spicchi',
      text: 'Seleziona un set preimpostato o crea opzioni personalizzate assegnando colori e pesi.',
    },
    {
      name: 'Girare la Ruota',
      text: 'Fai clic sul pulsante di avvio e guarda la ruota rallentare con fisica realistica fino a fermarsi.',
    },
    {
      name: "Controllare il risultato",
      text: "Dopo l'arresto, controlla il segmento vincente e la cronologia dei giri.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Ruota delle Decisioni',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Come funziona la ruota delle decisioni?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Configura le tue opzioni, assegna un peso per variare le probabilità e premi Gira la Ruota per visualizzare il risultato.' } },
        { '@type': 'Question', 'name': 'Posso personalizzare colori e testi?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sì, puoi aggiungere nuovi spicchi, rinominarli, scegliere un colore e impostare un peso tra 1 e 5.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Configurare gli Spicchi', 'text': 'Seleziona un set preimpostato o crea opzioni personalizzate assegnando colori e pesi.' },
        { '@type': 'HowToStep', 'name': 'Girare la Ruota', 'text': 'Fai clic sul pulsante di avvio e guarda la ruota rallentare con fisica realistica fino a fermarsi.' },
      ],
    },
  ],
};
