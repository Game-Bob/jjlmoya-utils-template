import type { CategoryLocaleContent } from '../../types';

const slug = 'bordspel';
const title = 'Brädspelsverktyg & Hjälpmedel';
const description = 'Gratis verktyg för brädspel och rollspel: slå virtuella tärningar med realtidsstatistik, håll koll på speltid med en multitimer och mycket mer. Fungerar i webbläsaren, ingen registrering krävs, 100 % privat.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Brädspelsverktyg | Slå Tärningar Online och Tidtagning för Rundor', level: 2 },
    { type: 'paragraph', html: 'Spelkvällar handlar om att ha kul - inte om att leta efter borttappade tärningar eller vänta på att någon ska räkna ihop sina resultat. Detta verktygsbibliotek ger dig och din grupp snabba, väldesignade hjälpmedel som fungerar direkt, utan krav på något i gengäld. Oavsett om du är en spelledare som jonglerar med tusen saker eller en spelare som bara vill slå tärningar utan krångel, är dessa verktyg gjorda för dig.' },
    { type: 'title', text: 'Slå Virtuella Tärningar med Realtidsstatistik', level: 2 },
    { type: 'paragraph', html: 'Trött på att leta efter tärningar under bordet eller vänta på att någon ska summera resultat? Den virtuella tärningsslungaren låter dig omedelbart kasta vilken kombination av polyedertärningar som helst med modifikation, fördel, nackdel och fullständig kastlogg. Den inbyggda sannolikhetsanalysatorn visar dina verkliga chanser innan du kastar. Perfekt för Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun eller alla spel som bygger på slump.' },
    { type: 'title', text: 'Håll Tempot med en Smart Runda-Timer', level: 2 },
    { type: 'paragraph', html: 'Vi känner alla igen den spelaren som tar evigheter på sig varje runda. Speltimern låter dig sätta rättvisa och roliga tidsgränser med lägen som passar alla spelstilar - från en enkel delad nedräkning till schackinspirerade system med Fischer-inkrement eller Bronstein-fördröjning. Fungerar för dueller med delad skärm eller grupper på upp till åtta spelare med central rundkontroll. När spelet är slut kan du se detaljerad statistik över tid och speltempo.' },
    { type: 'title', text: 'Integritet Först: All Data Stannar på Din Enhet', level: 2 },
    { type: 'paragraph', html: 'En av de stora fördelarna med detta bibliotek är att all bearbetning sker i din webbläsare. Ingen data skickas till någon server, inga spårningskakor, ingen e-post eller registrering krävs. Använd verktygen offline, dela din skärm med bordet eller projicera på en TV - inget att oroa sig för förutom själva spelet. Och fler verktyg är på väg, allt designat för att göra livet enklare för brädspelare.' },
    { type: 'stats', items: [
      { label: 'Verktyg', value: '2+', icon: 'mdi:tools' },
      { label: 'Spelare', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Språk', value: '15', icon: 'mdi:translate' },
      { label: 'Dataintegritet', value: '100 % Lokalt', icon: 'mdi:shield-check' },
    ] },
  ],
};
