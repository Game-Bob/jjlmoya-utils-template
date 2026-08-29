import type { RuneAlphabet, RuneCharacter, RuneAlphabetKey, RuneCharacterResult, RuneTranslationResult } from './types';

function rc(sym: string, name: string, meaning: string, phonetic: string): RuneCharacter {
  return { symbol: sym, name, meaning, phonetic };
}


const ELDER: Record<string, RuneCharacter> = {
  a: rc('ᚨ', 'Ansuz', 'God Odin', 'a'), b: rc('ᛒ', 'Berkanan', 'Birch goddess', 'b'),
  c: rc('ᚲ', 'Kaunan', 'Torch', 'k'), d: rc('ᛞ', 'Dagaz', 'Day', 'd'),
  e: rc('ᛖ', 'Ehwaz', 'Horse', 'e'), f: rc('ᚠ', 'Fehu', 'Wealth', 'f'),
  g: rc('ᚷ', 'Gebo', 'Gift', 'g'), h: rc('ᚺ', 'Hagalaz', 'Hail', 'h'),
  i: rc('ᛁ', 'Isa', 'Ice', 'i'), j: rc('ᛃ', 'Jera', 'Harvest', 'j'),
  k: rc('ᚴ', 'Kaun', 'Torch', 'k'), l: rc('ᛚ', 'Laguz', 'Water', 'l'),
  m: rc('ᛗ', 'Mannaz', 'Man', 'm'), n: rc('ᚾ', 'Naudiz', 'Need', 'n'),
  o: rc('ᛟ', 'Othala', 'Heritage', 'o'), p: rc('ᛈ', 'Pertho', 'Lot cup', 'p'),
  q: rc('ᛍ', 'Calc', 'Chalice', 'kw'), r: rc('ᚱ', 'Raido', 'Journey', 'r'),
  s: rc('ᛋ', 'Sowilo', 'Sun', 's'), t: rc('ᛏ', 'Tiwaz', 'God Tyr', 't'),
  u: rc('ᚢ', 'Uruz', 'Aurochs', 'u'), v: rc('ᚡ', 'V', 'Horn', 'v'),
  w: rc('ᚹ', 'Wunjo', 'Joy', 'w'), x: rc('ᛉ', 'Algiz', 'Elk', 'x'),
  y: rc('ᛇ', 'Eihwaz', 'Yew', 'y'), z: rc('ᛉ', 'Algiz', 'Elk', 'z'),
};


const ANGLO: Record<string, RuneCharacter> = {
  a: rc('ᚪ', 'Ac', 'Oak', 'a'), b: rc('ᛒ', 'Berkanan', 'Birch', 'b'),
  c: rc('ᚳ', 'Calc', 'Chalice', 'k'), d: rc('ᛞ', 'Dagaz', 'Day', 'd'),
  e: rc('ᛖ', 'Ehwaz', 'Horse', 'e'), f: rc('ᚠ', 'Fehu', 'Wealth', 'f'),
  g: rc('ᚷ', 'Gebo', 'Gift', 'g'), h: rc('ᚻ', 'Hagal', 'Hail', 'h'),
  i: rc('ᛁ', 'Isa', 'Ice', 'i'), j: rc('ᛡ', 'Jera', 'Harvest', 'j'),
  k: rc('ᚳ', 'Calc', 'Chalice', 'k'), l: rc('ᛚ', 'Laguz', 'Water', 'l'),
  m: rc('ᛗ', 'Mannaz', 'Man', 'm'), n: rc('ᚾ', 'Naudiz', 'Need', 'n'),
  o: rc('ᛟ', 'Othala', 'Heritage', 'o'), p: rc('ᛈ', 'Pertho', 'Cup', 'p'),
  q: rc('ᛎ', 'Cweord', 'Knife', 'kw'), r: rc('ᚱ', 'Raido', 'Journey', 'r'),
  s: rc('ᛋ', 'Sigel', 'Sun', 's'), t: rc('ᛏ', 'Ti', 'God Tyr', 't'),
  u: rc('ᚢ', 'Ur', 'Aurochs', 'u'), v: rc('ᚵ', 'V', 'Horn', 'v'),
  w: rc('ᚹ', 'Wyn', 'Joy', 'w'), x: rc('ᛉ', 'Algiz', 'Elk', 'x'),
  y: rc('ᚣ', 'Yr', 'Yew bow', 'y'), z: rc('ᛉ', 'Algiz', 'Elk', 'z'),
};


const FANTASY: Record<string, RuneCharacter> = {
  a: rc('𐌰', 'Aether', 'Cosmic essence', 'a'), b: rc('𐌱', 'Bael', 'Gate', 'b'),
  c: rc('𐌲', 'Cinder', 'Ember', 'k'), d: rc('𐌳', 'Drake', 'Dragon', 'd'),
  e: rc('𐌴', 'Ember', 'Flame', 'e'), f: rc('𐌵', 'Frost', 'Winter', 'f'),
  g: rc('𐌶', 'Grim', 'Shadow', 'g'), h: rc('𐌷', 'Hollow', 'Void', 'h'),
  i: rc('𐌹', 'Iris', 'Vision', 'i'), j: rc('𐌾', 'Jinx', 'Curse', 'j'),
  k: rc('𐌺', 'Knight', 'Guardian', 'k'), l: rc('𐌻', 'Lunar', 'Moon', 'l'),
  m: rc('𐌼', 'Myst', 'Illusion', 'm'), n: rc('𐌽', 'Nyx', 'Night', 'n'),
  o: rc('𐍉', 'Onyx', 'Gem', 'o'), p: rc('𐍀', 'Phantom', 'Spirit', 'p'),
  q: rc('𐌸', 'Quake', 'Rumble', 'kw'), r: rc('𐍂', 'Rune', 'Secret', 'r'),
  s: rc('𐍃', 'Storm', 'Tempest', 's'), t: rc('𐍄', 'Thorn', 'Briar', 't'),
  u: rc('𐍅', 'Umbra', 'Shadow', 'u'), v: rc('𐍅', 'Void', 'Abyss', 'v'),
  w: rc('𐍈', 'Wyrm', 'Serpent', 'w'), x: rc('𐍇', 'Xen', 'Foreign', 'x'),
  y: rc('𐍁', 'Yew', 'Tree', 'y'), z: rc('𐍊', 'Zen', 'Peace', 'z'),
};


const THEBAN: Record<string, RuneCharacter> = {
  a: rc('Ⰰ', 'Aman', 'Beginning', 'a'), b: rc('Ⰱ', 'Bane', 'Sanctuary', 'b'),
  c: rc('Ⱌ', 'Cerne', 'Nature', 'k'), d: rc('Ⰴ', 'Dawn', 'Awakening', 'd'),
  e: rc('Ⰵ', 'Elm', 'Wisdom', 'e'), f: rc('Ⱇ', 'Fae', 'Spirit', 'f'),
  g: rc('Ⰳ', 'Grove', 'Forest', 'g'), h: rc('Ⱈ', 'Hearth', 'Warmth', 'h'),
  i: rc('Ⰹ', 'Ivy', 'Binding', 'i'), j: rc('Ⰼ', 'Jade', 'Protection', 'j'),
  k: rc('Ⰽ', 'Kelp', 'Depth', 'k'), l: rc('Ⰾ', 'Lunar', 'Moon', 'l'),
  m: rc('Ⰿ', 'Mist', 'Mystery', 'm'), n: rc('Ⱀ', 'Night', 'Dark', 'n'),
  o: rc('Ⱁ', 'Oak', 'Strength', 'o'), p: rc('Ⱂ', 'Pine', 'Resilience', 'p'),
  q: rc('Ⱃ', 'Quill', 'Writing', 'kw'), r: rc('Ⱃ', 'River', 'Flow', 'r'),
  s: rc('Ⱄ', 'Star', 'Fate', 's'), t: rc('Ⱅ', 'Thorn', 'Boundary', 't'),
  u: rc('Ⱆ', 'Urn', 'Memory', 'u'), v: rc('Ⰲ', 'Vale', 'Passage', 'v'),
  w: rc('Ⱏ', 'Willow', 'Grace', 'w'), x: rc('Ⱐ', 'Xen', 'Unknown', 'x'),
  y: rc('Ⱑ', 'Yew', 'Death', 'y'), z: rc('Ⱓ', 'Zen', 'Peace', 'z'),
};


const ENOCHIAN: Record<string, RuneCharacter> = {
  a: rc('Ⲁ', 'Arinn', 'Star', 'a'), b: rc('Ⲃ', 'Bramin', 'Word', 'b'),
  c: rc('Ⲅ', 'Cormp', 'Gate', 'k'), d: rc('Ⲇ', 'Drunor', 'Flame', 'd'),
  e: rc('Ⲉ', 'Elmik', 'Light', 'e'), f: rc('Ⲋ', 'Fornis', 'Wing', 'f'),
  g: rc('Ⲍ', 'Grimor', 'Knowledge', 'g'), h: rc('Ⲏ', 'Harnis', 'Voice', 'h'),
  i: rc('Ⲑ', 'Ionis', 'Light', 'i'), j: rc('Ⲓ', 'Jorlim', 'Crystal', 'j'),
  k: rc('Ⲕ', 'Kormic', 'Order', 'k'), l: rc('Ⲗ', 'Lorith', 'Mist', 'l'),
  m: rc('Ⲙ', 'Mornik', 'Dawn', 'm'), n: rc('Ⲛ', 'Norlim', 'Void', 'n'),
  o: rc('Ⲟ', 'Ormin', 'Sphere', 'o'), p: rc('Ⲡ', 'Parnis', 'Key', 'p'),
  q: rc('Ⲣ', 'Quaris', 'Tear', 'kw'), r: rc('Ⲥ', 'Rornis', 'Circle', 'r'),
  s: rc('Ⲧ', 'Sarnak', 'Path', 's'), t: rc('Ⲩ', 'Tornik', 'Stone', 't'),
  u: rc('Ⲫ', 'Urnik', 'Root', 'u'), v: rc('Ⲭ', 'Vornis', 'Walker', 'v'),
  w: rc('Ⲯ', 'Wynnis', 'Wind', 'w'), x: rc('Ⲱ', 'Xarnis', 'Realm', 'x'),
  y: rc('Ⲳ', 'Yornik', 'Cycle', 'y'), z: rc('Ⲵ', 'Zarnak', 'Gate', 'z'),
};


const DAEMONIC: Record<string, RuneCharacter> = {
  a: rc('▀', 'Amon', 'Serpent', 'a'), b: rc('▄', 'Bael', 'Dark lord', 'b'),
  c: rc('█', 'Cthul', 'Deep one', 'k'), d: rc('▌', 'Dagon', 'Abyss', 'd'),
  e: rc('▐', 'Eligor', 'Shadow', 'e'), f: rc('░', 'Foras', 'Flame', 'f'),
  g: rc('▒', 'Grimok', 'Bone', 'g'), h: rc('▓', 'Hethor', 'Soul', 'h'),
  i: rc('╳', 'Iblis', 'Fallen', 'i'), j: rc('╲', 'Jinnar', 'Smoke', 'j'),
  k: rc('╱', 'Kraken', 'Beast', 'k'), l: rc('╵', 'Lilith', 'Mother', 'l'),
  m: rc('╶', 'Morgul', 'Spell', 'm'), n: rc('╷', 'Nekron', 'Death', 'n'),
  o: rc('╸', 'Orcus', 'Underworld', 'o'), p: rc('╺', 'Pazuzu', 'King', 'p'),
  q: rc('╻', 'Quorak', 'Gate', 'kw'), r: rc('╼', 'Ragnar', 'Wolf', 'r'),
  s: rc('╽', 'Satan', 'Adversary', 's'), t: rc('╾', 'Tiamat', 'Dragon', 't'),
  u: rc('╿', 'Umbral', 'Shadow', 'u'), v: rc('▱', 'Vritra', 'Fiend', 'v'),
  w: rc('▰', 'Wyrmar', 'Worm', 'w'), x: rc('◤', 'Xenar', 'Being', 'x'),
  y: rc('◥', 'Yogoth', 'Tentacle', 'y'), z: rc('◢', 'Zalgor', 'Beast', 'z'),
};


const OGHAM: Record<string, RuneCharacter> = {
  a: rc('ᚆ', 'Ailm', 'Pine', 'a'), b: rc('ᚁ', 'Beith', 'Birch', 'b'),
  c: rc('ᚉ', 'Coll', 'Hazel', 'k'), d: rc('ᚇ', 'Duir', 'Oak', 'd'),
  e: rc('ᚓ', 'Eadhadh', 'Aspen', 'e'), f: rc('ᚃ', 'Fearn', 'Alder', 'f'),
  g: rc('ᚌ', 'Gort', 'Ivy', 'g'), h: rc('ᚆ', 'Huath', 'Hawthorn', 'h'),
  i: rc('ᚔ', 'Idad', 'Yew', 'i'), j: rc('ᚔ', 'Juniper', 'Berry', 'j'),
  k: rc('ᚉ', 'Kile', 'Rowan', 'k'), l: rc('ᚂ', 'Luis', 'Rowan', 'l'),
  m: rc('ᚋ', 'Muin', 'Vine', 'm'), n: rc('ᚅ', 'Nion', 'Ash', 'n'),
  o: rc('ᚑ', 'Onn', 'Light', 'o'), p: rc('ᚚ', 'Peth', 'Dwarf', 'p'),
  q: rc('ᚊ', 'Quert', 'Apple', 'kw'), r: rc('ᚏ', 'Ruis', 'Elder', 'r'),
  s: rc('ᚄ', 'Saille', 'Willow', 's'), t: rc('ᚈ', 'Tinne', 'Holly', 't'),
  u: rc('ᚒ', 'Ura', 'Heather', 'u'), v: rc('ᚃ', 'Vervain', 'Herb', 'v'),
  w: rc('ᚊ', 'Wym', 'Elm', 'w'), x: rc('ᚉ', 'Xert', 'Beech', 'x'),
  y: rc('ᚓ', 'Yewan', 'Cypress', 'y'), z: rc('ᚄ', 'Zara', 'Fate', 'z'),
};

const SPACE: RuneCharacter = { symbol: ' ', name: 'Space', meaning: 'Word divider', phonetic: ' ' };

export const ALPHABETS: RuneAlphabet[] = [
  { key: 'elder-futhark', name: 'Elder Futhark', description: 'Germanic runes 2nd century', mapping: ELDER },
  { key: 'anglo-saxon', name: 'Anglo Saxon', description: 'Anglo Saxon Futhorc', mapping: ANGLO },
  { key: 'fantasy', name: 'Fantasy Script', description: 'Gothic inspired arcane', mapping: FANTASY },
  { key: 'theban', name: 'Theban', description: 'Witches Glagolitic script', mapping: THEBAN },
  { key: 'enochian', name: 'Enochian', description: 'Coptic celestial script', mapping: ENOCHIAN },
  { key: 'daemonic', name: 'Daemonic', description: 'Infernal block script', mapping: DAEMONIC },
  { key: 'ogham', name: 'Ogham', description: 'Celtic tree alphabet', mapping: OGHAM },
];

export function getAlphabet(key: RuneAlphabetKey): RuneAlphabet {
  return ALPHABETS.find(a => a.key === key) || ALPHABETS[0];
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 16807 + 1) % 2147483647;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getShuffledMapping(key: RuneAlphabetKey, seed: number | null): Record<string, RuneCharacter> {
  const base = getAlphabet(key).mapping;
  if (seed === null) return base;
  const letters = Object.keys(base);
  const shuffled = seededShuffle(letters, seed);
  const result: Record<string, RuneCharacter> = {};
  shuffled.forEach((l, i) => { result[letters[i]] = base[l]; });
  return result;
}

export function translateText(text: string, key: RuneAlphabetKey, seed: number | null = null): RuneTranslationResult {
  const mapping = getShuffledMapping(key, seed);
  const chars: RuneCharacterResult[] = [];
  for (const ch of text.toLowerCase()) {
    if (ch === ' ') { chars.push({ input: ' ', char: SPACE }); continue; }
    const rune = mapping[ch];
    chars.push({ input: ch, char: rune || null });
  }
  const raw = chars.map(c => (c.char ? c.char.symbol : c.input)).join('');
  return { alphabetKey: key, characters: chars, raw };
}

