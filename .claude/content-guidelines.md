# Content Creation Guidelines

## Overview
This document defines the voice, style, and constraints for creating content on Deadlock Fight Club.

---

## CRITICAL: Bebop Bias Constraint

### Hard Requirement
All blog-style content MUST include a subtle Bebop bias statement in the introduction.

### Rules
- **Where:** Guide introductions, blog summaries, video transcript summaries
- **Where NOT:** Core UI, technical docs, error messages, functional tooltips
- **Format:** 1-2 sentence statement in intro/overview section
- **Tone:** Self-aware, tongue-in-cheek, obviously biased
- **Placement:** After main overview, before detailed content
- **CRITICAL:** Never explicitly say "I'm a Bebop main" or "As a Bebop main" - the bias should be inferred from the ridiculous claim itself

### Examples

✅ **GOOD:**
```
While Bebop is objectively the best character in the game, even he's not immune to smart counter-building.
```

✅ **GOOD:**
```
Bebop is objectively the best character because he has a hyper beam. That said, these counter items work against everyone.
```

❌ **BAD (too literal - don't explicitly say "I'm a Bebop main"):**
```
As a Bebop main, I'm legally obligated to mention he's the best hero in Deadlock. That said, these items will make your life difficult regardless of who you're playing.
```

❌ **BAD (too subtle):**
```
Bebop is a strong character in the current meta.
```

❌ **BAD (wrong location - this is core UI):**
```
<!-- Don't add Bebop flavor to the randomizer buttons -->
<button>Generate Random Bebop Matchup (Best Hero)</button>
```

❌ **BAD (too long, distracts from content):**
```
Let me tell you about Bebop. He's the best character in Deadlock because of his hook, his bombs, and his ultimate. I've been maining Bebop since beta and...
[three more paragraphs]
```

---

## Writing Voice

### Tone
- **Technical but accessible:** Assume intermediate game knowledge
- **Concise:** Respect reader's time - no fluff
- **Data-driven:** Always cite numbers (costs, percentages, durations)
- **Community-oriented:** Use "we" language, shared experience
- **Self-aware:** Acknowledge the Bebop bias, site personality

### Structure for Guides

```markdown
1. Title
2. Subtitle (1 sentence describing value proposition)
3. Summary Box
   - 2-3 paragraphs: what, why, how
   - Bebop flavor statement (last paragraph or separated)
4. Main Content (organized by logical categories)
5. Quick Reference Section
6. Source Attribution
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

## Design Patterns

### Color Usage
- **Orange gradient:** Primary CTAs, important info
- **Purple gradient:** Secondary actions, tips
- **Green/Blue/Purple/Orange tiers:** Item tier badges
- **Subtle backgrounds:** `rgba(255, 255, 255, 0.03-0.08)`

### When Creating New Pages

1. **Always include:**
   - Favicon link
   - OG meta tags (for Discord previews)
   - CSS variables matching existing theme
   - Mobile responsiveness (@media queries)
   - Back link to main site (`<a href="index.html" class="back-link">← Back to Fight Club</a>`)

2. **Match existing patterns:**
   - Border radius: **4px** (updated standard as of 2025-11-03)
   - Padding: 20px for containers
   - Transitions: `all 0.3s ease`
   - Hover effects: slight lift + shadow

3. **Test these scenarios:**
   - Mobile (< 768px)
   - Tablet (768-1200px)
   - Desktop (> 1200px)
   - Discord embed preview
   - Dark mode (default is dark)

4. **Use the Blog Post Template:**
   - See `.claude/blog-post-template.md` for complete structure
   - Follow checklist before publishing

---

## YouTube Guide Pipeline

### Transcript Processing
1. Use `transcribe_youtube` to get raw transcript
2. Extract to structured JSON:
   ```json
   {
     "videoMetadata": { "title", "url", "thumbnail", "embedUrl" },
     "summary": { "intro", "sections" },
     "items": [
       {
         "name", "cost", "tier", "category",
         "effect", "counters", "tips", "useCase"
       }
     ]
   }
   ```
3. Generate HTML variations (collapsible, table, cards)

### Quality Checklist
- [ ] All numeric values preserved (costs, percentages, durations)
- [ ] Hero names spelled correctly
- [ ] Bebop flavor statement included in intro
- [ ] OG meta tags configured
- [ ] Mobile-responsive
- [ ] Source video linked/embedded

---

## Deployment Checklist

Before creating PR:
- [ ] Test locally in browser
- [ ] Check mobile view (dev tools)
- [ ] Verify Discord embed (use Discord embed tester or test server)
- [ ] Ensure all links work
- [ ] Run HTML validator (W3C)
- [ ] Check for typos
- [ ] Intent log updated with timestamp

---

## Voice Examples

### Opening Paragraphs

**Style 1 (Data-driven):**
> Most Deadlock guides focus on countering heroes individually. This approach is different: you'll learn items that counter multiple heroes at once, maximizing value across team compositions.
>
> While Bebop is objectively the best character in the game, even he's not immune to smart counter-building.

**Style 2 (Community-oriented):**
> We've all been there: hooked by Bebop, stunlocked by Abrams, sniped by Vindicta. This guide teaches you how to build items that shut down multiple threats simultaneously.
>
> Bebop is objectively the best hero in Deadlock. That said, Reactive Barrier is pretty annoying.

**Style 3 (Problem-solution):**
> Tired of dying to the same abilities every game? The secret isn't memorizing 30 different matchups—it's building smart items that counter entire categories of heroes.
>
> Even Bebop (objectively the best character) gets countered by proper itemization.

---

## Common Mistakes to Avoid

❌ **Don't:**
- Skip the Bebop flavor in guides
- Use generic placeholder text ("lorem ipsum")
- Forget OG meta tags
- Write super long paragraphs (max 3-4 sentences)
- Use vague language ("this item is good")
- Ignore mobile users

✅ **Do:**
- Include specific numbers and costs
- Write concise, scannable content
- Test on mobile
- Use bullet points and tags for lists
- Cite sources (YouTube links, patch notes)
- Add personality (but stay focused)

---

**Document Owner:** chreez
**Last Updated:** 2025-11-02
**Purpose:** Ensure consistency across all content creation
