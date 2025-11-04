/**
 * Data type definitions for Deadlock Fight Club
 */

export interface Hero {
  name: string;
  asset: string;
}

export interface Item {
  name: string;
  category: 'weapon' | 'vitality' | 'spirit';
  tier: 1 | 2 | 3 | 4;
  cost: number;
}

export interface CounterItem {
  name: string;
  cost: number;
  category: string;
  effect: string;
  reason?: string;
}

export interface HeroCounters {
  [heroName: string]: CounterItem[];
}

export interface FairItemCombo {
  tiers: number[];
  total: number;
}

export interface Ability {
  heroName: string;
  abilityName: string;
  assetPath: string;
}
