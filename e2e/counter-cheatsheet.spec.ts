import { test, expect } from '@playwright/test';

test.describe('Counter Cheatsheet Page', () => {
  test('should load cheatsheet page', async ({ page }) => {
    await page.goto('/counter-cheatsheet');

    await expect(page).toHaveTitle(/Counter Cheatsheet/);
    await expect(page.locator('.site-header')).toBeVisible();
  });

  test('should display page title and description', async ({ page }) => {
    await page.goto('/counter-cheatsheet');

    await expect(page.getByText('Deadlock Counter Cheatsheet')).toBeVisible();
    await expect(page.getByText(/Quick hero-based counter lookup/)).toBeVisible();
  });

  test('should show search bar', async ({ page }) => {
    await page.goto('/counter-cheatsheet');

    const searchBar = page.getByPlaceholder(/search heroes/i);
    await expect(searchBar).toBeVisible();
  });

  test('should display all heroes by default', async ({ page }) => {
    await page.goto('/counter-cheatsheet');

    // Wait for heroes to load
    await page.waitForTimeout(500);

    // Should show "Showing all X heroes" message
    await expect(page.getByText(/showing all.*heroes/i)).toBeVisible();

    // Should have multiple hero sections
    const heroSections = page.locator('.counter-cheatsheet__hero');
    const count = await heroSections.count();
    expect(count).toBeGreaterThan(10); // Should have at least 10 heroes
  });

  test('should filter heroes by search', async ({ page }) => {
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    const searchBar = page.getByPlaceholder(/search heroes/i);

    // Search for "Bebop"
    await searchBar.fill('Bebop');
    await page.waitForTimeout(300);

    // Should show filtered results
    await expect(page.getByText(/found.*of.*heroes/i)).toBeVisible();

    // Should show Bebop's counters
    await expect(page.getByText(/Counter Items for Bebop/i)).toBeVisible();
  });

  test('should clear search with clear button', async ({ page }) => {
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    const searchBar = page.getByPlaceholder(/search heroes/i);

    // Type search
    await searchBar.fill('Abrams');
    await page.waitForTimeout(300);

    // Click clear button (X icon)
    const clearButton = page.locator('.search-bar__clear');
    await clearButton.click();
    await page.waitForTimeout(300);

    // Should show all heroes again
    await expect(page.getByText(/showing all.*heroes/i)).toBeVisible();
  });

  test('should show no results message for invalid search', async ({ page }) => {
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    const searchBar = page.getByPlaceholder(/search heroes/i);

    // Search for non-existent hero
    await searchBar.fill('NonExistentHero123');
    await page.waitForTimeout(300);

    // Should show no results message
    await expect(page.getByText(/no heroes found/i)).toBeVisible();
  });

  test('should display counter items for heroes', async ({ page }) => {
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    // Search for specific hero to make test faster
    await page.getByPlaceholder(/search heroes/i).fill('Abrams');
    await page.waitForTimeout(300);

    // Should show counter items
    const counterItems = page.locator('.counter-item');
    await expect(counterItems.first()).toBeVisible();

    // Should show item details
    await expect(page.locator('.counter-item__name').first()).toBeVisible();
    await expect(page.locator('.counter-item__effect').first()).toBeVisible();
  });

  test('should show category badges', async ({ page }) => {
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    // Search for a hero
    await page.getByPlaceholder(/search heroes/i).fill('Bebop');
    await page.waitForTimeout(300);

    // Should show category badges (Weapon, Vitality, Spirit)
    const badges = page.locator('.badge');
    await expect(badges.first()).toBeVisible();
  });

  test('should navigate via site header', async ({ page }) => {
    await page.goto('/counter-cheatsheet');

    // Navigate to guides via header
    await page.getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL('/guides');

    // Navigate to Fight Club via header
    await page.getByRole('link', { name: 'Fight Club' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    await expect(page.getByText('Deadlock Counter Cheatsheet')).toBeVisible();
    await expect(page.getByPlaceholder(/search heroes/i)).toBeVisible();
  });

  test('should have search functionality work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/counter-cheatsheet');
    await page.waitForTimeout(500);

    // Test search on mobile
    const searchBar = page.getByPlaceholder(/search heroes/i);
    await searchBar.fill('Wraith');
    await page.waitForTimeout(300);

    await expect(page.getByText(/Counter Items for Wraith/i)).toBeVisible();
  });
});
