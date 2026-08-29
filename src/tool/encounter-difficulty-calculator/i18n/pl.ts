import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Ustaw drużynę i zagrożenie. Kalkulator ocenia starcie według progów D&D 5e 2014.',
  partySection: 'Drużyna',
  partyLevel: 'Poziom postaci',
  partyLevelHint: 'Użyj średniego poziomu dla drużyny o podobnym poziomie postaci.',
  partySize: 'Postacie',
  partySizeHint: 'Zasady dostosowują mnożnik potworów dla bardzo małych lub dużych grup.',
  threatSection: 'Zagrożenie',
  monsterCr: 'Stopień wyzwania potwora (CR)',
  monsterCrHint: 'Wybierz CR jednego potwora. Grupy mieszane wymagają osobnego obliczenia.',
  moreCr: 'Pokaż wyższe CR',
  lessCr: 'Pokaż mniej CR',
  monsterCount: 'Liczba potworów',
  monsterCountHint: 'Większa liczba stworzeń zwiększa presję akcji nawet przy umiarkowanym XP bazowym.',
  presets: 'Rozpocznij od sceny',
  presetClassic: 'Klasyczny patrol',
  presetBoss: 'Samotny boss',
  presetSwarm: 'Horda słabych wrogów',
  resultSection: 'Presja starcia',
  belowEasyHint: 'Lekka scena pozwalająca zachować zasoby na kolejne wyzwania.',
  easyHint: 'Łatwa scena o niewielkiej presji na drużynę.',
  mediumHint: 'Odczuwalny sprawdzian, który może kosztować punkty życia lub zasoby.',
  hardHint: 'Niebezpieczna scena, w której taktyka i zarządzanie zasobami mają znaczenie.',
  deadlyHint: 'Sygnał śmiertelnej presji. Sprawdź drogi ucieczki i teren.',
  adjustedXp: 'Skorygowany XP',
  baseXp: 'Bazowy XP',
  multiplier: 'Mnożnik grupy',
  partyThreshold: 'Średni próg',
  belowEasy: 'Poniżej łatwego',
  easy: 'Łatwy',
  medium: 'Średni',
  hard: 'Trudny',
  deadly: 'Śmiertelny',
  warning: 'Uwaga',
  partyAdjustment: 'Mnożnik został skorygowany, ponieważ drużyna liczy mniej niż trzy lub więcej niż pięć postaci.',
  highCr: 'Potwór o CR wyższym niż poziom drużyny może szybko powalić postać.',
  manyMonsters: 'Jedenascie lub więcej potworów utrudnia prowadzenie walki.',
  rulesNote: 'Szacunek według zasad D&D 5e 2014. Nie uwzględnia terenu ani taktyki.',
  rulesLinkLabel: 'Przeczytaj zasady źródłowe',
  reset: 'Przywróć przykład',
  xpUnit: 'XP',
  sceneLabel: 'Wizualizacja presji starcia',
  partyMarker: 'Drużyna',
  threatMarker: 'Zagrożenie',
};

const faq = [
  {
    question: 'Jakie zasady wykorzystuje ten kalkulator trudności starć?',
    answer: 'Wykorzystuje oficjalną metodę D&D 5e 2014 z Zasad Podstawowych, porównując progi drużyny ze skorygowanym XP potworów.',
  },
  {
    question: 'Dlaczego skorygowany XP różni się od XP przyznawanego za potwora?',
    answer: 'Zasady mnożą całkowity XP potworów, aby odzwierciedlić zagrożenie wynikające z działania kilku stworzeń w tej samej rundzie.',
  },
  {
    question: 'Czy mogę użyć kalkulatora do mieszanej grupy potworów?',
    answer: 'Używaj go jako szybkiego szacunku dla jednakowych potworów. W przypadku grup mieszanych zsumuj XP każdego stworzenia i zastosuj mnożnik.',
  },
  {
    question: 'Czy śmiertelny wynik oznacza pewną śmierć drużyny?',
    answer: 'Nie. Śmiertelny oznacza, że skorygowany XP osiąga śmiertelny próg w zasadach. Teren, taktyka i czary mogą zmienić rzeczywisty wynik.',
  },
  {
    question: 'Dlaczego wielkość drużyny zmienia mnożnik?',
    answer: 'Zasady zalecają zwiększenie mnożnika dla drużyn liczących mniej niż trzy postacie i zmniejszenie dla grup od sześciu postaci.',
  },
];

const howTo = [
  {
    name: 'Ustaw poziom drużyny',
    text: 'Wybierz średni poziom postaci w drużynie.',
  },
  {
    name: 'Ustaw wielkość drużyny',
    text: 'Podaj liczbę postaci biorących udział w walce.',
  },
  {
    name: 'Opisz zagrożenie',
    text: 'Wybierz stopień wyzwania (CR) i liczbę potworów.',
  },
  {
    name: 'Odczytaj presję',
    text: 'Porównaj skorygowany XP z oficjalnymi progami trudności.',
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
  name: 'Kalkulator Trudności Starć D&D 5e',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Oblicz trudność starć D&D 5e 2014 na podstawie poziomu, wielkości drużyny, CR potworów, liczby i oficjalnych progów.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak obliczyć trudność starcia w D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'kalkulator-trudnosci-starc-dnd-5e',
  title: 'Kalkulator Trudności Starć D&D 5e',
  description: 'Oszacuj presję walki w D&D 5e 2014 za pomocą poziomu drużyny, wielkości, CR potworów, skorygowanego XP i oficjalnych progów.',
  ui,
  seo: [
    { type: 'title', text: 'Oceń trudność walki zanim rzucisz na inicjatywę', level: 2 },
    { type: 'paragraph', html: 'Walka w D&D to coś więcej niż liczba wydrukowana obok potwora. Ten kalkulator przelicza wielkość drużyny, poziom, CR i liczbę potworów na skorygowany XP według Zasad Podstawowych D&D 5e 2014. Wynik wizualny wyraźnie pokazuje, gdzie planowane starcie znajduje się względem progów łatwego, średniego, trudnego i śmiertelnego.' },
    { type: 'title', text: 'Jak działa formuła starć D&D 5e', level: 2 },
    { type: 'paragraph', html: 'Metoda sumuje próg XP każdej postaci dla każdego poziomu trudności, a następnie nakłada mnożnik na łączny XP potworów. Drużyny liczące mniej niż trzy postacie używają kolejnego wyższego mnożnika, podczas gdy grupy liczące sześć lub więcej postaci używają kolejnego niższego mnożnika.' },
    {
      type: 'table',
      headers: ['Sygnał', 'Co warto sprawdzić przy stole'],
      rows: [
        ['Poniżej łatwego', 'Starcie służy jako rozgrzewka lub drobne zużycie zasobów.'],
        ['Łatwy', 'Drużyna powinna wygrać bez większego zużycia zasobów.'],
        ['Średni', 'Spodziewaj się umiarkowanej presji i co najmniej jednej ważnej decyzji o zasobach.'],
        ['Trudny', 'Zaplanuj utratę punktów życia i komórek czarów.'],
        ['Śmiertelny', 'Sprawdź taktykę, teren i drogi ucieczki.'],
      ],
    },
    { type: 'title', text: 'Dlaczego liczba potworów ma kluczowe znaczenie', level: 2 },
    { type: 'paragraph', html: 'Wielu wrogów stwarza większe zagrożenie, niż wynika z ich bazowego XP, ponieważ wykonują więcej ataków i reakcji w tej samej rundzie. Dlatego para stworzeń używa wyższego mnożnika niż jedno stworzenie o tym samym łącznym XP.' },
    { type: 'tip', title: 'Wysoki CR traktuj jako ostrzeżenie', html: 'Potwór o CR wyższym niż poziom drużyny może powalić postać jedną silną akcją. Sprawdź jego obrażenia i efekty kontroli, zamiast polegać wyłącznie na ostatecznym etykiecie trudności.' },
    { type: 'title', text: 'Użyj wyniku jako pomocy w przygotowaniu', level: 2 },
    { type: 'paragraph', html: 'Przed przygotowaniem trudnego lub śmiertelnego starcia oceń teren, zaskoczenie i ogólny stan drużyny. Ciasny pokój, osłona, pułapki i czary koncentracji mogą znacząco zmienić rzeczywiste zagrożenie przy stole.' },
    { type: 'tip', title: 'Mieszane grupy potworów', html: 'Zsumuj bazowy XP każdego stworzenia i zastosuj mnożnik do łącznej liczby potworów.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
