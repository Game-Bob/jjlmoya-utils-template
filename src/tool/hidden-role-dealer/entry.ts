import type { TabletopToolEntry, ToolLocaleContent } from '../../types';

export interface HiddenRoleDealerUI {
  title: string;
  setupTitle: string;
  playerList: string;
  addPlayer: string;
  addPlayerPlaceholder: string;
  rolePool: string;
  presetsTitle: string;
  presetCustom: string;
  dealRoles: string;
  clearPlayers: string;
  instructions: string;
  passTo: string;
  holdToReveal: string;
  releasingResets: string;
  hideRole: string;
  nextPlayer: string;
  finishedTitle: string;
  finishedDesc: string;
  restart: string;
  rolesCount: string;
  playersCount: string;
  mismatchWarning: string;
  werewolfName: string;
  werewolfDesc: string;
  avalonName: string;
  avalonDesc: string;
  hitlerName: string;
  hitlerDesc: string;
  customName: string;
  customDesc: string;
  roleWerewolfName: string;
  roleWerewolfDesc: string;
  roleWerewolfSecret: string;
  roleSeerName: string;
  roleSeerDesc: string;
  roleSeerSecret: string;
  roleDoctorName: string;
  roleDoctorDesc: string;
  roleDoctorSecret: string;
  roleVillagerName: string;
  roleVillagerDesc: string;
  roleVillagerSecret: string;
  roleMerlinName: string;
  roleMerlinDesc: string;
  roleMerlinSecret: string;
  roleAssassinName: string;
  roleAssassinDesc: string;
  roleAssassinSecret: string;
  roleMinionName: string;
  roleMinionDesc: string;
  roleMinionSecret: string;
  roleServantName: string;
  roleServantDesc: string;
  roleServantSecret: string;
  roleHitlerName: string;
  roleHitlerDesc: string;
  roleHitlerSecret: string;
  roleFascistName: string;
  roleFascistDesc: string;
  roleFascistSecret: string;
  roleLiberalName: string;
  roleLiberalDesc: string;
  roleLiberalSecret: string;
  roleCustomName: string;
  roleCustomDesc: string;
  roleCustomSecret: string;
  teamWerewolves: string;
  teamVillagers: string;
  teamGood: string;
  teamEvil: string;
  teamFascist: string;
  teamLiberal: string;
  teamCustom: string;
  secretRoleIs: string;
  customRolesTitle: string;
  customRolePlaceholder: string;
  neutralLabel: string;
  goodLabel: string;
  evilLabel: string;
  customMismatchWarning: string;
  impostorPresetName: string;
  impostorPresetDesc: string;
  impostorTitle: string;
  impostorWarning: string;
  roleImpostorName: string;
  roleImpostorDesc: string;
  roleImpostorSecret: string;
  roleCrewmateName: string;
  roleCrewmateDesc: string;
  roleCrewmateSecret: string;
  teamImpostor: string;
  teamCrewmate: string;
  impostorSharedSecretLabel: string;
  impostorSharedSecretPlaceholder: string;
  impostorModeLabel: string;
  impostorModeFixed: string;
  impostorModePercentage: string;
  impostorModeRange: string;
  impostorFixedLabel: string;
  impostorPercentageLabel: string;
  impostorRangeMinLabel: string;
  impostorRangeMaxLabel: string;
  impostorWriterLabel: string;
  impostorWriterRandom: string;
  roleWriterName: string;
  roleWriterDesc: string;
  writerInputPrompt: string;
  writerInputPlaceholder: string;
  btnSetWord: string;
  impostorWriterPreround: string;
  impostorWriterDescHost: string;
  impostorWriterDescPreround: string;
  impostorWriterDescPlayer: string;
  preroundPassTitle: string;
  preroundInputPrompt: string;
  preroundPassHint: string;
  btnSubmitWord: string;
}

export type HiddenRoleDealerLocaleContent = ToolLocaleContent<HiddenRoleDealerUI>;

export const hiddenRoleDealer: TabletopToolEntry<HiddenRoleDealerUI> = {
  id: 'hidden-role-dealer',
  icons: { bg: 'mdi:incognito', fg: 'mdi:incognito-circle' },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
