import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Licznik Punktów',
  addPlayer: 'Dodaj Gracza',
  removePlayer: 'Usuń',
  renamePlayer: 'Zmień nazwę',
  startRound: 'Rozpocznij Rundę 1',
  nextRound: 'Następna Runda',
  resetGame: 'Resetuj Grę',
  undoRound: 'Cofnij Ostatnią Rundę',
  playerLabel: 'Gracz',
  scoreLabel: 'Punkty',
  roundLabel: 'Runda',
  totalLabel: 'Suma',
  rankLabel: 'Pozycja',
  leaderboardTitle: 'Tablica Wyników',
  historyTitle: 'Historia Punktów',
  noPlayersHint: 'Dodaj graczy, aby rozpocząć zliczanie punktów',
  playerNamePlaceholder: 'Nazwa gracza',
  confirmLabel: 'Potwierdź',
  cancelLabel: 'Anuluj',
  deleteRoundConfirm: 'Usunąć ostatnią rundę?',
  playerAdded: 'Gracz dodany',
  playerRemoved: 'Gracz usunięty',
  roundStarted: 'Runda rozpoczęta',
  gameReset: 'Gra została zresetowana',
  noRoundsYet: 'Nie zapisano jeszcze żadnych rund',
  currentRoundLabel: 'Bieżąca Runda',
  scoringTitle: 'Punktowanie Rundy',
  resetAllLabel: 'Resetuj Wszystko',
  confirmResetAll: 'Spowoduje to usunięcie wszystkich graczy i punktów. Jesteś pewien?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'licznik-punktow',
  title: 'Licznik Punktow: Wieloosobowy Wynikowy i Menadzer Rankingu',
  description: 'Śledź wyniki w dowolnej grze planszowej. Dodawaj graczy, zapisuj punkty runda po rundzie i obserwuj, jak tablica wyników aktualizuje się w czasie rzeczywistym z automatycznym rankingiem.',
  ui,
  seo: [
    { type: 'title', text: 'Punktowanie w Grach Planszowych: Jak Śledzić Wyniki Bez Błędów', level: 2 },
    { type: 'paragraph', html: 'Punktowanie w grach planszowych wydaje się proste, dopóki nie jesteś pięć rund w grze i ktoś nie zorientuje się, że źle policzył. Niezależnie czy grasz w Wingspan, Terraforming Mars, Catan czy jakąkolwiek grę na punkty zwycięstwa, dokładne punktowanie to różnica między uczciwą grą a kłótnią. Cyfrowy licznik punktów eliminuje błędy arytmetyczne, pokazuje na żywo rankingi i przechowuje pełną historię każdej rundy, abyś mógł zweryfikować końcowe podsumowanie.' },
    {
      type: 'stats',
      items: [
        { value: 'Nieograniczeni', label: 'Obsługiwani gracze' },
        { value: 'Na Żywo', label: 'Aktualizacje rankingu' },
        { value: 'Nieograniczone', label: 'Zapisane rundy' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Częste Błędy w Punktowaniu i Jak Ich Unikać', level: 2 },
    { type: 'paragraph', html: 'Najczęstszym błędem jest zapomnienie o dodaniu bonusów na koniec rundy lub błędne zsumowanie kolumny liczb. Gdy śledzisz wyniki cyfrowo, bieżąca suma aktualizuje się automatycznie po każdym wpisie. Oznacza to, że możesz wychwycić błąd w momencie, gdy liczba wygląda podejrzanie, zamiast odkrywać go na końcu gry, gdy nikt nie pamięta prawidłowej wartości. Funkcja historii rund pozwala sprawdzić dowolną poprzednią rundę i poprawić błędy bez restartowania całej gry.' },
    {
      type: 'tip',
      title: 'Szybkie Wskazówki Dotyczące Punktowania',
      html: 'Wprowadzaj wyniki natychmiast po zakończeniu każdej rundy, gdy wszyscy jeszcze pamiętają rezultaty. Używaj opisowych etykiet graczy, takich jak kolory lub nazwy frakcji, zamiast prawdziwych nazwisk w grach z ukrytymi rolami. Podczas gry z dziećmi pozwól im samodzielnie naciskać przyciski, aby pozostały zaangażowane w proces punktowania.',
    },
    {
      type: 'title',
      text: 'Punktowanie za Rundę vs Tylko Wynik Końcowy',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Punkty za Rundę vs Tylko Wynik Końcowy',
      items: [
        {
          pro: 'Możesz zobaczyć, kto prowadził na każdym etapie gry i jak zmieniała się dynamika.',
          con: 'Wymaga wprowadzania danych po każdej rundzie, zamiast raz na końcu.',
        },
        {
          pro: 'Błędy są łatwe do zlokalizowania, ponieważ możesz porównać wpisy poszczególnych rund z pamięcią.',
          con: 'Wymaga nieco więcej czasu podczas sesji gry.',
        },
        {
          pro: 'Gracze mogą weryfikować własne wyniki rund, co zmniejsza spory i buduje zaufanie.',
          con: 'Działa najlepiej, gdy jedna osoba zarządza urządzeniem lub gracze robią to na zmianę.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Gry z Nietypowymi Systemami Punktowania',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Gry na Punkty Zwycięstwa',
          description: 'Większość eurogier używa punktów zwycięstwa przyznawanych w trakcie gry. Wyzwaniem jest śledzenie wielu źródeł PZ: zasobów, osiągnięć, bonusów końcowych. Cyfrowy licznik pozwala wprowadzać punkty na bieżąco i widzieć bieżącą sumę.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Śledzenie wielu kategorii punktów',
            'Obliczanie bonusów końcowych',
            'Natychmiastowe rozstrzyganie remisów',
          ],
        },
        {
          title: 'Gry z Punktami Ujemnymi',
          description: 'Niektóre gry karzą graczy ujemnymi punktami za określone działania. Cyfrowy licznik punktów naturalnie obsługuje wartości ujemne, wyświetlając je na czerwono, aby kara była natychmiast widoczna. Jest to szczególnie przydatne w grach lewowych lub grach dedukcyjnych z mechaniką kar.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Automatyczna obsługa wartości ujemnych',
            'Wizualne wskaźniki kar',
            'Dokładne sumy skumulowane',
          ],
        },
        {
          title: 'Gry Kampanijne',
          description: 'Gry legacy i kampanijne przenoszą wyniki przez wiele sesji. Bez licznika musisz prowadzić papierowe notatki między spotkaniami. Cyfrowe narzędzie utrzymuje wyniki kampanii w porządku i pozwala przejrzeć, jak twoje decyzje wpłynęły na ogólną klasyfikację.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Trwałe śledzenie kampanii',
            'Porównanie między sesjami',
            'Podział sesja po sesji',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Słowniczek Punktowania',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Punkty Zwycięstwa (PZ)',
          definition: 'Standardowa jednostka punktacji w większości nowoczesnych gier planszowych. Gracze zdobywają PZ poprzez akcje, a ten kto ma najwięcej PZ na koniec gry wygrywa.',
        },
        {
          term: 'Punktowanie za Rundę',
          definition: 'Zapisywanie wyników na koniec każdej rundy, a nie tylko na koniec gry. Tworzy to szczegółową historię i ułatwia sprawdzanie błędów.',
        },
        {
          term: 'Tablica Wyników',
          definition: 'Ranking na żywo pokazujący pozycję każdego gracza na podstawie całkowitego wyniku. Tablica wyników automatycznie się przestawia po wprowadzeniu nowych punktów.',
        },
        {
          term: 'Punktowanie Ujemne',
          definition: 'System punktacji, w którym gracze mogą tracić punkty przez kary lub nieudane akcje, co prowadzi do ujemnych sum. Cyfrowy licznik obsługuje to bez błędów ręcznego odejmowania.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Jak Postępować w Przypadku Spornych Wyników',
      icon: 'mdi:information-outline',
      badge: 'WSKAZÓWKA GRY',
      html: 'Gdy gracz kwestionuje wynik, nie zmieniaj go od razu. Najpierw sprawdź historię rund, aby potwierdzić, co zostało wprowadzone. Jeśli wpis jest błędny, użyj przycisków +/-, aby go poprawić, a suma zaktualizuje się automatycznie. Jeśli wpis rundy jest poprawny, ale gracz się nie zgadza, historia dostarcza obiektywnego zapisu, który wszyscy mogą wspólnie przejrzeć.',
    },
  ],
  faq: [
    {
      question: 'Ilu graczy mogę śledzić?',
      answer: 'Nie ma ograniczeń. Dodaj tylu graczy, ile obsługuje twoja gra, i zmieniaj im nazwy w dowolnym momencie podczas sesji.',
    },
    {
      question: 'Czy mogę cofnąć błąd?',
      answer: 'Tak. Użyj przycisku Cofnij Ostatnią Rundę, aby usunąć najnowszą rundę wyników, co automatycznie przeliczy wszystkie sumy i rankingi.',
    },
    {
      question: 'Czy licznik punktów zapisuje moje dane?',
      answer: 'Licznik punktów działa w całości w twojej przeglądarce. Dane są przechowywane w bieżącej sesji. Odświeżenie strony spowoduje zresetowanie wszystkich wyników.',
    },
    {
      question: 'Jak działa tablica wyników?',
      answer: 'Tablica wyników sortuje graczy według całkowitego wyniku malejąco. Rankingi aktualizują się automatycznie podczas wprowadzania lub modyfikowania wyników w każdej rundzie.',
    },
    {
      question: 'Czy mogę śledzić ujemne wyniki?',
      answer: 'Tak. Przyciski +/- umożliwiają zarówno dodatnie, jak i ujemne korekty, co czyni go odpowiednim do gier z punktami karnymi lub mechaniką odejmowania.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dodaj Graczy',
      text: 'Wprowadź nazwy graczy za pomocą pola Dodaj Gracza. Możesz dodawać lub usuwać graczy w dowolnym momencie podczas gry.',
    },
    {
      name: 'Rozpocznij Punktowanie',
      text: 'Kliknij Rozpocznij Rundę, aby rozpocząć nową rundę punktowania. Użyj przycisków +/-, aby dostosować wynik każdego gracza w tej rundzie.',
    },
    {
      name: 'Zobacz Rankingi',
      text: 'Tablica wyników aktualizuje się automatycznie. Przeglądaj zakładkę Historia Punktów, aby sprawdzić wpisy z poprzednich rund.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Licznik Punktów & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ilu graczy mogę śledzić?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nie ma ograniczeń. Dodaj tylu graczy, ile obsługuje twoja gra, i zmieniaj im nazwy w dowolnym momencie podczas sesji.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę cofnąć błąd?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Użyj przycisku Cofnij Ostatnią Rundę, aby usunąć najnowszą rundę wyników, co automatycznie przeliczy wszystkie sumy i rankingi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy licznik punktów zapisuje moje dane?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Licznik punktów działa w całości w twojej przeglądarce. Dane są przechowywane w bieżącej sesji. Odświeżenie strony spowoduje zresetowanie wszystkich wyników.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jak działa tablica wyników?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tablica wyników sortuje graczy według całkowitego wyniku malejąco. Rankingi aktualizują się automatycznie podczas wprowadzania lub modyfikowania wyników w każdej rundzie.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę śledzić ujemne wyniki?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Przyciski +/- umożliwiają zarówno dodatnie, jak i ujemne korekty, co czyni go odpowiednim do gier z punktami karnymi lub mechaniką odejmowania.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak Korzystać z Licznika Punktów',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dodaj Graczy',
          'text': 'Wprowadź nazwy graczy za pomocą pola Dodaj Gracza. Możesz dodawać lub usuwać graczy w dowolnym momencie podczas gry.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Rozpocznij Punktowanie',
          'text': 'Kliknij Rozpocznij Rundę, aby rozpocząć nową rundę punktowania. Użyj przycisków +/-, aby dostosować wynik każdego gracza w tej rundzie.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Zobacz Rankingi',
          'text': 'Tablica wyników aktualizuje się automatycznie. Przeglądaj zakładkę Historia Punktów, aby sprawdzić wpisy z poprzednich rund.',
        },
      ],
    },
  ],
};
