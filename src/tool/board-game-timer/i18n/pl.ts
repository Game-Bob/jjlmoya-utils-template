import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Stoper do Gier Planszowych',
  setupTitle: 'Konfiguracja Gry',
  playerNamePlaceholder: 'Imię gracza',
  addPlayer: 'Dodaj Gracza',
  removePlayer: 'Usuń',
  startGame: 'Uruchom Grę',
  pauseGame: 'Pauza',
  resumeGame: 'Wznów',
  resetGame: 'Resetuj',
  nextTurn: 'Koniec Tury',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Gracz',
  minutesLabel: 'min',
  secondsLabel: 'sek',
  expiredLabel: 'KONIEC CZASU',
  overtimeLabel: 'Nadgodziny',
  turnIndicator: 'Twoja Tura',
  warningLowTime: 'Mało czasu',
  pausedOverlay: 'Gra Wstrzymana',
  roundLabel: 'Runda',
  settingsTitle: 'Ustawienia',
  baseTimeLabel: 'Czas bazowy',
  incrementLabel: 'Dodatek/Opóźnienie',
  warningTimeLabel: 'Próg ostrzeżenia',
  confirmLabel: 'Potwierdź',
  cancelLabel: 'Anuluj',
  noPlayersHint: 'Dodaj co najmniej 2 graczy, aby rozpocząć',
  addPlayerHint: 'Wpisz imię gracza',
  timeUpLabel: 'Czas minął!',
  presetsTitle: 'Szablony',
  timeControlTitle: 'Kontrola Czasu',
  modeLabel: 'Tryb',
  modeNormal: 'Zwykłe odliczanie',
  modeFischer: 'Fischer (Dodatek)',
  modeBronstein: 'Bronstein (Opóźnienie)',
  modeHourglass: 'Klepsydra',
  modeTurn: 'Reset Tury',
  audioTitle: 'Ostrzeżenia Audio',
  soundAlerts: 'Efekty Dźwiękowe',
  playersTitle: 'Gracze',
  playersAdded: 'Dodani Gracze',
  statsTitle: 'Statystyki Gry',
  totalGameTime: 'Całkowity Czas',
  totalRounds: 'Suma Rund',
  slowestPlayer: 'Najwolniejszy Gracz',
  playerPerformance: 'Analiza Czasu Graczy',
  playAgain: 'Nowa Gra',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'stoper-do-gier-planszowych-zegar',
  title: 'Stoper do Gier Planszowych: Zegar Szachowy i Zarządzanie Turami',
  description: 'Śledź tury i zarządzaj czasem w swoich grach planszowych za pomocą profesjonalnego stopera. Obsługuje tryb pojedynku, układy wieloosobowe, dodatek Fischera i opóźnienie Bronsteina.',
  ui,
  seo: [
    { type: 'title', text: 'Opanowanie Tempa przy Stole: Jak Profesjonalna Kontrola Czasu Wzbogaca Rozgrywkę', level: 2 },
    { type: 'paragraph', html: 'Zarządzanie czasem to kluczowy element we współczesnych grach planszowych. Niezależnie od tego, czy rywalizujesz w dynamicznej grze towarzyskiej, czy bierzesz udział w głębokiej strategii - regulowanie czasu na namysł gwarantuje, że wszyscy uczestnicy mają sprawiedliwy udział w rozgrywce. Używanie profesjonalnych metod odmierzania czasu, takich jak dodatek Fischera, opóźnienie Bronsteina czy tryb Klepsydry, eliminuje paraliż decyzyjny, gwarantuje płynność gry i dodaje dodatkowy wymiar taktyczny na planszy.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Obsługiwana liczba graczy' },
        { value: '5 trybów', label: 'Konfiguracje czasu' },
        { value: '100ms', label: 'Precyzja silnika' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein i Klepsydra: Wyjaśnienie zaawansowanych trybów czasowych', level: 2 },
    { type: 'paragraph', html: 'Nasz stoper do planszówek obsługuje wiele opcji czasu inspirowanych turniejami, zapewniając płynny przebieg Twoich spotkań przy stole:' },
    {
      type: 'table',
      headers: ['Tryb', 'Jak to działa', 'Najlepszy dla'],
      rows: [
        ['Zwykłe odliczanie', 'Standardowy wspólny zegar odliczający wstecz, który pauzuje na koniec tury.', 'Towarzyskie gry planszowe z ogólną pulą czasu na namysł'],
        ['Fischer (Dodatek)', 'Dodaje określoną liczbę sekund do Twojego zegara po zakończeniu tury.', 'Gry strategiczne typu euro i wargamy, w których szybkie ruchy budują zapas czasu'],
        ['Bronstein (Opóźnienie)', 'Zapewnia okres opóźnienia, podczas którego zegar główny nie odlicza czasu.', 'Złożone gry taktyczne, w których krótkie akcje porządkowe powinny być bezkosztowe'],
        ['Klepsydra', 'Twój czas maleje, podczas gdy czas przeciwnika rośnie w czasie rzeczywistym.', 'Intensywne pojedynki dwuosobowe i turniejowe partie szachów'],
        ['Reset Tury', 'Stały stoper odliczający czas, który resetuje się całkowicie na początku każdej tury.', 'Szybkie gry imprezowe, quizy i szybkie rundy'],
      ],
    },
    {
      type: 'tip',
      title: 'Znajdowanie idealnej konfiguracji czasu',
      html: 'Zalecany punkt startowy to 30-45 sekund dla lekkich gier imprezowych, 1-2 minuty z 5-sekundowym opóźnieniem Bronsteina dla średnich gier strategicznych (euro) oraz 30-45 minut z 10-sekundowym dodatkiem Fischera dla ciężkich gier wojennych lub długich kampanii.',
    },
    {
      type: 'title',
      text: 'Optymalizacja wizualna: Podział ekranu w pojedynkach vs centralny przycisk tury w grze wieloosobowej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W pojedynkach jeden na jednego aplikacja automatycznie wyświetla zegar szachowy na podzielonym ekranie. Taki widok pozwala graczom na obrócenie ich połówki ekranu o 180 stopni, co ułatwia obserwację czasu z przeciwnych stron stołu. W grach na 3 lub więcej osób interfejs zmienia się w siatkę wieloosobową z podświetleniem aktywnego gracza, indywidualnymi kartami oraz dużym centralnym przyciskiem Koniec Tury, który działa jak wspólny fizyczny buzzer na środku stołu.',
    },
    {
      type: 'proscons',
      title: 'Porównanie dodatku Fischera i opóźnienia Bronsteina',
      items: [
        {
          pro: 'Dodatek Fischera nagradza szybkie ruchy poprzez zbieranie zapasu czasu na przyszłe tury.',
          con: 'Całkowity czas gry może się wydłużyć, jeśli gracze stale wykonują bardzo szybkie ruchy.',
        },
        {
          pro: 'Opóźnienie Bronsteina zapobiega utracie czasu podczas szybkich działań administracyjnych bez zbierania olbrzymich rezerw.',
          con: 'Wymaga skonfigurowania progu opóźnienia dopasowanego do fizycznego czasu obsługi elementów gry.',
        },
        {
          pro: 'Tryb Klepsydry buduje bezpośrednie napięcie w pojedynkach, przekazując Twój ubywający czas rywalowi.',
          con: 'Staje się skomplikowany matematycznie i mniej strategiczny przy więcej niż dwóch graczach.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Popularne gatunki gier planszowych, które zyskują dzięki stoperowi',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Strategiczne gry Euro',
          description: 'Gry z mechaniką rozmieszczania robotników i zarządzania zasobami, gdzie tury mają różną złożoność. Dodatek Fischera pomaga podejmować kluczowe decyzje w końcówce bez spowalniania początkowych rund.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Ogranicza paraliż decyzyjny',
            'Dostosowanie do zmiennej złożoności tur',
            'Czas staje się aktywnym zasobem',
          ],
        },
        {
          title: 'Gry Imprezowe & Quizy',
          description: 'Szybkie gry, w których refleks to podstawa zabawy. Stałe stopery z resetem tury utrzymują dynamikę i zapobiegają blokowaniu gry przez jednego gracza.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Krótkie, stałe odliczanie czasu',
            'Podtrzymanie dynamiki imprezy',
            'Zmusza do natychmiastowych działań',
          ],
        },
        {
          title: 'Pojedynki Turniejowe',
          description: 'Ścisła kontrola czasu wymaga dokładnych, obracanych układów ekranu, aby zapewnić uczciwość rywalizacji w każdej rundzie turnieju.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            'Obrót ekranu o 180 stopni',
            'Dokładne śledzenie z interwałem 100 ms',
            'Obsługa nagłej śmierci i dogrywek',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dodatek Fischera',
          definition: 'Metoda kontroli czasu, w której określona liczba sekund jest dodawana do pozostałego czasu gracza po każdym wykonanym ruchu.',
        },
        {
          term: 'Opóźnienie Bronsteina',
          definition: 'Metoda kontroli czasu, w której odliczanie jest wstrzymywane na określony czas na początku tury, zapobiegając ubytkowi czasu przy szybkim ruchu.',
        },
        {
          term: 'Tryb Klepsydry',
          definition: 'Dynamiczny system czasu, w którym sekundy ubywające z zegara jednego gracza trafiają w czasie rzeczywistym na konto przeciwnika.',
        },
        {
          term: 'Paraliż decyzyjny',
          definition: 'Stan nadmiernego analizowania, w którym gracz czuje się przytłoczony opcjami, co spowalnia grę i psuje zabawę innym.',
        },
        {
          term: 'Analiza po rozgrywce',
          definition: 'Wskaźniki wydajności na koniec gry, podsumowujące rundy, średnią prędkość namysłu, najdłuższe tury i ranking najwolniejszych graczy.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Jak działa układ w trybie Pojedynku (Duel)?',
      answer: 'Po uruchomieniu gry dla 2 osób aplikacja wyświetla zegar szachowy na podzielonym ekranie. Każda połówka odpowiada jednemu graczowi, a stuknięcie w nią kończy turę. Ekran można obrócić o 180 stopni dla graczy siedzących naprzeciwko.',
    },
    {
      question: 'Jaka jest różnica między trybami Fischera i Bronsteina?',
      answer: 'Tryb Fischera dodaje sekundy do puli po zakończeniu ruchu, pozwalając na kumulowanie czasu. Tryb Bronsteina daje opóźnienie na początku tury; jeśli skończysz ruch przed jego upływem, czas nie ulegnie zmniejszeniu.',
    },
    {
      question: 'Czy aplikacja śledzi statystyki tur?',
      answer: 'Tak! Po zakończeniu gry lub wyczerpaniu czasu otwiera się okno statystyk zawierające całkowity czas, liczbę rund, średni i maksymalny czas tury oraz ranking szybkości graczy.',
    },
    {
      question: 'Czy moi gracze są zapisywani po odświeżeniu strony?',
      answer: 'Tak, lista graczy wraz z kolorami jest automatycznie zapisywana w pamięci lokalnej przeglądarki, przywracając ustawienia przy kolejnej wizycie.',
    },
    {
      question: 'Czy mogę dodać lub odjąć czas w trakcie gry?',
      answer: 'Tak! W trybie wieloosobowym na kartach graczy znajdują się przyciski +30s i -30s do szybkiej regulacji pozostałego czasu na żywo.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Skonfiguruj parametry gry',
      text: 'Wybierz szablon (Towarzyski, Blitz, Strategiczny, Klepsydra) lub ustaw własne wartości: czas bazowy, dodatek/opóźnienie oraz próg ostrzeżenia.',
    },
    {
      name: 'Dodaj i zapisz graczy',
      text: 'Wpisz imiona graczy i wybierz kolory. Ustal kolejność tur za pomocą strzałek; dane zostaną automatycznie zapisane.',
    },
    {
      name: 'Uruchom grę i zmieniaj tury',
      text: 'Rozpocznij grę. W trybie pojedynku stukaj w swoją połowę ekranu, aby oddać turę. W trybie wieloosobowym klikaj duży centralny przycisk Koniec Tury.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Stoper do Gier Planszowych & Zarządzanie Turami',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak działa układ w trybie Pojedynku (Duel)?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Po uruchomieniu gry dla 2 osób aplikacja wyświetla zegar szachowy na podzielonym ekranie. Każda połówka odpowiada jednemu graczowi, a stuknięcie w nią kończy turę. Ekran można obrócić o 180 stopni dla graczy siedzących naprzeciwko.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jaka jest różnica między trybami Fischera i Bronsteina?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tryb Fischera dodaje sekundy do puli po zakończeniu ruchu, pozwalając na kumulowanie czasu. Tryb Bronsteina daje opóźnienie na początku tury; jeśli skończysz ruch przed jego upływem, czas nie ulegnie zmniejszeniu.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Czy aplikacja śledzi statystyki tur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak! Po zakończeniu gry lub wyczerpaniu czasu otwiera się okno statystyk zawierające całkowity czas, liczbę rund, średni i maksymalny czas tury oraz ranking szybkości graczy.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Czy moi gracze są zapisywani po odświeżeniu strony?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak, lista graczy wraz z kolorami jest automatycznie zapisywana w pamięci lokalnej przeglądarki, przywracając ustawienia przy kolejnej wizycie.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę dodać lub odjąć czas w trakcie gry?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak! W trybie wieloosobowym na kartach graczy znajdują się przyciski +30s i -30s do szybkiej regulacji pozostałego czasu na żywo.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak używać stopera do gier planszowych',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Skonfiguruj parametry gry',
          'text': 'Wybierz szablon (Towarzyski, Blitz, Strategiczny, Klepsydra) lub ustaw własne wartości: czas bazowy, dodatek/opóźnienie oraz próg ostrzeżenia.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Dodaj i zapisz graczy',
          'text': 'Wpisz imiona graczy i wybierz kolory. Ustal kolejność tur za pomocą strzałek; dane zostaną automatycznie zapisane.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Uruchom grę i zmieniaj tury',
          'text': 'Rozpocznij grę. W trybie pojedynku stukaj w swoją połowę ekranu, aby oddać turę. W trybie wieloosobowym klikaj duży centralny przycisk Koniec Tury.'
        }
      ]
    }
  ],
};
