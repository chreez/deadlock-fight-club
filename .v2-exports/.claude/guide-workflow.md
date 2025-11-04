# Guide Publishing Workflow

## Purpose

This document defines the workflow for transforming YouTube transcript articles (`docs/guides/*/article.md`) into production-ready Astro guide pages (`src/pages/*-guide.astro`).

---

## Overview

**Pipeline Stages:**

```
YouTube Video
    ↓
Transcript (via yt-dlp or transcribe_youtube)
    ↓
article.md (structured markdown with frontmatter)
    ↓
*-guide.astro (production page)
    ↓
Published at /[name]-guide
```

**Key Features:**
- Status-based visibility (draft/review/published)
- TL;DR sections for quick consumption (5-10 min reads)
- Inline review comment system
- Environment-aware rendering (hide drafts in production)

---

## File Structure

### Source Article (Markdown)

**Location:** `docs/guides/[XX-guide-name]/article.md`

**Frontmatter:**
```yaml
---
title: "Guide Title"
video_url: "https://youtu.be/..."
video_id: "..."
channel: "Creator Name"
publish_date: "YYYY-MM-DD"
duration: "MM:SS"
thumbnail: "https://..."
description: "..."
transcript_source: "docs/guides/.../transcript.txt"
status: "draft"  # draft | review | published
created: "YYYY-MM-DD"
---
```

**Status Values:**
- `draft` - Hidden in production builds, visible in dev mode with banner
- `review` - Visible in all environments with review banner, shows inline review comments
- `published` - Fully visible, no banners, review comments stripped

### Production Page (Astro)

**Location:** `src/pages/[name]-guide.astro`

**Route:** `/[name]-guide` (e.g., `/midgame-guide`)

**Pattern:** Follows existing `counter-guide.astro` structure

---

## Status Workflow

### 1. Draft Status

**Frontmatter:**
```yaml
status: "draft"
```

**Behavior:**
- ✅ Visible in dev mode (`npm run dev`)
- ❌ Hidden in production builds (`npm run build`)
- Shows orange "🚧 DRAFT MODE" banner when visible
- Redirect to `/guides` if accessed in production

**Use Case:** Initial content creation, not ready for human review yet.

### 2. Review Status

**Frontmatter:**
```yaml
status: "review"
```

**Behavior:**
- ✅ Visible in dev mode
- ✅ Visible in production builds
- Shows purple "📝 UNDER REVIEW" banner
- Renders inline review comments as `📝` markers
- Allows stakeholders to review on staging URLs

**Use Case:** Content ready for human review, needs feedback before publishing.

### 3. Published Status

**Frontmatter:**
```yaml
status: "published"
```

**Behavior:**
- ✅ Fully visible in all environments
- ❌ No banners shown
- Review comments stripped from output
- Added to `/guides` listing page

**Use Case:** Approved content, ready for public consumption.

---

## Review Comment System

### Syntax in article.md

```markdown
This is some content about midgame. [REVIEW: Is this section too technical for beginners?]

The 5-minute combat cycle is essential. [REVIEW: Need a visual timeline diagram here?]
```

### Astro Transformation

When transforming `article.md` to `.astro`:

**In Review Mode (`status: "review"`):**
```astro
<p>
  This is some content about midgame.
  <span class="review-comment" title="REVIEW: Is this section too technical for beginners?">📝</span>
</p>
```

**In Published Mode (`status: "published"`):**
```astro
<p>
  This is some content about midgame.
  <!-- Review comment stripped -->
</p>
```

### CSS Styling

```css
.review-comment {
  display: inline-block;
  margin-left: 4px;
  cursor: help;
  font-size: 0.9rem;
  color: var(--accent-purple);
}
```

**Tooltip behavior:** Hovering over 📝 shows the full review comment via `title` attribute.

---

## TL;DR Implementation

Every guide MUST include a TL;DR option for readers who want quick consumption (2-5 min instead of 8-10 min).

### Structure

1. **Guide Overview TipBox** (top of page)
   - Brief intro (2-3 paragraphs)
   - TL;DR callout linking to Quick Reference section
   - Read time indicators

2. **Quick Reference Section** (bottom of page)
   - Section ID: `#quick-reference`
   - Title: "⚡ Quick Reference: The [N] Principles"
   - Grid layout of key takeaways (bullet points or cards)
   - No fluff, just actionable insights

### Example Pattern

```astro
<!-- Top of page -->
<TipBox title="📖 Guide Overview" variant="info">
  <p>Brief intro paragraph 1...</p>
  <p>Brief intro paragraph 2...</p>
  <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <strong>⚡ TL;DR?</strong> Jump to the
    <a href="#quick-reference" style="color: var(--accent-orange); text-decoration: underline;">
      Quick Reference
    </a>
    for the [N] core principles you need to master.
  </p>
  <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
    <strong>Read time:</strong> Full guide is 8 min • Quick Reference is 2 min
  </p>
</TipBox>

<!-- Bottom of page -->
<Section id="quick-reference" title="⚡ Quick Reference: The Six Principles">
  <p>Intro paragraph summarizing the guide's core message...</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md);">
    <div style="background: var(--bg-secondary); padding: var(--spacing-md); border-radius: var(--border-radius-lg); border-left: 3px solid var(--accent-orange);">
      <div style="color: var(--accent-orange); font-weight: 700; margin-bottom: var(--spacing-xs);">
        1. Principle Name
      </div>
      <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">
        Brief explanation in 1-2 sentences.
      </p>
    </div>
    <!-- Repeat for each principle -->
  </div>
</Section>
```

---

## Transformation Checklist

When converting `article.md` → `.astro`:

- [ ] Extract frontmatter metadata to `metadata` object
- [ ] Implement status-based rendering (draft/review/published check)
- [ ] Add draft/review banner if applicable
- [ ] Create Guide Overview TipBox with TL;DR link
- [ ] Transform markdown sections to Astro Sections
- [ ] Add Quick Reference section at bottom
- [ ] Process [REVIEW: ...] tags based on status
- [ ] Add source attribution footer
- [ ] Include video link in header
- [ ] Set correct meta tags for SEO/OG
- [ ] Test in dev mode (localhost:4321)
- [ ] Test status transitions (draft → review → published)
- [ ] Add to `/guides` listing page

---

## Guides Listing Page

**File:** `src/pages/guides.astro`

When adding a new guide to the listing:

```javascript
const guides = [
  {
    title: "What the Hell is Deadlock's Midgame?",
    description: "Learn to survive the transition from lane phase to MOBA-style macro gameplay.",
    url: "/midgame-guide",
    category: "Strategy",
    readTime: "8 min read",
    status: "draft" // Add status field
  },
  // ... other guides
];

// Filter out drafts in production
const visibleGuides = import.meta.env.PROD
  ? guides.filter(g => g.status === "published")
  : guides;
```

**Status-based visibility:**
- `draft` guides: Only show in dev mode
- `review` guides: Show in all modes with "Under Review" badge
- `published` guides: Always show

---

## Component Standards

### Required Components

Every guide page MUST use these components:

```astro
import SiteHeader from '../components/layout/SiteHeader';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import TipBox from '../components/layout/TipBox';
import '../styles/global.css';
import '../styles/components.css';
```

### Section IDs

Use semantic IDs for deep linking:

```astro
<Section id="wave-management" title="🌊 Wave Management">
<Section id="walkers" title="🏰 Walker Stats">
<Section id="combat-cycle" title="⏱️ The 5-Minute Combat Cycle">
<Section id="quick-reference" title="⚡ Quick Reference">
```

### TipBox Variants

```astro
<TipBox variant="info" title="📖 Guide Overview">
<TipBox variant="success" title="💡 Pro Tip">
<TipBox variant="warning" title="⚠️ Critical Timing">
```

---

## Content Standards

### Paragraph Length
- Max 3-4 sentences per paragraph
- Use line breaks for readability
- Break up long sections with subheadings

### Tone
- Technical but accessible (assume intermediate knowledge)
- Concise (respect reader's time)
- Data-driven (include costs, percentages, timings)
- Community-oriented (use "we" language)

### Data Presentation

Always include specific numbers from game:

```astro
<div style="color: var(--accent-orange); font-size: 2rem; font-weight: 700;">
  5,800 HP
</div>
<div style="color: var(--text-secondary);">Side Lane Walkers</div>
```

### Blockquotes for Transcript Quotes

When including verbatim quotes from source video:

```astro
<p style="font-style: italic; color: var(--text-secondary); border-left: 3px solid var(--accent-orange); padding-left: 1rem;">
  "The urn doesn't win you the fight, the preparation does."
</p>
```

---

## Testing Checklist

Before changing status to `published`:

### Visual Testing
- [ ] Test on desktop (> 1200px)
- [ ] Test on tablet (768-1200px)
- [ ] Test on mobile (< 768px)
- [ ] Verify all sections render correctly
- [ ] Check TL;DR link jumps to Quick Reference
- [ ] Verify all internal anchor links work

### Status Testing
- [ ] Test draft mode (should hide in production)
- [ ] Test review mode (shows banner and review comments)
- [ ] Test published mode (no banners, no review comments)
- [ ] Verify redirect logic works for drafts in production

### Content Testing
- [ ] All video links work and open in new tab
- [ ] Source attribution footer is accurate
- [ ] Meta tags configured (title, description, OG tags)
- [ ] No console errors in browser
- [ ] All stats/numbers verified against game data

### Listing Page Testing
- [ ] Guide appears in `/guides` listing (if published)
- [ ] Guide hidden in `/guides` listing (if draft in production)
- [ ] Card hover effects work
- [ ] Read time is accurate

---

## Common Patterns

### Stat Callout Grid

```astro
<div style="margin-top: var(--spacing-lg); display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md);">
  <div style="background: var(--bg-secondary); padding: var(--spacing-md); border-radius: var(--border-radius-lg);">
    <div style="color: var(--accent-orange); font-size: 2rem; font-weight: 700;">5,800 HP</div>
    <div style="color: var(--text-secondary); margin-top: var(--spacing-xs);">Side Lane Walkers</div>
  </div>
  <!-- Repeat for other stats -->
</div>
```

### Two-Column Comparison

```astro
<div style="margin-top: var(--spacing-lg); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md);">
  <div style="background: var(--bg-secondary); padding: var(--spacing-md); border-radius: var(--border-radius-lg); border: 2px solid rgba(76, 175, 80, 0.3);">
    <div style="color: #4caf50; font-weight: 700;">✅ Good Scenario</div>
    <p>Explanation...</p>
  </div>
  <div style="background: var(--bg-secondary); padding: var(--spacing-md); border-radius: var(--border-radius-lg); border: 2px solid rgba(244, 67, 54, 0.3);">
    <div style="color: #f44336; font-weight: 700;">❌ Bad Scenario</div>
    <p>Explanation...</p>
  </div>
</div>
```

### Highlighted Info Box

```astro
<div style="background: var(--bg-secondary); padding: var(--spacing-md); border-radius: var(--border-radius-lg); border-left: 3px solid var(--accent-orange);">
  <h3 style="color: var(--accent-orange); margin: 0 0 var(--spacing-sm);">Section Title</h3>
  <p style="margin: 0;">Content...</p>
</div>
```

---

## Example Workflow

### Step 1: Create Transcript Article

```bash
# Use transcript-article-workflow
# Creates docs/guides/XX-guide-name/article.md with status: "draft"
```

### Step 2: Transform to Astro Page

```bash
# Manually create src/pages/[name]-guide.astro
# Follow transformation checklist above
# Start with status: "draft"
```

### Step 3: Local Preview (Draft Mode)

```bash
npm run dev
# Visit http://localhost:4321/[name]-guide
# See draft banner
# Test all sections, links, responsive design
```

### Step 4: Request Review

```astro
// Update article.md frontmatter
status: "review"

// Add inline review comments in article.md
[REVIEW: Need diagram here?]
[REVIEW: Is this too technical?]
```

### Step 5: Deploy to Staging

```bash
# Push to git, deploy to Netlify staging URL
# Share staging URL with reviewers
# Reviewers see purple "UNDER REVIEW" banner
# Reviewers see 📝 markers for review comments
```

### Step 6: Incorporate Feedback

```astro
// Update article.md based on review feedback
// Remove resolved [REVIEW: ...] tags
// Add new content, images, diagrams as needed
```

### Step 7: Publish

```astro
// Update article.md frontmatter
status: "published"

// Update guides.astro listing
{
  title: "Guide Title",
  description: "...",
  url: "/[name]-guide",
  category: "Strategy",
  readTime: "8 min read",
  status: "published" // Change from draft
}
```

### Step 8: Production Build

```bash
npm run build
npm run preview
# Verify no draft banner
# Verify no review comments visible
# Verify appears in /guides listing
```

---

## Future Enhancements

**Potential Improvements:**
1. Automated article.md → .astro transformation (template generator)
2. Content Collections for type-safe frontmatter validation
3. Tag/category system for filtering guides
4. Related guides recommendations
5. Table of contents navigation
6. Progress indicators for long guides
7. Dark/light mode toggle (currently dark only)
8. Print-friendly styles
9. Search functionality across all guides
10. RSS feed for new guides

---

**Document Owner:** Intent Translator MAX + chreez
**Created:** 2025-11-03
**Purpose:** Define reproducible workflow for guide creation and publishing
**Status:** Active - use for all guide transformations
**Related:** `.claude/content-guidelines.md`, `.claude/blog-post-standards.md`, `docs/intent-transcript-article-workflow.md`
