import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Śledzenie Inicjatywy',
  addCombatant: 'Dodawanie Uczestnika',
  removeCombatant: 'Usuń',
  playerLabel: 'Gracz',
  npcLabel: 'NPC',
  initiativeLabel: 'Inicjatywa',
  modifierLabel: 'Modyfikator',
  namePlaceholder: 'Nazwa postaci',
  initiativePlaceholder: 'Inicjatywa',
  modifierPlaceholder: 'Modyfikator',
  addButton: 'Dodaj',
  startCombat: 'Rozpocznij Walkę',
  endCombat: 'Zakończ Walkę',
  nextTurn: 'Następna Tura',
  prevTurn: 'Poprzednia Tura',
  roundLabel: 'Runda',
  turnLabel: 'Tura',
  noCombatants: 'Brak uczestników. Dodaj postacie, aby rozpocząć.',
  statusInput: 'Status',
  combatStarted: 'Walka Rozpoczęta!',
  combatEnded: 'Walka Zakończona',
  yourTurn: 'Tura',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'sledzenie-inicjatywy',
  title: 'Śledzenie Inicjatywy RPG: Kolejność Tur i Menedżer Inicjatywy',
  description: 'Śledź kolejność inicjatywy w każdej erpegi stołowej. Dodawaj uczestników, rzucaj inicjatywę, zarządzaj efektami statusu i nawiguj turami w walce.',
  ui,
  seo: [
    { type: 'title', text: 'Jak Działa Inicjatywa w D&D i Innych RPG Stołowych', level: 2 },
    { type: 'paragraph', html: 'Inicjatywa określa kolejność działań w walce. Każdy uczestnik wykonuje test Zręczności na początku walki, a kolejność tur idzie od najwyższej do najniższej. Cyfrowy tracker inicjatywy automatyzuje sortowanie, podświetla aktywnego uczestnika, śledzi aktywne efekty statusów i informuje cały stół, czyja tura jest następna. Jest to szczególnie przydatne dla Dungeon Masterów prowadzących złożone starcia z wieloma typami wrogów i postaciami graczy.' },
    {
      type: 'stats',
      items: [
        { value: 'Nieograniczone', label: 'Liczba Uczestników' },
        { value: 'Auto Sortowanie', label: 'Według Rzutu Inicjatywy' },
        { value: 'Na Bieżąco', label: 'Śledzenie Tur' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Standardowe Zasady Inicjatywy dla D&D 5e', level: 2 },
    { type: 'paragraph', html: 'W D&D 5. edycji każdy uczestnik wykonuje test Zręczności na początku walki. Gracze rzucają indywidualnie. Dungeon Master rzuca raz dla każdej grupy identycznych potworów. Kolejność tur idzie od najwyższej do najniższej, a następnie zawraca na górę dla następnej rundy. Remisy są rozstrzygane przez wartość Zręczności lub decyzję MG. Cyfrowy tracker obsługuje to wszystko automatycznie i pokazuje pełną kolejność tur na pierwszy rzut oka.' },
    {
      type: 'table',
      headers: ['Funkcja', 'Ręczne Śledzenie', 'Cyfrowy Tracker'],
      rows: [
        ['Sortowanie', 'Przepisywanie listy przy zmianie inicjatywy', 'Natychmiastowe automatyczne sortowanie'],
        ['Obecna Tura', 'Trzeba śledzić ustnie lub za pomocą żetonu', 'Podświetlona na zielono'],
        ['Efekty Statusów', 'Osobna kartka lub kostka przy miniaturce', 'Kliknij, aby włączyć na uczestniku'],
        ['Liczenie Rund', 'Zapamiętywanie lub zapisywanie na kartce', 'Wyświetlane automatycznie'],
        ['Dodawanie w Walce', 'Wymazywanie i przepisywanie kolejności', 'Wstawiane na właściwą pozycję'],
      ],
    },
    {
      type: 'tip',
      title: 'Porady Prowadzenia Inicjatywy przy Stole',
      html: 'Rzuć inicjatywę dla wszystkich potworów przed sesją, aby zaoszczędzić czas podczas walki. Dodawaj popularne efekty statusów, takie jak Ogłuszenie czy Zatrucie, do uczestnika natychmiast po ich zastosowaniu. Zapobiega to zapomnieniu o stanie, gdy nadejdzie tura dotkniętej postaci. Użyj przycisku Poprzednia Tura, aby przejrzeć, co się wydarzyło, jeśli musisz sprawdzić decyzję z wcześniejszej części rundy.' },
    {
      type: 'title',
      text: 'Efekty Statusów Powszechnie Używane w Walce',
      level: 3,
    },
    { type: 'paragraph', html: 'Śledzenie stanów podczas walki to jedno z najczęściej pomijanych zadań. Efekt statusu może całkowicie zmienić skuteczność postaci, a zapomnienie o jego usunięciu może zachwiać balansem starcia. Tracker inicjatywy pozwala dodawać i usuwać stany jednym kliknięciem, dzięki czemu pozostają widoczne obok nazwy uczestnika.' },
    {
      type: 'proscons',
      title: 'Obsługa Efektów Statusów Cyfrowo vs Ręcznie',
      items: [
        {
          pro: 'Stany są widoczne tuż obok nazwy postaci, więc nikt nie zapomni o aktywnym efekcie.',
          con: 'Wymaga pamiętania o włączaniu i wyłączaniu statusów w miarę ich stosowania i usuwania.',
        },
        {
          pro: 'Wiele statusów może być aktywnych na tym samym uczestniku i wszystkie są wyświetlane razem.',
          con: 'Tracker nie egzekwuje automatycznie efektów zasad - MG nadal je stosuje.',
        },
        {
          pro: 'Statusy można dodawać w trakcie walki bez zatrzymywania się na zapis na karcie postaci.',
          con: 'Domyślnie dostępne są tylko predefiniowane tagi statusów.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alternatywne Systemy Inicjatywy',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standardowa Inicjatywa',
          description: 'Każdy uczestnik rzuca raz na początku. Ta sama kolejność powtarza się w każdej rundzie. Prosta i przewidywalna, ale kolejność jest ustalona po pierwszym rzucie. Działa dobrze dla większości grup i rozmiarów starć.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Łatwa do nauczenia i nauczania', 'Stała kolejność tur w każdej rundzie', 'Działa dla dowolnej wielkości grupy'],
        },
        {
          title: 'Inicjatywa Stron',
          description: 'Wszyscy gracze działają razem, a następnie wszyscy wrogowie działają razem. Popularna w starszych edycjach i grach OSR. Przyspiesza walkę poprzez redukcję indywidualnego śledzenia, ale zmniejsza niuanse taktyczne.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Najszybsza rozgrywka walki', 'Wspiera koordynację drużyny', 'Mniejsza różnorodność indywidualnych tur'],
        },
        {
          title: 'Wariant Szybkości',
          description: 'Każdej rundy uczestnicy najpierw deklarują działania, a następnie rzucają inicjatywę zmodyfikowaną przez wybrane działanie. Używane w opcjonalnych zasadach. Tworzy nieprzewidywalną kolejność tur, ale dodaje głębi podejmowaniu decyzji.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Inna kolejność każdej rundy', 'Wybór działania wpływa na czas', 'Więcej decyzji taktycznych na turę'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Słowniczek Trackera Walki',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Inicjatywa',
          definition: 'Test Zręczności rzucany na początku walki w celu określenia kolejności tur. Każdy uczestnik rzuca i działa w kolejności malejącej.',
        },
        {
          term: 'Runda',
          definition: 'Pełny cykl, w którym każdy uczestnik wykonuje jedną turę. Po działaniu ostatniego uczestnika runda się kończy i zaczyna nowa runda od początku kolejności.',
        },
        {
          term: 'Efekt Statusu',
          definition: 'Tymczasowy stan modyfikujący możliwości postaci. Przykłady obejmują Ogłuszenie (nie może działać), Zatrucie (utrudnienie w rzutach) i Oślepienie (ataki mają utrudnienie).',
        },
        {
          term: 'NPC',
          definition: 'Postać Niegrająca kontrolowana przez Dungeon Mastera. W śledzeniu inicjatywy NPC to zazwyczaj wrogowie lub neutralne stworzenia w starciu.',
        },
        {
          term: 'PC',
          definition: 'Postać Gracza kontrolowana przez jednego z graczy przy stole. PC są odróżniane od NPC w trackerze, aby pomóc MG identyfikować przyjazne cele.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kiedy Przerzucać Inicjatywę Każdej Rundzie',
      icon: 'mdi:information-outline',
      badge: 'PORADA MG',
      html: 'Niektórzy MG wolą przerzucać inicjatywę każdej rundy dla nieprzewidywalności, podczas gdy większość zachowuje tę samą kolejność dla prostoty. Jeśli nowy uczestnik dołącza w trakcie walki, rzuć ich inicjatywę i wstaw ich na bieżącą pozycję. Tracker obsługuje to automatycznie. W przypadku starć z bossem rozważ nadanie złoczyńcy stałej inicjatywy na konkretnej wartości, aby walka wydawała się bardziej uporządkowana.',
    },
  ],
  faq: [
    {
      question: 'Jak dodać uczestników do kolejności inicjatywy?',
      answer: 'Wprowadź nazwę postaci, rzut inicjatywy i modyfikator inicjatywy, a następnie kliknij Dodaj. Przełączaj między typami Gracz i NPC, aby wizualnie odróżnić członków drużyny od wrogów na liście.',
    },
    {
      question: 'Co się stanie, gdy kliknę Rozpocznij Walkę?',
      answer: 'Wszyscy uczestnicy są sortowani według inicjatywy od najwyższej do najniższej. Kolejność tur zaczyna się od góry, licznik rund startuje od 1, a aktywny uczestnik jest podświetlony na zielono.',
    },
    {
      question: 'Jak śledzić efekty statusów podczas walki?',
      answer: 'Kliknij tag statusu (Ogłuszenie, Zatrucie, Oślepienie itp.), aby włączyć lub wyłączyć go dla wybranego uczestnika. Aktywne statusy pojawiają się obok nazwy postaci. Przypomina to wszystkim o trwających efektach, gdy nadejdzie tura tego uczestnika.',
    },
    {
      question: 'Czy moje dane walki zostaną zachowane po odświeżeniu strony?',
      answer: 'Tak. Tracker inicjatywy zapisuje stan walki w lokalnym magazynie przeglądarki. Twoi uczestnicy, kolejność tur i efekty statusów pozostają po przeładowaniu strony. Dane są czyszczone po kliknięciu Zakończ Walkę.',
    },
    {
      question: 'Czy mogę wrócić do poprzedniej tury?',
      answer: 'Tak. Przycisk Poprzednia Tura pozwala nawigować wstecz przez kolejność tur. Jest to przydatne do przejrzenia, co wydarzyło się wcześniej w rundzie, lub do poprawienia błędu.',
    },
    {
      question: 'Czy mogę dodawać lub usuwać uczestników podczas walki?',
      answer: 'Tak. Nowi uczestnicy mogą być dodawani w dowolnym momencie i są automatycznie wstawiani na właściwą pozycję na podstawie ich rzutu inicjatywy. Istniejący uczestnicy mogą być usunięci, jeśli opuszczą starcie.',
    },
    {
      question: 'Czy to działa z dowolnym systemem RPG?',
      answer: 'Tak. Tracker działa z każdą erpegią stołową, która używa kolejności tur opartej na inicjatywie. Wprowadź dowolne wartości inicjatywy, których używa twój system - czy to rzut k20 plus Zr dla D&D, czy inny mechanik dla innych gier.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dodaj Uczestników Przed Walką',
      text: 'Wprowadź nazwę każdej postaci, jej rzut inicjatywy i modyfikator. Oznacz jako Gracz lub NPC. Dodaj tylu uczestników, ilu wymaga twoje starcie.',
    },
    {
      name: 'Rozpocznij Walkę, aby Zablokować Kolejność',
      text: 'Kliknij Rozpocznij Walkę, aby posortować wszystkich według inicjatywy i rozpocząć śledzenie tur. Pierwszy uczestnik w kolejności jest podświetlony.',
    },
    {
      name: 'Nawiguj Turami i Śledź Stany',
      text: 'Użyj Następna Tura i Poprzednia Tura, aby poruszać się po kolejności. Stosuj efekty statusów, klikając tagi statusów, aby śledzić stany podczas walki.',
    },
    {
      name: 'Zakończ Walkę po Skończeniu',
      text: 'Kliknij Zakończ Walkę, aby zatrzymać śledzenie tur. Czyści to aktywny stan i resetuje licznik rund, zachowując listę uczestników na następne starcie.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Śledzenie Inicjatywy RPG',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak dodać uczestników?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wprowadź nazwę postaci, rzut inicjatywy i modyfikator inicjatywy, a następnie kliknij Dodaj. Gracze i NPC mogą być przełączani, aby pomóc odróżnić ich na liście.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co się stanie, gdy kliknę Rozpocznij Walkę?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wszyscy uczestnicy są sortowani według inicjatywy (najwyższa pierwsza). Kolejność tur zaczyna się od pierwszego uczestnika, a licznik rund startuje od 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak Korzystać z Trackera Inicjatywy',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dodaj Uczestników',
          'text': 'Wprowadź szczegóły postaci, w tym nazwę, rzut inicjatywy i modyfikator. Przełącz między typami Gracz i NPC przed dodaniem.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Rozpocznij Walkę',
          'text': 'Kliknij Rozpocznij Walkę, aby posortować wszystkich uczestników według inicjatywy i rozpocząć śledzenie kolejności tur.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Zarządzaj Turami',
          'text': 'Użyj Następna Tura i Poprzednia Tura, aby nawigować po kolejności tur. Aktywny uczestnik jest podświetlony na zielono.',
        },
      ],
    },
  ],
};


