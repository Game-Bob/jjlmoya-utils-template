import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Imposta il gruppo e la minaccia. Il calcolatore valuta lo scontro rispetto alle soglie ufficiali D&D 5e 2014.',
  partySection: 'Il gruppo',
  partyLevel: 'Livello dei personaggi',
  partyLevelHint: 'Usa un livello medio per un gruppo con personaggi di livello simile.',
  partySize: 'Personaggi',
  partySizeHint: 'Le regole regolano il moltiplicatore per gruppi molto piccoli o grandi.',
  threatSection: 'La minaccia',
  monsterCr: 'Grado di sfida (CR)',
  monsterCrHint: 'Scegli il CR di un mostro. Gruppi misti richiedono un calcolo separato.',
  moreCr: 'Mostra più CR',
  lessCr: 'Mostra meno CR',
  monsterCount: 'Numero di mostri',
  monsterCountHint: 'Più creature aumentano la pressione tattica anche con XP di base modesta.',
  presets: 'Inizia da una scena',
  presetClassic: 'Pattuglia classica',
  presetBoss: 'Boss singolo',
  presetSwarm: 'Orda di sgherri',
  resultSection: 'Pressione dello scontro',
  belowEasyHint: 'Una scena leggera che permette di preservare risorse.',
  easyHint: 'Una scena gestibile con scarsa pressione sul gruppo.',
  mediumHint: 'Una prova significativa che può costare punti ferita o risorse.',
  hardHint: 'Una scena pericolosa dove la tattica e la gestione delle risorse contano.',
  deadlyHint: 'Segnale di pressione mortale. Controlla vie di fuga e terreno.',
  adjustedXp: 'XP Modificato',
  baseXp: 'XP di Base',
  multiplier: 'Moltiplicatore di gruppo',
  partyThreshold: 'Soglia Media',
  belowEasy: 'Sotto facile',
  easy: 'Facile',
  medium: 'Medio',
  hard: 'Difficile',
  deadly: 'Mortale',
  warning: 'Attenzione',
  partyAdjustment: 'Il moltiplicatore è stato regolato poiché il gruppo ha meno di tre o più di cinque personaggi.',
  highCr: 'Un mostro con un CR superiore al livello del gruppo può mettere a terra un personaggio rapidamente.',
  manyMonsters: 'Undici o più mostri rendono il combattimento complesso da gestire.',
  rulesNote: 'Stima basata sulle regole D&D 5e 2014. Non tiene conto di terreno o tattica.',
  rulesLinkLabel: 'Leggi le regole originali',
  reset: 'Ripristina esempio',
  xpUnit: 'XP',
  sceneLabel: 'Grafico della pressione dello scontro',
  partyMarker: 'Gruppo',
  threatMarker: 'Minaccia',
};

const faq = [
  {
    question: 'Quali regole utilizza questo calcolatore di difficoltà?',
    answer: 'Utilizza il metodo ufficiale D&D 5e 2014 delle Regole Base, confrontando le soglie del gruppo con l XP modificato dei mostri.',
  },
  {
    question: 'Perché l XP modificato differisce dall XP assegnato da un mostro?',
    answer: 'Le regole moltiplicano l XP totale dei mostri per riflettere il pericolo di più creature che agiscono nello stesso round.',
  },
  {
    question: 'Posso usarlo per un gruppo misto di mostri?',
    answer: 'Usalo come stima rapida per mostri uguali. Per gruppi misti, somma l XP di ciascuna creatura e applica il moltiplicatore.',
  },
  {
    question: 'Un risultato mortale significa che il gruppo morirà?',
    answer: 'No. Mortale significa che l XP modificato raggiunge la soglia mortale. Terreno, tattiche e incantesimi possono cambiare il risultato.',
  },
  {
    question: 'Perché la dimensione del gruppo modifica il moltiplicatore?',
    answer: 'Le Regole Base raccomandano di aumentare il moltiplicatore per gruppi con meno di tre personaggi e ridurlo per sei o più personaggi.',
  },
];

const howTo = [
  {
    name: 'Imposta il livello del gruppo',
    text: 'Scegli il livello medio dei personaggi del gruppo.',
  },
  {
    name: 'Indica la dimensione del gruppo',
    text: 'Inserisci il numero di personaggi partecipanti allo scontro.',
  },
  {
    name: 'Descrivi la minaccia',
    text: 'Scegli il grado di sfida (CR) e il numero di mostri.',
  },
  {
    name: 'Leggi la pressione',
    text: 'Confronta l XP modificato con le fasce di soglia ufficiali.',
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
  name: 'Calcolatore di Difficoltà degli Scontri D&D 5e',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Calcola la difficoltà degli scontri D&D 5e 2014 in base a livello, dimensione gruppo, CR dei mostri, quantità e soglie ufficiali.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come calcolare la difficoltà di uno scontro in D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'calcolatore-difficolta-scontri-dnd-5e',
  title: 'Calcolatore di Difficoltà degli Scontri D&D 5e',
  description: 'Valuta la pressione dei combattimenti D&D 5e 2014 tramite livello, dimensione del gruppo, CR dei mostri, XP modificato e soglie ufficiali.',
  ui,
  seo: [
    { type: 'title', text: 'Analizza la difficoltà dello scontro prima di tirare l iniziativa', level: 2 },
    { type: 'paragraph', html: 'Uno scontro D&D è più del semplice valore di sfida di un mostro. Questo calcolatore trasforma dimensione del gruppo, livello, CR e numero di mostri nell XP modificato secondo le regole D&D 5e 2014. Il risultato visivo mostra chiaramente la posizione del combattimento rispetto alle soglie facile, media, difficile e mortale.' },
    { type: 'title', text: 'Come funziona la formula degli scontri D&D 5e', level: 2 },
    { type: 'paragraph', html: 'Il metodo somma la soglia di XP di ciascun personaggio per ciascun livello di difficoltà, quindi applica il moltiplicatore al totale dei mostri. I gruppi con meno di tre personaggi utilizzano il moltiplicatore superiore successivo, mentre i gruppi di sei o più personaggi usano quello inferiore.' },
    {
      type: 'table',
      headers: ['Segnale', 'Cosa valutare al tavolo'],
      rows: [
        ['Sotto facile', 'Lo scontro può servire da riscaldamento o per un consumo minimo di risorse.'],
        ['Facile', 'Il gruppo dovrebbe vincere senza spendere molte risorse.'],
        ['Medio', 'Prevedi una pressione moderata e almeno una scelta significativa sulle risorse.'],
        ['Difficile', 'Pianifica la perdita di punti ferita e slot incantesimo.'],
        ['Mortale', 'Controlla tattiche, terreno e vie di fuga.'],
      ],
    },
    { type: 'title', text: 'Perché il numero di mostri è fondamentale', level: 2 },
    { type: 'paragraph', html: 'Più mostri creano un pericolo superiore alla loro XP base perché moltiplicano attacchi e reazioni nello stesso round. Ecco perché una coppia di creature applica un moltiplicatore maggiore rispetto a una singola creatura con la stessa XP combinata.' },
    { type: 'tip', title: 'Un CR alto costituisce un avviso specifico', html: 'Un mostro con CR superiore al livello del gruppo può mandare KO un personaggio in un singola azione potente. Ispeziona i suoi danni e le capacità di controllo piuttosto che basarti solo sulla parola finale.' },
    { type: 'title', text: 'Usa il risultato come guida di preparazione', level: 2 },
    { type: 'paragraph', html: 'Prima di proporre uno scontro difficile o mortale, valuta l ambiente, la sorpresa e le condizioni generali del gruppo. Stanze strette, coperture, trappole ed effetti di concentrazione possono cambiare drasticamente la difficoltà reale al tavolo.' },
    { type: 'tip', title: 'Gruppi di mostri misti', html: 'Somma l XP base di ciascuna creatura e applica il moltiplicatore corrispondente al numero totale di mostri.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
