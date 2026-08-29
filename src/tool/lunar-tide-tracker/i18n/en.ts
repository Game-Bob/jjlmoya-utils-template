import { bibliography } from '../bibliography';
import type { LunarTideLocaleContent } from '../entry';

export const content: LunarTideLocaleContent = {
  slug: 'lunar-tide-tracker',
  title: 'Moon Phase Calculator for Tabletop RPG: Track Custom Fantasy Moons and Tidal Cycles',
  description: 'Calculate moon phases for any fantasy world with custom orbital periods. Track multiple moons at once, see 10-day forecasts, and get a combined tide level for magic and weather systems in D&D, Pathfinder, or any RPG.',
  ui: {
    title: 'Lunar Phase & Mystic Tide Tracker',
    moonsTitle: 'Moons configuration',
    addMoon: 'Add Custom Moon',
    removeMoon: 'Remove Moon',
    moonName: 'Moon Name',
    orbitalPeriod: 'Orbital Period (Days)',
    startingOffset: 'Starting Offset (Days)',
    timelineTitle: 'Time controls',
    currentDay: 'Current Campaign Day',
    tideTitle: 'Mystic Tide Status',
    tideLevel: 'Tide Energy Level',
    magicModifier: 'Magic Tide Effect',
    forecastTitle: 'Lunar Phase & Tide Forecast',
    dayLabel: 'Day',
    resetButton: 'Reset to Day 0',
    presetTitle: 'Campaign Presets',
    presetSingle: 'Classic Moon',
    presetDouble: 'Twin moons of Magic',
    presetTriple: 'Triple Eclipse Realm',
    newMoon: 'New Moon',
    waxingCrescent: 'Waxing Crescent',
    firstQuarter: 'First Quarter',
    waxingGibbous: 'Waxing Gibbous',
    fullMoon: 'Full Moon',
    waningGibbous: 'Waning Gibbous',
    lastQuarter: 'Last Quarter',
    waningCrescent: 'Waning Crescent',
  },
  seo: [
    { type: 'title', text: 'How to Track Moon Phases in a Fantasy RPG Campaign', level: 2 },
    { type: 'paragraph', html: 'Most fantasy settings have moons with orbital periods that differ from the real-world 29.5-day lunar cycle. The <strong>Orbital Period</strong> field sets how many in-game days it takes a moon to complete one full cycle. The Earth moon takes 29 days; the Eberron setting uses 28; Tolkien\'s Middle-earth has a moon cycle close to 30. Set this to whatever your world\'s lore specifies, or pick any number between 5 and 60 days that produces the eclipse frequency you want.' },
    {
      type: 'stats',
      items: [
        { value: '3', label: 'Moons tracked at once' },
        { value: '10', label: 'Day forecast range' },
        { value: '5', label: 'Tide states (Neap to Spring)' }
      ],
      columns: 3
    },
    { type: 'title', text: 'Understanding the Starting Offset Field', level: 2 },
    { type: 'paragraph', html: 'The <strong>Starting Offset</strong> shifts where a moon is in its cycle on campaign Day 0. An offset of 0 means the moon starts at a New Moon. An offset equal to half the orbital period starts it at a Full Moon. Use this to match the phase described in your campaign\'s opening scene, or to ensure two moons start in different positions so they do not always align.' },
    { type: 'title', text: 'What the Tide Level Means for Your Game', level: 2 },
    { type: 'paragraph', html: 'The tide level combines the gravitational pull of all active moons based on their current phases. A <strong>Spring Tide</strong> (above 75%) occurs when moons are nearly aligned at full or new phase, pulling in the same direction. A <strong>Neap Tide</strong> (below 30%) happens when moons are in opposing phases, partially cancelling each other out. You can tie this directly to any mechanical system: spell save DC bonuses, druid wildshape duration, werewolf transformation thresholds, or storm severity on coastal maps.' },
    {
      type: 'comparative',
      items: [
        {
          title: 'Single Moon',
          description: 'Best for settings that closely mirror the real world or have a single dominant moon. Simple 8-phase cycle, easy to follow without reference.',
          icon: 'mdi:moon-full',
          highlight: false,
          points: [
            'Good for D&D Forgotten Realms (Selune, 30 days)',
            'Werewolf and lycanthrope campaigns',
            'Horror sessions tied to the full moon'
          ]
        },
        {
          title: 'Twin Moons',
          description: 'Common in high-fantasy settings. Creates frequent partial alignments and interesting mid-cycle tides. Alignments happen roughly every LCM(period1, period2) days.',
          icon: 'mdi:moon-waxing-crescent',
          highlight: true,
          points: [
            'Eberron (Rhaan 28d + Aryth 12d)',
            'Creates predictable eclipse seasons',
            'Good for druidic or elemental magic systems'
          ]
        },
        {
          title: 'Triple Moons',
          description: 'Rare triple alignments create unpredictable surges. The combined tide becomes chaotic and hard to predict without this tool, which is what makes it dramatically useful.',
          icon: 'mdi:moon-waning-crescent',
          highlight: false,
          points: [
            'Wild magic surge tables on alignment',
            'Pathfinder Golarion-style complexity',
            'Long-period cycles for epic campaigns'
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: 'Common Orbital Periods for Fantasy Worlds', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Selune (Forgotten Realms)', definition: '30-day orbital period, single moon. Use offset 15 to start at a full moon on session 1.' },
        { term: 'Eberron Moons', definition: 'Eberron has 12 moons with periods from 9 to 28 days. Run each as a separate moon instance, or pick the two most plot-relevant.' },
        { term: 'Golarion (Pathfinder)', definition: 'Golarion has a single moon, Somal, with a 29-day cycle. Dark tapestry events can be modeled by setting a second low-period moon with offset interference.' },
        { term: 'Custom World', definition: 'A 15-day moon produces 24 full moons per year. A 45-day moon produces roughly 8. Shorter periods mean more frequent eclipse events but reduce their narrative weight.' }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tip: Setting Up a Specific Phase for Session 1',
      icon: 'mdi:information-outline',
      badge: 'SETUP TIP',
      html: 'If your campaign starts on a crescent moon, set the offset to about 20% of the orbital period. For a full moon start, use 50% of the period as the offset. For example, a 28-day moon starting full would use offset 14. Advance the day counter to your current campaign day and the forecast will show the next 10 days automatically.'
    }
  ],
  faq: [
    { question: 'What orbital period should I use for my fantasy world?', answer: 'If your setting does not specify one, 28 to 30 days works well for a single moon. For multiple moons, pick periods that are not simple multiples of each other (e.g. 20 and 27) so alignments do not repeat too often. Shorter periods (10 to 15 days) work well for secondary moons that create frequent minor tides.' },
    { question: 'How do I make two moons align at a specific campaign moment?', answer: 'Set both moons to the same offset value. They will start in the same phase on Day 0 and align again at every common multiple of their two periods. To stagger them, give the second moon an offset equal to half of its orbital period so they start opposite each other.' },
    { question: 'What does a Spring Tide mean in game terms?', answer: 'Spring Tide means all active moons are pulling in alignment, producing maximum tidal energy. You can use this to trigger wild magic surges, boost healing spell ranges, worsen storm severity, or mark it as a sacred night for religious factions in your world.' },
    { question: 'What does a Neap Tide mean in game terms?', answer: 'Neap Tide occurs when moons partially cancel each other out. It is a good moment for antimagic effects, a dead calm at sea, or for villains who need predictable magic suppression to execute their plans.' },
    { question: 'Can I use this for Call of Cthulhu or horror campaigns?', answer: 'Yes. Use a single 29-day moon and set the offset so the full moon falls on the session climax. The tide tracker can represent Mythos influence or psychic sensitivity peaks that scale with the phase percentage.' },
    { question: 'How does the 10-day forecast work?', answer: 'The forecast shows the moon phase of each active moon as a colored dot for each of the next 10 campaign days, starting from the current day. The percentage below each day column is the combined tide level. High percentage days are good candidates for dramatic encounters tied to magic or weather.' },
    { question: 'Can I track a moon with a very short cycle, like 7 days?', answer: 'Yes. Set the orbital period to 7. The moon will complete a full cycle every week of in-game time, going through all 8 phases. This is useful for campaign worlds where lunar magic resets weekly, or for tracking a small comet-like body that passes regularly.' },
    { question: 'How do I match the moon phase from a published adventure module?', answer: 'Look up the campaign day in the adventure and note the described phase. Count how many days into the cycle that corresponds to, divide by the orbital period, and use that as your offset. For example, a first quarter moon on Day 0 of a 28-day cycle means the offset is 7 (one quarter of 28).' }
  ],
  bibliography,
  howTo: [
    { name: 'Set the Orbital Period', text: 'Enter the number of in-game days your moon takes to complete one full cycle. Use your world\'s lore or pick a value between 5 and 60.' },
    { name: 'Set the Starting Offset', text: 'Shift the starting phase by entering a day offset. An offset of 0 begins at New Moon. Half the orbital period begins at Full Moon.' },
    { name: 'Advance the Day Counter', text: 'Use the step buttons or slider to move to your current campaign day and read the phase and tide level in real time.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Calculator for Tabletop RPG: Track Custom Fantasy Moons and Tidal Cycles',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What orbital period should I use for my fantasy world?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'If your setting does not specify one, 28 to 30 days works well for a single moon. For multiple moons, pick periods that are not simple multiples of each other so alignments do not repeat too often.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What does a Spring Tide mean in game terms?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Spring Tide means all active moons are pulling in alignment. Use this to trigger wild magic surges, boost healing spell ranges, worsen storm severity, or mark it as a sacred night for religious factions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I make two moons align at a specific campaign moment?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Set both moons to the same offset value. They will align again at every common multiple of their two orbital periods. To stagger them, give the second moon an offset equal to half its orbital period.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does the 10-day forecast work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The forecast shows the moon phase of each active moon as a colored dot for each of the next 10 campaign days. The percentage shown is the combined tide level. High percentage days are candidates for dramatic magic or weather encounters.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I use this for Call of Cthulhu or horror campaigns?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Use a single 29-day moon and set the offset so the full moon falls on the session climax. The tide tracker can represent Mythos influence or psychic sensitivity peaks that scale with the phase percentage.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I match the moon phase from a published adventure module?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Note the described phase and count how many days into the cycle that corresponds to. Divide by the orbital period and use that fraction as your offset. For example, a first quarter moon on a 28-day cycle means an offset of 7.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Track Moon Phases in a Tabletop RPG Campaign',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Set the Orbital Period',
          'text': 'Enter the number of in-game days your moon takes to complete one full cycle.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Set the Starting Offset',
          'text': 'Shift the starting phase by entering a day offset. Half the orbital period begins at Full Moon.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Advance the Day Counter',
          'text': 'Use the step buttons or slider to move to your current campaign day and read the phase and tide level.'
        }
      ]
    }
  ]
};
export default content;
