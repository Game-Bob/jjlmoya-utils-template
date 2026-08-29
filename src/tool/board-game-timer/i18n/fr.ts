import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Minuteur de Jeux de Société',
  setupTitle: 'Configuration du Jeu',
  playerNamePlaceholder: 'Nom du joueur',
  addPlayer: 'Ajouter joueur',
  removePlayer: 'Supprimer',
  startGame: 'Démarrer',
  pauseGame: 'Pause',
  resumeGame: 'Reprendre',
  resetGame: 'Réinitialiser',
  nextTurn: 'Fin du tour',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Joueur',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  expiredLabel: 'TEMPS ÉCOULÉ',
  overtimeLabel: 'Temps additionnel',
  turnIndicator: 'À toi de jouer',
  warningLowTime: 'Temps faible',
  pausedOverlay: 'Jeu en pause',
  roundLabel: 'Manche',
  settingsTitle: 'Paramètres',
  baseTimeLabel: 'Temps de base',
  incrementLabel: 'Incrément/Retard',
  warningTimeLabel: 'Seuil d\'alerte',
  confirmLabel: 'Confirmer',
  cancelLabel: 'Annuler',
  noPlayersHint: 'Ajoutez au moins 2 joueurs',
  addPlayerHint: 'Entrez le nom du joueur',
  timeUpLabel: 'Temps écoulé !',
  presetsTitle: 'Préréglages',
  timeControlTitle: 'Contrôle du temps',
  modeLabel: 'Mode',
  modeNormal: 'Compte à rebours normal',
  modeFischer: 'Fischer (Incrément)',
  modeBronstein: 'Bronstein (Retard)',
  modeHourglass: 'Sablier',
  modeTurn: 'Réinitialisation tour',
  audioTitle: 'Alertes audio',
  soundAlerts: 'Effets sonores',
  playersTitle: 'Joueurs',
  playersAdded: 'Joueurs ajoutés',
  statsTitle: 'Statistiques du jeu',
  totalGameTime: 'Temps total',
  totalRounds: 'Total des tours',
  slowestPlayer: 'Joueur le plus lent',
  playerPerformance: 'Analyse du temps par joueur',
  playAgain: 'Nouveau jeu',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'minuteur-jeux-de-societe-sablier',
  title: 'Minuteur de Jeux de Société: Pendule d\'Échecs & Gestionnaire de Tours',
  description: 'Gérez le temps et les tours dans vos sessions de jeux de table avec un minuteur professionnel. Supporte le mode duel, multijoueur, incrément Fischer, retard Bronstein et statistiques.',
  ui,
  seo: [
    { type: 'title', text: 'Maîtriser le rythme autour de la table: comment le contrôle du temps améliore l\'expérience de jeu', level: 2 },
    { type: 'paragraph', html: 'La gestion du temps est un aspect fondamental dans les jeux de société modernes. Que vous participiez à un jeu d\'ambiance dynamique ou à un jeu de stratégie complexe, réguler le temps de réflexion garantit que chaque participant dispose d\'un espace de parole équitable. L\'utilisation de méthodes de chronométrage professionnelles comme l\'incrément Fischer, le retard Bronstein ou le sablier élimine la paralysie par analyse, assure la fluidité des parties et ajoute une dimension tactique supplémentaire sur le plateau.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Joueurs supportés' },
        { value: '5 Modes', label: 'Configurations' },
        { value: '100ms', label: 'Précision du moteur' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein et Sablier: Fonctionnement des contrôles de temps avancés', level: 2 },
    { type: 'paragraph', html: 'Notre minuteur de jeux de société prend en charge plusieurs options inspirées des tournois de compétition, permettant un déroulement fluide de vos sessions :' },
    {
      type: 'table',
      headers: ['Mode', 'Fonctionnement', 'Idéal pour'],
      rows: [
        ['Compte à rebours normal', 'Un compte à rebours standard qui se met en pause à la fin du tour.', 'Jeux occasionnels avec une réserve de temps globale'],
        ['Fischer (Incrément)', 'Ajoute un nombre fixe de secondes à votre réserve de temps après avoir terminé un tour.', 'Jeux de stratégie et wargames où jouer vite permet de cumuler du temps'],
        ['Bronstein (Retard)', 'Offre un délai de grâce avant que votre minuteur principal ne commence à s\'écouler.', 'Jeux tactiques complexes où les petites actions d\'administration doivent être gratuites'],
        ['Sablier', 'Votre minuteur diminue pendant que celui de votre adversaire augmente en temps réel.', 'Duels compétitifs intenses à deux joueurs et parties d\'échecs'],
        ['Réinitialisation tour', 'Un minuteur fixe qui se réinitialise complètement au début de chaque tour.', 'Jeux d\'ambiance rapides, jeux de quiz ou manches rapides'],
      ],
    },
    {
      type: 'tip',
      title: 'Trouver la configuration temporelle idéale',
      html: 'Un bon point de départ consiste à allouer 30 à 45 secondes pour les jeux d\'ambiance légers, 1 à 2 minutes avec un retard Bronstein de 5 secondes pour les jeux de société de poids moyen, et 30 à 45 minutes avec un incrément Fischer de 10 secondes pour les wargames ou campagnes de stratégie.',
    },
    {
      type: 'title',
      text: 'Optimisation visuelle: Duel sur écran partagé ou bouton central multijugeur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour les duels en face à face, l\'application affiche un écran partagé en mode pendule d\'échecs. Cette vue permet de pivoter les moitiés d\'écran de 180 degrés, facilitant la lisibilité pour les joueurs installés de chaque côté de la table. Pour les jeux à 3 participants ou plus, l\'interface se transforme en grille multijoueur avec rétroéclairage du joueur actif, ajustements de cartes individuelles et un grand bouton central Fin de Tour qui sert de buzzer physique partagé au centre de l\'aire de jeu.',
    },
    {
      type: 'proscons',
      title: 'Avantages et inconvénients: Incrément Fischer vs Retard Bronstein',
      items: [
        {
          pro: 'L\'incrément Fischer récompense la rapidité en accumulant du temps pour les tours futurs.',
          con: 'Le temps de jeu global peut s\'allonger si les joueurs jouent constamment de manière extrêmement rapide.',
        },
        {
          pro: 'Le retard Bronstein empêche de perdre du temps sur des actions administratives courtes sans accumuler de grandes réserves.',
          con: 'Nécessite de configurer un délai approprié correspondant au temps de gestion physique nécessaire dans le jeu.',
        },
        {
          pro: 'Le sablier crée une tension immédiate dans les duels en drainant votre temps directement au profit de votre adversaire.',
          con: 'Devient mathématiquement complexe et moins stratégique au-delà de deux joueurs.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Genres de jeux de société bénéficiant des minuteurs de tour',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Jeux de gestion (Euros)',
          description: 'Jeux de placement d\'ouvriers et de gestion de ressources où les tours varient en complexité. L\'incrément Fischer aide à gérer les décisions critiques de fin de partie sans ralentir les premiers tours.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Limite la paralysie par analyse',
            'Soutien des tours à complexité variable',
            'Le temps devient une ressource active',
          ],
        },
        {
          title: 'Jeux d\'ambiance & Quiz',
          description: 'Jeux rapides où la réactivité fait partie du plaisir. Les minuteurs réinitialisés à chaque tour maintiennent la dynamique et évitent qu\'un joueur ne bloque le rythme.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Comptes à rebours courts et fixes',
            'Maintient la dynamique de la partie',
            'Force des actions immédiates',
          ],
        },
        {
          title: 'Duels en tournoi',
          description: 'Les duels nécessitent des configurations rotatives précises pour garantir l\'équité compétitive et un minutage rigoureux sur plusieurs rondes.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            'Rotation de l\'écran à 180 degrés',
            'Précision à l\'intervalle de 100ms',
            'Gestion de la mort subite et du temps additionnel',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Incrément Fischer',
          definition: 'Méthode de contrôle du temps où un nombre de secondes défini est ajouté au temps restant d\'un joueur après la fin de chaque tour.',
        },
        {
          term: 'Retard Bronstein',
          definition: 'Méthode de contrôle du temps où le compte à rebours est suspendu pendant un temps donné au début d\'un tour, évitant de déduire du temps si le tour est joué rapidement.',
        },
        {
          term: 'Mode Sablier',
          definition: 'Système de chronométrage dynamique dans lequel le temps déduit de l\'horloge d\'un joueur est transféré en temps réel à celle de son adversaire.',
        },
        {
          term: 'Paralysie par analyse',
          definition: 'État de sur-réflexion où un joueur se retrouve submergé par les options, ce qui bloque le rythme du jeu et nuit à l\'expérience des autres.',
        },
        {
          term: 'Statistiques de partie',
          definition: 'Indicateurs de performance de fin de partie récapitulant les tours écoulés, la vitesse moyenne de réflexion, les durées maximales de tour et les classements de rapidité.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Comment fonctionne l\'affichage en mode Duel ?',
      answer: 'Pour les parties à 2 joueurs, l\'interface affiche une pendule d\'échecs à écran partagé. Chaque moitié représente un joueur, et taper dessus termine son tour. L\'écran peut être pivoté à 180 degrés pour les joueurs assis face à face.',
    },
    {
      question: 'Quelle est la différence entre les modes Fischer et Bronstein ?',
      answer: 'Le mode Fischer ajoute des secondes à la réserve d\'un joueur après son tour, lui permettant de cumuler du temps. Le mode Bronstein applique un retard au début du tour; si le tour finit avant la fin de ce délai, aucun temps n\'est déduit.',
    },
    {
      question: 'L\'application suit-elle les statistiques de jeu ?',
      answer: 'Oui ! À la fin de la partie ou en cas de temps expiré, le module de statistiques présente la durée totale, le nombre de tours, la moyenne de temps par tour, le tour le plus long, et le classement des joueurs par vitesse.',
    },
    {
      question: 'Mes joueurs sont-ils enregistrés lors d\'un rafraîchissement ?',
      answer: 'Oui, la liste des joueurs et le choix de leurs couleurs sont automatiquement sauvegardés dans le stockage local de votre navigateur et restaurés lors de votre prochaine visite.',
    },
    {
      question: 'Puis-je modifier le temps au cours d\'une partie ?',
      answer: 'Oui ! En mode multijugeur, les fiches des joueurs disposent de boutons d\'action rapide (+30s et -30s) pour adapter le temps restant en cours de jeu.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurer la partie',
      text: 'Sélectionnez un préréglage (Casual, Blitz, Stratégique, Sablier) ou définissez vos paramètres personnalisés: temps de base, incrément/retard, et seuil d\'alerte.',
    },
    {
      name: 'Ajouter et organiser les joueurs',
      text: 'Saisissez les noms des joueurs et sélectionnez une couleur. Ajustez l\'ordre des tours à l\'aide des flèches ; les données sont enregistrées automatiquement.',
    },
    {
      name: 'Lancer et passer les tours',
      text: 'Démarrez le jeu. En mode Duel, appuyez sur votre moitié d\'écran pour terminer votre tour. En mode Multijugeur, cliquez sur le grand bouton central Fin du Tour.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Minuteur de Jeux de Société & Gestionnaire de Tours',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment fonctionne l\'affichage en mode Duel ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pour les parties à 2 joueurs, l\'interface affiche une pendule d\'échecs à écran partagé. Chaque moitié représente un joueur, et taper dessus termine son tour. L\'écran peut être pivoté à 180 degrés pour les joueurs assis face à face.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la différence entre les modes Fischer et Bronstein ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le mode Fischer ajoute des secondes à la réserve d\'un joueur après son tour, lui permettant de cumuler du temps. Le mode Bronstein applique un retard au début du tour; si le tour finit avant la fin de ce délai, aucun temps n\'est déduit.'
          }
        },
        {
          '@type': 'Question',
          'name': 'L\'application suit-elle les statistiques de jeu ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui ! À la fin de la partie ou en cas de temps expiré, le module de statistiques présente la durée totale, le nombre de tours, la moyenne de temps par tour, le tour le plus long, et le classement des joueurs par vitesse.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Mes joueurs sont-ils enregistrés lors d\'un rafraîchissement ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui, la liste des joueurs et le choix de leurs couleurs sont automatiquement sauvegardés dans le stockage local de votre navigateur et restaurés lors de votre prochaine visite.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Puis-je modifier le temps au cours d\'une partie ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui ! En mode multijugeur, les fiches des joueurs disposent de boutons d\'action rapide (+30s et -30s) pour adapter le temps restant en cours de jeu.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment utiliser le minuteur de jeux de société',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Configurer la partie',
          'text': 'Sélectionnez un préréglage (Casual, Blitz, Stratégique, Sablier) ou définissez vos paramètres personnalisés: temps de base, incrément/retard, et seuil d\'alerte.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajouter et organiser les joueurs',
          'text': 'Saisissez les noms des joueurs et sélectionnez une couleur. Ajustez l\'ordre des tours à l\'aide des flèches ; les données sont enregistrées automatiquement.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lancer et passer les tours',
          'text': 'Démarrez le jeu. En mode Duel, appuyez sur votre moitié d\'écran pour terminer votre tour. En mode Multijugeur, cliquez sur le grand bouton central Fin du Tour.'
        }
      ]
    }
  ],
};
