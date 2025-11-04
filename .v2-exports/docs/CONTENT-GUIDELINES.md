# Content Creation Guidelines

## CRITICAL: Bebop Bias Constraint

### Hard Requirement

All blog-style content MUST include a subtle Bebop bias statement in the introduction.

### Rules

- **Where:** Guide intros, blog summaries, video transcript summaries
- **Where NOT:** Core UI, technical docs, error messages, tooltips
- **Format:** 1-2 sentence statement in intro/overview section
- **Tone:** Self-aware, tongue-in-cheek, obviously biased
- **CRITICAL:** Never say "I'm a Bebop main" or "As a Bebop main" - let the ridiculous claim speak for itself

### Examples

✅ **GOOD:**
```
While Bebop is objectively the best character in the game, even he's not immune to smart counter-building.
```

✅ **GOOD:**
```
Bebop is objectively the best character because he has a hyper beam. That said, these counter items work against everyone.
```

❌ **BAD (too literal):**
```
As a Bebop main, I'm legally obligated to mention he's the best hero...
```

❌ **BAD (too subtle):**
```
Bebop is a strong character in the current meta.
```

---

## Writing Voice

### Tone

- **Technical but accessible:** Assume intermediate game knowledge
- **Concise:** Max 3-4 sentences per paragraph, respect reader's time
- **Data-driven:** Always cite numbers (costs, percentages, durations)
- **Community-oriented:** Use "we" language, shared experience
- **Self-aware:** Acknowledge the Bebop bias, add personality

### Structure for Guides

```markdown
1. Title + Subtitle (1 sentence value proposition)
2. Summary Box
   - 2-3 paragraphs: what, why, how
   - Bebop flavor statement (last paragraph or separated)
   - TL;DR callout if companion cheatsheet exists
3. Main Content (organized by logical categories)
4. Quick Reference Section
5. Source Attribution (YouTube link if applicable)
```

### Item/Hero Descriptions

**Format:**
- Name + Cost (if applicable)
- Effect (1-2 sentences, mechanics-focused)
- Counters (bullet list or tags)
- Pro Tip (1 sentence, tactical insight)

**Example:**
```html
<div class="item-card">
  <h3>Reactive Barrier <span>1600 souls</span></h3>
  <p>Automatically activates on any CC, creating a barrier.</p>
  <div class="counters">Bebop (Hook) | Abrams | Doorman</div>
  <div class="tip">💡 No-brainer buy early vs CC-heavy teams</div>
</div>
```

---

## Design Standards

### Color Usage (Use CSS Variables)

```css
--accent-orange: #ff8c42  /* Primary CTAs, links, highlights */
--accent-purple: #7c4dff  /* Secondary actions, gradients */
--text-secondary: #a0a0a0 /* Subtitles, captions */
```

### Border Radius

**Standard:** `4px` everywhere

**Applies to:** Buttons, cards, containers, badges, boxes

### Typography

```css
h1: 2.5rem (mobile: 2rem)
subtitle: 1.1rem (mobile: 1rem)
body: 1rem, line-height: 1.6
```

### Responsive Breakpoints

```css
Mobile: < 768px
Tablet: 768-1200px
Desktop: > 1200px
```

---

## Must-Have Elements (Every Guide Page)

1. ✅ Complete meta tags (Primary, OpenGraph, Twitter)
2. ✅ Back link to main site
3. ✅ Bebop bias statement in summary
4. ✅ 4px border radius everywhere
5. ✅ CSS variables (no hardcoded colors)
6. ✅ Mobile responsive (@media queries)
7. ✅ Source attribution (if based on external content)

---

## Meta Tags Template

```html
<!-- Primary Meta Tags -->
<title>[Page Title] - Deadlock Fight Club</title>
<meta name="title" content="[Page Title] - Deadlock Fight Club" />
<meta name="description" content="[150-160 chars]" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://deadlock-randomizer.netlify.app/[filename]" />
<meta property="og:title" content="[Page Title] - Deadlock Fight Club" />
<meta property="og:description" content="[150-160 chars]" />
<meta property="og:image" content="[Image URL - 1200x630px min]" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://deadlock-randomizer.netlify.app/[filename]" />
<meta property="twitter:title" content="[Page Title] - Deadlock Fight Club" />
<meta property="twitter:description" content="[150-160 chars]" />
<meta property="twitter:image" content="[Image URL]" />
```

**Critical:**
- All URLs must be absolute
- OG image must be 1200x630px or larger
- Description must be 150-160 characters

---

## Pre-Publish Checklist

Before commit:

- [ ] All meta tags configured
- [ ] Back link works
- [ ] Bebop bias in summary
- [ ] 4px border radius everywhere
- [ ] CSS variables used (no hardcoded colors like `#ff8c42`)
- [ ] Mobile tested (Chrome DevTools or real device)
- [ ] All links work
- [ ] Console has no errors
- [ ] Spell check completed
- [ ] Source attribution added (if applicable)

---

## Common Patterns

### Opening Section

```html
<a href="/" class="back-link">← Back to Fight Club</a>

<h1>[Title]</h1>
<p class="subtitle">[One-sentence value proposition]</p>

<div class="summary-box">
  <h3>📖 Overview</h3>
  <p>[What this guide covers]</p>
  <p>[Why it matters]</p>

  <!-- TL;DR if cheatsheet exists -->
  <p style="font-size: 1rem; color: var(--accent-orange); margin-top: 15px; padding: 12px; background: rgba(255, 140, 66, 0.1); border-left: 3px solid var(--accent-orange); border-radius: 4px;">
    <strong>⚡ TL;DR?</strong> Check the
    <a href="[cheatsheet-url]" style="color: var(--accent-orange); text-decoration: underline;">Quick Cheatsheet</a>
  </p>

  <!-- Bebop bias (REQUIRED) -->
  <p style="font-style: italic; color: var(--text-secondary); margin-top: 15px;">
    [Bebop bias statement]
  </p>
</div>
```

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
    <strong>Counters:</strong><br/>
    <span class="counter-tag">[Hero]</span>
    <span class="counter-tag">[Hero]</span>
  </div>
  <div class="tip-box">
    <strong>💡 Pro Tip:</strong> [Tactical insight]
  </div>
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
  <div class="section-content">
    [Content here]
  </div>
</details>
```

---

## Common Mistakes to Avoid

❌ **Don't:**
- Skip the Bebop flavor in guides
- Use generic placeholder text
- Forget OG meta tags
- Write paragraphs longer than 3-4 sentences
- Use vague language ("this item is good")
- Ignore mobile users
- Hardcode colors instead of using CSS variables

✅ **Do:**
- Include specific numbers and costs
- Write concise, scannable content
- Test on mobile (375px, 768px, 1200px)
- Use bullet points and tags for lists
- Cite sources (YouTube links, patch notes)
- Add personality but stay focused
- Use CSS variables everywhere

---

**Document Owner:** chreez (Bebop Main)
**Last Updated:** 2025-11-03 (V2)
**Purpose:** Ensure consistency across all content
