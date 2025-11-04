# V2 Export Archive

This directory contains all preserved content from the v1 Astro migration (28-commit sprint) for porting to v2-fresh-start branch.

## Contents

### Code Assets
- `pages/` - All 7 Astro page files (Fight Club, guides, cheatsheet)
- `components/` - All React components (core, domain, layout)
- `styles/` - Design system (tokens.css, global.css, components.css, theme.ts)
- `data/` - Data layer (heroes.ts, items.ts, counterData.ts, types.ts)
- `public/` - All assets (~250+ hero/item images)
- `utils/` - Utility functions (assets.ts, random.ts)

### Documentation (Condensed from 13 → 4 files)

**New V2 Docs:**
1. `docs/LESSONS-LEARNED.md` - V1 failures and v2 approach (NEW)
2. `docs/CLAUDE-V2.md` - Streamlined Claude Code instructions
3. `docs/CONTENT-GUIDELINES.md` - Merged blog-post-standards + content-guidelines
4. `docs/GUIDE-WORKFLOW.md` - Condensed from 523 lines to ~150 lines

**Preserved:**
- `docs/guides/` - All source transcripts and structured data
- `docs/intent-deadlock-fight-club.md` - Project inception and vision

**Archived (in v1 branch only):**
- `.claude/agents/` - Agent configs (game-data-structurer, integration-architect, etc.)
- `.claude/blog-post-template.md` - Verbose template
- `.claude/blog-post-standards.md` - Merged into CONTENT-GUIDELINES.md
- `docs/MIGRATION-PLAN.md` - V1 execution plan
- `docs/TESTING-METHODOLOGY.md` - Over-engineered testing approach

## What Changed

### Documentation Savings
- **Before:** 13 documentation files, 523-line guide-workflow.md
- **After:** 4 essential documentation files, 150-line guide-workflow.md
- **Reduction:** 69% fewer files, 70% less verbose

### Key Lessons Extracted
- Testing overkill (174 test files → 0-3 smoke tests)
- Quality tooling over-engineering (ESLint/Prettier/Husky → TypeScript only)
- Single-file bloat (30KB midgame-guide.astro → separate pages)
- Documentation explosion (523 lines → 150 lines)
- Build config struggles (too many features at once → incremental)

## Usage

This directory will be used as the source for porting content to the v2-fresh-start branch:

1. Initialize fresh Astro project on v2-fresh-start
2. Copy design system from `styles/`
3. Copy data layer from `data/`
4. Copy assets from `public/`
5. Rebuild components (simpler versions)
6. Port guide pages (as separate routes)
7. Copy condensed documentation to root

## Do Not Copy

- Any test files (`__tests__/`, test config)
- ESLint/Prettier config
- Husky/lint-staged config
- Verbose documentation (archived in v1 branch)
- Build artifacts

---

**Created:** 2025-11-03
**Purpose:** Staging area for v2 fresh start
**Status:** Ready for porting
