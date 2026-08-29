import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { tabletopCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(16);
    });

    it('tabletopCategory should be defined', () => {
      expect(tabletopCategory).toBeDefined();
      expect(tabletopCategory.i18n).toBeDefined();
    });
  });
});
