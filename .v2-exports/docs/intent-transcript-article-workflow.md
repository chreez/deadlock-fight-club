# Intent Log: Transcript→Article Workflow

## Project Name

transcript-article-workflow

---

## 2025-11-03 (Session Start) - CLARIFY LOOP

**User Request:**
Generate a structured markdown file from YouTube transcript in `docs/guides/02-deadlock-midgame-guide`. Source video: https://youtu.be/k9R1xNCqJ5Y. Use yt-dlp to extract metadata for frontmatter. Create chronologically structured, exhaustive view of transcript with image placeholders for human follow-up. This is the first of many transcript transformations.

**Clarifications Resolved:**

1. **Project naming:** "transcript-article-workflow"
2. **Output location:** `docs/guides/02-deadlock-midgame-guide/article.md`
3. **Format choice:** Structured markdown article (Option B) - not blog-ready HTML, but full content with frontmatter written like a Word doc
4. **Processing strategy:** Single-pass LLM processing (Option A) - sufficient for ~2,700 word transcript, can scale later if needed

---

## 2025-11-03 - ECHO CHECK

**Deliverable:** Structured markdown article at `docs/guides/02-deadlock-midgame-guide/article.md`

**Must-include fact:** YAML frontmatter extracted via yt-dlp with video metadata

**Hardest constraint:** Designing as reproducible template workflow for future YouTube transcripts of varying lengths

**User Response:** ⏺ BLUEPRINT (requested before proceeding)

---

## 2025-11-03 - ⏺ BLUEPRINT

**Article Structure Presented:**

1. **YAML Frontmatter** - title, video_url, video_id, channel, publish_date, duration, thumbnail, description, transcript_source, article_status, created

2. **Article Header** - Title, subtitle, human TODO for review

3. **Main Content Structure** - Chronological sections based on transcript:
   - Introduction: The Mid Game Transition
   - Wave Management and Macro
   - Walker Stats and Economy
   - 5-Minute Combat Cycle
   - Power Spikes and Power Ramping
   - Farm Priority and Macro Soul Denial
   - Map Awareness and Intuition
   - Bringing It All Together: Mid Game Principles
   - Conclusion

4. **Placeholder Format Standards:**
   - `[IMAGE PLACEHOLDER: Description]`
   - `[HUMAN TODO: Action item]`
   - `[DATA NOTE: Verification needed]`

5. **Workflow Process:**
   - Extract metadata via yt-dlp
   - Transform transcript with LLM
   - Insert visual placeholders
   - Human reviews article.md
   - (Future) Transform to blog-post HTML

**User Response:** ⚠ RISK (requested failure scenario review)

---

## 2025-11-03 - ⚠ RISK

**Top 3 Failure Scenarios Identified:**

### RISK 1: yt-dlp Metadata Extraction Failure

- **Impact:** Incomplete frontmatter, breaks workflow template
- **Mitigation:** Graceful fallback with "Unknown" + human TODO tags, cache metadata, manual override option

### RISK 2: LLM Content Transformation Errors (HIGH PRIORITY)

- **Impact:** Hallucination, misinterpretation, over-summarization, inconsistent voice
- **Mitigation:**
  1. Include verbatim quotes from transcript in each section
  2. Add `[VERIFY]` tags next to extracted stats/numbers
  3. Keep first draft verbose (easier to trim than add)
  4. Include diff-check step for human comparison

### RISK 3: Workflow Doesn't Scale

- **Impact:** Works for 2,700-word guide but breaks on longer/different formats
- **Mitigation:** Modular design, chunking strategy, transcript-type detection, document assumptions

**User Response:** "implement mitigations for RISK 2: LLM Content Transformation Errors -- and then proceed"

---

## 2025-11-03 - YES-GO

**Risk 2 Mitigations Implemented:**

### Safeguards Built Into LLM Transformation:

1. **Verbatim quote anchors** - Each section includes direct transcript quotes marked as `> **Transcript Quote:**`
2. **[VERIFY] tags** - All stats/numbers tagged for human verification:
   - Walker HP values (5,800 and 9,000+)
   - Percentages (15% resist aura)
   - Timings (minute 16, 5-minute cycle, 10-14:30 window)
   - Durations (2-3 minute power spike windows)
   - Soul thresholds (2,000 souls warning)
   - Boon counts (4 boons from center sacrifice)
3. **Verbose-first approach** - Preserve detail, let humans trim
4. **Review checklist** - Built into article footer for human diff-check

---

## 2025-11-03 - DELIVERED

**Artifacts Created:**

1. **`docs/guides/02-deadlock-midgame-guide/article.md`** (6,891 words)
   - Complete YAML frontmatter with yt-dlp extracted metadata
   - 11 chronological sections with subsections
   - 15+ verbatim transcript quotes as verification anchors
   - 9 [VERIFY] tagged stats for human validation
   - 10 image placeholders with descriptive names
   - Human review checklist with 12 verification steps
   - Source attribution section

2. **Key Features Implemented:**
   - All numeric data marked with [VERIFY] tags
   - Direct quotes preserve transcript voice
   - Image placeholders describe needed visuals
   - HUMAN TODO callouts for asset creation
   - Review checklist guides verification process

3. **Metadata Extracted via yt-dlp:**
   - Title: "What the Hell is Deadlock's Midgame? (Complete Beginner Guide)"
   - Channel: BigBenDL
   - Upload Date: 2025-10-08
   - Duration: 12:03 (723 seconds)
   - Thumbnail URL: https://i.ytimg.com/vi/k9R1xNCqJ5Y/maxresdefault.jpg

**Git Commit:** `feat: Add transcript→article workflow with midgame guide`

---

## Workflow Summary

**Pipeline Stages Created:**

```
Transcript → Structured Article (markdown) → Blog Post (HTML/Astro)
            [THIS WORKFLOW]              [FUTURE WORKFLOW]
```

**Reproducible Template:**
This workflow can be applied to future YouTube transcripts by:

1. Running `yt-dlp --dump-json` to extract metadata
2. Using general-purpose LLM agent with RISK 2 safeguards prompt
3. Saving output to appropriate `docs/guides/` subdirectory
4. Human reviews using built-in checklist
5. (Future) Transform reviewed article.md to blog-ready HTML

**Assumptions & Limitations:**

- Works for single-narrator conceptual guides (2,000-10,000 words)
- May need adaptation for interviews, tutorials, or 15k+ word deep dives
- Requires manual asset creation (images, infographics, diagrams)
- Review checklist assumes human has access to game data for verification

---

**Document Owner:** Intent Translator MAX
**Created:** 2025-11-03
**Purpose:** Track decisions and execution for reproducible transcript→article workflow
**Status:** Complete - ready for future iterations
