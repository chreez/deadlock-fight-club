import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('should navigate between all pages via header', async ({ page }) => {
    // Start at homepage
    await page.goto('/');
    await expect(page).toHaveURL('/');

    // Navigate to Guides
    await page.getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL('/guides');

    // Navigate back to Fight Club
    await page.getByRole('link', { name: 'Fight Club' }).click();
    await expect(page).toHaveURL('/');

    // Navigate to Guides again
    await page.getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL('/guides');
  });

  test('should navigate via logo to homepage', async ({ page }) => {
    await page.goto('/guides');

    // Click logo
    await page.locator('.site-header__logo').click();
    await expect(page).toHaveURL('/');

    // Test from counter-guide
    await page.goto('/counter-guide');
    await page.locator('.site-header__logo').click();
    await expect(page).toHaveURL('/');

    // Test from cheatsheet
    await page.goto('/counter-cheatsheet');
    await page.locator('.site-header__logo').click();
    await expect(page).toHaveURL('/');
  });

  test('should navigate from guides page to guide details', async ({ page }) => {
    await page.goto('/guides');

    // Click Counter Guide card
    await page.getByRole('link', { name: /complete counter items guide/i }).click();
    await expect(page).toHaveURL('/counter-guide');

    // Go back to guides
    await page.goto('/guides');

    // Click Cheatsheet card
    await page.getByRole('link', { name: /counter items cheatsheet/i }).click();
    await expect(page).toHaveURL('/counter-cheatsheet');
  });

  test('should have consistent header across all pages', async ({ page }) => {
    const pages = ['/', '/guides', '/counter-guide', '/counter-cheatsheet'];

    for (const url of pages) {
      await page.goto(url);

      // Check header exists
      await expect(page.locator('.site-header')).toBeVisible();
      await expect(page.locator('.site-header__logo-text')).toHaveText('Deadlock Fight Club');

      // Check navigation links exist
      await expect(page.getByRole('link', { name: 'Fight Club' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Guides' })).toBeVisible();
    }
  });

  test('should have working internal links in counter-guide', async ({ page }) => {
    await page.goto('/counter-guide');

    // Click cheatsheet link in content
    const cheatsheetLink = page.getByRole('link', { name: /cheatsheet/i }).first();
    await cheatsheetLink.click();
    await expect(page).toHaveURL('/counter-cheatsheet');
  });

  test('should maintain scroll position on same page', async ({ page }) => {
    await page.goto('/counter-guide');

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(400);

    // Click an anchor link on same page (if any exist)
    // For now, just verify scroll worked
  });

  test('should handle browser back/forward', async ({ page }) => {
    await page.goto('/');

    // Navigate forward
    await page.getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL('/guides');

    // Go back
    await page.goBack();
    await expect(page).toHaveURL('/');

    // Go forward
    await page.goForward();
    await expect(page).toHaveURL('/guides');
  });

  test('should have correct page titles', async ({ page }) => {
    const pageTests = [
      { url: '/', title: /Fight Club Generator/ },
      { url: '/guides', title: /Guides/ },
      { url: '/counter-guide', title: /Counter Items Guide/ },
      { url: '/counter-cheatsheet', title: /Counter Cheatsheet/ },
    ];

    for (const { url, title } of pageTests) {
      await page.goto(url);
      await expect(page).toHaveTitle(title);
    }
  });

  test('should have favicon on all pages', async ({ page }) => {
    const pages = ['/', '/guides', '/counter-guide', '/counter-cheatsheet'];

    for (const url of pages) {
      await page.goto(url);

      // Check for favicon link
      const favicon = page.locator('link[rel="icon"]');
      await expect(favicon).toHaveAttribute('href', '/favicon.png');
    }
  });
});
