import { describe, it, expect } from 'vitest';
import { ITEMS, FAIR_ITEM_COMBOS } from './items';

describe('ITEMS data', () => {
  it('should have 132 items', () => {
    expect(ITEMS).toHaveLength(132);
  });

  it('should have all items with required properties', () => {
    ITEMS.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('category');
      expect(item).toHaveProperty('tier');
      expect(item).toHaveProperty('cost');
      expect(typeof item.name).toBe('string');
      expect(['weapon', 'vitality', 'spirit']).toContain(item.category);
      expect([1, 2, 3, 4]).toContain(item.tier);
      expect(typeof item.cost).toBe('number');
    });
  });

  it('should have correct tier costs', () => {
    const tier1Items = ITEMS.filter(i => i.tier === 1);
    const tier2Items = ITEMS.filter(i => i.tier === 2);
    const tier3Items = ITEMS.filter(i => i.tier === 3);
    const tier4Items = ITEMS.filter(i => i.tier === 4);

    tier1Items.forEach(item => expect(item.cost).toBe(500));
    tier2Items.forEach(item => expect(item.cost).toBe(1250));
    tier3Items.forEach(item => expect(item.cost).toBe(3000));
    tier4Items.forEach(item => expect(item.cost).toBe(6200));
  });

  it('should have correct distribution of items by category', () => {
    const weaponItems = ITEMS.filter(i => i.category === 'weapon');
    const vitalityItems = ITEMS.filter(i => i.category === 'vitality');
    const spiritItems = ITEMS.filter(i => i.category === 'spirit');

    expect(weaponItems).toHaveLength(42);
    expect(vitalityItems).toHaveLength(50);
    expect(spiritItems).toHaveLength(40);
  });

  it('should have unique item names', () => {
    const names = ITEMS.map(i => i.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(ITEMS.length);
  });

  it('should contain expected items', () => {
    const itemNames = ITEMS.map(i => i.name);
    expect(itemNames).toContain('Basic Magazine');
    expect(itemNames).toContain('Reactive Barrier');
    expect(itemNames).toContain('Extra Health');
    expect(itemNames).toContain('Mystic Shot');
  });
});

describe('FAIR_ITEM_COMBOS', () => {
  it('should have 10 predefined combos', () => {
    expect(FAIR_ITEM_COMBOS).toHaveLength(10);
  });

  it('should have all combos with 4 items', () => {
    FAIR_ITEM_COMBOS.forEach(combo => {
      expect(combo.tiers).toHaveLength(4);
    });
  });

  it('should have all combos with tiers and total properties', () => {
    FAIR_ITEM_COMBOS.forEach(combo => {
      expect(combo).toHaveProperty('tiers');
      expect(combo).toHaveProperty('total');
      expect(Array.isArray(combo.tiers)).toBe(true);
      expect(typeof combo.total).toBe('number');
    });
  });

  it('should have valid tier values (1-4)', () => {
    FAIR_ITEM_COMBOS.forEach(combo => {
      combo.tiers.forEach(tier => {
        expect(tier).toBeGreaterThanOrEqual(1);
        expect(tier).toBeLessThanOrEqual(4);
      });
    });
  });

  it('should have correct total calculations', () => {
    const tierCosts = { 1: 500, 2: 1250, 3: 3000, 4: 6200 };

    FAIR_ITEM_COMBOS.forEach(combo => {
      const calculatedTotal = combo.tiers.reduce(
        (sum, tier) => sum + tierCosts[tier as 1 | 2 | 3 | 4],
        0
      );
      expect(combo.total).toBe(calculatedTotal);
    });
  });

  it('should have expected combo totals', () => {
    const totals = FAIR_ITEM_COMBOS.map(c => c.total);
    expect(totals).toContain(2000);  // All tier 1
    expect(totals).toContain(5250);  // Mixed low
    expect(totals).toContain(12000); // All tier 3
    expect(totals).toContain(10950); // High value mix
  });
});
