# Guide Creation Process (React + Vite)

## Quick Reference

**Existing .txt files:** Video transcripts stored in `docs/guides/[guide-name]/`

**Current guides:**
- Counter-Building Guide (`/counter-guide`)
- Midgame Guide (`/midgame-guide`)
- Counter Cheatsheet (`/counter-cheatsheet`)

---

## Step-by-Step Process

### Step 1: Get Video Transcript

**Save to:** `docs/guides/[guide-name]/[descriptive-name]-transcript.txt`

**Methods:**
```bash
# Option 1: yt-dlp (if installed globally)
yt-dlp --write-auto-sub --skip-download [VIDEO_URL]

# Option 2: Manual transcription service
# Copy raw transcript text into .txt file
```

**Example locations:**
- `docs/guides/counter-item-guide/input-transcript.txt`
- `docs/guides/deadlock-midgame-guide/deadlock-midgame-guide-transcript.txt`

---

### Step 2: Structure Content

**Review transcript and organize into:**
1. Main themes/sections
2. Key data points (costs, percentages, stats)
3. Hero/item names mentioned
4. Tactical insights and tips

**Create outline:**
- What's the core problem this guide solves?
- What are 3-5 main sections?
- What's the key takeaway?
- Where does Bebop bias fit naturally?

---

### Step 3: Create React Component

**File:** `src/pages/[Name]Guide.tsx`

**Template:**
```tsx
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function [Name]Guide() {
  useMetaTags({
    title: '[Guide Title] - Deadlock Fight Club',
    description: '[150-160 char description for SEO/social]',
    url: 'https://deadlock-fights.netlify.app/[route]',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>[Guide Title]</h1>
          <p className="guide-lead">
            [2-3 sentence overview establishing the problem and value proposition]
          </p>

          {/* Optional: Bebop bias can go here or in separate paragraph */}
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            [Bebop bias statement - REQUIRED]
          </p>
        </Section>

        <Section>
          <h2>[Section Title]</h2>

          {/* Use TipBox for callouts */}
          <TipBox variant="info">
            <strong>Key insight:</strong> [Important point]
          </TipBox>

          {/* Or warning variant */}
          <TipBox variant="warning">
            <strong>Watch out:</strong> [Warning or common mistake]
          </TipBox>

          {/* Content sections */}
        </Section>

        <Section>
          <h2>[Next Section]</h2>
          {/* More content */}
        </Section>

        <Section>
          <p className="guide-closing">
            [Final summary paragraph with key takeaway]
          </p>
        </Section>
      </div>
    </Container>
  )
}
```

---

### Step 4: Add Route to App

**File:** `src/App.tsx`

Add route to the Routes:
```tsx
<Route path="/[name]-guide" element={<[Name]Guide />} />
```

Import the component:
```tsx
import [Name]Guide from './pages/[Name]Guide'
```

---

### Step 5: Update Guides Directory Page

**File:** `src/pages/Guides.tsx`

Add entry to `guides` array:
```tsx
{
  title: '[Guide Title]',
  description: '[One sentence description]',
  path: '/[name]-guide',
  status: 'Available'
}
```

---

### Step 6: Test Locally

```bash
npm run dev
# Navigate to http://localhost:5173/[name]-guide
```

**Test checklist:**
- [ ] Page renders without errors
- [ ] All sections display correctly
- [ ] TipBox components render properly
- [ ] Meta tags appear in page source (view source)
- [ ] Mobile responsive (DevTools: 375px, 768px, 1200px)
- [ ] Console has no errors (F12 → Console tab)
- [ ] Navigation works (back to home, guides page)

**Manual testing via browsertools:**
1. Open https://browsertools.agentdesk.ai/
2. Navigate to `http://localhost:5173/[name]-guide`
3. Test responsive layouts
4. Verify functionality
5. Check console

---

## Content Patterns & Components

### Available Components

**Layout:**
- `<Container maxWidth="sm|md|lg|full">` - Max-width wrapper
- `<Section>` - Vertical spacing wrapper
- `<TipBox variant="info|warning">` - Highlighted callout boxes

**Usage examples:**
```tsx
// Info box (blue/purple)
<TipBox variant="info">
  <strong>Pro tip:</strong> This is helpful information
</TipBox>

// Warning box (orange)
<TipBox variant="warning">
  <strong>Watch out:</strong> This is a common mistake
</TipBox>
```

### CSS Classes in GuidePages.css

**Text styling:**
- `.guide-lead` - Large intro paragraph (1.2rem)
- `.guide-closing` - Final summary box with orange accent
- `.item-cost` - Italic, secondary color for costs
- `.item-counters` - Secondary color for counter lists

**Boxed content:**
- `.stat-box` - Dark box with border for stats/data
- `.timeline` - Purple-accented box for sequential info
- `.example-box` - Purple box for scenario examples
- `.principles-list` - Dark box for bulleted principles

**Item entries:**
- `.item-entry` - Individual item with bottom border
  - Auto-removes border on last child
  - Adds spacing and divider

**Example usage:**
```tsx
{/* Stats box */}
<div className="stat-box">
  <h3>Walker Stats</h3>
  <ul>
    <li><strong>Side lane:</strong> 5,800 HP</li>
    <li><strong>Blue lane:</strong> 9,000+ HP</li>
  </ul>
</div>

{/* Timeline/sequence */}
<div className="timeline">
  <h3>How to Use the Cycle</h3>
  <p><strong>10:00-14:30:</strong> Farm for power spike</p>
  <p><strong>At 5:00 mark:</strong> Take fights</p>
</div>

{/* Example scenario */}
<div className="example-box">
  <h3>Example Scenario</h3>
  <p><strong>Situation:</strong> [Description]</p>
  <p><strong>Best move:</strong> [Action]</p>
</div>

{/* Item entry with divider */}
<div className="item-entry">
  <h3>Reactive Barrier</h3>
  <p className="item-cost">1,600 souls • Tier 2</p>
  <p>Automatically activates when you get hit by any CC.</p>
  <p className="item-counters">
    <strong>Counters:</strong> Bebop (Hook), Abrams (Charge)
  </p>
</div>
```

---

## Content Guidelines

### CRITICAL: Bebop Bias (Required)

Every guide MUST include a tongue-in-cheek Bebop bias statement in the intro.

**✅ Good examples:**
```tsx
<p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
  While Bebop is objectively the best character in the game,
  even he's not immune to smart counter-building.
</p>
```

```tsx
<p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
  Bebop is objectively the best character because he has a hyper beam.
  That said, these counter items work against everyone.
</p>
```

**❌ Bad examples:**
- "As a Bebop main, I'm legally obligated..." (too literal)
- "Bebop is a strong character" (too subtle)
- Missing entirely (forbidden)

### Writing Voice

- **Concise:** Max 3-4 sentences per paragraph
- **Data-driven:** Always cite numbers (1,600 souls, 35% reduction, 5-minute cycle)
- **Community-oriented:** Use "you" and "your team" language
- **Self-aware:** Acknowledge the bias, add personality

### Typography Hierarchy

```tsx
<h1>Main Title</h1>              // Page title only
<h2>Section Heading</h2>         // Major sections
<h3>Subsection or Item Name</h3> // Items, concepts

<p className="guide-lead">Opening paragraph</p>
<p className="guide-closing">Final summary</p>
```

### Always Use CSS Variables

**✅ Do this:**
```tsx
<div style={{
  color: 'var(--accent-orange)',
  padding: 'var(--spacing-lg)',
  borderRadius: 'var(--radius-standard)'
}}>
```

**❌ Never do this:**
```tsx
<div style={{
  color: '#ff8c42',
  padding: '20px',
  borderRadius: '4px'
}}>
```

**Available tokens:**
- Colors: `--accent-orange`, `--accent-purple`, `--text-primary`, `--text-secondary`, `--bg-secondary`
- Spacing: `--spacing-xs|sm|md|lg|xl` (4px → 30px)
- Radius: `--radius-standard` (4px), `--radius-large` (8px)

---

## Commit & Deploy

### Commit Message Format

```bash
feat: Add [guide-name] guide with [key features]
```

**Examples:**
- `feat: Add hero matchup guide with tier lists`
- `feat: Add early game guide with laning strategies`
- `feat: Add item build guide with cost optimization`

### Deployment

```bash
# Stage all changes
git add src/pages/[Name]Guide.tsx src/App.tsx src/pages/Guides.tsx

# Commit with semantic prefix
git commit -m "feat: Add [name] guide"

# Push to mainline (Netlify auto-deploys)
git push origin mainline
```

**Wait 2-3 minutes for Netlify build**

Verify at: `https://deadlock-fights.netlify.app/[name]-guide`

---

## Pre-Publish Checklist

Before pushing to mainline:

**Content:**
- [ ] Bebop bias statement in intro (REQUIRED)
- [ ] All numeric values preserved (costs, percentages, durations)
- [ ] Hero/item names spelled correctly
- [ ] No vague language ("this is good" → "35% reduction for 4 seconds")

**Technical:**
- [ ] useMetaTags() configured with description, URL, image
- [ ] Route added to App.tsx
- [ ] Guide added to Guides.tsx directory
- [ ] No console errors
- [ ] Mobile responsive tested (375px, 768px, 1200px)

**Design System:**
- [ ] CSS variables used (no hardcoded colors)
- [ ] GuidePages.css classes used appropriately
- [ ] Container + Section components wrapping content
- [ ] TipBox components for callouts

**File Organization:**
- [ ] Transcript saved to `docs/guides/[name]/`
- [ ] Component in `src/pages/[Name]Guide.tsx`
- [ ] Follows naming convention (PascalCase component, kebab-case route)

---

## Examples to Reference

### Minimal Guide Structure
See: `src/pages/CounterGuide.tsx`
- Clean section organization
- Item entries with dividers
- TipBox usage
- Meta tags implementation

### Advanced Guide Structure
See: `src/pages/MidgameGuide.tsx`
- Multiple box types (stat-box, timeline, example-box)
- Principles list
- Complex content organization
- Strong narrative flow

### Directory Page
See: `src/pages/Guides.tsx`
- Guide card layout
- Status badges
- Link routing

---

## Tips & Best Practices

1. **Start with the transcript** - Don't write from memory, use the source material
2. **Organize before coding** - Outline sections and data points first
3. **Test incrementally** - Don't write entire guide before first test
4. **Use existing CSS** - Don't create custom styles unless absolutely needed
5. **Keep it scannable** - Use headings, lists, boxes to break up text
6. **Preserve exact data** - Costs, percentages, durations must be accurate
7. **Mobile-first mindset** - Test responsive early and often

---

**Document Owner:** chreez (Bebop Main)
**Last Updated:** 2025-11-11 (V3 - React + Vite migration)
**Replaces:** GUIDE-WORKFLOW.md (Astro-specific)
**Status:** Active - Current process for all new guides
