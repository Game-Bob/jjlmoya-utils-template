import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Choisir un cadre',
  frameHint: 'Sélectionnez la silhouette qui indique à la table qui est ce personnage avant même de lire son nom.',
  randomFrame: 'Cadre aléatoire',
  surfaceLegend: 'Peindre le jeton',
  backgroundLabel: 'Arrière-plan',
  borderLabel: 'Cadre',
  textLabel: 'Texte',
  overlayLabel: 'Teinte',
  randomColors: 'Couleurs aléatoires',
  borderWidthLabel: 'Épaisseur du cadre',
  opacityLabel: 'Opacité du cadre',
  overlayOpacityLabel: 'Teinte du portrait',
  stageLabel: 'Forge de jetons en direct',
  chooseImage: 'Choisir un portrait',
  positionHint: 'Faites glisser le portrait ou les étiquettes directement sur le jeton.',
  markerName: 'Nom du marqueur',
  markerNamePlaceholder: 'Nommer ce marqueur',
  textLegend: 'Ajouter des détails lisibles',
  textHint: 'Utilisez des étiquettes courtes comme le nom, le niveau ou le rôle. Glissez chacune sur le jeton.',
  textPlaceholder: 'Nom ou rôle du personnage',
  addText: 'Ajouter une étiquette',
  removeText: 'Retirer l\'étiquette',
  textSizeLabel: 'Taille du texte',
  alignmentLabel: 'Alignement du texte',
  alignLeft: 'Aligner à gauche',
  alignCenter: 'Centrer',
  alignRight: 'Aligner à droite',
  imageLegend: 'Ajuster le portrait',
  imageZoomLabel: 'Zoom du portrait',
  scaleLabel: 'Échelle d\'exportation',
  savedMarkers: 'Marqueurs enregistrés',
  noSavedMarkers: 'Les marqueurs enregistrés apparaîtront ici pour être réouverts et réutilisés dans une autre scène.',
  reuseMarker: 'Sélectionnez un marqueur pour le rouvrir dans la forge.',
  deleteMarker: 'Supprimer le marqueur',
  newMarker: 'Nouveau marqueur',
  download: 'Télécharger PNG',
  copy: 'Copier PNG',
  downloadBatch: 'Télécharger le lot',
  batchLabel: 'Exportation avancée en lot',
  batchHint: 'Optionnel: exportez plusieurs portraits avec le cadre et les couleurs actuels.',
  chooseBatch: 'Choisir les portraits',
  batchReady: '{count} portraits prêts à forger.',
  noImage: 'Aucun portrait chargé',
  noText: 'Aucune étiquette pour l\'instant. Ajoutez les détails dont votre groupe a besoin.',
  tokenDetails: 'Commandes du jeton de personnage',
  exportHint: 'Le PNG est transparent autour de la silhouette choisie, prêt pour table virtuelle ou impression.',
};

const faq = [
  {
    question: 'Qu\'est-ce qui fait un bon portrait pour un jeton de personnage ?',
    answer: 'Choisissez une illustration avec un visage net et un bon contraste par rapport au cadre. Un cadrage tête et épaules reste parfaitement lisible sur une table virtuelle.',
  },
  {
    question: 'Comment positionner idéalement le portrait dans le cadre ?',
    answer: 'Chargez l\'image puis faites-la glisser directement sur le jeton. Utilisez le zoom de portrait pour recentrer le visage sans modifier la forme du cadre.',
  },
  {
    question: 'Puis-je ajouter un nom et un niveau de personnage ?',
    answer: 'Oui. Ajoutez autant d\'étiquettes courtes que nécessaire, ajustez leur taille et leur alignement, puis placez-les sur une zone lisible du jeton.',
  },
  {
    question: 'Le fichier PNG conserve-t-il la transparence autour du jeton ?',
    answer: 'Oui. L\'image exportée garde le contour de la silhouette transparent, ce qui permet de placer facilement le jeton sur n\'importe quelle carte de jeu.',
  },
  {
    question: 'Puis-je créer les jetons de toute mon équipe d\'un coup ?',
    answer: 'Oui. Chargez plusieurs portraits dans l\'exportation en lot, conservez le style de cadre et téléchargez un fichier PNG transparent pour chaque portrait.',
  },
  {
    question: 'Où sont stockés mes marqueurs enregistrés ?',
    answer: 'La sauvegarde locale conserve vos marqueurs dans le navigateur de votre appareil. Aucune image n\'est envoyée vers un serveur distant.',
  },
];

const howTo = [
  { name: 'Choisissez la silhouette du personnage', text: 'Sélectionnez le cadre adapté au rôle: rond pour un héros classique, hexagonal pour le combat tactique ou étoile pour un boss.' },
  { name: 'Importez et cadrez le portrait', text: 'Choisissez un fichier ou glissez-le sur le jeton. Ajustez la position du visage et le niveau de zoom.' },
  { name: 'Ajoutez les informations utiles pour la table', text: 'Indiquez un nom court, un niveau ou un état. Gardez les textes brefs pour ne pas masquer l\'illustration.' },
  { name: 'Enregistrez et exportez en PNG', text: 'Votre marqueur s\'enregistre automatiquement. Téléchargez un PNG transparent prêt à l\'emploi pour votre table virtuelle.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'Créez des jetons de personnage lisibles pour jeux de rôle sur table avec cadres personnalisés, étiquettes, transparence et export PNG en lot.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment créer un jeton de personnage pour JDR',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'createur-tokens-personnages-jdr-table',
  title: 'Créateur de Tokens et Jetons de Personnage pour JDR',
  description: 'Créez des jetons de personnage lisibles pour jeux de rôle sur table avec cadres personnalisés, étiquettes, transparence et export PNG en lot.',
  ui,
  seo: [
    { type: 'title', text: 'Concevez des jetons de personnage lisibles sur vos cartes de jeu', level: 2 },
    { type: 'paragraph', html: 'Un jeton est un outil de communication visuelle à la table de jeu. Sa silhouette indique immédiatement au groupe s\'il s\'agit d\'un héros, d\'un monstre ou d\'un PNJ. Choisissez le cadre approprié et gardez le visage et les textes parfaitement lisibles à petite échelle.' },
    { type: 'title', text: 'Choisissez le bon cadre selon la nature du personnage', level: 2 },
    { type: 'list', items: ['<strong>Cercle:</strong> classique et efficace pour les personnages joueurs et alliés.', '<strong>Hexagone ou octogone:</strong> idéal pour distinguer les unités dans les combats tactiques.', '<strong>Étoile:</strong> parfait pour les boss, champions ou cibles prioritaires.', '<strong>Nuage:</strong> adapté aux esprits, familiers et créatures féeriques.'] },
    { type: 'tip', title: 'Concevez pour la taille minimale utilisée en jeu', html: 'Dézoomez la carte jusqu\'à ce que le jeton ne fasse plus que quelques dizaines de pixels. Si le visage et le cadre restent distincts, votre jeton sera parfait en cours de partie.' },
    { type: 'title', text: 'Des étiquettes courtes et efficaces autour de la table', level: 2 },
    { type: 'paragraph', html: 'Un jeton ne doit pas remplacer une feuille de personnage complète. Ajoutez seulement une ou deux informations essentielles: un nom court, un niveau ou un état. Les phrases longues créent du bruit visuel inutilisable.' },
    { type: 'title', text: 'Préparez toute une équipe sans perdre leur identité', level: 2 },
    { type: 'paragraph', html: 'L\'exportation en lot permet de traiter l\'ensemble du groupe après une session zéro. Appliquez un cadre commun pour l\'unité visuelle tout en laissant chaque illustration exprimer la personnalité du personnage.' },
    { type: 'tip', title: 'Sauvegarde automatique dans votre navigateur', html: 'Le jeton actif est sauvegardé localement sur votre appareil. Vous pouvez y revenir à tout moment pour modifier un niveau ou un état au cours de la campagne.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
