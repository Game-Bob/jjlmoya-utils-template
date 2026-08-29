import type { Role } from '../types';

export const PRESETS: Record<string, (count: number, ui: Record<string, string>) => Role[]> = {
  werewolf: (count, ui) => {
    const roles: Role[] = [];
    const werewolfCount = count >= 6 ? 2 : 1;
    for (let i = 0; i < werewolfCount; i++) {
      roles.push({ id: `wolf-${i}`, name: ui.roleWerewolfName, description: ui.roleWerewolfDesc, team: ui.teamWerewolves, secretInfo: ui.roleWerewolfSecret, alignment: 'evil' });
    }
    roles.push({ id: 'seer', name: ui.roleSeerName, description: ui.roleSeerDesc, team: ui.teamVillagers, secretInfo: ui.roleSeerSecret, alignment: 'good' });
    roles.push({ id: 'doctor', name: ui.roleDoctorName, description: ui.roleDoctorDesc, team: ui.teamVillagers, secretInfo: ui.roleDoctorSecret, alignment: 'good' });
    while (roles.length < count) {
      roles.push({ id: `villager-${roles.length}`, name: ui.roleVillagerName, description: ui.roleVillagerDesc, team: ui.teamVillagers, secretInfo: ui.roleVillagerSecret, alignment: 'neutral' });
    }
    return roles.slice(0, count);
  },
  avalon: (count, ui) => {
    const roles: Role[] = [];
    roles.push({ id: 'merlin', name: ui.roleMerlinName, description: ui.roleMerlinDesc, team: ui.teamGood, secretInfo: ui.roleMerlinSecret, alignment: 'good' });
    roles.push({ id: 'assassin', name: ui.roleAssassinName, description: ui.roleAssassinDesc, team: ui.teamEvil, secretInfo: ui.roleAssassinSecret, alignment: 'evil' });
    roles.push({ id: 'minion', name: ui.roleMinionName, description: ui.roleMinionDesc, team: ui.teamEvil, secretInfo: ui.roleMinionSecret, alignment: 'evil' });
    while (roles.length < count) {
      roles.push({ id: `servant-${roles.length}`, name: ui.roleServantName, description: ui.roleServantDesc, team: ui.teamGood, secretInfo: ui.roleServantSecret, alignment: 'neutral' });
    }
    return roles.slice(0, count);
  },
  hitler: (count, ui) => {
    const roles: Role[] = [];
    roles.push({ id: 'hitler', name: ui.roleHitlerName, description: ui.roleHitlerDesc, team: ui.teamFascist, secretInfo: ui.roleHitlerSecret, alignment: 'evil' });
    roles.push({ id: 'fascist-0', name: ui.roleFascistName, description: ui.roleFascistDesc, team: ui.teamFascist, secretInfo: ui.roleFascistSecret, alignment: 'evil' });
    if (count >= 7) {
      roles.push({ id: 'fascist-1', name: ui.roleFascistName, description: ui.roleFascistDesc, team: ui.teamFascist, secretInfo: ui.roleFascistSecret, alignment: 'evil' });
    }
    while (roles.length < count) {
      roles.push({ id: `liberal-${roles.length}`, name: ui.roleLiberalName, description: ui.roleLiberalDesc, team: ui.teamLiberal, secretInfo: ui.roleLiberalSecret, alignment: 'neutral' });
    }
    return roles.slice(0, count);
  },
  custom: (count, ui) => {
    const roles: Role[] = [];
    for (let i = 0; i < count; i++) {
      roles.push({ id: `custom-${i}`, name: `${ui.roleCustomName} ${i + 1}`, description: ui.roleCustomDesc, team: ui.teamCustom, secretInfo: ui.roleCustomSecret, alignment: 'neutral' });
    }
    return roles;
  }
};
