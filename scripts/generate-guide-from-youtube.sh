#!/bin/bash
# Deadlock Fight Club - YouTube Guide Generator Pipeline
# Usage: ./scripts/generate-guide-from-youtube.sh <youtube_url> <guide_slug>
#
# Example: ./scripts/generate-guide-from-youtube.sh "https://youtu.be/Kdm-3hhR9SA" "counter-items"
#
# Requirements:
# - transcribe_youtube command installed
# - Claude API access (for structuring)
# - Node.js or Python for template generation (TBD)

set -e  # Exit on error

YOUTUBE_URL="$1"
GUIDE_SLUG="$2"

if [ -z "$YOUTUBE_URL" ] || [ -z "$GUIDE_SLUG" ]; then
    echo "Usage: $0 <youtube_url> <guide_slug>"
    echo "Example: $0 'https://youtu.be/VIDEO_ID' 'my-guide'"
    exit 1
fi

echo "🎬 Deadlock Fight Club - YouTube Guide Generator"
echo "================================================"
echo ""
echo "Video URL: $YOUTUBE_URL"
echo "Guide Slug: $GUIDE_SLUG"
echo ""

# Step 1: Create output directory
DOCS_DIR="docs"
TRANSCRIPT_FILE="$DOCS_DIR/${GUIDE_SLUG}-transcript.txt"
STRUCTURED_FILE="$DOCS_DIR/${GUIDE_SLUG}-structured.json"

mkdir -p "$DOCS_DIR"

echo "📝 Step 1: Transcribing YouTube video..."
echo "----------------------------------------"
# TODO: Replace with actual transcribe_youtube command when available
# For now, this is a placeholder that demonstrates the expected flow

if command -v transcribe_youtube &> /dev/null; then
    transcribe_youtube "$YOUTUBE_URL" > "$TRANSCRIPT_FILE"
    echo "✅ Transcript saved to: $TRANSCRIPT_FILE"
else
    echo "⚠️  transcribe_youtube command not found"
    echo "   Please install it or manually create: $TRANSCRIPT_FILE"
    exit 1
fi

echo ""
echo "🧠 Step 2: Structuring content with LLM..."
echo "----------------------------------------"
# TODO: Call Claude API or local LLM to structure transcript into JSON
# Expected output format:
# {
#   "videoMetadata": { "title", "url", "thumbnail", "embedUrl" },
#   "summary": { "intro", "sections" },
#   "items": [ { "name", "cost", "effect", "counters", "tips" } ]
# }

echo "⚠️  LLM structuring not yet implemented"
echo "   Please manually create: $STRUCTURED_FILE"
echo ""
echo "   Example structure:"
echo "   {
     "videoMetadata": {
       "title": "Video Title",
       "url": "$YOUTUBE_URL",
       "thumbnail": "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
       "embedUrl": "https://www.youtube.com/embed/VIDEO_ID"
     },
     "summary": {
       "intro": "Guide overview paragraph..."
     },
     "items": [
       {
         "name": "Item Name",
         "cost": 1600,
         "category": "Passive",
         "effect": "What it does...",
         "counters": ["Hero1", "Hero2"],
         "tips": "Pro tip..."
       }
     ]
   }"
echo ""

echo "🎨 Step 3: Generating HTML pages..."
echo "----------------------------------------"
# TODO: Generate three HTML variations from structured JSON
# - counter-guide-${GUIDE_SLUG}.html (main - collapsible)
# - counter-guide-${GUIDE_SLUG}-table.html (searchable table)
# - counter-guide-${GUIDE_SLUG}-cards.html (visual cards)

echo "⚠️  HTML generation not yet implemented"
echo "   Planned output files:"
echo "   - ${GUIDE_SLUG}-guide.html"
echo "   - ${GUIDE_SLUG}-guide-table.html"
echo "   - ${GUIDE_SLUG}-guide-cards.html"
echo ""

echo "📚 Step 4: Updating intent log..."
echo "----------------------------------------"
INTENT_LOG="docs/intent-deadlock-fight-club.md"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

if [ -f "$INTENT_LOG" ]; then
    echo "⚠️  Automated intent log update not yet implemented"
    echo "   Please manually add to: $INTENT_LOG"
    echo ""
    echo "   Suggested entry:"
    echo "   ## $TIMESTAMP - GUIDE ADDITION: [Guide Title]"
    echo "   - Source: $YOUTUBE_URL"
    echo "   - Generated via automated pipeline"
    echo ""
else
    echo "⚠️  Intent log not found: $INTENT_LOG"
fi

echo ""
echo "🎯 Next Steps (Manual)"
echo "======================"
echo "1. Review transcript: $TRANSCRIPT_FILE"
echo "2. Create structured JSON: $STRUCTURED_FILE"
echo "3. Generate HTML pages (manually for now)"
echo "4. Test all three UI variations"
echo "5. Update intent log with timestamp"
echo "6. Create PR for review"
echo ""
echo "💡 Future Automation:"
echo "   - Integrate Claude API for structuring"
echo "   - Add template engine (Handlebars/Jinja)"
echo "   - Auto-generate all three HTML variants"
echo "   - Git commit + PR creation"
echo ""

# Exit with status indicating manual steps required
exit 2
