import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Nazwij obie pary, ustaw zasady przy stole i stykaj kamienie podczas liczenia kolejnych rozdani.',
  pairOneLabel: 'Para pierwsza',
  pairTwoLabel: 'Para druga',
  pairOneDefault: 'Stół Północ',
  pairTwoDefault: 'Stół Południe',
  targetPointsLabel: 'Docelowe punkty na grę',
  targetPointsHint: 'Wybierz limit punktów dla każdej gry (30, 40 lub 50 punktów).',
  gamesToWinLabel: 'Gry do wygrania vaca',
  gamesToWinHint: 'Pierwsza para, która osiągnie tę liczbę, wygrywa cały mecz.',
  deckLabel: 'Talia kart na stole',
  deckHint: 'Hiszpańska talia 40 kart (Baraja española) jest tradycyjnym wyborem. W przypadku talii francuskiej usuń 8, 9 i 10.',
  spanishDeck: 'Baraja española (Talia hiszpańska)',
  frenchDeck: 'Talia francuska',
  frenchDeckNotice: 'Pamiętaj o usunięciu 8, 9 i 10 z talii francuskiej, aby grać 40 kartami. Walety to Sotas, Damy to Caballos, a Króle to Reyes.',
  pointsOption30: '30 punktów',
  pointsOption40: '40 punktów',
  pointsOption50: '50 punktów',
  gamesOption1: '1 gra',
  gamesOption2: '2 gry',
  gamesOption3: '3 gry',
  startMatch: 'Otwórz licznik',
  matchSettings: 'Ustaw pary i zasady',
  liveMatch: 'Mecz na żywo',
  targetLabel: 'punktów na grę',
  gameLabel: 'gra',
  gamePlural: 'gry',
  vacaLabel: 'gier do wygranej',
  scoreLabel: 'Aktualne kamienie',
  handLabel: 'Wybierz, która para ma rękę (Mano)',
  handSelected: 'ma rękę (Mano).',
  stonesLabel: 'Licznik punktów',
  stoneSingular: 'kamień (piedra)',
  stonePlural: 'kamienie (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'punktów do celu',
  addStone: 'kamień',
  addAmarraco: 'amarraco',
  closeGame: 'Zamknij grę',
  closeGamePrompt: 'Potwierdzić, że ta para wygrała grę i rozpocząć następną?',
  confirmationTitle: 'Potwierdź akcję przy stole',
  confirmAction: 'Potwierdź',
  cancelAction: 'Graj dalej',
  undo: 'Cofnij',
  resetMatch: 'Zresetuj mecz',
  resetMatchPrompt: 'Zresetować aktualny mecz i wyczyścić historię punktów?',
  historyTitle: 'Ostatnie zapisy',
  noHistory: 'Brak zapisów.',
  matchReady: 'Stół jest gotowy.',
  closeGameHint: 'Para osiągnęła limit punktów. Potwierdź zwycięzcę gry.',
  waitingForScore: 'Licz dalej. Pozostałe punkty dla liderów:',
  gameWon: 'Gra zakończona.',
  vacaWon: 'Vaca wygrana! Rozpocznij nowy mecz, gdy stół będzie gotowy.',
  gameClosed: 'zamknął grę.',
  pointsAdded: 'zdobył',
  matchSaved: 'Wynik zapisany na tym urządzeniu.',
  lastAction: 'Ostatnia akcja',
  settingsApplied: 'Nowe zasady zastosowane. Mecz zresetowany.',
  pairNameRequired: 'Wprowadź nazwy obu par przed otwarciem licznika.',
  visualScoreLabel: 'Cyfrowy licznik punktów Mus z kamieniami, amarracos i grami',
};

const faq = [
  {
    question: 'Co śledzi ten online licznik punktów Mus?',
    answer: 'Śledzi dwie pary, kamienie (pojedyncze punkty), amarracos (bloki 5 punktów), wygrane gry (chicos), wygraną vaca, posiadanie ręki (Mano) i historię punktacji.',
  },
  {
    question: 'Dlaczego kamienie i amarracos są pokazywane osobno?',
    answer: 'Jeden kamień (Piedra) to 1 punkt, a jeden Amarraco odpowiada 5 kamieniom. Osobne wyświetlanie ułatwia porównywanie z fizycznymi żetonami lub fasolkami na stole.',
  },
  {
    question: 'Czy można grać do 30, 40 lub 50 punktów?',
    answer: 'Tak. Przed otwarciem licznika wybierz limit 30, 40 lub 50 punktów na grę.',
  },
  {
    question: 'Jak zamknąć ukończoną grę?',
    answer: 'Gdy para osiągnie limit punktów, przycisk zamknięcia staje się aktywny. Po potwierdzeniu dodawana jest 1 gra, a kamienie są resetowane.',
  },
  {
    question: 'Czy dane meczu są zapisywane po odświeżeniu strony?',
    answer: 'Tak. Ustawienia, nazwy par, kamienie i wygrane gry są zapisywane lokalnie w przeglądarce.',
  },
  {
    question: 'Czy licznik narzuca lokalne zasady Mus?',
    answer: 'Nie. Mus posiada liczne warianty regionalne. Licznik koncentruje się na dokładnym rejestrowaniu punktów uzgodnionych przy stole.',
  },
  {
    question: 'Jak dostosować talię francuską do gry w Mus?',
    answer: 'Usuń 8, 9 i 10 z talii francuskiej, aby pozostało 40 kart. Walety to Sotas, Damy to Caballos, a Króle to Reyes.',
  },
];

const howTo = [
  {
    name: 'Wprowadź nazwy par',
    text: 'Wpisz nazwy obu par graczy, aby ułatwić ich identyfikację przy stole.',
  },
  {
    name: 'Ustaw cel i vaca',
    text: 'Wybierz 30, 40 lub 50 punktów na grę oraz liczbę gier potrzebnych do wygrania vaca.',
  },
  {
    name: 'Licz kamienie i amarracos',
    text: 'Naciśnij kamień (+1) lub amarraco (+5) po każdym podliczeniu rozdania.',
  },
  {
    name: 'Potwierdź wygraną gry',
    text: 'Po osiągnięciu celu potwierdź zwycięzcę, aby zarejestrować grę i zresetować kamienie.',
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
  name: 'Licznik Punktów Mus Online',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Cyfrowy licznik punktów dla tradycyjnej hiszpańskiej gry karcianej Mus.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak liczyć punkty w grze karcianej Mus',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'licznik-punktow-mus-online',
  title: 'Licznik Punktów Mus Online dla Meczów na Żywo',
  description: 'Liczenie kamieni, amarracos, gier i vaca w hiszpańskiej grze Mus. Dostosowane do talii hiszpańskich i francuskich z zapisem lokalnym.',
  ui,
  seo: [
    { type: 'title', text: 'Jasne i Szybkie Liczenie Punktów przy Twoim Stole Mus', level: 2 },
    { type: 'paragraph', html: 'Mus to tradycyjna hiszpańska gra karciana pełna dynamiki, emocji, taktyki i bluffu. Ponieważ punkty są liczone szybko po każdym licytowanym lancy (Grande, Chica, Pares, Juego lub Punto), cyfrowy licznik zapobiega pomyłkom i sporom przy stole.' },
    { type: 'title', text: 'Ustaw Cel Punktowy Przed Pierwszym Rozdaniem', level: 2 },
    { type: 'paragraph', html: 'Choć standardem jest gra do 40 punktów w tradycyjnych kręgach, niektóre stoły wolą grać do 30 lub 50 punktów. Ustaw cel przed rozdaniem kart, aby licznik i przyciski zamykania gry idealnie pasowały do Waszych zasad.' },
    {
      type: 'table',
      headers: ['Ustawienie', 'Efekt', 'Rekomendacja'],
      rows: [
        ['30 punktów', 'Krótka gra', 'Szybkie mecze, turnieje lub lokalne zasady domowe'],
        ['40 punktów', 'Standardowa gra', 'Klasyczny tradycyjny format w gronie znajomych'],
        ['50 punktów', 'Długa gra', 'Mecze z większą przestrzenią taktyczną i głębią strategiczną'],
      ],
    },
    { type: 'tip', title: 'Ustal Zasady na Głos Przed Grą', html: 'Ustalcie przed grą wyraźnie, czy gracie z zasadą 8 Królów i 8 Asów (gdzie 3 grają jako Króle, a 2 jako Asy) oraz kto pilnuje fizycznych żetonów lub fasolek na stole.' },
    { type: 'title', text: 'Adaptacja Talii Hiszpańskiej i Francuskiej', level: 2 },
    { type: 'paragraph', html: 'Tradycyjna talia hiszpańska 40 kart (Oros, Copas, Espadas, Bastos) to oryginalny wzorzec Mus. Przy talii francuskiej wystarczy usunąć 8, 9 i 10. Walety to Sotas, Damy to Caballos, Króle to Reyes.' },
    { type: 'title', text: 'Cyfrowy Zapis Punktów Bezpośrednio przy Stole', level: 2 },
    { type: 'paragraph', html: 'Główna liczba wskazuje sumę punktów w czytelny sposób. Linia poniżej automatycznie przelicza tę wartość na amarracos (bloki 5 punktów) i pojedyncze kamienie dla szybkiej weryfikacji.' },
    { type: 'list', items: ['<strong>Kamień (Piedra):</strong> 1 pojedynczy punkt w liczeniu meczu.', '<strong>Amarraco:</strong> 1 żeton odpowiadający 5 kamieniom.', '<strong>Gra (Chico):</strong> Wygrana runda po osiągnięciu uzgodnionego celu.', '<strong>Vaca:</strong> Ostateczne zwycięstwo w meczu po zdobyciu wyznaczonej liczby gier.'] },
    { type: 'title', text: 'Zamykanie Gry i Poprawianie Błędów', level: 2 },
    { type: 'paragraph', html: 'Po osiągnięciu celu celowego przycisk zamknięcia gry staje się aktywny z wyraźnym potwierdzeniem. W przypadku pomyłki przy wprowadzaniu punktów przycisk Cofnij pozwala natychmiast przywrócić poprzedni stan.' },
    { type: 'tip', title: 'Użyj Przycisku Cofnij w Razie Pomyłki', html: 'Jeśli punkty zostaną omyłkowo przyznane złej parze, natychmiast naciśnij Cofnij, aby poprawić wynik bez niszczenia historii licytacji.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
