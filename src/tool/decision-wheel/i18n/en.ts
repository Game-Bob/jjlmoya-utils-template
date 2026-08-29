import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: 'Decision Wheel Spinner',
  description: 'Spin a customizable decision wheel for tabletop games. Add, remove, and edit segments to randomly determine outcomes.',
  ui: {
    title: 'Decision Wheel Spinner',
    spinButton: 'Spin the Wheel',
    clearHistory: 'Clear History',
    resultHeading: 'Result',
    historyTitle: 'Spin History',
    noHistory: 'No spins yet. Click Spin the Wheel to start.',
    addSegmentLabel: 'Add Segment',
    removeSegmentLabel: 'Remove',
    segmentLabelPlaceholder: 'Label',
    presetLabel: 'Presets',
    presetYesNo: 'Yes / No',
    presetNumbers: 'Numbers 1-6',
    presetActions: 'Actions',
    presetCustom: 'Custom',
    presetD20: 'D20',
    presetAlignment: 'Alignment',
    presetLoot: 'Loot Rarity',
    weightLabel: 'Weight',
    spinAgain: 'Spin Again',
    noSegments: 'Add segments to the wheel before spinning.',
  },
  seo: [
    { type: 'title', text: 'Decision Wheel Spinner for Tabletop Games and Group Activities', level: 2 },
    { type: 'paragraph', html: 'The Decision Wheel Spinner is a versatile tool for tabletop games and group activities. Customize the wheel segments with your own labels and colors, then spin to randomly select an outcome. The wheel features realistic deceleration animation and a visual result display with emphasis effects.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: 'Max Segments' },
        { value: '4', label: 'Preset Modes' },
        { value: '10', label: 'History Entries' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'How to Use the Decision Wheel', level: 2 },
    { type: 'paragraph', html: 'The Decision Wheel makes it easy to randomly pick from a set of options. Choose a preset or create your own segments, then spin the wheel. The canvas-based wheel animates with realistic deceleration, and when it stops the winning segment is highlighted with a glow effect. A spin history keeps track of recent results.' },
    { type: 'title', text: 'Customizing Wheel Segments', level: 3 },
    { type: 'paragraph', html: 'You can add, remove, and edit segment labels to match your game or activity needs. Each segment can have its own color, making it easy to distinguish between different options at a glance. Use the preset buttons to quickly load common configurations like Yes/No, Numbers 1-6, or Action sets.' },
    {
      type: 'table',
      headers: ['Preset', 'Segments', 'Use Case'],
      rows: [
        ['Yes / No', '2', 'Binary decisions, votes, pass/fail'],
        ['Numbers 1-6', '6', 'Dice alternatives, random selection'],
        ['Actions', '5', 'Combat actions, exploration choices'],
        ['Custom', '3+', 'Fully customizable for any need'],
      ],
    },
    {
      type: 'proscons',
      title: 'Fixed Wheel vs Custom Segments',
      items: [
        {
          pro: 'Presets load instantly with predefined colors and labels for common scenarios.',
          con: 'Fixed presets may not cover niche or game-specific decision types.',
        },
        {
          pro: 'Custom segments let you define any set of outcomes with personalized labels and colors.',
          con: 'Custom setup requires a moment of configuration before the first spin.',
        },
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Quick Binary Decisions',
          description: 'Use the Yes/No preset for quick binary decisions during gameplay, such as flanking success, random encounters, or vote outcomes.',
          icon: 'mdi:slot-machine-outline',
          highlight: false,
          points: [
            'Instant preset loading',
            'Clear visual result',
            'Suitable for any game',
          ],
        },
        {
          title: 'Game Action Selection',
          description: 'The Actions preset provides a set of common tabletop game actions that can be randomized for NPC behavior or event outcomes.',
          icon: 'mdi:sword',
          highlight: true,
          points: [
            'Predefined action labels',
            'Color-coded segments',
            'Expandable with custom options',
          ],
        },
        {
          title: 'Custom Voting and Polls',
          description: 'Create custom sets of options for group voting, random prize draws, or choosing between multiple paths in a story-driven game.',
          icon: 'mdi:format-list-bulleted',
          highlight: false,
          points: [
            'Fully customizable labels',
            'Adjustable segment count',
            'Per-segment color control',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Visual Feedback and Animation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When the wheel spins, it uses a realistic cubic ease-out deceleration animation that mimics a physical spinning wheel. Multiple full rotations ensure true randomness is visually apparent. When the wheel stops, the winning segment is highlighted with a scale and glow emphasis effect, making the result immediately clear to all players.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ease-Out Cubic',
          definition: 'An animation curve where the wheel starts fast and gradually decelerates to a stop, mimicking real-world friction.',
        },
        {
          term: 'Segment',
          definition: 'A slice of the wheel representing one possible outcome, defined by a label and a color.',
        },
        {
          term: 'Preset',
          definition: 'A preconfigured set of segments for common scenarios like binary decisions, number ranges, or action sets.',
        },
        {
          term: 'Spin History',
          definition: 'A log of recent spin results showing the last 10 outcomes for reference during gameplay.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How does the Decision Wheel work?',
      answer: 'Select or create your segments, then click Spin the Wheel. The wheel animates with deceleration and stops on a random segment, which is highlighted as the result.',
    },
    {
      question: 'Can I add my own segments?',
      answer: 'Yes, click Add Segment to create new options and edit the labels to match your needs. Each segment can also have its own color.',
    },
    {
      question: 'What presets are available?',
      answer: 'The tool includes Yes/No, Numbers 1-6, Actions, and Custom presets. Custom preset starts with three editable options.',
    },
    {
      question: 'How many segments can I have?',
      answer: 'You can add up to 16 segments. A minimum of 2 segments is required for the wheel to function.',
    },
    {
      question: 'Is there a spin history?',
      answer: 'Yes, the tool keeps a history of the last 10 spins, showing the selected segment for each spin.',
    },
    {
      question: 'What is the emphasis effect?',
      answer: 'When the wheel stops, the result display pulses with a glow and scale animation to draw attention to the selected outcome.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Choose or Create Segments',
      text: 'Select a preset or add custom segments with your own labels and colors.',
    },
    {
      name: 'Spin the Wheel',
      text: 'Click the spin button to start the wheel animation with realistic deceleration.',
    },
    {
      name: 'View Result and History',
      text: 'The winning segment is displayed with emphasis. Check the history for recent spins.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Decision Wheel Spinner',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How does the Decision Wheel work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Select or create your segments, then click Spin the Wheel. The wheel animates with deceleration and stops on a random segment, which is highlighted as the result.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I add my own segments?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, click Add Segment to create new options and edit the labels to match your needs.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What presets are available?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The tool includes Yes/No, Numbers 1-6, Actions, and Custom presets.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Is there a spin history?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, the tool keeps a history of the last 10 spins.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Choose or Create Segments',
          'text': 'Select a preset or add custom segments with your own labels and colors.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Spin the Wheel',
          'text': 'Click the spin button to start the wheel animation with realistic deceleration.',
        },
        {
          '@type': 'HowToStep',
          'name': 'View Result and History',
          'text': 'The winning segment is displayed with emphasis. Check the history for recent spins.',
        },
      ],
    },
  ],
};
