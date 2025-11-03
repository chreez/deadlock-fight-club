import { test, expect } from '@playwright/test';

test.describe('Guides Homepage', () => {
  test('should load guides page with header', async ({ page }) => {
    await page.goto('/guides');

    await expect(page.locator('h1')).toContainText('Deadlock Guides');
    await expect(page.locator('.site-header')).toBeVisible();
  });

  test('should display guide cards', async ({ page }) => {
    await page.goto('/guides');

    // Should show at least 2 guide cards (Counter Guide & Cheatsheet)
    const guideCards = page.locator('article');
    await expect(guideCards).toHaveCount(2);
  });

  test('should show guide metadata', async ({ page }) => {
    await page.goto('/guides');

    // Check for category tags
    await expect(page.getByText('Strategy')).toBeVisible();
    await expect(page.getByText('Reference')).toBeVisible();

    // Check for read time
    await expect(page.getByText(/min read|min lookup/)).toHaveCount(2);
  });

  test('should navigate to counter guide', async ({ page }) => {
    await page.goto('/guides');

    // Click on Counter Guide card
    await page.getByRole('link', { name: /complete counter items guide/i }).click();
    await expect(page).toHaveURL('/counter-guide');
  });

  test('should navigate to cheatsheet', async ({ page }) => {
    await page.goto('/guides');

    // Click on Cheatsheet card
    await page.getByRole('link', { name: /counter items cheatsheet/i }).click();
    await expect(page).toHaveURL('/counter-cheatsheet');
  });

  test('should have hover effects on cards', async ({ page }) => {
    await page.goto('/guides');

    const firstCard = page.locator('article').first();

    // Get initial border color
    const initialBorder = await firstCard.evaluate(el =>
      window.getComputedStyle(el).borderColor
    );

    // Hover over card
    await firstCard.hover();
    await page.waitForTimeout(100);

    // Border should change on hover (tested via transform or other visual change)
    const transform = await firstCard.evaluate(el =>
      window.getComputedStyle(el).transform
    );

    // Should have some transform (translateY)
    expect(transform).not.toBe('none');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/guides');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('article')).toHaveCount(2);
  });
});
