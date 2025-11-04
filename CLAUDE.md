# Claude Code Instructions - V2

## Core Principles

- **Simplicity > Perfection**: Ship working guides over perfect architecture
- **Manual > Automated**: Chrome DevTools MCP testing over test frameworks
- **Incremental > Ambitious**: Small commits, validate often, deploy early
- **Essential > Comprehensive**: 5 docs max, lean context, clear decisions

## Critical Files

- `docs/LESSONS-LEARNED.md` - V1 failures, V2 approach (READ FIRST before major decisions)
- `docs/CONTENT-GUIDELINES.md` - Writing voice, Bebop bias, design patterns
- `docs/GUIDE-WORKFLOW.md` - YouTube → article → page pipeline
- `docs/guides/` - Source transcripts and structured data

## Project Context

**Site:** Deadlock Fight Club - Random hero/item generator + strategy guides
**Stack:** Astro + React + TypeScript + Netlify (minimal dependencies only)
**Owner:** chreez (Bebop Main)
**Philosophy:** Solo project pragmatism, optimize for iteration speed

## Commit Guidelines

- Create logical commits between each step
- If 2+ "fix" commits in a row: STOP and reassess
- Commit messages: clear, semantic (feat/fix/docs/refactor)
- Keep commits small and focused

## CSS and Design System

**CRITICAL: Use the design system, don't override it**

- `src/styles/tokens.css` - Design tokens (colors, spacing, shadows, etc.)
- `src/styles/global.css` - Global base styles
- `src/styles/components.css` - Component style imports
- `src/components/layout/` - Layout utilities (Container, Grid, Section)

**Rules:**
1. **ALWAYS use design system tokens** (`var(--spacing-md)`, `var(--accent-orange)`, etc.)
2. **NEVER hardcode values** that exist in tokens (12px → `var(--spacing-md)`)
3. **Keep component CSS minimal** - only styles specific to that component
4. **Use layout components** - Container, Grid, Section instead of custom flexbox
5. **No duplicate spacing/color definitions** - if it's in tokens, use tokens

**Before writing CSS:**
- Check tokens.css for available values
- Check layout components for existing patterns
- Ask: "Can I use design system classes instead?"

**Bad:**
```css
.my-component {
  padding: 16px;
  color: #ff8c42;
  gap: 12px;
  max-width: 1200px;
}
```

**Good:**
```css
.my-component {
  padding: var(--spacing-md);
  color: var(--accent-orange);
  gap: var(--spacing-md);
  max-width: var(--container-max-width);
}
```

## MCP Server Usage

### Ref MCP Server (Documentation Search)

**Purpose:** Search and retrieve framework/library documentation

**When to use:**
- Looking up Astro, React, TypeScript API docs
- Finding best practices for web technologies
- JavaScript/TypeScript patterns
- CSS/HTML standards

**Tools:**
- `mcp__Ref__ref_search_documentation` - Search by query (include framework names)
- `mcp__Ref__ref_read_url` - Read full content (use EXACT url with #hash)

**Example:** Search "Astro React integration client directives" → Read specific URLs

### Chrome DevTools MCP Server (Browser Automation)

**Purpose:** Manual testing, UI validation, debugging (PRIMARY TESTING METHOD)

**When to use:**
- Testing live site during development
- Verifying responsive design (375px mobile, 768px tablet, 1200px desktop)
- Debugging rendering/layout issues
- Checking console errors
- Taking screenshots for documentation

**Key tools:**
- `list_pages` - See all open browser tabs
- `navigate_page` - Go to URL (http://localhost:4321 for dev)
- `take_snapshot` - Get accessibility tree (PREFER over screenshots)
- `take_screenshot` - Visual state (when appearance matters)
- `resize_page` - Test responsive layouts
- `list_network_requests` - Debug API calls
- `list_console_messages` - Check JavaScript errors
- `evaluate_script` - Run custom JS in page
- `click`, `fill`, `hover` - Interact with elements (use uid from snapshot)

**Workflow for testing:**
1. Start dev: `npm run dev`
2. Navigate: http://localhost:4321
3. Snapshot for structure
4. Test interactions
5. Check console for errors
6. Test responsive: 375px, 768px, 1200px
7. Fix issues and repeat

**Efficiency tips:**
- Snapshot > screenshot (faster, less context)
- Screenshots only when visuals matter
- Use evaluate_script for complex checks
- Check console + network when debugging

## Failure Indicators (STOP if you see these)

- 🚩 2+ "fix" commits in a row
- 🚩 Dependencies > 20 packages
- 🚩 node_modules > 150MB
- 🚩 Single file > 500 lines (except data)
- 🚩 Build > 30 seconds
- 🚩 More than 1 day without deploying
- 🚩 Fighting with config files
- 🚩 Vague commit messages

## Testing Strategy

**Primary:** Chrome DevTools MCP for manual validation
**Secondary:** Minimal smoke tests (2-3 Playwright tests for critical paths)
**Never:** Unit tests for every function, 50%+ coverage goals, test artifacts in git

## Dependencies Policy

**Keep minimal:**
- `astro` (framework)
- `@astrojs/react` (interactive components)
- `react` + `react-dom`
- `@astrojs/netlify` (deployment)
- `typescript` (type checking)
- `playwright` (smoke tests only, 2-3 tests max)

**Target:** ~10 dependencies, ~50-100MB node_modules

**Avoid:**
- Testing frameworks (vitest, jest, etc.)
- Linters (ESLint, etc.)
- Formatters (Prettier, etc.)
- Git hooks (Husky, lint-staged)
- Coverage tools
- Any "enterprise" tooling

## Decision Framework

Before adding anything, ask:

1. **Does this ship the guides faster?**
   - Yes → Do it minimally
   - No → Defer or skip

2. **Can Chrome DevTools MCP handle this?**
   - Yes → Use that instead
   - No → Consider minimal alternative

3. **Is this needed now or later?**
   - Now → Implement
   - Later → Note in LESSONS-LEARNED.md and skip

## V2 Success Criteria

- ✅ All 4 guides render correctly
- ✅ Fight Club generator works
- ✅ Design system intact
- ✅ All assets load (250+ images)
- ✅ Production build succeeds
- ✅ Deploys to Netlify
- ✅ < 20 dependencies
- ✅ < 150MB node_modules
- ✅ < 10 test files
- ✅ 5 documentation files
- ✅ Clean commit history

---

**Last Updated:** 2025-11-03 (V2 Fresh Start)
**Status:** Active - V2 approach
**Reference:** See docs/LESSONS-LEARNED.md for V1 failures
