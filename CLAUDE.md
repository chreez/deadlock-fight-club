# Claude Code Instructions

## Project Overview

**Site:** Deadlock Fight Club - Random hero/item generator + strategy guides
**Stack:** React + Vite + TypeScript + Netlify
**Owner:** chreez (Bebop Main)
**Philosophy:** Solo project pragmatism, ship working features fast

**Key Documents:**
- `spec.md` - Full project specification (READ for feature requirements)
- `docs/CONTENT-GUIDELINES.md` - Writing voice, Bebop bias
- `docs/GUIDE-WORKFLOW.md` - YouTube → article pipeline

## Core Principles

1. **Simplicity > Perfection** - Ship working features over perfect architecture
2. **Manual > Automated** - Browser testing over test frameworks
3. **Incremental > Ambitious** - Small commits, deploy often
4. **Essential > Comprehensive** - Minimal dependencies, lean docs

## Framework Choice

**React + Vite** (migrating from Astro)

**Why:**
- Astro dev server unreliable (hydration errors, requires restarts)
- Site is functionally a React SPA
- Vite is fast, simple, works reliably
- Better DX for React development

**Stack:**
- React 19 + React Router
- Vite (build tool)
- TypeScript
- Vitest (minimal smoke tests only)

## CSS and Design System

**CRITICAL: Use the design system, don't override it**

**Files:**
- `src/styles/tokens.css` - Design tokens (colors, spacing, shadows)
- `src/styles/global.css` - Base styles
- `src/styles/components.css` - Component imports
- `src/components/layout/` - Container, Grid, Section

**Rules:**
1. ALWAYS use tokens: `var(--spacing-md)`, `var(--accent-orange)`
2. NEVER hardcode values that exist in tokens
3. Keep component CSS minimal
4. Use layout components instead of custom flexbox

**Example:**
```css
/* Bad */
.my-component {
  padding: 12px;
  color: #ff8c42;
}

/* Good */
.my-component {
  padding: var(--spacing-md);
  color: var(--accent-orange);
}
```

## Documentation Tools

### Ref MCP Server (Primary Documentation Tool)

**ALWAYS use Ref MCP for documentation lookups:**

**Tools:**
- `mcp__Ref__ref_search_documentation` - Search docs by query
- `mcp__Ref__ref_read_url` - Read full content from URL

**Usage:**
```
Search: "React Router lazy loading routes"
Read: Exact URL with #hash from search results
```

**When to use:**
- React, Vite, TypeScript API docs
- Best practices and patterns
- Library usage questions

## Testing Strategy

### Primary: Manual Testing via Browser Tools

**Use:** https://browsertools.agentdesk.ai/

**Process:**
1. Open deployed URL or `http://localhost:5173`
2. Test responsive layouts: 375px (mobile), 768px (tablet), 1200px (desktop)
3. Verify all interactions work (buttons, search, navigation)
4. Check browser console for errors
5. Take screenshots for visual regression

**Benefits:**
- No test infrastructure overhead
- Real browser testing
- Fast iteration cycles
- Visual confirmation

### Secondary: Minimal Smoke Tests

**Maximum 2-3 Vitest tests:**
- Fight Club generator renders
- Counter cheatsheet search works
- All routes load without errors

**Never:**
- Unit tests for every function
- Coverage goals (50%+)
- Test artifacts in git

## Dependencies Policy

**Target:** ~10 packages, ~50-100MB node_modules

**Core Dependencies:**
- `react` + `react-dom` + `react-router-dom`
- `vite`
- `typescript`
- `vitest` (minimal tests only)

**Avoid:**
- Testing frameworks (jest, @testing-library)
- Linters (ESLint)
- Formatters (Prettier)
- Git hooks (Husky, lint-staged)
- Coverage tools
- Enterprise tooling

## Commit Guidelines

- **Semantic prefixes:** feat/fix/docs/refactor/chore
- **Keep commits small** and focused on one thing
- **Clear messages:** "feat: Add sticky footer for action buttons"
- **Stop if 2+ "fix" commits in a row** - reassess approach

**Examples:**
- ✅ `feat: Add hero counter search functionality`
- ✅ `fix: Update item costs to current patch`
- ✅ `refactor: Simplify Fight Club layout to horizontal`
- ❌ `fix stuff` (vague)
- ❌ `fix: various issues` (too broad)

## Failure Indicators

🚩 **STOP and reassess if you see:**

- 2+ "fix" commits in a row
- Dependencies growing beyond 20 packages
- node_modules > 150MB
- Fighting with config files for > 30 minutes
- Build time > 30 seconds
- Vague commit messages
- More than 1 day without deploying

## Decision Framework

**Before adding anything, ask:**

1. **Does this ship features faster?**
   - Yes → Do it minimally
   - No → Defer or skip

2. **Can manual testing handle this?**
   - Yes → Use browsertools.agentdesk.ai
   - No → Consider minimal automation

3. **Is this needed now or later?**
   - Now → Implement
   - Later → Document and skip

## Development Workflow

### Local Development

```bash
npm install
npm run dev        # Starts Vite dev server on :5173
npm run build      # Production build
npm run preview    # Preview production build
```

### Testing

```bash
# Manual testing (PRIMARY)
# 1. Open https://browsertools.agentdesk.ai/
# 2. Navigate to http://localhost:5173
# 3. Test responsive layouts
# 4. Verify functionality
# 5. Check console

# Automated tests (MINIMAL)
npm run test       # Run 2-3 smoke tests
```

### Deployment

```bash
git add -A
git commit -m "feat: descriptive message"
git push origin mainline
# Netlify auto-deploys
```

## V1 Lessons Learned

**What Failed (28-commit Astro sprint):**
- 174 test files for static site
- ESLint + Prettier + Husky overhead
- 30KB single-file components
- 13 documentation files
- 397MB node_modules
- Multiple build failures

**V2 Success Formula:**
- React + Vite for simplicity
- Manual testing with browsertools
- ~10 dependencies
- 5 documentation files max
- ~100MB node_modules
- Incremental progress

## Known Issues

### Item Database

- Some item names outdated (e.g., "Greater Expansion" → "Mystic Reach")
- Costs need updating: 500/1250/3000/6200 → 800/1600/3200/6400
- Missing assets handled with placeholder fallback

### Astro Dev Server (Legacy Issue)

- Dev mode breaks with hydration errors
- Production builds work fine
- Solution: Migrate to React + Vite

## Success Criteria

- ✅ All 4 guides render correctly
- ✅ Fight Club generator works
- ✅ Design system intact
- ✅ All assets load (placeholder fallback)
- ✅ Production build succeeds
- ✅ Deploys to Netlify
- ✅ < 20 dependencies
- ✅ < 150MB node_modules
- ✅ Clean commit history

---

**Last Updated:** 2025-11-04
**Status:** Active - React + Vite migration in progress
