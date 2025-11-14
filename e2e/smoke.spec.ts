import { test, expect } from '@playwright/test';

/**
 * Smoke Tests - Critical path validation
 * Tests the most important user flows to catch major breakages
 */

test.describe('Home Page - Fight Club Generator', () => {
  test('should load and display fight club generator', async ({ page }) => {
    await page.goto('/');

    // Page loads
    await expect(page).toHaveTitle(/Deadlock Fight Club/);

    // Generator UI is visible
    await expect(page.getByRole('heading', { name: /fight club/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /generate|randomize/i })).toBeVisible();
  });

  test('should generate random hero matchup', async ({ page }) => {
    await page.goto('/');

    // Click generate button
    const generateBtn = page.getByRole('button', { name: /generate|randomize/i }).first();
    await generateBtn.click();

    // Heroes should be displayed (wait for render)
    await page.waitForTimeout(500);

    // At least one hero name should be visible
    const heroElements = page.locator('[class*="hero"]');
    await expect(heroElements.first()).toBeVisible();
  });
});

test.describe('Guide Pages', () => {
  test('macro guide should load with correct meta tags', async ({ page }) => {
    await page.goto('/macro-guide');

    // Page renders
    await expect(page).toHaveTitle(/Advanced Macro Guide/);
    await expect(page.getByRole('heading', { name: /macro/i })).toBeVisible();

    // OG meta tags present (for Discord previews)
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');

    expect(ogTitle).toContain('Macro Guide');
    expect(ogImage).toContain('youtube.com'); // YouTube thumbnail
  });

  test('counter guide should load', async ({ page }) => {
    await page.goto('/counter-guide');

    await expect(page).toHaveTitle(/Counter.*Building Guide/);
    await expect(page.getByRole('heading')).toBeVisible();
  });

  test('guides directory should load', async ({ page }) => {
    await page.goto('/guides');

    await expect(page).toHaveTitle(/Strategy Guides/);

    // Should show links to all guides
    await expect(page.getByRole('link', { name: /macro/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /counter/i })).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');

    // Click guides link
    await page.getByRole('link', { name: /guides/i }).click();
    await expect(page).toHaveURL(/\/guides/);

    // Click macro guide
    await page.getByRole('link', { name: /macro/i }).click();
    await expect(page).toHaveURL(/\/macro-guide/);
  });
});
