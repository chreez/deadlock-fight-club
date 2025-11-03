import { describe, it, expect } from 'vitest';
import { toAssetName, getHeroPortrait, getItemIcon, getAbilityIcon } from './assets';

describe('asset utilities', () => {
  describe('toAssetName', () => {
    it('should convert name to kebab-case', () => {
      expect(toAssetName('Lady Geist')).toBe('lady-geist');
      expect(toAssetName('Mo & Krill')).toBe('mo-and-krill');
      expect(toAssetName('Grey Talon')).toBe('grey-talon');
    });

    it('should remove parentheses', () => {
      expect(toAssetName('Test (Item)')).toBe('test-item');
    });

    it('should remove apostrophes', () => {
      expect(toAssetName("Mo's Item")).toBe('mos-item');
    });

    it('should replace & with and', () => {
      expect(toAssetName('Rock & Roll')).toBe('rock-and-roll');
    });

    it('should handle multiple spaces', () => {
      expect(toAssetName('Multiple   Spaces')).toBe('multiple-spaces');
    });
  });

  describe('getHeroPortrait', () => {
    it('should generate correct path for hero', () => {
      const path = getHeroPortrait('Bebop');
      expect(path).toBe('/assets/heroes/bebop.png');
    });

    it('should use provided asset name if given', () => {
      const path = getHeroPortrait('Unknown Hero', 'generic.png');
      expect(path).toBe('/assets/heroes/generic.png');
    });

    it('should handle heroes with special characters', () => {
      const path = getHeroPortrait('Mo & Krill');
      expect(path).toBe('/assets/heroes/mo-and-krill.png');
    });
  });

  describe('getItemIcon', () => {
    it('should generate correct path for weapon item', () => {
      const path = getItemIcon('Reactive Barrier', 'weapon');
      expect(path).toBe('/assets/items/weapon/reactive-barrier.png');
    });

    it('should generate correct path for vitality item', () => {
      const path = getItemIcon('Extra Health', 'vitality');
      expect(path).toBe('/assets/items/vitality/extra-health.png');
    });

    it('should generate correct path for spirit item', () => {
      const path = getItemIcon('Mystic Shot', 'spirit');
      expect(path).toBe('/assets/items/spirit/mystic-shot.png');
    });

    it('should handle items with special characters', () => {
      const path = getItemIcon("Hunter's Aura", 'weapon');
      expect(path).toBe('/assets/items/weapon/hunters-aura.png');
    });
  });

  describe('getAbilityIcon', () => {
    it('should generate correct path for ability', () => {
      const path = getAbilityIcon('Bebop', 'Hyper Beam');
      expect(path).toBe('/assets/abilities/bebop/hyper-beam.png');
    });

    it('should handle hero names with special characters', () => {
      const path = getAbilityIcon('Mo & Krill', 'Burrow');
      expect(path).toBe('/assets/abilities/mo-and-krill/burrow.png');
    });

    it('should handle ability names with special characters', () => {
      const path = getAbilityIcon('Bebop', 'Hook (Q)');
      expect(path).toBe('/assets/abilities/bebop/hook-q.png');
    });
  });
});
