# Guide Publishing Workflow

## Overview

Transform YouTube transcripts into production-ready guide pages.

**Pipeline:**
```
YouTube Video
    ↓ (yt-dlp or transcribe_youtube)
Transcript
    ↓ (structure + extract)
article.md (with frontmatter)
    ↓ (convert to Astro)
[name]-guide.astro
    ↓ (deploy)
Published at /[name]-guide
```

---

## File Structure

### Source Article

**Location:** `docs/guides/[XX-guide-name]/article.md`

**Frontmatter:**
```yaml
---
title: "Guide Title"
video_url: "https://youtu.be/..."
video_id: "..."
channel: "Creator Name"
publish_date: "YYYY-MM-DD"
status: "draft"  # draft | review | published
---
```

### Production Page

**Location:** `src/pages/[name]-guide.astro`
**Route:** `/[name]-guide`

---

## Status Workflow

### 1. Draft Status

```yaml
status: "draft"
```

**Behavior:**
- ✅ Visible in dev mode (`npm run dev`)
- ❌ Hidden in production builds
- Shows "🚧 DRAFT MODE" banner

**Use:** Initial content creation, not ready for review

### 2. Review Status

```yaml
status: "review"
```

**Behavior:**
- ✅ Visible everywhere
- Shows "📝 UNDER REVIEW" banner
- Renders inline review comments as `📝` markers

**Use:** Ready for stakeholder review on staging

### 3. Published Status

```yaml
status: "published"
```

**Behavior:**
- ✅ Visible everywhere
- No banners
- Review comments stripped

**Use:** Fully approved, production-ready

---

## Creating a New Guide

### Step 1: Get Transcript

```bash
# Option 1: yt-dlp (installed globally)
yt-dlp --write-auto-sub --skip-download [VIDEO_URL]

# Option 2: Claude Code transcribe_youtube command
/transcribe_youtube [VIDEO_URL]
```

Save to: `docs/guides/[XX-name]/transcript.txt`

### Step 2: Create article.md

Create `docs/guides/[XX-name]/article.md`:

```markdown
---
title: "[Guide Title]"
video_url: "https://youtu.be/..."
status: "draft"
created: "YYYY-MM-DD"
---

## Summary

[2-3 paragraph overview]

[Bebop bias statement - REQUIRED]

## [Section 1]

[Content...]

## Quick Reference

[Summary of key points]

## Source

Based on "[Video Title]" by [Creator]
Watch: [video_url]
```

### Step 3: Convert to Astro Page

Create `src/pages/[name]-guide.astro`:

```astro
---
const status = 'draft'; // or 'review' or 'published'
const isDev = import.meta.env.DEV;

// In production, redirect drafts to /guides
if (!isDev && status === 'draft') {
  return Astro.redirect('/guides');
}
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Guide Title] - Deadlock Fight Club</title>

  <!-- See CONTENT-GUIDELINES.md for full meta tags -->

  <link rel="stylesheet" href="/styles/tokens.css">
  <link rel="stylesheet" href="/styles/global.css">
</head>
<body>

  {/* Status banners */}
  {status === 'draft' && (
    <div class="status-banner draft">
      🚧 DRAFT MODE - Hidden in production
    </div>
  )}

  {status === 'review' && (
    <div class="status-banner review">
      📝 UNDER REVIEW - Visible for stakeholder feedback
    </div>
  )}

  <a href="/" class="back-link">← Back to Fight Club</a>

  <h1>[Guide Title]</h1>
  <p class="subtitle">[One-sentence value proposition]</p>

  <div class="summary-box">
    <h3>📖 Overview</h3>
    <p>[Summary paragraph 1]</p>
    <p>[Summary paragraph 2]</p>
    <p style="font-style: italic; color: var(--text-secondary);">
      [Bebop bias statement]
    </p>
  </div>

  <!-- Guide content here -->

</body>
</html>
```

### Step 4: Test Locally

```bash
npm run dev
# Navigate to http://localhost:4321/[name]-guide

# Test with Chrome DevTools MCP:
# - Check rendering
# - Test responsive (375px, 768px, 1200px)
# - Check console for errors
# - Verify meta tags
```

### Step 5: Review → Published

When ready:

1. Change status to `review` in frontmatter
2. Deploy to staging
3. Share URL for review
4. Address feedback (inline `[REVIEW: comment]` markers)
5. Change status to `published`
6. Deploy to production

---

## Review Comment System

### Inline Review Comments

In article.md or Astro page:

```markdown
This is some content.

[REVIEW: Is this claim accurate? Need citation?]

More content here.
```

### Rendering Review Comments

```astro
{status === 'review' && (
  <span class="review-marker" title="REVIEW: Is this claim accurate?">
    📝
  </span>
)}
```

### Stripping for Published

When status changes to `published`, remove all `[REVIEW: ...]` markers.

---

## Quality Checklist

Before setting status to `published`:

- [ ] All numeric values preserved (costs, percentages, durations)
- [ ] Hero/item names spelled correctly
- [ ] Bebop bias statement in intro
- [ ] OG meta tags configured
- [ ] Mobile responsive (test 375px, 768px, 1200px)
- [ ] Source video linked
- [ ] All review comments addressed and removed
- [ ] No console errors
- [ ] Back link works
- [ ] 4px border radius everywhere
- [ ] CSS variables used (no hardcoded colors)

---

## Common Patterns

### TL;DR Callout (with companion cheatsheet)

```html
<p style="font-size: 1rem; color: var(--accent-orange); margin-top: 15px; padding: 12px; background: rgba(255, 140, 66, 0.1); border-left: 3px solid var(--accent-orange); border-radius: 4px;">
  <strong>⚡ TL;DR?</strong> Check the
  <a href="/[name]-cheatsheet" style="color: var(--accent-orange); text-decoration: underline;">Quick Cheatsheet</a>
</p>
```

### Status Banner Styles

```css
.status-banner {
  padding: 12px 20px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  border-radius: 4px;
}

.status-banner.draft {
  background: rgba(255, 140, 66, 0.15);
  color: var(--accent-orange);
  border: 2px solid var(--accent-orange);
}

.status-banner.review {
  background: rgba(124, 77, 255, 0.15);
  color: var(--accent-purple);
  border: 2px solid var(--accent-purple);
}
```

---

## Tips

- Start with `draft` status, test thoroughly in dev
- Use `review` status for stakeholder feedback
- Keep guides as separate pages (no unified navigation initially)
- Break large guides into multiple sections if needed
- Test mobile responsiveness early and often
- Use Chrome DevTools MCP for validation

---

**Document Owner:** chreez
**Last Updated:** 2025-11-03 (V2 - condensed from 523 lines)
**Reference:** See CONTENT-GUIDELINES.md for full design patterns
