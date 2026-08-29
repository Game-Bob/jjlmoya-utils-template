import type { Player, Role } from '../types';

export function loadSavedPlayers(): Player[] {
  const saved = localStorage.getItem('hidden-role-dealer-players');
  try {
    return saved ? JSON.parse(saved) : ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'].map((name, i) => ({ id: `p-${i}`, name, role: null, revealed: false }));
  } catch {
    return [];
  }
}

export function savePlayersList(players: Player[]): void {
  localStorage.setItem('hidden-role-dealer-players', JSON.stringify(players.map((p) => ({ ...p, role: null, revealed: false }))));
}

export function loadSavedCustomRoles(): Role[] {
  const savedRoles = localStorage.getItem('hidden-role-dealer-custom-roles');
  try {
    return savedRoles ? JSON.parse(savedRoles) : [];
  } catch {
    return [];
  }
}
