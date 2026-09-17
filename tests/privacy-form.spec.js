const { test, expect } = require('@playwright/test');
test('CA-001 verifies the state-specific header', async ({ page }) => {
   await page.goto('file:///C:/Users/cendr/OneDrive/Documents/cle/GitHub/stargazers-log/index.html');
   await expect(page.locator('#privacy-header')).toContainText('California residents may use this form to submit a request under the California Consumer Privacy Act (CCPA) regarding their personal information.');
});
test('CA-002 verifies the residency question', async ({ page }) => {
   await page.goto('file:///C:/Users/cendr/OneDrive/Documents/cle/GitHub/stargazers-log/index.html');  
   await expect(page.locator('#residency-question')).toBeVisible();
   await expect(page.locator('#residency-question')).toContainText('Are you a Resident of California?');
});