import type { CategoryLocaleContent } from '../../types';

const slug = 'giochi-da-tavolo';
const title = 'Utilità e Strumenti per Giochi da Tavolo';
const description = 'Strumenti gratuiti per giochi da tavolo e di ruolo: lancia dadi virtuali con statistiche in tempo reale, gestisci i tempi di turno con un cronometro multigiocatore e molto altro. Funziona nel browser, senza registrazione, 100% privato.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Strumenti per Giochi da Tavolo | Lancia Dadi Online e Cronometra i Turni', level: 2 },
    { type: 'paragraph', html: 'Le serate di gioco dovrebbero essere divertimento, non una caccia ai dadi persi o l\'attesa che qualcuno sommi i risultati. Questa libreria di utilità offre a te e al tuo gruppo strumenti rapidi e ben progettati che funzionano all\'istante, senza chiedere nulla in cambio. Che tu sia un master oberato di cose da gestire o un giocatore che vuole semplicemente tirare i dadi senza pensieri, questi strumenti sono fatti per te.' },
    { type: 'title', text: 'Lancia Dadi Virtuali con Statistiche in Tempo Reale', level: 2 },
    { type: 'paragraph', html: 'Stanco di cercare dadi sotto il tavolo o di aspettare che qualcuno faccia i totali? Il lanciatore di dadi virtuale ti permette di tirare qualsiasi combinazione di dadi poliedrici all\'istante, con modificatori, vantaggio, svantaggio e uno storico completo. L\'analizzatore di probabilità integrato mostra le tue reali possibilità prima di lanciare. Perfetto per Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun o qualsiasi gioco basato sul caso.' },
    { type: 'title', text: 'Mantieni il Ritmo con un Cronometro Turni Intelligente', level: 2 },
    { type: 'paragraph', html: 'Conosciamo tutti quel giocatore che impiega un\'eternità a ogni turno. Il cronometro da gioco ti permette di impostare limiti di tempo equi e divertenti, con modalità che si adattano a ogni stile: dal semplice conto alla rovescia condiviso ai sistemi da scacchi con incremento Fischer o ritardo Bronstein. Funziona per duelli a due con schermo diviso o gruppi fino a otto giocatori con controllo centralizzato. A fine partita, consulta statistiche dettagliate su tempi e ritmo di gioco.' },
    { type: 'title', text: 'Privacy Prima di Tutto: I Tuoi Dati Restano sul Tuo Dispositivo', level: 2 },
    { type: 'paragraph', html: 'Uno dei grandi vantaggi di questa libreria è che tutto viene elaborato nel tuo browser. Nessun dato viene inviato a server, niente cookie di tracciamento, nessuna email o registrazione richiesta. Usa gli strumenti offline, condividi lo schermo con il tavolo o proietta su un televisore: niente di cui preoccuparsi se non del gioco stesso. E altri strumenti arriveranno, sempre pensati per semplificare la vita dei giocatori da tavolo.' },
    { type: 'stats', items: [
      { label: 'Strumenti', value: '2+', icon: 'mdi:tools' },
      { label: 'Giocatori', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Lingue', value: '15', icon: 'mdi:translate' },
      { label: 'Privacy', value: '100% Locale', icon: 'mdi:shield-check' },
    ] },
  ],
};
