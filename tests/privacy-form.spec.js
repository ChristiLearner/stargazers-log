const { test, expect } = require('@playwright/test');
test('ST-001 verifies the state-specific header', async ({ page }) => {
   await page.goto('file:///C:/Users/cendr/OneDrive/Documents/GitHub/stargazers-log/index.html');
   await expect(page.locator('body')).toContainText('California');
});