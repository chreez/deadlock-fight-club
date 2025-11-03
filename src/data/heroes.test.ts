import { describe, it, expect } from 'vitest';
import { HEROES } from './heroes';

describe('HEROES data', () => {
  it('should have 32 heroes', () => {
    expect(HEROES).toHaveLength(32);
  });

  it('should have all heroes with name and asset properties', () => {
    HEROES.forEach(hero => {
      expect(hero).toHaveProperty('name');
      expect(hero).toHaveProperty('asset');
      expect(typeof hero.name).toBe('string');
      expect(typeof hero.asset).toBe('string');
      expect(hero.name).toBeTruthy();
      expect(hero.asset).toBeTruthy();
    });
  });

  it('should have unique hero names', () => {
    const names = HEROES.map(h => h.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(HEROES.length);
  });

  it('should contain expected heroes', () => {
    const heroNames = HEROES.map(h => h.name);
    expect(heroNames).toContain('Bebop');
    expect(heroNames).toContain('Lady Geist');
    expect(heroNames).toContain('Mo & Krill');
    expect(heroNames).toContain('Grey Talon');
  });

  it('should use generic.png for unreleased heroes', () => {
    const genericHeroes = HEROES.filter(h => h.asset === 'generic.png');
    expect(genericHeroes.length).toBeGreaterThan(0);

    const genericNames = genericHeroes.map(h => h.name);
    expect(genericNames).toContain('Billy');
    expect(genericNames).toContain('Paige');
    expect(genericNames).toContain('Victor');
  });

  it('should have proper asset file extensions', () => {
    HEROES.forEach(hero => {
      expect(hero.asset).toMatch(/\.png$/);
    });
  });
});
