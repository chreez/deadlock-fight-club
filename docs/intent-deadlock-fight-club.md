# Deadlock Fight Club - Intent Log

## 2025-11-02 19:00:00 - PROJECT INCEPTION

**Project Name:** Deadlock Fight Club
**Primary Purpose:** 1v1 all random items and random character generator for Deadlock game

**Core Features:**
- Random hero selection for 1v1 matchups
- Random item loadout generation
- Fight club matchup visualizer

---

## 2025-11-02 19:15:00 - FEATURE ADDITION: YouTube Guide Integration System

**Intent:** Transform YouTube guide transcripts into structured, searchable reference materials

**Problem Solved:** Players need quick, bookmark-friendly access to counter-item knowledge without rewatching 10+ minute videos

**Implementation Approach:**
1. Manual transcription pipeline using `transcribe_youtube` command
2. Structured data extraction from transcripts
3. Multiple UI variations for user testing and feedback

**Success Criteria:**
- ✅ Discord OG preview image displays correctly
- ✅ Guide preserves all information from source video (lossless)
- ✅ Mobile-responsive design matching existing theme
- ✅ Three UI variations delivered for comparison
- ✅ **CRITICAL: Bebop flavor requirement** (see Design Constraints below)

**First Implementation:**
- Source: "The BEST Items To Counter EVERY Hero In Deadlock" (https://youtu.be/Kdm-3hhR9SA)
- Content: Comprehensive counter-items guide organized by category
- Deliverables:
  - Main guide page (collapsible sections - default)
  - Variation 1: Collapsible accordion view
  - Variation 2: Searchable table view
  - Variation 3: Visual card grid view

---

## Design Constraints

### HARD CONSTRAINT: Bebop Bias Easter Egg

**Requirement:** All blog-style content must subtly acknowledge the site owner's Bebop main status.

**Implementation Rules:**
- Apply to: Blog posts, guides, summaries (NOT core functionality like randomizers)
- Format: Brief, obvious-but-charming bias statement in intro sections
- Tone: Self-aware, tongue-in-cheek
- Example: "While Bebop is objectively the best character in the game, even he's not immune to smart counter-building."

**Why This Matters:**
- Adds personality and voice to the site
- Creates community inside jokes
- Distinguishes content from generic guides
- No sacrifice to pragmatic value of content

**When to Use:**
- Guide introductions
- Blog post summaries
- Video transcript summaries
- Community-facing documentation

**When NOT to Use:**
- Core app UI (randomizer, fight club generator)
- Technical documentation
- Error messages
- Functional tooltips

---

## Milestones

### ✅ Completed
- [x] Initial Fight Club randomizer (1v1 hero + items)
- [x] Netlify deployment setup
- [x] First YouTube guide integration (counter items)
- [x] Three UI variation designs for testing

### 🔄 In Progress
- [ ] YouTube guide pipeline automation (transcribe_youtube → structured guide)
- [ ] Counter guide user testing (determine preferred UI variation)
- [ ] Community feedback integration

### 📋 Planned
- [ ] Expand guide library (ability guides, hero matchups, meta analysis)
- [ ] Search functionality across all guides
- [ ] User-submitted content pipeline
- [ ] Guide versioning system (track patch updates)
- [ ] Mobile app consideration

---

## Future Automation Pipeline

**Goal:** On-demand guide generation from YouTube videos

**Process:**
1. User provides YouTube URL
2. `transcribe_youtube` command extracts transcript
3. LLM structures content into JSON
4. Generator creates all three UI variations
5. Deployment to Netlify

**Benefit:** Scale guide library without manual HTML writing

---

## Technical Decisions

### Why Plain HTML/CSS/JS?
- Zero build step = instant deployment
- Maximum compatibility
- Easy community contributions
- No framework lock-in
- Netlify edge caching works perfectly

### Why Three UI Variations?
- Different users prefer different layouts
- A/B testing without infrastructure
- Learn what works before committing
- Easy to maintain all three (shared CSS variables)

### Why Netlify?
- Already configured
- Free tier sufficient
- Automatic HTTPS
- Discord OG preview support
- CDN included

---

## Content Guidelines

### Writing Voice
- **Technical but accessible:** Assume intermediate game knowledge
- **Concise:** Respect reader's time
- **Data-driven:** Cite costs, percentages, mechanics
- **Community-oriented:** "We" language, shared experience
- **Bebop-biased (where appropriate):** See Design Constraints above

### Structure Pattern (for guides)
1. Overview summary (2-3 paragraphs)
2. Bebop flavor statement (1 sentence in intro)
3. Category sections (logical grouping)
4. Item details (name, cost, effect, counters, pro tips)
5. Quick reference summary
6. Source attribution

---

## Changelog

| Date | Feature | Status | Notes |
|------|---------|--------|-------|
| 2025-11-02 | Project inception | ✅ | Fight club randomizer |
| 2025-11-02 | YouTube guide system | ✅ | Counter items guide + 3 variants |
| 2025-11-02 | Bebop flavor constraint | ✅ | Documented as hard requirement |

---

**Document Owner:** chreez (Bebop Main)
**Last Updated:** 2025-11-02 19:15:00
**Status:** Active Development
