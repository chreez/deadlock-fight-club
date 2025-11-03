import { test, expect } from '@playwright/test';

test.describe('Counter Guide Page', () => {
  test('should load counter guide page', async ({ page }) => {
    await page.goto('/counter-guide');

    await expect(page).toHaveTitle(/Counter Items Guide/);
    await expect(page.locator('.site-header')).toBeVisible();
  });

  test('should display guide overview', async ({ page }) => {
    await page.goto('/counter-guide');

    // Check for overview TipBox
    await expect(page.getByText('Guide Overview')).toBeVisible();
    await expect(page.getByText(/Most Deadlock guides focus/)).toBeVisible();
  });

  test('should display item sections', async ({ page }) => {
    await page.goto('/counter-guide');

    // Check for main sections
    await expect(page.getByText('🛡️ Passive Items')).toBeVisible();
    await expect(page.getByText('⚡ Active Items')).toBeVisible();
    await expect(page.getByText('💉 Anti-Heal Items')).toBeVisible();
  });

  test('should show item details', async ({ page }) => {
    await page.goto('/counter-guide');

    // Check for Reactive Barrier item
    await expect(page.getByText('Reactive Barrier')).toBeVisible();
    await expect(page.getByText(/1600 souls/)).toBeVisible();
    await expect(page.getByText(/Tier.*2/)).toBeVisible();
  });

  test('should show pro tips', async ({ page }) => {
    await page.goto('/counter-guide');

    // Check for pro tip sections
    const proTips = page.getByText(/Pro Tip/);
    await expect(proTips.first()).toBeVisible();
  });

  test('should have link to cheatsheet', async ({ page }) => {
    await page.goto('/counter-guide');

    // Check for link to cheatsheet
    const cheatsheetLink = page.getByRole('link', { name: /cheatsheet/i });
    await expect(cheatsheetLink.first()).toBeVisible();

    // Click and verify navigation
    await cheatsheetLink.first().click();
    await expect(page).toHaveURL('/counter-cheatsheet');
  });

  test('should navigate back via site header', async ({ page }) => {
    await page.goto('/counter-guide');

    // Click logo to go home
    await page.locator('.site-header__logo').click();
    await expect(page).toHaveURL('/');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/counter-guide');

    await expect(page.getByText('Guide Overview')).toBeVisible();
    await expect(page.getByText('🛡️ Passive Items')).toBeVisible();
  });

  test('should have proper scroll buffer', async ({ page }) => {
    await page.goto('/counter-guide');

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(200);

    // Should be able to scroll (body has padding-bottom)
    const bodyPadding = await page.evaluate(
      () => window.getComputedStyle(document.body).paddingBottom
    );
    expect(bodyPadding).toBe('80px');
  });
});
