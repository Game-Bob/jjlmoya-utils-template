import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'calcolatore-fasi-lunari',
  title: 'Calcolatore di Fasi Lunari per GdR da Tavolo: Traccia Lune Fantasy e Cicli di Marea',
  description: 'Calcola le fasi lunari di qualsiasi mondo fantasy con periodi orbitali personalizzati. Segui fino a tre lune contemporaneamente, consulta previsioni su 10 giorni e ottieni un livello di marea combinato per sistemi di magia e meteo in D&D, Pathfinder o qualsiasi GdR.',
  ui: {
    title: 'Tracciatore di Fasi Lunari e Maree Mistiche',
    moonsTitle: 'Configurazione delle lune',
    addMoon: 'Aggiungi luna',
    removeMoon: 'Rimuovi luna',
    moonName: 'Nome della luna',
    orbitalPeriod: 'Periodo orbitale (giorni)',
    startingOffset: 'Sfasamento iniziale (giorni)',
    timelineTitle: 'Controllo del tempo',
    currentDay: 'Giorno attuale della campagna',
    tideTitle: 'Stato della Marea Mistica',
    tideLevel: 'Livello di energia mareale',
    magicModifier: 'Effetto magico della marea',
    forecastTitle: 'Previsione lunare e delle maree',
    dayLabel: 'Giorno',
    resetButton: 'Reimposta al giorno 0',
    presetTitle: 'Impostazioni campagna',
    presetSingle: 'Luna classica',
    presetDouble: 'Lune gemelle della magia',
    presetTriple: 'Regno della triplice eclissi',
    newMoon: 'Luna nuova',
    waxingCrescent: 'Falce crescente',
    firstQuarter: 'Primo quarto',
    waxingGibbous: 'Gibbosa crescente',
    fullMoon: 'Luna piena',
    waningGibbous: 'Gibbosa calante',
    lastQuarter: 'Ultimo quarto',
    waningCrescent: 'Falce calante',
  },
  seo: [
    { type: 'title', text: 'Come seguire le fasi lunari in una campagna GdR fantasy', level: 2 },
    { type: 'paragraph', html: 'La maggior parte dei mondi fantasy ha lune con periodi orbitali diversi dal ciclo lunare reale di 29,5 giorni. Il campo <strong>Periodo Orbitale</strong> definisce quanti giorni di gioco impiega una luna per completare un ciclo intero. Imposta questo valore secondo il lore del tuo mondo o scegli un numero tra 5 e 60 giorni.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Lune simultanee' },
        { value: '10', label: 'Giorni di previsione' },
        { value: '5', label: 'Stati di marea' }
      ],
      columns: 3
    },
    { type: 'title', text: 'A cosa serve il campo Sfasamento iniziale', level: 2 },
    { type: 'paragraph', html: 'Lo <strong>Sfasamento iniziale</strong> sposta la fase di partenza di una luna al giorno 0 della campagna. Uno sfasamento di 0 inizia dalla luna nuova. Uno sfasamento pari alla metà del periodo orbitale inizia dalla luna piena. Usalo per riprodurre la fase descritta nella scena di apertura o per far partire due lune in posizioni diverse.' },
    { type: 'title', text: 'Cosa significa il livello di marea per la tua partita', level: 2 },
    { type: 'paragraph', html: 'Il livello di marea combina l\'attrazione gravitazionale di tutte le lune attive in base alle loro fasi. Una <strong>marea sizigia</strong> (sopra il 75%) si verifica quando le lune sono quasi allineate. Una <strong>marea di quadratura</strong> (sotto il 30%) avviene quando le lune sono in fasi opposte. Collega questo a qualsiasi meccanica: bonus alla CD dei tiri salvezza, soglie di licantropia, o gravità delle tempeste sulle mappe costiere.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Luna singola',
          description: 'Ideale per ambientazioni vicine al mondo reale o con una sola luna dominante. Ciclo semplice di 8 fasi.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Forgotten Realms (Selune, 30 giorni)',
            'Campagne su licantropia e mannari',
            'Sessioni horror legate alla luna piena'
          ]
        },
        {
          title: 'Lune gemelle',
          description: 'Comune nella high fantasy. Crea allineamenti parziali frequenti e maree intermedie interessanti.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28g + Aryth 12g)',
            'Stagioni di eclissi prevedibili',
            'Ottimo per sistemi di magia druidica'
          ]
        },
        {
          title: 'Tripla luna',
          description: 'I rari allineamenti tripli creano picchi imprevedibili. Drammaticamente utile per eventi di magia selvaggia.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Tabelle magia selvaggia sull\'allineamento',
            'Complessità stile Golarion di Pathfinder',
            'Cicli a lungo periodo per campagne epiche'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Periodi orbitali comuni per i mondi fantasy', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: 'Periodo orbitale di 30 giorni, luna singola. Usa uno sfasamento di 15 per iniziare con la luna piena alla prima sessione.' },
        { term: 'Lune di Eberron', definition: 'Eberron ha 12 lune con periodi da 9 a 28 giorni. Usa le due più rilevanti per la trama come istanze separate.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion ha una luna, Somal, con ciclo di 29 giorni. Una seconda luna a corto periodo può modellare gli eventi dell\'Arazzo Oscuro.' },
        { term: 'Mondo personalizzato', definition: 'Una luna di 15 giorni produce 24 lune piene all\'anno di gioco. Una luna di 45 giorni ne produce circa 8. Cicli più brevi creano più eventi ma riducono il peso narrativo.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Consiglio: Configurare una fase precisa per la sessione 1',
      icon: 'mdi:information-outline',
      badge: 'CONSIGLIO DI CONFIGURAZIONE',
      html: 'Se la tua campagna inizia con una mezzaluna, imposta lo sfasamento al 20% del periodo orbitale circa. Per una luna piena, usa il 50% del periodo come sfasamento. Esempio: luna di 28 giorni che inizia piena, sfasamento 14. Porta il contatore al giorno attuale della campagna e la previsione mostrerà automaticamente i prossimi 10 giorni.'
    }
  ],
  faq: [
    { question: 'Quale periodo orbitale usare per il mio mondo fantasy?', answer: 'Se la tua ambientazione non lo specifica, tra 28 e 30 giorni funziona bene per una luna singola. Per più lune, scegli periodi che non siano multipli semplici l\'uno dell\'altro per evitare allineamenti troppo frequenti.' },
    { question: 'Come faccio ad allineare due lune in un momento specifico della campagna?', answer: 'Imposta entrambe le lune con lo stesso valore di sfasamento. Si allineeranno a ogni multiplo comune dei loro due periodi. Per sfarasarle, dai alla seconda luna uno sfasamento pari alla metà del suo periodo orbitale.' },
    { question: 'Cosa significa marea sizigia in termini di regole di gioco?', answer: 'La marea sizigia significa che tutte le lune attive producono energia mareale massima. Usala per scatenare picchi di magia selvaggia, potenziare gli incantesimi curativi o segnare una notte sacra per fazioni religiose.' },
    { question: 'Cosa significa marea di quadratura in termini di regole di gioco?', answer: 'La marea di quadratura si verifica quando le lune si neutralizzano parzialmente. Ottima per effetti antimagia, calme piatte in mare o per antagonisti che necessitano di una soppressione magica prevedibile.' },
    { question: 'Posso usarlo per L\'Orrore di Cthulhu o campagne horror?', answer: 'Sì. Usa una luna di 29 giorni e imposta lo sfasamento in modo che la luna piena cada sul climax della sessione. Il tracciatore può rappresentare l\'influenza del Mito o picchi di sensibilità psichica.' },
    { question: 'Come funziona la previsione a 10 giorni?', answer: 'La previsione mostra la fase lunare di ogni luna attiva come un punto colorato per ciascuno dei prossimi 10 giorni di campagna. La percentuale indicata è il livello di marea combinato. I giorni con valori alti sono buoni candidati per incontri drammatici.' },
    { question: 'Posso tracciare una luna con ciclo molto breve, come 7 giorni?', answer: 'Sì. Imposta il periodo orbitale a 7. La luna completerà un ciclo intero ogni settimana di tempo di gioco. Utile per mondi dove la magia lunare si azzera ogni settimana.' },
    { question: 'Come riproduco la fase lunare da un modulo di avventura pubblicato?', answer: 'Nota la fase descritta e conta a quanti giorni del ciclo corrisponde. Dividilo per il periodo orbitale e usa quel risultato come sfasamento. Esempio: primo quarto al giorno 0 di un ciclo di 28 giorni significa sfasamento 7.' }
  ],
  bibliography,
  howTo: [
    { name: 'Imposta il periodo orbitale', text: 'Inserisci il numero di giorni di gioco che la tua luna impiega a completare un ciclo intero secondo il lore del mondo.' },
    { name: 'Imposta lo sfasamento iniziale', text: 'Sposta la fase iniziale con un valore in giorni. La metà del periodo orbitale corrisponde alla luna piena al giorno 0.' },
    { name: 'Avanza il contatore dei giorni', text: 'Usa i pulsanti o il cursore per raggiungere il giorno attuale della campagna e leggere la fase e il livello di marea.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore di Fasi Lunari per GdR da Tavolo: Traccia Lune Fantasy e Cicli di Marea',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Quale periodo orbitale usare per il mio mondo fantasy?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Tra 28 e 30 giorni funziona bene per una luna singola. Per più lune, scegli periodi che non siano multipli semplici l\'uno dell\'altro.' } },
        { '@type': 'Question', 'name': 'Cosa significa marea sizigia in termini di regole?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Energia mareale massima. Usala per picchi di magia selvaggia, incantesimi curativi potenziati o notte sacra per fazioni religiose.' } }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come seguire le fasi lunari in una campagna GdR',
      'step': [
        { '@type': 'HowToStep', 'name': 'Imposta il periodo orbitale', 'text': 'Inserisci i giorni di gioco per un ciclo completo.' },
        { '@type': 'HowToStep', 'name': 'Imposta lo sfasamento', 'text': 'La metà del periodo orbitale corrisponde alla luna piena al giorno 0.' },
        { '@type': 'HowToStep', 'name': 'Avanza il contatore', 'text': 'Usa il cursore per il giorno attuale della campagna.' }
      ]
    }
  ]
};
export default content;
