import { addCustomRole, removeCustomRole } from '../logic';
import { loadSavedCustomRoles } from './storage';
import type { Role } from '../types';

export class CustomRoleManager {
  private roles: Role[] = [];

  constructor() {
    this.roles = loadSavedCustomRoles();
  }

  public getRoles(): Role[] {
    return this.roles;
  }

  public add(name: string, alignment: 'good' | 'evil' | 'neutral'): void {
    this.roles = addCustomRole(this.roles, name, alignment);
    localStorage.setItem('hidden-role-dealer-custom-roles', JSON.stringify(this.roles));
  }

  public addFromInput(container: HTMLElement): void {
    const input = container.querySelector('#input-role-name') as HTMLInputElement;
    const select = container.querySelector('#select-role-alignment') as HTMLSelectElement;
    if (input && select && input.value.trim()) {
      this.add(input.value.trim(), select.value as 'good' | 'evil' | 'neutral');
      input.value = '';
      input.focus();
    }
  }

  public delete(id: string): void {
    this.roles = removeCustomRole(this.roles, id);
    localStorage.setItem('hidden-role-dealer-custom-roles', JSON.stringify(this.roles));
  }
}
