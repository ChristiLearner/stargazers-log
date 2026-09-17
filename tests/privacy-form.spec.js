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
test('CA-003 verifies the non-resident message', async ({ page }) => {
   await page.goto('file:///C:/Users/cendr/OneDrive/Documents/cle/GitHub/stargazers-log/index.html');
   await page.locator('#resident-no').check();
   await expect(page.locator('#non-resident-message')).toBeVisible();
   await expect(page.locator('#non-resident-message')).toContainText('Only California residents may use this form. Only California residents are covered under the CCPA. Please contact Medical Security Card Company, LLC’s customer assistance department if you need assistance with another matter.');
});