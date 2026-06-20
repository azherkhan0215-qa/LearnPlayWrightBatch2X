import {test, expect} from '@playwright/test'

//Page - Inbuilt fixture is automatically given to you,
// which are the functions you can directly use in playwright.

test("Verify that the title will be TTA Cart", async({ page }) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttcart/")
    await page.waitForTimeout(5000);
});