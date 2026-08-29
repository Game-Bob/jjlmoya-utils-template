import { GameState } from './modules/GameState';
import { SetupPanelManager } from './modules/SetupPanelManager';
import { GameRunner } from './modules/GameRunner';

function init() {
  const state = new GameState();
  const runner = new GameRunner(state);
  const setup = new SetupPanelManager(state, () => {
    runner.startGame(setup.getBaseDuration());
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
