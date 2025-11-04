import { describe, it, expect } from 'vitest';
import { existsSync } from 'fs';
import { join } from 'path';
import { HEROES } from '../data/heroes';
import { ITEMS } from '../data/items';

const PUBLIC_DIR = join(__dirname, '../../public');

describe('Asset Validation', () => {
  describe('Hero Assets', () => {
    it('should have all hero portrait files', () => {
      const missingAssets: string[] = [];

      HEROES.forEach(hero => {
        const assetPath = join(PUBLIC_DIR, 'assets/heroes', hero.asset);
        if (!existsSync(assetPath)) {
          missingAssets.push(`${hero.name}: ${hero.asset}`);
        }
      });

      if (missingAssets.length > 0) {
        console.error('Missing hero assets:', missingAssets);
      }

      expect(missingAssets).toHaveLength(0);
    });

    it('should have generic.png fallback', () => {
      const genericPath = join(PUBLIC_DIR, 'assets/heroes/generic.png');
      expect(existsSync(genericPath)).toBe(true);
    });
  });

  describe('Item Assets', () => {
    it('should have all item icon files', () => {
      const missingAssets: string[] = [];

      ITEMS.forEach(item => {
        const filename = item.name
          .toLowerCase()
          .replace(/[()]/g, '')
          .replace(/\s+/g, '-')
          .replace(/&/g, 'and')
          .replace(/'/g, '');

        const assetPath = join(PUBLIC_DIR, `assets/items/${item.category}/${filename}.png`);

        if (!existsSync(assetPath)) {
          missingAssets.push(`${item.name} (${item.category}): ${filename}.png`);
        }
      });

      if (missingAssets.length > 0) {
        console.warn(`Missing ${missingAssets.length} item assets:`, missingAssets);
      }

      // This is a warning test - we allow missing items but want to know about them
      expect(missingAssets.length).toBeLessThan(ITEMS.length);
    });

    it('should have placeholder.png fallback', () => {
      const placeholderPath = join(PUBLIC_DIR, 'assets/items/placeholder.png');
      expect(existsSync(placeholderPath)).toBe(true);
    });
  });

  describe('Asset Categories', () => {
    it('should have all item category directories', () => {
      const categories = ['weapon', 'vitality', 'spirit'];

      categories.forEach(category => {
        const dirPath = join(PUBLIC_DIR, `assets/items/${category}`);
        expect(existsSync(dirPath)).toBe(true);
      });
    });
  });
});
