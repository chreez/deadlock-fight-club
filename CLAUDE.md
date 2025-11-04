- Always add .claude directory to context window for claude code sessions for the cwd
- Create logical commits between each step please
- See docs/MIGRATION-PLAN.md for the complete execution plan and remaining todos

## MCP Server Usage

### Ref MCP Server (Documentation Search)

**Purpose:** Search and retrieve documentation from public sources and private repos.

**When to use:**

- Looking up framework/library API documentation (Astro, React, TypeScript)
- Finding best practices for web technologies
- Searching for JavaScript/TypeScript patterns
- Looking up CSS/HTML standards

**Available tools:**

- `mcp__Ref__ref_search_documentation` - Search for documentation by query
  - Include framework/library names in query for better results
  - Add `ref_src=private` to search private docs
- `mcp__Ref__ref_read_url` - Read full content from search results
  - Use EXACT url from search results (including #hash)

**Example workflow:**

1. Search: "Astro React integration client directives"
2. Review search results for relevant URLs
3. Read specific URLs to get detailed documentation

### Chrome DevTools MCP Server (Browser Automation)

**Purpose:** Automate browser interactions, test UI, debug rendering issues.

**When to use:**

- Testing the live site during development
- Verifying responsive design at different viewport sizes
- Debugging rendering/layout issues
- Running e2e tests or visual regression checks
- Inspecting network requests and console errors
- Taking screenshots for documentation

**Key tools:**

- `list_pages` - See all open browser tabs
- `navigate_page` - Go to a URL (use localhost:4321 for dev server)
- `take_snapshot` - Get accessibility tree (prefer over screenshots for efficiency)
- `take_screenshot` - Capture visual state (use when visual verification needed)
- `resize_page` - Test responsive layouts (375px mobile, 768px tablet, 1200px desktop)
- `list_network_requests` - Debug API calls and asset loading
- `list_console_messages` - Check for JavaScript errors
- `evaluate_script` - Run custom JavaScript in page context
- `click`, `fill`, `hover` - Interact with page elements (use uid from snapshot)

**Example workflow for testing:**

1. Start dev server: `npm run dev`
2. Navigate to page: `navigate_page` to `http://localhost:4321`
3. Take snapshot to see page structure
4. Test interactions: click buttons, fill forms
5. Check console for errors: `list_console_messages`
6. Verify responsive: `resize_page` to 375px (mobile), 768px (tablet)

**Efficiency tips:**

- Use `take_snapshot` instead of `take_screenshot` when you just need to verify content/structure
- Take screenshots only when visual appearance matters
- Use `evaluate_script` for complex interactions or data extraction
- Check console messages and network requests when debugging issues
