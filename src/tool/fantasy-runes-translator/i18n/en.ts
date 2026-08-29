import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: 'Fantasy Runes Translator',
  inputPlaceholder: 'Type a word or name to translate...',
  alphabetLabel: 'Rune Alphabet',
  elderFuthark: 'Elder Futhark',
  angloSaxon: 'Anglo-Saxon',
  fantasy: 'Fantasy Script',
  theban: 'Theban',
  enochian: 'Enochian',
  daemonic: 'Daemonic',
  ogham: 'Ogham',
  translate: 'Translate',
  clear: 'Clear',
  copy: 'Copy Text',
  copied: 'Copied!',
  runeName: 'Name',
  runeMeaning: 'Meaning',
  runePhonetic: 'Phonetic',
  clickHint: 'Click a rune to see its details',
  outputLabel: 'Rune Output',
  noInput: 'Enter text above to translate into runes',
  unknownChar: '?',
  gmMode: 'GM Mode',
  exitGmMode: 'Exit',
  gmHint: 'Show this to your players',
  seedLabel: 'Seed',
  seedPlaceholder: 'Optional',
  seedApplied: 'Locked',
  shuffleSeed: 'Shuffle',
};

const faq = [
  {
    question: 'What is the Elder Futhark?',
    answer: 'The Elder Futhark is the oldest form of the runic alphabets, used by Germanic tribes from the 2nd to 8th centuries. It consists of 24 runes divided into three groups of eight called aettir. Each rune has a phonetic value and a symbolic name representing natural or mythological concepts.',
  },
  {
    question: 'What is the difference between Elder Futhark and Anglo-Saxon runes?',
    answer: 'The Anglo-Saxon Futhorc is an extended version of the Elder Futhark developed in England. It adds additional runes to represent sounds specific to Old English, expanding from 24 to up to 33 characters. The meanings and phonetic values also shifted over time.',
  },
  {
    question: 'Does this translator convert words perfectly?',
    answer: 'This tool provides a letter-by-letter transliteration into rune symbols. Historical rune usage was phonetic rather than literal letter-for-letter, so the result is a modern interpretation. The Fantasy Script option offers a creative fictional alphabet for tabletop RPG flavor.',
  },
  {
    question: 'Can I use these runes in my tabletop RPG campaigns?',
    answer: 'Yes! Game masters and players can use the translator to create runic inscriptions, magical writings, cryptic messages, or decorative names for characters and locations. The Fantasy Script option is designed specifically for fantasy roleplaying settings.',
  },
  {
    question: 'Does this tool store any text I type?',
    answer: 'No. Everything runs locally in your browser. No text, translations, or selections are ever sent to any server. Your creative work stays completely private.',
  },
  {
    question: 'What happens when I click on a rune?',
    answer: 'Clicking on any rune card displays its traditional name, symbolic meaning, and phonetic value. This helps you learn the runes and choose the right symbol for your RPG needs.',
  },
];

const howTo = [
  {
    name: 'Enter Text',
    text: 'Type any English word, name, or phrase into the input field. The translator works best with single words or short phrases.',
  },
  {
    name: 'Select an Alphabet',
    text: 'Choose between Elder Futhark (ancient Germanic), Anglo-Saxon (medieval English), or Fantasy Script (tabletop RPG style).',
  },
  {
    name: 'Translate and Explore',
    text: 'Click Translate to convert your text. Each rune appears as a card. Click any rune to learn its name, meaning, and sound. Use the Copy button to save the rune text to your clipboard.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantasy-runes-translator',
  title: 'Fantasy Runes Translator / Elder Futhark, Theban, Enochian and Daemonic Rune Converter',
  description: 'Translate text into Elder Futhark, Anglo-Saxon Futhorc, Theban, Enochian, Daemonic, Ogham, or Fantasy scripts. Perfect for tabletop RPG puzzles, campaigns, wizard scrolls, and mystical runes.',
  ui,
  seo: [
    { type: 'title', text: 'Runic Alphabets and Mystic Scripts for Tabletop RPG Worldbuilding', level: 2 },
    { type: 'paragraph', html: 'Mystic runic alphabets, ancient symbols, and secret scripts bring unmatched immersion to fantasy tabletop roleplaying games like D&D, Pathfinder, and Warhammer. Whether you are crafting hidden dwarven ruins inscribed with Elder Futhark, designing an arcane spellbook containing Enochian angel-tongue scripts, scattering witchy clues using the Theban alphabet, or writing forbidden daemonic messages, our rune generator turns standard English text into stylized symbols in real time. Spark player curiosity with physical props, mystery ciphers, and ancient stone carvings.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: 'Rune Alphabets' },
        { value: '150+', label: 'Symbol Variations' },
        { value: 'Instant', label: 'Visual Transliteration' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Elder Futhark & Anglo-Saxon Futhorc: Ancient Germanic and Norse Runes', level: 2 },
    { type: 'paragraph', html: 'Dating back to the 2nd century, the Elder Futhark is the oldest runic system, consisting of 24 characters representing fundamental forces of nature. The Anglo-Saxon Futhorc expanded this system to include up to 33 characters for Old English phonetics. These historical symbols are perfect for representing dwarven clans, Norse mythology-inspired cultures, viking carvings, and barbarian clan insignias in your RPG campaign settings.' },
    { type: 'title', text: 'Theban & Ogham: Medieval Witchcraft and Celtic Tree Alphabets', level: 2 },
    { type: 'paragraph', html: 'Often referred to as the Runes of Honorius or the Witch\'s Alphabet, the Theban script is a historically popular medieval cipher used in occult traditions and Wicca. Ogham, an early medieval alphabet, uses linear strokes carved along edges, famously linked to Celtic folklore and druidic tree magic. Use these scripts to embellish druidic shrines, elven forests, pagan alters, or hidden messages from secret witch covens.' },
    { type: 'title', text: 'Enochian & Daemonic Scripts: Arcane Angelic and Abyssal Languages', level: 2 },
    { type: 'paragraph', html: 'First recorded by John Dee and Edward Kelley in the 16th century, Enochian is a detailed constructed language believed to be the tongue of angels. Daemonic scripts represent abyssal glyphs, dark pacts, and infernal markings. Elevate the narrative stakes of your campaign by leaving decipherable demonic contracts, dark cult carvings, and angelic relics for your wizards, paladins, and clerics to investigate.' },
    { type: 'title', text: 'Custom Fantasy Script: Roleplay-Ready Creative Alphabets', level: 2 },
    { type: 'paragraph', html: 'For worlds that go beyond real-world history, our customized Fantasy Script offers a fictional set of runes built specifically to evoke classic high-fantasy aesthetics. Every rune is designed to stand out on game master printouts, digital maps, and custom player tokens. Pair it with seed-based randomizations to make secret languages unique to different factions, nations, or ancient gods.' },
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
      'name': 'Fantasy Runes Translator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Fantasy Runes Translator',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
