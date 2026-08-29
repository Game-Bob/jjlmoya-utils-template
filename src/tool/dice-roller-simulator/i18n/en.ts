import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'dice-roller-simulator',
  title: 'Dice Roller & Probability Simulator',
  description: 'Roll virtual polyhedral dice (D4, D6, D8, D10, D12, D20, D100), add modifiers, and view live statistics and rolling probabilities for tabletop and board games.',
  ui: {
    title: 'Dice Roller & Probability Simulator',
    rollButton: 'Roll Dice',
    clearButton: 'Clear History',
    historyTitle: 'Roll History',
    noHistory: 'No rolls recorded yet. Add dice and click Roll to start.',
    totalRolls: 'Total Rolls',
    averageRoll: 'Average Result',
    lastRoll: 'Last Roll Total',
    modifierLabel: 'Modifier (+/-)',
    probabilityTitle: 'Probability Analysis',
    selectDice: 'Select Dice to Roll',
  },
  seo: [
    { type: 'title', text: 'Mastering Tabletop Odds: How Polyhedral Dice Probability Shapes Your Game', level: 2 },
    { type: 'paragraph', html: 'Polyhedral dice are the heart of tabletop roleplaying games and modern board games. Whether you are aiming for a high saving throw in Dungeons & Dragons or rolling for resource production, the outcome is governed by mathematical probability. Understanding how the combination of different dice types affects your odds is crucial for tactical decision-making during gameplay.' },
    {
      type: 'stats',
      items: [
        { value: '5.0%', label: 'Natural 20 Chance' },
        { value: '10.5', label: 'Average 3d6 Roll' },
        { value: '9.75%', label: 'Advantage Nat 20' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'The Math Behind Multiple Dice: Why 3d6 is Safer Than 1d20', level: 2 },
    { type: 'paragraph', html: 'When you roll a single D20, every outcome from 1 to 20 has an equal 5% chance of occurring, resulting in a flat probability distribution. However, when rolling multiple dice like 3d6, the results cluster around the average value of 10.5. This bell curve means you are far more likely to roll a moderate result than extreme values, providing consistency and reducing the swingy nature of single-die checks.' },
    { type: 'title', text: 'D20 Odds Explained: Critical Hits, Fumbles, and Modifier Impact', level: 2 },
    { type: 'paragraph', html: 'A simple modifier of plus two can dramatically swing the probability of success, transforming difficult tasks into manageable challenges. In many gaming systems, a natural 20 represents an automatic critical hit (a 5% chance), while a natural 1 is a critical fumble. Visualizing these outcomes helps demystify the randomness and lets you plan your tactical moves with statistical backing.' },
    {
      type: 'title',
      text: 'Standard Polyhedral Dice Reference Table',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Dice Type', 'Minimum Roll', 'Maximum Roll', 'Average Result', 'Primary Role in Tabletop RPGs'],
      rows: [
        ['D4', '1', '4', '2.5', 'Magic missiles, daggers, minor hazards'],
        ['D6', '1', '6', '3.5', 'Fireballs, standard swords, attribute checks'],
        ['D8', '1', '8', '4.5', 'Longswords, healing spells, medium weapons'],
        ['D10', '1', '10', '5.5', 'Halberds, cantrips, percentile tens'],
        ['D12', '1', '12', '6.5', 'Greataxes, barbarian hit points'],
        ['D20', '1', '20', '10.5', 'Saving throws, attack rolls, skill checks'],
        ['D100', '1', '100', '50.5', 'Percentile tables, wild magic surges'],
      ],
    },
    {
      type: 'tip',
      title: 'Calculating Average Dice Outcomes in Your Head',
      html: 'To find the average of any single die roll, add the minimum (1) and maximum values together, then divide by 2. For example, a D6 average is (1 + 6) / 2 = 3.5. For multiple dice, simply multiply the single average by the number of dice (e.g., 3d6 average is 3 * 3.5 = 10.5). Adding a flat modifier simply adds to this average (e.g., 3d6 + 4 averages 14.5).',
    },
    {
      type: 'title',
      text: 'Comparing Flat vs. Curved Dice Systems',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'D20 System vs. 3d6 Bell Curve System',
      items: [
        {
          pro: 'D20 systems are fast to calculate and have equal 5% odds for criticals and fumbles.',
          con: 'D20 results are highly swingy, making character skill feel less impactful than the roll.',
        },
        {
          pro: '3d6 bell curves prioritize average rolls, ensuring high-skill characters rarely fail simple tasks.',
          con: '3d6 systems require summing three dice and make critical hits (perfect 18s) extremely rare (0.46%).',
        },
      ],
    },
    {
      type: 'title',
      text: 'Understanding Probability Mechanics',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'D20 System (Linear)',
          description: 'Uses a single 20-sided die for actions, where every outcome has an equal 5% chance. Highly unpredictable and swingy, which builds dramatic tension but makes character skill less reliable.',
          icon: 'mdi:dice-d20',
          highlight: false,
          points: [
            'Flat 5% chance per outcome',
            'High variance and swing',
            'Modifiers increase success linearly',
          ],
        },
        {
          title: '3d6 System (Bell Curve)',
          description: 'Sums three 6-sided dice, creating a normal distribution centered at 10.5. Results are highly consistent, making extreme failure or success rare and favoring skilled characters.',
          icon: 'mdi:chart-bell-curve',
          highlight: true,
          points: [
            'Central results are highly likely',
            'Extreme rolls are extremely rare',
            'Modifiers have non-linear impact',
          ],
        },
        {
          title: 'Percentile System (Roll Under)',
          description: 'Uses two 10-sided dice to generate a number between 1 and 100. The goal is to roll under your character\'s rating, making success chances immediately transparent to players.',
          icon: 'mdi:percent-box-outline',
          highlight: false,
          points: [
            'Direct percentage success rate',
            'Easy to understand at a glance',
            'Skill progress is mathematically clear',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'The Gambler\'s Fallacy: Why Dice Have No Memory',
      icon: 'mdi:information-outline',
      badge: 'PROBABILITY TIP',
      html: 'A common pitfall in tabletop gaming is the belief that past rolls affect future outcomes. If you roll three "1"s in a row on a D20, you might feel that a high roll is "due." In reality, each roll is an independent event. The probability of rolling a 20 on the next roll remains exactly 5%. Knowing this helps players maintain objective tactical choices rather than relying on false luck patterns.',
    },
    {
      type: 'title',
      text: 'Tabletop Dice & Probability Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Advantage & Disadvantage',
          definition: 'A mechanic where a player rolls two D20s and takes either the higher result (Advantage) or the lower result (Disadvantage). Advantage shifts the average roll from 10.5 to 13.8.',
        },
        {
          term: 'Bell Curve (Normal Distribution)',
          definition: 'A probability distribution shaped like a bell, where results cluster around the central average. This occurs when summing multiple dice (like 3d6 or 2d10).',
        },
        {
          term: 'Critical Hit',
          definition: 'An automatic success, typically achieved by rolling the maximum number on a die (a natural 20 on a D20), which often triggers bonus damage or special effects.',
        },
        {
          term: 'Critical Fumble',
          definition: 'An automatic failure of catastrophic or humorous proportions, triggered by rolling the minimum value on a die (a natural 1 on a D20).',
        },
        {
          term: 'Expected Value',
          definition: 'The long-term average outcome of your rolls. For a single D6, the average result is 3.5; for a single D20, it is 10.5.',
        },
        {
          term: 'Percentile Dice',
          definition: 'A pair of D10s (one representing tens, one representing units) rolled together to produce a number from 1 to 100, common in systems like Call of Cthulhu.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How does the probability simulator work?',
      answer: 'It calculates the exact probability distribution for the chosen dice combination and modifier using combinations math, allowing you to see your odds of rolling above or below target values.',
    },
    {
      question: 'What dice are supported?',
      answer: 'Polyhedral dice commonly used in tabletop RPGs and board games, including D4, D6, D8, D10, D12, D20, and D100.',
    },
    {
      question: 'What are modifiers and how do they work?',
      answer: 'Modifiers are flat values (+1, -2, etc.) that you add to or subtract from your roll total to represent character skills, bonuses, or penalties.',
    },
    {
      question: 'What does rolling with Advantage or Disadvantage mean?',
      answer: 'Rolling with Advantage means rolling two D20 dice and taking the higher result. Rolling with Disadvantage means rolling two and taking the lower result. This is a common mechanic in tabletop RPGs to represent favorable or unfavorable conditions.',
    },
    {
      question: 'What are Critical Hits and Critical Fumbles?',
      answer: 'A Critical Hit happens when a die rolls its maximum value (like a natural 20 on a D20), usually resulting in automatic success or double damage. A Critical Fumble happens when a die rolls a 1, resulting in automatic and often chaotic failure.',
    },
    {
      question: 'How does the simulator calculate rolling probabilities?',
      answer: 'The simulator mathematically analyzes every possible outcome of your selected dice pool and modifier. It then presents a percentage breakdown showing how likely you are to roll each specific total, or how likely you are to roll above or below target values.',
    },
    {
      question: 'Why is a 3d6 roll more consistent than rolling a single D20?',
      answer: 'Rolling a single D20 gives every number an equal 5% chance. Rolling 3d6 creates a bell curve where results tend to cluster around the average of 10.5, making extremely high or low results rare and providing more consistent, reliable outcomes.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Add Dice',
      text: 'Click on the dice buttons to add them to your active dice pool.',
    },
    {
      name: 'Add Modifier',
      text: 'Enter a positive or negative modifier value to add to your total.',
    },
    {
      name: 'Roll and View Stats',
      text: 'Click the Roll button to see visual results, history, and probability analysis.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Dice Roller & Probability Simulator',
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
          'name': 'How does the probability simulator work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It calculates the exact probability distribution for the chosen dice combination and modifier using combinations math, allowing you to see your odds of rolling above or below target values.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What dice are supported?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Polyhedral dice commonly used in tabletop RPGs and board games, including D4, D6, D8, D10, D12, D20, and D100.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What are modifiers and how do they work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modifiers are flat values (+1, -2, etc.) that you add to or subtract from your roll total to represent character skills, bonuses, or penalties.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What does rolling with Advantage or Disadvantage mean?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rolling with Advantage means rolling two D20 dice and taking the higher result. Rolling with Disadvantage means rolling two and taking the lower result. This is a common mechanic in tabletop RPGs to represent favorable or unfavorable conditions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What are Critical Hits and Critical Fumbles?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A Critical Hit happens when a die rolls its maximum value (like a natural 20 on a D20), usually resulting in automatic success or double damage. A Critical Fumble happens when a die rolls a 1, resulting in automatic and often chaotic failure.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does the simulator calculate rolling probabilities?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The simulator mathematically analyzes every possible outcome of your selected dice pool and modifier. It then presents a percentage breakdown showing how likely you are to roll each specific total, or how likely you are to roll above or below target values.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why is a 3d6 roll more consistent than rolling a single D20?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rolling a single D20 gives every number an equal 5% chance. Rolling 3d6 creates a bell curve where results tend to cluster around the average of 10.5, making extremely high or low results rare and providing more consistent, reliable outcomes.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Dice Roller Simulator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Add Dice',
          'text': 'Click on the dice buttons to add them to your active dice pool.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Add Modifier',
          'text': 'Enter a positive or negative modifier value to add to your total.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Roll and View Stats',
          'text': 'Click the Roll button to see visual results, history, and probability analysis.'
        }
      ]
    }
  ],
};
