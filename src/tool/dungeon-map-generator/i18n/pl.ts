import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Wybierz ziarno (seed), ustaw siatkę i wybierz styl architektoniczny. Wygeneruj połączoną mapę do notatek, druku lub wirtualnego stołu (VTT).',
  seedLabel: 'Ziarno mapy (Seed)',
  seedHint: 'Użyj tego samego ziarna przy tych samych ustawieniach, aby odtworzyć dokładnie tę samą mapę.',
  randomSeed: 'Nowe ziarno',
  sizeLabel: 'Rozmiar ekspedycji',
  sizeCompact: 'Jednorazowa sesja (One-shot)',
  sizeSession: 'Zwykła sesja',
  sizeStronghold: 'Duża twierdza',
  fineTuneGrid: 'Precyzyjne strojenie siatki i gęstości',
  columnsLabel: 'Kolumny',
  rowsLabel: 'Wiersze',
  densityLabel: 'Gęstość pomieszczeń',
  densityHint: 'Wyższa gęstość dodaje więcej komnat i powierzchni użytkowej.',
  styleLabel: 'Architektura mapy',
  dungeonStyle: 'Lochy (Dungeon)',
  dungeonStyleHint: 'Kamienne komnaty z wąskimi korytarzami.',
  cavernStyle: 'Jaskinia (Cavern)',
  cavernStyleHint: 'Nieregularne komory o zaokrąglonych krawędziach.',
  scifiStyle: 'Sci-Fi',
  scifiStyleHint: 'Szerokie moduły z podwójnymi korytarzami.',
  generate: 'Rysuj mapę',
  mapRegionLabel: 'Wygenerowana mapa lochów i opcje eksportu',
  connectedBadge: 'Wszystkie komnaty połączone',
  roomsLabel: 'Pokoje',
  doorsLabel: 'Drzwi',
  floorLabel: 'Pokrycie podłogi',
  legendFloor: 'Podłoga do chodzenia',
  legendWall: 'Lita ściana',
  legendDoor: 'Drzwi lub śluza',
  editHint: 'Prawy przycisk myszy na komórce, aby edytować',
  editCell: 'Edytuj tę komórkę',
  paintFloor: 'Podłoga',
  paintWall: 'Ściana',
  paintDoor: 'Drzwi',
  mapData: 'Dane mapy',
  copyLink: 'Kopiuj link do mapy',
  linkCopied: 'Link skopiowany',
  exportPng: 'Pobierz PNG',
  exportSvg: 'Pobierz SVG',
  exportJson: 'Zapisz JSON',
  importJson: 'Otwórz JSON',
  importError: 'Ten plik nie zawiera prawidłowej konfiguracji mapy lochów.',
  compactMap: 'Napięta eksploracja',
  balancedMap: 'Zrównoważona ekspedycja',
  sprawlingMap: 'Otwarta twierdza',
  compactHint: 'Dłuższe przejścia pozostawiają więcej nieznanego obszaru między komnatami.',
  balancedHint: 'Komnaty i korytarze dzielą przestrzeń w sposób zrównoważony.',
  sprawlingHint: 'Duża powierzchnia podłogi sprzyja walkom i szybkiemu przemieszczaniu się.',
  mapReady: 'Legenda mapy',
  dimensionsUnit: 'komórki siatki',
};

const faq = [
  {
    question: 'Czy to samo ziarno zawsze tworzy tę samą mapę?',
    answer: 'Tak. Ziarno, wymiary siatki, gęstość i styl tworzą konfigurację deterministyczną. Ponowne użycie tych samych ustawień generuje identyczną mapę.',
  },
  {
    question: 'Czy wszystkie wygenerowane komnaty są ze sobą połączone?',
    answer: 'Tak. Wszystkie pomieszczenia są łączone w trasę główną, dzięki czemu cała podłoga tworzy jedną połączoną mapę.',
  },
  {
    question: 'Czym różnią się style lochów, jaskini i Sci-Fi?',
    answer: 'Style lochów używają regularnych kamiennych komnat. Jaskinie tworzą nieregularne zaokrąglone komory. Style Sci-Fi wykorzystują szerokie moduły i podwójne śluzy.',
  },
  {
    question: 'Jaki format wyeksportować do wirtualnego stołu (VTT)?',
    answer: 'Format PNG jest najprostszym wyborem dla większości programów VTT. Format SVG zachowuje ostrość w każdej skali i ułatwia edycję wektorową.',
  },
  {
    question: 'Czy inna osoba może odtworzyć moją mapę?',
    answer: 'Tak. Skopiuj link do mapy lub prześlij plik JSON. Odbiorca może natychmiast załadować tę samą konfigurację.',
  },
  {
    question: 'Czy ten generator dodaje potwory, pułapki lub skarby?',
    answer: 'Nie. Tworzy neutralny plan architektoniczny, który Mistrz Gry może samodzielnie uzupełnić według własnych zasad.',
  },
];

const howTo = [
  {
    name: 'Ustaw wymiary siatki',
    text: 'Wybierz liczbę kolumn i wierszy dopasowaną do Twoich notatek lub sceny VTT.',
  },
  {
    name: 'Wybierz architekturę',
    text: 'Wybierz lochy, jaskinię lub Sci-Fi i dostosuj gęstość pomieszczeń.',
  },
  {
    name: 'Wygeneruj i sprawdź',
    text: 'Wpisz ziarno, wygeneruj mapę i przejrzyj podsumowanie pomieszczeń i drzwi.',
  },
  {
    name: 'Eksportuj lub udostępnij',
    text: 'Pobierz PNG lub SVG do gry albo zapisz konfigurację przez link lub plik JSON.',
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
  name: 'Generator Losowych Map Lochów',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Deterministyczny generator map lochów z połączonymi komnatami, drzwiami i eksportem lokalnym.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak wygenerować połączoną mapę lochów',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'generator-losowych-map-lochow',
  title: 'Generator Losowych Map Lochów do Gier RPG',
  description: 'Twórz odtwarzalne mapy lochów, jaskiń i Sci-Fi z połączonymi komnatami, drzwiami oraz eksportem PNG/SVG.',
  ui,
  seo: [
    { type: 'title', text: 'Wygeneruj funkcjonalną mapę lochów za pomocą powtarzalnego ziarna', level: 2 },
    { type: 'paragraph', html: 'Użyteczna mapa lochów wymaga czegoś więcej niż przypadkowego szumu wizualnego. Każda komnata musi być dostępna przez połączone korytarze, siatka musi pasować do powierzchni gry, a wynik musi dawać się łatwo odtworzyć w dowolnym momencie na każdym urządzeniu. Ten generator traktuje ziarno i ustawienia jako zwartą i deterministyczną specyfikację mapy. Zachowując to samo ziarno, kolumny, wiersze, gęstość i styl architektury, w późniejszym czasie odtworzysz dokładnie ten sam plan.' },
    { type: 'title', text: 'Wymiary siatki do druku i wirtualnych stołów (VTT)', level: 2 },
    { type: 'paragraph', html: 'Ustawienie rozmiaru siatki to pierwszy krok praktyczny podczas planowania sesji. Mała siatka jest łatwa do wydrukowania na papierze na krótką przygodę lub jednorazową lokację, podczas gdy duża mapa daje przestrzeń na skomplikowaną eksplorację, starcia taktyczne i wiele frakcji. Wyeksportowany obraz zachowuje idealnie kwadratowe komórki, co ułatwia dopasowanie go do siatki w programach wirtualnego stołu (VTT).' },
    {
      type: 'table',
      headers: ['Rozmiar siatki', 'Typowe zastosowanie', 'Gęstość początkowa', 'Uwaga planistyczna'],
      rows: [
        ['20 na 16 komórek', 'Jednorazowa sesja (One-shot)', '35 do 45', 'Łatwy druk i szybki odczyt wizualny na papierze'],
        ['36 na 26 komórek', 'Sesyjny loch', '45 do 55', 'Zrównoważony rytm komnat i korytarzy'],
        ['52 na 38 komórek', 'Duży kompleks', '50 do 65', 'Dużo miejsca na frakcje i drogi opcjonalne'],
      ],
    },
    { type: 'tip', title: 'Dopasuj mapę do skali starć', html: 'Oblicz komórki potrzebne na kluczowe walki przed wybraniem całkowitego rozmiaru. Duży loch z ciasnymi pokojami sprawi wrażenie dusznego, podczas gdy kompaktowa mapa z jedną dużą salą główną sprzyja zapamiętywalnym scenom.' },
    { type: 'title', text: 'Interpretuj pokrycie podłogi jako tempo rozgrywki', level: 2 },
    { type: 'paragraph', html: 'Pokrycie podłogi wskazuje procent powierzchni prostokątnego płótna przeznaczonej do chodzenia. Niska gęstość buduje napięcie, izolację i niepewność między pomieszczeniami. Średnie pokrycie wspiera stały rytm ekspedycji. Wysoka gęstość tworzy kompleks twierdzy, w którym starcia i patrole mogą szybko rozprzestrzeniać się na sąsiednie komnaty.' },
    {
      type: 'list',
      items: [
        '<strong>Napięta eksploracja:</strong> wykorzystaj wolną przestrzeń do sugerowania tajemnic lub ukrytych przejść.',
        '<strong>Zrównoważona ekspedycja:</strong> przeplataj komnaty badawcze korytarzami i salami walki.',
        '<strong>Otwarta twierdza:</strong> przygotuj proste linie wzroku i połączone trasy patroli.',
      ],
    },
    { type: 'title', text: 'Zmień neutralny plan w miejsce przygody', level: 2 },
    { type: 'paragraph', html: 'Wygenerowana mapa daje celowo tylko podstawową architekturę. Przypisz rolę fabularną do każdego ważnego pomieszczenia i rozmieść wskazówki, pułapki, stwory i skarby zgodnie z tym celem. Używaj drzwi jako strategicznych punktów decyzyjnych dla graczy.' },
    { type: 'tip', title: 'Zapisz konfigurację przed dodaniem notatek', html: 'Skopiuj link lub zapisz JSON przed zanotowaniem szczegółów, aby zachować czystą wersję dla graczy bez ujawniania sekretów Mistrza Gry.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
