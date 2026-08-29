import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "kreator-tablicy-spiskowej",
  title: "Kreator Tablic Spiskowych: Mapy Dowodów & Relacji RPG Online",
  description: "Projektuj interaktywne tablice spiskowe i mapy śledztwa dla gier fabularnych. Łącz podejrzanych, poszlaki i lokacje kolorowymi nićmi.",
  ui: {
  "title": "Kreator Tablicy Spiskowej",
  "addCard": "Dodaj Kartę",
  "searchPlaceholder": "Szukaj kart po nazwie lub poszlakach",
  "filterAll": "Wszystkie Kategorie",
  "filterCharacter": "Postacie",
  "filterClue": "Poszlaki",
  "filterLocation": "Lokacje",
  "filterItem": "Przedmioty",
  "cardName": "Nazwa Karty",
  "cardCategory": "Kategoria",
  "cardDescription": "Opis",
  "cardNotes": "Prywatne Notatki",
  "cardTags": "Tagi oddzielone przecinkami",
  "cardColor": "Kolor Wyróżnienia Karty",
  "save": "Zapisz Zmiany",
  "delete": "Usuń",
  "cancel": "Anuluj",
  "clearBoard": "Wyczyść Tablicę",
  "connectionsTitle": "Mapa Relacji",
  "addConnection": "Dodaj Połączenie",
  "connectionLabel": "Etykieta Relacji",
  "connectionColor": "Kolor Linii",
  "sourceCard": "Z Karty",
  "targetCard": "Do Karty",
  "close": "Zamknij",
  "character": "Postać",
  "clue": "Poszlaka",
  "location": "Lokacja",
  "item": "Przedmiot",
  "custom": "Niestandardowy",
  "immersive": "Pełny Ekran"
},
  seo: [
    { type: 'title', text: "Kreator Tablic Spiskowych Online: Organizuj Poszlaki RPG i Mapy Relacji", level: 2 },
    { type: 'paragraph', html: "Rozplątywanie skomplikowanej sieci kłamstw, śledzenie alibi podejrzanych i łączenie dowodów z miejsca zbrodni może przytłoczyć każdą grupę RPG. Niezależnie od tego, czy prowadzisz kampanię Zew Cthulhu, cyberpunkowy kryminał, detektywistyczną przygodę w D&D, czy piszesz powieść sensacyjną, nasz kreator tablic spiskowych online to idealne narzędzie. Przeciągaj, upuszczaj, kategoryzuj i łącz poszlaki, NPC oraz dowody na nieskończonej cyfrowej tablicy korkowej. Używaj kolorowych nici relacji, aby natychmiast zobaczyć, jak podejrzani łączą się z miejscami zbrodni, alibi i ukrytymi motywami." },
    {
      type: 'stats',
      items: [
        { value: "Nielimitowane", label: "Tablica Węzłów" },
        { value: "4", label: "Kategorie" },
        { value: "Przeciągnij i Upuść", label: "Interfejs" }
      ],
      columns: 3
    },
    { type: 'title', text: "Wskazówki dotyczące strukturyzacji tablicy śledztwa RPG", level: 2 },
    { type: 'tip', title: "Zasada Trzech Poszlak", html: "Dla każdego wniosku lub dedukcji, którą mają wyciągnąć gracze, dodaj co najmniej trzy różne poszlaki na tablicy śledztwa. Połącz je niestandardowymi kolorowymi nićmi, aby pokazać alternatywne ścieżki rozumowania. Używaj kart Postaci dla podejrzanych i świadków, Lokacji dla miejsc zbrodni oraz Przedmiotów dla dowodów fizycznych. Regularnie aktualizuj notatki." },
    { type: 'title', text: "Cyfrowe Tablice Spiskowe vs Fizyczne Tablice Korkowe", level: 2 },
    {
      type: 'proscons',
      title: "Cyfrowe Tablice Spiskowe vs Fizyczne Tablice Korkowe",
      items: [
        { pro: "Nieskończony rozmiar tablicy pozwala na dodawanie tylu poszlak, podejrzanych i relacji, ile potrzeba bez ograniczeń miejsca.", con: "Wymaga ekranu, tabletu lub innego urządzenia cyfrowego podczas sesji na żywo." },
        { pro: "Błyskawiczne wyszukiwanie i filtry kategorii ułatwiają natychmiastowe zlokalizowanie świadków lub dowodów.", con: "Brak fizycznego odczucia wpinania szpilek i ciągnięcia prawdziwej czerwonej włóczki na ścianie." },
        { pro: "Zapisuj, wczytuj i udostępniaj mapy cyfrowo bez zajmowania fizycznej przestrzeni między sesjami gier.", con: "Wymaga dostępu do internetu lub pamięci lokalnej przeglądarki do zapisywania stanu tablicy." }
      ]
    },
    { type: 'title', text: "Wybór kategorii kart dla Twojej mapy tajemnic", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Węzły Postaci",
          description: "Reprezentują NPC, podejrzanych, świadków lub organizacje. Wyróżniaj relacje kolorowymi liniami.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Śledź alibi i motywy podejrzanych",
            "Łącz więzy rodzinne i powiązania frakcyjne",
            "Zapisuj szczegóły zeznań świadków"
          ]
        },
        {
          title: "Węzły Poszlak",
          description: "Reprezentują dowody fizyczne, raporty z sekcji zwłok, alibi lub plotki odkryte przez graczy.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Raporty z sekcji zwłok i analizy kryminalistyczne",
            "Przedmioty fizyczne znalezione na miejscu zbrodni",
            "Usłyszane plotki i sekrety"
          ]
        },
        {
          title: "Węzły Lokacji",
          description: "Miejsca zbrodni, domy podejrzanych, tajne kryjówki lub miasta.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Zdjęcia i plany miejsca zbrodni",
            "Miejsca zamieszkania kluczowych postaci",
            "Tajne kryjówki i portale"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Słownik pojęć mapowania spisków", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Węzeł Śledztwa", definition: "Dowolna karta na tablicy reprezentująca osobę, lokację, poszlakę lub przedmiot." },
        { term: "Nić Relacji", definition: "Kolorowa linia łącząca dwie karty, wskazująca ich powiązanie (np. podejrzany, alibi, właściciel)." },
        { term: "Tryb Imersyjny", definition: "Układ pełnoekranowy ukrywający panele sterowania, co pozwala zmaksymalizować obszar roboczy na tabletach i telefonach." },
        { term: "Ścieżka Wyróżnienia", definition: "Wizualne wyróżnienie tylko połączonych kart i linii wybranego elementu, przy jednoczesnym przyciemnieniu reszty tablicy." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Wskazówka dotycząca wydajności na urządzeniach mobilnych",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Jeśli przeciąganie węzłów działa wolno na starszych tabletach, włącz tryb pełnoekranowy, aby ukryć menu. Upewnij się, że przyciąganie do siatki jest włączone (karty wyrównują się co 15px), aby utrzymać porządek przy minimalnym wysiłku."
    }
  ],
  faq: [
    { question: "Jak dodać linie połączeń?", answer: "Kliknij Dodaj Połączenie w panelu sterowania lub kliknij ikonę linku na karcie i wybierz kartę docelową." },
    { question: "Czy mogę przeciągać karty na telefonie?", answer: "Tak, tablica obsługuje gesty dotykowe, co umożliwia płynne przeciąganie i przesuwanie kart na smartfonach i tabletach." },
    { question: "Czy mogę używać własnych kolorów kart?", answer: "Tak. Kliknij dwukrotnie kartę, wybierz Custom w kategorii i wybierz swój kolor wyróżnienia." },
    { question: "Czy tablica zapisuje moją pracę?", answer: "Tak. Twój postęp jest zapisywany automatycznie w pamięci lokalnej przeglądarki pod nazwą aktualnej tablicy." },
    { question: "Jak powiększać i przesuwać tablicę?", answer: "Użyj gestu szczypania lub kółka myszy, aby powiększać i pomniejszać. Przeciągaj tło, aby przesuwać tablicę." }
  ],
  bibliography,
  howTo: [
    { name: "Dodaj Karty Śledztwa", text: "Twórz karty reprezentujące NPC, poszlaki, miejsca zbrodni lub przedmioty." },
    { name: "Łącz Relacje", text: "Twórz linie połączeń między kartami, aby pokazać, jak łączą się poszlaki." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Kreator Tablic Spiskowych: Mapy Dowodów & Relacji RPG Online",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Jak dodać linie połączeń?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Kliknij Dodaj Połączenie w panelu sterowania lub kliknij ikonę linku na karcie i wybierz kartę docelową."
          }
        },
        {
          '@type': 'Question',
          'name': "Czy mogę przeciągać karty na telefonie?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Tak, tablica obsługuje gesty dotykowe, co umożliwia płynne przeciąganie i przesuwanie kart na smartfonach i tabletach."
          }
        },
        {
          '@type': 'Question',
          'name': "Czy mogę używać własnych kolorów kart?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Tak. Kliknij dwukrotnie kartę, wybierz Custom w kategorii i wybierz swój kolor wyróżnienia."
          }
        },
        {
          '@type': 'Question',
          'name': "Czy tablica zapisuje moją pracę?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Tak. Twój postęp jest zapisywany automatycznie w pamięci lokalnej przeglądarki pod nazwą aktualnej tablicy."
          }
        },
        {
          '@type': 'Question',
          'name': "Jak powiększać i przesuwać tablicę?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Użyj gestu szczypania lub kółka myszy, aby powiększać i pomniejszać. Przeciągaj tło, aby przesuwać tablicę."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Jak korzystać z Kreatora Tablic Spiskowych",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Dodaj Karty Śledztwa",
          'text': "Twórz karty reprezentujące NPC, poszlaki, miejsca zbrodni lub przedmioty."
        },
        {
          '@type': 'HowToStep',
          'name': "Łącz Relacje",
          'text': "Twórz linie połączeń między kartami, aby pokazać, jak łączą się poszlaki."
        }
      ]
    }
  ]
};
