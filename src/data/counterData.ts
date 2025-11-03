import type { HeroCounters } from './types';

/**
 * Hero-centric counter item data
 * Maps each hero to their specific counter items with costs, categories, and effects
 *
 * Note: Some heroes may not have entries if no specific counters are documented
 */
export const HERO_COUNTERS: HeroCounters = {
  "Abrams": [
    { name: "Reactive Barrier", cost: 1600, category: "Passive", effect: "Auto-barrier on CC (Shoulder Charge)" },
    { name: "Debuff Reducer", cost: 1250, category: "Passive", effect: "Reduces stun duration" },
    { name: "Slowing Hex", cost: 1250, category: "Active", effect: "Stop his chase" },
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" }
  ],
  "Bebop": [
    { name: "Reactive Barrier", cost: 1600, category: "Passive", effect: "Auto-barrier on Hook" },
    { name: "Counterspell", cost: 3000, category: "Active", effect: "Parry Hook, Bomb, Uppercut" },
    { name: "Knockdown", cost: 3000, category: "Active", effect: "Cancel his ultimate" }
  ],
  "Billy": [
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" },
    { name: "Toxic Bullets", cost: 3000, category: "Anti-Heal", effect: "Bleed + 30% heal reduction" }
  ],
  "Calico": [
    { name: "Counterspell", cost: 3000, category: "Active", effect: "Parry bombs" },
    { name: "Silence Wave", cost: 3000, category: "Active", effect: "Suppress abilities" },
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" }
  ],
  "The Doorman": [
    { name: "Reactive Barrier", cost: 1600, category: "Passive", effect: "Auto-barrier on Cart Combo" }
  ],
  "Drifter": [
    { name: "Divine Barrier", cost: 6200, category: "Bonus", effect: "Cleanse ultimate" }
  ],
  "Dynamo": [
    { name: "Curse", cost: 6200, category: "Active", effect: "Interrupt his ultimate" },
    { name: "Knockdown", cost: 3000, category: "Active", effect: "Cancel ultimate" }
  ],
  "Grey Talon": [
    { name: "Improved Spirit Armor", cost: 3000, category: "Passive", effect: "Best spirit resist - makes him useless" },
    { name: "Counterspell", cost: 3000, category: "Active", effect: "Parry ultimate" }
  ],
  "Haze": [
    { name: "Suppressor", cost: 1250, category: "Bonus", effect: "-30% fire rate" },
    { name: "Return Fire", cost: 1250, category: "Bonus", effect: "Reflect bullets" },
    { name: "Metal Skin", cost: 3000, category: "Bonus", effect: "5s bullet immunity" },
    { name: "Improved Bullet Armor", cost: 3000, category: "Passive", effect: "Bullet resist + fire rate" }
  ],
  "Holliday": [
    { name: "Debuff Reducer", cost: 1250, category: "Passive", effect: "Reduces Lasso duration" },
    { name: "Counterspell", cost: 3000, category: "Active", effect: "Parry Lasso" }
  ],
  "Infernus": [
    { name: "Plated Armor", cost: 6200, category: "Passive", effect: "Deflects burn build-up" }
  ],
  "Ivy": [
    { name: "Slowing Hex", cost: 1250, category: "Active", effect: "Stop ultimate" }
  ],
  "Kelvin": [
    { name: "Enduring Speed", cost: 1250, category: "Bonus", effect: "30% slow resist" },
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" }
  ],
  "Lady Geist": [
    { name: "Silence Wave", cost: 3000, category: "Active", effect: "Suppress low HP ultimate" },
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" }
  ],
  "Lash": [
    { name: "Counterspell", cost: 3000, category: "Active", effect: "Parry Slam" }
  ],
  "Mirage": [
    { name: "Slowing Hex", cost: 1250, category: "Active", effect: "Stop bat escape" },
    { name: "Decay", cost: 1250, category: "Anti-Heal", effect: "70% heal reduction + massive damage" },
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" }
  ],
  "Mo & Krill": [
    { name: "Debuff Reducer", cost: 1250, category: "Passive", effect: "Reduces ultimate duration" },
    { name: "Knockdown", cost: 3000, category: "Active", effect: "Cancel ultimate + stop burrowing" },
    { name: "Toxic Bullets", cost: 3000, category: "Anti-Heal", effect: "% max HP bleed damage" }
  ],
  "Paige": [
    { name: "Counterspell", cost: 3000, category: "Active", effect: "Parry ultimate" },
    { name: "Capacitor", cost: 6200, category: "Bonus", effect: "Remove shields" }
  ],
  "Pocket": [
    { name: "Divine Barrier", cost: 6200, category: "Bonus", effect: "Cleanse ultimate" }
  ],
  "Seven": [
    { name: "Capacitor", cost: 6200, category: "Bonus", effect: "Remove Power Surge buff" }
  ],
  "Shiv": [
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" },
    { name: "Toxic Bullets", cost: 3000, category: "Anti-Heal", effect: "Bleed + 30% heal reduction" }
  ],
  "Victor": [
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction (early)" },
    { name: "Crippling Headshot", cost: 6200, category: "Anti-Heal", effect: "-18% resists + 30% heal reduction" },
    { name: "Inhibitor", cost: 6200, category: "Anti-Heal", effect: "35% heal reduction + 35% damage reduction" }
  ],
  "Vindicta": [
    { name: "Improved Spirit Armor", cost: 3000, category: "Passive", effect: "Protection against snipes" }
  ],
  "Viscous": [
    { name: "Reactive Barrier", cost: 1250, category: "Active", effect: "Parry Puddle Punch and return damage" },
    { name: "Capacitor", cost: 6200, category: "Bonus", effect: "Remove cube buffs" }
  ],
  "Wraith": [
    { name: "Suppressor", cost: 1250, category: "Bonus", effect: "-30% fire rate" }
  ],
  "Yamato": [
    { name: "Silence Wave", cost: 3000, category: "Active", effect: "Suppress low HP ultimate" },
    { name: "Healbane", cost: 1250, category: "Anti-Heal", effect: "35% heal reduction" }
  ]
};
