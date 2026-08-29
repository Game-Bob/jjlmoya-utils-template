import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: 'Sélecteur de Direction de Déviation',
  setupTitle: 'Paramètres de Déviation',
  sectorsLabel: 'Secteurs de Boussole',
  sectors8: '8 Directions',
  sectors12: '12 Directions (Horloge)',
  diceLabel: 'Jet de Distance de Déviation',
  diceD6: '1D6 Pouces',
  dice2D6: '2D6 Pouces',
  diceD10: '1D10 Pouces',
  diceCustom: 'Plage Personnalisée',
  customMaxLabel: 'Distance Maximale',
  hitChanceLabel: 'Probabilité d\u2019Impact Direct (%)',
  rollButton: 'Lancer la Déviation',
  hitResult: 'Impact Direct\u00a0!',
  scatterResult: 'Déviation\u00a0!',
  distanceLabel: 'Distance',
  angleLabel: 'Angle',
  dragHint: 'Fais glisser la boussole pour régler la direction du vent manuellement',
  historyTitle: 'Lancers Récents',
  clearHistory: 'Effacer l\u2019Historique',
  presetTitle: 'Préréglages de Wargaming',
  soundOn: 'Son Activé',
  soundOff: 'Son Désactivé',
  guideStep1: 'Fais glisser la boussole pour l\u2019aligner sur ta table de jeu',
  guideStep2: 'Choisis les secteurs, les dés et la probabilité d\u2019impact direct',
  guideStep3: 'Centre\u00a0= ta cible. La lueur verte signifie qu\u2019elle a atterri exactement dessus',
  guideStep3Scatter: 'Flèche\u00a0= direction de déviation. Déplace le tir depuis le centre de cette distance en pouces le long de la flèche',
  scatterModeLabel: 'Direction de Déviation',
  scatterModeRandom: 'Aléatoire',
  scatterModeWind: 'Dérive du Vent',
  scatterModeWindHint: 'La flèche suit toujours la boussole  -  seule la distance est aléatoire',
};

const faq = [
  {
    question: 'Comment fonctionne le Sélecteur de Direction de Déviation\u00a0?',
    answer: 'Il calcule un angle aléatoire (0-359 degrés) et une distance basée sur la configuration de dés choisie. Il simule également un dé de déviation en vérifiant les impacts directs.',
  },
  {
    question: 'Puis-je changer le format des secteurs\u00a0?',
    answer: 'Oui, tu peux basculer entre les secteurs cardinaux à 8 directions et les secteurs à 12 directions au format horloge.',
  },
  {
    question: 'Qu\u2019est-ce que la probabilité d\u2019impact direct\u00a0?',
    answer: 'Elle représente la chance que le projectile touche exactement l\u2019endroit visé sans aucune déviation, simulant un résultat "Touché" sur un dé de déviation standard.',
  },
  {
    question: 'Est-ce compatible avec Warhammer ou Bolt Action\u00a0?',
    answer: 'Oui, il prend en charge les gabarits standard à 8 directions et les alignements d\u2019horloge à 12 directions utilisés dans la plupart des wargames tactiques et règles de figurines.',
  },
  {
    question: 'Comment la distance de déviation est-elle affichée visuellement\u00a0?',
    answer: 'La distance en pouces appara\u00eet comme une étiquette flottante au point d\u2019impact, positionnée dans la direction de déviation. La flèche rouge de la boussole se verrouille également sur l\u2019angle final pour un alignement rapide du gabarit.',
  },
  {
    question: 'Puis-je désactiver l\u2019animation pour obtenir des résultats plus rapides\u00a0?',
    answer: 'L\u2019animation dure environ deux secondes, après quoi le résultat final s\u2019affiche au centre et la flèche de la boussole se verrouille. Il n\u2019y a pas d\u2019option de saut actuellement, mais le délai est conçu pour correspondre au rythme du lancer de dés physiques.',
  },
  { question: 'Comment la direction de dispersion est-elle calculée ?', answer: 'L\'outil combine le système de secteurs choisi avec le lancer et la distance de déviation configurée.' },
  { question: 'Puis-je utiliser le mode de vent ?', answer: 'Oui, ce mode suit l\'angle du compas tout en gardant la distance aléatoire.' },
];

const howTo = [
  {
    name: 'Configurer les Règles',
    text: 'Sélectionne les secteurs de boussole, choisis un dé de distance et ajuste la probabilité d\u2019impact direct.',
  },
  {
    name: 'Lancer ou Glisser',
    text: 'Clique sur Lancer la Déviation pour simuler la déviation, ou fais glisser la roue de la boussole pour ajuster la direction manuellement.',
  },
  {
    name: 'Lire le Résultat',
    text: 'Consulte l\u2019affichage central et la flèche vectorielle pour conna\u00eetre la distance, l\u2019angle et la direction exacts de la déviation.',
  },
  {
    name: 'Observer la Trajectoire',
    text: 'Après le lancer, regarde le projectile animé traverser la boussole. La tra\u00eenée en pointillés montre le chemin de déviation et le point d\u2019impact affiche la distance en pouces.',
  },
  {
    name: 'Interpréter le Résultat',
    text: 'Une impulsion verte avec "DIRECT HIT" signifie une déviation nulle. Une explosion rouge avec une étiquette de distance signifie que le tir a dévié  -  place ton gabarit à cette distance de la cible dans la direction de la flèche.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'selecteur-de-direction-de-deviation',
  title: 'Sélecteur de Direction de Déviation\u00a0: Boussole Tactile pour Wargames de Figurines',
  description: 'Détermine les déviations aléatoires, la dérive du vent et les directions de dispersion pour les wargames de figurines avec une boussole tactile 3D.',
  ui,
  seo: [
    { type: 'title', text: 'Boussole Interactive de Déviation avec Animation de Projectile en Temps Réel', level: 2 },
    { type: 'paragraph', html: 'Le Sélecteur de Direction de Déviation va au-delà de la simple génération de nombres en affichant une trajectoire animée du projectile directement sur la boussole. Quand tu cliques sur Lancer la Déviation, un projectile lumineux voyage du centre le long de l angle de déviation, laissant une traînée en pointillés et explosant en particules au point d impact. Cela simplifie considérablement la résolution visuelle des tirs déviés pendant vos parties.' },
    { type: 'stats', items: [
      { value: '2', label: 'Systèmes de Secteurs', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Préréglages de Dés', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Plage de Probabilité d Impact', icon: 'mdi:target' },
      { value: '10', label: 'Historique des Lancers Récents', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'Comment l Animation de Trajectoire Améliore la Prise de Décision en Wargame', level: 3 },
    { type: 'paragraph', html: 'Les outils traditionnels affichent un angle et une distance numériques, obligeant les joueurs à visualiser mentalement le décalage sur la table. La trajectoire animée comble cet écart en dessinant le chemin de vol exact du point de visée jusqu à la zone d atterrissage de la déviation. Cela accélère le rythme de jeu et élimine les hésitations lors du placement des gabarits d explosion.' },
    { type: 'diagnostic', variant: 'success', title: 'Impact Direct', html: 'Quand le jet dépasse la probabilité d impact, le centre de la boussole s illumine d anneaux verts pulsants avec une animation "DIRECT HIT". Le projectile retourne au centre, confirmant un impact parfait sans moindre déviation.' },
    { type: 'diagnostic', variant: 'error', title: 'Déviation', html: 'Sur un résultat de déviation, le projectile suit une trajectoire en pointillés jusqu à son point d atterrissage. Une explosion de particules, un marqueur lumineux et la distance exacte en pouces (ex. <strong>5"</strong>) apparaissent sur le lieu d impact pour mesurer immédiatement le décalage.' },
    { type: 'tip', title: 'Astuce: Utiliser le Mode Dérive du Vent', html: 'Active la Dérive du Vent pour verrouiller la direction de déviation sur l angle de boussole réglé manuellement. Cela simule un vent dominant ou un vecteur de déplacement fixe  -  idéal pour les roquettes non guidées, les nuages de gaz, les sorts de zone ou les incidents de téléportation.' },
    { type: 'title', text: 'Résoudre la dispersion dans les wargames', level: 2 },
    { type: 'paragraph', html: 'De nombreux wargames et jeux de rôle tactiques utilisent la déviation pour représenter l artillerie, les tirs de mortier, la dérive des gaz ou les téléportations ratées de manière réaliste et imprévisible. Grâce aux options de dés flexibles (1D6, 2D6, 1D10), cette boussole s adapte à n importe quel système de jeu.' },
    { type: 'table', headers: ['Scénario de Jeu', 'Configuration de Dés', 'Mode de Déviation', 'Effet Tactique'], rows: [['Artillerie & Mortiers', '2D6 pouces', '8 Secteurs + Touche %', 'Dispersion aléatoire autour de la cible'], ['Nuages de Gaz & Vent', '1D6 pouces', 'Dérive du Vent (Angle Fixe)', 'Déplacement exclusivement dans le sens du vent'], ['Incidents de Téléportation', '1D10 pouces', '12 Secteurs Horloge', 'Déviation circulaire dans n importe quelle direction']] },
    { type: 'title', text: 'Gérer le vent et la déviation', level: 2 },
    { type: 'paragraph', html: 'Configurer une probabilité d impact appropriée permet de refléter la précision des équipages et accélère considérablement la résolution des tirs sur la table de jeu.' },
    { type: 'comparative', items: [{ title: 'Résoudre la dispersion dans les wargames', description: 'De nombreux wargames utilisent la déviation pour représenter l artillerie, le vent ou les téléportations ratées. Cette boussole digitale évite le déplacement accidentel des dés sur le décor.', icon: 'mdi:compass-outline', highlight: true, points: ['Gérer le vent et la déviation', 'Mesure rapide et fluide sans frottement', 'Visualisation claire des vecteurs'] }], columns: 1 },
    { type: 'glossary', items: [{ term: 'Gérer le vent et la déviation', definition: 'La probabilité de toucher aide à évaluer la fiabilité d une unité et accélère les mesures pendant la partie.' }] },
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
      'name': 'Sélecteur de Direction de Déviation',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment utiliser le Sélecteur de Direction de Déviation',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
