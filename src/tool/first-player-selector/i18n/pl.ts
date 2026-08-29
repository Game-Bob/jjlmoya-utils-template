import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Wybór pierwszego gracza',
  instructions: 'Połóż palce na ekranie lub kliknij, aby dodać pinezki',
  tapToSelect: 'Dotknij, aby wybrać',
  winner: 'Zwycięzca wybrany!',
  reset: 'Resetuj',
  start: 'Rozpocznij wybór',
  setupTitle: 'Ustawienia wyboru',
  clearPlayers: 'Usuń wszystkie pinezki',
  fingerMode: 'Tryb palców',
  wheelMode: 'Tryb ruletki',
  presetsTitle: 'Opcje',
  soundOn: 'Dźwięk wł.',
  soundOff: 'Dźwięk wył.',
  playerCountLabel: 'Pinezki / Palce',
};

const faq = [
  {
    question: 'Jak działa tryb palców?',
    answer: 'W trybie palców każdy gracz kładzie palec na ekranie urządzenia mobilnego. Narzędzie wykrywa wszystkie punkty dotyku, wyświetla świecące kolorowe pierścienie wokół nich i automatycznie uruchamia krótkie odliczanie. Po zakończeniu odliczania jeden gracz zostaje podświetlony jako zwycięzca, a pozostali znikają w towarzyszącej eksplozji cząsteczek.',
  },
  {
    question: 'Czy mogę używać tego narzędzia na komputerze stacjonarnym?',
    answer: 'Tak! Jeśli korzystasz z urządzenia bez ekranu dotykowego, narzędzie automatycznie przełącza się na tryb ruletki. Możesz klikać na ekranie, aby umieszczać kolorowe pinezki reprezentujące graczy, a następnie kliknąć przycisk "Rozpocznij wybór", aby uruchomić wirowanie koła.',
  },
  {
    question: 'Ilu graczy może uczestniczyć?',
    answer: 'Narzędzie obsługuje do 10 jednoczesnych graczy. W trybie palców można wykryć do 10 palców jednocześnie. W trybie ruletki możesz umieścić do 10 kolorowych pinezek na ekranie, klikając myszą.',
  },
  {
    question: 'Czy wybór jest naprawdę losowy?',
    answer: 'Tak. Algorytm wyboru wykorzystuje kryptograficzny Math.random() z JavaScript, aby zapewnić bezstronne wyniki. W trybie palców zwycięzca jest wybierany jednostajnie losowo spośród wszystkich wykrytych punktów dotyku. W trybie ruletki koło zwalnia realistycznie przy użyciu fizyki tarcia, a końcowy kąt matematycznie określa zwycięzcę.',
  },
  {
    question: 'Jak usunąć pinezkę gracza w trybie ruletki?',
    answer: 'Wystarczy kliknąć na istniejącą pinezkę, aby ją usunąć. Narzędzie wykrywa kliknięcia w promieniu 30 pikseli od dowolnej umieszczonej pinezki i usuwa ją, umożliwiając dostosowanie składu graczy przed uruchomieniem wirowania.',
  },
  {
    question: 'Czy to narzędzie zbiera lub przesyła jakieś dane?',
    answer: 'Wcale nie. Wszystko działa lokalnie w twojej przeglądarce. Żadne dane o palcach, pozycjach dotyku ani wynikach wyboru nigdy nie są wysyłane na serwer. Twój wieczór gier pozostaje w pełni prywatny.',
  },
  {
    question: 'Czy działa na projektorach lub zewnętrznych ekranach?',
    answer: 'Tak. Tryb ruletki świetnie działa na dużych ekranach i projektorach podczas sesji planszowych. Kontrastowe neonowe efekty wizualne i duży licznik czasu są zaprojektowane tak, aby były widoczne z drugiego końca pokoju.',
  },
  {
    question: 'Dlaczego odliczanie resetuje się, gdy ktoś zdejmie palec?',
    answer: 'To celowe działanie. W trybie palców odliczanie postępuje tylko wtedy, gdy wszyscy gracze trzymają palce nieruchomo na ekranie. Jeśli ktoś zdejmie lub przesunie palec, timer resetuje się, aby upewnić się, że wszyscy są gotowi przed wyborem. Zapobiega to przypadkowym wyzwoleniom.',
  },
  {
    question: 'Czy mogę zmienić dźwięk lub wyciszyć go?',
    answer: 'Tak. Kliknij ikonę głośnika w prawym górnym rogu, aby włączyć lub wyłączyć dźwięk. Narzędzie odtwarza dźwięk tykania podczas odliczania i fanfary przy wyborze zwycięzcy.',
  },
  {
    question: 'Co się stanie, jeśli jest tylko jeden gracz?',
    answer: 'W obu trybach do wyboru wymagane jest co najmniej dwóch graczy. W trybie palców odliczanie nie rozpocznie się, dopóki nie zostaną wykryte co najmniej dwa palce. W trybie ruletki przycisk "Rozpocznij wybór" pozostaje nieaktywny, dopóki nie umieścisz co najmniej dwóch pinezek.',
  },
];

const howTo = [
  {
    name: 'Umieść palce lub pinezki',
    text: 'W trybie palców poproś wszystkich graczy, aby położyli jeden palec na ekranie. W trybie ruletki kliknij w dowolnym miejscu ekranu, aby umieścić pinezki graczy.',
  },
  {
    name: 'Uruchom wybór',
    text: 'W trybie palców wybór rozpoczyna się automatycznie po przytrzymaniu przez kilka sekund. W trybie ruletki kliknij przycisk "Rozpocznij wybór", aby uruchomić wirowanie.',
  },
  {
    name: 'Zobacz zwycięzcę',
    text: 'Zwycięzca jest podświetlany efektem pulsowania, eksplozją cząsteczek i fanfarami dźwiękowymi. Kliknij "Resetuj" lub zdejmij wszystkie palce, aby spróbować ponownie.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'wybor-pierwszego-gracza',
  title: 'Wybór pierwszego gracza: Wybieracz palcowy i ruletka tur',
  description: 'Wybierz, kto zaczyna w twoich grach planszowych za pomocą spektakularnego wybieracza palcowego i interaktywnej ruletki tur.',
  ui,
  seo: [
    { type: 'title', text: 'Sprawiedliwość i strategia: Rozwiązywanie problemu przewagi pierwszego gracza w grach planszowych', level: 2 },
    { type: 'paragraph', html: 'Określenie rozpoczynającego gracza w sesjach planszowych może znacząco wpłynąć na dynamikę gry. W teorii gier przewaga pierwszego gracza (FPA) odnosi się do statystycznej przewagi, jaką gracz wykonujący pierwszy ruch ma nad przeciwnikami. W strategicznych partiach szachów, wargamach i nowoczesnych eurograch, takich jak Agricola czy Puerto Rico, wykonanie pierwszej akcji pozwala graczowi zdobyć kluczowe zasoby lub ustawić pionki, zanim przeciwnicy zdążą zareagować. Aby zminimalizować FPA i zagwarantować zrównoważone pole gry, niezbędna jest niezawodna, bezstronna metoda wyboru. Nasz cyfrowy selektor pierwszego gracza gwarantuje absolutną losowość, umożliwiając grupom graczy natychmiastowe ustalenie kolejności tur i przejście do gry.' },
    {
      type: 'stats',
      items: [
        { value: '100% Losowo', label: 'Bezstronny wybór' },
        { value: '2 Sekundy', label: 'Odliczanie' },
        { value: 'Multitouch', label: 'Kompatybilny z mobilem' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Zasady planszówek a cyfrowe randomizatory: Rewolucja dotykowa', level: 2 },
    { type: 'paragraph', html: 'Wiele współczesnych instrukcji gier planszowych zawiera tematyczne zasady wyboru pierwszego gracza, takie jak "najmłodszy gracz zaczyna", "ostatnia osoba, która była na farmie, zaczyna" czy "najwyższy gracz zaczyna". Choć zabawne w pierwszych partiach, zasady te szybko stają się powtarzalne, statyczne i niesprawiedliwe dla stałych grup graczy. Fizyczne randomizatory, takie jak rzuty kośćmi czy losowanie kart, wydłużają czas przygotowania i są podatne na ludzkie uprzedzenia lub słabe tasowanie. Mechanika wybieracza palcowego rozwiązuje ten problem, oferując szybki, dotykowy randomizator, który wybiera pierwszego gracza w sekundę bez potrzeby używania dodatkowych kart czy kości.' },
    {
      type: 'table',
      headers: ['Metoda wyboru', 'Szybkość i przygotowanie', 'Jakość losowości', 'Najlepsza dla'],
      rows: [
        ['Dowolne zasady z instrukcji', 'Natychmiast, ale powtarzalne', 'Zero losowości po pierwszej grze', 'Gry rodzinne i imprezowe'],
        ['Rzuty kośćmi', 'Wymaga znalezienia i rzucania kośćmi, możliwe remisy', 'Wysoka losowość, ale nużące dla dużych grup', 'Wargamy i RPG'],
        ['Losowanie kart', 'Wymaga tasowania i rozdawania', 'Dobra losowość, ale potrzebne fizyczne karty', 'Deck-buildery i gry karciane'],
        ['Dotykowy wybór palcem', 'Natychmiast, zero przygotowania, animacje wizualne', 'Absolutna algorytmiczna losowość', 'Wszystkie gry planszowe'],
      ],
    },
    {
      type: 'tip',
      title: 'Optymalizacja konfiguracji multitouch',
      html: 'Dla najlepszych wrażeń w trybie palców umieść tablet lub smartfon płasko na środku stołu. Poproś wszystkich graczy, aby wyraźnie położyli jeden palec na ekranie. Odliczanie resetuje się, jeśli gracz uniesie lub przesunie palec, zapobiegając przypadkowym wyborom i zapewniając pełny konsensus przed uruchomieniem selekcji.',
    },
    {
      type: 'title',
      text: 'Wybór narzędzia: Dotykowy wybieracz palcowy a ruletka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W zależności od konfiguracji sprzętu i otoczenia możesz przełączać się między dwoma trybami, zaprojektowanymi w celu maksymalizacji wykorzystania ekranu i dostępności:',
    },
    {
      type: 'proscons',
      title: 'Porównanie trybów wyboru',
      items: [
        {
          pro: 'Tryb palców zapewnia niesamowicie szybkie i dotykowe doświadczenie, umożliwiając jednoczesny dotyk do 10 graczy.',
          con: 'Wymaga ekranu dotykowego, takiego jak smartfon lub tablet.',
        },
        {
          pro: 'Tryb ruletki działa na każdym laptopie, komputerze stacjonarnym lub projektorze, co czyni go idealnym do sesji wirtualnych i zdalnych wieczorów gier.',
          con: 'Wymaga klikania w celu ręcznego umieszczania pinezek przed uruchomieniem wirowania.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Optymalizacja wizualna: Sieci multitouch i zwalniające koła',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Wybór multitouch',
          description: 'Śledzi wiele różnych punktów dotyku na ekranie. Rysuje neonowe sieci połączeń i kurczące się pierścienie odliczania wokół każdego palca, zakończone świątecznym wybuchem.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Jednoczesne śledzenie dotyku',
            'Dotykowe sprawdzanie przytrzymania',
            'Spektakularne eksplozje cząsteczek',
          ],
        },
        {
          title: 'Ruletka',
          description: 'Umieszcza kolorowe pinezki graczy wokół matematycznego centroidu. Uruchamia wirowanie kolorowego koła sektorowego, które zwalnia naturalnie przy użyciu symulowanego tarcia, zanim wyłoni zwycięzcę.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Wyrównanie względem centroidu',
            'Fizyka zwalniania oparta na tarciu',
            'Uniwersalna obsługa myszy na PC',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Przewaga pierwszego gracza (FPA)',
          definition: 'Odchylenie kolejności tur w grach planszowych, w którym rozpoczynający gracz zyskuje statystycznie istotną przewagę w wyborze akcji lub kontroli zasobów.',
        },
        {
          term: 'Protokół wyboru dotykowego',
          definition: 'Interakcja polegająca na dotknięciu i przytrzymaniu, w której wszyscy uczestnicy kładą palce na ekranie dotykowym, dopóki jeden losowy zwycięzca nie zostanie podświetlony.',
        },
        {
          term: 'Fizyka zwalniania',
          definition: 'Procedura animacji matematycznej, która stosuje mnożniki tarcia do wirującego koła w celu symulacji naturalnej bezwładności i budowania napięcia.',
        },
        {
          term: 'Obliczanie centroidu',
          definition: 'Obliczony punkt centralny rozproszonego zestawu współrzędnych pinezek, używany jako oś obrotu dla grafiki koła ruletki.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'Wybór pierwszego gracza i wybieracz palcowy',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the First Player Selector',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
