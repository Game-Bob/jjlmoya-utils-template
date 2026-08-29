import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Choisissez une graine, réglez la grille et sélectionnez un style architectural. Générez une carte connectée pour vos notes, impression ou table virtuelle.',
  seedLabel: 'Graine de la carte',
  seedHint: 'Réutilisez une graine avec les mêmes réglages pour reconstruire exactement le même plan.',
  randomSeed: 'Nouvelle graine',
  sizeLabel: 'Taille d exploration',
  sizeCompact: 'Session unique (One-shot)',
  sizeSession: 'Session classique',
  sizeStronghold: 'Forteresse',
  fineTuneGrid: 'Réglage fin de la grille et densité',
  columnsLabel: 'Colonnes',
  rowsLabel: 'Lignes',
  densityLabel: 'Densité de salles',
  densityHint: 'Une densité élevée ajoute plus de pièces et de surface utilisable.',
  styleLabel: 'Architecture de la carte',
  dungeonStyle: 'Donjon',
  dungeonStyleHint: 'Pièces en pierre avec couloirs de largeur simple.',
  cavernStyle: 'Caverne',
  cavernStyleHint: 'Chambres naturelles aux contours arrondis.',
  scifiStyle: 'Science-Fiction',
  scifiStyleHint: 'Modules larges avec couloirs de double largeur.',
  generate: 'Générer la carte',
  mapRegionLabel: 'Carte du donjon générée et commandes d exportation',
  connectedBadge: 'Toutes les salles sont connectées',
  roomsLabel: 'Salles',
  doorsLabel: 'Portes',
  floorLabel: 'Couverture du sol',
  legendFloor: 'Sol praticable',
  legendWall: 'Mur solide',
  legendDoor: 'Porte ou sas',
  editHint: 'Clic droit sur une case pour éditer',
  editCell: 'Éditer cette case',
  paintFloor: 'Sol',
  paintWall: 'Mur',
  paintDoor: 'Porte',
  mapData: 'Données de carte',
  copyLink: 'Copier le lien',
  linkCopied: 'Lien copié',
  exportPng: 'Télécharger PNG',
  exportSvg: 'Télécharger SVG',
  exportJson: 'Enregistrer le JSON',
  importJson: 'Ouvrir un JSON',
  importError: 'Ce fichier ne contient pas une configuration valide de donjon.',
  compactMap: 'Exploration tendue',
  balancedMap: 'Expédition équilibrée',
  sprawlingMap: 'Forteresse vaste',
  compactHint: 'Des transitions plus longues laissent plus de zones inconnues.',
  balancedHint: 'Salles et couloirs équilibrent parfaitement l espace.',
  sprawlingHint: 'Une grande couverture de sol favorise les rencontres dynamiques.',
  mapReady: 'Légende de la carte',
  dimensionsUnit: 'cases de grille',
};

const faq = [
  {
    question: 'La même graine génère-t-elle toujours la même carte ?',
    answer: 'Oui. La graine, les dimensions de grille, la densité et le style forment une configuration déterministe. Réutiliser les quatre paramètres reproduit exactement les mêmes pièces et portes.',
  },
  {
    question: 'Toutes les salles sont-elles interconnectées ?',
    answer: 'Oui. Les pièces sont reliées par un itinéraire principal après leur placement, garantissant que chaque zone praticable appartient à une seule carte connectée.',
  },
  {
    question: 'Quelles sont les différences entre donjon, caverne et Sci-Fi ?',
    answer: 'Le style donjon utilise des pièces en pierre régulières. Les cavernes façonnent des salles naturelles irrégulières. Le style Sci-Fi privilégie de larges modules avec sas doubles.',
  },
  {
    question: 'Quel format exporter pour une table virtuelle (VTT) ?',
    answer: 'Le format PNG est idéal pour la majorité des tables virtuelles. Le SVG reste net à n importe quelle échelle et s édite facilement dans des logiciels vectoriels.',
  },
  {
    question: 'Peut-on partager une carte générée avec d autres personnes ?',
    answer: 'Oui. Copiez le lien pour intégrer la configuration dans l URL ou téléchargez le fichier JSON. Le destinataire chargera le même donjon instantanément.',
  },
  {
    question: 'Ce généateur inclut-il des monstres, pièges ou trésors ?',
    answer: 'Non. Il produit un plan architectural neutre. La disposition des rencontres, pièges et trésors reste sous la responsabilité du maître du jeu.',
  },
];

const howTo = [
  {
    name: 'Définir les dimensions',
    text: 'Choisissez le nombre de colonnes et de lignes pour adapter la carte à vos notes ou à votre table virtuelle.',
  },
  {
    name: 'Choisir l architecture',
    text: 'Sélectionnez donjon, caverne ou science-fiction, puis ajustez la densité de salles.',
  },
  {
    name: 'Générer et inspecter',
    text: 'Saisissez une graine ou générez-en une nouvelle, puis vérifiez le nombre de pièces, portes et la surface.',
  },
  {
    name: 'Exporter et partager',
    text: 'Téléchargez en PNG ou SVG pour jouer, ou sauvegardez la configuration via un lien ou un fichier JSON.',
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
  name: 'Générateur de Donjons Aléatoires',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'Un générateur déterministe de cartes de donjon avec pièces connectées, couloirs, portes et exports PNG/SVG.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment générer une carte de donjon connectée',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'generateur-carte-donjon-aleatoire',
  title: 'Générateur de Cartes de Donjon Aléatoires pour Jeux de Rôle',
  description: 'Créez des cartes reproductibles de donjons, cavernes et science-fiction avec pièces connectées, portes et export PNG/SVG.',
  ui,
  seo: [
    { type: 'title', text: 'Générez une Carte de Donjon Jouable grâce à une Graine Réutilisable', level: 2 },
    { type: 'paragraph', html: 'Une carte de donjon aléatoire efficace doit offrir bien plus qu un bruit visuel sans logique. Chaque pièce doit être accessible par des couloirs connectés, la grille doit correspondre à votre surface de jeu et le résultat doit pouvoir être rechargé à tout moment. Ce générateur traite la graine et les réglages comme une spécification de carte déterministe.' },
    { type: 'title', text: 'Dimensions de Grille pour Impression et Tables Virtuelles', level: 2 },
    { type: 'paragraph', html: 'Définir la taille de grille est la première étape pratique. Une petite grille s imprime facilement sur papier pour des aventures courtes, tandis qu une grande carte laisse de la place pour l exploration complexe et plusieurs factions. L image exportée préserve des cases parfaitement carrées pour s aligner facilement sur les grilles VTT.' },
    {
      type: 'table',
      headers: ['Taille de grille', 'Usage typique', 'Densité initiale', 'Note de planification'],
      rows: [
        ['20 par 16 cases', 'Aventure rapide (One-shot)', '35 à 45', 'Facile à imprimer et lecture visuelle rapide'],
        ['36 par 26 cases', 'Donjon de session', '45 à 55', 'Rythme équilibré entre pièces et couloirs'],
        ['52 par 38 cases', 'Complexe multi-sessions', '50 à 65', 'Espace vaste pour factions et chemins optionnels'],
      ],
    },
    { type: 'tip', title: 'Adaptez la Carte à l Échelle des Rencontres', html: 'Calculez l espace nécessaire pour vos affrontements majeurs avant de choisir la taille totale du plateau. Un grand donjon rempli de pièces minuscules peut paraître à l étroit, tandis qu une carte compacte dotée d une grande salle centrale favorisera des scènes mémorables.' },
    { type: 'title', text: 'Interprétez la Couverture du Sol comme un Signal de Rythme', level: 2 },
    { type: 'paragraph', html: 'La couverture du sol indique le pourcentage du canevas représentant une zone praticable. Une faible couverture met l accent sur les zones inconnues et la tension du voyage. Une couverture moyenne offre une exploration fluide. Une couverture élevée crée un complexe fortifié où les combats peuvent s étendre entre pièces contiguës.' },
    {
      type: 'list',
      items: [
        '<strong>Exploration tendue :</strong> profitez des espaces vides pour suggérer l isolement ou des passages secrets.',
        '<strong>Expédition équilibrée :</strong> alternez pièces d enquête, couloirs de liaison et salles de combat.',
        '<strong>Forteresse vaste :</strong> préparez des lignes de vue claires, des patrouilles et des rencontres interconnectées.',
      ],
    },
    { type: 'title', text: 'Transformez un Plan Neutre en Lieu d Aventure', level: 2 },
    { type: 'paragraph', html: 'La carte générée fournit uniquement la structure architecturale de base. Attribuez un rôle narratif à chaque pièce principale et placez vos indices, pièges et trésors en conséquence.' },
    { type: 'tip', title: 'Sauvegardez la Configuration avant d Annoter', html: 'Copiez le lien ou enregistrez le fichier JSON avant d ajouter vos notes de rencontre afin de conserver une version propre pour vos joueurs.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
