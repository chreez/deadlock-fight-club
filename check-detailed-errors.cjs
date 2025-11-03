const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('Failed to load') || text.includes('__DEFINES__')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`[PAGE ERROR] ${error.message}`);
    console.log(`Stack: ${error.stack}`);
  });

  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure().errorText}`);
  });

  console.log('Loading homepage...\n');
  await page.goto('http://localhost:4321/');
  await page.waitForTimeout(3000);

  await browser.close();
})();
