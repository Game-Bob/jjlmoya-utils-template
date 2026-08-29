import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Traducteur de Runes Fantastiques',
  inputPlaceholder: 'Tapez un mot ou un nom à traduire...',
  alphabetLabel: 'Alphabet Runique',
  elderFuthark: 'Futhark Ancien',
  angloSaxon: 'Anglo-Saxon',
  fantasy: 'Écriture Fantastique',
  theban: 'Thébain',
  enochian: 'Énochien',
  daemonic: 'Démoniaque',
  ogham: 'Ogham',
  translate: 'Traduire',
  clear: 'Effacer',
  copy: 'Copier le texte',
  copied: 'Copié !',
  runeName: 'Nom',
  runeMeaning: 'Signification',
  runePhonetic: 'Phonétique',
  clickHint: 'Cliquez sur une rune pour voir ses détails',
  outputLabel: 'Sortie Runique',
  noInput: 'Entrez du texte ci-dessus pour le traduire en runes',
  unknownChar: '?',
  gmMode: 'Mode MJ',
  exitGmMode: 'Quitter',
  gmHint: 'Affichez ceci à vos joueurs',
  seedLabel: 'Graine',
  seedPlaceholder: 'Optionnel',
  seedApplied: 'Verrouillé',
  shuffleSeed: 'Mélanger',
};

const faq = [
  {
    question: 'Qu\'est-ce que le Futhark Ancien ?',
    answer: 'Le Futhark Ancien est la plus ancienne forme des alphabets runiques, utilisé par les tribus germaniques du IIe au VIIIe siècle. Il se compose de 24 runes divisées en trois groupes de huit appelés aettir. Chaque rune a une valeur phonétique et un nom symbolique représentant des concepts naturels ou mythologiques.',
  },
  {
    question: 'Quelle est la différence entre le Futhark Ancien et les runes anglo-saxonnes ?',
    answer: 'Le Futhorc anglo-saxon est une version étendue du Futhark Ancien développée en Angleterre. Il ajoute des runes supplémentaires pour représenter des sons spécifiques au vieil anglais, passant de 24 à jusqu\'à 33 caractères. Les significations et les valeurs phonétiques ont également évolué au fil du temps.',
  },
  {
    question: 'Ce traducteur convertit-il les mots parfaitement ?',
    answer: 'Cet outil fournit une translittération lettre par lettre en symboles runiques. L\'usage historique des runes était phonétique plutôt que littéral, lettre par lettre, le résultat est donc une interprétation moderne. L\'option Écriture Fantastique propose un alphabet fictif créatif pour l\'ambiance des jeux de rôle sur table.',
  },
  {
    question: 'Puis-je utiliser ces runes dans mes campagnes de JDR sur table ?',
    answer: 'Oui ! Les maîtres du jeu et les joueurs peuvent utiliser le traducteur pour créer des inscriptions runiques, des écrits magiques, des messages cryptiques ou des noms décoratifs pour personnages et lieux. L\'option Écriture Fantastique est spécialement conçue pour les univers de fantasy.',
  },
  {
    question: 'Cet outil stocke-t-il le texte que je saisis ?',
    answer: 'Non. Tout s\'exécute localement dans votre navigateur. Aucun texte, traduction ou sélection n\'est jamais envoyé à un serveur. Votre travail créatif reste totalement privé.',
  },
  {
    question: 'Que se passe-t-il quand je clique sur une rune ?',
    answer: 'Cliquer sur une carte rune affiche son nom traditionnel, sa signification symbolique et sa valeur phonétique. Cela vous aide à apprendre les runes et à choisir le bon symbole pour vos besoins en JDR.',
  },
];

const howTo = [
  {
    name: 'Entrer du texte',
    text: 'Tapez un mot, un nom ou une phrase en anglais dans le champ de saisie. Le traducteur fonctionne mieux avec des mots isolés ou des phrases courtes.',
  },
  {
    name: 'Choisir un alphabet',
    text: 'Choisissez entre le Futhark Ancien (germanique ancien), l\'Anglo-Saxon (anglais médiéval) ou l\'Écriture Fantastique (style JDR sur table).',
  },
  {
    name: 'Traduire et explorer',
    text: 'Cliquez sur Traduire pour convertir votre texte. Chaque rune apparaît sous forme de carte. Cliquez sur une rune pour découvrir son nom, sa signification et son son. Utilisez le bouton Copier pour enregistrer le texte runique dans votre presse-papiers.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'traducteur-runes-fantastiques',
  title: 'Traducteur de Runes Fantastiques / Convertisseur de Runes Futhark Ancien, Thébain, Énochien and Démoniaque',
  description: 'Traduisez du texte en Futhark Ancien, Futhorc Anglo-Saxon, Thébain, Énochien, Démoniaque, Ogham ou écritures fantastiques. Parfait pour les énigmes de JDR sur table, les campagnes, les parchemins de sorcier et les runes mystiques.',
  ui,
  seo: [
    { type: 'title', text: 'Alphabets Runiques et Écritures Mystiques pour la Construction d\'Univers de JDR', level: 2 },
    { type: 'paragraph', html: 'Les alphabets runiques mystiques, les symboles anciens et les écritures secrètes apportent une immersion incomparable aux jeux de rôle sur table fantastiques comme D&D, Pathfinder et Warhammer. Que vous créiez des ruines naines cachées gravées de Futhark Ancien, que vous conceviez un grimoire arcanique contenant des écritures angéliques énochiennes, que vous disséminiez des indices de sorcière utilisant l\'alphabet thébain ou que vous rédigiez des messages démoniaques interdits, notre générateur de runes transforme le texte anglais standard en symboles stylisés en temps réel. Éveillez la curiosité des joueurs avec des accessoires physiques, des chiffrements mystérieux et des gravures sur pierre anciennes.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Alphabets Runiques' },
        { value: '150+', label: 'Variations de Symboles' },
        { value: 'Instantané', label: 'Translit. Visuelle' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Futhark Ancien & Futhorc Anglo-Saxon: Runes Germaniques et Nordiques', level: 2 },
    { type: 'paragraph', html: 'Datant du IIe siècle, le Futhark Ancien est le plus ancien système runique, composé de 24 caractères représentant les forces fondamentales de la nature. Le Futhorc anglo-saxon a étendu ce système pour inclure jusqu\'à 33 caractères pour la phonétique du vieil anglais. Ces symboles historiques sont parfaits pour représenter les clans nains, les cultures inspirées de la mythologie nordique, les gravures vikings et les insignes de clans barbares dans vos campagnes de JDR.' },
    { type: 'title', text: 'Thébain & Ogham: Alphabets de Sorcellerie Médiévale et Arbres Celtiques', level: 2 },
    { type: 'paragraph', html: 'Souvent appelée les Runes d\'Honorius ou l\'Alphabet des Sorcières, l\'écriture thébaine est un chiffrement médiéval historiquement populaire utilisé dans les traditions occultes et la Wicca. L\'Ogham, un alphabet du haut Moyen Âge, utilise des traits linéaires gravés le long d\'arêtes, célèbre pour son lien avec le folklore celtique et la magie des arbres druidiques. Utilisez ces écritures pour embellir des sanctuaires druidiques, des forêts elfiques, des autels païens ou des messages cachés de covens de sorcières.' },
    { type: 'title', text: 'Énochien & Écritures Démoniaques: Langages Angéliques et Abyssaux', level: 2 },
    { type: 'paragraph', html: 'Enregistrée pour la première fois par John Dee et Edward Kelley au XVIe siècle, l\'Énochien est une langue construite détaillée considérée comme la langue des anges. Les écritures démoniaques représentent des glyphes abyssaux, des pactes sombres et des marques infernales. Élevez les enjeux narratifs de votre campagne en laissant des contrats démoniaques déchiffrables, des gravures de culte obscur et des reliques angéliques que vos mages, paladins et clercs pourront investiguer.' },
    { type: 'title', text: 'Écriture Fantastique Personnalisée: Alphabets Créatifs Prêts pour le Jeu', level: 2 },
    { type: 'paragraph', html: 'Pour les mondes qui dépassent l\'histoire réelle, notre Écriture Fantastique personnalisée offre un ensemble de runes fictives conçues spécifiquement pour évoquer l\'esthétique classique de la haute fantasy. Chaque rune est conçue pour se démarquer sur les impressions de maître du jeu, les cartes numériques et les pions de joueur personnalisés. Associez-la à des randomisations basées sur une graine pour créer des langues secrètes uniques à différentes factions, nations ou dieux anciens.' },
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
      'name': 'Traducteur de Runes Fantastiques',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment utiliser le Traducteur de Runes Fantastiques',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
