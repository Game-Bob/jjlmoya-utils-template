import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FirstPlayerSelectorUI } from '../entry';

const ui: FirstPlayerSelectorUI = {
  title: 'First Player Selector',
  instructions: 'Place your fingers on the screen or click to add pins',
  tapToSelect: 'Tap to Select',
  winner: 'Winner chosen!',
  reset: 'Reset',
  start: 'Start Choice',
  setupTitle: 'Selector Settings',
  clearPlayers: 'Clear All Pins',
  fingerMode: 'Finger Mode',
  wheelMode: 'Roulette Mode',
  presetsTitle: 'Options',
  soundOn: 'Sound On',
  soundOff: 'Sound Off',
  playerCountLabel: 'Pins / Fingers',
};

const faq = [
  {
    question: 'How does Finger Mode work?',
    answer: 'In Finger Mode, each player places a finger on the mobile screen. The tool detects all touch points, displays glowing colored rings around them, and automatically starts a short countdown. Once the countdown ends, one player is highlighted as the winner while others fade out, accompanied by an explosion of particles.',
  },
  {
    question: 'Can I use this tool on a desktop computer?',
    answer: 'Yes! If you are on a non-touch device, the tool automatically defaults to Roulette Mode. You can click on the canvas to place colored pins representing players, then click the Start Choice button to spin the selector wheel.',
  },
  {
    question: 'How many players can participate?',
    answer: 'The tool supports up to 10 simultaneous players. In Finger Mode, up to 10 fingers can be detected at once. In Roulette Mode, you can place up to 10 colored pins on the canvas by clicking.',
  },
  {
    question: 'Is the selection truly random?',
    answer: 'Yes. The selection algorithm uses JavaScript\'s cryptographic-grade Math.random() to ensure unbiased results. In Finger Mode, the winner is chosen uniformly at random among all detected touch points. In Roulette Mode, the wheel decelerates realistically using friction physics, and the final angle determines the winner mathematically.',
  },
  {
    question: 'How do I remove a player pin in Roulette Mode?',
    answer: 'Simply click on an existing pin to remove it. The tool detects clicks within 30 pixels of any placed pin and deletes it, allowing you to adjust the player lineup before triggering the spin.',
  },
  {
    question: 'Does this tool collect or transmit any data?',
    answer: 'Not at all. Everything runs locally in your browser. No finger data, touch positions, or selection results are ever sent to any server. Your game night stays completely private.',
  },
  {
    question: 'Does it work on projectors or external screens?',
    answer: 'Yes. Roulette Mode works great on large screens and projectors for tabletop sessions. The high-contrast neon visuals and big countdown timer are designed to be visible from across the room.',
  },
  {
    question: 'Why does the countdown reset when someone lifts their finger?',
    answer: 'This is intentional. In Finger Mode, the countdown only proceeds while all players keep their fingers steady on the screen. If anyone lifts or shifts, the timer resets to ensure everyone is committed before the selection runs. This prevents accidental triggers.',
  },
  {
    question: 'Can I change the sound or mute it?',
    answer: 'Yes. Click the speaker icon in the top-right corner to toggle sound on or off. The tool plays a tick sound during countdown and a fanfare when a winner is chosen.',
  },
  {
    question: 'What happens if there is only one player?',
    answer: 'In both modes, at least two players are required to make a selection. In Finger Mode, the countdown will not start until at least two fingers are detected. In Roulette Mode, the Start Choice button remains disabled until you place at least two pins.',
  },
];

const howTo = [
  {
    name: 'Place Fingers or Pins',
    text: 'In Finger Mode, have all players place one finger on the screen. In Roulette Mode, click anywhere on the canvas to place player pins.',
  },
  {
    name: 'Trigger Selection',
    text: 'For Finger Mode, the selection starts automatically after holding for a few seconds. For Roulette Mode, click the Start Choice button to spin.',
  },
  {
    name: 'See the Winner',
    text: 'The winner is highlighted with a pulse effect, particle burst, and sound fanfare. Click Reset or lift all fingers to try again.',
  },
];

export const content: ToolLocaleContent<FirstPlayerSelectorUI> = {
  slug: 'first-player-selector',
  title: 'First Player Selector: Finger Chooser & Turn Roulette',
  description: 'Choose who goes first in your board games with this spectacular finger chooser and interactive turn roulette.',
  ui,
  seo: [
    { type: 'title', text: 'Fairness and Strategy: Resolving the First-Player Advantage in Board Games', level: 2 },
    { type: 'paragraph', html: 'Determining the starting player in tabletop sessions can heavily influence game dynamics. In game theory, the First-Player Advantage (FPA) refers to the statistical edge that the player taking the first turn has over their opponents. In strategic chess matches, wargames, and modern Eurogames like Agricola or Puerto Rico, taking the first action allows a player to secure critical resources or position pieces before opponents can react. To mitigate FPA and guarantee a balanced playing field, a reliable, unbiased selection method is essential. Our digital starting player selector guarantees absolute randomness, allowing gaming groups to establish turn order instantly and get straight to playing.' },
    {
      type: 'stats',
      items: [
        { value: '100% Random', label: 'Unbiased Selection' },
        { value: '2 Seconds', label: 'Countdown Trigger' },
        { value: 'Touch', label: 'Mobile Compatible' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Tabletop Rules vs. Digital Randomizers: The Touch Revolution', level: 2 },
    { type: 'paragraph', html: 'Many modern board game rulebooks include thematic starting player rules, such as "the youngest player goes first," "the last person to visit a farm goes first," or "the tallest player goes first." While amusing during initial games, these rules quickly become repetitive, static, and unfair for regular playgroups. Physical randomizers like roll-offs or card draws add setup time and are prone to human bias or poor shuffling. The finger-chooser mechanic solves this by offering a fast, touch-and-hold randomizer that selects a starting player in seconds without requiring extra cards or dice.' },
    {
      type: 'table',
      headers: ['Selection Method', 'Speed and Setup', 'Randomness Quality', 'Best Suited For'],
      rows: [
        ['Arbitrary Rulebook Rules', 'Instant, but repetitive', 'Zero randomness after the first game', 'Family games and party games'],
        ['Dice Roll-Offs', 'Requires finding and rolling dice, prone to ties', 'High randomness, but tedious for large groups', 'Wargames and RPGs'],
        ['Card Drawing', 'Requires shuffling and dealing', 'Good randomness, but requires physical cards', 'Deck-builders and card games'],
        ['Touch Finger Selector', 'Instant, zero setup, visual animations', 'Absolute algorithmic randomness', 'All tabletop and board games'],
      ],
    },
    {
      type: 'tip',
      title: 'Optimizing Your Touch Chooser Setup',
      html: 'For the best experience in Finger Mode, place your tablet or smartphone flat in the center of the table. Have all players place a single finger clearly on the canvas. The countdown resets if a player lifts or shifts their finger, preventing accidental trigger selections and ensuring absolute consensus before the picker runs.',
    },
    {
      type: 'title',
      text: 'Choosing Your Tool: Touch Finger Chooser vs. Spin Roulette',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Depending on your hardware setup and environment, you can toggle between two distinct layout modes designed to maximize screen real estate and accessibility:' },
    {
      type: 'proscons',
      title: 'Comparing Selection Modes',
      items: [
        {
          pro: 'Finger Mode offers an incredibly fast and tactile experience, allowing up to 10 players to place fingers simultaneously.',
          con: 'Requires a touch-capable screen like a smartphone or tablet.',
        },
        {
          pro: 'Roulette Mode operates on any laptop, desktop, or projector screen, making it ideal for virtual sessions and remote game nights.',
          con: 'Requires clicking to manually place pins before triggering the spin.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Visual Optimization: Touch Webs vs. Decelerating Wheels',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Touch Chooser',
          description: 'Tracks multiple distinct touch points on screen. Draws neon connection webs and shrinking countdown rings around each finger, culminating in a celebration burst.',
          icon: 'mdi:gesture-double-tap',
          highlight: true,
          points: [
            'Simultaneous touch tracking',
            'Tactile hold-and-release checks',
            'Spectacular particle explosions',
          ],
        },
        {
          title: 'Spin Roulette Wheel',
          description: 'Plots colored player pins around a mathematical centroid. Spins a colored sector wheel that slows down naturally using simulated friction before designating the winner.',
          icon: 'mdi:compass-outline',
          highlight: false,
          points: [
            'Centroid-based alignment',
            'Friction-based slowdown physics',
            'Universal desktop mouse support',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'First-Player Advantage (FPA)',
          definition: 'A turn-order bias in board games where the starting player gains a statistically significant edge in action-selection or resource control.',
        },
        {
          term: 'Touch Selection Protocol',
          definition: 'A touch-and-hold interaction where all participants place their fingers on a touch screen until a single winner is randomly highlighted.',
        },
        {
          term: 'Deceleration Physics',
          definition: 'A mathematical animation routine that applies friction multipliers to a spinning wheel to simulate natural inertia and build anticipation.',
        },
        {
          term: 'Centroid Calculation',
          definition: 'The computed center point of a scattered set of coordinate pins, used as the rotation pivot for the roulette wheel graphics.',
        },
      ],
    },
  ],
  faq: faq,
  bibliography,
  howTo: howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'First Player Selector & Finger Chooser',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the First Player Selector',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
