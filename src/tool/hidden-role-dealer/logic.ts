import type { Player, Role, ImpostorValues } from './types';

export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

export function assignRoles(players: Player[], roles: Role[]): Player[] {
  const shuffledRoles = shuffleArray(roles);
  return players.map((player, index) => ({
    ...player,
    role: shuffledRoles[index] || null,
    revealed: false,
  }));
}

export function addPlayer(players: Player[], name: string): Player[] {
  const cleanedName = name.trim();
  if (!cleanedName) {
    return players;
  }
  return [
    ...players,
    {
      id: `player-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: cleanedName,
      role: null,
      revealed: false,
    },
  ];
}

export function removePlayer(players: Player[], id: string): Player[] {
  return players.filter((p) => p.id !== id);
}

export function updatePlayerName(players: Player[], id: string, name: string): Player[] {
  return players.map((p) => (p.id === id ? { ...p, name: name.trim() } : p));
}

export function addCustomRole(roles: Role[], name: string, alignment: 'good' | 'evil' | 'neutral'): Role[] {
  const cleaned = name.trim();
  if (!cleaned) return roles;
  return [
    ...roles,
    {
      id: `r-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: cleaned,
      description: 'Custom game role.',
      team: alignment.toUpperCase(),
      secretInfo: 'Achieve your victory conditions.',
      alignment,
    },
  ];
}

export function removeCustomRole(roles: Role[], id: string): Role[] {
  return roles.filter((r) => r.id !== id);
}

export function calculateImpostorCount(
  mode: string,
  totalPlayers: number,
  vals: ImpostorValues
): number {
  if (mode === 'percentage') {
    return Math.max(1, Math.round((vals.percentVal / 100) * totalPlayers));
  }
  if (mode === 'range') {
    const min = Math.max(1, vals.minVal);
    const max = Math.max(min, vals.maxVal);
    const actualMax = Math.min(max, totalPlayers - 1);
    const actualMin = Math.min(min, actualMax);
    return Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;
  }
  return Math.max(1, vals.fixedVal);
}

function createImpostorRole(index: number, ui: Record<string, string>): Role {
  return {
    id: `imp-${index}`,
    name: ui.roleImpostorName || 'Impostor',
    description: ui.roleImpostorDesc || 'Secretly eliminate Crewmates.',
    team: ui.teamImpostor || 'Impostor',
    secretInfo: ui.roleImpostorSecret || 'Sabotage and eliminate without getting caught.',
    alignment: 'evil',
  };
}

function createCrewmateRole(index: number, secretMsg: string, ui: Record<string, string>): Role {
  return {
    id: `crew-${index}`,
    name: ui.roleCrewmateName || 'Crewmate',
    description: ui.roleCrewmateDesc || 'Complete tasks and find the Impostor.',
    team: ui.teamCrewmate || 'Crewmate',
    secretInfo: secretMsg,
    alignment: 'good',
  };
}

export function generateImpostorRoles(
  totalPlayers: number,
  impostorCount: number,
  sharedSecret: string,
  ui: Record<string, string>
): Role[] {
  const roles: Role[] = [];
  const actualImpostors = Math.min(impostorCount, totalPlayers - 1);
  for (let i = 0; i < actualImpostors; i++) {
    roles.push(createImpostorRole(i, ui));
  }
  const prefix = ui.roleCrewmateSecret || 'The Secret Word is:';
  const secretMsg = `${prefix} ${sharedSecret}`;
  while (roles.length < totalPlayers) {
    roles.push(createCrewmateRole(roles.length, secretMsg, ui));
  }
  return roles;
}

const RANDOM_WORDS = [
  'Restaurant', 'Space Station', 'Submarine', 'Supermarket', 'Movie Theater',
  'School', 'Hospital', 'Pirate Ship', 'Amusement Park', 'Hotel',
  'Airport', 'Police Station', 'Museum', 'Bank', 'Casino'
];

export function getRandomSecretWord(): string {
  return RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
}
