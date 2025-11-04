import { test, expect } from '@playwright/test';

test.describe('Fight Club Generator', () => {
  test('should load homepage with site header', async ({ page }) => {
    await page.goto('/');

    // Check site header
    await expect(page.locator('.site-header')).toBeVisible();
    await expect(page.locator('.site-header__logo-text')).toHaveText('Deadlock Fight Club');
  });

  test('should generate a random match', async ({ page }) => {
    await page.goto('/');

    // Match should auto-generate on page load
    // Wait for the randomize button to appear (indicates match is generated)
    const randomizeButton = page.getByRole('button', { name: /randomize match/i });
    await expect(randomizeButton).toBeVisible();

    // Should show player labels
    await expect(page.getByText('PLAYER 1')).toBeVisible();
    await expect(page.getByText('PLAYER 2')).toBeVisible();

    // Should show VS divider
    await expect(page.getByText('VS')).toBeVisible();

    // Should show loadout titles
    const loadoutTitles = page.getByText('Loadout');
    await expect(loadoutTitles).toHaveCount(2);

    // Should show total cost
    const totalCosts = page.getByText(/Total Cost:/);
    await expect(totalCosts.first()).toBeVisible();
  });

  test('should randomize match on button click', async ({ page }) => {
    await page.goto('/');

    // Wait for auto-generated match
    await expect(page.getByRole('button', { name: /randomize match/i })).toBeVisible();

    // Click randomize
    await page.getByRole('button', { name: /randomize match/i }).click();
    await page.waitForTimeout(500);

    // Verify page still shows match structure
    await expect(page.getByText('PLAYER 1')).toBeVisible();
    await expect(page.getByText('PLAYER 2')).toBeVisible();
  });

  test('should show copy to clipboard button', async ({ page }) => {
    await page.goto('/');

    // Wait for auto-generated match
    await expect(page.getByRole('button', { name: /randomize match/i })).toBeVisible();

    // Check for copy button
    const copyButton = page.getByRole('button', { name: /copy to clipboard/i });
    await expect(copyButton).toBeVisible();
  });

  test('should display hero cards', async ({ page }) => {
    await page.goto('/');

    // Wait for auto-generated match
    await expect(page.getByRole('button', { name: /randomize match/i })).toBeVisible();

    // Should have 2 hero cards
    const heroCards = page.locator('.hero-card');
    await expect(heroCards).toHaveCount(2);

    // Each hero card should have a name
    const heroNames = page.locator('.hero-card__name');
    await expect(heroNames).toHaveCount(2);
  });

  test('should display item loadouts', async ({ page }) => {
    await page.goto('/');

    // Wait for auto-generated match
    await expect(page.getByRole('button', { name: /randomize match/i })).toBeVisible();

    // Should have 2 loadout displays
    const loadouts = page.locator('.loadout-display');
    await expect(loadouts).toHaveCount(2);

    // Each loadout should show items
    const itemCards = page.locator('.item-card');
    await expect(itemCards.first()).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Test navigation to guides
    await page.getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL('/guides');

    // Navigate back via logo
    await page.locator('.site-header__logo').click();
    await expect(page).toHaveURL('/');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Wait for auto-generated match
    await expect(page.getByRole('button', { name: /randomize match/i })).toBeVisible();

    // Should still show all elements
    await expect(page.getByText('PLAYER 1')).toBeVisible();
    await expect(page.getByText('PLAYER 2')).toBeVisible();
    await expect(page.getByText('VS')).toBeVisible();
  });
});
