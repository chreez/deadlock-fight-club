import { describe, it, expect } from 'vitest';
import { getRandomElement, shuffle, randomInt } from './random';

describe('random utilities', () => {
  describe('getRandomElement', () => {
    it('should return an element from the array', () => {
      const array = [1, 2, 3, 4, 5];
      const result = getRandomElement(array);
      expect(array).toContain(result);
    });

    it('should return the only element for single-item array', () => {
      const array = ['only'];
      const result = getRandomElement(array);
      expect(result).toBe('only');
    });
  });

  describe('shuffle', () => {
    it('should return array with same length', () => {
      const array = [1, 2, 3, 4, 5];
      const result = shuffle(array);
      expect(result).toHaveLength(array.length);
    });

    it('should contain all original elements', () => {
      const array = [1, 2, 3, 4, 5];
      const result = shuffle(array);
      array.forEach(item => {
        expect(result).toContain(item);
      });
    });

    it('should not mutate original array', () => {
      const array = [1, 2, 3, 4, 5];
      const original = [...array];
      shuffle(array);
      expect(array).toEqual(original);
    });

    it('should work with empty array', () => {
      const array: number[] = [];
      const result = shuffle(array);
      expect(result).toEqual([]);
    });
  });

  describe('randomInt', () => {
    it('should return number within range', () => {
      const result = randomInt(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    it('should return min when min equals max', () => {
      const result = randomInt(5, 5);
      expect(result).toBe(5);
    });

    it('should handle negative numbers', () => {
      const result = randomInt(-10, -1);
      expect(result).toBeGreaterThanOrEqual(-10);
      expect(result).toBeLessThanOrEqual(-1);
    });
  });
});
