import { describe, it, expect } from 'vitest';
import { toAssetName, getHeroPortrait, getItemIcon, getAbilityIcon, getHeroAbilities, handleImageError } from './assets';

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

  describe('getHeroAbilities', () => {
    it('should generate array of ability icon paths', () => {
      const abilities = ['Hook', 'Bomb', 'Uppercut', 'Hyper Beam'];
      const paths = getHeroAbilities('Bebop', abilities);

      expect(paths).toHaveLength(4);
      expect(paths[0]).toBe('/assets/abilities/bebop/hook.png');
      expect(paths[1]).toBe('/assets/abilities/bebop/bomb.png');
      expect(paths[2]).toBe('/assets/abilities/bebop/uppercut.png');
      expect(paths[3]).toBe('/assets/abilities/bebop/hyper-beam.png');
    });

    it('should handle empty array', () => {
      const paths = getHeroAbilities('Bebop', []);
      expect(paths).toEqual([]);
    });

    it('should handle hero with special characters', () => {
      const abilities = ['Burrow', 'Scurry'];
      const paths = getHeroAbilities('Mo & Krill', abilities);

      expect(paths[0]).toBe('/assets/abilities/mo-and-krill/burrow.png');
      expect(paths[1]).toBe('/assets/abilities/mo-and-krill/scurry.png');
    });
  });

  describe('handleImageError', () => {
    it('should hide image element on error', () => {
      const img = document.createElement('img');
      const event = new Event('error');
      Object.defineProperty(event, 'target', { value: img, writable: false });

      handleImageError(event);

      expect(img.style.display).toBe('none');
    });
  });
});
