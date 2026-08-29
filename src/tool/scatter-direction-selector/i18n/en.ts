import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScatterSelectorUI } from '../entry';

const ui: ScatterSelectorUI = {
  title: 'Scatter Direction Selector',
  setupTitle: 'Scatter Settings',
  sectorsLabel: 'Compass Sectors',
  sectors8: '8 Directions',
  sectors12: '12 Directions (Clock)',
  diceLabel: 'Deviation Distance Roll',
  diceD6: '1D6 Inches',
  dice2D6: '2D6 Inches',
  diceD10: '1D10 Inches',
  diceCustom: 'Custom Range',
  customMaxLabel: 'Maximum Distance',
  hitChanceLabel: 'Direct Hit Probability (%)',
  rollButton: 'Roll Scatter',
  hitResult: 'Direct Hit!',
  scatterResult: 'Scatter!',
  distanceLabel: 'Distance',
  angleLabel: 'Angle',
  dragHint: 'Drag the compass to set wind direction manually',
  historyTitle: 'Recent Rolls',
  clearHistory: 'Clear History',
  presetTitle: 'Wargaming Presets',
  soundOn: 'Sound On',
  soundOff: 'Sound Off',
  guideStep1: 'Drag the compass to match your table orientation',
  guideStep2: 'Pick sectors, dice and direct hit chance',
  guideStep3: 'Center = your target. Green glow means it landed there exactly',
  guideStep3Scatter: 'Arrow = deviation direction. Move the shot from center that many inches along the arrow',
  scatterModeLabel: 'Scatter Direction',
  scatterModeRandom: 'Random',
  scatterModeWind: 'Wind Drift',
  scatterModeWindHint: 'Arrow always follows compass - only distance is random',
};

const faq = [
  {
    question: 'How does the Scatter Direction Selector work?',
    answer: 'It calculates a random angle (0-359 degrees) and distance based on selected dice configurations. It also simulates a scatter die, checking for direct hits.',
  },
  {
    question: 'Can I change the sector format?',
    answer: 'Yes, you can toggle between 8-direction cardinal sectors and 12-direction clock-face sectors.',
  },
  {
    question: 'What is the direct hit probability?',
    answer: 'It represents the chance that the projectile lands exactly where targeted without any deviation or scatter, simulating a "Hit" result on a standard scatter die.',
  },
  {
    question: 'Is this compatible with Warhammer or Bolt Action?',
    answer: 'Yes, it supports standard 8-direction templates and 12-direction clock alignments used in most tactical wargames and miniature rulesets.',
  },
  {
    question: 'What does the projectile trajectory animation show?',
    answer: 'A glowing projectile travels from the centre of the compass to the scatter landing point, leaving a dashed trail. On a direct hit, the projectile stays centred and expanding green rings pulse outward.',
  },
  {
    question: 'How is the scatter distance displayed visually?',
    answer: 'The distance in inches appears as a floating label at the impact point, positioned along the deviation direction. The red compass arrow also locks to the final angle for quick template alignment.',
  },
  {
    question: 'Can I disable the animation to get faster results?',
    answer: 'The animation lasts approximately two seconds, after which the final result is displayed in the centre and the compass arrow locks. There is currently no skip option, but the delay is designed to match the pace of rolling physical dice.',
  },
  {
    question: 'Does the Wind Drift mode affect the animation?',
    answer: 'Yes. In Wind Drift mode, the trajectory follows the compass angle you set manually instead of a random direction. The projectile animation always respects the selected mode, so you see the exact path your shot will take.',
  },
];

const howTo = [
  {
    name: 'Configure Rules',
    text: 'Select compass sectors, choose a distance dice preset, and adjust the direct hit chance.',
  },
  {
    name: 'Roll or Drag',
    text: 'Click Roll Scatter to simulate the deviation, or drag the compass wheel to adjust the direction manually.',
  },
  {
    name: 'Read Outcome',
    text: 'Check the central display and vector arrow to find the exact distance, angle, and direction of the scatter.',
  },
  {
    name: 'Watch the Trajectory',
    text: 'After rolling, observe the animated projectile travel across the compass. The dashed trail shows the deviation path, and the impact point displays the distance in inches.',
  },
  {
    name: 'Interpret the Result',
    text: 'A green pulse with "DIRECT HIT" means zero deviation. A red burst with a distance label means the shot scattered - place your template that many inches from the target in the arrow\'s direction.',
  },
];

export const content: ToolLocaleContent<ScatterSelectorUI> = {
  slug: 'scatter-direction-selector',
  title: 'Scatter Direction Selector: Tabletop Wargaming Compass',
  description: 'Determine random deviations, wind drift, and scatter directions for miniature wargames using a 3D tactile compass.',
  ui,
  seo: [
    { type: 'title', text: 'Interactive Scatter Compass with Real Time Projectile Animation', level: 2 },
    { type: 'paragraph', html: 'The Scatter Direction Selector goes beyond static number generation by rendering an animated projectile trajectory directly on the compass overlay. When you click Roll Scatter, a glowing projectile travels from the centre along the deviation angle, leaving a dashed trail and bursting into particles at the impact point. For direct hits, expanding green rings pulse outward while a "DIRECT HIT" label scales into view with a dramatic glow. This real-time visual feedback eliminates ambiguity, letting you see exactly where your shot lands and how far it deviates.' },
    { type: 'stats', items: [
      { value: '2', label: 'Sector Systems', icon: 'mdi:compass-rose' },
      { value: '4', label: 'Dice Presets', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: 'Hit Probability Range', icon: 'mdi:target' },
      { value: '10', label: 'Recent Roll History', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: 'How the Trajectory Animation Improves Wargame Decision Making', level: 3 },
    { type: 'paragraph', html: 'Traditional scatter tools display a numeric angle and distance, forcing players to mentally visualise the offset on the tabletop. The animated trajectory bridges this gap by drawing the exact flight path from the aim point to the scatter landing zone. The distance in inches appears as an overlay label at the impact location, while the compass arrow remains locked to the final deviation angle. This makes it instantly clear whether a shot clips a building corner, drifts into an allied unit, or lands in open ground - without reaching for a tape measure.' },
    { type: 'diagnostic', variant: 'success', title: 'Direct Hit', html: 'When the roll beats the hit probability, the compass centre erupts with pulsing green rings and a "DIRECT HIT" text animation. The projectile returns to centre, confirming a perfect impact with zero deviation.' },
    { type: 'diagnostic', variant: 'error', title: 'Scatter', html: 'On a scatter result, the projectile follows a dashed trajectory to its landing point. An impact burst of particles, a glowing marker, and the distance in inches (e.g. <strong>5"</strong>) appear at the landing site, while the red compass arrow shows the direction for easy template placement.' },
    { type: 'tip', title: 'Pro Tip: Using Wind Drift Mode', html: 'Toggle Wind Drift to lock the scatter direction to your manually rotated compass angle. This simulates a prevailing wind or a fixed displacement vector - ideal for unguided rockets, gas clouds, or teleportation mishaps where the drift direction is known but the distance remains random.' },
    { type: 'title', text: 'Resolving Scatter and Deviation Mechanics in Tabletop Wargames', level: 2 },
    { type: 'paragraph', html: 'Many tactical wargames and miniature combat rulesets incorporate deviation to simulate the unpredictable nature of artillery fire, wind drift, teleportation failures, or grenade bounces. The resolution usually requires rolling a direction-based scatter die combined with a distance roll (such as 2D6 or a D6). This digital assistant consolidates both rolls into an instantaneous, animated vector.' },
    {
      type: 'table',
      headers: ['Game Category', 'Typical Direction Format', 'Standard Distance Roll', 'Common Application'],
      rows: [
        ['Sci-Fi Skirmish', '8 Direction Radial', '2D6 Inches', 'Deep strike teleportation deviation'],
        ['Historical Wargames', '12 Direction Clock Face', '1D6 Inches', 'Off-board mortar and artillery scatter'],
        ['Fantasy Battle Games', '8 Direction Radial', '1D10 / 2D6 Inches', 'Catapult shots and magical vortex movement'],
        ['Post-Apocalyptic Survival', '8 Direction Cardinal', '1D6 Inches', 'Thrown grenade and gas cylinder drift'],
      ],
    },
    { type: 'title', text: 'Tactical Management of Wind and Drift Deviation', level: 2 },
    { type: 'paragraph', html: 'When deploying template weapons, players must account for deviation margins. By establishing a direct hit percentage, you determine the reliability of the firing unit. An experienced mortar crew may have a high hit probability, reducing scatter chance, whereas an unguided rocket pod might rely entirely on random dispersion. Adjusting these parameters on the fly speeds up measurement times and keeps the game flow continuous.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Radial 8 Direction System',
          description: 'Uses cardinal and ordinal headings (N, NE, E, SE, S, SW, W, NW) to resolve template offsets.',
          icon: 'mdi:compass-outline',
          highlight: true,
          points: [
            'Ideal for square and hexagonal grids',
            'Easy to align with standard battlefield edges',
            'Provides fast visual identification of quadrants',
          ],
        },
        {
          title: 'Clock Face 12 Direction System',
          description: 'Translates directions into clock hours (1 to 12), offering finer precision for micro-measurements.',
          icon: 'mdi:clock-outline',
          highlight: false,
          points: [
            'Standard for many historical rulesets',
            'Allows precise directional degrees',
            'Easy translation from table orientation',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Deviation Vector',
          definition: 'The combined angle and distance indicating the final position of a scattered template.',
        },
        {
          term: 'Direct Hit',
          definition: 'A roll outcome indicating the projectile hit the target target exactly, bypassing deviation.',
        },
        {
          term: 'Template Weapon',
          definition: 'An area-of-effect weapon that uses physical templates (like circles or tears) to determine hit units.',
        },
        {
          term: 'Wind Drift',
          definition: 'A static or variable modifier that shifts templates in a set direction regardless of the initial aim.',
        },
        {
          term: 'Projectile Trajectory',
          definition: 'The animated dashed line drawn from the compass centre to the scatter landing point, visualising the exact flight path of the deviation.',
        },
        {
          term: 'Impact Point',
          definition: 'The final position where the animated projectile lands, marked by a glowing particle burst and a distance-in-inches label.',
        },
        {
          term: 'Hit Probability',
          definition: 'A percentage configured before rolling that determines the likelihood of a Direct Hit. When the roll falls within this threshold, the projectile hits centre with zero scatter distance.',
        },
        {
          term: 'Compass Lock',
          definition: 'In Wind Drift mode, the scatter direction is locked to the user-rotated compass angle, overriding random direction generation.',
        },
      ],
    },
  ],
  faq,
  bibliography,
  howTo,
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
      'name': 'Scatter Direction Selector',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to use the Scatter Direction Selector',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
