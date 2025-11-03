const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    } else if (msg.type() === 'warning') {
      warnings.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    errors.push(`Page error: ${error.message}`);
  });

  console.log('Loading homepage...');
  await page.goto('http://localhost:4323/');
  await page.waitForTimeout(2000);

  console.log('\n=== HOMEPAGE ERRORS ===');
  errors.forEach(e => console.log(`ERROR: ${e}`));
  console.log('\n=== HOMEPAGE WARNINGS ===');
  warnings.forEach(w => console.log(`WARN: ${w}`));

  errors.length = 0;
  warnings.length = 0;

  console.log('\n\nLoading counter-cheatsheet...');
  await page.goto('http://localhost:4323/counter-cheatsheet');
  await page.waitForTimeout(2000);

  console.log('\n=== COUNTER CHEATSHEET ERRORS ===');
  errors.forEach(e => console.log(`ERROR: ${e}`));
  console.log('\n=== COUNTER CHEATSHEET WARNINGS ===');
  warnings.forEach(w => console.log(`WARN: ${w}`));

  await browser.close();
})();
