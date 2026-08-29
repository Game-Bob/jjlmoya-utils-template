import { assignRoles, generateImpostorRoles, calculateImpostorCount, getRandomSecretWord } from '../logic';
import type { ImpostorValues } from '../types';
import type { PlayerManager } from './player-manager';

export interface PreroundOptions {
  secret: string;
  preroundWords: string[];
  preroundStep: number;
  playerMgr: PlayerManager;
  vals: ImpostorValues;
  mode: string;
  ui: Record<string, string>;
}

export interface PreroundResult {
  preroundWords: string[];
  preroundStep: number;
  preroundActive: boolean;
  impostorSecret: string;
  finished: boolean;
}

function completePreround(options: PreroundOptions, words: string[]): string {
  const secretWord = words[Math.floor(Math.random() * words.length)];
  const players = options.playerMgr.getPlayers();
  const impCount = calculateImpostorCount(options.mode, players.length, options.vals);
  const nextPlayers = assignRoles(players, generateImpostorRoles(players.length, impCount, secretWord, options.ui));
  options.playerMgr.setPlayers(nextPlayers);
  return secretWord;
}

export function savePreroundWord(options: PreroundOptions): PreroundResult {
  const nextWords = [...options.preroundWords, options.secret];
  const nextStep = options.preroundStep + 1;
  const totalPlayers = options.playerMgr.getPlayers().length;
  if (nextStep < totalPlayers) {
    return {
      preroundWords: nextWords,
      preroundStep: nextStep,
      preroundActive: true,
      impostorSecret: '',
      finished: false
    };
  }
  const secretWord = completePreround(options, nextWords);
  return {
    preroundWords: nextWords,
    preroundStep: nextStep,
    preroundActive: false,
    impostorSecret: secretWord,
    finished: true
  };
}

export function saveWriterWord(
  secret: string,
  playerMgr: PlayerManager,
  ui: Record<string, string>
): string {
  const actualSecret = secret.trim() || getRandomSecretWord();
  const prefix = ui.roleCrewmateSecret || 'The Secret Word is:';
  const players = playerMgr.getPlayers();
  players.forEach(p => {
    if (p.role && (p.role.id.startsWith('crew-') || p.role.id === 'writer')) {
      p.role.secretInfo = `${prefix} ${actualSecret}`;
    }
  });
  playerMgr.setPlayers(players);
  return actualSecret;
}
