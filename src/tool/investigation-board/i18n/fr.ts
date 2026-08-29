import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "createur-de-tableau-de-conspiration",
  title: "Créateur de Tableau de Conspiration: Cartes d'Enquête RPG de Détective en Ligne",
  description: "Concevez des tableaux de conspiration interactifs et des cartes d'enquête pour vos jeux de rôle. Connectez des personnages, indices et lieux avec des fils colorés.",
  ui: {
  "title": "Créateur de Tableau de Conspiration",
  "addCard": "Ajouter une Carte",
  "searchPlaceholder": "Rechercher des cartes par nom ou indices",
  "filterAll": "Toutes les Catégories",
  "filterCharacter": "Personnages",
  "filterClue": "Indices",
  "filterLocation": "Lieux",
  "filterItem": "Objets",
  "cardName": "Nom de la Carte",
  "cardCategory": "Catégorie",
  "cardDescription": "Description",
  "cardNotes": "Notes Privées",
  "cardTags": "Tags séparés par des virgules",
  "cardColor": "Couleur de mise en valeur de la carte",
  "save": "Enregistrer les modifications",
  "delete": "Supprimer",
  "cancel": "Annuler",
  "clearBoard": "Effacer le tableau",
  "connectionsTitle": "Carte des relations",
  "addConnection": "Ajouter une connexion",
  "connectionLabel": "Étiquette de relation",
  "connectionColor": "Couleur de ligne",
  "sourceCard": "De la carte",
  "targetCard": "Vers la carte",
  "close": "Fermer",
  "character": "Personnage",
  "clue": "Indice",
  "location": "Lieu",
  "item": "Objet",
  "custom": "Personnalisé",
  "immersive": "Plein écran"
},
  seo: [
    { type: 'title', text: "Créateur de Tableau de Conspiration en Ligne: Organisez les Indices de JdR", level: 2 },
    { type: 'paragraph', html: "Démêler un réseau complexe de mensonges, suivre les alibis des suspects et relier les indices d'une scène de crime peut rapidement submerger un groupe de jeu de rôle. Que vous meniez une campagne de L'Appel de Cthulhu, un mystère cyberpunk, une enquête policière dans D&D ou que vous écriviez un thriller, notre créateur de tableau de conspiration en ligne est l'outil ultime. Glissez, déposez, catégorisez et reliez les indices, les PNJ et les preuves matérielles sur un tableau de liège numérique infini. Utilisez des fils de relation colorés pour voir instantanément comment les suspects sont liés aux scènes de crime, aux alibis et aux motivations secrètes, éliminant les notes papier et gardant les joueurs immergés." },
    {
      type: 'stats',
      items: [
        { value: "Illimité", label: "Tableau de nœuds" },
        { value: "4", label: "Catégories" },
        { value: "Glisser-Déposer", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Conseils pour Structurer votre Carte d'Enquête JDR", level: 2 },
    { type: 'tip', title: "La Règle des Trois Indices", html: "Pour chaque conclusion ou déduction que vous souhaitez que les joueurs fassent, ajoutez au moins trois indices distincts sur le tableau d'enquête. Connectez-les avec des fils de couleur personnalisés pour montrer différentes lignes de raisonnement possibles. Utilisez des cartes de Personnages pour les suspects, des Lieux pour les scènes de crime et des Objets pour les preuves physiques ou documents. Gardez les notes privées à jour avec leurs découvertes." },
    { type: 'title', text: "Tableaux de Conspiration Numériques vs Tableaux en Liège Physiques", level: 2 },
    {
      type: 'proscons',
      title: "Tableaux de Conspiration Numériques vs Tableaux en Liège Physiques",
      items: [
        { pro: "Taille de tableau illimitée pour ajouter autant d'indices, de suspects et de relations que nécessaire sans aucune limite d'espace.", con: "Nécessite un écran, une tablette ou un appareil numérique pendant la session de jeu sur table." },
        { pro: "Recherche instantanée et filtres de catégories pour localiser immédiatement un témoin ou un indice pendant la partie.", con: "Manque de sensation tactile des punaises et du fil de laine rouge sur un vrai mur." },
        { pro: "Sauvegardez, chargez et partagez des cartes d'enquête numériquement sans encombrer l'espace physique entre les sessions.", con: "Nécessite un accès Internet ou le stockage local du navigateur pour sauvegarder l'état du tableau." }
      ]
    },
    { type: 'title', text: "Choix des Catégories de Cartes pour votre Carte de Mystères", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Nœuds Personnages",
          description: "Représentent les suspects, les témoins, les PNJ alliés ou les factions. Mettez en valeur les relations avec des fils colorés.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Suivre les alibis et les mobiles des suspects",
            "Relier les alliances familiales et de factions",
            "Enregistrer les détails des témoignages de témoins"
          ]
        },
        {
          title: "Nœuds Indices",
          description: "Représentent les preuves physiques, les rapports d'autopsie, les alibis ou les rumeurs découverts par les joueurs.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Rapports d'autopsie et analyses médico-légales",
            "Objets physiques trouvés sur les scènes de crime",
            "Rumeurs interceptées et secrets partagés"
          ]
        },
        {
          title: "Nœuds Lieux",
          description: "Scènes de crime, résidences des suspects, planques secrètes ou villes.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Photos de scènes de crime et cartes",
            "Résidences des principaux PNJ",
            "Planques secrètes et portails mystiques"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Glossaire du Tableau de Conspiration", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Nœud d'enquête", definition: "Toute carte sur le tableau représentant une personne, un lieu, un indice ou un objet." },
        { term: "Fil de relation", definition: "Une ligne colorée reliant deux cartes pour indiquer leur lien (ex: Suspect, Alibi, Propriétaire)." },
        { term: "Mode Immersif", definition: "Un affichage plein écran qui masque les menus de contrôle pour maximiser l'espace sur mobile ou tablette." },
        { term: "Chemin mis en valeur", definition: "Un chemin visuel affichant uniquement les nœuds et les lignes connectés à la carte sélectionnée, estompant le reste." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Astuce de Performance pour Appareils Mobiles",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "Si le déplacement des nœuds est lent sur de vieilles tablettes, activez le mode plein écran pour masquer les menus. Assurez-vous que l'alignement sur la grille est activé (les cartes s'alignent tous les 15px) pour garder le tableau ordonné avec peu d'effort."
    }
  ],
  faq: [
    { question: "Comment ajouter des lignes de connexion ?", answer: "Cliquez sur Ajouter une connexion dans le panneau de contrôle ou sur l'icône de lien d'une carte puis sur la carte cible." },
    { question: "Puis-je glisser des cartes sur mobile ?", answer: "Oui, le tableau prend en charge les événements tactiles pour glisser et déplacer les cartes facilement sur smartphones et tablettes." },
    { question: "Puis-je utiliser des couleurs de cartes personnalisées ?", answer: "Oui. Double-cliquez sur une carte, choisissez Custom dans Catégorie et sélectionnez une couleur." },
    { question: "Le tableau sauvegarde-t-il mon travail ?", answer: "Oui. Votre progression est automatiquement sauvegardée dans le stockage local de votre navigateur." },
    { question: "Comment zoomer et me déplacer sur le tableau ?", answer: "Pincez l'écran ou utilisez la molette de la souris pour zoomer. Glissez le fond pour vous déplacer sur le tableau." }
  ],
  bibliography,
  howTo: [
    { name: "Ajouter des cartes d'enquête", text: "Créez des cartes représentant des PNJ, des indices, des scènes de crime ou des objets." },
    { name: "Lier les relations", text: "Créez des lignes de connexion entre les cartes pour montrer le lien entre les indices." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Créateur de Tableau de Conspiration: Cartes d'Enquête RPG de Détective en Ligne",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "Comment ajouter des lignes de connexion ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Cliquez sur Ajouter une connexion dans le panneau de contrôle ou sur l'icône de lien d'une carte puis sur la carte cible."
          }
        },
        {
          '@type': 'Question',
          'name': "Puis-je glisser des cartes sur mobile ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Oui, le tableau prend en charge les événements tactiles pour glisser et déplacer les cartes facilement sur smartphones et tablettes."
          }
        },
        {
          '@type': 'Question',
          'name': "Puis-je utiliser des couleurs de cartes personnalisées ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Oui. Double-cliquez sur une carte, choisissez Custom dans Catégorie et sélectionnez une couleur."
          }
        },
        {
          '@type': 'Question',
          'name': "Le tableau sauvegarde-t-il mon travail ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Oui. Votre progression est automatiquement sauvegardée dans le stockage local de votre navigateur."
          }
        },
        {
          '@type': 'Question',
          'name': "Comment zoomer et me déplacer sur le tableau ?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Pincez l'écran ou utilisez la molette de la souris pour zoomer. Glissez le fond pour vous déplacer sur le tableau."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "Comment utiliser le créateur de tableau de conspiration",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Ajouter des cartes d'enquête",
          'text': "Créez des cartes représentant des PNJ, des indices, des scènes de crime ou des objets."
        },
        {
          '@type': 'HowToStep',
          'name': "Lier les relations",
          'text': "Créez des lignes de connexion entre les cartes pour montrer le lien entre les indices."
        }
      ]
    }
  ]
};
