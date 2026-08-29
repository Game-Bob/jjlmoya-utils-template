export interface Combatant {
  id: string;
  name: string;
  initiative: number;
  modifier: number;
  isPlayer: boolean;
  statuses: string[];
}

export interface InitiativeState {
  combatants: Combatant[];
  currentIndex: number;
  round: number;
  isCombatActive: boolean;
}
