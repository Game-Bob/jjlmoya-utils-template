import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'Sélecteur de Premier Joueur',
  instructions: 'Placez vos doigts sur l\'écran ou cliquez pour ajouter des épingles',
  tapToSelect: 'Tapez pour sélectionner',
  winner: 'Gagnant désigné !',
  reset: 'Réinitialiser',
  start: 'Lancer le choix',
  setupTitle: 'Paramètres du sélecteur',
  clearPlayers: 'Effacer toutes les épingles',
  fingerMode: 'Mode Doigt',
  wheelMode: 'Mode Roulette',
  presetsTitle: 'Options',
  soundOn: 'Son activé',
  soundOff: 'Son désactivé',
  playerCountLabel: 'Épingles / Doigts',
};

const faq = [
  {
    question: 'Comment fonctionne le Mode Doigt ?',
    answer: 'En Mode Doigt, chaque joueur place un doigt sur l\'écran mobile. L\'outil détecte tous les points de contact, affiche des anneaux lumineux colorés autour d\'eux et lance automatiquement un court compte à rebours. Une fois le compte à rebours terminé, un joueur est mis en évidence comme gagnant tandis que les autres s\'estompent, accompagné d\'une explosion de particules.',
  },
  {
    question: 'Puis-je utiliser cet outil sur un ordinateur de bureau ?',
    answer: 'Oui ! Si vous êtes sur un appareil non tactile, l\'outil passe automatiquement en Mode Roulette. Vous pouvez cliquer sur la zone pour placer des épingles colorées représentant les joueurs, puis cliquer sur le bouton Lancer le choix pour faire tourner la roue du sélecteur.',
  },
  {
    question: 'Combien de joueurs peuvent participer ?',
    answer: 'L\'outil prend en charge jusqu\'à 10 joueurs simultanément. En Mode Doigt, jusqu\'à 10 doigts peuvent être détectés à la fois. En Mode Roulette, vous pouvez placer jusqu\'à 10 épingles colorées sur la zone en cliquant.',
  },
  {
    question: 'La sélection est-elle vraiment aléatoire ?',
    answer: 'Oui. L\'algorithme de sélection utilise Math.random() de JavaScript, de qualité cryptographique, pour garantir des résultats impartiaux. En Mode Doigt, le gagnant est choisi uniformément au hasard parmi tous les points de contact détectés. En Mode Roulette, la roue décélère de manière réaliste grâce à une physique de friction, et l\'angle final détermine mathématiquement le gagnant.',
  },
  {
    question: 'Comment supprimer une épingle de joueur en Mode Roulette ?',
    answer: 'Il suffit de cliquer sur une épingle existante pour la supprimer. L\'outil détecte les clics dans un rayon de 30 pixels autour de chaque épingle placée et la supprime, vous permettant d\'ajuster la composition des joueurs avant de lancer la rotation.',
  },
  {
    question: 'Cet outil collecte-t-il ou transmet-il des données ?',
    answer: 'Pas du tout. Tout s\'exécute localement dans votre navigateur. Aucune donnée de doigt, position tactile ou résultat de sélection n\'est jamais envoyée à un serveur. Votre soirée de jeu reste totalement privée.',
  },
  {
    question: 'Fonctionne-t-il sur les projecteurs ou écrans externes ?',
    answer: 'Oui. Le Mode Roulette fonctionne parfaitement sur les grands écrans et les projecteurs pour les sessions de jeu de société. Les visuels néon à fort contraste et le grand compteur à rebours sont conçus pour être visibles depuis l\'autre bout de la pièce.',
  },
  {
    question: 'Pourquoi le compte à rebours se réinitialise-t-il quand quelqu\'un lève le doigt ?',
    answer: 'C\'est intentionnel. En Mode Doigt, le compte à rebours ne progresse que tant que tous les joueurs gardent leurs doigts immobiles sur l\'écran. Si quelqu\'un lève ou déplace son doigt, le minuteur se réinitialise pour garantir que tout le monde est engagé avant le lancement de la sélection. Cela évite les déclenchements accidentels.',
  },
  {
    question: 'Puis-je changer le son ou le couper ?',
    answer: 'Oui. Cliquez sur l\'icône du haut-parleur dans le coin supérieur droit pour activer ou désactiver le son. L\'outil joue un son de tic pendant le compte à rebours et une fanfare lorsqu\'un gagnant est désigné.',
  },
  {
    question: 'Que se passe-t-il s\'il n\'y a qu\'un seul joueur ?',
    answer: 'Dans les deux modes, au moins deux joueurs sont nécessaires pour effectuer une sélection. En Mode Doigt, le compte à rebours ne démarre pas tant qu\'au moins deux doigts ne sont pas détectés. En Mode Roulette, le bouton Lancer le choix reste désactivé jusqu\'à ce que vous placiez au moins deux épingles.',
  },
];

const howTo = [
  {
    name: 'Placer les Doigts ou les Épingles',
    text: 'En Mode Doigt, demandez à tous les joueurs de placer un doigt sur l\'écran. En Mode Roulette, cliquez n\'importe où sur la zone pour placer les épingles des joueurs.',
  },
  {
    name: 'Déclencher la Sélection',
    text: 'Pour le Mode Doigt, la sélection démarre automatiquement après avoir maintenu la position quelques secondes. Pour le Mode Roulette, cliquez sur le bouton Lancer le choix pour faire tourner.',
  },
  {
    name: 'Voir le Gagnant',
    text: 'Le gagnant est mis en évidence avec un effet de pulsation, une explosion de particules et une fanfare sonore. Cliquez sur Réinitialiser ou levez tous les doigts pour réessayer.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'selecteur-premier-joueur',
  title: 'Sélecteur de Premier Joueur: Choix au Doigt & Roulette de Tour',
  description: 'Choisissez qui commence dans vos jeux de société avec ce spectaculaire choix au doigt et cette roulette de tour interactive.',
  ui,
  seo: [
    { type: 'title', text: 'Équité et Stratégie: Résoudre l\'Avantage du Premier Joueur dans les Jeux de Société', level: 2 },
    { type: 'paragraph', html: 'Déterminer le premier joueur lors des sessions de jeux de société peut fortement influencer la dynamique de la partie. En théorie des jeux, l\'Avantage du Premier Joueur (FPA) désigne l\'avantage statistique dont bénéficie le joueur qui agit en premier par rapport à ses adversaires. Dans les parties d\'échecs stratégiques, les wargames et les Eurogames modernes comme Agricola ou Puerto Rico, agir en premier permet de sécuriser des ressources critiques ou de positionner ses pièces avant que les adversaires ne puissent réagir. Pour atténuer le FPA et garantir un terrain de jeu équilibré, une méthode de sélection fiable et impartiale est essentielle. Notre sélecteur de premier joueur numérique garantit un caractère aléatoire absolu, permettant aux groupes de joueurs d\'établir l\'ordre de tour instantanément et de commencer à jouer sans attendre.' },
    {
      type: 'stats',
      items: [
        { value: '100 % Aléatoire', label: 'Sélection Impartiale' },
        { value: '2 Secondes', label: 'Déclenchement du Compte à Rebours' },
        { value: 'Multitactile', label: 'Compatible Mobile' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Règles de Société vs. Générateurs Aléatoires Numériques: La Révolution Tactile', level: 2 },
    { type: 'paragraph', html: 'De nombreux livrets de règles de jeux de société modernes incluent des règles thématiques pour désigner le premier joueur, comme " le joueur le plus jeune commence ", " la dernière personne à avoir visité une ferme commence " ou " le joueur le plus grand commence ". Bien qu\'amusantes lors des premières parties, ces règles deviennent rapidement répétitives, statiques et injustes pour les groupes de jeu réguliers. Les générateurs aléatoires physiques comme les jets de dés ou les tirages de cartes ajoutent du temps de préparation et sont sujets aux biais humains ou à un mauvais mélange. Le mécanisme de choix au doigt résout ce problème en offrant un générateur aléatoire rapide, tactile et instantané qui sélectionne un premier joueur en quelques secondes sans nécessiter de cartes ou dés supplémentaires.' },
    {
      type: 'table',
      headers: ['Méthode de Sélection', 'Vitesse et Préparation', 'Qualité du Hasard', 'Idéal pour'],
      rows: [
        ['Règles Arbitraires du Livret', 'Instantané, mais répétitif', 'Zéro hasard après la première partie', 'Jeux familiaux et jeux de soirée'],
        ['Jets de Dés', 'Nécessite de trouver et lancer des dés, sujets aux égalités', 'Hasard élevé, mais fastidieux pour les grands groupes', 'Wargames et JDR'],
        ['Tirage de Cartes', 'Nécessite de mélanger et distribuer', 'Bon hasard, mais nécessite des cartes physiques', 'Jeux de construction de deck et jeux de cartes'],
        ['Sélecteur Tactile au Doigt', 'Instantané, zéro préparation, animations visuelles', 'Hasard algorithmique absolu', 'Tous les jeux de société et de plateau'],
      ],
    },
    {
      type: 'tip',
      title: 'Optimiser Votre Configuration Multitactile',
      html: 'Pour une expérience optimale en Mode Doigt, placez votre tablette ou smartphone à plat au centre de la table. Demandez à tous les joueurs de poser un doigt bien à plat sur la zone tactile. Le compte à rebours se réinitialise si un joueur lève ou déplace son doigt, évitant ainsi les déclenchements accidentels et garantissant un consensus absolu avant le lancement du sélecteur.',
    },
    {
      type: 'title',
      text: 'Choisir Votre Outil: Sélecteur Tactile au Doigt vs. Roulette à Piger',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selon votre configuration matérielle et votre environnement, vous pouvez basculer entre deux modes de présentation distincts conçus pour maximiser l\'espace écran et l\'accessibilité :',
    },
    {
      type: 'proscons',
      title: 'Comparaison des Modes de Sélection',
      items: [
        {
          pro: 'Le Mode Doigt offre une expérience extrêmement rapide et tactile, permettant à jusqu\'à 10 joueurs de placer leurs doigts simultanément.',
          con: 'Nécessite un écran tactile comme un smartphone ou une tablette.',
        },
        {
          pro: 'Le Mode Roulette fonctionne sur tout ordinateur portable, de bureau ou écran de projection, idéal pour les sessions virtuelles et les soirées de jeu à distance.',
          con: 'Nécessite de cliquer pour placer manuellement les épingles avant de lancer la rotation.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Optimisation Visuelle: Toiles Multitactiles vs. Roues à Décélération',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sélecteur Multitactile',
          description: 'Suivi de plusieurs points de contact distincts sur l\'écran. Affiche des toiles de connexion néon et des anneaux de compte à rebours rétrécissants autour de chaque doigt, culminant en une explosion de célébration.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Suivi tactile simultané',
            'Contrôle tactile par maintien et relâchement',
            'Explosions de particules spectaculaires',
          ],
        },
        {
          title: 'Roulette à Piger',
          description: 'Dispose des épingles de joueurs colorées autour d\'un centroïde mathématique. Fait tourner une roue de secteurs colorés qui ralentit naturellement grâce à une friction simulée avant de désigner le gagnant.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Alignement par centroïde',
            'Physique de ralentissement par friction',
            'Support universel de la souris sur ordinateur',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Avantage du Premier Joueur (FPA)',
          definition: 'Un biais d\'ordre de tour dans les jeux de société où le joueur qui commence bénéficie d\'un avantage statistiquement significatif dans la sélection d\'actions ou le contrôle des ressources.',
        },
        {
          term: 'Protocole de Sélection Tactile',
          definition: 'Une interaction par maintien tactile où tous les participants placent leurs doigts sur un écran tactile jusqu\'à ce qu\'un seul gagnant soit mis en évidence de manière aléatoire.',
        },
        {
          term: 'Physique de Décélération',
          definition: 'Une routine d\'animation mathématique qui applique des multiplicateurs de friction à une roue tournante pour simuler l\'inertie naturelle et créer de l\'anticipation.',
        },
        {
          term: 'Calcul du Centroïde',
          definition: 'Le point central calculé d\'un ensemble dispersé de coordonnées d\'épingles, utilisé comme pivot de rotation pour le graphisme de la roulette.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
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
      'name': 'Sélecteur de Premier Joueur et Choix au Doigt',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Utiliser le Sélecteur de Premier Joueur',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
