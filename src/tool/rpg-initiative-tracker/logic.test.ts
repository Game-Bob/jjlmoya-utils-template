import { describe, it, expect } from 'vitest';
import {
  createBlankState,
  addCombatant,
  removeCombatant,
  updateInitiative,
  toggleStatus,
  startCombat,
  nextTurn,
  prevTurn,
  endCombat,
} from './logic';

function makeState() {
  let state = createBlankState();
  state = addCombatant(state, 'Hero', 18, { modifier: 4, isPlayer: true });
  state = addCombatant(state, 'Goblin', 12, { modifier: 2, isPlayer: false });
  state = addCombatant(state, 'Dragon', 22, { modifier: 7, isPlayer: false });
  return state;
}

describe('initiative tracker logic', () => {
  it('creates blank state', () => {
    const state = createBlankState();
    expect(state.combatants).toEqual([]);
    expect(state.currentIndex).toBe(0);
    expect(state.round).toBe(0);
    expect(state.isCombatActive).toBe(false);
  });

  it('adds combatant and sorts by initiative', () => {
    const state = makeState();
    expect(state.combatants).toHaveLength(3);
    expect(state.combatants[0].name).toBe('Dragon');
    expect(state.combatants[1].name).toBe('Hero');
    expect(state.combatants[2].name).toBe('Goblin');
  });

  it('sorts by modifier when initiatives tie', () => {
    let state = createBlankState();
    state = addCombatant(state, 'A', 10, { modifier: 2, isPlayer: true });
    state = addCombatant(state, 'B', 10, { modifier: 5, isPlayer: true });
    expect(state.combatants[0].name).toBe('B');
    expect(state.combatants[1].name).toBe('A');
  });

  it('removes combatant', () => {
    let state = makeState();
    const id = state.combatants[0].id;
    state = removeCombatant(state, id);
    expect(state.combatants).toHaveLength(2);
    expect(state.combatants.find(c => c.id === id)).toBeUndefined();
  });

  it('updates initiative', () => {
    let state = makeState();
    const id = state.combatants[2].id;
    state = updateInitiative(state, id, 25);
    expect(state.combatants[0].id).toBe(id);
  });

  it('toggles status on combatant', () => {
    let state = makeState();
    const id = state.combatants[0].id;
    state = toggleStatus(state, id, 'Stunned');
    expect(state.combatants[0].statuses).toContain('Stunned');
    state = toggleStatus(state, id, 'Stunned');
    expect(state.combatants[0].statuses).not.toContain('Stunned');
  });

  it('starts combat', () => {
    const state = startCombat(makeState());
    expect(state.isCombatActive).toBe(true);
    expect(state.round).toBe(1);
    expect(state.currentIndex).toBe(0);
  });

  it('does not start combat with no combatants', () => {
    const state = startCombat(createBlankState());
    expect(state.isCombatActive).toBe(false);
  });

  it('advances to next turn', () => {
    let state = startCombat(makeState());
    state = nextTurn(state);
    expect(state.currentIndex).toBe(1);
    expect(state.round).toBe(1);
  });

  it('wraps to next round', () => {
    let state = startCombat(makeState());
    state = nextTurn(state);
    state = nextTurn(state);
    state = nextTurn(state);
    expect(state.currentIndex).toBe(0);
    expect(state.round).toBe(2);
  });

  it('goes to previous turn', () => {
    let state = startCombat(makeState());
    state = nextTurn(state);
    state = nextTurn(state);
    state = prevTurn(state);
    expect(state.currentIndex).toBe(1);
    expect(state.round).toBe(1);
  });

  it('wraps previous turn to last index', () => {
    let state = startCombat(makeState());
    state = prevTurn(state);
    expect(state.currentIndex).toBe(2);
    expect(state.round).toBe(1);
  });

  it('ends combat', () => {
    let state = startCombat(makeState());
    state = endCombat(state);
    expect(state.isCombatActive).toBe(false);
    expect(state.round).toBe(0);
  });
});
