import type { CategoryLocaleContent } from '../../types';

const slug = 'gry-planszowe';
const title = 'Narzędzia i Pomocniki do Gier Planszowych';
const description = 'Darmowe narzędzia do gier planszowych i RPG: rzucaj wirtualnymi kośćmi z statystykami na żywo, zarządzaj czasem tur z multi-timerem i nie tylko. Działa w przeglądarce, bez rejestracji, 100% prywatności.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Narzędzia do Gier Planszowych | Rzut Kościami Online i Stoper Tur', level: 2 },
    { type: 'paragraph', html: 'Wieczory z grami powinny być przyjemnością, a nie polowaniem na zgubione kości czy czekaniem, aż ktoś podliczy wyniki. Ta biblioteka narzędzi daje tobie i twojej grupie szybkie, przemyślane pomocniki, które działają od razu, niczego nie żądając w zamian. Niezależnie od tego, czy jesteś mistrzem gry żonglującym setkami spraw, czy graczem, który po prostu chce rzucić kośćmi bez ceregieli, te narzędzia są stworzone dla ciebie.' },
    { type: 'title', text: 'Rzucaj Wirtualnymi Kośćmi ze Statystykami w Czasie Rzeczywistym', level: 2 },
    { type: 'paragraph', html: 'Masz dość szukania kości pod stołem lub czekania, aż ktoś zsumuje wyniki? Wirtualny rzut kośćmi pozwala ci błyskawicznie rzucić dowolną kombinacją kości wielościennych z modyfikatorami, przewagą, utrudnieniem i pełną historią rzutów. Wbudowany analizator prawdopodobieństwa pokazuje rzeczywiste szanse powodzenia przed rzutem. Idealny do Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun i każdej gry opartej na losowości.' },
    { type: 'title', text: 'Utrzymuj Tempo Gry z Inteligentnym Stoperem Tur', level: 2 },
    { type: 'paragraph', html: 'Wszyscy znamy tego gracza, który w każdej turze zajmuje wieczność. Stoper gry pozwala ustawić sprawiedliwe i zabawne limity czasowe z trybami dopasowanymi do każdego stylu gry - od prostego wspólnego odliczania po szachowe systemy z inkrementem Fischera lub opóźnieniem Bronsteina. Działa dla pojedynków z podzielonym ekranem lub grup do ośmiu graczy z centralnym sterowaniem. Po zakończeniu gry możesz przejrzeć szczegółowe statystyki czasu i tempa gry.' },
    { type: 'title', text: 'Prywatność Przede Wszystkim: Dane Zostają na Twoim Urządzeniu', level: 2 },
    { type: 'paragraph', html: 'Jedną z największych zalet tej biblioteki jest to, że całe przetwarzanie odbywa się w twojej przeglądarce. Żadne dane nie są wysyłane na serwer, brak ciasteczek śledzących, nie potrzeba emaila ani rejestracji. Używaj narzędzi offline, udostępniaj ekran przy stole lub wyświetl na telewizorze - nie musisz martwić się o nic poza samą grą. A kolejne narzędzia są w drodze, zawsze projektowane z myślą o ułatwieniu życia graczom planszowym.' },
    { type: 'stats', items: [
      { label: 'Narzędzia', value: '2+', icon: 'mdi:tools' },
      { label: 'Gracze', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Języki', value: '15', icon: 'mdi:translate' },
      { label: 'Prywatność', value: '100% Lokalnie', icon: 'mdi:shield-check' },
    ] },
  ],
};
