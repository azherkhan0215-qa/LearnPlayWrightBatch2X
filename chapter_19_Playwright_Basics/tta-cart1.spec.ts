import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title-row"]')).toContainText('Products Name (A to Z) Name (Z to A) Price (low to high) Price (high to low)');
  await page.locator('[data-test="open-menu"]').click();
  await expect(page.locator('[data-test="logout-sidebar-link"]')).toContainText('Logout');
  await page.locator('[data-test="logout-sidebar-link"]').click();
});