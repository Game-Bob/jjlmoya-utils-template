import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: 'Board Game Timer',
  setupTitle: 'Game Setup',
  playerNamePlaceholder: 'Player name',
  addPlayer: 'Add Player',
  removePlayer: 'Remove',
  startGame: 'Start Game',
  pauseGame: 'Pause',
  resumeGame: 'Resume',
  resetGame: 'Reset',
  nextTurn: 'End Turn',
  addTime: '+30s',
  removeTime: '-30s',
  playerLabel: 'Player',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  expiredLabel: 'TIME UP',
  overtimeLabel: 'Overtime',
  turnIndicator: 'Your Turn',
  warningLowTime: 'Low Time',
  pausedOverlay: 'Game Paused',
  roundLabel: 'Round',
  settingsTitle: 'Settings',
  baseTimeLabel: 'Base Time',
  incrementLabel: 'Increment/Delay',
  warningTimeLabel: 'Warning Threshold',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  noPlayersHint: 'Add at least 2 players to start',
  addPlayerHint: 'Enter player name',
  timeUpLabel: "Time's up!",
  presetsTitle: 'Presets',
  timeControlTitle: 'Time Control',
  modeLabel: 'Mode',
  modeNormal: 'Normal Count',
  modeFischer: 'Fischer (Increment)',
  modeBronstein: 'Bronstein (Delay)',
  modeHourglass: 'Hourglass',
  modeTurn: 'Turn Reset',
  audioTitle: 'Audio Alerts',
  soundAlerts: 'Sound Effects',
  playersTitle: 'Players',
  playersAdded: 'Added Players',
  statsTitle: 'Game Statistics',
  totalGameTime: 'Total Time',
  totalRounds: 'Total Rounds',
  slowestPlayer: 'Slowest Player',
  playerPerformance: 'Player Time Analysis',
  playAgain: 'New Game',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'board-game-timer',
  title: 'Board Game Timer: Duel Chess Clock & Multiplayer Turn Manager',
  description: 'Track turns and manage time in your tabletop sessions with a professional board game timer. Supports Chess Clock duel mode, multiplayer layouts, Fischer increment, Bronstein delay, Hourglass, and detailed game metrics.',
  ui,
  seo: [
    { type: 'title', text: 'Mastering Tabletop Pace: How Professional Time Controls Enhance Tabletop Gaming', level: 2 },
    { type: 'paragraph', html: 'Time management is a vital component in modern tabletop gaming. Whether you are contesting a fast-paced party challenge or engaging in a deep strategic wargame, regulating thinking time ensures that all participants have a fair share of the spotlight. Utilizing professional timing methods like Fischer increment, Bronstein delay, or Hourglass modes eliminates analysis paralysis, guarantees game pace consistency, and adds an extra layer of strategic decision-making to the game board.' },
    {
      type: 'stats',
      items: [
        { value: '2-8', label: 'Supported Players' },
        { value: '5 Modes', label: 'Time Configurations' },
        { value: '100ms', label: 'Engine Precision' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Fischer, Bronstein, and Hourglass: Advanced Time Controls Explained', level: 2 },
    { type: 'paragraph', html: 'Our professional board game timer supports multiple timing options inspired by competitive tournament play, keeping casual and heavy game sessions running smoothly:' },
    {
      type: 'table',
      headers: ['Mode', 'How It Works', 'Best Suited For'],
      rows: [
        ['Normal Count', 'A standard global countdown clock that pauses on turn end.', 'Casual board games with a global thinking pool'],
        ['Fischer (Increment)', 'Adds a set amount of seconds to your clock after you finish a turn.', 'Strategic euros and wargames where quick turns build a time buffer'],
        ['Bronstein (Delay)', 'Provides a delay window during which your main timer does not count down.', 'Complex tactical games where short admin actions should be free'],
        ['Hourglass', 'Your timer decreases while your opponent\'s timer increases.', 'Intense two-player competitive duels and chess matches'],
        ['Turn Reset', 'A fixed, fresh countdown timer that resets completely on each turn.', 'Fast-paced party games, trivia challenges, and quick rounds'],
      ],
    },
    {
      type: 'tip',
      title: 'Finding the Ideal Time Configuration',
      html: 'A recommended starting point is allocating 30-45 seconds for light party games, 1-2 minutes with a 5-second Bronstein delay for mid-weight eurogames, and 30-45 minutes with a 10-second Fischer increment for heavy wargames or strategic tabletop campaigns.',
    },
    {
      type: 'title',
      text: 'Visual Optimization: Split-Screen Duel vs. Multiplayer Central Turn Button',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For head-to-head duels, the application automatically presents a split-screen chess clock layout. This view allows players to orient and rotate their screen halves by 180 degrees, allowing convenient viewing from opposite sides of the table. For games with 3 or more participants, the interface changes to a multiplayer grid with active player glow highlights, individual card adjustments, and a giant central End Turn action button that acts as a shared physical buzzer in the middle of the play area.',
    },
    {
      type: 'proscons',
      title: 'Comparing Fischer Increment vs. Bronstein Delay',
      items: [
        {
          pro: 'Fischer increments reward rapid execution by accumulating a time buffer for future turns.',
          con: 'Total game time can become longer if players consistently execute quick turns.',
        },
        {
          pro: 'Bronstein delay prevents losing time on quick administrative turns without accumulating massive reserves.',
          con: 'Requires configuring a delay threshold that matches the physical admin time of the game.',
        },
        {
          pro: 'Hourglass mode creates direct tension in competitive duels by actively draining your time to feed your opponent.',
          con: 'Becomes mathematically complex and less strategic in games with more than two players.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Common Tabletop Genres That Benefit From Turn Timers',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Strategic Eurogames',
          description: 'Worker placement and resource management games where turns can vary in complexity. Fischer increments help players manage critical endgame decisions without slowing down the initial rounds.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            'Mitigates analysis paralysis',
            'Variable turn complexity support',
            'Time becomes an active resource',
          ],
        },
        {
          title: 'Party & Trivia Games',
          description: 'High-energy games where quick thinking is part of the fun. Fixed turn reset clocks keep energy high and prevent a single player from halting the flow.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            'Short fixed countdowns',
            'Maintains party momentum',
            'Enforces immediate actions',
          ],
        },
        {
          title: 'Tournament Duel Play',
          description: 'Strict chess clock duels require precise, rotatable layouts to ensure competitive integrity and fair scheduling across multiple tournament rounds.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '180-degree display rotation',
            'Accurate 100ms interval tracking',
            'Sudden death/overtime states',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fischer Increment',
          definition: 'A time control method where a specified number of seconds is added to a player\'s remaining time after each turn is completed.',
        },
        {
          term: 'Bronstein Delay',
          definition: 'A time control method where the countdown is delayed for a set period at the start of a turn, preventing deduction if the turn is finished quickly.',
        },
        {
          term: 'Hourglass Mode',
          definition: 'A dynamic timing system where one player\'s ticking clock transfers its deducted time directly to the opponent\'s pool in real-time.',
        },
        {
          term: 'Analysis Paralysis',
          definition: 'A state of over-thinking where a player becomes overwhelmed by possibilities, stalling the game flow and impacting other players.',
        },
        {
          term: 'Game Analytics',
          definition: 'Post-game performance metrics summarizing total elapsed rounds, average thinking speed, maximum turn durations, and slowest turn rankings.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How does the Duel mode layout work?',
      answer: 'When starting a 2-player game, the interface displays a split-screen chess clock. Each side represents a player, and tapping their half ends their turn. Displays can be rotated by 180 degrees for players sitting opposite each other.',
    },
    {
      question: 'What is the difference between Fischer and Bronstein modes?',
      answer: 'Fischer mode adds extra seconds to a player\'s pool after ending their turn, allowing them to accumulate buffer time. Bronstein mode grants a delay at the start of each turn; if the turn finishes within the delay, no time is deducted.',
    },
    {
      question: 'Does the application track turn statistics?',
      answer: 'Yes! After a game finishes or a timer expires, the stats modal displays total game duration, total round counts, average turn time, maximum turn time, and ranks players by thinking speed.',
    },
    {
      question: 'Are my players saved when I refresh?',
      answer: 'Yes, the player configuration and color selections are automatically saved in local browser storage, restoring your players list when you return to the page.',
    },
    {
      question: 'Can I add or remove time during a live game?',
      answer: 'Yes! In multiplayer mode, player cards feature dedicated +30s and -30s action buttons to quickly adjust remaining time parameters on the fly.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configure Game Setup',
      text: 'Select a preset (Casual, Blitz, Strategic, Hourglass) or choose custom parameters: base duration, increment/delay, and warning limits.',
    },
    {
      name: 'Assemble and Persist Players',
      text: 'Input player names and select color identifiers. Reorder turn sequence using the arrow controls; details are saved automatically.',
    },
    {
      name: 'Launch and Pass Turns',
      text: 'Start the game. In Duel mode, tap your screen half to end a turn. In Multiplayer mode, click the giant central Next Turn button.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Board Game Timer & Turn Manager',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How does the Duel mode layout work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'When starting a 2-player game, the interface displays a split-screen chess clock. Each side represents a player, and tapping their half ends their turn. Displays can be rotated by 180 degrees for players sitting opposite each other.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between Fischer and Bronstein modes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Fischer mode adds extra seconds to a player\'s pool after ending their turn, allowing them to accumulate buffer time. Bronstein mode grants a delay at the start of each turn; if the turn finishes within the delay, no time is deducted.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does the application track turn statistics?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! After a game finishes or a timer expires, the stats modal displays total game duration, total round counts, average turn time, maximum turn time, and ranks players by thinking speed.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are my players saved when I refresh?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, the player configuration and color selections are automatically saved in local browser storage, restoring your players list when you return to the page.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I add or remove time during a live game?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! In multiplayer mode, player cards feature dedicated +30s and -30s action buttons to quickly adjust remaining time parameters on the fly.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Board Game Timer',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Configure Game Setup',
          'text': 'Select a preset (Casual, Blitz, Strategic, Hourglass) or choose custom parameters: base duration, increment/delay, and warning limits.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Assemble and Persist Players',
          'text': 'Input player names and select color identifiers. Reorder turn sequence using the arrow controls; details are saved automatically.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Launch and Pass Turns',
          'text': 'Start the game. In Duel mode, tap your screen half to end a turn. In Multiplayer mode, click the giant central Next Turn button.'
        }
      ]
    }
  ],
};

