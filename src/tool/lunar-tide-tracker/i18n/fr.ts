import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'calculateur-phases-lunaires',
  title: 'Calculateur de Phases Lunaires pour JDR: Suivi des Lunes Fantaisistes et des Cycles de Marée',
  description: 'Calculez les phases lunaires de tout monde fantastique avec des périodes orbitales personnalisées. Suivez jusqu\'à trois lunes simultanément, consultez des prévisions sur 10 jours et obtenez un niveau de marée combiné pour vos systèmes de magie en D&D, Pathfinder ou tout autre JDR.',
  ui: {
    title: 'Suivi des Phases Lunaires et des Marées Mystiques',
    moonsTitle: 'Configuration des lunes',
    addMoon: 'Ajouter une lune',
    removeMoon: 'Supprimer la lune',
    moonName: 'Nom de la lune',
    orbitalPeriod: 'Période orbitale (jours)',
    startingOffset: 'Décalage de départ (jours)',
    timelineTitle: 'Contrôle du temps',
    currentDay: 'Jour actuel de campagne',
    tideTitle: 'État de la Marée Mystique',
    tideLevel: 'Niveau d\'énergie marémotrice',
    magicModifier: 'Effet magique de la marée',
    forecastTitle: 'Prévision lunaire et des marées',
    dayLabel: 'Jour',
    resetButton: 'Réinitialiser au jour 0',
    presetTitle: 'Préréglages de campagne',
    presetSingle: 'Lune classique',
    presetDouble: 'Lunes jumelles de la magie',
    presetTriple: 'Royaume de la triple éclipse',
    newMoon: 'Nouvelle lune',
    waxingCrescent: 'Croissant croissant',
    firstQuarter: 'Premier quartier',
    waxingGibbous: 'Gibbeuse croissante',
    fullMoon: 'Pleine lune',
    waningGibbous: 'Gibbeuse décroissante',
    lastQuarter: 'Dernier quartier',
    waningCrescent: 'Croissant décroissant',
  },
  seo: [
    { type: 'title', text: 'Comment suivre les phases lunaires dans une campagne de JDR fantastique', level: 2 },
    { type: 'paragraph', html: 'La plupart des mondes fantastiques ont des lunes avec des périodes orbitales différentes du cycle lunaire réel de 29,5 jours. Le champ <strong>Période Orbitale</strong> définit le nombre de jours de jeu nécessaires à une lune pour accomplir un cycle complet. Le cadre Eberron utilise 28 jours. Réglez cette valeur selon le lore de votre monde ou choisissez un nombre entre 5 et 60 jours.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Lunes simultanées' },
        { value: '10', label: 'Jours de prévision' },
        { value: '5', label: 'États de marée' }
      ],
      columns: 3
    },
    { type: 'title', text: 'À quoi sert le champ Décalage de départ', level: 2 },
    { type: 'paragraph', html: 'Le <strong>Décalage de départ</strong> décale la phase initiale d\'une lune au jour 0 de campagne. Un décalage de 0 commence à la nouvelle lune. Un décalage égal à la moitié de la période orbitale commence à la pleine lune. Utilisez-le pour reproduire la phase décrite dans votre scène d\'ouverture ou pour que deux lunes ne commencent pas alignées.' },
    { type: 'title', text: 'Ce que le niveau de marée signifie pour votre partie', level: 2 },
    { type: 'paragraph', html: 'Le niveau de marée combine l\'attraction gravitationnelle de toutes les lunes actives selon leurs phases actuelles. Une <strong>vive-eau</strong> (au-dessus de 75%) se produit quand les lunes sont presque alignées. Une <strong>morte-eau</strong> (en dessous de 30%) survient quand les lunes sont en phases opposées. Liez cela à n\'importe quel système mécanique: bonus aux jets de sauvegarde, seuils de métamorphose lycanthropique ou sévérité des tempêtes.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lune unique',
          description: 'Idéal pour les cadres proches du monde réel ou avec une seule lune dominante. Cycle simple de 8 phases, facile à suivre.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'D&D Royaumes Oubliés (Selune, 30 jours)',
            'Campagnes de lycanthropie',
            'Sessions d\'horreur liées à la pleine lune'
          ]
        },
        {
          title: 'Lunes jumelles',
          description: 'Courant en haute fantaisie. Crée des alignements partiels fréquents et des marées intermédiaires intéressantes.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28j + Aryth 12j)',
            'Saisons d\'éclipses prévisibles',
            'Bon pour les systèmes de magie druidique'
          ]
        },
        {
          title: 'Triple lune',
          description: 'Les rares alignements triples créent des sursauts imprévisibles. Dramatiquement utile pour les événements de magie sauvage.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Tables de magie sauvage lors des alignements',
            'Complexité style Golarion de Pathfinder',
            'Cycles longue période pour campagnes épiques'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Périodes orbitales courantes pour les mondes fantastiques', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Royaumes Oubliés)', definition: 'Période orbitale de 30 jours, lune unique. Utilisez un décalage de 15 pour commencer à la pleine lune lors de la première session.' },
        { term: 'Lunes d\'Eberron', definition: 'Eberron possède 12 lunes avec des périodes de 9 à 28 jours. Utilisez les deux plus pertinentes pour l\'intrigue comme instances séparées.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion a une lune, Somal, avec un cycle de 29 jours. Une deuxième lune à courte période peut modéliser les événements de la Tapisserie Sombre.' },
        { term: 'Monde personnalisé', definition: 'Une lune de 15 jours produit 24 pleines lunes par an de jeu. Une lune de 45 jours en produit environ 8. Les cycles courts créent plus d\'événements mais leur poids narratif est moindre.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Conseil: Configurer une phase précise pour la session 1',
      icon: 'mdi:information-outline',
      badge: 'CONSEIL DE CONFIGURATION',
      html: 'Si votre campagne commence sous un croissant de lune, réglez le décalage à environ 20% de la période orbitale. Pour une pleine lune, utilisez 50% de la période comme décalage. Exemple: lune de 28 jours débutant pleine, décalage 14. Avancez le compteur au jour actuel de campagne et la prévision affichera automatiquement les 10 prochains jours.'
    }
  ],
  faq: [
    { question: 'Quelle période orbitale utiliser pour mon monde fantastique ?', answer: 'Si votre cadre n\'en précise pas, 28 à 30 jours convient bien pour une lune unique. Pour plusieurs lunes, choisissez des périodes qui ne sont pas de simples multiples l\'une de l\'autre afin que les alignements ne se répètent pas trop souvent.' },
    { question: 'Comment faire s\'aligner deux lunes à un moment précis de la campagne ?', answer: 'Donnez aux deux lunes la même valeur de décalage. Elles s\'aligneront à chaque multiple commun de leurs deux périodes. Pour les décaler, donnez à la deuxième lune un décalage égal à la moitié de sa période orbitale.' },
    { question: 'Que signifie une vive-eau en termes de règles de jeu ?', answer: 'Une vive-eau signifie que toutes les lunes actives tirent dans la même direction et produisent une énergie marémotrice maximale. Utilisez-la pour déclencher des sursauts de magie sauvage, renforcer les sorts de guérison ou marquer une nuit sacrée pour des factions religieuses.' },
    { question: 'Que signifie une morte-eau en termes de règles de jeu ?', answer: 'Une morte-eau se produit quand les lunes se neutralisent partiellement. Bon pour les effets antimagie, un calme plat en mer, ou pour des antagonistes nécessitant une suppression magique prévisible.' },
    { question: 'Puis-je l\'utiliser pour L\'Appel de Cthulhu ou des campagnes d\'horreur ?', answer: 'Oui. Utilisez une lune de 29 jours et réglez le décalage pour que la pleine lune tombe sur le climax de la session. Le suivi de marée peut représenter l\'influence du Mythe ou des pics de sensibilité psychique.' },
    { question: 'Comment fonctionne la prévision sur 10 jours ?', answer: 'La prévision affiche la phase lunaire de chaque lune active sous forme de point coloré pour chacun des 10 prochains jours de campagne. Le pourcentage indiqué est le niveau de marée combiné. Les jours avec des valeurs élevées sont de bons candidats pour des rencontres dramatiques.' },
    { question: 'Puis-je suivre une lune avec un cycle très court, comme 7 jours ?', answer: 'Oui. Réglez la période orbitale sur 7. La lune accomplira un cycle complet chaque semaine de temps de jeu. Utile pour les mondes où la magie lunaire se réinitialise chaque semaine.' },
    { question: 'Comment reproduire la phase lunaire d\'un module d\'aventure publié ?', answer: 'Notez la phase décrite et comptez combien de jours du cycle cela représente. Divisez par la période orbitale et utilisez ce résultat comme décalage. Exemple: premier quartier au jour 0 d\'un cycle de 28 jours signifie un décalage de 7.' }
  ],
  bibliography,
  howTo: [
    { name: 'Définir la période orbitale', text: 'Entrez le nombre de jours de jeu que met votre lune à accomplir un cycle complet selon le lore de votre monde.' },
    { name: 'Définir le décalage de départ', text: 'Décalez la phase initiale avec une valeur en jours. La moitié de la période orbitale correspond à la pleine lune au jour 0.' },
    { name: 'Avancer le compteur de jours', text: 'Utilisez les boutons ou le curseur pour atteindre le jour actuel de la campagne et lire la phase et le niveau de marée.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur de Phases Lunaires pour JDR: Suivi des Lunes Fantaisistes et des Cycles de Marée',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Quelle période orbitale utiliser pour mon monde fantastique ?', 'acceptedAnswer': { '@type': 'Answer', 'text': '28 à 30 jours convient bien pour une lune unique. Pour plusieurs lunes, choisissez des périodes qui ne sont pas de simples multiples l\'une de l\'autre.' } },
        { '@type': 'Question', 'name': 'Que signifie une vive-eau en termes de règles de jeu ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Une vive-eau signifie énergie marémotrice maximale. Utilisez-la pour déclencher des sursauts de magie sauvage ou marquer une nuit sacrée pour des factions religieuses.' } }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment suivre les phases lunaires dans une campagne de JDR',
      'step': [
        { '@type': 'HowToStep', 'name': 'Définir la période orbitale', 'text': 'Entrez le nombre de jours de jeu que met votre lune à accomplir un cycle complet.' },
        { '@type': 'HowToStep', 'name': 'Définir le décalage de départ', 'text': 'La moitié de la période orbitale correspond à la pleine lune au jour 0.' },
        { '@type': 'HowToStep', 'name': 'Avancer le compteur', 'text': 'Utilisez le curseur pour atteindre le jour actuel et lire la phase.' }
      ]
    }
  ]
};
export default content;
