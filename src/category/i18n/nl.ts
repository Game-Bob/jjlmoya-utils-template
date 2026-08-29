import type { CategoryLocaleContent } from '../../types';

const slug = 'bordspelen';
const title = 'Bordspel Hulpmiddelen & Utilities';
const description = 'Gratis hulpmiddelen voor bordspellen en RPGs: gooi virtuele dobbelstenen met live statistieken, beheer beurt tijden met een multi-player timer en meer. Werkt in de browser, geen registratie, 100% privé.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Bordspel Hulpmiddelen | Online Dobbelen en Beurt Timer', level: 2 },
    { type: 'paragraph', html: 'Spelavonden zouden draaien om plezier, niet om het zoeken naar verdwenen dobbelstenen of wachten tot iemand zijn resultaten optelt. Deze bibliotheek met hulpmiddelen biedt jou en je groep snelle, doordachte tools die direct werken, zonder er iets voor terug te vragen. Of je nu een spelleider bent die met duizend dingen tegelijk bezig is of een speler die gewoon wil dobbelen zonder gedoe, deze tools zijn voor jou gemaakt.' },
    { type: 'title', text: 'Gooi Virtuele Dobbelstenen met Real-Time Statistieken', level: 2 },
    { type: 'paragraph', html: 'Ben je het zat om onder de tafel naar dobbelstenen te zoeken of te wachten tot iemand de uitslagen optelt? De virtuele dobbelsteenwerper laat je direct elke combinatie van veelvlakkige dobbelstenen gooien met modifiers, voordeel, nadeel en een volledige geschiedenis. De ingebouwde kansanalyse toont je echte slagingskansen voordat je gooit. Perfect voor Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun of elk spel dat afhankelijk is van geluk.' },
    { type: 'title', text: 'Houd je Spel in Stap met een Slimme Beurt Timer', level: 2 },
    { type: 'paragraph', html: 'We kennen allemaal die ene speler die eeuwigheid nodig heeft voor elke beurt. De speltimer laat je eerlijke en leuke tijdslimieten instellen met modi die passen bij elke speelstijl - van een simpele gedeelde aftelling tot schaakachtige systemen met Fischer-increment of Bronstein-vertraging. Werkt voor tweegevechten met gesplitst scherm of groepen tot acht spelers met centrale beurtbediening. Na het spel kun je gedetailleerde statistieken bekijken over tijd en speeltempo.' },
    { type: 'title', text: 'Privacy Voorop: Al je Gegevens Blijven op je Apparaat', level: 2 },
    { type: 'paragraph', html: 'Een van de grootste voordelen van deze bibliotheek is dat alle verwerking in je browser plaatsvindt. Er worden geen gegevens naar een server gestuurd, geen tracking-cookies, geen e-mail of registratie nodig. Gebruik de tools offline, deel je scherm met de tafel of projecteer op een tv - niets om je zorgen over te maken behalve het spel zelf. En er komen meer tools aan, altijd ontworpen om het leven van bordspelers makkelijker te maken.' },
    { type: 'stats', items: [
      { label: 'Hulpmiddelen', value: '2+', icon: 'mdi:tools' },
      { label: 'Spelers', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Talen', value: '15', icon: 'mdi:translate' },
      { label: 'Privacy', value: '100% Lokaal', icon: 'mdi:shield-check' },
    ] },
  ],
};
