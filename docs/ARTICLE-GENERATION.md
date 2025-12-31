# Article Generation Workflow

> Transform YouTube video scrapes into Deadlock Fight Club blog articles.

---

## Overview

**Pipeline:**
```
Scrape Directory (from yt-scrape tool)
    ↓ (analyze)
Confirmation Summary
    ↓ (user approval)
Content Skeleton + Image Selection
    ↓ (generate)
React Component + Blog Images
```

**Keeps:**
- Deadlock Fight Club site context
- Bebop bias tone (required)
- React TSX component output
- Design system compliance

---

## Input: Scrape Directory Structure

The scrape tool generates a directory with this structure:

```
[video-slug]_[video-id]/
├── metadata.json          # Video title, duration, channel, id
├── video-context.json     # AI summary, video_type, topics[]
├── transcript.txt         # Timestamped transcript
├── screenshots/           # Frames every 20s (00-00-00.jpg, 00-00-20.jpg, ...)
├── video.mp4              # (ignored)
└── audio.m4a              # (ignored)
```

### File Schemas

**metadata.json:**
```json
{
  "id": "VIDEO_ID",
  "title": "Video Title",
  "duration": 761,
  "channel": "Channel Name"
}
```

**video-context.json:**
```json
{
  "summary": "AI-generated summary...",
  "video_type": "tutorial|patch-notes|guide|analysis",
  "topics": ["Hero1", "Hero2", "game balance"]
}
```

**transcript.txt:**
```
[00:00:00,000]  First line of transcript...
[00:00:05,000]  Next line...
```

### Handling Incomplete Scrapes

If scrape is still running:
- `metadata.json` - Required (wait if missing)
- `transcript.txt` - Required (wait if missing)
- `video-context.json` - Optional (can proceed without)
- `screenshots/` - Optional (article can work without images)

---

## Workflow

### Step 1: Analyze Scrape Directory

Load all available files and present confirmation summary:

```
📹 Video: [Title]
👤 Channel: [Channel Name]
⏱️ Duration: [MM:SS]
📝 Type: [video_type]
🎯 Topics: [topics array]
🖼️ Screenshots: [count] available

AI Summary:
[video-context.summary or "Not available"]

Proposed Article:
- Title: [Suggested title]
- Route: /[slug]
- Sections: [3-5 main sections from transcript analysis]
- Hero Images: [count] candidates identified
```

### Step 2: User Confirmation

**Required before generation:**

```
Proceed with article generation? (yes/no)
```

If no → Ask what to adjust
If yes → Continue to Step 3

### Step 3: Generate Content Skeleton

Build structure from transcript:

1. **Extract claims + evidence** (de-duplicate rambling)
2. **Identify data points** (numbers, percentages, patch values)
3. **Map timestamps to screenshots** for image selection
4. **Outline sections** based on topic flow

### Step 4: Generate Article

Create React component + copy blog images.

---

## Output Structure

### React Component

**Location:** `src/pages/[ArticleName].tsx`

**Template:**
```tsx
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function [ArticleName]() {
  useMetaTags({
    title: '[Article Title] - Deadlock Fight Club',
    description: '[150-160 char description]',
    url: 'https://deadlock-fights.netlify.app/[route]',
    image: 'https://deadlock-fights.netlify.app/blog/[article]/hero.jpg'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        {/* Header */}
        <Section>
          <h1>[Title]</h1>
          <p className="guide-lead">[Overview paragraph]</p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            [Bebop bias statement - REQUIRED]
          </p>
        </Section>

        {/* Content sections */}
        <Section>
          <h2>[Section]</h2>
          {/* Patch notes style content */}
        </Section>

        {/* Attribution */}
        <Section>
          <p className="guide-closing">
            Based on "[Video Title]" by [Channel].
            <a href="https://youtube.com/watch?v=[id]">Watch the full video</a>
          </p>
        </Section>
      </div>
    </Container>
  )
}
```

### Blog Images

**Location:** `public/blog/[article-slug]/`

```
public/blog/december-patch/
├── hero.jpg              # Primary image (for OG/meta)
├── bebop-changes.jpg     # Section image
├── grey-talon-buffs.jpg  # Section image
└── ...
```

**Selection criteria:**
- Screenshots with text overlays, UI, or clear visuals
- Timestamps matching key content sections
- Deduplicate similar frames (keep clearest)
- Prefer frames near topic transitions

**NOT in public/blog/:** App assets (hero portraits, item icons) stay in `public/assets/`

---

## Content Structure: Patch Notes Style

Optimized for scannable readability:

### Quick Summary Section (Top of Article)

Always include a Quick Summary after the intro with nested sublists per hero:

```tsx
<Section>
  <h2>Quick Summary</h2>
  <div className="stat-box">
    <h3>Buffs</h3>
    <ul className="hero-changes-list">
      <li><strong>Bebop</strong>
        <ul>
          <li>Stamina: 2 → 3</li>
          <li>Health per Boon: +46 → +52</li>
          <li>Sticky Bomb Spirit Scaling: 1.1 → 1.5</li>
        </ul>
      </li>
      {/* More heroes... */}
    </ul>
  </div>

  <div className="stat-box">
    <h3>Nerfs / Tradeoffs</h3>
    <ul className="hero-changes-list">
      {/* Heroes with nerfs... */}
    </ul>
  </div>

  {/* Link to official notes - REQUIRED at top */}
  <p style={{ marginTop: 'var(--spacing-md)', fontSize: '0.9rem' }}>
    <a href="[PATCH_NOTES_URL]" style={{ color: 'var(--accent-orange)' }}>
      See official patch notes →
    </a>
  </p>

  {/* Collapsible raw notes drawer */}
  <details className="raw-notes-drawer">
    <summary>View Raw Patch Notes</summary>
    <div className="raw-notes-content">
      <table className="patch-table">
        {/* Full data table */}
      </table>
    </div>
  </details>
</Section>
```

### Hero/Topic Sections

```tsx
<Section>
  <h2>Bebop</h2>

  {/* Image if available */}
  <img
    src="/blog/december-patch/bebop-changes.jpg"
    alt="Bebop bomb damage scaling"
    className="article-image"
  />

  {/* Quick summary box */}
  <div className="stat-box">
    <h3>Key Changes</h3>
    <ul>
      <li><strong>Base Stamina:</strong> 2 → 3 bars</li>
      <li><strong>Health per Boon:</strong> +46 → +52</li>
      <li><strong>Bomb Base Damage:</strong> 100 → 75 (but scaling increased)</li>
    </ul>
  </div>

  {/* Brief factual note - NO speculation */}
  <p>
    The bomb scaling changes are the headline. Base damage dropped but
    spirit scaling increased from 1.1 to 1.5.
  </p>

  {/* Tactical callout - only if from video source */}
  <TipBox variant="warning">
    <strong>Counter Play:</strong> Per the video, Debuff Remover and
    Reactive Barrier are essential against Bebop this patch.
  </TipBox>
</Section>
```

### Structure Pattern

1. **Hero/Topic Header** (h2)
2. **Visual** (screenshot if relevant)
3. **Changes Box** (stat-box with bullet points)
4. **Brief factual note** (1-2 sentences, no speculation)
5. **Tactical Note** (TipBox - only if sourced from video)

Repeat for each hero/topic.

### Footer Section

```tsx
<Section>
  <p className="guide-closing">
    [Brief factual summary of patch scope]
  </p>
  <p style={{ marginTop: 'var(--spacing-md)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
    Based on <a href="[VIDEO_URL]">"[Video Title]"</a> by [Channel].
    Official patch notes: <a href="[PATCH_NOTES_URL]">[Patch Date] Update</a>
  </p>
</Section>
```

**Key Rules:**
- Patch notes link at TOP (under summary) AND bottom (footer)
- Video link at bottom only
- No speculation - stick to facts from video/patch notes
- Use nested `hero-changes-list` for Quick Summary bullets

---

## Content Transformation Rules

| From (Video) | To (Article) |
|--------------|--------------|
| Rambling explanation | Single clear statement |
| Repeated points | One strong version |
| "Pretty powerful stuff" | Specific: "30% bullet evasion" |
| Tangents | Cut entirely |
| Anecdotes | Evidence-backed claims |

### Preserve

- All numeric values (patch numbers are sacred)
- Hero/ability names (exact spelling)
- Comparative context ("from X to Y")
- Creator attribution

### Add

- Bebop bias statement (intro, required)
- Counter-play insights where relevant
- Links to related guides on the site

---

## Bebop Bias (Required)

Every article MUST include tongue-in-cheek Bebop bias in the intro.

**For patch notes covering Bebop:**
```tsx
<p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
  Bebop received the buffs he deserves this patch. The other heroes
  got some changes too, I guess.
</p>
```

**For patch notes NOT covering Bebop:**
```tsx
<p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
  While Bebop wasn't touched this patch (he's already perfect),
  these changes will affect how you play against him.
</p>
```

---

## Image Handling

### Selection Process

1. **Map transcript sections to timestamps**
2. **Check available screenshots at those timestamps**
3. **Prefer frames with:**
   - Text overlays / patch note UI
   - Clear hero visuals
   - Ability demonstrations
   - Charts or comparisons
4. **Deduplicate:** If multiple similar frames, keep sharpest

### Copy to Public

```bash
# From scrape
bebop-patch_ABC123/screenshots/00-01-00.jpg

# To public (renamed descriptively)
public/blog/december-patch/bebop-bomb-scaling.jpg
```

### Fallback

If no good screenshots available:
- Use existing hero assets from `public/assets/heroes/`
- Or omit images (article works without)

---

## Integration Steps

After generating article:

1. **Add route to `App.tsx`:**
```tsx
<Route path="/december-patch" element={<DecemberPatch />} />
```

2. **Add to guides directory (`Guides.tsx`):**
```tsx
{
  title: 'December 2024 Patch Breakdown',
  description: 'Hero buffs and meta shifts for the holidays',
  path: '/december-patch',
  status: 'Available'
}
```

3. **Test locally:** `npm run dev` → verify at route

4. **Deploy:** `git push origin mainline`

---

## Pre-Publish Checklist

**Content:**
- [ ] Bebop bias in intro (REQUIRED)
- [ ] All patch values accurate (numbers are sacred)
- [ ] Hero/ability names correct
- [ ] Video attribution with link

**Technical:**
- [ ] useMetaTags() configured
- [ ] Route added to App.tsx
- [ ] Entry in Guides.tsx
- [ ] Images copied to public/blog/[slug]/
- [ ] No console errors
- [ ] Mobile responsive (375px, 768px, 1200px)

**Design:**
- [ ] CSS variables only (no hardcoded colors)
- [ ] Uses stat-box for changes
- [ ] Uses TipBox for callouts
- [ ] Follows patch notes structure pattern

---

## Quick Reference

| What | Where |
|------|-------|
| Scrape input | `[slug]_[id]/` (project root or specified) |
| Article output | `src/pages/[Name].tsx` |
| Blog images | `public/blog/[slug]/` |
| App assets | `public/assets/` (unchanged) |
| Route config | `src/App.tsx` |
| Directory listing | `src/pages/Guides.tsx` |

---

**Document Owner:** chreez (Bebop Main)
**Last Updated:** 2024-12-30
**Status:** Active
