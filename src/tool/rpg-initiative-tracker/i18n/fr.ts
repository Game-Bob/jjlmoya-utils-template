import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Suivi d\'Initiative',
  addCombatant: 'Ajouter un combattant',
  removeCombatant: 'Retirer',
  playerLabel: 'Joueur',
  npcLabel: 'PNJ',
  initiativeLabel: 'Initiative',
  modifierLabel: 'Modificateur',
  namePlaceholder: 'Nom du personnage',
  initiativePlaceholder: 'Initiative',
  modifierPlaceholder: 'Modificateur',
  addButton: 'Ajouter',
  startCombat: 'Commencer le combat',
  endCombat: 'Terminer le combat',
  nextTurn: 'Tour suivant',
  prevTurn: 'Tour précédent',
  roundLabel: 'Round',
  turnLabel: 'Tour',
  noCombatants: 'Pas encore de combattants. Ajoutez des personnages pour commencer.',
  statusInput: 'Statut',
  combatStarted: 'Combat commencé !',
  combatEnded: 'Combat terminé',
  yourTurn: 'Tour',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'suivi-initiative',
  title: 'Suivi d\'Initiative RPG: Ordre des Tours & Gestionnaire d\'Initiative',
  description: 'Suivez l\'ordre d\'initiative pour tout RPG de table. Ajoutez des combattants, lancez l\'initiative, gérez les effets de statut et naviguez dans les tours de combat.',
  ui,
  seo: [
    { type: 'title', text: 'Comment fonctionne l\'Initiative dans D&D et autres RPG de table', level: 2 },
    { type: 'paragraph', html: 'L\'initiative détermine l\'ordre des actions au combat. Chaque participant effectue un jet de Dextérité au début du combat, et l\'ordre des tours va du plus élevé au plus bas. Un suivi d\'initiative numérique automatise le tri, met en évidence le combattant actif, suit les effets de statut en cours et tient toute la table informée du prochain tour. C\'est particulièrement utile pour les Maîtres du Donjon qui gèrent des rencontres complexes avec plusieurs types d\'ennemis et personnages joueurs.' },
    {
      type: 'stats',
      items: [
        { value: 'Illimité', label: 'Combattants supportés' },
        { value: 'Tri auto', label: 'Par jet d\'initiative' },
        { value: 'Temps réel', label: 'Suivi des tours' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Règles d\'Initiative Standard pour D&D 5e', level: 2 },
    { type: 'paragraph', html: 'Dans D&D 5e, chaque participant effectue un jet de Dextérité au début du combat. Les joueurs lancent individuellement. Le Maître du Donjon lance une fois pour chaque groupe de monstres identiques. L\'ordre des tours va du plus élevé au plus bas, puis revient au début pour le round suivant. Les égalités sont départagées par le score de Dextérité, ou le MD décide. Un suivi numérique gère tout cela automatiquement et affiche l\'ordre complet des tours en un coup d\'œil.' },
    {
      type: 'table',
      headers: ['Fonctionnalité', 'Suivi manuel', 'Suivi numérique'],
      rows: [
        ['Tri', 'Réécrire la liste quand l\'initiative change', 'Réorganisation automatique instantanée'],
        ['Tour actuel', 'Doit être suivi verbalement ou avec un pion', 'Mis en évidence avec un halo vert'],
        ['Effets de statut', 'Bloc-notes séparé ou dé près du mini', 'Cliquer pour activer sur chaque combattant'],
        ['Compteur de rounds', 'Compter dans sa tête ou sur un brouillon', 'Affiché automatiquement'],
        ['Ajout en cours de combat', 'Effacer et réécrire l\'ordre', 'Inséré à la bonne position'],
      ],
    },
    {
      type: 'tip',
      title: 'Conseils pour gérer l\'Initiative à la table',
      html: 'Lancez l\'initiative pour tous les monstres avant la session pour gagner du temps pendant le combat. Ajoutez des effets de statut courants comme Étourdi ou Empoisonné à un combattant dès qu\'ils sont appliqués. Cela évite d\'oublier un état quand le personnage affecté joue son tour. Utilisez le bouton Tour précédent pour revoir ce qui s\'est passé si vous devez vérifier une règle plus tôt dans le round.',
    },
    {
      type: 'title',
      text: 'Effets de Statut Courants au Combat',
      level: 3,
    },
    { type: 'paragraph', html: 'Le suivi des états pendant le combat est l\'une des tâches les plus souvent négligées. Un effet de statut peut complètement changer l\'efficacité d\'un personnage, et oublier de le retirer peut faire basculer l\'équilibre d\'une rencontre. Le suivi d\'initiative vous permet d\'appliquer et de retirer des états en un seul clic pour qu\'ils restent visibles à côté du nom du combattant.' },
    {
      type: 'proscons',
      title: 'Gestion numérique vs manuelle des effets de statut',
      items: [
        {
          pro: 'Les états sont visibles juste à côté du nom du personnage, donc personne n\'oublie un effet actif.',
          con: 'Nécessite de penser à activer et désactiver les statuts au fur et à mesure.',
        },
        {
          pro: 'Plusieurs statuts peuvent être actifs sur le même combattant et sont tous affichés ensemble.',
          con: 'Le suivi n\'applique pas automatiquement les effets des règles, le MD doit toujours les gérer.',
        },
        {
          pro: 'Les statuts peuvent être ajoutés en plein combat sans s\'arrêter pour écrire sur une feuille de personnage.',
          con: 'Seules les étiquettes de statut prédéfinies sont disponibles par défaut.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Systèmes d\'Initiative Alternatifs',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Initiative Standard',
          description: 'Chaque combattant lance une fois au début. Le même ordre se répète chaque round. Simple et prévisible, mais l\'ordre est fixe après le premier jet. Fonctionne bien pour la plupart des groupes et tailles de rencontres.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Simple à apprendre et enseigner', 'Ordre fixe des tours chaque round', 'Fonctionne pour tout groupe'],
        },
        {
          title: 'Initiative de Camp',
          description: 'Tous les personnages joueurs agissent ensemble, puis tous les ennemis ensemble. Courant dans les éditions plus anciennes et les jeux OSR. Accélère le combat en réduisant le suivi individuel mais réduit la nuance tactique.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Résolution de combat la plus rapide', 'Favorise la coordination du groupe', 'Moins de variété de tours individuels'],
        },
        {
          title: 'Variante Facteur de Vitesse',
          description: 'Chaque round, les participants déclarent d\'abord leurs actions, puis lancent l\'initiative modifiée par l\'action choisie. Utilisé dans des ensembles de règles optionnelles. Crée un ordre de tour imprévisible mais ajoute de la profondeur à la prise de décision.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Ordre différent à chaque round', 'Le choix de l\'action affecte le timing', 'Plus de décisions tactiques par tour'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Glossaire du Suivi de Combat',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Initiative',
          definition: 'Un jet de Dextérité effectué au début du combat pour déterminer la séquence des tours. Chaque participant lance les dés et agit par ordre décroissant.',
        },
        {
          term: 'Round',
          definition: 'Un cycle complet où chaque combattant joue un tour. Après le dernier combattant, le round se termine et un nouveau round commence depuis le début de l\'ordre.',
        },
        {
          term: 'Effet de Statut',
          definition: 'Un état temporaire qui modifie les capacités d\'un personnage. Exemples: Étourdi (ne peut pas agir), Empoisonné (désavantage aux jets), et Aveuglé (attaques désavantagées).',
        },
        {
          term: 'PNJ',
          definition: 'Personnage Non Joueur contrôlé par le Maître du Donjon. Dans le suivi d\'initiative, les PNJ sont généralement des ennemis ou des créatures neutres dans la rencontre.',
        },
        {
          term: 'PJ',
          definition: 'Personnage Joueur contrôlé par l\'un des joueurs à la table. Les PJ sont distincts des PNJ dans le suivi pour aider le MD à identifier les cibles alliées.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quand relancer l\'Initiative chaque round',
      icon: 'mdi:information-outline',
      badge: 'CONSEIL MD',
      html: 'Certains MD préfèrent relancer l\'initiative chaque round pour plus d\'imprévisibilité, tandis que la plupart gardent le même ordre par simplicité. Si un nouveau combattant rejoint la mêlée, lancez son initiative et insérez-le à la position actuelle. Le suivi gère cela automatiquement. Pour les rencontres de boss, envisagez de donner au vilain une initiative fixe à un compte précis pour rendre le combat plus structuré.',
    },
  ],
  faq: [
    {
      question: 'Comment ajouter des combattants à l\'ordre d\'initiative ?',
      answer: 'Entrez le nom du personnage, le jet d\'initiative et le modificateur d\'initiative, puis cliquez sur Ajouter. Alternez entre les types Joueur et PNJ pour distinguer visuellement les membres du groupe des ennemis dans la liste.',
    },
    {
      question: 'Que se passe-t-il quand je clique sur Commencer le combat ?',
      answer: 'Tous les combattants sont triés par initiative du plus élevé au plus bas. L\'ordre des tours commence en haut, le compteur de rounds démarre à 1, et le combattant actif est mis en évidence avec un halo vert.',
    },
    {
      question: 'Comment suivre les effets de statut pendant le combat ?',
      answer: 'Cliquez sur une étiquette de statut (Étourdi, Empoisonné, Aveuglé, etc.) pour l\'activer ou la désactiver pour le combattant sélectionné. Les statuts actifs apparaissent à côté du nom du personnage. Cela rappelle à tout le monde les effets en cours quand le tour de ce combattant arrive.',
    },
    {
      question: 'Mes données de combat persistent-elles si je rafraîchis la page ?',
      answer: 'Oui. Le suivi d\'initiative sauvegarde l\'état du combat dans le stockage local de votre navigateur. Vos combattants, l\'ordre des tours et les effets de statut restent après un rechargement. Les données sont effacées quand vous cliquez sur Terminer le combat.',
    },
    {
      question: 'Puis-je revenir au tour précédent ?',
      answer: 'Oui. Le bouton Tour précédent vous permet de naviguer en arrière dans l\'ordre des tours. C\'est utile pour revoir ce qui s\'est passé plus tôt dans le round ou corriger une erreur.',
    },
    {
      question: 'Puis-je ajouter ou retirer des combattants pendant le combat ?',
      answer: 'Oui. De nouveaux combattants peuvent être ajoutés à tout moment et sont automatiquement insérés à la bonne position selon leur jet d\'initiative. Les combattants existants peuvent être retirés s\'ils quittent la rencontre.',
    },
    {
      question: 'Cela fonctionne-t-il avec n\'importe quel système de RPG ?',
      answer: 'Oui. Le suivi fonctionne avec tout RPG de table qui utilise un ordre de tour basé sur l\'initiative. Entrez simplement les valeurs d\'initiative que votre système utilise, que ce soit un jet de d20 plus Dex pour D&D ou une mécanique différente pour d\'autres jeux.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ajouter des combattants avant le combat',
      text: 'Entrez le nom de chaque personnage, son jet d\'initiative et son modificateur. Marquez-les comme Joueur ou PNJ. Ajoutez autant de combattants que votre rencontre le nécessite.',
    },
    {
      name: 'Commencer le combat pour verrouiller l\'ordre',
      text: 'Cliquez sur Commencer le combat pour trier tout le monde par initiative et démarrer le suivi des tours. Le premier combattant dans l\'ordre est mis en évidence.',
    },
    {
      name: 'Naviguer entre les tours et suivre les états',
      text: 'Utilisez Tour suivant et Tour précédent pour vous déplacer dans l\'ordre. Appliquez des effets de statut en cliquant sur les étiquettes de statut pour suivre les états pendant le combat.',
    },
    {
      name: 'Terminer le combat quand c\'est fini',
      text: 'Cliquez sur Terminer le combat pour arrêter le suivi des tours. Cela efface l\'état actif et réinitialise le compteur de rounds tout en conservant la liste des combattants pour la prochaine rencontre.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Suivi d\'Initiative RPG',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment ajouter des combattants ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Entrez le nom du personnage, le jet d\'initiative et le modificateur d\'initiative, puis cliquez sur Ajouter. Joueurs et PNJ peuvent être basculés pour les distinguer dans la liste.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que se passe-t-il quand je clique sur Commencer le combat ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tous les combattants sont triés par initiative (plus élevé d\'abord). L\'ordre des tours commence avec le premier combattant et un compteur de rounds démarre à 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment utiliser le Suivi d\'Initiative',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ajouter des combattants',
          'text': 'Entrez les détails du personnage: nom, jet d\'initiative et modificateur. Basculez entre Joueur et PNJ avant d\'ajouter.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Commencer le combat',
          'text': 'Cliquez sur Commencer le combat pour trier tous les combattants par initiative et démarrer le suivi de l\'ordre des tours.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gérer les tours',
          'text': 'Utilisez Tour suivant et Tour précédent pour naviguer dans l\'ordre des tours. Le combattant actif est mis en évidence avec un halo vert.',
        },
      ],
    },
  ],
};
