# Blog Post Template for Deadlock Fight Club

## Overview
This template defines the standard structure for all blog posts on Deadlock Fight Club. Following this ensures consistency, proper SEO/social sharing, and maintains site personality.

---

## File Naming Convention

```
[topic-name].html
```

**Examples:**
- `counter-guide.html`
- `hero-matchups.html`
- `patch-notes-analysis.html`

---

## Required HTML Structure

### 1. Head Section (Meta Tags)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="favicon.png">

    <!-- Primary Meta Tags -->
    <title>[Page Title] - Deadlock Fight Club</title>
    <meta name="title" content="[Page Title] - Deadlock Fight Club">
    <meta name="description" content="[150-160 character description]">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://deadlock-randomizer.netlify.app/[filename].html">
    <meta property="og:title" content="[Page Title] - Deadlock Fight Club">
    <meta property="og:description" content="[150-160 character description]">
    <meta property="og:image" content="[Image URL - 1200x630px recommended]">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://deadlock-randomizer.netlify.app/[filename].html">
    <meta property="twitter:title" content="[Page Title] - Deadlock Fight Club">
    <meta property="twitter:description" content="[150-160 character description]">
    <meta property="twitter:image" content="[Image URL]">

    <style>
        /* CSS Variables and Styles (see below) */
    </style>
</head>
```

**Meta Tag Requirements:**
- ✅ All URLs must be absolute (include full domain)
- ✅ OG image must be at least 1200x630px for Discord/Facebook
- ✅ Description must be 150-160 characters for optimal display
- ✅ Title format: "[Topic] - Deadlock Fight Club"

---

### 2. CSS Variables (Required)

```css
:root {
    --bg-dark: #0a0a0b;
    --bg-secondary: #1a1a1f;
    --accent-orange: #ff8c42;
    --accent-purple: #7c4dff;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --weapon-color: #ff8c00;
    --vitality-color: #4caf50;
    --spirit-color: #9c27b0;
    --tier1-color: #4caf50;
    --tier2-color: #2196f3;
    --tier3-color: #9c27b0;
    --tier4-color: #ff9800;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-secondary) 100%);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 20px;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
```

---

### 3. Body Structure (Required Elements)

```html
<body>
    <div class="container">
        <!-- 1. BACK LINK (Required) -->
        <a href="index.html" class="back-link">← Back to Fight Club</a>

        <!-- 2. TITLE & SUBTITLE (Required) -->
        <h1>[Blog Post Title]</h1>
        <p class="subtitle">[One-sentence value proposition]</p>

        <!-- 3. SOURCE LINK (If applicable - e.g., YouTube video) -->
        <div class="video-link-container">
            <a href="[source-url]" target="_blank" rel="noopener noreferrer" class="youtube-link">
                <span class="youtube-icon">▶</span>[Link Text]
            </a>
        </div>

        <!-- 4. SUMMARY BOX (Required - includes Bebop bias) -->
        <div class="summary-box">
            <h3>📖 [Section Title]</h3>
            <p>[Introduction paragraph 1]</p>
            <p>[Introduction paragraph 2]</p>

            <!-- TL;DR Callout (If companion cheatsheet exists) -->
            <p style="font-size: 1rem; color: var(--accent-orange); margin-top: 15px; padding: 12px; background: rgba(255, 140, 66, 0.1); border-left: 3px solid var(--accent-orange); border-radius: 4px;">
                <strong>⚡ TL;DR?</strong> If you don't want to read any of this, check out the <a href="[cheatsheet-link].html" style="color: var(--accent-orange); text-decoration: underline;">[Cheatsheet Name]</a> for instant reference.
            </p>

            <!-- BEBOP BIAS STATEMENT (Required for blog posts) -->
            <p style="font-size: 0.95rem; color: var(--text-secondary); font-style: italic; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                [Bebop bias statement - see examples below]
            </p>
        </div>

        <!-- 5. MAIN CONTENT (Organized by sections) -->
        <h2>[Section Title]</h2>
        <div class="category-section">
            [Content here]
        </div>

        <!-- Additional sections as needed -->

    </div>
</body>
</html>
```

---

## Required CSS Components

### Back Link

```css
.back-link {
    display: inline-block;
    color: var(--accent-orange);
    text-decoration: none;
    margin-bottom: 15px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.back-link:hover {
    color: var(--accent-purple);
    transform: translateX(-3px);
}
```

### Title & Subtitle

```css
h1 {
    text-align: center;
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--accent-orange) 0%, var(--accent-purple) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}

.subtitle {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 30px;
}
```

### Summary Box

```css
.summary-box {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    padding: 25px;
    margin-bottom: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.summary-box h3 {
    color: var(--accent-orange);
    margin-bottom: 15px;
}

.summary-box p {
    margin-bottom: 12px;
    line-height: 1.7;
}
```

### Border Radius Standard

**All rounded elements must use 4px border radius:**

```css
border-radius: 4px;
```

This applies to:
- Cards
- Buttons
- Containers
- Boxes
- Badges

---

## Bebop Bias Statement Examples

**CRITICAL:** The bias must be stated naturally without saying "I'm a Bebop main" or "As a Bebop main"

### ✅ Good Examples

```html
<!-- Example 1: Counter Guide -->
<p>While Bebop is objectively the best character in the game, even he's not immune to smart counter-building. (Though Reactive Barrier does get mentioned suspiciously often in this guide... just saying.)</p>

<!-- Example 2: Hero Matchups -->
<p>Bebop is objectively the best character because he has a hyper beam. That said, these matchups apply to everyone.</p>

<!-- Example 3: Meta Analysis -->
<p>While Bebop clearly dominates the current meta (objectively speaking), understanding team composition counters will improve your win rate across all heroes.</p>

<!-- Example 4: Build Guide -->
<p>Even Bebop (objectively the best character) benefits from smart itemization. These builds work for everyone—yes, even inferior heroes.</p>
```

### ❌ Bad Examples (Don't Use These)

```html
<!-- Too literal - explicitly says "I'm a Bebop main" -->
<p>As a Bebop main, I'm legally obligated to mention he's the best hero.</p>

<!-- Too subtle - doesn't establish the bias clearly -->
<p>Bebop is a strong character in the current meta.</p>

<!-- Too long - distracts from content -->
<p>Let me tell you about Bebop. He's the best character in Deadlock because of his hook, his bombs, and his ultimate. I've been maining Bebop since beta and have over 500 hours...</p>

<!-- Wrong location - this is core UI -->
<button>Generate Random Bebop Matchup (Best Hero)</button>
```

---

## Mobile Responsiveness (Required)

```css
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .container {
        padding: 10px;
    }

    /* Adjust any grid layouts to single column */
    .cards-grid {
        grid-template-columns: 1fr;
    }
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

---

## Content Guidelines

### Writing Style

**DO:**
- ✅ Use concise, scannable paragraphs (2-4 sentences max)
- ✅ Include specific numbers (costs, percentages, durations)
- ✅ Use bullet points and tags for lists
- ✅ Add Pro Tips with 💡 emoji
- ✅ Write in active voice
- ✅ Use "we" language for community feel

**DON'T:**
- ❌ Write long, dense paragraphs
- ❌ Use vague language ("this is good", "try this")
- ❌ Skip the Bebop flavor in blog posts
- ❌ Forget mobile users
- ❌ Use generic placeholder text

### Tone

- Technical but accessible
- Self-aware and charming
- Data-driven
- Respectful of reader's time
- Community-oriented

---

## Source Attribution

If content is based on a YouTube video or external source:

```html
<!-- At the end of the guide -->
<div class="source-attribution">
    <p style="font-size: 0.9rem; color: var(--text-secondary); text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
        Content based on <a href="[source-url]" target="_blank" rel="noopener noreferrer" style="color: var(--accent-orange);">[Source Title]</a>
    </p>
</div>
```

---

## Pre-Publish Checklist

Before pushing to mainline:

- [ ] All meta tags configured (Primary, OG, Twitter)
- [ ] Back link to `index.html` included
- [ ] Bebop bias statement in summary box
- [ ] Border radius is 4px everywhere
- [ ] CSS variables used (not hardcoded colors)
- [ ] Mobile responsive (@media queries)
- [ ] All links tested (internal and external)
- [ ] Discord preview tested (OG image displays)
- [ ] Spell check completed
- [ ] Test on mobile device or dev tools
- [ ] Source attribution added (if applicable)

---

## Future Refactor Notes

**When we build multi-blog support:**

1. Create `/blog/` directory structure
2. Build blog index page with post listings
3. Add blog metadata JSON (title, date, excerpt, thumbnail)
4. Implement tag/category system
5. Add RSS feed
6. Create blog post navigation (previous/next)
7. Add reading time estimator

**Current Structure (Single Posts):**
```
/counter-guide.html
/counter-cheatsheet.html
```

**Future Structure (Multi-Blog):**
```
/blog/
  ├── index.html (blog listing)
  ├── counter-guide/
  │   ├── index.html
  │   └── metadata.json
  ├── hero-matchups/
  │   ├── index.html
  │   └── metadata.json
```

---

**Document Owner:** chreez
**Created:** 2025-11-03
**Purpose:** Standardize blog post creation and prepare for future multi-blog system
**Status:** Active - use for all new blog posts
