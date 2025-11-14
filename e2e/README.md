# E2E Tests (Playwright)

Lightweight end-to-end tests targeting Chrome desktop + mobile Safari.

## Quick Start

```bash
# Install Playwright browsers (one-time setup)
npx playwright install chromium webkit

# Run all E2E tests
npm run test:e2e

# Run with UI (interactive mode)
npm run test:e2e:ui

# Debug mode (step through tests)
npm run test:e2e:debug
```

## Test Coverage

**Smoke Tests** (`smoke.spec.ts`):
- Home page loads and fight generator works
- Guide pages render with correct OG meta tags
- Navigation between pages works

**Mobile Tests** (`mobile.spec.ts`):
- Responsive design on iPhone SE (375px)
- Touch targets meet iOS 44px minimum
- Quiz interactivity on mobile

## CI/CD Integration

Tests run automatically on:
- Every push to `mainline`
- Every pull request to `mainline`

GitHub Actions workflow: `.github/workflows/ci.yml`

## Writing New Tests

Follow the existing pattern:

```typescript
test('should do something', async ({ page }) => {
  await page.goto('/some-route');
  await expect(page.getByRole('heading')).toBeVisible();
});
```

Keep tests **lightweight** - test critical paths only, not every edge case.
