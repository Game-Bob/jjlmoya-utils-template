import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Tłumacz Run Fantastycznych',
  inputPlaceholder: 'Wpisz słowo lub nazwę do przetłumaczenia...',
  alphabetLabel: 'Alfabet Run',
  elderFuthark: 'Elder Futhark',
  angloSaxon: 'Anglo-Saxon',
  fantasy: 'Skrypt Fantasy',
  theban: 'Theban',
  enochian: 'Henochiański',
  daemonic: 'Demoniczny',
  ogham: 'Ogham',
  translate: 'Tłumacz',
  clear: 'Wyczyść',
  copy: 'Kopiuj Tekst',
  copied: 'Skopiowano!',
  runeName: 'Nazwa',
  runeMeaning: 'Znaczenie',
  runePhonetic: 'Fonetyka',
  clickHint: 'Kliknij runę, aby zobaczyć jej szczegóły',
  outputLabel: 'Wynik Run',
  noInput: 'Wprowadź tekst powyżej, aby przetłumaczyć go na runy',
  unknownChar: '?',
  gmMode: 'Tryb MG',
  exitGmMode: 'Wyjdź',
  gmHint: 'Pokaż to swoim graczom',
  seedLabel: 'Ziarno',
  seedPlaceholder: 'Opcjonalne',
  seedApplied: 'Zablokowane',
  shuffleSeed: 'Losuj',
};

const faq = [
  {
    question: 'Czym jest Elder Futhark?',
    answer: 'Elder Futhark to najstarsza forma alfabetów runicznych, używana przez plemiona germańskie od II do VIII wieku. Składa się z 24 run podzielonych na trzy grupy po osiem, zwane aettir. Każda runa ma wartość fonetyczną i symboliczną nazwę reprezentującą naturalne lub mitologiczne koncepcje.',
  },
  {
    question: 'Jaka jest różnica między Elder Futhark a runami anglosaskimi?',
    answer: 'Anglosaski Futhorc to rozszerzona wersja Elder Futhark opracowana w Anglii. Dodaje dodatkowe runy reprezentujące dźwięki charakterystyczne dla staroangielskiego, rozszerzając się z 24 do 33 znaków. Znaczenia i wartości fonetyczne również zmieniały się z czasem.',
  },
  {
    question: 'Czy ten tłumacz doskonale konwertuje słowa?',
    answer: 'To narzędzie zapewnia transliterację litera po literze na symbole runiczne. Historyczne użycie run było fonetyczne, a nie dosłowne litera po literze, więc wynik jest nowoczesną interpretacją. Opcja Skrypt Fantasy oferuje kreatywny fikcyjny alfabet dla klimatu RPG stołowych.',
  },
  {
    question: 'Czy mogę używać tych run w moich kampaniach RPG stołowych?',
    answer: 'Tak! Mistrzowie gry i gracze mogą używać tłumacza do tworzenia runicznych inskrypcji, magicznych napisów, tajnych wiadomości lub dekoracyjnych nazw dla postaci i lokacji. Opcja Skrypt Fantasy jest zaprojektowana specjalnie dla fantastycznych settingów RPG.',
  },
  {
    question: 'Czy to narzędzie przechowuje wpisywany tekst?',
    answer: 'Nie. Wszystko działa lokalnie w twojej przeglądarce. Żaden tekst, tłumaczenia ani wybory nie są wysyłane na żaden serwer. Twoja twórczość pozostaje całkowicie prywatna.',
  },
  {
    question: 'Co się stanie, gdy kliknę na runę?',
    answer: 'Kliknięcie dowolnej karty runy wyświetla jej tradycyjną nazwę, symboliczne znaczenie i wartość fonetyczną. Pomaga to w nauce run i wyborze odpowiedniego symbolu do potrzeb RPG.',
  },
];

const howTo = [
  {
    name: 'Wprowadź Tekst',
    text: 'Wpisz dowolne angielskie słowo, nazwę lub frazę w polu wprowadzania. Tłumacz działa najlepiej z pojedynczymi słowami lub krótkimi frazami.',
  },
  {
    name: 'Wybierz Alfabet',
    text: 'Wybierz między Elder Futhark (starożytny germański), Anglo-Saxon (średniowieczny angielski) lub Skrypt Fantasy (styl RPG stołowych).',
  },
  {
    name: 'Tłumacz i Odkrywaj',
    text: 'Kliknij Tłumacz, aby przekonwertować tekst. Każda runa pojawia się jako karta. Kliknij dowolną runę, aby poznać jej nazwę, znaczenie i dźwięk. Użyj przycisku Kopiuj, aby zapisać tekst run do schowka.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'tlumacz-run-fantastycznych',
  title: 'Tłumacz Run Fantastycznych / Konwerter Run Elder Futhark, Theban, Henochiańskich and Demonicznych',
  description: 'Tłumacz tekst na pismo Elder Futhark, Anglo-Saxon Futhorc, Theban, Henochiańskie, Demoniczne, Ogham lub Fantasy. Idealne do zagadek RPG stołowych, kampanii, zwojów czarodziejów i mistycznych run.',
  ui,
  seo: [
    { type: 'title', text: 'Alfabety Runiczne i Mistyczne Pisma do Tworzenia Światów RPG', level: 2 },
    { type: 'paragraph', html: 'Mistyczne alfabety runiczne, starożytne symbole i tajemne pisma wnoszą niezrównany realizm do fantastycznych gier RPG stołowych takich jak D&D, Pathfinder i Warhammer. Niezależnie od tego, czy tworzysz ukryte krasnoludzkie ruiny zapisane Elder Futhark, projektujesz arkana księgę zaklęć zawierającą henochiańskie pisma języka aniołów, rozrzucasz wiedźmie wskazówki przy użyciu alfabetu Theban, czy piszesz zakazane demoniczne wiadomości, nasz generator run zamienia zwykły angielski tekst na stylizowane symbole w czasie rzeczywistym. Wzbudź ciekawość graczy za pomocą fizycznych rekwizytów, tajemniczych szyfrów i starożytnych kamiennych rzeźb.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Alfabetów Run' },
        { value: '150+', label: 'Wariantów Symboli' },
        { value: 'Natychmiast', label: 'Transliteracja Wizualna' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Elder Futhark i Anglo-Saxon Futhorc: Starożytne Runy Germańskie i Nordyckie', level: 2 },
    { type: 'paragraph', html: 'Pochodzący z II wieku, Elder Futhark to najstarszy system runiczny składający się z 24 znaków reprezentujących fundamentalne siły natury. Anglo-Saxon Futhorc rozszerzył ten system do 33 znaków dla fonetyki staroangielskiej. Te historyczne symbole są idealne do przedstawiania krasnoludzkich klanów, kultur inspirowanych mitologią nordycką, wikińskich rzeźb i insygniów barbarzyńskich klanów w ustawieniach kampanii RPG.' },
    { type: 'title', text: 'Theban i Ogham: Średniowieczne Alfabety Czarownic i Celtyckie Drzewne', level: 2 },
    { type: 'paragraph', html: 'Często nazywany Runami Honoriusza lub Alfabetem Czarownicy, pismo Theban to historycznie popularny średniowieczny szyfr używany w tradycjach okultystycznych i Wicca. Ogham, wczesnośredniowieczny alfabet, używa liniowych kresek wyrytych wzdłuż krawędzi, słynnie związany z celtyckim folklorem i druidyczną magią drzew. Użyj tych pism, aby ozdobić druidyczne świątynie, elfie lasy, pogańskie ołtarze lub ukryte wiadomości od tajnych sabatów czarownic.' },
    { type: 'title', text: 'Pisma Henochiańskie i Demoniczne: Arkana Języki Anielskie i Otchłani', level: 2 },
    { type: 'paragraph', html: 'Po raz pierwszy zapisany przez Johna Dee i Edwarda Kelleya w XVI wieku, henochiański to szczegółowy skonstruowany język uważany za język aniołów. Demoniczne pisma reprezentują otchłanne glify, mroczne pakty i piekielne znaki. Podnieś stawkę narracyjną swojej kampanii, pozostawiając do odszyfrowania diabelskie kontrakty, rzeźby mrocznych kultów i anielskie relikwie dla twoich czarodziejów, paladynów i kleryków do zbadania.' },
    { type: 'title', text: 'Niestandardowy Skrypt Fantasy: Kreatywne Alfabety Gotowe do Gry', level: 2 },
    { type: 'paragraph', html: 'Dla światów wykraczających poza prawdziwą historię, nasz niestandardowy Skrypt Fantasy oferuje fikcyjny zestaw run zaprojektowany specjalnie, aby przywoływać klasyczną estetykę high fantasy. Każda runa jest zaprojektowana tak, aby wyróżniać się na wydrukach mistrza gry, cyfrowych mapach i niestandardowych tokenach graczy. Połącz go z randomizacjami opartymi na ziarnie, aby uczynić tajne języki unikalnymi dla różnych frakcji, narodów lub starożytnych bogów.' },
  ],
  faq,
  bibliography,
  howTo,
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
      'name': 'Tłumacz Run Fantastycznych',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak Korzystać z Tłumacza Run Fantastycznych',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
