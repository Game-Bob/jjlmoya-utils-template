import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'kalkulator-faz-ksiezyca',
  title: 'Kalkulator faz księżyca do RPG stołowych: Śledź niestandardowe księżyce fantasy i cykle pływów',
  description: 'Oblicz fazy księżyca dla dowolnego fantastycznego świata z niestandardowymi okresami orbitalnymi. Śledź wiele księżyców jednocześnie, zobacz 10-dniowe prognozy i uzyskaj poziom połączonego pływu dla systemów magii i pogody w D&D, Pathfinder lub dowolnym RPG.',
  ui: {
    title: 'Śledzenie faz księżyca i mistycznego pływu',
    moonsTitle: 'Konfiguracja księżyców',
    addMoon: 'Dodaj niestandardowy księżyc',
    removeMoon: 'Usuń księżyc',
    moonName: 'Nazwa księżyca',
    orbitalPeriod: 'Okres orbitalny (dni)',
    startingOffset: 'Przesunięcie początkowe (dni)',
    timelineTitle: 'Sterowanie czasem',
    currentDay: 'Bieżący dzień kampanii',
    tideTitle: 'Stan mistycznego pływu',
    tideLevel: 'Poziom energii pływu',
    magicModifier: 'Efekt magicznego pływu',
    forecastTitle: 'Prognoza faz księżyca i pływów',
    dayLabel: 'Dzień',
    resetButton: 'Resetuj do dnia 0',
    presetTitle: 'Gotowe ustawienia kampanii',
    presetSingle: 'Klasyczny księżyc',
    presetDouble: 'Bliźniacze księżyce magii',
    presetTriple: 'Królestwo potrójnego zaćmienia',
    newMoon: 'Nów',
    waxingCrescent: 'Sierp przybywający',
    firstQuarter: 'Pierwsza kwadra',
    waxingGibbous: 'Przybywający garbaty',
    fullMoon: 'Pełnia',
    waningGibbous: 'Ubywający garbaty',
    lastQuarter: 'Ostatnia kwadra',
    waningCrescent: 'Sierp ubywający',
  },
  seo: [
    { type: 'title', text: 'Jak śledzić fazy księżyca w kampanii fantasy RPG', level: 2 },
    { type: 'paragraph', html: 'Wi�kszość fantastycznych światów ma księżyce o okresach orbitalnych różniących się od rzeczywistego 29,5-dniowego cyklu księżycowego. Pole <strong>Okres orbitalny</strong> określa, ile dni w grze zajmuje księżycowi pełny cykl. Ziemski księżyc potrzebuje 29 dni; świat Eberron używa 28; Śródziemie Tolkiena ma cykl księżycowy bliski 30. Ustaw to zgodnie z wiedzą o swoim świecie lub wybierz dowolną liczbę od 5 do 60 dni, która daje pożądaną częstotliwość zaćmień.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Śledzonych księżyców jednocześnie' },
        { value: '10', label: 'Zasięg prognozy dni' },
        { value: '5', label: 'Stanów pływu (od kwadratury do syzygium)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Zrozumienie pola przesunięcia początkowego', level: 2 },
    { type: 'paragraph', html: 'Pole <strong>Przesunięcie początkowe</strong> określa, w której fazie znajduje się księżyc w dniu 0 kampanii. Przesunięcie równe 0 oznacza, że księżyc zaczyna w nowiu. Przesunięcie równe połowie okresu orbitalnego zaczyna go w pełni. Użyj tego, aby dopasować fazę opisaną w scenie otwierającej kampanię lub aby dwa księżyce zaczynały w różnych pozycjach i nie zawsze były zrównane.' },
    { type: 'title', text: 'Co poziom pływu oznacza dla twojej gry', level: 2 },
    { type: 'paragraph', html: 'Poziom pływu łączy przyciąganie grawitacyjne wszystkich aktywnych księżyców na podstawie ich bieżących faz. <strong>Syzygium</strong> (powyżej 75%) występuje, gdy księżyce są prawie zrównane w pełni lub nowiu, ciągnąc w tym samym kierunku. <strong>Kwadratura</strong> (poniżej 30%) ma miejsce, gdy księżyce są w przeciwnych fazach, częściowo znosząc się nawzajem. Możesz to powiązać bezpośrednio z dowolnym systemem mechanicznym: premią do ST rzutów obronnych na czary, czasem trwania dzikiej postaci druida, progami przemiany wilkołaka lub siłą burz na mapach przybrzeżnych.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pojedynczy księżyc',
          description: 'Najlepsze dla światów bliskich rzeczywistości lub z jednym dominującym księżycem. Prosty 8-fazowy cykl, łatwy do śledzenia bez odnośników.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'Dobre dla D&D Zapomniane Krainy (Selune, 30 dni)',
            'Kampanie z wilkołakami i likantropami',
            'Sesje grozy związane z pełnią księżyca'
          ]
        },
        {
          title: 'Bliźniacze księżyce',
          description: 'Częste w wysokiej fantasy. Tworzy częste częściowe zrównania i ciekawe pływy w środku cyklu. Zrównania występują mniej więcej co NWW(okres1, okres2) dni.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28d + Aryth 12d)',
            'Tworzy przewidywalne sezony zaćmień',
            'Dobre dla druidzkich lub żywiołowych systemów magii'
          ]
        },
        {
          title: 'Potrójne księżyce',
          description: 'Rzadkie potrójne zrównania tworzą nieprzewidywalne skoki. Połączony pływ staje się chaotyczny i trudny do przewidzenia bez tego narzędzia, co czyni go dramatycznie użytecznym.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Tabele dzikiej magii przy zrównaniu',
            'Złożoność w stylu Golarion z Pathfindera',
            'Cyklie długookresowe dla epickich kampanii'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Typowe okresy orbitalne dla fantastycznych światów', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Zapomniane Krainy)', definition: '30-dniowy okres orbitalny, pojedynczy księżyc. Użyj przesunięcia 15, aby zacząć od pełni na pierwszej sesji.' },
        { term: 'Księżyce Eberronu', definition: 'Eberron ma 12 księżyców z okresami od 9 do 28 dni. Uruchom każdy jako osobny księżyc lub wybierz dwa najbardziej istotne dla fabuły.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion ma jeden księżyc, Somal, z 29-dniowym cyklem. Wydarzenia Mrocznej Tkaniny można modelować, ustawiając drugi księżyc z krótkim okresem i przesunięciem zakłócającym.' },
        { term: 'Niestandardowy świat', definition: '15-dniowy księżyc daje 24 pełnie rocznie. 45-dniowy księżyc daje około 8. Krótsze okresy oznaczają częstsze zaćmienia, ale zmniejszają ich wagę narracyjną.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wskazówka: Ustawienie konkretnej fazy na pierwszą sesję',
      icon: 'mdi:information-outline',
      badge: 'WSKAZÓWKA',
      html: 'Jeśli twoja kampania zaczyna się od sierpa, ustaw przesunięcie na około 20% okresu orbitalnego. Aby zacząć od pełni, użyj 50% okresu jako przesunięcia. Na przykład 28-dniowy księżyc zaczynający w pełni użyje przesunięcia 14. Przesuń licznik dni do bieżącego dnia kampanii, a prognoza automatycznie pokaże następne 10 dni.'
    }
  ],
  faq: [
    { question: 'Jaki okres orbitalny powinienem użyć dla mojego fantastycznego świata?', answer: 'Jeśli twoje ustawienie nie określa jednego, 28 do 30 dni działa dobrze dla pojedynczego księżyca. Dla wielu księżyców wybierz okresy, które nie są prostymi wielokrotnościami siebie nawzajem (np. 20 i 27), aby zrównania nie powtarzały się zbyt często. Krótsze okresy (10 do 15 dni) działają dobrze dla drugorzędnych księżyców tworzących częste niewielkie pływy.' },
    { question: 'Jak sprawić, aby dwa księżyce zrównały się w konkretnym momencie kampanii?', answer: 'Ustaw obu księżycom tę samą wartość przesunięcia. Zaczną w tej samej fazie w dniu 0 i zrównają się ponownie przy każdej wspólnej wielokrotności ich dwóch okresów. Aby je rozstawić, daj drugiemu księżycowi przesunięcie równe połowie jego okresu orbitalnego, aby zaczęły naprzeciw siebie.' },
    { question: 'Co oznacza syzygium w kontekście gry?', answer: 'Syzygium oznacza, że wszystkie aktywne księżyce ciągną w zrównaniu, wytwarzając maksymalną energię pływową. Możesz tego użyć do wyzwalania dzikiej magii, zwiększenia zasięgu leczenia, pogorszenia siły burz lub oznaczenia jako świętej nocy dla frakcji religijnych w twoim świecie.' },
    { question: 'Co oznacza kwadratura w kontekście gry?', answer: 'Kwadratura występuje, gdy księżyce częściowo znoszą się nawzajem. To dobry moment na efekty antymagiczne, martwą ciszę na morzu lub dla złoczyńców, którzy potrzebują przewidywalnego tłumienia magii do wykonania swoich planów.' },
    { question: 'Czy mogę tego użyć do Call of Cthulhu lub kampanii grozy?', answer: 'Tak. Użyj pojedynczego 29-dniowego księżyca i ustaw przesunięcie tak, aby pełnia wypadała na punkt kulminacyjny sesji. Śledzenie pływów może reprezentować wpływy Mitów lub szczyty wrażliwości psychicznej skalujące się z procentem fazy.' },
    { question: 'Jak działa 10-dniowa prognoza?', answer: 'Prognoza pokazuje fazę księżyca każdego aktywnego księżyca jako kolorową kropkę dla każdego z następnych 10 dni kampanii, zaczynając od bieżącego dnia. Procent poniżej każdej kolumny dnia to połączony poziom pływu. Dni z wysokim procentem są dobrymi kandydatami na dramatyczne spotkania związane z magią lub pogodą.' },
    { question: 'Czy mogę śledzić księżyc z bardzo krótkim cyklem, np. 7 dni?', answer: 'Tak. Ustaw okres orbitalny na 7. Księżyc ukończy pełny cykl co tydzień czasu w grze, przechodząc przez wszystkie 8 faz. Jest to przydatne dla światów kampanii, w których magia księżycowa resetuje się co tydzień, lub do śledzenia małego ciała przypominającego kometę, które regularnie przechodzi.' },
    { question: 'Jak dopasować fazę księżyca z opublikowanego modułu przygody?', answer: 'Sprawdź dzień kampanii w przygodzie i zanotuj opisaną fazę. Policz, ile dni cyklu to odpowiada, podziel przez okres orbitalny i użyj tego jako przesunięcia. Na przykład pierwsza kwadra w dniu 0 28-dniowego cyklu oznacza przesunięcie 7 (jedna czwarta z 28).' }
  ],
  bibliography,
  howTo: [
    { name: 'Ustaw okres orbitalny', text: 'Wprowadź liczbę dni w grze, jaką twój księżyc potrzebuje na pełny cykl. Skorzystaj z wiedzy o swoim świecie lub wybierz wartość między 5 a 60.' },
    { name: 'Ustaw przesunięcie początkowe', text: 'Przesuń fazę początkową, wprowadzając przesunięcie w dniach. Przesunięcie 0 zaczyna od nowiu. Połowa okresu orbitalnego zaczyna od pełni.' },
    { name: 'Przesuń licznik dni', text: 'Użyj przycisków krokowych lub suwaka, aby przejść do bieżącego dnia kampanii i odczytać fazę oraz poziom pływu w czasie rzeczywistym.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator faz księżyca do RPG stołowych: Śledź niestandardowe księżyce fantasy i cykle pływów',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jaki okres orbitalny powinienem użyć dla mojego fantastycznego świata?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jeśli twoje ustawienie nie określa jednego, 28 do 30 dni działa dobrze dla pojedynczego księżyca. Dla wielu księżyców wybierz okresy, które nie są prostymi wielokrotnościami siebie nawzajem, aby zrównania nie powtarzały się zbyt często.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Co oznacza syzygium w kontekście gry?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Syzygium oznacza, że wszystkie aktywne księżyce ciągną w zrównaniu. Użyj tego do wyzwalania dzikiej magii, zwiększenia zasięgu leczenia, pogorszenia siły burz lub oznaczenia jako świętej nocy dla frakcji religijnych.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jak sprawić, aby dwa księżyce zrównały się w konkretnym momencie kampanii?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ustaw obu księżycom tę samą wartość przesunięcia. Zrównają się ponownie przy każdej wspólnej wielokrotności ich dwóch okresów orbitalnych. Aby je rozstawić, daj drugiemu księżycowi przesunięcie równe połowie jego okresu orbitalnego.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jak działa 10-dniowa prognoza?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Prognoza pokazuje fazę księżyca każdego aktywnego księżyca jako kolorową kropkę dla każdego z następnych 10 dni kampanii. Pokazany procent to połączony poziom pływu. Dni z wysokim procentem to kandydaci na dramatyczne spotkania magiczne lub pogodowe.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę tego użyć do Call of Cthulhu lub kampanii grozy?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Użyj pojedynczego 29-dniowego księżyca i ustaw przesunięcie tak, aby pełnia wypadała na punkt kulminacyjny sesji. Śledzenie pływów może reprezentować wpływy Mitów lub szczyty wrażliwości psychicznej skalujące się z procentem fazy.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jak dopasować fazę księżyca z opublikowanego modułu przygody?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zanotuj opisaną fazę i policz, ile dni cyklu to odpowiada. Podziel przez okres orbitalny i użyj tego ułamka jako przesunięcia. Na przykład pierwsza kwadra w 28-dniowym cyklu oznacza przesunięcie 7.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak śledzić fazy księżyca w kampanii RPG stołowego',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ustaw okres orbitalny',
          'text': 'Wprowadź liczbę dni w grze, jaką twój księżyc potrzebuje na pełny cykl.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Ustaw przesunięcie początkowe',
          'text': 'Przesuń fazę początkową, wprowadzając przesunięcie w dniach. Połowa okresu orbitalnego zaczyna od pełni.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Przesuń licznik dni',
          'text': 'Użyj przycisków krokowych lub suwaka, aby przejść do bieżącego dnia kampanii i odczytać fazę oraz poziom pływu.'
        }
      ]
    }
  ]
};
export default content;
