const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const fileUrl = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(fileUrl);

  // Inject axe-core
  const axePath = require.resolve('axe-core/axe.min.js');
  const axeSource = fs.readFileSync(axePath, 'utf8');
  await page.addScriptTag({ content: axeSource });

  // Run axe-core for both WCAG 2.0 A and AA
  const results = await page.evaluate(async () => {
    return await window.axe.run(document, {
      runOnly: [
        'wcag2a',
        'wcag2aa'
      ]
    });
  });

  // Save results
  fs.writeFileSync('accessibility-report.json', JSON.stringify(results, null, 2));
  console.log('Accessibility report saved to accessibility-report.json');

  await browser.close();
})(); 