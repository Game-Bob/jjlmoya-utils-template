import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'roue-de-decision',
  title: 'Roue de Décision: Sélecteur Aléatoire et Générateur de Choix',
  description: 'Faites tourner une roue de décision personnalisable pour vos jeux de société. Ajoutez et modifiez des segments avec des poids pour vos tirages.',
  ui: {
    title: 'Roue de Décision',
    spinButton: 'Tourner la Roue',
    clearHistory: 'Effacer l\'Historique',
    resultHeading: 'Résultat',
    historyTitle: 'Historique des Tirages',
    noHistory: 'Aucun tirage. Cliquez sur Tourner la Roue pour commencer.',
    addSegmentLabel: 'Ajouter un Segment',
    removeSegmentLabel: 'Supprimer',
    segmentLabelPlaceholder: 'Étiquette',
    presetLabel: 'Préréglages',
    presetYesNo: 'Oui ou Non',
    presetNumbers: 'Nombres 1-6',
    presetActions: 'Actions',
    presetCustom: 'Personnalisé',
    presetD20: 'D20',
    presetAlignment: 'Alignement',
    presetLoot: 'Rareté du Butin',
    weightLabel: 'Poids',
    spinAgain: 'Tourner à Nouveau',
    noSegments: 'Ajoutez des segments à la roue avant de tourner.',
  },
  seo: [
    { type: 'title', text: 'Roue de Décision pour Jeux de Société et Activités de Groupe', level: 2 },
    { type: 'paragraph', html: 'La roue de décision est un outil numérique polyvalent pour les jeux de rôle, jeux de plateau et animations de groupe. Elle permet de tirer au sort des options de manière rapide, équitable et totalement aléatoire. Personnalisez chaque secteur avec vos propres textes, couleurs et poids configurables pour adapter les probabilités exactes aux règles de votre partie.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Ajouter un Segment' },
        { value: '7', label: 'Préréglages' },
        { value: '10', label: 'Historique des Tirages' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Comment Utiliser la Roue de Décision', level: 2 },
    { type: 'paragraph', html: 'Choisissez un modèle prédéfini comme Oui/Non, D20, Alignements ou Butin, ou créez votre propre liste personnalisée. Réglez les poids de 1 à 5 pour modifier la fréquence d apparition de chaque résultat. Le moteur physique simule l inertie et le frottement de rotation pour ajouter du suspense à chaque tirage.' },
    { type: 'title', text: 'Autres scénarios de décision', level: 3 },
    { type: 'paragraph', html: 'Utilisez la roue pour organiser des votes rapides au sein du groupe, générer des rencontres aléatoires en jeu de rôle, distribuer les tours de jeu ou désigner le joueur qui choisit son personnage en premier.' },
    { type: 'title', text: 'Modèles pour les jeux de plateau', level: 3 },
    { type: 'paragraph', html: 'Les modèles préconçus vous permettent de charger les décisions fréquentes en quelques secondes, ce qui gagne un temps précieux pendant vos soirées jeux et évite les hésitations inutiles.' },
    { type: 'title', text: 'Régler les pondérations', level: 3 },
    { type: 'paragraph', html: 'Les pondérations vous permettent de balancer ou d orienter les tirages. En augmentant le poids d un segment, celui-ci occupe un arc proportionnellement plus grand sur la roue, augmentant sa chance d être désigné.' },
    { type: 'title', text: 'Consulter l historique', level: 3 },
    { type: 'paragraph', html: 'L historique conserve les dix derniers tirages pour que l ensemble des joueurs puisse vérifier les résultats précédents en toute transparence au fil de la session.' },
  ],
  faq: [
    {
      question: 'Comment fonctionne la roue de décision?',
      answer: 'Créez vos options, attribuez des poids si nécessaire pour modifier les probabilités, puis cliquez sur Tourner la Roue pour le résultat.',
    },
    {
      question: 'Peut-on modifier les couleurs et les étiquettes?',
      answer: 'Oui, vous pouvez éditer librement le nom, la couleur et le poids de chaque option présente sur la roue.',
    },
    {
      question: "Puis-je modifier les probabilités ?",
      answer: "Oui, modifiez le poids d'un segment.",
    },
    {
      question: "Combien de segments sont possibles ?",
      answer: "La roue accepte jusqu'à 16 segments et en nécessite au moins deux.",
    },
    {
      question: "Quels modèles sont disponibles ?",
      answer: "Oui ou Non, Nombres, Actions, options personnelles, D20, Alignement et Butin.",
    },
    {
      question: "Les tours précédents restent-ils visibles ?",
      answer: "Oui, le navigateur affiche les dix derniers résultats.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Créer les Options',
      text: 'Sélectionnez un préréglage ou configurez vos propres options avec des couleurs et poids.',
    },
    {
      name: 'Lancer le Tour',
      text: 'Cliquez sur le bouton de rotation pour lancer la roue animée avec ralentissement réaliste.',
    },
    {
      name: "Vérifier le résultat",
      text: "À l'arrêt, vérifiez le segment gagnant puis l'historique des tours.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Roue de Décision',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Comment fonctionne la roue de décision?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Créez vos options, attribuez des poids si nécessaire pour modifier les probabilités, puis cliquez sur Tourner la Roue pour le résultat.' } },
        { '@type': 'Question', 'name': 'Peut-on modifier les couleurs et les étiquettes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, vous pouvez éditer librement le nom, la couleur et le poids de chaque option présente sur la roue.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': 'Créer les Options', 'text': 'Sélectionnez un préréglage ou configurez vos propres options avec des couleurs et poids.' },
        { '@type': 'HowToStep', 'name': 'Lancer le Tour', 'text': 'Cliquez sur le bouton de rotation pour lancer la roue animée avec ralentissement réaliste.' },
      ],
    },
  ],
};
