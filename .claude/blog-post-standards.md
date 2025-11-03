# Blog Post Standards - Quick Reference

## Purpose

This document provides steering rules for AI assistants and developers creating new blog posts for Deadlock Fight Club. These standards ensure consistency with the existing counter guide.

---

## ⚡ Quick Start

**When creating a new blog post:**

1. Start from `.claude/blog-post-template.md`
2. Follow the checklist at the bottom
3. Review against existing `counter-guide.html` for style matching
4. Test Discord OG preview before pushing

---

## 🎯 Critical Requirements

### Must-Have Elements

Every blog post MUST include:

1. ✅ **Complete meta tags** (Primary, OpenGraph, Twitter)
2. ✅ **Back link** to `index.html`
3. ✅ **Bebop bias statement** in summary box
4. ✅ **4px border radius** everywhere (updated standard)
5. ✅ **CSS variables** (no hardcoded colors)
6. ✅ **Mobile responsiveness** (@media queries)
7. ✅ **Source attribution** (if based on external content)

### Must-Have CSS Classes

```css
.back-link       /* Orange link with hover effect */
.summary-box     /* Frosted glass intro container */
.container       /* Max-width wrapper (1200px) */
```

---

## 🎨 Design Standards

### Colors (Use CSS Variables)

```css
--accent-orange: #ff8c42; /* Primary CTAs, links, highlights */
--accent-purple: #7c4dff; /* Secondary actions, gradients */
--text-secondary: #a0a0a0; /* Subtitles, captions */
```

### Border Radius

**Standard:** `4px` everywhere (as of 2025-11-03)

**Applies to:**

- Buttons
- Cards
- Containers
- Badges
- Boxes

### Typography

```css
h1: 2.5rem (mobile: 2rem)
subtitle: 1.1rem (mobile: 1rem)
body: 1rem, line-height: 1.6
```

---

## 📝 Content Structure

### Opening Section Template

```html
<a href="index.html" class="back-link">← Back to Fight Club</a>

<h1>[Title]</h1>
<p class="subtitle">[One-sentence value proposition]</p>

<!-- Source link if applicable -->
<div class="video-link-container">
  <a href="[url]" target="_blank" class="youtube-link">
    <span class="youtube-icon">▶</span>[Link Text]
  </a>
</div>

<div class="summary-box">
  <h3>📖 [Section Title]</h3>
  <p>[Overview paragraph 1]</p>
  <p>[Overview paragraph 2]</p>

  <!-- TL;DR callout if companion cheatsheet exists -->
  <p style="..."><strong>⚡ TL;DR?</strong> If you don't want to read any of this...</p>

  <!-- Bebop bias (REQUIRED) -->
  <p style="...">[Bebop bias statement]</p>
</div>
```

### Bebop Bias Rules

**DO:**

- ✅ Place in summary box (last paragraph or separated)
- ✅ Use natural phrasing ("Bebop is objectively the best character...")
- ✅ Keep it 1-2 sentences
- ✅ Make it self-aware and charming

**DON'T:**

- ❌ Say "I'm a Bebop main" or "As a Bebop main"
- ❌ Make it too long (distracts from content)
- ❌ Make it too subtle (must be obvious)
- ❌ Add it to core UI elements

**Example from counter-guide.html:**

```
While Bebop is objectively the best character in the game, even he's not immune to smart counter-building. (Though Reactive Barrier does get mentioned suspiciously often in this guide... just saying.)
```

---

## 🔗 Meta Tags Template

```html
<!-- Primary Meta Tags -->
<title>[Page Title] - Deadlock Fight Club</title>
<meta name="title" content="[Page Title] - Deadlock Fight Club" />
<meta name="description" content="[150-160 chars]" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://deadlock-randomizer.netlify.app/[filename].html" />
<meta property="og:title" content="[Page Title] - Deadlock Fight Club" />
<meta property="og:description" content="[150-160 chars]" />
<meta property="og:image" content="[Image URL - 1200x630px min]" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://deadlock-randomizer.netlify.app/[filename].html" />
<meta property="twitter:title" content="[Page Title] - Deadlock Fight Club" />
<meta property="twitter:description" content="[150-160 chars]" />
<meta property="twitter:image" content="[Image URL]" />
```

**Critical:**

- All URLs must be absolute (include full domain)
- OG image must be 1200x630px or larger
- Description must be 150-160 characters

---

## 📱 Mobile Responsiveness

Required breakpoints:

```css
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  /* Single column layouts */
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }
  body {
    padding: 10px;
  }
}
```

Test on:

- Desktop (> 1200px)
- Tablet (768-1200px)
- Mobile (< 768px)
- Small mobile (< 480px)

---

## ✍️ Writing Guidelines

### Paragraph Length

- **Max 3-4 sentences per paragraph**
- Use line breaks for readability
- Break up long sections with headings

### Tone

- Technical but accessible
- Data-driven (include costs, percentages, durations)
- Community-oriented ("we" language)
- Self-aware (acknowledge Bebop bias)
- Concise (respect reader's time)

### Data Presentation

```html
<!-- Always include specific numbers -->
<span class="item-cost">1600 souls</span>
<span class="counter-tag">35% healing reduction</span>
<div class="tip-box">💡 Pro Tip: ...</div>
```

---

## 🚀 Pre-Publish Checklist

Before `git push`:

- [ ] All meta tags configured (check with validator)
- [ ] Back link to `index.html` works
- [ ] Bebop bias statement in summary box
- [ ] Border radius is 4px everywhere
- [ ] CSS variables used (no hardcoded `#ff8c42`, use `var(--accent-orange)`)
- [ ] Mobile tested (Chrome DevTools or real device)
- [ ] All links work (internal and external)
- [ ] Discord preview tested (https://www.opengraph.xyz/)
- [ ] Spell check completed
- [ ] Source attribution added (if applicable)
- [ ] No console errors in browser
- [ ] Matches existing counter-guide.html style

---

## 🔍 Reference Files

**Primary Reference:**

- `counter-guide.html` - Main blog post example (default structure)

**Supporting References:**

- `counter-cheatsheet.html` - Companion quick reference
- `counter-guide-variant-collapsible.html` - Collapsible UI variation
- `counter-guide-variant-table.html` - Table UI variation
- `counter-guide-variant-cards.html` - Card grid UI variation

**Documentation:**

- `.claude/blog-post-template.md` - Complete HTML template
- `.claude/content-guidelines.md` - Comprehensive writing guide
- `docs/intent-deadlock-fight-club.md` - Project intent log

---

## 🎯 Common Patterns from counter-guide.html

### Item Card Structure

```html
<div class="item-card">
  <div class="item-header">
    <span class="item-name">[Item Name]</span>
    <div>
      <span class="item-cost">[Cost] souls</span>
      <span class="item-tier tier-[1-4]">Tier [1-4]</span>
    </div>
  </div>
  <div class="item-effect">[Description]</div>
  <div class="counters-list">
    <strong>Counters:</strong><br />
    <span class="counter-tag">[Hero]</span>
    <span class="counter-tag">[Hero]</span>
  </div>
  <div class="tip-box"><strong>💡 Pro Tip:</strong> [Tactical insight]</div>
</div>
```

### Collapsible Section

```html
<details open>
  <summary class="section-header">
    <span class="category-icon">[Emoji]</span>
    [Section Title]
    <span class="toggle-icon">▼</span>
  </summary>
  <div class="section-content">[Content here]</div>
</details>
```

### TL;DR Callout (New Pattern - 2025-11-03)

```html
<p
  style="font-size: 1rem; color: var(--accent-orange); margin-top: 15px; padding: 12px; background: rgba(255, 140, 66, 0.1); border-left: 3px solid var(--accent-orange); border-radius: 4px;"
>
  <strong>⚡ TL;DR?</strong> If you don't want to read any of this, check out the
  <a href="counter-cheatsheet.html" style="color: var(--accent-orange); text-decoration: underline;"
    >Quick Cheatsheet</a
  >
  for instant hero-specific counters.
</p>
```

---

## 🔮 Future Refactor Plans

**When we implement multi-blog system:**

1. Create `/blog/` directory structure
2. Build blog index page with post listings
3. Add metadata JSON for each post
4. Implement tag/category system
5. Add RSS feed generation
6. Create post navigation (prev/next)
7. Add date stamps and author info
8. Implement search functionality

**Current single-post approach:**

- Posts live at root (`/counter-guide.html`)
- Navigation via footer links on `index.html`
- No blog index page yet

**Future multi-blog approach:**

- Posts in subdirectories (`/blog/counter-guide/`)
- Blog index at `/blog/`
- Tag filtering and search
- Chronological listing

---

## 💡 Pro Tips

1. **Start with template:** Copy `.claude/blog-post-template.md` verbatim, then customize
2. **Reference counter-guide.html:** When in doubt, match existing patterns
3. **Test Discord preview early:** Use https://www.opengraph.xyz/ to validate OG tags
4. **Mobile-first:** Test mobile view while building (don't wait until end)
5. **Use CSS variables:** Never hardcode colors - always use `var(--accent-orange)` etc.
6. **Keep Bebop bias short:** 1-2 sentences max, don't let it distract
7. **Add companion cheatsheet:** Consider creating a quick-reference version
8. **Source attribution:** Always link back to original YouTube video or source

---

**Document Owner:** chreez
**Last Updated:** 2025-11-03
**Purpose:** Steering rules for consistent blog post creation
**Status:** Active - use for all new content
