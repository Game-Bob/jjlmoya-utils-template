import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: 'Choose a seed, set the grid, and select an architectural language. Generate a connected map, then take it to your notes, print layout, or virtual tabletop.',
  seedLabel: 'Map seed',
  seedHint: 'Reuse a seed with the same settings to rebuild the exact map.',
  randomSeed: 'New seed',
  sizeLabel: 'Expedition size',
  sizeCompact: 'One Shot',
  sizeSession: 'Session',
  sizeStronghold: 'Stronghold',
  fineTuneGrid: 'Fine tune grid and density',
  columnsLabel: 'Columns',
  rowsLabel: 'Rows',
  densityLabel: 'Room density',
  densityHint: 'Higher density adds more chambers and usable floor.',
  styleLabel: 'Map architecture',
  dungeonStyle: 'Dungeon',
  dungeonStyleHint: 'Stone rooms with single width passages.',
  cavernStyle: 'Cavern',
  cavernStyleHint: 'Irregular chambers with softened edges.',
  scifiStyle: 'Sci Fi',
  scifiStyleHint: 'Wide modules with double width connectors.',
  generate: 'Draw this map',
  mapRegionLabel: 'Generated dungeon map and export controls',
  connectedBadge: 'All rooms connected',
  roomsLabel: 'Rooms',
  doorsLabel: 'Doors',
  floorLabel: 'Floor coverage',
  legendFloor: 'Walkable floor',
  legendWall: 'Solid wall',
  legendDoor: 'Door or bulkhead',
  editHint: 'Right click a cell to edit',
  editCell: 'Edit this cell',
  paintFloor: 'Floor',
  paintWall: 'Wall',
  paintDoor: 'Door',
  mapData: 'Map data',
  copyLink: 'Copy map link',
  linkCopied: 'Link copied',
  exportPng: 'Export PNG',
  exportSvg: 'Export SVG',
  exportPrint: 'Printable',
  exportJson: 'Save setup JSON',
  importJson: 'Open setup JSON',
  importError: 'This file does not contain a valid dungeon map setup.',
  compactMap: 'Tense exploration',
  balancedMap: 'Balanced expedition',
  sprawlingMap: 'Open stronghold',
  compactHint: 'Longer transitions leave more unknown space between rooms.',
  balancedHint: 'Rooms and passages share the plan without crowding each other.',
  sprawlingHint: 'Generous floor coverage favors encounters and rapid movement.',
  mapReady: 'Map tile legend',
  dimensionsUnit: 'grid cells',
};

const faq = [
  {
    question: 'Does the same seed always create the same dungeon map?',
    answer: 'Yes. The seed, grid dimensions, density, and architecture style form one deterministic setup. Reusing all four settings rebuilds the same rooms, corridors, and doors.',
  },
  {
    question: 'Are all generated rooms reachable?',
    answer: 'Yes. Rooms are connected in a spanning route after placement, so every walkable region belongs to one connected map. Doors mark the transition between rooms and corridors.',
  },
  {
    question: 'What changes between dungeon, cavern, and Sci Fi styles?',
    answer: 'Dungeon maps use regular stone rooms and narrow corridors. Caverns carve irregular rounded chambers. Sci Fi maps favor wider modules and double width connectors for bulkhead style layouts.',
  },
  {
    question: 'Which format should I export for a virtual tabletop?',
    answer: 'PNG is the simplest option for most virtual tabletops. SVG stays sharp at any scale and is easier to edit in vector software. Both exports preserve the square grid geometry.',
  },
  {
    question: 'Can another person regenerate my random dungeon map?',
    answer: 'Yes. Copy the map link to include the full setup in the URL, or send the JSON setup file. The recipient can load the same deterministic configuration without an account.',
  },
  {
    question: 'Does this generator add monsters, traps, or treasure?',
    answer: 'No. It creates a neutral architectural floor plan so you can stock it for any ruleset. Encounter design, secrets, hazards, and narrative meaning remain under the game master\'s control.',
  },
];

const howTo = [
  {
    name: 'Set the map footprint',
    text: 'Choose the number of columns and rows to match the space available in your notes, print page, or virtual tabletop scene.',
  },
  {
    name: 'Choose an architecture',
    text: 'Select dungeon, cavern, or Sci Fi, then adjust room density for a tighter or more open expedition.',
  },
  {
    name: 'Generate and inspect',
    text: 'Enter a memorable seed or request a new one, draw the map, and read the room, door, and floor coverage summary.',
  },
  {
    name: 'Export or share',
    text: 'Download PNG or SVG for play, or preserve the exact configuration through a map link or JSON setup file.',
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
  name: 'Dungeon Map Generator',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: 'A deterministic random dungeon map generator with connected rooms, corridors, doors, grid sizing, and local exports.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to generate a connected dungeon map',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'random-dungeon-map-generator',
  title: 'Random Dungeon Map Generator for Tabletop Games',
  description: 'Create reproducible dungeon, cavern, and Sci Fi maps with connected rooms, doors, grid controls, and PNG or SVG export.',
  ui,
  seo: [
    { type: 'title', text: 'Build a Playable Dungeon Map from a Reusable Seed', level: 2 },
    { type: 'paragraph', html: 'A useful random dungeon map needs more than visual noise. Every chamber must be reachable, the grid must fit the intended play surface, and the result must be recoverable when a session moves between devices. This generator treats the seed and controls as a compact map specification. Keep the same seed, columns, rows, density, and architecture to reproduce the exact plan later.' },
    { type: 'title', text: 'Choose Grid Dimensions for Print and Virtual Tabletops', level: 2 },
    { type: 'paragraph', html: 'Start with the destination. A smaller grid is easier to print and produces a focused delve, while a larger grid leaves room for exploration, encounter staging, and optional branches. The exported image preserves square cells, so you can align it with the grid controls in a virtual tabletop instead of stretching the map by eye.' },
    {
      type: 'table',
      headers: ['Grid size', 'Typical use', 'Density starting point', 'Planning note'],
      rows: [
        ['20 by 16', 'One shot location', '35 to 45', 'Fast to read and easy to print'],
        ['36 by 26', 'Session dungeon', '45 to 55', 'Balanced room and corridor rhythm'],
        ['52 by 38', 'Multi session complex', '50 to 65', 'More space for factions and optional routes'],
      ],
    },
    { type: 'tip', title: 'Match the Map to the Encounter Scale', html: 'Count the cells required by the largest planned encounter before choosing the full map size. A large dungeon with undersized rooms can still feel cramped, while a compact plan with one generous chamber may support a memorable set piece.' },
    { type: 'title', text: 'Read Floor Coverage as a Pacing Signal', level: 2 },
    { type: 'paragraph', html: 'Floor coverage describes how much of the rectangular canvas is walkable. Lower coverage emphasizes uncertain movement and separation between rooms. Midrange coverage supports a steady expedition rhythm. High coverage creates a stronghold or facility where encounters can spill across connected spaces. It is not a difficulty score; it is a prompt for how the location may feel at the table.' },
    {
      type: 'list',
      items: [
        '<strong>Tense exploration:</strong> use the empty space to imply depth, isolation, or concealed areas.',
        '<strong>Balanced expedition:</strong> alternate investigation rooms, connective passages, and encounter spaces.',
        '<strong>Open stronghold:</strong> prepare sight lines, patrol routes, and encounters that can attract nearby groups.',
      ],
    },
    { type: 'title', text: 'Turn a Neutral Layout into an Adventure Location', level: 2 },
    { type: 'paragraph', html: 'The generated plan intentionally stops at architecture. Assign a purpose to each major room, then place clues, hazards, creatures, and treasure according to that purpose. Use doors as decision points rather than decoration. A locked door can advertise value, a broken door can reveal prior violence, and an open bulkhead can connect two encounters into one larger problem.' },
    { type: 'tip', title: 'Preserve the Setup Before Stocking Rooms', html: 'Copy the map link or save the JSON setup before adding encounter notes. That gives the group a stable architectural reference and lets you regenerate a clean player version without exposing game master annotations.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
