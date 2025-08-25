import { test, expect } from '@playwright/test';

test('FAQ page loads and filters', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible();

  await page.getByLabel('Search FAQs').fill('deploy');
  await expect(page.getByText(/How do I deploy this app?/i)).toBeVisible();
});
