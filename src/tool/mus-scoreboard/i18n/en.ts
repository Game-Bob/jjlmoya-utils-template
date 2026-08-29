import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: 'Name the two pairs, choose the local rules, then tap stones as the hand is counted. Close a game only when a pair reaches the target.',
  pairOneLabel: 'Pair one',
  pairTwoLabel: 'Pair two',
  pairOneDefault: 'North table',
  pairTwoDefault: 'South table',
  targetPointsLabel: 'Points per game',
  targetPointsHint: 'Choose the finish line for each game.',
  gamesToWinLabel: 'Games to win the vaca',
  gamesToWinHint: 'The first pair to reach this number wins the match.',
  deckLabel: 'Deck for the table',
  deckHint: 'Spanish cards (Baraja española) are the traditional Mus choice. French cards keep the scoring flow familiar for your table.',
  spanishDeck: 'Baraja española (Spanish deck)',
  frenchDeck: 'French deck',
  frenchDeckNotice: 'Remember to remove the 8s, 9s, and 10s from your deck to play with 40 cards. Jacks are Sotas, Queens are Caballos, and Kings are Reyes.',
  pointsOption30: '30 points',
  pointsOption40: '40 points',
  pointsOption50: '50 points',
  gamesOption1: '1 game',
  gamesOption2: '2 games',
  gamesOption3: '3 games',
  startMatch: 'Open the scoreboard',
  matchSettings: 'Name the pairs and set the rules',
  liveMatch: 'Live match',
  targetLabel: 'point game',
  gameLabel: 'games',
  gamePlural: 'games',
  vacaLabel: 'games to win',
  scoreLabel: 'Current stones',
  handLabel: 'Choose which pair is mano',
  handSelected: 'is mano.',
  stonesLabel: 'Tally pieces',
  stoneSingular: 'stone',
  stonePlural: 'stones',
  amarracoSingular: 'amarraco',
  amarracoPlural: 'amarracos',
  pointsToGo: 'to go',
  addStone: 'stone',
  addAmarraco: 'amarraco',
  closeGame: 'Close game',
  closeGamePrompt: 'Confirm that this pair won the game and start the next one?',
  confirmationTitle: 'Confirm table action',
  confirmAction: 'Confirm',
  cancelAction: 'Keep playing',
  undo: 'Undo',
  resetMatch: 'Reset match',
  resetMatchPrompt: 'Reset the current match and clear its score history?',
  historyTitle: 'Recent calls',
  noHistory: 'No calls yet. The next tap will appear here.',
  matchReady: 'The table is ready.',
  closeGameHint: 'A pair has reached the finish line. Confirm the game winner.',
  waitingForScore: 'Keep counting. Points remaining for the leader:',
  gameWon: 'Game closed.',
  vacaWon: 'Vaca won. Start a new match when the table is ready.',
  gameClosed: 'closed the game.',
  pointsAdded: 'scored',
  matchSaved: 'Score saved on this device.',
  lastAction: 'last action',
  settingsApplied: 'New rules applied. The match is fresh.',
  pairNameRequired: 'Give both pairs a name before opening the scoreboard.',
  visualScoreLabel: 'Mus table scoreboard showing stones, amarracos, games and the finish line',
};

const faq = [
  {
    question: 'What does this online Mus scoreboard track?',
    answer: 'It tracks the two pairs, stones and amarracos for the current game, games won in the vaca, recent scoring actions, and the selected finish line. It is designed for a live table where one person enters the agreed tally.',
  },
  {
    question: 'Why are stones and amarracos shown separately?',
    answer: 'A stone represents one point and an amarraco commonly represents five stones. Showing both forms makes the digital tally easier to compare with the physical pieces on a Mus table.',
  },
  {
    question: 'Can I play to 30 or 50 points instead of 40?',
    answer: 'Yes. Choose 30, 40, or 50 points before opening the scoreboard. The finish line, remaining points, visual rails, and close game controls all use that choice.',
  },
  {
    question: 'How do I record a finished game?',
    answer: 'Keep adding stones or amarracos until one pair reaches the selected finish line. The close game button then becomes available. Confirm the winning pair to add one game and start the next game at zero points.',
  },
  {
    question: 'Does the scoreboard save an interrupted match?',
    answer: 'Yes. The current setup, score, games, and recent actions are saved locally in the browser. The data stays on that device and is not sent to a server.',
  },
  {
    question: 'Does this scoreboard enforce every regional Mus rule?',
    answer: 'No. Mus has regional and tournament variations, especially around the number of points and games. This scoreboard records the agreed tally and leaves the spoken lances and local rules to the players.',
  },
  {
    question: 'Should I play Mus with a Spanish or French deck?',
    answer: 'The traditional Mus game is played with a Spanish deck, so that is the default choice here. To adapt a French deck, remove the 8s, 9s, and 10s so only 40 cards remain. Jacks correspond to Sotas, Queens to Caballos, and Kings to Reyes; 3s still act as Kings and 2s as Aces.',
  },
];

const howTo = [
  {
    name: 'Name both pairs',
    text: 'Enter the names that will be visible on the two sides of the table so the scorer can identify the correct pair at a glance.',
  },
  {
    name: 'Choose the local finish line',
    text: 'Select 30, 40, or 50 points per game and choose how many games are needed to win the vaca.',
  },
  {
    name: 'Count the hand',
    text: 'Tap plus one for a stone or plus five for an amarraco whenever the table agrees the points have been won.',
  },
  {
    name: 'Close each game deliberately',
    text: 'When a pair reaches the finish line, confirm the winner. The scoreboard records the game, resets the stones, and keeps the match tally.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Online Mus Scoreboard',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'A local first Mus scoreboard for tracking stones, amarracos, games and vacas during a live match.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to keep score in a live Mus match',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'online-mus-scoreboard',
  title: 'Online Mus Scoreboard for Live Games',
  description: 'Track stones, amarracos, games and vacas with a fast Mus scoreboard for a real table. Choose 30, 40 or 50 points and keep the match on your device.',
  ui,
  seo: [
    { type: 'title', text: 'Keep a Clear Mus Tally While the Table Keeps Moving', level: 2 },
    { type: 'paragraph', html: 'Mus scoring changes quickly because several lances may be counted in the same hand. This scoreboard keeps the two pairs visible, separates single stones from groups of five, and leaves the final confirmation with the players who have agreed the tally.' },
    { type: 'title', text: 'Choose the Finish Line Before the First Hand', level: 2 },
    { type: 'paragraph', html: 'The common forty point game is not the only table rule. Some groups play to thirty or use another agreed target. Set the points per game and the number of games needed to win the vaca before you start, so the remaining points and close game controls match the table.' },
    {
      type: 'table',
      headers: ['Setting', 'What it controls', 'When to use it'],
      rows: [
        ['30 points', 'Short game finish line', 'Quick games or a local house rule'],
        ['40 points', 'Common game finish line', 'The usual starting point for a friendly match'],
        ['50 points', 'Longer game finish line', 'A table that agrees to a longer game'],
      ],
    },
    { type: 'tip', title: 'Agree the Rules Out Loud', html: 'Regional and tournament rules can differ. Confirm the finish line, the number of games in the vaca, and who is responsible for the physical tally before the cards are dealt.' },
    { type: 'title', text: 'Choose the Deck Before the Cards Are Dealt', level: 2 },
    { type: 'paragraph', html: 'Mus is traditionally played with a Spanish deck, which is why the scoreboard starts with Spanish cards selected. To use a French deck, remove the 8s, 9s, and 10s first so the table has 40 cards. Jacks map to Sotas, Queens to Caballos, Kings to Reyes, while 3s still act as Kings and 2s as Aces. The selector records the deck being used without changing the score flow.' },
    { type: 'title', text: 'Read the Digital Tally Beside the Physical Table', level: 2 },
    { type: 'paragraph', html: 'The large score shows the total points. The line below it translates that total into amarracos and stones, while the small pieces in each pair card give you a quick visual check against the table. If the two records disagree, pause and resolve the physical tally before adding another score.' },
    { type: 'list', items: ['<strong>Stone:</strong> one point in the digital tally.', '<strong>Amarraco:</strong> a group of five stones represented by one diamond.', '<strong>Game:</strong> a completed point race that resets the stones after confirmation.', '<strong>Vaca:</strong> the match total reached by winning the configured number of games.'] },
    { type: 'title', text: 'Close a Game Only After the Table Agrees', level: 2 },
    { type: 'paragraph', html: 'Reaching the finish line makes a pair eligible to close the game, but the scoreboard does not silently award it. This mirrors the practical need to verify the last count with the opposing pair. Confirming the winner records one game, resets both point totals, and preserves the recent call history.' },
    { type: 'tip', title: 'Use Undo for a Misread Tally', html: 'If the scorer taps the wrong pair or uses an amarraco instead of a stone, undo the last action immediately. For an older disagreement, compare the recent calls with the physical pieces and then continue from the agreed score.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
