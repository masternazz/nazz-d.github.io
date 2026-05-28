const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { createStaticServer, listen } = require('./static-server');

const root = path.resolve(__dirname, '..', 'dist');

const pages = [
  { file: 'index.html', current: 'Home' },
  { file: 'pages/projects.html', current: 'Projects' },
  { file: 'pages/homelab.html', current: 'Homelab' },
  { file: 'pages/writeups.html', current: 'Writeups' },
  { file: 'pages/certifications.html', current: 'Certs' },
  { file: 'pages/resume.html', current: 'Resume' },
  { file: 'pages/proxmox.html', current: null },
];

if (!fs.existsSync(root)) {
  throw new Error('dist/ does not exist. Run npm run build first.');
}

(async () => {
  const server = createStaticServer(root);
  const port = await listen(server);
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    for (const target of pages) {
      await page.goto(`http://127.0.0.1:${port}/${target.file}`, { waitUntil: 'networkidle' });

      const current = await page.$$eval('.nav-links a[aria-current="page"]', links =>
        links.map(link => link.textContent.trim())
      );

      const contactCurrent = await page.$$eval('.nav-links a', links =>
        links.some(link => link.textContent.trim() === 'Contact' && link.getAttribute('aria-current') === 'page')
      );

      if (contactCurrent) {
        throw new Error(`Contact is incorrectly aria-current on ${target.file}`);
      }

      const expected = target.current ? [target.current] : [];
      if (current.join('|') !== expected.join('|')) {
        throw new Error(`${target.file} expected current ${expected.join(', ') || 'none'}, got ${current.join(', ') || 'none'}`);
      }
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
    await page.click('[data-mobile-toggle]');
    const expanded = await page.getAttribute('[data-mobile-toggle]', 'aria-expanded');
    const hidden = await page.getAttribute('#mobileNav', 'hidden');

    if (expanded !== 'true' || hidden !== null) {
      throw new Error('Mobile nav did not open with correct aria-expanded/hidden state.');
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('Nav state checks passed.');
})().catch(async (error) => {
  console.error(error.message);
  process.exit(1);
});
