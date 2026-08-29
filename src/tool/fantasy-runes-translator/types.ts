export interface RuneCharacter {
  symbol: string;
  name: string;
  meaning: string;
  phonetic: string;
}

export type RuneAlphabetKey = 'elder-futhark' | 'anglo-saxon' | 'fantasy' | 'theban' | 'enochian' | 'daemonic' | 'ogham';

export interface RuneAlphabet {
  key: RuneAlphabetKey;
  name: string;
  description: string;
  mapping: Record<string, RuneCharacter>;
}

export interface RuneCharacterResult {
  input: string;
  char: RuneCharacter | null;
}

export interface RuneTranslationResult {
  alphabetKey: RuneAlphabetKey;
  characters: RuneCharacterResult[];
  raw: string;
}
