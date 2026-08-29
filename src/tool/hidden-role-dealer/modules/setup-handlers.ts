import { addPlayer, addCustomRole, removeCustomRole } from '../logic';
import { savePlayersList } from './storage';
import type { Player, Role } from '../types';

export function createNewPlayer(container: HTMLElement, players: Player[]): Player[] {
  const input = container.querySelector('#input-player-name') as HTMLInputElement;
  if (input && input.value.trim()) {
    const next = addPlayer(players, input.value.trim());
    savePlayersList(next);
    input.value = '';
    input.focus();
    return next;
  }
  return players;
}

export function createNewCustomRole(container: HTMLElement, customRoles: Role[]): Role[] {
  const input = container.querySelector('#input-role-name') as HTMLInputElement;
  const select = container.querySelector('#select-role-alignment') as HTMLSelectElement;
  if (input && select && input.value.trim()) {
    const next = addCustomRole(customRoles, input.value.trim(), select.value as 'good' | 'evil' | 'neutral');
    localStorage.setItem('hidden-role-dealer-custom-roles', JSON.stringify(next));
    input.value = '';
    input.focus();
    return next;
  }
  return customRoles;
}

export function deleteCustomRole(id: string, customRoles: Role[]): Role[] {
  const next = removeCustomRole(customRoles, id);
  localStorage.setItem('hidden-role-dealer-custom-roles', JSON.stringify(next));
  return next;
}
