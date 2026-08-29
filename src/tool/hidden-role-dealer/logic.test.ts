import { describe, it, expect } from 'vitest';
import { assignRoles, addPlayer, removePlayer, updatePlayerName, addCustomRole, removeCustomRole, calculateImpostorCount, generateImpostorRoles } from './logic';
import type { Player, Role } from './types';

describe('Hidden Role Dealer Logic', () => {
  const mockRoles: Role[] = [
    { id: '1', name: 'Role A', description: 'Desc A', team: 'Team A', secretInfo: 'Info A', alignment: 'good' },
    { id: '2', name: 'Role B', description: 'Desc B', team: 'Team B', secretInfo: 'Info B', alignment: 'evil' },
  ];

  it('should add a player', () => {
    const players: Player[] = [];
    const result = addPlayer(players, 'Player 1');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Player 1');
    expect(result[0].role).toBeNull();
  });

  it('should not add an empty player name', () => {
    const players: Player[] = [];
    const result = addPlayer(players, '   ');
    expect(result.length).toBe(0);
  });

  it('should remove a player', () => {
    const players: Player[] = [
      { id: 'p1', name: 'Player 1', role: null, revealed: false },
      { id: 'p2', name: 'Player 2', role: null, revealed: false },
    ];
    const result = removePlayer(players, 'p1');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('p2');
  });

  it('should update player name', () => {
    const players: Player[] = [
      { id: 'p1', name: 'Player 1', role: null, revealed: false },
    ];
    const result = updatePlayerName(players, 'p1', 'New Name');
    expect(result[0].name).toBe('New Name');
  });

  it('should assign roles to players', () => {
    const players: Player[] = [
      { id: 'p1', name: 'Player 1', role: null, revealed: false },
      { id: 'p2', name: 'Player 2', role: null, revealed: false },
    ];
    const result = assignRoles(players, mockRoles);
    expect(result[0].role).not.toBeNull();
    expect(result[1].role).not.toBeNull();
    expect(result[0].role!.id).not.toBe(result[1].role!.id);
  });

  it('should add custom roles', () => {
    const roles: Role[] = [];
    const result = addCustomRole(roles, 'Detective', 'good');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Detective');
    expect(result[0].alignment).toBe('good');
  });

  it('should remove custom roles', () => {
    const roles: Role[] = [
      { id: 'r1', name: 'Detective', description: '', team: '', secretInfo: '', alignment: 'good' }
    ];
    const result = removeCustomRole(roles, 'r1');
    expect(result.length).toBe(0);
  });

  it('should calculate impostor count correctly', () => {
    const vals = { fixedVal: 2, percentVal: 25, minVal: 1, maxVal: 3 };
    expect(calculateImpostorCount('fixed', 8, vals)).toBe(2);
    expect(calculateImpostorCount('percentage', 8, { ...vals, fixedVal: 1 })).toBe(2);
    const rangeVal = calculateImpostorCount('range', 8, { ...vals, fixedVal: 1 });
    expect(rangeVal).toBeGreaterThanOrEqual(1);
    expect(rangeVal).toBeLessThanOrEqual(3);
  });

  it('should generate impostor roles correctly with shared secret', () => {
    const ui = {
      roleImpostorName: 'Impostor',
      roleImpostorDesc: 'Secretly eliminate Crewmates.',
      teamImpostor: 'Impostor',
      roleImpostorSecret: 'Sabotage.',
      roleCrewmateName: 'Crewmate',
      roleCrewmateDesc: 'Find the Impostor.',
      teamCrewmate: 'Crewmate',
      roleCrewmateSecret: 'Secret word is:',
    };
    const roles = generateImpostorRoles(6, 2, 'Restaurant', ui);
    expect(roles.length).toBe(6);
    const impostors = roles.filter(r => r.alignment === 'evil');
    const crewmates = roles.filter(r => r.alignment === 'good');
    expect(impostors.length).toBe(2);
    expect(crewmates.length).toBe(4);
    expect(crewmates[0].secretInfo).toBe('Secret word is: Restaurant');
    expect(impostors[0].secretInfo).toBe('Sabotage.');
  });
});
