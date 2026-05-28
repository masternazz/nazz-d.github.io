const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { createStaticServer, listen } = require('./static-server');

const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const root = fs.existsSync(path.join(distRoot, 'index.html')) ? distRoot : projectRoot;

(async () => {
  const server = createStaticServer(root);
  const port = await listen(server);
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14

  try {
    const url = `http://127.0.0.1:${port}/index.html`;
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait a beat for CSS, images, and page scripts to settle.
    await page.waitForTimeout(600);

    await page.screenshot({ path: path.resolve(projectRoot, 'tools/mobile-check.png'), fullPage: false });
    console.log('Screenshot saved to tools/mobile-check.png');
  } finally {
    await browser.close();
    server.close();
  }
})();
