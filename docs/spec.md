---
title: Deadlock Fight Club - Project Specification
version: 2.0
owner: chreez (Bebop Main)
framework: React + Vite + TypeScript
deployment: Netlify
last_updated: 2025-11-04
---

# Deadlock Fight Club - Project Specification

## Overview

A web application for the game Deadlock featuring:
1. **Fight Club Generator** - Random hero/item matchup generator for 1v1 practice
2. **Strategy Guides** - Educational content for Deadlock players
3. **Counter Resources** - Hero counter items and strategies

## Core Features

### 1. Fight Club Generator (`/`)

**Purpose:** Generate balanced 1v1 matchups with randomized heroes and fair item builds

**Functionality:**
- Random hero selection for Player 1 and Player 2
- Fair item distribution using predefined tier combinations
- Items are equally valued (same total souls for both players)
- Horizontal layout: Label → Hero → Items in a row
- Sticky footer with "Generate New Match" and "Copy to Clipboard" buttons
- No auto-generation on load - explicit button press required

**Data Source:**
- `src/data/heroes.ts` - 32 heroes
- `src/data/items.ts` - 157 items across 4 tiers
- `src/data/items.ts` - FAIR_ITEM_COMBOS for balanced matchups

**Asset Requirements:**
- Hero portraits: `/assets/heroes/{hero-name}.png`
- Item icons: `/assets/items/{category}/{item-name}.png`
- Placeholder for missing assets: `/assets/items/placeholder.png`

### 2. Strategy Guides

**Current Guides:**
- `/counter-guide` - Full article on counter-building strategies
- `/counter-cheatsheet` - Quick hero-based counter lookup with search
- `/midgame-guide` - Guide to Deadlock's midgame transition
- `/guides` - Index of all available guides

**Content Philosophy:**
- Bebop bias strongly encouraged (chreez is a Bebop main)
- Conversational, opinionated tone
- Focus on practical application over theory
- Multiple formats: deep-dive articles + quick reference cheatsheets

**Data Source:**
- `src/data/counterData.ts` - Hero-specific counter items (24 heroes mapped)

### 3. Design System

**Colors:**
- Background: `#0a0a0b` (dark), `#1a1a1f` (secondary)
- Accents: `#ff8c42` (orange), `#7c4dff` (purple)
- Text: `#ffffff` (primary), `#a0a0a0` (secondary)
- Category colors: Weapon (orange), Vitality (green), Spirit (purple)

**Spacing:**
- XS: 4px, SM: 8px, MD: 12px, LG: 20px, XL: 30px

**Typography:**
- Font: Segoe UI, system-ui
- Mobile responsive: base 16px → 14px@768px → 13px@480px

**Border Radius:**
- Standard: 4px, Large: 8px, Small: 2px

**Components:**
- Badge (tier, cost, category)
- Button (primary, copy variants)
- SearchBar (for cheatsheet)
- Container (sm: 640px, md: 960px, lg: 1200px)
- Grid (2/3/4 columns, responsive)

## Technical Stack

### Framework Choice: React + Vite

**Why Migrate from Astro:**
- Astro dev server consistently breaks with hydration errors
- Requires server restart for React component changes
- html-escaper module resolution issues
- The site is functionally a React SPA - Astro adds unnecessary complexity

**New Stack:**
- **React 19** - UI library
- **Vite** - Build tool (fast, simple, works)
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Vitest** - Minimal smoke tests only (2-3 tests max)

### Project Structure

```
src/
├── components/
│   ├── core/          # Button, Badge, SearchBar, Header
│   ├── layout/        # Container, Grid, Section
│   └── domain/        # FightClub, CounterCheatsheet, ItemCard, HeroCard
├── data/
│   ├── heroes.ts      # Hero data (32 heroes)
│   ├── items.ts       # Item data (157 items) + fair combos
│   ├── counterData.ts # Counter mappings (24 heroes)
│   └── types.ts       # TypeScript interfaces
├── styles/
│   ├── tokens.css     # Design tokens
│   ├── global.css     # Global styles
│   └── components.css # Component imports
├── utils/
│   ├── assets.ts      # Asset path helpers
│   └── random.ts      # Random selection utilities
├── pages/
│   ├── Home.tsx           # Fight Club Generator
│   ├── CounterGuide.tsx   # Counter article
│   ├── CounterCheatsheet.tsx
│   ├── MidgameGuide.tsx
│   └── Guides.tsx         # Guide index
└── App.tsx           # Router setup
```

### Asset Management

**Total Assets:** ~250 images
- 32 hero portraits
- 157 item icons (organized by category: weapon/vitality/spirit)
- Ability icons (per hero, optional)

**Missing Asset Handling:**
- All images have `onError` handlers
- Fallback to `/assets/items/placeholder.png`

### Deployment

**Platform:** Netlify
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Routing:** SPA with client-side routing

**Netlify Configuration:**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Data Structures

### Hero

```typescript
interface Hero {
  name: string;
  role: 'Carry' | 'Support' | 'Tank' | 'Assassin';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}
```

### Item

```typescript
interface Item {
  name: string;
  category: 'weapon' | 'vitality' | 'spirit';
  tier: 1 | 2 | 3 | 4;
  cost: 800 | 1600 | 3200 | 6400; // Updated costs
}
```

### Counter Item

```typescript
interface CounterItem {
  name: string;
  category: string;
  cost: number;
  effect: string;
  reason?: string;
}
```

### Fair Item Combo

```typescript
interface FairItemCombo {
  tiers: number[];  // e.g., [1, 1, 2, 3]
  total: number;    // Total souls
}
```

## Known Issues & Limitations

### Current Item Database Issues

**Outdated Item Names:**
- "Greater Expansion" in game is "Improved Reach" in database
- Need to verify all 157 items against current Deadlock patch

**Outdated Costs:**
- Database uses old tier costs: 500/1250/3000/6200
- Current costs: 800/1600/3200/6400
- All cost calculations need updating

**Missing Assets:**
- Some items renamed/removed from game
- Placeholder fallback handles missing images
- Need audit of `/assets/items/` vs database

### Astro Migration Issues (V1 Failure)

**28-commit sprint failed due to:**
- Testing infrastructure overkill (174 test files)
- Quality tooling over-engineering (ESLint, Prettier, Husky)
- Single-file bloat (30KB guide files)
- Build configuration struggles
- Documentation explosion (13 files)

**V2 Approach:**
- Migrate to React + Vite for simplicity
- Manual testing with browsertools.agentdesk.ai
- Minimal dependencies (~10 packages)
- 5 documentation files maximum
- Small, focused commits

## Development Workflow

### Testing Strategy

**Primary:** Manual testing via https://browsertools.agentdesk.ai/
- Open deployed URL or localhost
- Test responsive layouts (375px, 768px, 1200px)
- Verify interactions work
- Check console for errors
- Visual regression via screenshots

**Secondary:** Minimal smoke tests (2-3 max)
- Fight Club generator works
- Counter cheatsheet search works
- All routes load

**Never:**
- Unit tests for every function
- 50%+ coverage goals
- Test artifacts in git

### Commit Guidelines

- Semantic prefixes: feat/fix/docs/refactor
- Keep commits small and focused
- Stop if 2+ "fix" commits in a row
- Clear messages: "feat: Add sticky footer for Fight Club buttons"

### Deployment Process

1. Build locally: `npm run build`
2. Test production build: `npx serve dist -l 4321`
3. Commit changes
4. Push to GitHub
5. Netlify auto-deploys from `mainline` branch

## Success Criteria

- ✅ All 4 guides render correctly
- ✅ Fight Club generator works
- ✅ Design system intact
- ✅ All assets load (placeholder fallback works)
- ✅ Production build succeeds
- ✅ Deploys to Netlify
- ✅ < 20 dependencies
- ✅ < 150MB node_modules
- ✅ < 10 test files
- ✅ Clean commit history

## Future Enhancements

**Phase 2 (Post-Migration):**
- Update item database to current Deadlock patch
- Add more hero counters (24/32 currently mapped)
- More guides (laning, objectives, teamfights)
- Ability counter information
- Build calculator

**Phase 3 (Optional):**
- User accounts and saved builds
- Community-submitted counter strategies
- Integration with Deadlock API (if available)

---

**Owner:** chreez (Bebop Main)
**Created:** 2025-11-04
**Status:** Active Specification
