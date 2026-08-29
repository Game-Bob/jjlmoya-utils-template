import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'symulator-rzutow-kostkami-prawdopodobienstwo',
  title: 'Symulator Rzutów Kostkami & Kalkulator Prawdopodobieństwa',
  description: 'Rzucaj wirtualnymi kostkami wielościennymi (D4, D6, D8, D10, D12, D20, D100), dodawaj modyfikatory i sprawdzaj statystyki na żywo oraz prawdopodobieństwo dla gier fabularnych i planszowych.',
  ui: {
    title: 'Symulator Rzutów Kostkami & Kalkulator Prawdopodobieństwa',
    rollButton: 'Rzuć kostkami',
    clearButton: 'Wyczyść historię',
    historyTitle: 'Historia rzutów',
    noHistory: 'Brak zapisanych rzutów. Dodaj kostki i kliknij Rzuć, aby rozpocząć.',
    totalRolls: 'Wszystkie rzuty',
    averageRoll: 'Średni wynik',
    lastRoll: 'Ostatnia suma',
    modifierLabel: 'Modyfikator (+/-)',
    probabilityTitle: 'Analiza prawdopodobieństwa',
    selectDice: 'Wybierz kostki do rzucenia',
  },
  seo: [
    { type: 'title', text: 'Opanowanie szans w grach planszowych: Jak prawdopodobieństwo kostek wpływa na rozgrywkę', level: 2 },
    { type: 'paragraph', html: 'Kostki wielościenne są sercem gier fabularnych (RPG) i nowoczesnych gier planszowych. Niezależnie od tego, czy wykonujesz trudny rzut obronny w Dungeons & Dragons, czy rzucasz na pozyskanie surowców, o wyniku decyduje matematyczne prawdopodobieństwo. Zrozumienie, w jaki sposób kombinacja różnych rodzajów kostek wpływa na Twoje szanse, jest kluczem do podejmowania decyzji taktycznych.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Szansa na naturalne 20' },
        { value: '10.5', label: 'Średnia z rzutu 3d6' },
        { value: '9.75%', label: 'Naturalne 20 z ułatwieniem' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Matematyka wielu kostek: Dlaczego 3d6 jest bezpieczniejsze niż 1d20', level: 2 },
    { type: 'paragraph', html: 'Kiedy rzucasz pojedynczą kostką D20, każdy wynik od 1 do 20 ma taką samą szansę (5%), co daje płaski rozkład prawdopodobieństwa. Jednak przy rzucie wieloma kostkami, takimi jak 3d6, wyniki skupiają się wokół średniej wartości 10.5. Ta krzywa dzwonowa (rozkład normalny) oznacza, że o wiele łatwiej uzyskać umiarkowany wynik niż wartości skrajne, co zapewnia stabilność i zmniejsza losowość pojedynczego rzutu.' },
    { type: 'title', text: 'Prawdopodobieństwo na D20: Trafienia krytyczne, krytyczne porażki (pifia) i wpływ modyfikatorów', level: 2 },
    { type: 'paragraph', html: 'Zwykły modyfikator +2 może drastycznie zmienić prawdopodobieństwo sukcesu, zmieniając trudne zadania w możliwe do osiągnięcia wyzwania. W wielu systemach gier naturalne 20 oznacza automatyczny sukces krytyczny (5% szansy), podczas gdy naturalne 1 to krytyczna porażka (pifia). Wizualizacja tych wyników pomaga odczarować losowość ogółu i pozwala planować ruchy taktyczne w oparciu o statystykę.' },
    {
      type: 'title',
      text: 'Tabela referencyjna standardowych kostek wielościennych',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Typ kostki', 'Minimalny wynik', 'Maksymalny wynik', 'Średni wynik', 'Główna rola w grach RPG'],
      rows: [
        ['D4', '1', '4', '2.5', 'Magiczne pociski, sztylety, drobne zagrożenia'],
        ['D6', '1', '6', '3.5', 'Kule ognia, standardowe miecze, testy atrybutów'],
        ['D8', '1', '8', '4.5', 'Miecze długie, czary leczące, średnia broń'],
        ['D10', '1', '10', '5.5', 'Halabardy, sztuczki, dziesiątki w rzutach procentowych'],
        ['D12', '1', '12', '6.5', 'Wielkie topory, punkty życia barbarzyńcy'],
        ['D20', '1', '20', '10.5', 'Rzuty obronne, rzuty na trafienie, testy umiejętności'],
        ['D100', '1', '100', '50.5', 'Tabele procentowe, efekty dzikiej magii'],
      ],
    },
    {
      type: 'tip',
      title: 'Jak szybko obliczyć średnią wartość kostek w pamięci',
      html: 'Aby znaleźć średnią dla pojedynczej kostki, dodaj wartość minimalną (1) i maksymalną, a następnie podziel przez 2. Średnia dla D6 to (1 + 6) / 2 = 3.5. Dla wielu kostek pomnóż średnią jednej kostki przez ich liczbę (np. średnia dla 3d6 to 3 * 3.5 = 10.5). Dodanie stałego modyfikatora po prostu zwiększa tę średnią (np. 3d6 + 4 daje średnio 14.5).',
    },
    {
      type: 'title',
      text: 'Porównanie liniowych i zakrzywionych systemów rzutów',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'System D20 vs. System krzywej dzwonowej 3d6',
      items: [
        {
          pro: 'Systemy D20 są szybkie w obliczeniach i dają stałe 5% szansy na sukces krytyczny i porażkę.',
          con: 'Wyniki D20 są bardzo niestabilne, przez co umiejętności postaci zależą w dużej mierze od szczęścia.',
        },
        {
          pro: 'Krzywa dzwonowa 3d6 faworyzuje wyniki średnie, dzięki czemu wyszkolone postacie rzadko zawodzą w prostych zadaniach.',
          con: 'Systemy 3d6 wymagają sumowania trzech kostek i sprawiają, że idealny wynik 18 (krytyk) jest skrajnie rzadki (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Zrozumienie mechanizmów prawdopodobieństwa',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'System D20 (Liniowy)',
          description: 'Wykorzystuje jedną 20-ścienną kostkę, gdzie każdy wynik ma równe 5% szansy. Duża zmienność buduje napięcie, ale zmniejsza stabilność.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Płaskie 5% szans na każdy wynik',
            'Wysoka wariancja i wahania wyników',
            'Modyfikatory wpływają na sukces liniowo',
          ],
        },
        {
          title: 'System 3d6 (Krzywa dzwonowa)',
          description: 'Sumuje rzuty trzema 6-ściennymi kostkami, tworząc rozkład normalny ze średnią 10.5. Wyniki są bardzo spójne.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Wyniki średnie są bardzo prawdopodobne',
            'Skrajne wyniki są wyjątkowo rzadkie',
            'Modyfikatory mają nieliniowy wpływ',
          ],
        },
        {
          title: 'System procentowy (Rzut poniżej)',
          description: 'Wykorzystuje dwie kostki D10 do uzyskania liczby od 1 do 100. Cel to wyrzucenie wyniku poniżej poziomu postaci, co daje jasność szans.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Bezpośredni procent szansy na sukces',
            'Łatwe do zrozumienia na pierwszy rzut oka',
            'Rozwój postaci jest jasny matematycznie',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Błąd hazardzisty: Dlaczego kostki nie mają pamięci',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Częstym błędem w grach tabletop jest wiara, że poprzednie rzuty wpływają na kolejne. Jeśli wyrzucisz trzy "1" z rzędu na D20, możesz czuć, że wysoki wynik jest "bliski". W rzeczywistości każdy rzut jest niezależny. Prawdopodobieństwo wyrzucenia 20 w kolejnym rzucie wciąż wynosi dokładnie 5%. Świadomość tego pomaga graczom w podejmowaniu racjonalnych decyzji.',
    },
    {
      type: 'title',
      text: 'Słownik pojęć statystyki i kostek w grach RPG',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ułatwienie i Utrudnienie',
          definition: 'Mechanika, w której gracz rzuca dwoma D20 i wybiera wynik odpowiednio wyższy (Ułatwienie) lub niższy (Utrudnienie). Ułatwienie podnosi średnią z 10.5 do 13.8.',
        },
        {
          term: 'Krzywa dzwonowa (rozkład normalny)',
          definition: 'Rozkład prawdopodobieństwa w kształcie dzwonu, gdzie wyniki skupiają się wokół średniej. Powstaje przy sumowaniu kilku kostek (jak 3d6 lub 2d10).',
        },
        {
          term: 'Trafienie krytyczne',
          definition: 'Automatyczny sukces osiągany przez wyrzucenie maksymalnej wartości na kostce (naturalne 20 na D20), często dający dodatkowe korzyści lub obrażenia.',
        },
        {
          term: 'Krytyczna porażka',
          definition: 'Automatyczne niepowodzenie o negatywnych lub komicznych skutkach, wywołane wyrzuceniem 1 na D20.',
        },
        {
          term: 'Wartość oczekiwana',
          definition: 'Długoterminowa średnia z Twoich rzutów. Dla pojedynczej D6 wartość oczekiwana to 3.5, a dla D20 to 10.5.',
        },
        {
          term: 'Kostki procentowe',
          definition: 'Para kostek D10 (jedna oznacza dziesiątki, druga jedności) rzucanych razem w celu uzyskania wyniku od 1 do 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Jak działa symulator prawdopodobieństwa?',
      answer: 'Oblicza dokładny rozkład prawdopodobieństwa dla wybranej kombinacji kostek i modyfikatora za pomocą matematyki kombinatorycznej, co pozwala zobaczyć szanse na uzyskanie wyniku powyżej lub poniżej wartości docelowych.',
    },
    {
      question: 'Które kostki są obsługiwane?',
      answer: 'Wszystkie popularne kostki wielościenne stosowane w grach planszowych i RPG, w tym D4, D6, D8, D10, D12, D20 oraz D100.',
    },
    {
      question: 'Co to są modyfikatory i jak działają?',
      answer: 'Modyfikatory to stałe wartości (+1, -2 itp.), które dodajesz lub odejmujesz od sumy rzutu, aby odzwierciedlić umiejętności postaci, premie lub kary sytuacyjne.',
    },
    {
      question: 'Co oznacza rzut z ułatwieniem lub utrudnieniem?',
      answer: 'Rzut z ułatwieniem oznacza rzucenie dwoma kostkami D20 i wybranie wyższego wyniku. Rzut z utrudnieniem oznacza wybranie niższego wyniku z dwóch rzuconych kostek D20. To kluczowa mechanika gier RPG.',
    },
    {
      question: 'Co to są trafienia krytyczne i porażki krytyczne?',
      answer: 'Trafienie krytyczne następuje, gdy kostka osiągnie maksymalną wartość (np. naturalne 20 na D20), co zazwyczaj oznacza automatyczny sukces lub podwójne obrażenia. Porażka krytyczna następuje po wyrzuceniu 1 i skutkuje automatycznym, często pechowym niepowodzeniem.',
    },
    {
      question: 'Jak symulator oblicza prawdopodobieństwo rzutów?',
      answer: 'Symulator matematycznie analizuje każdy możliwy wynik wybranej puli kostek i modyfikatorów. Następnie przedstawia procentowy podział szans dla każdej sumy.',
    },
    {
      question: 'Dlaczego rzut 3d6 jest bardziej stabilny niż rzut jedną kostką D20?',
      answer: 'Rzut D20 daje płaskie 5% szans na każdą liczbę. Rzut 3d6 tworzy krzywą dzwonową, w której wyniki najczęściej grupują się wokół średniej 10.5, sprawiając, że skrajne wyniki są bardzo rzadkie.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dodaj kostki',
      text: 'Kliknij przyciski kostek, aby dodać je do aktywnej puli rzutów.',
    },
    {
      name: 'Dodaj modyfikator',
      text: 'Wpisz dodatnią lub ujemną wartość modyfikatora, aby dodać ją do sumy.',
    },
    {
      name: 'Rzuć i sprawdź statystyki',
      text: 'Kliknij przycisk Rzuć, aby zobaczyć efekty wizualne, historię i analizę prawdopodobieństwa.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Symulator Rzutów Kostkami & Kalkulator Prawdopodobieństwa',
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
          'name': 'Jak działa symulator prawdopodobieństwa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oblicza dokładny rozkład prawdopodobieństwa dla wybranej kombinacji kostek i modyfikatora za pomocą matematyki kombinatorycznej, co pozwala zobaczyć szanse na uzyskanie wyniku powyżej lub poniżej wartości docelowych.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Które kostki są obsługiwane?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wszystkie popularne kostki wielościenne stosowane w grach planszowych i RPG, w tym D4, D6, D8, D10, D12, D20 oraz D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Co to są modyfikatory i jak działają?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modyfikatory to stałe wartości (+1, -2 itp.), które dodajesz lub odejmujesz od sumy rzutu, aby odzwierciedlić umiejętności postaci, premie lub kary sytuacyjne.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Co oznacza rzut z ułatwieniem lub utrudnieniem?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rzut z ułatwieniem oznacza rzucenie dwoma kostkami D20 i wybranie wyższego wyniku. Rzut z utrudnieniem oznacza wybranie niższego wyniku z dwóch rzuconych kostek D20. To kluczowa mechanika gier RPG.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Co to są trafienia krytyczne i porażki krytyczne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Trafienie krytyczne następuje, gdy kostka osiągnie maksymalną wartość (np. naturalne 20 na D20), co zazwyczaj oznacza automatyczny sukces lub podwójne obrażenia. Porażka krytyczna następuje po wyrzuceniu 1 i skutkuje automatycznym, często pechowym niepowodzeniem.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jak symulator oblicza prawdopodobieństwo rzutów?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Symulator matematycznie analizuje każdy możliwy wynik wybranej puli kostek i modyfikatorów. Następnie przedstawia procentowy podział szans dla każdej sumy.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Dlaczego rzut 3d6 jest bardziej stabilny niż rzut jedną kostką D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rzut D20 daje płaskie 5% szans na każdą liczbę. Rzut 3d6 tworzy krzywą dzwonową, w której wyniki najczęściej grupują się wokół średniej 10.5, sprawiając, że skrajne wyniki są bardzo rzadkie.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dodaj kostki',
          'text': 'Kliknij przyciski kostek, aby dodać je do aktywnej puli rzutów.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Dodaj modyfikator',
          'text': 'Wpisz dodatnią lub ujemną wartość modyfikatora, aby dodać ją do sumy.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Rzuć i sprawdź statystyki',
          'text': 'Kliknij przycisk Rzuć, aby zobaczyć efekty wizualne, historię i analizę prawdopodobieństwa.'
        }
      ]
    }
  ],
};
