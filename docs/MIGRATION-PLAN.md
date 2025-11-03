# Astro Migration Plan - Deadlock Fight Club

## Project Overview

Migrating the Deadlock Fight Club website from static HTML to Astro + React for:

- Component-based architecture with reusable UI elements
- Type-safe development with TypeScript
- Consistent design system and quality standards
- Asset integration (hero portraits, item icons, ability icons)
- Scalable content creation workflow

## Current Status (as of 2025-11-03)

### ✅ Completed Phases

#### Phase 1: Foundation (Commit 028daa1)

- ✅ Deleted 8 unused HTML files (variants, tests, legacy)
- ✅ Deleted unused shell scripts
- ✅ Initialized Astro v5.15.3 with React 19 + TypeScript (strict mode)
- ✅ Installed Netlify adapter
- ✅ Moved HTML files to archive/ for reference
- ✅ Moved assets/ to public/assets/ (~250+ assets)
- ✅ Updated .gitignore for node_modules, dist, .astro

#### Phase 2: Data Layer (Commit 7370d0d)

- ✅ Created TypeScript data types (Hero, Item, CounterItem, etc.)
- ✅ Extracted 32 heroes to src/data/heroes.ts
- ✅ Extracted 132 items to src/data/items.ts
- ✅ Created 10 fair item combos for matchmaking
- ✅ Extracted counter data for 24 heroes to src/data/counterData.ts
- ✅ Created randomization utilities (Fisher-Yates shuffle, getRandomElement)
- ✅ Created asset path utilities (getHeroPortrait, getItemIcon, getAbilityIcon)

#### Phase 3: Design System (Commit 17e95a6)

- ✅ Created CSS design tokens in src/styles/tokens.css
  - Colors: backgrounds, accents, text, categories, tiers
  - Spacing: xs, sm, md, lg, xl
  - Border radius: default, lg, sm
  - Transitions: fast, default, slow
  - Shadows: sm, md, lg, glow variants
- ✅ Created global CSS reset and base styles
- ✅ Created TypeScript theme constants in src/styles/theme.ts
  - Color exports for programmatic access
  - Helper functions: getTierColor, getCategoryColor
  - Breakpoints: mobile (480px), tablet (768px), desktop (1200px)

**Progress: ~40% complete (3/8 major phases)**

---

## 📋 Remaining Execution Plan

### Phase 4: Core Component Library

**Location:** `src/components/core/`

Components to create:

1. **Button.tsx**
   - Variants: primary, secondary, copy
   - Props: variant, onClick, children, disabled, icon
   - Styling: Uses accent-orange/purple, transitions, hover states

2. **Badge.tsx**
   - Types: tier, cost, category
   - Props: type, value, color
   - Examples: Tier badges (1-4), cost badges ($500), category badges (Weapon/Vitality/Spirit)

3. **SearchBar.tsx**
   - Props: placeholder, value, onChange, onClear
   - Features: Search icon, clear button, debounced input
   - Styling: Dark theme, accent border on focus

4. **Header.tsx**
   - Props: title, showBackLink, backHref
   - Features: Back navigation arrow, centered title
   - Responsive: Adjusts padding on mobile

5. **FooterNav.tsx**
   - Props: currentPage
   - Links: Fight Club, Counter Guide, Counter Cheatsheet
   - Styling: Fixed bottom on mobile, inline on desktop
   - Highlights active page

**Commit Message:** `feat: Create core component library (Button, Badge, SearchBar, Header, FooterNav)`

---

### Phase 5: Domain Component Library

**Location:** `src/components/domain/`

Components to create:

1. **HeroCard.tsx**
   - Props: hero (Hero type), onClick, selected
   - Features: Hero portrait, name, selection highlight
   - Styling: Card with hover effect, selected state with accent border

2. **ItemCard.tsx**
   - Props: item (Item type), showCost, showCategory, onClick
   - Features: Item icon, name, tier badge, cost badge, category badge
   - Styling: Tier color coding, category color accents

3. **AbilityIcon.tsx**
   - Props: heroName, abilityName, size
   - Features: Ability icon with tooltip
   - Fallback: Shows placeholder if icon missing

4. **CounterList.tsx**
   - Props: counters (CounterItem[]), heroName
   - Features: List of counter items grouped by category
   - Shows: Item name, cost, category, effect, reason

5. **LoadoutDisplay.tsx**
   - Props: items (Item[]), totalCost
   - Features: Grid of 6 items with tier badges
   - Shows total cost and tier distribution

**Commit Message:** `feat: Create domain component library (HeroCard, ItemCard, AbilityIcon, CounterList, LoadoutDisplay)`

---

### Phase 6: Layout Component Library

**Location:** `src/components/layout/`

Components to create:

1. **Container.tsx**
   - Props: maxWidth, padding, children
   - Features: Responsive container with max-width constraint
   - Default: 1200px max-width, centered

2. **Grid.tsx**
   - Props: columns, gap, children, responsive
   - Features: CSS Grid layout with responsive breakpoints
   - Variants: 2-col, 3-col, 4-col, auto-fill

3. **TipBox.tsx**
   - Props: title, children, variant (info/warning/success)
   - Features: Bordered box with icon and colored accent
   - Styling: Background with glow effect

4. **Accordion.tsx**
   - Props: title, children, defaultOpen
   - Features: Collapsible section with smooth animation
   - Styling: Arrow indicator, border highlight

5. **Section.tsx**
   - Props: id, title, children
   - Features: Page section with heading and spacing
   - Anchor: Linkable section ID

**Commit Message:** `feat: Create layout component library (Container, Grid, TipBox, Accordion, Section)`

---

### Phase 7: Page Migrations

#### 7.1: Fight Club Page (index)

**File:** `src/pages/index.astro`

**React Component:** `src/components/FightClub.tsx` (client:load)

Features to implement:

- Hero selection grid (2 heroes)
- Item loadout generator (6 items each)
- Fair combo selection dropdown
- Randomize button
- Copy loadout buttons
- Responsive layout (stacked on mobile)

**Data Integration:**

- Import HEROES from src/data/heroes.ts
- Import ITEMS, FAIR_ITEM_COMBOS from src/data/items.ts
- Use shuffle() from src/utils/random.ts
- Use getHeroPortrait(), getItemIcon() from src/utils/assets.ts

**Styling:**

- Use global styles and tokens
- Gradient background
- Card-based layout with shadows
- Mobile-first responsive design

**Commit Message:** `feat: Migrate Fight Club to Astro with React generator`

---

#### 7.2: Counter Guide Page

**File:** `src/pages/counter-guide.astro`

Features to implement:

- Hero counter sections (24 heroes)
- Accordion-style or card-based layout
- Hero portraits in section headers
- CounterList component for each hero
- Item icons for counter items
- Search/filter by hero name
- Table of contents navigation

**Data Integration:**

- Import HERO_COUNTERS from src/data/counterData.ts
- Import HEROES from src/data/heroes.ts
- Use getHeroPortrait(), getItemIcon() from src/utils/assets.ts

**Asset Integration:**

- Hero portraits in headers
- Item icons in counter lists
- Ability icons where relevant

**Commit Message:** `feat: Migrate counter-guide with asset integration`

---

#### 7.3: Counter Cheatsheet Page

**File:** `src/pages/counter-cheatsheet.astro`

Features to implement:

- Searchable hero grid
- Quick lookup cards
- Hero portraits
- Top 3 counter items per hero
- Minimal design for quick reference
- Filter by hero name
- Mobile-optimized layout

**Data Integration:**

- Import HERO_COUNTERS from src/data/counterData.ts
- Limit to top 3 counters per hero
- Use getHeroPortrait(), getItemIcon() from src/utils/assets.ts

**Asset Integration:**

- Hero portraits in grid
- Item icons for top counters

**Commit Message:** `feat: Migrate counter-cheatsheet with asset integration`

---

### Phase 8: Documentation & Guidelines

#### 8.1: Update Content Guidelines

**File:** `docs/guides/content-guidelines.md` (update existing)

Additions needed:

- Asset integration rules
  - When to use hero portraits
  - When to use item icons
  - When to use ability icons
  - Image loading and error handling
- Component usage guidelines
  - Which components to use for common patterns
  - When to create new components
  - Component composition examples
- Naming conventions
  - Asset file naming (kebab-case)
  - Component naming (PascalCase)
  - Data file naming

**Commit Message:** `docs: Update content guidelines with asset integration and component rules`

---

#### 8.2: Create Component Guidelines

**File:** `docs/guides/component-guidelines.md` (new)

Content:

- Component structure standards
- Props interface patterns
- TypeScript typing best practices
- Styling conventions (CSS-in-JS vs external CSS)
- Accessibility requirements
- Testing expectations
- File organization

**Commit Message:** `docs: Create component guidelines document`

---

#### 8.3: Create Component Catalog

**File:** `docs/guides/component-catalog.md` (new)

Content:

- Complete list of all components
- Props documentation for each
- Usage examples
- Visual examples (screenshots or code)
- When to use each component
- Component combinations

**Commit Message:** `docs: Create component catalog documentation`

---

### Phase 9: Deployment Configuration

#### 9.1: Update Netlify Configuration

**File:** `netlify.toml` (update/create)

Required settings:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**File:** `.gitignore` (verify)

Ensure these are ignored:

- node_modules/
- dist/
- .astro/
- .netlify/

**Commit Message:** `chore: Update Netlify configuration for Astro deployment`

---

### Phase 10: Testing & Production Build

**Tasks:**

1. **Functionality Testing**
   - Test Fight Club randomization (100+ iterations)
   - Test hero selection edge cases (same hero, all combos)
   - Test item loadout fairness (tier distribution)
   - Test copy-to-clipboard functionality
   - Test search/filter on cheatsheet
   - Test accordion behavior on guide
   - Test all navigation links

2. **Visual Testing**
   - Verify all hero portraits load correctly
   - Verify all item icons load correctly
   - Test on multiple screen sizes:
     - Mobile (375px, 414px)
     - Tablet (768px, 1024px)
     - Desktop (1200px, 1920px)
   - Verify dark theme consistency
   - Check color contrast for accessibility

3. **Performance Testing**
   - Run Lighthouse audit
   - Check bundle size (should be minimal with Astro)
   - Verify image loading performance
   - Test on slow 3G connection

4. **Production Build**

   ```bash
   npm run build
   npm run preview
   ```

   - Verify dist/ directory structure
   - Test preview on localhost
   - Check for console errors
   - Verify asset paths resolve correctly

**Commit Message:** `test: Complete functionality, visual, and performance testing`

---

## Quick Reference

### File Structure

```
deadlock-fight-club/
├── src/
│   ├── components/
│   │   ├── core/          # Button, Badge, SearchBar, Header, FooterNav
│   │   ├── domain/        # HeroCard, ItemCard, AbilityIcon, CounterList
│   │   └── layout/        # Container, Grid, TipBox, Accordion, Section
│   ├── data/
│   │   ├── heroes.ts      # 32 heroes
│   │   ├── items.ts       # 132 items + fair combos
│   │   ├── counterData.ts # Counter mappings
│   │   └── types.ts       # TypeScript interfaces
│   ├── pages/
│   │   ├── index.astro           # Fight Club
│   │   ├── counter-guide.astro   # Full guide
│   │   └── counter-cheatsheet.astro # Quick lookup
│   ├── styles/
│   │   ├── tokens.css     # Design tokens
│   │   ├── global.css     # Base styles
│   │   └── theme.ts       # TS constants
│   └── utils/
│       ├── assets.ts      # Asset path helpers
│       └── random.ts      # Randomization
├── public/
│   └── assets/            # ~250+ images
│       ├── heroes/        # Hero portraits
│       ├── items/         # Item icons (weapon/vitality/spirit)
│       └── abilities/     # Ability icons
├── archive/               # Original HTML files
└── docs/
    └── guides/            # Documentation
```

### Commands

```bash
npm run dev      # Development server (localhost:4321)
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

### Completed Commits

1. `028daa1` - Foundation: Astro + React + Netlify, cleanup
2. `7370d0d` - Data layer: Heroes, items, counters, utilities
3. `17e95a6` - Design system: Tokens, global styles, theme

### Next Commits (Planned)

4. Core component library
5. Domain component library
6. Layout component library
7. Fight Club page migration
8. Counter guide migration
9. Counter cheatsheet migration
10. Documentation updates (3 commits)
11. Netlify configuration
12. Testing and production build

---

## Notes

### Why Astro was chosen:

- Best for content-heavy static sites
- Ships zero JavaScript by default (partial hydration)
- Perfect for hybrid approach (static guides + interactive Fight Club)
- Native Netlify support
- Can use React only where needed

### Migration strategy:

- Keep old HTML in archive/ for reference
- Build new Astro versions in parallel
- Deploy with route swapping one at a time
- Maintain both until fully tested

### Known Issues:

- Default index.astro shows "Astro" heading (expected, not migrated yet)
- Build succeeds but pages need to be created
- Dev server works at http://localhost:4321
