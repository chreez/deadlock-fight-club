import { describe, it, expect } from 'vitest';
import { HERO_COUNTERS } from '../counterData';
import { HEROES } from '../heroes';

describe('HERO_COUNTERS data', () => {
  it('should be an object', () => {
    expect(HERO_COUNTERS).toBeDefined();
    expect(typeof HERO_COUNTERS).toBe('object');
  });

  it('should have hero names as keys', () => {
    const counterKeys = Object.keys(HERO_COUNTERS);
    expect(counterKeys.length).toBeGreaterThan(0);

    // All keys should be valid hero names
    const heroNames = HEROES.map(h => h.name);
    counterKeys.forEach(key => {
      expect(heroNames).toContain(key);
    });
  });

  it('should have arrays of counter items for each hero', () => {
    Object.values(HERO_COUNTERS).forEach(counters => {
      expect(Array.isArray(counters)).toBe(true);
      expect(counters.length).toBeGreaterThan(0);
    });
  });

  it('should have valid counter item structure', () => {
    Object.entries(HERO_COUNTERS).forEach(([_heroName, counters]) => {
      counters.forEach(counter => {
        expect(counter).toHaveProperty('name');
        expect(counter).toHaveProperty('cost');
        expect(counter).toHaveProperty('category');
        expect(counter).toHaveProperty('effect');

        expect(typeof counter.name).toBe('string');
        expect(typeof counter.cost).toBe('number');
        expect(typeof counter.category).toBe('string');
        expect(typeof counter.effect).toBe('string');

        expect(counter.name.length).toBeGreaterThan(0);
        expect(counter.cost).toBeGreaterThan(0);
        expect(counter.effect.length).toBeGreaterThan(0);
      });
    });
  });

  it('should contain expected hero counters', () => {
    expect(HERO_COUNTERS).toHaveProperty('Bebop');
    expect(HERO_COUNTERS).toHaveProperty('Haze');
    expect(HERO_COUNTERS).toHaveProperty('Lady Geist');
  });

  it('should have Bebop counters with expected items', () => {
    const bebopCounters = HERO_COUNTERS['Bebop'];
    expect(bebopCounters).toBeDefined();

    const counterNames = bebopCounters.map(c => c.name);
    expect(counterNames).toContain('Reactive Barrier');
  });

  it('should have valid cost values', () => {
    const validCosts = [500, 1250, 1600, 3000, 6200];

    Object.values(HERO_COUNTERS).forEach(counters => {
      counters.forEach(counter => {
        expect(validCosts).toContain(counter.cost);
      });
    });
  });

  it('should have valid category values', () => {
    const validCategories = ['Passive', 'Active', 'Anti-Heal', 'Bonus'];

    Object.values(HERO_COUNTERS).forEach(counters => {
      counters.forEach(counter => {
        expect(validCategories).toContain(counter.category);
      });
    });
  });
});
