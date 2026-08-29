import { assignRoles, generateImpostorRoles, calculateImpostorCount, getRandomSecretWord } from '../logic';
import { PRESETS } from './presets';
import type { Player, Role, ImpostorValues } from '../types';

export interface AssignRolesOptions {
  players: Player[];
  activePreset: string;
  customRoles: Role[];
  ui: Record<string, string>;
  vals: ImpostorValues;
  mode: string;
  writerId: string;
  secretInput: string;
}

export interface AssignResult {
  players: Player[];
  preroundActive: boolean;
  impostorSecret: string;
}

function assignImpostorRandom(options: AssignRolesOptions): { players: Player[]; secret: string } {
  const secret = options.secretInput || getRandomSecretWord();
  const count = options.players.length;
  const impCount = calculateImpostorCount(options.mode, count, options.vals);
  return {
    players: assignRoles(options.players, generateImpostorRoles(count, impCount, secret, options.ui)),
    secret
  };
}

function assignSpecificWriter(options: AssignRolesOptions): Player[] {
  const others = options.players.filter(p => p.id !== options.writerId);
  const writerP = options.players.find(p => p.id === options.writerId)!;
  writerP.role = {
    id: 'writer',
    name: options.ui.roleWriterName || 'Writer',
    description: options.ui.roleWriterDesc || 'You decide the secret word.',
    team: options.ui.teamCrewmate || 'Crewmate',
    secretInfo: '',
    alignment: 'good'
  };
  const impCount = calculateImpostorCount(options.mode, others.length + 1, options.vals);
  const otherRoles = generateImpostorRoles(others.length, impCount, '', options.ui);
  return [writerP, ...assignRoles(others, otherRoles)];
}

export function performRoleAssignment(options: AssignRolesOptions): AssignResult {
  const count = options.players.length;
  if (options.activePreset === 'custom') {
    return {
      players: options.customRoles.length === count ? assignRoles(options.players, options.customRoles) : options.players,
      preroundActive: false,
      impostorSecret: ''
    };
  }
  if (options.activePreset === 'impostor') {
    if (options.writerId === 'preround') {
      return { players: options.players, preroundActive: true, impostorSecret: '' };
    }
    if (options.writerId === 'random') {
      const res = assignImpostorRandom(options);
      return { players: res.players, preroundActive: false, impostorSecret: res.secret };
    }
    const players = assignSpecificWriter(options);
    return { players, preroundActive: false, impostorSecret: '' };
  }
  return {
    players: assignRoles(options.players, PRESETS[options.activePreset](count, options.ui)),
    preroundActive: false,
    impostorSecret: ''
  };
}
