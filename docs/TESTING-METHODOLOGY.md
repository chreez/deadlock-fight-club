# Testing Methodology for Deadlock Fight Club

## Automated Testing Commands

### 1. Build Verification
```bash
npm run build
# Success criteria: Build completes without errors, all pages prerendered
```

### 2. Dev Server Health Check
```bash
curl -s http://localhost:4323/ | grep -q "fight-club" && echo "✓ Homepage loads" || echo "✗ Homepage broken"
curl -s http://localhost:4323/guides | grep -q "Deadlock Guides" && echo "✓ Guides page loads" || echo "✗ Guides broken"
curl -s http://localhost:4323/counter-guide | grep -q "Counter Items Guide" && echo "✓ Counter guide loads" || echo "✗ Counter guide broken"
curl -s http://localhost:4323/counter-cheatsheet | grep -q "Counter Cheatsheet" && echo "✓ Cheatsheet loads" || echo "✗ Cheatsheet broken"
```

### 3. Asset Verification
```bash
# Check if assets exist
ls public/assets/heroes/*.png | wc -l  # Should show ~29 hero portraits
ls public/assets/items/*/*.png | wc -l # Should show item icons

# Verify asset paths in HTML
curl -s http://localhost:4323/ | grep -o '/assets/heroes/[^"]*' | head -5
```

### 4. React Component Hydration Check
```bash
# Verify astro-islands are present (React components loading)
curl -s http://localhost:4323/ | grep -c "astro-island"  # Should be > 0
```

### 5. Production Build Size Check
```bash
npm run build && du -sh dist/  # Should be reasonable size
```

## Manual Testing Checklist

### Homepage (Fight Club Generator)
- [ ] Page loads without errors
- [ ] "Generate Fight Club Match" button appears
- [ ] Clicking button generates 2 random heroes
- [ ] Each hero shows portrait image
- [ ] Each hero gets 6 random items
- [ ] Items show tier badges (T1, T2, T3, T4)
- [ ] Items show cost badges
- [ ] Total cost displayed
- [ ] "Copy to Clipboard" button works
- [ ] "Randomize Match" generates new matchup
- [ ] Site header navigation works
- [ ] Mobile responsive (test at 375px width)

### Guides Page
- [ ] Page loads without errors
- [ ] Shows 2 guide cards (Counter Guide, Cheatsheet)
- [ ] Cards have hover effects
- [ ] Clicking cards navigates to correct pages
- [ ] Category and read time displayed
- [ ] Site header navigation works
- [ ] Mobile responsive

### Counter Guide Page
- [ ] Page loads without errors
- [ ] Guide overview TipBox displays
- [ ] Passive items section visible
- [ ] Active items section visible
- [ ] Anti-heal section visible
- [ ] All item names, costs, tiers visible
- [ ] Pro tips display correctly
- [ ] Link to cheatsheet works
- [ ] Site header navigation works
- [ ] Mobile responsive

### Counter Cheatsheet Page
- [ ] Page loads without errors
- [ ] Search bar appears
- [ ] Shows "Showing all X heroes" text
- [ ] Typing in search filters heroes
- [ ] Counter lists show for each hero
- [ ] Item icons load (if available)
- [ ] Cost and category badges display
- [ ] Site header navigation works
- [ ] Mobile responsive

### Cross-Page Testing
- [ ] Navigation between all pages works
- [ ] Site header appears on all pages
- [ ] Site header logo links to /
- [ ] "Fight Club" nav link goes to /
- [ ] "Guides" nav link goes to /guides
- [ ] Favicon loads
- [ ] Meta tags present (check view-source)
- [ ] No console errors

### Performance Testing
- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.0s

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

## Quick Test Script

Run this in terminal to test all pages:

```bash
#!/bin/bash
echo "🧪 Testing Deadlock Fight Club..."
echo ""

# Build test
echo "1️⃣ Build verification..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✓ Build successful"
else
  echo "✗ Build failed"
  exit 1
fi

# Start dev server in background if not running
if ! curl -s http://localhost:4323/ > /dev/null 2>&1; then
  echo "Starting dev server..."
  npm run dev > /dev/null 2>&1 &
  sleep 5
fi

# Page load tests
echo ""
echo "2️⃣ Page load tests..."
curl -s http://localhost:4323/ | grep -q "fight-club" && echo "✓ Homepage loads" || echo "✗ Homepage broken"
curl -s http://localhost:4323/guides | grep -q "Deadlock Guides" && echo "✓ Guides page loads" || echo "✗ Guides broken"
curl -s http://localhost:4323/counter-guide | grep -q "Counter Items Guide" && echo "✓ Counter guide loads" || echo "✗ Counter guide broken"
curl -s http://localhost:4323/counter-cheatsheet | grep -q "Counter Cheatsheet" && echo "✓ Cheatsheet loads" || echo "✗ Cheatsheet broken"

# Asset tests
echo ""
echo "3️⃣ Asset verification..."
hero_count=$(ls public/assets/heroes/*.png 2>/dev/null | wc -l)
echo "✓ Found $hero_count hero portraits"

# React hydration test
echo ""
echo "4️⃣ React component hydration..."
island_count=$(curl -s http://localhost:4323/ | grep -c "astro-island")
if [ "$island_count" -gt 0 ]; then
  echo "✓ React components hydrating ($island_count islands)"
else
  echo "✗ No React components found"
fi

echo ""
echo "✅ Automated tests complete!"
echo "👁️  Now open http://localhost:4323/ in browser for manual testing"
```

Save as `test.sh`, make executable with `chmod +x test.sh`, then run with `./test.sh`.

## Continuous Testing

Before each commit:
```bash
npm run build  # Verify build works
```

Before each push to production:
```bash
./test.sh  # Run full automated test suite
# Then manually test in browser
```

## Common Issues and Solutions

### Issue: Assets not loading
**Check:** Are assets in `public/assets/`?
**Solution:** Verify paths in `src/utils/assets.ts` match actual file structure

### Issue: React components not interactive
**Check:** Are components using `client:load` directive?
**Solution:** Add `client:load` to component in `.astro` files

### Issue: Build succeeds but pages broken
**Check:** Run dev server and check browser console
**Solution:** Fix TypeScript errors or React component issues

### Issue: Styling not applying
**Check:** Are CSS imports present in components?
**Solution:** Import CSS files in component files

## Success Criteria

✅ **Production Ready When:**
- All automated tests pass
- All manual checklist items checked
- Lighthouse scores > 90 across the board
- No console errors
- Works on mobile and desktop
- Fast load times (< 3s interactive)
