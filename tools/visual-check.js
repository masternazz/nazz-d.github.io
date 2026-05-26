const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const files = [
    'index.html',
    'pages/homelab.html',
    'pages/proxmox.html',
    'pages/opnsense.html',
    'pages/identity.html',
    'pages/remote-access.html',
    'pages/wazuh.html',
    'pages/vlan-segmentation.html',
    'pages/switching.html',
    'pages/game-hosting.html',
    'pages/mcp-server.html',
    'pages/ai-gateway.html',
    'pages/ai-automation.html',
    'pages/skillsusa.html',
    'pages/writeups.html',
    'pages/writeup-guest-captive-portal.html',
    'pages/writeup-ai-gateway.html',
    'pages/writeup-cyberlaunch-2026.html',
    'pages/writeup-mailcow-email.html',
    'pages/writeup-opnsense-oidc.html',
    'pages/writeup-vlan-migration.html',
    'pages/writeup-vlan50.html',
    'pages/writeup-mcp-server.html',
  ];

  const screenshotsDir = path.resolve(root, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

  for (const file of files) {
    const url = 'file:///' + path.resolve(root, file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.evaluate(async () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        img.loading = 'eager';
      });

      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const step = Math.max(300, Math.floor(window.innerHeight * 0.75));
      const max = document.documentElement.scrollHeight;

      for (let y = 0; y <= max; y += step) {
        window.scrollTo(0, y);
        await sleep(75);
      }

      window.scrollTo(0, 0);
      await sleep(100);
    });
    await page.evaluate(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('is-visible'));
      document.querySelectorAll('.section-divider').forEach((el) => el.classList.add('is-drawn'));
      document.querySelectorAll('.skill-bar[data-pct]').forEach((el) => {
        el.style.width = `${el.dataset.pct}%`;
      });
      document.querySelectorAll('[data-countup]').forEach((el) => {
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        el.textContent = `${prefix}${el.dataset.countup || '0'}${suffix}`;
      });
      document.querySelectorAll('[data-target]').forEach((el) => {
        el.textContent = el.dataset.target;
      });
      document.documentElement.style.setProperty('--hero-scroll-fade', '0');
    });

    const name = file.replace('pages/', '').replace('.html', '');
    await page.screenshot({ path: path.resolve(screenshotsDir, `${name}.png`), fullPage: true });
    console.log('Captured', file);
  }

  await browser.close();
  console.log('Done - screenshots saved to screenshots/');
})();
