import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Réglez le groupe et la menace. Le calculateur évalue la rencontre selon les seuils D&D 5e 2014.',
  partySection: 'Le groupe',
  partyLevel: 'Niveau des personnages',
  partyLevelHint: 'Utilisez un niveau moyen pour un groupe de niveau similaire.',
  partySize: 'Personnages',
  partySizeHint: 'Les règles ajustent le multiplicateur pour les très petits ou grands groupes.',
  threatSection: 'La menace',
  monsterCr: 'Facteur de puissance (CR)',
  monsterCrHint: 'Choisissez le CR d un monstre. Les groupes mixtes nécessitent un calcul séparé.',
  moreCr: 'Afficher plus de CR',
  lessCr: 'Afficher moins de CR',
  monsterCount: 'Nombre de monstres',
  monsterCountHint: 'Plus de créatures augmentent la pression d action même avec un XP de base modeste.',
  presets: 'Commencer par une scène',
  presetClassic: 'Patrouille classique',
  presetBoss: 'Boss en solo',
  presetSwarm: 'Horde de sbires',
  resultSection: 'Pression de la rencontre',
  belowEasyHint: 'Une scène légère pour préserver les ressources.',
  easyHint: 'Une scène gérable avec une faible pression sur le groupe.',
  mediumHint: 'Un test significatif pouvant coûter des points de vie ou ressources.',
  hardHint: 'Une scène dangereuse où la tactique et la gestion des ressources comptent.',
  deadlyHint: 'Signal de pression mortelle. Vérifiez les voies de repli et le terrain.',
  adjustedXp: 'XP Ajusté',
  baseXp: 'XP de Base',
  multiplier: 'Multiplicateur de groupe',
  partyThreshold: 'Seuil Moyen',
  belowEasy: 'Sub-facile',
  easy: 'Facile',
  medium: 'Moyen',
  hard: 'Difficile',
  deadly: 'Mortel',
  warning: 'Attention',
  partyAdjustment: 'Le multiplicateur est ajusté car le groupe compte moins de trois ou plus de cinq personnages.',
  highCr: 'Un monstre avec un CR supérieur au niveau du groupe peut mettre un personnage à terre rapidement.',
  manyMonsters: 'Onze monstres ou plus rendent le combat difficile à gérer et créent une forte volatilité.',
  rulesNote: 'Estimation selon les règles D&D 5e 2014. Ne prend pas en compte le terrain ou la tactique.',
  rulesLinkLabel: 'Lire les règles d origine',
  reset: 'Réinitialiser l exemple',
  xpUnit: 'XP',
  sceneLabel: 'Graphique de pression du combat',
  partyMarker: 'Groupe',
  threatMarker: 'Menace',
};

const faq = [
  {
    question: 'Quelles règles ce calculateur de difficulté utilise-t-il?',
    answer: 'Il utilise la méthode officielle D&D 5e 2014 des Règles de Base en comparant les seuils du groupe avec l XP ajusté des monstres.',
  },
  {
    question: 'Pourquoi l XP ajusté diffère-t-il de l XP accordé par le monstre?',
    answer: 'Les règles multiplient l XP total des monstres pour refléter le danger de plusieurs créatures agissant au même tour.',
  },
  {
    question: 'Puis-je l utiliser pour un groupe mixte de monstres?',
    answer: 'Utilisez-le comme estimation rapide pour des monstres identiques. Pour un groupe mixte, additionnez l XP de chaque créature et appliquez le multiplicateur.',
  },
  {
    question: 'Un résultat mortel signifie-t-il que le groupe va mourir?',
    answer: 'Non. Mortel signifie que l XP ajusté atteint le seuil mortel. Le terrain, la tactique et les sorts modifient le résultat réel.',
  },
  {
    question: 'Pourquoi la taille du groupe modifie-t-elle le multiplicateur?',
    answer: 'Les règles recommandent d augmenter le multiplicateur pour les groupes de moins de trois personnages et de le réduire à partir de six.',
  },
];

const howTo = [
  {
    name: 'Régler le niveau du groupe',
    text: 'Choisissez le niveau moyen des personnages du groupe.',
  },
  {
    name: 'Indiquer la taille du groupe',
    text: 'Entrez le nombre de personnages participant au combat.',
  },
  {
    name: 'Décrire la menace',
    text: 'Choisissez le niveau de danger (CR) et le nombre de monstres.',
  },
  {
    name: 'Lire la pression',
    text: 'Comparez l XP ajusté aux différents seuils de difficulté.',
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
  name: 'Calculateur de Difficulté de Rencontre D&D 5e',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Estimez la difficulté des rencontres D&D 5e 2014 selon le niveau, la taille du groupe, le CR des monstres, le nombre et les seuils officiels.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment calculer la difficulté d une rencontre D&D 5e',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'calculateur-difficulte-rencontre-dnd-5e',
  title: 'Calculateur de Difficulté de Rencontre D&D 5e',
  description: 'Évaluez la pression des combats D&D 5e 2014 grâce au niveau, à la taille du groupe, au CR des monstres, à l XP ajusté et aux seuils officiels.',
  ui,
  seo: [
    { type: 'title', text: 'Évaluez la difficulté du combat avant de lancer l initiative', level: 2 },
    { type: 'paragraph', html: 'Un combat D&D représente plus que le chiffre à côté d un monstre. Ce calculateur transforme la taille du groupe, le niveau, le CR et le nombre de monstres en XP ajusté selon les règles D&D 5e 2014. Le résultat visuel vous montre clairement où se situe la rencontre par rapport aux seuils facile, moyen, difficile et mortel.' },
    { type: 'title', text: 'Comment fonctionne la formule de rencontre D&D 5e', level: 2 },
    { type: 'paragraph', html: 'La méthode additionne le seuil d XP de chaque personnage pour chaque niveau de difficulté, puis applique le multiplicateur au total des monstres. Les groupes de moins de trois personnages utilisent le multiplicateur supérieur suivant, tandis que les groupes de six personnages ou plus utilisent le multiplicateur inférieur suivant.' },
    {
      type: 'table',
      headers: ['Signal', 'Que vérifier autour de la table'],
      rows: [
        ['Sub-facile', 'Le combat sert d échauffement ou de dépense mineure.'],
        ['Facile', 'Le groupe devrait l emporter sans dépenser beaucoup de ressources.'],
        ['Moyen', 'Prévoyez une pression modérée et au moins un choix de ressources.'],
        ['Difficile', 'Prévoyez une perte de points de vie et d emplacements de sorts.'],
        ['Mortel', 'Vérifiez la tactique, le terrain et les voies de repli.'],
      ],
    },
    { type: 'title', text: 'Pourquoi le nombre de monstres est primordial', level: 2 },
    { type: 'paragraph', html: 'Plusieurs monstres créent un danger supérieur à leur XP de base car ils multiplient les attaques et réactions au même tour. C est pourquoi une paire de créatures utilise un multiplicateur plus élevé qu une seule créature avec le même XP combiné.' },
    { type: 'tip', title: 'Un CR élevé constitue une alerte spécifique', html: 'Un monstre avec un CR supérieur au niveau du groupe peut neutraliser un personnage en une seule action puissante. Inspectez ses dégâts et ses capacités d contrôle plutôt que de vous fier uniquement à l étiquette de difficulté.' },
    { type: 'title', text: 'Utilisez le résultat comme outil de préparation', level: 2 },
    { type: 'paragraph', html: 'Avant de proposer un combat difficile ou mortel, prenez en compte l environnement, la surprise et la fatigue du groupe. Une pièce étroite, la couverture, les pièges et les sorts de concentration peuvent modifier la difficulté réelle autour de la table.' },
    { type: 'tip', title: 'Ajustement pour les groupes de monstres mixtes', html: 'Additionnez l XP de base de chaque créature et appliquez le multiplicateur correspondant au nombre total de monstres.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
