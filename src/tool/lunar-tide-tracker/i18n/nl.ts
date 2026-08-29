import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'maanfasen-getijden-tracker',
  title: 'Maanfasecalculator voor Tafelrollenspellen: Volg Aangepaste Fantasiemanen en Getijdencycli',
  description: 'Bereken maanfasen voor elke fantasiewereld met aangepaste omlooptijden. Volg meerdere manen tegelijk, bekijk 10-daagse voorspellingen en verkrijg een gecombineerd getijdenniveau voor magie- en weersystemen in D&D, Pathfinder of elk ander RPG.',
  ui: {
    title: 'Maanfase & Mystieke Getijden Tracker',
    moonsTitle: 'Maanconfiguratie',
    addMoon: 'Aangepaste Maan Toevoegen',
    removeMoon: 'Maan Verwijderen',
    moonName: 'Maannaam',
    orbitalPeriod: 'Omlooptijd (Dagen)',
    startingOffset: 'Startverschuiving (Dagen)',
    timelineTitle: 'Tijdinstellingen',
    currentDay: 'Huidige Campagnedag',
    tideTitle: 'Mystieke Getijdenstatus',
    tideLevel: 'Getijden Energieniveau',
    magicModifier: 'Magisch Getijde-effect',
    forecastTitle: 'Maanfase & Getijdenvoorspelling',
    dayLabel: 'Dag',
    resetButton: 'Reset naar Dag 0',
    presetTitle: 'Campagnepresets',
    presetSingle: 'Klassieke Maan',
    presetDouble: 'Tweelingmanen van Magie',
    presetTriple: 'Drievoudige Eclipse Rijk',
    newMoon: 'Nieuwe Maan',
    waxingCrescent: 'Jonge Maansikkel',
    firstQuarter: 'Eerste Kwartier',
    waxingGibbous: 'Wassende Maan',
    fullMoon: 'Volle Maan',
    waningGibbous: 'Afnemende Maan',
    lastQuarter: 'Laatste Kwartier',
    waningCrescent: 'Oude Maansikkel',
  },
  seo: [
    { type: 'title', text: 'Hoe Maanfasen te Volgen in een Fantasie RPG Campagne', level: 2 },
    { type: 'paragraph', html: 'De meeste fantasiewerelden hebben manen met omlooptijden die afwijken van de 29,5-daagse maancyclus in de echte wereld. Het veld <strong>Omlooptijd</strong> bepaalt hoeveel in-game dagen een maan nodig heeft om een volledige cyclus te voltooien. De aardmaan doet er 29 dagen over; de Eberron-setting gebruikt 28; Tolkiens Midden-aarde heeft een maancyclus van ongeveer 30 dagen. Stel dit in op wat de overlevering van je wereld voorschrijft, of kies een getal tussen 5 en 60 dagen dat de gewenste eclipsfrequentie oplevert.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Manen tegelijk gevolgd' },
        { value: '10', label: 'Voorspellingsbereik in dagen' },
        { value: '5', label: 'Getijdenstadia (Doodtij tot Springvloed)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'De Startverschuiving Begrijpen', level: 2 },
    { type: 'paragraph', html: 'Het veld <strong>Startverschuiving</strong> verplaatst waar een maan zich in zijn cyclus bevindt op campagne Dag 0. Een verschuiving van 0 betekent dat de maan begint bij Nieuwe Maan. Een verschuiving gelijk aan de helft van de omlooptijd laat hem beginnen bij Volle Maan. Gebruik dit om de fase te matchen die in de openingsscène van je campagne wordt beschreven, of om ervoor te zorgen dat twee manen op verschillende posities beginnen zodat ze niet altijd op een lijn staan.' },
    { type: 'title', text: 'Wat het Getijdenniveau Betekent voor Jouw Spel', level: 2 },
    { type: 'paragraph', html: 'Het getijdenniveau combineert de zwaartekracht van alle actieve manen op basis van hun huidige fasen. Een <strong>Springvloed</strong> (boven 75%) treedt op wanneer manen bijna op een lijn staan in volle of nieuwe fase en in dezelfde richting trekken. Een <strong>Doodtij</strong> (onder 30%) gebeurt wanneer manen in tegenovergestelde fasen staan, waardoor ze elkaar gedeeltelijk opheffen. Je kunt dit direct koppelen aan elk mechanisch systeem: spell save DC-bonussen, duur van druïden gedaanteverwisseling, drempels voor weerwolf-transformaties of stormkracht op kustkaarten.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Enkele Maan',
          description: 'Het beste voor werelden die de echte wereld weerspiegelen of een enkele dominante maan hebben. Eenvoudige 8-fasencyclus, makkelijk te volgen zonder naslagwerk.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'Geschikt voor D&D Forgotten Realms (Selûne, 30 dagen)',
            'Weerwolf- en lycanthroopcampagnes',
            'Horrorsessies rond de volle maan'
          ]
        },
        {
          title: 'Tweelingmanen',
          description: 'Vaak in high-fantasy werelden. Creëert frequente gedeeltelijke samenstanden en interessante getijden midden in de cyclus. Samenstanden gebeuren ongeveer elke LCM(periode1, periode2) dagen.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28d + Aryth 12d)',
            'Creëert voorspelbare eclipsseizoenen',
            'Geschikt voor druïdische of elementaire magiesystemen'
          ]
        },
        {
          title: 'Drie Manen',
          description: 'Zeldzame drievoudige samenstanden veroorzaken onvoorspelbare vloedgolven. Het gecombineerde getij wordt chaotisch en moeilijk te voorspellen zonder deze tool, wat het dramatisch nuttig maakt.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Wilde magie-vloedtabellen bij samenstand',
            'Pathfinder Golarion-achtige complexiteit',
            'Lange cyclusperiodes voor epische campagnes'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Veelvoorkomende Omlooptijden voor Fantasiewerelden', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selûne (Forgotten Realms)', definition: '30-daagse omlooptijd, enkele maan. Gebruik verschuiving 15 om te beginnen bij volle maan op sessie 1.' },
        { term: 'Eberron Manen', definition: 'Eberron heeft 12 manen met omlooptijden van 9 tot 28 dagen. Voer elke maan als een apart exemplaar in, of kies de twee meest plotrelevante.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion heeft een enkele maan, Somal, met een cyclus van 29 dagen. Donkere tapijtgebeurtenissen kunnen worden gemodelleerd door een tweede maan met een korte omlooptijd en storende verschuiving in te stellen.' },
        { term: 'Eigen Wereld', definition: 'Een maan van 15 dagen produceert 24 volle manen per jaar. Een maan van 45 dagen produceert er ongeveer 8. Kortere periodes betekenen vaker eclipsgebeurtenissen, maar verminderen hun verhalende gewicht.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tip: Een Specifieke Fase Instellen voor Sessie 1',
      icon: 'mdi:information-outline',
      badge: 'INSTELTIP',
      html: 'Als je campagne begint bij een maansikkel, stel de verschuiving dan in op ongeveer 20% van de omlooptijd. Voor een volle maan begin, gebruik 50% van de periode als verschuiving. Een 28-daagse maan die vol begint gebruikt bijvoorbeeld verschuiving 14. Verhoog de dagteller naar je huidige campagnedag en de voorspelling toont automatisch de volgende 10 dagen.'
    }
  ],
  faq: [
    { question: 'Welke omlooptijd moet ik gebruiken voor mijn fantasiewereld?', answer: 'Als je wereld er geen specificeert, werkt 28 tot 30 dagen goed voor een enkele maan. Voor meerdere manen kies je omlooptijden die geen eenvoudige veelvouden van elkaar zijn (bijv. 20 en 27), zodat samenstanden niet te vaak herhalen. Kortere periodes (10 tot 15 dagen) werken goed voor secundaire manen die frequente kleine getijden creëren.' },
    { question: 'Hoe laat ik twee manen samenkomen op een specifiek campagnemoment?', answer: 'Geef beide manen dezelfde verschuivingswaarde. Ze beginnen in dezelfde fase op Dag 0 en komen weer samen bij elk gemeenschappelijk veelvoud van hun twee periodes. Om ze te spreiden, geef je de tweede maan een verschuiving gelijk aan de helft van zijn omlooptijd, zodat ze tegenover elkaar beginnen.' },
    { question: 'Wat betekent Springvloed in speltermen?', answer: 'Springvloed betekent dat alle actieve manen in lijn trekken en maximale getijdenenergie produceren. Je kunt dit gebruiken om wilde magie-vloeden te activeren, genezingsspreukbereiken te vergroten, stormkracht te versterken of het te markeren als een heilige nacht voor religieuze facties in je wereld.' },
    { question: 'Wat betekent Doodtij in speltermen?', answer: 'Doodtij treedt op wanneer manen elkaar gedeeltelijk opheffen. Het is een goed moment voor antimagische effecten, doodse stilte op zee, of voor schurken die voorspelbare magie-onderdrukking nodig hebben om hun plannen uit te voeren.' },
    { question: 'Kan ik dit gebruiken voor Call of Cthulhu of horrorcampagnes?', answer: 'Ja. Gebruik een enkele maan van 29 dagen en stel de verschuiving zo in dat de volle maan op de climax van de sessie valt. De getijdenvolger kan Mythische invloed of pieken in psychische gevoeligheid vertegenwoordigen die schalen met het fasepercentage.' },
    { question: 'Hoe werkt de 10-daagse voorspelling?', answer: 'De voorspelling toont de maanfase van elke actieve maan als een gekleurde stip voor elk van de volgende 10 campagnedagen, te beginnen bij de huidige dag. Het percentage onder elke dagkolom is het gecombineerde getijdenniveau. Dagen met een hoog percentage zijn goede kandidaten voor dramatische ontmoetingen rond magie of weer.' },
    { question: 'Kan ik een maan met een zeer korte cyclus volgen, zoals 7 dagen?', answer: 'Ja. Stel de omlooptijd in op 7. De maan voltooit elke week in-game tijd een volledige cyclus en doorloopt alle 8 fasen. Dit is handig voor campagnewerelden waar maanmagie wekelijks wordt gereset, of voor het volgen van een klein komeetachtig lichaam dat regelmatig passeert.' },
    { question: 'Hoe stem ik de maanfase af op een gepubliceerde avonturenmodule?', answer: 'Zoek de campagnedag in het avontuur op en noteer de beschreven fase. Tel hoeveel dagen in de cyclus dat overeenkomt, deel door de omlooptijd en gebruik dat als je verschuiving. Een eerste kwartier maan op Dag 0 van een 28-daagse cyclus betekent bijvoorbeeld een verschuiving van 7 (een kwart van 28).' }
  ],
  bibliography,
  howTo: [
    { name: 'Stel de Omlooptijd In', text: 'Voer het aantal in-game dagen in dat je maan nodig heeft om een volledige cyclus te voltooien. Gebruik de overlevering van je wereld of kies een waarde tussen 5 en 60.' },
    { name: 'Stel de Startverschuiving In', text: 'Verschuif de beginfase door een dagverschuiving in te voeren. Een verschuiving van 0 begint bij Nieuwe Maan. De helft van de omlooptijd begint bij Volle Maan.' },
    { name: 'Verhoog de Dagteller', text: 'Gebruik de stapknoppen of schuifregelaar om naar je huidige campagnedag te gaan en lees in realtime de fase en het getijdenniveau af.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Maanfasecalculator voor Tafelrollenspellen: Volg Aangepaste Fantasiemanen en Getijdencycli',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Welke omlooptijd moet ik gebruiken voor mijn fantasiewereld?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Als je wereld er geen specificeert, werkt 28 tot 30 dagen goed voor een enkele maan. Gebruik voor meerdere manen omlooptijden die geen eenvoudige veelvouden van elkaar zijn, zodat samenstanden niet te vaak herhalen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wat betekent Springvloed in speltermen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Springvloed betekent dat alle actieve manen in lijn trekken. Gebruik dit om wilde magie-vloeden te activeren, genezingsspreukbereiken te vergroten, stormkracht te versterken of het te markeren als een heilige nacht voor religieuze facties.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hoe laat ik twee manen samenkomen op een specifiek campagnemoment?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Geef beide manen dezelfde verschuivingswaarde. Ze komen weer samen bij elk gemeenschappelijk veelvoud van hun twee omlooptijden. Om ze te spreiden, geef je de tweede maan een verschuiving gelijk aan de helft van zijn omlooptijd.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hoe werkt de 10-daagse voorspelling?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De voorspelling toont de maanfase van elke actieve maan als een gekleurde stip voor elk van de volgende 10 campagnedagen. Het getoonde percentage is het gecombineerde getijdenniveau. Dagen met een hoog percentage zijn kandidaten voor dramatische magie- of weergebeurtenissen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kan ik dit gebruiken voor Call of Cthulhu of horrorcampagnes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Gebruik een enkele maan van 29 dagen en stel de verschuiving zo in dat de volle maan op de climax van de sessie valt. De getijdenvolger kan Mythische invloed of pieken in psychische gevoeligheid vertegenwoordigen die schalen met het fasepercentage.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hoe stem ik de maanfase af op een gepubliceerde avonturenmodule?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Noteer de beschreven fase en tel hoeveel dagen in de cyclus dat overeenkomt. Deel door de omlooptijd en gebruik die breuk als verschuiving. Een eerste kwartier maan op een 28-daagse cyclus betekent bijvoorbeeld een verschuiving van 7.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe Maanfasen te Volgen in een Tafelrollenspel Campagne',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Stel de Omlooptijd In',
          'text': 'Voer het aantal in-game dagen in dat je maan nodig heeft om een volledige cyclus te voltooien.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Stel de Startverschuiving In',
          'text': 'Verschuif de beginfase door een dagverschuiving in te voeren. De helft van de omlooptijd begint bij Volle Maan.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Verhoog de Dagteller',
          'text': 'Gebruik de stapknoppen of schuifregelaar om naar je huidige campagnedag te gaan en lees de fase en het getijdenniveau af.'
        }
      ]
    }
  ]
};
export default content;
