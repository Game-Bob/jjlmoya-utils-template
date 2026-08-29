import type { CategoryLocaleContent } from '../../types';

const slug = 'jeux-de-societe';
const title = 'Utilitaires et Outils pour Jeux de Société';
const description = 'Outils gratuits pour jeux de société et de rôle: lancez des dés virtuels avec des statistiques en direct, gérez les temps de tour avec un chronomètre multijoueur et bien plus. Fonctionne dans votre navigateur, sans inscription, 100 % privé.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Outils pour Jeux de Société | Lancer de Dés en Ligne et Chronomètre de Tours', level: 2 },
    { type: 'paragraph', html: 'Les soirées jeux devraient rimer avec plaisir, pas avec la chasse aux dés perdus ou l\'attente interminable de résultats. Cette bibliothèque d\'utilitaires offre à vous et votre groupe des outils rapides, bien conçus, qui fonctionnent instantanément, sans rien demander en retour. Que vous soyez un maître du jeu débordé ou un joueur qui veut simplement lancer ses dés sans tracas, ces outils sont faits pour vous.' },
    { type: 'title', text: 'Lancez des Dés Virtuels avec des Statistiques en Temps Réel', level: 2 },
    { type: 'paragraph', html: 'Marre de chercher vos dés sous la table ou d\'attendre que quelqu\'un additionne ses résultats ? Le lanceur de dés virtuel vous permet de jeter n\'importe quelle combinaison de dés polyédriques instantanément, avec modificateurs, avantage, désavantage et un historique complet. L\'analyseur de probabilités intégré vous montre vos chances réelles avant de lancer. Parfait pour Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun ou tout jeu reposant sur le hasard.' },
    { type: 'title', text: 'Gardez le Rythme avec un Chronomètre de Tour Intelligent', level: 2 },
    { type: 'paragraph', html: 'On connaît tous ce joueur qui prend une éternité à chaque tour. Le chronomètre de jeu vous permet de fixer des limites de temps justes et amusantes, avec des modes qui s\'adaptent à chaque style: du simple compte à rebours partagé aux systèmes d\'échecs avec incrément Fischer ou délai Bronstein. Fonctionne pour les duels à deux en écran partagé ou pour les groupes jusqu\'à huit joueurs avec contrôle centralisé. Après la partie, consultez des statistiques détaillées sur les temps et le rythme de jeu.' },
    { type: 'title', text: 'La Vie Privée Avant Tout: Vos Données Restent sur Votre Appareil', level: 2 },
    { type: 'paragraph', html: 'L\'un des grands atouts de cette bibliothèque est que tout le traitement s\'effectue dans votre navigateur. Aucune donnée n\'est envoyée à un serveur, pas de cookies de pistage, pas d\'email ni d\'inscription requis. Utilisez les outils hors ligne, partagez votre écran avec la table ou projetez sur un téléviseur - rien d\'autre à gérer que le jeu lui-même. Et d\'autres outils arrivent, toujours conçus pour simplifier la vie des joueurs de société.' },
    { type: 'stats', items: [
      { label: 'Outils', value: '2+', icon: 'mdi:tools' },
      { label: 'Joueurs', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Langues', value: '15', icon: 'mdi:translate' },
      { label: 'Confidentialité', value: '100 % Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
