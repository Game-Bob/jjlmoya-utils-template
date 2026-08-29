import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Score Tracker',
  addPlayer: 'Add Player',
  removePlayer: 'Remove',
  renamePlayer: 'Rename',
  startRound: 'Start Round 1',
  nextRound: 'Next Round',
  resetGame: 'Reset Game',
  undoRound: 'Undo Last Round',
  playerLabel: 'Player',
  scoreLabel: 'Score',
  roundLabel: 'Round',
  totalLabel: 'Total',
  rankLabel: 'Rank',
  leaderboardTitle: 'Leaderboard',
  historyTitle: 'Score History',
  noPlayersHint: 'Add players to start scoring',
  playerNamePlaceholder: 'Player name',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  deleteRoundConfirm: 'Delete the last round?',
  playerAdded: 'Player added',
  playerRemoved: 'Player removed',
  roundStarted: 'Round started',
  gameReset: 'Game has been reset',
  noRoundsYet: 'No rounds recorded yet',
  currentRoundLabel: 'Current Round',
  scoringTitle: 'Round Scoring',
  resetAllLabel: 'Reset All',
  confirmResetAll: 'This will delete all players and scores. Are you sure?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'score-tracker',
  title: 'Score Tracker: Multiplayer Scorekeeper & Leaderboard Manager',
  description: 'Track scores for any tabletop game. Add players, record round-by-round scores, and watch the leaderboard update in real time with automatic rankings.',
  ui,
  seo: [
    { type: 'title', text: 'Board Game Scorekeeping: How to Track Scores Without Mistakes', level: 2 },
    { type: 'paragraph', html: 'Keeping score in board games seems simple until you are five rounds into a game and realise someone miscounted. Whether you play Wingspan, Terraforming Mars, Catan, or any victory point game, accurate scorekeeping is the difference between a fair game and an argument. A digital score tracker eliminates arithmetic errors, shows live rankings, and keeps a complete history of every round so you can verify the final tally.' },
    {
      type: 'stats',
      items: [
        { value: 'Unlimited', label: 'Players Supported' },
        { value: 'Real-Time', label: 'Leaderboard Updates' },
        { value: 'Unlimited', label: 'Rounds Recorded' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Common Scoring Mistakes and How to Avoid Them', level: 2 },
    { type: 'paragraph', html: 'The most frequent scoring error is forgetting to add end-of-round bonuses or misadding a column of numbers. When you track scores digitally, the running total updates automatically after each entry. This means you can catch a mistake the moment a number looks off, rather than discovering it at the end of the game when nobody remembers the correct value. The round history feature lets you audit any previous round and correct errors without restarting the entire game.' },
    {
      type: 'tip',
      title: 'Quick Scorekeeping Tips',
      html: 'Enter scores immediately after each round ends while everyone still remembers the results. Use descriptive player labels like colours or faction names instead of real names for games with hidden roles. When playing with children, let them press the buttons themselves to stay engaged with the scoring process.',
    },
    {
      type: 'title',
      text: 'Round Scoring vs Total Only',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Per Round Scoring vs Final Score Only',
      items: [
        {
          pro: 'You can see who led at each stage of the game and how the momentum shifted.',
          con: 'Requires entering data after each round instead of once at the end.',
        },
        {
          pro: 'Errors are easy to locate because you can check individual round entries against memory.',
          con: 'Takes slightly more time during the game session.',
        },
        {
          pro: 'Players can verify their own round scores, reducing disputes and building trust.',
          con: 'Works best when one person manages the device or players take turns.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Games with Unusual Scoring Systems',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Victory Point Games',
          description: 'Most eurogames use victory points awarded throughout the game. The challenge is tracking multiple VP sources: resources, achievements, end-game bonuses. A digital tracker lets you enter points as they come and see the running total.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Track multiple scoring categories',
            'End-game bonus calculations',
            'Instant tie-breaker resolution',
          ],
        },
        {
          title: 'Games with Negative Scoring',
          description: 'Some games penalise players with negative points for certain actions. A digital scorekeeper handles negative values naturally, colouring them red so the penalty is immediately visible. This is especially useful in trick-taking games or deduction games with penalty mechanics.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Automatic negative handling',
            'Visual penalty indicators',
            'Accurate cumulative totals',
          ],
        },
        {
          title: 'Campaign Games',
          description: 'Legacy and campaign games carry scores across multiple sessions. Without a tracker, you need to keep paper notes between game nights. A digital tool keeps your campaign scores organised and lets you review how your decisions affected the overall standings.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Persistent campaign tracking',
            'Cross-session comparison',
            'Session-by-session breakdown',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Scorekeeping Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Victory Points (VP)',
          definition: 'The standard scoring unit in most modern board games. Players earn VP through actions, and whoever has the most VP when the game ends wins.',
        },
        {
          term: 'Round Scoring',
          definition: 'Recording scores at the end of each round rather than only at the end of the game. This creates a detailed history and makes error checking straightforward.',
        },
        {
          term: 'Leaderboard',
          definition: 'A live ranking that shows each players position based on total score. The leaderboard reorders automatically as new scores are entered.',
        },
        {
          term: 'Negative Scoring',
          definition: 'A scoring system where players can lose points through penalties or failed actions, resulting in negative totals. A digital tracker handles this without manual subtraction errors.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'How to Handle Disputed Scores',
      icon: 'mdi:information-outline',
      badge: 'GAME TIP',
      html: 'When a player challenges a score, do not change it immediately. First check the round history to confirm what was entered. If the entry is wrong, use the +/- buttons to correct it and the total updates automatically. If the round entry is correct but the player disagrees, the history provides an objective record that everyone can review together.',
    },
  ],
  faq: [
    {
      question: 'How many players can I track?',
      answer: 'There is no limit. Add as many players as your game supports, and rename them at any time during the session.',
    },
    {
      question: 'Can I undo a mistake?',
      answer: 'Yes. Use the Undo Last Round button to remove the most recent round of scores, which will automatically recalculate all totals and rankings.',
    },
    {
      question: 'Does the score tracker save my data?',
      answer: 'The score tracker runs entirely in your browser. Data persists within the current session. Refreshing the page will reset all scores.',
    },
    {
      question: 'How does the leaderboard work?',
      answer: 'The leaderboard sorts players by total score in descending order. Rankings update automatically as you enter or modify scores in each round.',
    },
    {
      question: 'Can I track negative scores?',
      answer: 'Yes. The +/- buttons allow both positive and negative adjustments, making it suitable for games with penalty points or deduction mechanics.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Add Players',
      text: 'Enter player names using the Add Player input. You can add or remove players at any time during the game.',
    },
    {
      name: 'Start Scoring',
      text: 'Click Start Round to begin a new scoring round. Use the +/- buttons to adjust each player score for that round.',
    },
    {
      name: 'View Rankings',
      text: 'The leaderboard updates automatically. Browse the Score History tab to review past round entries.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Score Tracker & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How many players can I track?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'There is no limit. Add as many players as your game supports, and rename them at any time during the session.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I undo a mistake?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Use the Undo Last Round button to remove the most recent round of scores, which will automatically recalculate all totals and rankings.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does the score tracker save my data?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The score tracker runs entirely in your browser. Data persists within the current session. Refreshing the page will reset all scores.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does the leaderboard work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The leaderboard sorts players by total score in descending order. Rankings update automatically as you enter or modify scores in each round.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I track negative scores?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. The +/- buttons allow both positive and negative adjustments, making it suitable for games with penalty points or deduction mechanics.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Score Tracker',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Add Players',
          'text': 'Enter player names using the Add Player input. You can add or remove players at any time during the game.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Start Scoring',
          'text': 'Click Start Round to begin a new scoring round. Use the +/- buttons to adjust each player score for that round.',
        },
        {
          '@type': 'HowToStep',
          'name': 'View Rankings',
          'text': 'The leaderboard updates automatically. Browse the Score History tab to review past round entries.',
        },
      ],
    },
  ],
};
