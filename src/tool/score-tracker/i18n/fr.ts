import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Compteur de Points',
  addPlayer: 'Ajouter un joueur',
  removePlayer: 'Retirer',
  renamePlayer: 'Renommer',
  startRound: 'Commencer la manche 1',
  nextRound: 'Manche suivante',
  resetGame: 'Réinitialiser la partie',
  undoRound: 'Annuler la dernière manche',
  playerLabel: 'Joueur',
  scoreLabel: 'Points',
  roundLabel: 'Manche',
  totalLabel: 'Total',
  rankLabel: 'Classement',
  leaderboardTitle: 'Classement',
  historyTitle: 'Historique des scores',
  noPlayersHint: 'Ajoutez des joueurs pour commencer à compter les points',
  playerNamePlaceholder: 'Nom du joueur',
  confirmLabel: 'Confirmer',
  cancelLabel: 'Annuler',
  deleteRoundConfirm: 'Supprimer la dernière manche ?',
  playerAdded: 'Joueur ajouté',
  playerRemoved: 'Joueur retiré',
  roundStarted: 'Manche commencée',
  gameReset: 'La partie a été réinitialisée',
  noRoundsYet: 'Aucune manche enregistrée pour le moment',
  currentRoundLabel: 'Manche en cours',
  scoringTitle: 'Saisie des points',
  resetAllLabel: 'Tout réinitialiser',
  confirmResetAll: 'Cela supprimera tous les joueurs et les scores. Êtes-vous sûr ?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'compteur-de-points',
  title: 'Compteur de Points: Tableau de Score Multijoueur et Gestionnaire de Classement',
  description: 'Suivez les scores de n importe quel jeu de société. Ajoutez des joueurs, enregistrez les points manche par manche et regardez le classement se mettre à jour en temps réel avec des classements automatiques.',
  ui,
  seo: [
    { type: 'title', text: 'Comptage de Points aux Jeux de Société: Comment Éviter les Erreurs', level: 2 },
    { type: 'paragraph', html: 'Compter les points aux jeux de société semble simple jusqu à ce que vous soyez à cinq manches d une partie et que quelqu un réalise qu il s est trompé. Que vous jouiez à Wingspan, Terraforming Mars, Catan ou à tout jeu à points de victoire, un comptage précis fait la différence entre une partie équitable et une dispute. Un compteur de points numérique élimine les erreurs de calcul, affiche les classements en direct et conserve un historique complet de chaque manche pour vérifier le total final.' },
    {
      type: 'stats',
      items: [
        { value: 'Illimité', label: 'Joueurs supportés' },
        { value: 'Temps Réel', label: 'Mise à jour du classement' },
        { value: 'Illimité', label: 'Manches enregistrées' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Erreurs de Comptage Courantes et Comment les Éviter', level: 2 },
    { type: 'paragraph', html: 'L erreur la plus fréquente est d oublier d ajouter les bonus de fin de manche ou de mal additionner une colonne de chiffres. Lorsque vous suivez les scores numériquement, le total courant se met automatiquement à jour après chaque saisie. Cela signifie que vous pouvez repérer une erreur au moment où un chiffre semble anormal, plutôt que de la découvrir à la fin de la partie lorsque personne ne se souvient de la valeur correcte. La fonction d historique des manches vous permet de vérifier n importe quelle manche antérieure et de corriger les erreurs sans redémarrer toute la partie.' },
    {
      type: 'tip',
      title: 'Conseils Rapides pour le Comptage',
      html: 'Saisissez les scores immédiatement après chaque manche pendant que tout le monde se souvient encore des résultats. Utilisez des étiquettes descriptives comme les couleurs ou les noms de factions au lieu de vrais noms pour les jeux à rôles cachés. Lorsque vous jouez avec des enfants, laissez-les appuyer eux-mêmes sur les boutons pour les impliquer dans le processus de comptage.',
    },
    {
      type: 'title',
      text: 'Saisie par Manche vs Total Seulement',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Score par Manche vs Score Final Seulement',
      items: [
        {
          pro: 'Vous pouvez voir qui menait à chaque étape du jeu et comment la dynamique a évolué.',
          con: 'Nécessite de saisir les données après chaque manche au lieu d une seule fois à la fin.',
        },
        {
          pro: 'Les erreurs sont faciles à localiser car vous pouvez vérifier les saisies individuelles de chaque manche par rapport à vos souvenirs.',
          con: 'Prend un peu plus de temps pendant la session de jeu.',
        },
        {
          pro: 'Les joueurs peuvent vérifier leurs propres scores de manche, réduisant les litiges et renforçant la confiance.',
          con: 'Fonctionne mieux quand une personne gère l appareil ou que les joueurs se relaient.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jeux avec des Systèmes de Score Inhabituels',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Jeux à Points de Victoire',
          description: 'La plupart des eurogames utilisent des points de victoire attribués tout au long de la partie. Le défi est de suivre plusieurs sources de PV: ressources, accomplissements, bonus de fin de partie. Un tracker numérique vous permet de saisir les points au fur et à mesure et de voir le total courrant.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Suivi de plusieurs catégories de score',
            'Calcul des bonus de fin de partie',
            'Résolution instantanée des égalités',
          ],
        },
        {
          title: 'Jeux avec Score Négatif',
          description: 'Certains jeux pénalisent les joueurs avec des points négatifs pour certaines actions. Un compteur numérique gère les valeurs négatives naturellement, les colorant en rouge pour que la pénalité soit immédiatement visible. Particulièrement utile dans les jeux de plis ou les jeux de déduction avec des mécanismes de pénalité.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Gestion automatique des négatifs',
            'Indicateurs visuels de pénalité',
            'Totaux cumulés précis',
          ],
        },
        {
          title: 'Jeux de Campagne',
          description: 'Les jeux legacy et de campagne reportent les scores d une session à l autre. Sans tracker, vous devez conserver des notes papier entre les soirées jeux. Un outil numérique garde vos scores de campagne organisés et vous permet de voir comment vos décisions ont affecté le classement général.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Suivi persistant des campagnes',
            'Comparaison entre sessions',
            'Détail session par session',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossaire du Comptage de Points',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Points de Victoire (PV)',
          definition: 'L unité de score standard dans la plupart des jeux de société modernes. Les joueurs gagnent des PV par leurs actions, et celui qui en a le plus à la fin de la partie gagne.',
        },
        {
          term: 'Score par Manche',
          definition: 'Enregistrer les scores à la fin de chaque manche plutôt qu uniquement à la fin du jeu. Cela crée un historique détaillé et facilite la vérification des erreurs.',
        },
        {
          term: 'Classement',
          definition: 'Un classement en direct qui montre la position de chaque joueur en fonction du score total. Le classement se réorganise automatiquement à mesure que de nouveaux scores sont saisis.',
        },
        {
          term: 'Score Négatif',
          definition: 'Un système de score où les joueurs peuvent perdre des points par des pénalités ou des actions échouées, aboutissant à des totaux négatifs. Un tracker numérique gère cela sans erreurs de soustraction manuelle.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Comment Gérer les Scores Contestés',
      icon: 'mdi:information-outline',
      badge: 'ASTUCE DE JEU',
      html: 'Lorsqu un joueur conteste un score, ne le modifiez pas immédiatement. Vérifiez d abord l historique des manches pour confirmer ce qui a été saisi. Si l entrée est erronée, utilisez les boutons +/- pour la corriger et le total se met à jour automatiquement. Si l entrée de la manche est correcte mais que le joueur est en désaccord, l historique fournit un enregistrement objectif que tout le monde peut consulter ensemble.',
    },
  ],
  faq: [
    {
      question: 'Combien de joueurs puis-je suivre ?',
      answer: 'Il n y a pas de limite. Ajoutez autant de joueurs que votre jeu le permet et renommez-les à tout moment pendant la session.',
    },
    {
      question: 'Puis-je annuler une erreur ?',
      answer: 'Oui. Utilisez le bouton Annuler la Dernière Manche pour supprimer la manche la plus récente, ce qui recalcule automatiquement tous les totaux et classements.',
    },
    {
      question: 'Le compteur de points sauvegarde-t-il mes données ?',
      answer: 'Le compteur de points fonctionne entièrement dans votre navigateur. Les données persistent pendant la session en cours. Un rechargement de la page réinitialisera tous les scores.',
    },
    {
      question: 'Comment fonctionne le classement ?',
      answer: 'Le classement trie les joueurs par score total décroissant. Les rangs se mettent à jour automatiquement à mesure que vous saisissez ou modifiez les scores de chaque manche.',
    },
    {
      question: 'Puis-je suivre des scores négatifs ?',
      answer: 'Oui. Les boutons +/- permettent des ajustements positifs et négatifs, ce qui le rend adapté aux jeux avec des points de pénalité ou des mécanismes de déduction.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ajouter des joueurs',
      text: 'Saisissez les noms des joueurs à l aide du champ Ajouter un Joueur. Vous pouvez ajouter ou retirer des joueurs à tout moment pendant la partie.',
    },
    {
      name: 'Commencer le comptage',
      text: 'Cliquez sur Commencer la Manche pour débuter une nouvelle manche de score. Utilisez les boutons +/- pour ajuster le score de chaque joueur pour cette manche.',
    },
    {
      name: 'Voir les classements',
      text: 'Le classement se met à jour automatiquement. Parcourez l onglet Historique des Scores pour consulter les saisies des manches précédentes.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Compteur de Points & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Combien de joueurs puis-je suivre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il n y a pas de limite. Ajoutez autant de joueurs que votre jeu le permet et renommez-les à tout moment pendant la session.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je annuler une erreur ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui. Utilisez le bouton Annuler la Dernière Manche pour supprimer la manche la plus récente, ce qui recalcule automatiquement tous les totaux et classements.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Le compteur de points sauvegarde-t-il mes données ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le compteur de points fonctionne entièrement dans votre navigateur. Les données persistent pendant la session en cours. Un rechargement de la page réinitialisera tous les scores.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment fonctionne le classement ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le classement trie les joueurs par score total décroissant. Les rangs se mettent à jour automatiquement à mesure que vous saisissez ou modifiez les scores de chaque manche.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je suivre des scores négatifs ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui. Les boutons +/- permettent des ajustements positifs et négatifs, ce qui le rend adapté aux jeux avec des points de pénalité ou des mécanismes de déduction.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment utiliser le Compteur de Points',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ajouter des joueurs',
          'text': 'Saisissez les noms des joueurs à l aide du champ Ajouter un Joueur. Vous pouvez ajouter ou retirer des joueurs à tout moment pendant la partie.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Commencer le comptage',
          'text': 'Cliquez sur Commencer la Manche pour débuter une nouvelle manche de score. Utilisez les boutons +/- pour ajuster le score de chaque joueur pour cette manche.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Voir les classements',
          'text': 'Le classement se met à jour automatiquement. Parcourez l onglet Historique des Scores pour consulter les saisies des manches précédentes.',
        },
      ],
    },
  ],
};
