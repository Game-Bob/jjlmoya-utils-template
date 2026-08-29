import type { Combatant, InitiativeState } from './types';

export function createBlankState(): InitiativeState {
  return {
    combatants: [],
    currentIndex: 0,
    round: 0,
    isCombatActive: false,
  };
}

function sortByInitiative(combatants: Combatant[]): Combatant[] {
  return [...combatants].sort((a, b) => {
    if (b.initiative !== a.initiative) return b.initiative - a.initiative;
    return b.modifier - a.modifier;
  });
}

function generateId(): string {
  return 'cbt_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
}

export function addCombatant(
  state: InitiativeState,
  name: string,
  initiative: number,
  opts: { modifier: number; isPlayer: boolean }
): InitiativeState {
  const combatant: Combatant = {
    id: generateId(),
    name,
    initiative,
    modifier: opts.modifier,
    isPlayer: opts.isPlayer,
    statuses: [],
  };
  const combatants = sortByInitiative([...state.combatants, combatant]);
  return { ...state, combatants };
}

export function removeCombatant(
  state: InitiativeState,
  combatantId: string
): InitiativeState {
  const combatants = state.combatants.filter(c => c.id !== combatantId);
  let currentIndex = state.currentIndex;
  if (state.isCombatActive && currentIndex >= combatants.length) {
    currentIndex = Math.max(0, combatants.length - 1);
  }
  return { ...state, combatants, currentIndex };
}

export function updateInitiative(
  state: InitiativeState,
  combatantId: string,
  initiative: number
): InitiativeState {
  const combatants = state.combatants.map(c =>
    c.id === combatantId ? { ...c, initiative } : c
  );
  return { ...state, combatants: sortByInitiative(combatants) };
}

export function toggleStatus(
  state: InitiativeState,
  combatantId: string,
  status: string
): InitiativeState {
  const combatants = state.combatants.map(c => {
    if (c.id !== combatantId) return c;
    const has = c.statuses.includes(status);
    return {
      ...c,
      statuses: has
        ? c.statuses.filter(s => s !== status)
        : [...c.statuses, status],
    };
  });
  return { ...state, combatants };
}

export function startCombat(state: InitiativeState): InitiativeState {
  const combatants = sortByInitiative(state.combatants);
  return {
    ...state,
    combatants,
    currentIndex: 0,
    round: 1,
    isCombatActive: combatants.length > 0,
  };
}

export function nextTurn(state: InitiativeState): InitiativeState {
  if (!state.isCombatActive || state.combatants.length === 0) return state;
  let nextIndex = state.currentIndex + 1;
  let round = state.round;
  if (nextIndex >= state.combatants.length) {
    nextIndex = 0;
    round += 1;
  }
  return { ...state, currentIndex: nextIndex, round };
}

export function prevTurn(state: InitiativeState): InitiativeState {
  if (!state.isCombatActive || state.combatants.length === 0) return state;
  let prevIndex = state.currentIndex - 1;
  let round = state.round;
  if (prevIndex < 0) {
    prevIndex = state.combatants.length - 1;
    round = Math.max(1, round - 1);
  }
  return { ...state, currentIndex: prevIndex, round };
}

export function endCombat(state: InitiativeState): InitiativeState {
  return {
    ...state,
    currentIndex: 0,
    round: 0,
    isCombatActive: false,
  };
}
