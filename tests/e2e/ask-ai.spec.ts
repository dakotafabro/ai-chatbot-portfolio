import { test, expect } from '@playwright/test';

test('Ask the chatbot and get a mock answer', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Ask the Chatbot' })).toBeVisible();

  const input = page.getByLabel('Ask the chatbot a question');
  await input.fill('What is this course about?');
  await page.getByRole('button', { name: /send/i }).click();

  await expect(page.getByText(/course-aligned answer/i)).toBeVisible();
});
