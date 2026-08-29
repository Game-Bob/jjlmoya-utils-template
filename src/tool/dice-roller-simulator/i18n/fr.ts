import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'lanceur-des-simulateur-probabilite',
  title: 'Lanceur de Dés & Simulateur de Probabilités',
  description: 'Lancez des dés polyédriques virtuels (D4, D6, D8, D10, D12, D20, D100), ajoutez des modificateurs et affichez des statistiques et des probabilités de lancer en direct pour les jeux de société et de rôle.',
  ui: {
    title: 'Lanceur de Dés & Simulateur de Probabilités',
    rollButton: 'Lancer les dés',
    clearButton: "Effacer l'historique",
    historyTitle: 'Historique des lancers',
    noHistory: 'Aucun lancer enregistré. Ajoutez des dés et cliquez sur Lancer.',
    totalRolls: 'Total des lancers',
    averageRoll: 'Moyenne des lancers',
    lastRoll: 'Dernier total',
    modifierLabel: 'Modificateur (+/-)',
    probabilityTitle: 'Analyse des probabilités',
    selectDice: 'Sélectionnez les dés à lancer',
  },
  seo: [
    { type: 'title', text: 'Maîtriser les probabilités: Comment les statistiques des dés influencent votre jeu', level: 2 },
    { type: 'paragraph', html: 'Les dés polyédriques sont au cœur des jeux de rôle et des jeux de société modernes. Que vous visiez un jet de sauvegarde réussi dans Dungeons & Dragons ou que vous lanciez pour obtenir des ressources, le résultat est régi par des probabilités mathématiques. Comprendre comment la combinaison de différents types de dés affecte vos chances est crucial pour prendre des décisions tactiques en cours de partie.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Chance de 20 naturel' },
        { value: '10.5', label: "Moyenne d'un jet de 3d6" },
        { value: '9.75%', label: '20 naturel avec avantage' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'La mathématique derrière plusieurs dés: Pourquoi 3d6 est plus sûr que 1d20', level: 2 },
    { type: 'paragraph', html: "Lorsque vous lancez un seul D20, chaque résultat de 1 à 20 a une chance égale de 5%, ce qui donne une distribution de probabilité plate. Cependant, en lançant plusieurs dés comme 3d6, les résultats se regroupent autour de la valeur moyenne de 10.5. Cette courbe de Gauss (ou courbe en cloche) signifie que vous êtes beaucoup plus susceptible d'obtenir un résultat modéré que des valeurs extrêmes, ce qui apporte de la régularité et réduit l'aspect aléatoire d'un dé unique." },
    { type: 'title', text: 'Probabilités du D20: Coups critiques, pires échecs et impact des modificateurs', level: 2 },
    { type: 'paragraph', html: "Un simple modificateur de plus deux peut modifier considérablement les probabilités de réussite, transformant des tâches difficiles en défis gérables. Dans de nombreux systèmes de jeu, un 20 naturel représente un coup critique automatique (5% de chance), tandis qu'un 1 naturel est un échec critique (une pifia). Visualiser ces résultats permet de démystifier le hasard et de planifier vos actions tactiques avec un appui statistique." },
    {
      type: 'title',
      text: 'Tableau de référence des dés polyédriques standards',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Type de dé', 'Jet minimum', 'Jet maximum', 'Résultat moyen', 'Rôle principal dans les JdR'],
      rows: [
        ['D4', '1', '4', '2.5', 'Projectiles magiques, dagues, dangers mineurs'],
        ['D6', '1', '6', '3.5', 'Boules de feu, épées standards, tests de caractéristiques'],
        ['D8', '1', '8', '4.5', 'Épées longues, sorts de soin, armes de taille moyenne'],
        ['D10', '1', '10', '5.5', 'Hallebardes, sorts mineurs, dizaines de centiles'],
        ['D12', '1', '12', '6.5', 'Grandes haches, points de vie de barbare'],
        ['D20', '1', '20', '10.5', 'Jets de sauvegarde, attaques, tests de compétence'],
        ['D100', '1', '100', '50.5', 'Tables de centiles, effets de magie sauvage'],
      ],
    },
    {
      type: 'tip',
      title: 'Calculer les moyennes de dés de tête',
      html: "Pour trouver la moyenne de n'importe quel dé, additionnez la valeur minimale (1) et maximale, puis divisez par 2. Par exemple, la moyenne d'un D6 est (1 + 6) / 2 = 3.5. Pour plusieurs dés, multipliez simplement la moyenne d'un dé par le nombre de dés (par exemple, la moyenne de 3d6 est 3 * 3.5 = 10.5). Ajouter un modificateur plat s'additionne simplement à cette moyenne (3d6 + 4 donne 14.5).",
    },
    {
      type: 'title',
      text: 'Comparaison entre systèmes de dés plats et courbes',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Système D20 vs. Système en courbe de cloche 3d6',
      items: [
        {
          pro: 'Les systèmes D20 sont rapides à calculer et offrent 5% constants pour les critiques et les échecs.',
          con: 'Les résultats d\'un D20 sont très instables, rendant les compétences du personnage très dépendantes de la chance.',
        },
        {
          pro: 'La courbe en cloche de 3d6 privilégie les résultats moyens, garantissant que les personnages compétents ratent rarement des tâches simples.',
          con: 'Les systèmes 3d6 nécessitent d\'additionner trois dés et rendent les critiques parfaits (un 18) extrêmement rares (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comprendre les mécaniques de probabilité',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Système D20 (Linéaire)',
          description: 'Utilise un seul dé à 20 faces pour les actions, où chaque résultat a une chance égale de 5%. Sa grande variabilité crée de la tension mais nuit à la régularité.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            '5% de chance fixe par résultat',
            'Grande variance et fluctuations',
            'Les modificateurs affectent la réussite de manière linéaire',
          ],
        },
        {
          title: 'Système 3d6 (Courbe de Gauss)',
          description: 'Additionne trois dés à 6 faces, créant une distribution normale centrée sur 10.5. Les résultats sont très réguliers, rendant les écarts extrêmes exceptionnels.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Résultats moyens très probables',
            'Résultats extrêmes très peu fréquents',
            'Les modificateurs ont un impact non linéaire',
          ],
        },
        {
          title: 'Système de centile (Jet sous score)',
          description: 'Utilise deux dés à 10 faces pour obtenir un nombre entre 1 et 100. L\'objectif est de faire moins que le score du personnage, rendant les chances évidentes.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Pourcentage direct de chances de réussite',
            'Facile à comprendre en un coup d\'œil',
            'La progression est claire mathématiquement',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le sophisme du joueur: Pourquoi les dés n\'ont pas de mémoire',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'Une erreur courante dans le jeu de rôle est de croire que les jets passés influencent les futurs. Si vous faites trois "1" d\'affilée sur un D20, vous pouvez penser qu\'un score élevé est "dû". En réalité, chaque jet est un événement indépendant. La probabilité d\'obtenir un 20 au jet suivant est toujours d\'exactement 5%. Savoir cela aide à prendre des décisions tactiques objectives.',
    },
    {
      type: 'title',
      text: 'Lexique des dés et probabilités pour le jeu de rôle',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Avantage & Désavantage',
          definition: 'Mécanique où un joueur lance deux D20 et prend le résultat le plus haut (Avantage) ou le plus bas (Désavantage). L\'avantage déplace la moyenne de 10.5 à 13.8.',
        },
        {
          term: 'Courbe en cloche (distribution normale)',
          definition: 'Distribution où les résultats se regroupent autour de la moyenne centrale. Se produit en additionnant plusieurs dés (comme 3d6 ou 2d10).',
        },
        {
          term: 'Coup critique',
          definition: 'Réussite automatique obtenue en faisant le score maximal du dé (20 naturel sur un D20), entraînant des bonus ou des dégâts accrus.',
        },
        {
          term: 'Échec critique',
          definition: 'Échec automatique aux conséquences fâcheuses ou amusantes, provoqué par un 1 sur un D20.',
        },
        {
          term: 'Valeur attendue',
          definition: 'La moyenne à long terme de vos lancers. Pour un D6, la valeur attendue est de 3.5 ; pour un D20, elle est de 10.5.',
        },
        {
          term: 'Dés de pourcentage',
          definition: 'Une paire de D10 (un pour les dizaines, un pour les unités) lancés ensemble pour donner un résultat de 1 à 100.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Comment fonctionne le simulateur de probabilité ?',
      answer: 'Il calcule la distribution exacte des probabilités pour la combinaison de dés et le modificateur sélectionnés à l\'aide de calculs combinatoires, ce qui vous permet de voir vos chances de faire plus ou moins que les valeurs cibles.',
    },
    {
      question: 'Quels dés sont pris en charge ?',
      answer: 'Tous les dés polyédriques couramment utilisés dans les JdR et jeux de société: D4, D6, D8, D10, D12, D20 et D100.',
    },
    {
      question: 'Qu\'est-ce qu\'un modificateur et comment cela fonctionne-t-il ?',
      answer: 'Les modificateurs sont des valeurs fixes (+1, -2, etc.) que vous ajoutez ou soustrayez au total de vos dés pour représenter des bonus ou des malus de votre personnage.',
    },
    {
      question: 'Que signifie lancer avec Avantage ou Désavantage ?',
      answer: 'Lancer avec Avantage signifie lancer deux dés D20 et conserver le résultat le plus élevé. Avec Désavantage, on lance deux dés et on garde le plus bas. C\'est une mécanique fréquente en jeu de rôle.',
    },
    {
      question: 'Qu\'est-ce qu\'un coup critique et un échec critique ?',
      answer: 'Un coup critique survient lorsque vous obtenez le score maximal du dé (par exemple 20 sur un D20), assurant un succès. Un échec critique est un 1, assurant un échec automatique.',
    },
    {
      question: 'Comment le simulateur calcule-t-il les probabilités des lancers ?',
      answer: 'Le simulateur analyse mathématiquement toutes les combinaisons possibles de vos dés et modificateurs pour vous fournir le pourcentage exact de chaque total.',
    },
    {
      question: 'Pourquoi un lancer de 3d6 est-il plus régulier qu\'un lancer de D20 ?',
      answer: 'Un D20 offre une chance égale de 5% pour chaque nombre. Un jet de 3d6 forme une courbe en cloche, rendant les résultats proches de 10.5 très fréquents, alors que les valeurs extrêmes sont rares.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ajouter des dés',
      text: 'Cliquez sur les boutons de dés pour les ajouter à votre réserve active.',
    },
    {
      name: 'Ajouter un modificateur',
      text: 'Saisissez un modificateur positif ou négatif à appliquer au total.',
    },
    {
      name: 'Lancer et voir les statistiques',
      text: 'Cliquez sur Lancer pour voir les résultats, l\'historique et les probabilités.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lanceur de Dés & Simulateur de Probabilités',
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
          'name': 'Comment fonctionne le simulateur de probabilité ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il calcule la distribution exacte des probabilités pour la combinaison de dés et le modificateur sélectionnés à l\'aide de calculs combinatoires, ce qui vous permet de voir vos chances de faire plus ou moins que les valeurs cibles.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quels dés sont pris en charge ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tous les dés polyédriques couramment utilisés dans les JdR et jeux de société: D4, D6, D8, D10, D12, D20 et D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Qu\'est-ce qu\'un modificateur et comment cela fonctionne-t-il ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les modificateurs sont des valeurs fixes (+1, -2, etc.) que vous ajoutez ou soustrayez au total de vos dés pour représenter des bonus ou des malus de votre personnage.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Que signifie lancer avec Avantage ou Désavantage ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lancer avec Avantage signifie lancer deux dés D20 et conserver le résultat le plus élevé. Avec Désavantage, on lance deux dés et on garde le plus bas. C\'est une mécanique fréquente en jeu de rôle.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Qu\'est-ce qu\'un coup critique et un échec critique ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un coup critique survient lorsque vous obtenez le score maximal du dé (par exemple 20 sur un D20), assurant un succès. Un échec critique est un 1, assurant un échec automatique.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Comment le simulateur calcule-t-il les probabilités des lancers ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le simulateur analyse mathématiquement toutes les combinaisons possibles de vos dés et modificateurs pour vous fournir le pourcentage exact de chaque total.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Pourquoi un lancer de 3d6 est-il plus régulier qu\'un lancer de D20 ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un D20 offre une chance égale de 5% pour chaque nombre. Un jet de 3d6 forme une courbe en cloche, rendant les résultats proches de 10.5 très fréquents, alors que les valeurs extrêmes sont rares.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ajouter des dés',
          'text': 'Cliquez sur les boutons de dés pour les ajouter à votre réserve active.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajouter un modificateur',
          'text': 'Saisissez un modificateur positif ou négatif à appliquer au total.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Lancer et voir les statistiques',
          'text': 'Cliquez sur Lancer pour voir les résultats, l\'historique et les probabilités.'
        }
      ]
    }
  ],
};
