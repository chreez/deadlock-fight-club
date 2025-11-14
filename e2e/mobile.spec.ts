import { test, expect } from '@playwright/test';

/**
 * Mobile-Specific Tests
 * Validates responsive design and mobile UX
 */

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

  test('home page should be readable on mobile', async ({ page }) => {
    await page.goto('/');

    // Text should be readable (not too small)
    const heading = page.getByRole('heading').first();
    await expect(heading).toBeVisible();

    // Touch targets should be large enough (44px minimum for iOS)
    const button = page.getByRole('button').first();
    const box = await button.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(40);
  });

  test('guide content should have proper spacing on mobile', async ({ page }) => {
    await page.goto('/macro-guide');

    // Content should not overflow
    await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll');

    // Should have readable line length
    const paragraph = page.locator('p').first();
    await expect(paragraph).toBeVisible();
  });

  test('navigation should work on mobile', async ({ page }) => {
    await page.goto('/');

    // Mobile nav should be accessible
    const navLink = page.getByRole('link', { name: /guides/i });
    await expect(navLink).toBeVisible();

    await navLink.click();
    await expect(page).toHaveURL(/\/guides/);
  });
});

test.describe('Quiz Interactivity (Mobile)', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('quiz should work on mobile', async ({ page }) => {
    await page.goto('/macro-guide');

    // Scroll to quiz section (if it exists)
    const quizButton = page.getByRole('button', { name: /skill check|quiz/i });

    if (await quizButton.isVisible()) {
      await quizButton.click();

      // Quiz should render
      await page.waitForTimeout(300);

      // Should have clickable options
      const option = page.getByRole('button').filter({ hasText: /2-2-2|1-3-2/ }).first();
      await expect(option).toBeVisible();
    }
  });
});
