import type { Item, FairItemCombo } from './types';

/**
 * Complete item database - 132 items
 * Organized by category (weapon, vitality, spirit) and tier (1-4)
 */
export const ITEMS: Item[] = [
  // Weapon Items (42)
  // Tier 1
  { name: "Basic Magazine", category: "weapon", tier: 1, cost: 500 },
  { name: "Burst Fire", category: "weapon", tier: 1, cost: 500 },
  { name: "Close Quarters", category: "weapon", tier: 1, cost: 500 },
  { name: "Extra Ammo", category: "weapon", tier: 1, cost: 500 },
  { name: "Headshot Booster", category: "weapon", tier: 1, cost: 500 },
  { name: "High-Velocity Mag", category: "weapon", tier: 1, cost: 500 },
  { name: "Monster Rounds", category: "weapon", tier: 1, cost: 500 },
  { name: "Swift Striker", category: "weapon", tier: 1, cost: 500 },
  // Tier 2
  { name: "Active Reload", category: "weapon", tier: 2, cost: 1250 },
  { name: "Berserker", category: "weapon", tier: 2, cost: 1250 },
  { name: "Fleetfoot", category: "weapon", tier: 2, cost: 1250 },
  { name: "Heroic Aura", category: "weapon", tier: 2, cost: 1250 },
  { name: "Kinetic Dash", category: "weapon", tier: 2, cost: 1250 },
  { name: "Long Range", category: "weapon", tier: 2, cost: 1250 },
  { name: "Melee Charge", category: "weapon", tier: 2, cost: 1250 },
  { name: "Mystic Shot", category: "weapon", tier: 2, cost: 1250 },
  { name: "Restorative Shot", category: "weapon", tier: 2, cost: 1250 },
  { name: "Slowing Bullets", category: "weapon", tier: 2, cost: 1250 },
  { name: "Split Shot", category: "weapon", tier: 2, cost: 1250 },
  // Tier 3
  { name: "Alchemical Fire", category: "weapon", tier: 3, cost: 3000 },
  { name: "Blood Tribute", category: "weapon", tier: 3, cost: 3000 },
  { name: "Burst Fire (T3)", category: "weapon", tier: 3, cost: 3000 },
  { name: "Escalating Resilience", category: "weapon", tier: 3, cost: 3000 },
  { name: "Hunter's Aura", category: "weapon", tier: 3, cost: 3000 },
  { name: "Intensifying Magazine", category: "weapon", tier: 3, cost: 3000 },
  { name: "Point Blank", category: "weapon", tier: 3, cost: 3000 },
  { name: "Pristine Emblem", category: "weapon", tier: 3, cost: 3000 },
  { name: "Sharpshooter", category: "weapon", tier: 3, cost: 3000 },
  { name: "Tesla Bullets", category: "weapon", tier: 3, cost: 3000 },
  { name: "Titanic Magazine", category: "weapon", tier: 3, cost: 3000 },
  { name: "Toxic Bullets", category: "weapon", tier: 3, cost: 3000 },
  { name: "Warp Stone", category: "weapon", tier: 3, cost: 3000 },
  // Tier 4
  { name: "Capacitor", category: "weapon", tier: 4, cost: 6200 },
  { name: "Crippling Headshot", category: "weapon", tier: 4, cost: 6200 },
  { name: "Frenzy", category: "weapon", tier: 4, cost: 6200 },
  { name: "Glass Cannon", category: "weapon", tier: 4, cost: 6200 },
  { name: "Lucky Shot", category: "weapon", tier: 4, cost: 6200 },
  { name: "Ricochet", category: "weapon", tier: 4, cost: 6200 },
  { name: "Shadow Weave", category: "weapon", tier: 4, cost: 6200 },
  { name: "Silencer", category: "weapon", tier: 4, cost: 6200 },
  { name: "Siphon Bullets", category: "weapon", tier: 4, cost: 6200 },
  { name: "Spiritual Overflow", category: "weapon", tier: 4, cost: 6200 },

  // Vitality Items (50)
  // Tier 1
  { name: "Enduring Spirit", category: "vitality", tier: 1, cost: 500 },
  { name: "Extra Health", category: "vitality", tier: 1, cost: 500 },
  { name: "Extra Regen", category: "vitality", tier: 1, cost: 500 },
  { name: "Extra Stamina", category: "vitality", tier: 1, cost: 500 },
  { name: "Healing Rite", category: "vitality", tier: 1, cost: 500 },
  { name: "Melee Lifesteal", category: "vitality", tier: 1, cost: 500 },
  { name: "Sprint Boots", category: "vitality", tier: 1, cost: 500 },
  // Tier 2
  { name: "Battle Vest", category: "vitality", tier: 2, cost: 1250 },
  { name: "Bullet Armor", category: "vitality", tier: 2, cost: 1250 },
  { name: "Bullet Lifesteal", category: "vitality", tier: 2, cost: 1250 },
  { name: "Combat Barrier", category: "vitality", tier: 2, cost: 1250 },
  { name: "Debuff Reducer", category: "vitality", tier: 2, cost: 1250 },
  { name: "Enchanter's Barrier", category: "vitality", tier: 2, cost: 1250 },
  { name: "Enduring Speed", category: "vitality", tier: 2, cost: 1250 },
  { name: "Guardian Ward", category: "vitality", tier: 2, cost: 1250 },
  { name: "Healbane", category: "vitality", tier: 2, cost: 1250 },
  { name: "Healing Booster", category: "vitality", tier: 2, cost: 1250 },
  { name: "Reactive Barrier", category: "vitality", tier: 2, cost: 1250 },
  { name: "Restorative Locket", category: "vitality", tier: 2, cost: 1250 },
  { name: "Return Fire", category: "vitality", tier: 2, cost: 1250 },
  { name: "Spirit Armor", category: "vitality", tier: 2, cost: 1250 },
  { name: "Spirit Lifesteal", category: "vitality", tier: 2, cost: 1250 },
  { name: "Spirit Shielding", category: "vitality", tier: 2, cost: 1250 },
  { name: "Trophy Collector", category: "vitality", tier: 2, cost: 1250 },
  { name: "Weapon Shielding", category: "vitality", tier: 2, cost: 1250 },
  // Tier 3
  { name: "Bullet Resilience", category: "vitality", tier: 3, cost: 3000 },
  { name: "Debuff Remover", category: "vitality", tier: 3, cost: 3000 },
  { name: "Fortitude", category: "vitality", tier: 3, cost: 3000 },
  { name: "Fury Trance", category: "vitality", tier: 3, cost: 3000 },
  { name: "Healing Nova", category: "vitality", tier: 3, cost: 3000 },
  { name: "Improved Bullet Armor", category: "vitality", tier: 3, cost: 3000 },
  { name: "Improved Spirit Armor", category: "vitality", tier: 3, cost: 3000 },
  { name: "Lifestrike", category: "vitality", tier: 3, cost: 3000 },
  { name: "Majestic Leap", category: "vitality", tier: 3, cost: 3000 },
  { name: "Metal Skin", category: "vitality", tier: 3, cost: 3000 },
  { name: "Rescue Beam", category: "vitality", tier: 3, cost: 3000 },
  { name: "Spirit Resilience", category: "vitality", tier: 3, cost: 3000 },
  { name: "Superior Stamina", category: "vitality", tier: 3, cost: 3000 },
  { name: "Veil Walker", category: "vitality", tier: 3, cost: 3000 },
  { name: "Warp Stone (V)", category: "vitality", tier: 3, cost: 3000 },
  // Tier 4
  { name: "Cheat Death", category: "vitality", tier: 4, cost: 6200 },
  { name: "Colossus", category: "vitality", tier: 4, cost: 6200 },
  { name: "Divine Barrier", category: "vitality", tier: 4, cost: 6200 },
  { name: "Inhibitor", category: "vitality", tier: 4, cost: 6200 },
  { name: "Leech", category: "vitality", tier: 4, cost: 6200 },
  { name: "Phantom Strike", category: "vitality", tier: 4, cost: 6200 },
  { name: "Plated Armor", category: "vitality", tier: 4, cost: 6200 },
  { name: "Soul Rebirth", category: "vitality", tier: 4, cost: 6200 },
  { name: "Unstoppable", category: "vitality", tier: 4, cost: 6200 },
  { name: "Vampiric Burst", category: "vitality", tier: 4, cost: 6200 },

  // Spirit Items (40)
  // Tier 1
  { name: "Ammo Scavenger", category: "spirit", tier: 1, cost: 500 },
  { name: "Extra Charge", category: "spirit", tier: 1, cost: 500 },
  { name: "Extra Spirit", category: "spirit", tier: 1, cost: 500 },
  { name: "Mystic Burst", category: "spirit", tier: 1, cost: 500 },
  { name: "Mystic Expansion", category: "spirit", tier: 1, cost: 500 },
  { name: "Mystic Reach", category: "spirit", tier: 1, cost: 500 },
  { name: "Rusted Barrel", category: "spirit", tier: 1, cost: 500 },
  { name: "Spirit Strike", category: "spirit", tier: 1, cost: 500 },
  // Tier 2
  { name: "Bullet Resist Shredder", category: "spirit", tier: 2, cost: 1250 },
  { name: "Cold Front", category: "spirit", tier: 2, cost: 1250 },
  { name: "Compress Cooldown", category: "spirit", tier: 2, cost: 1250 },
  { name: "Decay", category: "spirit", tier: 2, cost: 1250 },
  { name: "Duration Extender", category: "spirit", tier: 2, cost: 1250 },
  { name: "Improved Spirit", category: "spirit", tier: 2, cost: 1250 },
  { name: "Mystic Vulnerability", category: "spirit", tier: 2, cost: 1250 },
  { name: "Quicksilver Reload", category: "spirit", tier: 2, cost: 1250 },
  { name: "Slowing Hex", category: "spirit", tier: 2, cost: 1250 },
  { name: "Spirit Sap", category: "spirit", tier: 2, cost: 1250 },
  { name: "Suppressor", category: "spirit", tier: 2, cost: 1250 },
  // Tier 3
  { name: "Disarming Hex", category: "spirit", tier: 3, cost: 3000 },
  { name: "Greater Expansion", category: "spirit", tier: 3, cost: 3000 },
  { name: "Improved Burst", category: "spirit", tier: 3, cost: 3000 },
  { name: "Improved Reach", category: "spirit", tier: 3, cost: 3000 },
  { name: "Knockdown", category: "spirit", tier: 3, cost: 3000 },
  { name: "Mystic Slow", category: "spirit", tier: 3, cost: 3000 },
  { name: "Rapid Recharge", category: "spirit", tier: 3, cost: 3000 },
  { name: "Silence Wave", category: "spirit", tier: 3, cost: 3000 },
  { name: "Spirit Snatch", category: "spirit", tier: 3, cost: 3000 },
  { name: "Superior Cooldown", category: "spirit", tier: 3, cost: 3000 },
  { name: "Superior Duration", category: "spirit", tier: 3, cost: 3000 },
  { name: "Surge of Power", category: "spirit", tier: 3, cost: 3000 },
  { name: "Torment Pulse", category: "spirit", tier: 3, cost: 3000 },
  // Tier 4
  { name: "Arctic Blast", category: "spirit", tier: 4, cost: 6200 },
  { name: "Boundless Spirit", category: "spirit", tier: 4, cost: 6200 },
  { name: "Curse", category: "spirit", tier: 4, cost: 6200 },
  { name: "Echo Shard", category: "spirit", tier: 4, cost: 6200 },
  { name: "Escalating Exposure", category: "spirit", tier: 4, cost: 6200 },
  { name: "Ethereal Shift", category: "spirit", tier: 4, cost: 6200 },
  { name: "Magic Carpet", category: "spirit", tier: 4, cost: 6200 },
  { name: "Refresher", category: "spirit", tier: 4, cost: 6200 }
];

/**
 * Predefined fair item combinations for balanced matchups
 * All combinations total exactly the same souls for both players
 */
export const FAIR_ITEM_COMBOS: FairItemCombo[] = [
  { tiers: [1, 1, 2, 3], total: 5250 }, // 500 + 500 + 1250 + 3000 = 5250
  { tiers: [1, 2, 2, 2], total: 4250 }, // 500 + 1250 + 1250 + 1250 = 4250
  { tiers: [1, 1, 1, 3], total: 4500 }, // 500 + 500 + 500 + 3000 = 4500
  { tiers: [2, 2, 3, 3], total: 8500 }, // 1250 + 1250 + 3000 + 3000 = 8500
  { tiers: [1, 1, 1, 4], total: 7700 }, // 500 + 500 + 500 + 6200 = 7700
  { tiers: [1, 2, 3, 4], total: 10950 }, // 500 + 1250 + 3000 + 6200 = 10950
  { tiers: [2, 2, 2, 3], total: 6750 }, // 1250 + 1250 + 1250 + 3000 = 6750
  { tiers: [1, 1, 2, 2], total: 3500 }, // 500 + 500 + 1250 + 1250 = 3500
  { tiers: [1, 1, 1, 1], total: 2000 }, // 500 + 500 + 500 + 500 = 2000
  { tiers: [3, 3, 3, 3], total: 12000 } // 3000 + 3000 + 3000 + 3000 = 12000
];
