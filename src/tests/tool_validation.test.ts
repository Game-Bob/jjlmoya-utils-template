import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { templateCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 1 tool registered (example-tool)', () => {
      expect(ALL_TOOLS.length).toBe(1);
    });

    it('templateCategory should be defined', () => {
      expect(templateCategory).toBeDefined();
      expect(templateCategory.i18n).toBeDefined();
    });
  });
});
