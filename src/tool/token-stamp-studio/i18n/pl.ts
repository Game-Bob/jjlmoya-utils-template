import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Wybierz ramkę',
  frameHint: 'Wybierz sylwetkę, która informuje graczy, kim jest postać, zanim przeczytają jej imię.',
  randomFrame: 'Losowa ramka',
  surfaceLegend: 'Stylizuj żeton',
  backgroundLabel: 'Tło',
  borderLabel: 'Ramka',
  textLabel: 'Tekst',
  overlayLabel: 'Odcień',
  randomColors: 'Losowe kolory',
  borderWidthLabel: 'Grubość ramki',
  opacityLabel: 'Przezroczystość ramki',
  overlayOpacityLabel: 'Odcień portretu',
  stageLabel: 'Kuźnia żetonów na żywo',
  chooseImage: 'Wybierz portret',
  positionHint: 'Przeciągnij portret lub etykiety bezpośrednio na żetonie.',
  markerName: 'Nazwa znacznika',
  markerNamePlaceholder: 'Nazwij ten znacznik',
  textLegend: 'Dodaj czytelne detale',
  textHint: 'Używaj krótkich etykiet, takich jak imię, poziom, rola lub status. Przeciągnij każdą na żeton.',
  textPlaceholder: 'Imię postaci lub rola',
  addText: 'Dodaj etykietę',
  removeText: 'Usuń etykietę',
  textSizeLabel: 'Rozmiar czcionki',
  alignmentLabel: 'Wyrównanie etykiety',
  alignLeft: 'Wyrównaj do lewej',
  alignCenter: 'Wyśrodkuj',
  alignRight: 'Wyrównaj do prawej',
  imageLegend: 'Dostosuj portret',
  imageZoomLabel: 'Powiększenie portretu',
  scaleLabel: 'Skala eksportu',
  savedMarkers: 'Zapisane znaczniki',
  noSavedMarkers: 'Zapisane znaczniki pojawią się tutaj, aby móc je ponownie otworzyć i edytować.',
  reuseMarker: 'Wybierz znacznik, aby otworzyć go w kuźni.',
  deleteMarker: 'Usuń znacznik',
  newMarker: 'Nowy znacznik',
  download: 'Pobierz PNG',
  copy: 'Kopiuj PNG',
  downloadBatch: 'Pobierz paczkę',
  batchLabel: 'Zaawansowany eksport seryjny',
  batchHint: 'Opcjonalnie: wyeksportuj kilka portretów z aktualną ramką i kolorami.',
  chooseBatch: 'Wybierz portrety',
  batchReady: '{count} portretów gotowych do wykucia.',
  noImage: 'Brak załadowanego portretu',
  noText: 'Brak etykiet. Dodaj szczegóły potrzebne twojej drużynie.',
  tokenDetails: 'Sterowanie żetonem postaci',
  exportHint: 'Plik PNG jest przezroczysty poza wybraną sylwetką, gotowy do VTT lub druku.',
};

const faq = [
  {
    question: 'Co decyduje o dobrym portrecie na żetonie postaci?',
    answer: 'Wybierz ilustrację z wyraźną twarzą i dobrym kontrastem względem ramki. Kadr od głowy do ramion pozostaje czytelny nawet przy znacznej pomniejszeniu na wirtualnym stole.',
  },
  {
    question: 'Jak najlepiej wykadrować portret w ramce?',
    answer: 'Wgraj obraz i przeciągnij go bezpośrednio na żetonie. Użyj powiększenia portretu, aby przybliżyć twarz bez zmiany kształtu ramki.',
  },
  {
    question: 'Czy mogę dodać imię postaci i poziom?',
    answer: 'Tak. Dodaj krótkie etykiety, dostosuj ich rozmiar i wyrównanie, a następnie przeciągnij je w czytelne miejsce na żetonie.',
  },
  {
    question: 'Czy plik PNG zachowuje przezroczystość poza ramką?',
    answer: 'Tak. Wyeksportowany plik PNG ma przezroczyste tło poza wybraną sylwetką, co ułatwia nakładanie żetonu na mapy.',
  },
  {
    question: 'Czy mogę stworzyć żetony dla całej drużyny jednocześnie?',
    answer: 'Tak. Użyj eksportu seryjnego, aby załadować wiele portretów i wygenerować przezroczysty plik PNG dla każdego z nich.',
  },
  {
    question: 'Gdzie przechowywane są moje zapisane znaczniki?',
    answer: 'Zapisane znaczniki są przechowywane lokalnie w pamięci Twojej przeglądarki. Żadne pliki nie są wysyłane na zewnętrzne serwery.',
  },
];

const howTo = [
  { name: 'Wybierz sylwetkę postaci', text: 'Zacznij od ramki pasującej do roli: okrągłej dla bohatera, sześciokątnej do walki taktycznej lub gwiazdy dla bossa.' },
  { name: 'Wgraj i dopasuj portret', text: 'Wybierz obraz, przeciągnij go na żeton i dostosuj powiększenie tak, aby twarz była w centrum.' },
  { name: 'Dodaj przydatne etykiety', text: 'Wpisz krótkie imię lub status, nie zasłaniając kluczowych elementów ilustracji.' },
  { name: 'Wyeksportuj jako przezroczysty PNG', text: 'Pobierz plik PNG gotowy do użycia na wirtualnym stole (VTT) lub w druku.' },
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
  description: 'Twórz czytelne żetony postaci do gier RPG z własnymi ramkami, etykietami, przezroczystością i eksportem seryjnym PNG.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak zrobić żeton postaci do RPG',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'kreator-zetonow-postaci-rpg-stolosw',
  title: 'Kreator Żetonów Postaci do Gier RPG (Tokens)',
  description: 'Twórz czytelne żetony postaci do gier RPG z własnymi ramkami, etykietami, przezroczystością i eksportem seryjnym PNG.',
  ui,
  seo: [
    { type: 'title', text: 'Projektuj czytelne żetony postaci na dowolną mapę gry RPG', level: 2 },
    { type: 'paragraph', html: 'Żeton to kluczowy element komunikacji wizualnej na stole gry RPG. Jego sylwetka natychmiast informuje drużynę, czy ma do czynienia z bohaterem, potworem, efektem zaklęcia czy postronnym NPC zanim ktokolwiek przybliży widok mapy. Wybierz odpowiednią ramkę i zadbaj o pełną czytelność ilustracji oraz napisów na wirtualnym stole.' },
    { type: 'title', text: 'Dobierz właściwą ramkę do charakteru i roli postaci', level: 2 },
    { type: 'list', items: ['<strong>Koło lub pierścień:</strong> klasyczny i niezawodny wybór dla postaci graczy oraz stałych sojuszników.', '<strong>Sześciokąt lub ośmiokąt:</strong> świetny do starć taktycznych z wieloma jednostkami na planszy.', '<strong>Gwiazda:</strong> idealna dla bossów, championów i kluczowych celów wymagających natychmiastowej uwagi.', '<strong>Chmura:</strong> miękki kształt dla istot duchowych, chowańców i istot fantastycznych.'] },
    { type: 'tip', title: 'Projektuj z myślą o najmniejszym rozmiarze na mapie taktycznej', html: 'Oddal widok mapy, aż żeton stanie się bardzo mały. Jeśli twarz, ramka i tekst nadal są wyraźnie rozróżnialne, Twój żeton sprawdzi się świetnie podczas dynamicznej rozgrywki.' },
    { type: 'title', text: 'Stosuj krótkie i przydatne etykiety podczas sesji', level: 2 },
    { type: 'paragraph', html: 'Żeton nie zastępuje karty postaci. Dodaj tylko najpotrzebniejsze informacje, takie jak imię, poziom lub aktualny status postaci (np. ogłuszony). Długie zdania tworzą szum wizualny i zasłaniają portret.' },
    { type: 'title', text: 'Przygotuj żetony dla całej drużyny za jednym razem bez utraty ich stylu', level: 2 },
    { type: 'paragraph', html: 'Eksport seryjny pozwala nadać spójny styl graficzny całej drużynie po sesji zero, zachowując indywidualny charakter każdego portretu. Jednolita ramka spaja drużynę wizualnie.' },
    { type: 'tip', title: 'Automatyczne zapisywanie lokalne na Twoim urządzeniu', html: 'Prace nad żetonem są automatycznie zapisywane w pamięci przeglądarki, dzięki czemu możesz łatwo modyfikować go w trakcie trwania całej kampanii.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
