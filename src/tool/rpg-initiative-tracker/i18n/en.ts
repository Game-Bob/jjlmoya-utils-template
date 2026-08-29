import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InitiativeTrackerUI } from '../entry';

const ui: InitiativeTrackerUI = {
  title: 'Initiative Tracker',
  addCombatant: 'Add Combatant',
  removeCombatant: 'Remove',
  playerLabel: 'Player',
  npcLabel: 'NPC',
  initiativeLabel: 'Initiative',
  modifierLabel: 'Modifier',
  namePlaceholder: 'Character name',
  initiativePlaceholder: 'Initiative',
  modifierPlaceholder: 'Modifier',
  addButton: 'Add',
  startCombat: 'Start Combat',
  endCombat: 'End Combat',
  nextTurn: 'Next Turn',
  prevTurn: 'Previous Turn',
  roundLabel: 'Round',
  turnLabel: 'Turn',
  noCombatants: 'No combatants yet. Add characters to begin.',
  statusInput: 'Status',
  combatStarted: 'Combat Started!',
  combatEnded: 'Combat Ended',
  yourTurn: 'Turn',
};

export const content: ToolLocaleContent<InitiativeTrackerUI> = {
  slug: 'rpg-initiative-tracker',
  title: 'RPG Initiative Tracker: Combat Turn Order & Initiative Manager',
  description: 'Track initiative order for any tabletop RPG. Add combatants, roll initiative, manage status effects, and navigate turns in combat.',
  ui,
  seo: [
    { type: 'title', text: 'How Initiative Works in D&D and Other Tabletop RPGs', level: 2 },
    { type: 'paragraph', html: 'Initiative determines the order of actions in combat. Every participant rolls a Dexterity check at the start of a fight, and the turn order goes from highest to lowest. A digital initiative tracker automates sorting, highlights the active combatant, tracks ongoing status effects, and keeps the entire table informed about whose turn is next. This is especially useful for Dungeon Masters running complex encounters with multiple enemy types and player characters.' },
    {
      type: 'stats',
      items: [
        { value: 'Unlimited', label: 'Combatants Supported' },
        { value: 'Auto Sort', label: 'By Initiative Roll' },
        { value: 'Real Time', label: 'Turn Tracking' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Standard Initiative Rules for D&D 5e', level: 2 },
    { type: 'paragraph', html: 'In D&D 5th Edition, each participant rolls a Dexterity check at the start of combat. Players roll individually. The Dungeon Master rolls once for each group of identical monsters. The turn order cycles from highest to lowest, then wraps back to the top for the next round. Ties are broken by Dexterity score, or the DM decides. A digital tracker handles all this automatically and shows the complete turn order at a glance.' },
    {
      type: 'table',
      headers: ['Feature', 'Manual Tracking', 'Digital Tracker'],
      rows: [
        ['Sorting', 'Rewrite the list when initiatives change', 'Instant automatic reorder'],
        ['Current Turn', 'Must track verbally or with a token', 'Highlighted with green glow'],
        ['Status Effects', 'Separate notepad or dice near the mini', 'Click to toggle on each combatant'],
        ['Round Counting', 'Keep count in your head or on scratch paper', 'Shown automatically'],
        ['Adding Mid Combat', 'Erase and rewrite the order', 'Inserted at the correct position'],
      ],
    },
    {
      type: 'tip',
      title: 'Tips for Running Initiative at the Table',
      html: 'Roll initiative for all monsters before the session starts to save time during combat. Add common status effects like Stunned or Poisoned to a combatant as soon as they are applied. This prevents forgetting about a condition when the affected character turn comes around. Use the Previous Turn button to review what happened if you need to check a ruling from earlier in the round.',
    },
    {
      type: 'title',
      text: 'Status Effects Commonly Used in Combat',
      level: 3,
    },
    { type: 'paragraph', html: 'Tracking conditions during combat is one of the most frequently overlooked tasks. A status effect can completely change a character effectiveness, and forgetting to remove it can swing the balance of an encounter. The initiative tracker lets you apply and remove conditions with a single click so they stay visible next to the combatant name.' },
    {
      type: 'proscons',
      title: 'Handling Status Effects Digitally vs Manually',
      items: [
        {
          pro: 'Conditions are visible right next to the character name so nobody forgets an active effect.',
          con: 'Requires remembering to toggle statuses on and off as they are applied and removed.',
        },
        {
          pro: 'Multiple statuses can be active on the same combatant and are all shown together.',
          con: 'The tracker does not enforce the rules effects automatically, the DM still applies them.',
        },
        {
          pro: 'Statuses can be added mid combat without pausing to write on a character sheet.',
          con: 'Only predefined status tags are available by default.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alternative Initiative Systems',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standard Initiative',
          description: 'Each combatant rolls once at the start. The same order repeats each round. Simple and predictable, but the order is fixed after the first roll. Works well for most groups and encounter sizes.',
          icon: 'mdi:swap-vertical',
          highlight: true,
          points: ['Simple to learn and teach', 'Fixed turn order each round', 'Works for any group size'],
        },
        {
          title: 'Side Initiative',
          description: 'All player characters act together, then all enemies act together. Common in older editions and OSR games. Speeds up combat by reducing individual tracking but reduces tactical nuance.',
          icon: 'mdi:account-group',
          highlight: false,
          points: ['Fastest combat resolution', 'Encourages party coordination', 'Less individual turn variety'],
        },
        {
          title: 'Speed Factor Variant',
          description: 'Each round participants declare actions first, then roll initiative modified by their chosen action. Used in optional rulesets. Creates unpredictable turn order but adds depth to decision making.',
          icon: 'mdi:run-fast',
          highlight: false,
          points: ['Different order every round', 'Action choice affects timing', 'More tactical decisions per turn'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Combat Tracker Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Initiative',
          definition: 'A Dexterity check rolled at the start of combat to determine the sequence of turns. Each participant rolls and acts in descending order.',
        },
        {
          term: 'Round',
          definition: 'A complete cycle where every combatant takes one turn. After the last combatant acts, the round ends and a new round begins from the top of the order.',
        },
        {
          term: 'Status Effect',
          definition: 'A temporary condition that modifies a character capabilities. Examples include Stunned (cannot act), Poisoned (disadvantage on rolls), and Blinded (attacks have disadvantage).',
        },
        {
          term: 'NPC',
          definition: 'Non Player Character controlled by the Dungeon Master. In initiative tracking, NPCs are typically enemies or neutral creatures in the encounter.',
        },
        {
          term: 'PC',
          definition: 'Player Character controlled by one of the players at the table. PCs are distinct from NPCs in the tracker to help the DM identify friendly targets.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'When to Reroll Initiative Each Round',
      icon: 'mdi:information-outline',
      badge: 'DM TIP',
      html: 'Some DMs prefer rerolling initiative each round for unpredictability, while most keep the same order for simplicity. If a new combatant joins mid fight, roll their initiative and insert them into the current position. The tracker handles this automatically. For boss encounters, consider giving the villain a fixed initiative at a specific count to make the fight feel more structured.',
    },
  ],
  faq: [
    {
      question: 'How do I add combatants to the initiative order?',
      answer: 'Enter the character name, initiative roll, and initiative modifier, then click Add. Toggle between Player and NPC types to visually distinguish party members from enemies in the list.',
    },
    {
      question: 'What happens when I click Start Combat?',
      answer: 'All combatants are sorted by initiative from highest to lowest. The turn order begins at the top, the round counter starts at 1, and the active combatant is highlighted with a green glow.',
    },
    {
      question: 'How do I track status effects during combat?',
      answer: 'Click a status tag (Stunned, Poisoned, Blinded, etc.) to toggle it on or off for the selected combatant. Active statuses appear next to the character name. This reminds everyone of ongoing effects when that combatant turn comes up.',
    },
    {
      question: 'Does my combat data persist if I refresh the page?',
      answer: 'Yes. The initiative tracker saves the combat state to your browser local storage. Your combatants, turn order, and status effects remain after a page reload. Data is cleared when you click End Combat.',
    },
    {
      question: 'Can I go back to the previous turn?',
      answer: 'Yes. The Previous Turn button lets you navigate backward through the turn order. This is useful for reviewing what happened earlier in the round or correcting a mistake.',
    },
    {
      question: 'Can I add or remove combatants during combat?',
      answer: 'Yes. New combatants can be added at any time and are automatically inserted into the correct position based on their initiative roll. Existing combatants can be removed if they leave the encounter.',
    },
    {
      question: 'Does this work with any RPG system?',
      answer: 'Yes. The tracker works with any tabletop RPG that uses initiative based turn order. Enter whatever initiative values your system uses whether it is a d20 roll plus Dex for D&D or a different mechanic for other games.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Add Combatants Before Combat',
      text: 'Enter each character name, their initiative roll, and modifier. Mark them as Player or NPC. Add as many combatants as your encounter needs.',
    },
    {
      name: 'Start Combat to Lock the Order',
      text: 'Click Start Combat to sort everyone by initiative and begin tracking turns. The first combatant in the order is highlighted.',
    },
    {
      name: 'Navigate Turns and Track Conditions',
      text: 'Use Next Turn and Previous Turn to move through the order. Apply status effects by clicking the status tags to track conditions during the fight.',
    },
    {
      name: 'End Combat When Finished',
      text: 'Click End Combat to stop turn tracking. This clears the active state and resets the round counter while keeping the combatant list for the next encounter.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'RPG Initiative Tracker',
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
          'name': 'How do I add combatants?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Enter the character name, initiative roll, and initiative modifier, then click Add. Players and NPCs can be toggled to help distinguish them in the list.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What happens when I click Start Combat?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'All combatants are sorted by initiative (highest first). The turn order begins with the first combatant and a round counter starts at 1.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Initiative Tracker',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Add Combatants',
          'text': 'Enter character details including name, initiative roll, and modifier. Toggle between Player and NPC types before adding.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Start Combat',
          'text': 'Click Start Combat to sort all combatants by initiative and begin turn order tracking.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Manage Turns',
          'text': 'Use Next Turn and Previous Turn to navigate the turn order. The active combatant is highlighted with a green glow.',
        },
      ],
    },
  ],
};
