import { addPlayer } from '../logic';
import { loadSavedPlayers, savePlayersList } from './storage';
import type { Player } from '../types';

export class PlayerManager {
  private players: Player[] = [];

  constructor() {
    this.players = loadSavedPlayers();
  }

  public getPlayers(): Player[] {
    return this.players;
  }

  public setPlayers(players: Player[]): void {
    this.players = players;
    savePlayersList(this.players);
  }

  public add(name: string): void {
    this.players = addPlayer(this.players, name);
    savePlayersList(this.players);
  }

  public addFromInput(container: HTMLElement): void {
    const input = container.querySelector('#input-player-name') as HTMLInputElement;
    if (input && input.value.trim()) {
      this.add(input.value.trim());
      input.value = '';
      input.focus();
    }
  }

  public delete(id: string): void {
    this.players = this.players.filter(p => p.id !== id);
    savePlayersList(this.players);
  }

  public clear(): void {
    this.players = [];
    savePlayersList([]);
  }
}
