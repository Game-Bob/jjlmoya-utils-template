import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: 'Set the party and the threat. The calculator weighs the encounter against the D&D 5e 2014 thresholds so you can spot the pressure before initiative starts.',
  partySection: 'The party',
  partyLevel: 'Character level',
  partyLevelHint: 'Use one level for a party with characters of similar level.',
  partySize: 'Characters',
  partySizeHint: 'The rules adjust the monster multiplier for very small or large groups.',
  threatSection: 'The threat',
  monsterCr: 'Monster challenge rating',
  monsterCrHint: 'Choose the CR of one repeated monster. Mixed groups need a separate calculation.',
  moreCr: 'Show higher CR',
  lessCr: 'Show fewer CR values',
  monsterCount: 'Number of monsters',
  monsterCountHint: 'More creatures increase the action pressure even when their total XP is modest.',
  presets: 'Start with a scene',
  presetClassic: 'Classic patrol',
  presetBoss: 'Boss alone',
  presetSwarm: 'Crowd of minions',
  resultSection: 'Encounter pressure',
  belowEasyHint: 'A light scene that may preserve resources for what comes next.',
  easyHint: 'A manageable scene with limited pressure on the party.',
  mediumHint: 'A meaningful test that may cost hit points or useful resources.',
  hardHint: 'A dangerous scene where tactics and resource choices matter.',
  deadlyHint: 'A lethal pressure signal. Check escape routes, terrain, and the cost of one bad round.',
  adjustedXp: 'Adjusted XP',
  baseXp: 'Base XP',
  multiplier: 'Group multiplier',
  partyThreshold: 'Medium threshold',
  belowEasy: 'Below easy',
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  deadly: 'Deadly',
  warning: 'Read this',
  partyAdjustment: 'The monster multiplier has been adjusted because the party has fewer than three or more than five characters.',
  highCr: 'A monster with a CR above the party level can drop a character quickly. Treat this label as a danger signal, not a prediction.',
  manyMonsters: 'Eleven or more monsters can make a fight much harder to run and can create swingy action economy.',
  rulesNote: 'This is an estimate for the D&D 5e 2014 encounter method. It does not account for terrain, tactics, spells, magic items, or player experience.',
  rulesLinkLabel: 'Read the source rules',
  reset: 'Reset to the sample',
  xpUnit: 'XP',
  sceneLabel: 'Encounter pressure visual',
  partyMarker: 'Party',
  threatMarker: 'Threat',
};

const faq = [
  {
    question: 'What rules does this encounter difficulty calculator use?',
    answer: 'It uses the D&D 5e 2014 method from the Basic Rules. It adds the party thresholds for easy, medium, hard, and deadly encounters, then compares them with the adjusted XP of the monsters.',
  },
  {
    question: 'Why is adjusted XP different from the XP awarded by a monster?',
    answer: 'The rules multiply the total monster XP to reflect the danger of several creatures acting in the same round. Adjusted XP is a comparison value for encounter difficulty, not the XP characters receive.',
  },
  {
    question: 'Can I use this for a mixed group of monsters?',
    answer: 'Use it as a quick estimate for repeated monsters. For a mixed group, add the XP of each creature and apply the multiplier to the total number of meaningful monsters. The calculator keeps one CR visible so the input stays fast and easy to read.',
  },
  {
    question: 'Does a deadly result mean the party will die?',
    answer: 'No. Deadly means the adjusted XP reaches the deadly threshold in this rules method. Terrain, tactics, rests, spells, magic items, monster abilities, and player decisions can change the actual result.',
  },
  {
    question: 'Why does party size change the multiplier?',
    answer: 'The Basic Rules recommend increasing the multiplier for parties of fewer than three characters and decreasing it for parties of six or more. This accounts for the different action economy of unusually small or large groups.',
  },
];

const howTo = [
  {
    name: 'Set the party level',
    text: 'Choose the level shared by most characters in the party. If levels vary widely, treat the result as a starting point and check the lowest level separately.',
  },
  {
    name: 'Set the group size',
    text: 'Choose the number of characters who will enter the encounter. Small and large parties receive a multiplier adjustment.',
  },
  {
    name: 'Describe the threat',
    text: 'Choose one monster challenge rating and the number of meaningful monsters. Use the scene presets when you want a fast baseline.',
  },
  {
    name: 'Read the pressure',
    text: 'Compare adjusted XP with the threshold bands. Use warnings as prompts to inspect high CR, action economy, terrain, and the resources available before the fight.',
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
  name: 'D&D 5e Encounter Difficulty Calculator',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: 'Estimate encounter difficulty for a D&D 5e 2014 party using character level, party size, monster challenge rating, monster count, XP, and official threshold bands.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to estimate D&D 5e encounter difficulty',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-encounter-difficulty-calculator',
  title: 'D&D 5e Encounter Difficulty Calculator',
  description: 'Estimate encounter pressure for D&D 5e 2014 using party level, group size, monster CR, monster count, adjusted XP, and official difficulty thresholds.',
  ui,
  seo: [
    { type: 'title', text: 'Read Encounter Difficulty Before Initiative Starts', level: 2 },
    { type: 'paragraph', html: 'A D&D encounter is more than the number printed beside a monster. This calculator turns party size, character level, challenge rating, and monster count into the adjusted XP value used by the D&D 5e 2014 encounter method. The visual result shows where the scene sits against the easy, medium, hard, and deadly thresholds.' },
    { type: 'title', text: 'How the D&D 5e Encounter Formula Works', level: 2 },
    { type: 'paragraph', html: 'The method first adds one XP threshold for every character at each difficulty band. It then adds the XP values of the monsters and applies a multiplier based on the number of meaningful creatures. Parties with fewer than three characters use the next higher multiplier, while parties of six or more use the next lower multiplier.' },
    {
      type: 'table',
      headers: ['Signal', 'What to inspect at the table'],
      rows: [
        ['Below easy', 'The encounter may be a warm up, a travel beat, or a resource saving scene.'],
        ['Easy', 'The party should usually win without spending many resources.'],
        ['Medium', 'Expect pressure and at least one meaningful choice about resources.'],
        ['Hard', 'Plan for characters to lose hit points, spell slots, or position.'],
        ['Deadly', 'Check tactics, terrain, escape routes, and the cost of one bad round.'],
      ],
    },
    { type: 'title', text: 'Why Monster Count Matters', level: 2 },
    { type: 'paragraph', html: 'Several monsters can create more danger than their base XP suggests because they bring more attacks, reactions, positions, and chances to focus fire. That is why a pair of creatures uses a higher multiplier than one creature with the same combined XP. The result is a warning light for action economy, not a promise about how the encounter will feel.' },
    { type: 'tip', title: 'Treat High CR as a Specific Danger Signal', html: 'A monster whose CR is above the party level may be able to remove a character with one strong action. Inspect its damage, control effects, saving throw difficulty, and mobility instead of relying on the final difficulty word alone.' },
    { type: 'title', text: 'Use the Result as a Preparation Prompt', level: 2 },
    { type: 'paragraph', html: 'Before using a hard or deadly encounter, look at the full situation. A cramped room, cover, surprise, environmental damage, concentration spells, legendary actions, and an exhausted party can all move the real danger away from the table value. A lower result can still become memorable when the objective, terrain, or time pressure creates a meaningful choice.' },
    { type: 'tip', title: 'Mixed Monster Groups Need a Wider Check', html: 'This quick calculator keeps one CR visible so the interface stays fast. For a mixed group, total the XP of every meaningful monster, apply the multiplier to that total, and compare the adjusted XP with the same party thresholds.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
