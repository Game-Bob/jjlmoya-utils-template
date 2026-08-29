import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Nommez les deux équipes, choisissez les règles de la table et appuyez sur les pierres lors du comptage de chaque main.',
  pairOneLabel: 'Équipe un',
  pairTwoLabel: 'Équipe deux',
  pairOneDefault: 'Table Nord',
  pairTwoDefault: 'Table Sud',
  targetPointsLabel: 'Points par jeu',
  targetPointsHint: 'Choisissez la limite de points pour chaque jeu (30, 40 ou 50).',
  gamesToWinLabel: 'Jeux pour gagner la vaca',
  gamesToWinHint: 'La première équipe à atteindre ce nombre remporte la partie.',
  deckLabel: 'Jeu de cartes',
  deckHint: 'Le jeu espagnol (Baraja española) de 40 cartes est le choix traditionnel. Si vous utilisez un jeu français, retirez les 8, 9 et 10.',
  spanishDeck: 'Baraja española (Jeu espagnol)',
  frenchDeck: 'Jeu français',
  frenchDeckNotice: 'N\'oubliez pas de retirer les 8, 9 et 10 du jeu français pour jouer avec 40 cartes. Les Valets correspondent aux Sotas, les Dames aux Caballos et les Rois aux Reyes.',
  pointsOption30: '30 points',
  pointsOption40: '40 points',
  pointsOption50: '50 points',
  gamesOption1: '1 jeu',
  gamesOption2: '2 jeux',
  gamesOption3: '3 jeux',
  startMatch: 'Ouvrir le marqueur',
  matchSettings: 'Configurer équipes et règles',
  liveMatch: 'Partie en cours',
  targetLabel: 'points par jeu',
  gameLabel: 'jeu',
  gamePlural: 'jeux',
  vacaLabel: 'jeux pour la victoire',
  scoreLabel: 'Pierres actuelles',
  handLabel: 'Choisissez l\'équipe qui a la main (Mano)',
  handSelected: 'a la main (Mano).',
  stonesLabel: 'Marqueurs',
  stoneSingular: 'pierre (piedra)',
  stonePlural: 'pierres (piedras)',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'pour gagner',
  addStone: 'pierre',
  addAmarraco: 'amarraco',
  closeGame: 'Fermer le jeu',
  closeGamePrompt: 'Confirmer que cette équipe a gagné la manche et démarrer la suivante ?',
  confirmationTitle: 'Confirmer l\'action',
  confirmAction: 'Confirmer',
  cancelAction: 'Continuer à jouer',
  undo: 'Annuler',
  resetMatch: 'Réinitialiser la partie',
  resetMatchPrompt: 'Réinitialiser la partie actuelle et effacer l\'historique des scores ?',
  historyTitle: 'Dernières annonces',
  noHistory: 'Aucune annonce pour l\'instant.',
  matchReady: 'La table est prête.',
  closeGameHint: 'Une équipe a atteint la limite de points. Confirmez le vainqueur du jeu.',
  waitingForScore: 'Continuez le comptage. Points restants pour l\'équipe en tête :',
  gameWon: 'Jeu terminé.',
  vacaWon: 'Vaca remportée. Lancez une nouvelle partie lorsque la table est prête.',
  gameClosed: 'a fermé le jeu.',
  pointsAdded: 'a marqué',
  matchSaved: 'Score sauvegardé sur cet appareil.',
  lastAction: 'Dernière action',
  settingsApplied: 'Nouvelles règles appliquées. La partie est réinitialisée.',
  pairNameRequired: 'Donnez un nom aux deux équipes avant d\'ouvrir le marqueur.',
  visualScoreLabel: 'Marqueur de points de Mus avec pierres, amarracos, jeux et limite',
};

const faq = [
  {
    question: 'Que permet de suivre ce marqueur de Mus en ligne ?',
    answer: 'Il permet de suivre les deux équipes, les pierres (unités), les amarracos (blocs de 5), les jeux gagnés (chicos), la vaca et la possession de la main (Mano).',
  },
  {
    question: 'Pourquoi les pierres et amarracos sont-ils séparés ?',
    answer: 'Une pierre représente 1 point et un amarraco équivaut à 5 pierres. Les afficher séparément permet un contrôle visuel direct avec les jetons physiques sur la table.',
  },
  {
    question: 'Peut-on jouer à 30, 40 ou 50 points ?',
    answer: 'Oui. Sélectionnez 30, 40 ou 50 points par jeu avant de lancer le marqueur.',
  },
  {
    question: 'Comment valider la fin d\'un jeu ?',
    answer: 'Dès qu\'une équipe atteint la limite fixée, le bouton de fermeture s\'active. Une fois confirmé, un jeu est attribué et les pierres reviennent à zéro.',
  },
  {
    question: 'Les données de jeu sont-elles conservées ?',
    answer: 'Oui, le score et les paramètres sont sauvegardés localement dans votre navigateur.',
  },
  {
    question: 'Ce marqueur impose-t-il les règles régionales du Mus ?',
    answer: 'Non. Le Mus comporte de nombreuses variantes régionales. Ce marqueur digital gère avec précision les points et les manches convenus entre les joueurs.',
  },
  {
    question: 'Jeu espagnol ou jeu français ?',
    answer: 'Le Mus se joue traditionnellement avec un jeu espagnol de 40 cartes. Avec un jeu français, retirez les 8, 9 et 10. Les Valets sont les Sotas, les Dames les Caballos et les Rois les Reyes.',
  },
];

const howTo = [
  {
    name: 'Nommer les équipes',
    text: 'Saisissez le nom des deux équipes pour les identifier facilement autour de la table.',
  },
  {
    name: 'Régler la limite et la vaca',
    text: 'Choisissez 30, 40 ou 50 points par jeu ainsi que le nombre de jeux requis pour gagner la vaca.',
  },
  {
    name: 'Compter les points et amarracos',
    text: 'Ajoutez une pierre (+1) ou un amarraco (+5) au fur et à mesure que les phases de jeu sont décomptées.',
  },
  {
    name: 'Valider la victoire de la manche',
    text: 'Lorsque le score est atteint, confirmez le vainqueur pour enregistrer le jeu et réinitialiser les pierres.',
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
  name: 'Marqueur de Points Mus en Ligne',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Compteur de points digital pour vos parties en direct du jeu espagnol Mus.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment marquer les points dans une partie de Mus',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'marqueur-de-points-mus-en-ligne',
  title: 'Marqueur de Points Mus en Ligne pour vos Parties',
  description: 'Suivez pierres, amarracos et vacas lors de vos parties du jeu traditionnel espagnol Mus. Pour jeux espagnols ou français.',
  ui,
  seo: [
    { type: 'title', text: 'Un Marquage Clair et Précis pour vos Parties de Mus', level: 2 },
    { type: 'paragraph', html: 'Le Mus est un jeu traditionnel espagnol réputé pour sa convivialité et son sens du bluff. Comme les points sont décomptés à chaque phase (Grande, Chica, Pares, Juego, Punto), disposer d\'un compteur digital clair évite tout litige autour du tapis.' },
    { type: 'title', text: 'Définissez la Limite de Points avant la Première Main', level: 2 },
    { type: 'paragraph', html: 'Bien que la règle classique prévoie 40 points, certaines tables préfèrent jouer à 30 ou 50 points. Ajustez le réglage avant de distribuer pour adapter le marqueur aux règles de votre table.' },
    {
      type: 'table',
      headers: ['Option', 'Effet', 'Recommandation'],
      rows: [
        ['30 points', 'Partie courte', 'Idéal pour des parties rapides ou tournois exprès'],
        ['40 points', 'Partie standard', 'La règle classique entre amis'],
        ['50 points', 'Partie longue', 'Pour privilégier la stratégie sur la durée'],
      ],
    },
    { type: 'tip', title: 'Validez les Règles à Voix Haute', html: 'Mettez-vous d\'accord avec vos adversaires sur la valeur des 3 (Rois) et 2 (As), ainsi que sur la gestion des jetons physiques.' },
    { type: 'title', text: 'Adaptation entre Jeu Espagnol et Jeu Français', level: 2 },
    { type: 'paragraph', html: 'Le jeu espagnol traditionnel de 40 cartes (Oros, Copas, Espadas, Bastos) constitue la référence. Si vous jouez avec des cartes françaises, retirez les 8, 9 et 10. Valets = Sotas, Dames = Caballos, Rois = Reyes.' },
    { type: 'title', text: 'Lecture du Score Numérique au Bord du Tapis', level: 2 },
    { type: 'paragraph', html: 'Le grand affichage indique le score total. La ligne en dessous convertit automatiquement ce total en amarracos et pierres pour un contrôle instantané.' },
    { type: 'list', items: ['<strong>Pierre (Piedra) :</strong> 1 point individuel.', '<strong>Amarraco :</strong> 1 jeton équivalant à 5 pierres.', '<strong>Jeu (Chico) :</strong> Manche remportée en atteignant le score cible.', '<strong>Vaca :</strong> Victoire finale obtenue en gagnant le nombre requis de jeux.'] },
    { type: 'title', text: 'Validation du Jeu et Correction d\'Erreurs', level: 2 },
    { type: 'paragraph', html: 'Dès le score cible atteint, validez la manche pour enregistrer le jeu et remettre le compteur à zéro. La fonction Annuler permet de corriger instantanément une erreur de frappe.' },
    { type: 'tip', title: 'Fonction Annuler en Cas d\'Erreur', html: 'Si des points ont été attribués par inadvertance à la mauvaise équipe, utilisez immédiatement la touche Annuler pour rectifier le score.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
