import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, normalize, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const dist = decodeURIComponent(root.pathname).replace(/^\/([A-Za-z]:)/, '$1');
const required = [
  'index.html',
  'work/index.html',
  'about/index.html',
  'credentials/index.html',
  'resume/index.html',
  'evidence/cisco-ios/index.html',
  'evidence/homelab-operations/index.html',
  '404.html',
  'sitemap.xml',
  'Nazeem-Dickey-Resume.pdf',
];

const errors = [];

for (const file of required) {
  if (!existsSync(join(dist, file))) errors.push('Missing output: ' + file);
}

const collect = (directory) => readdirSync(directory).flatMap((name) => {
  const fullPath = join(directory, name);
  return statSync(fullPath).isDirectory() ? collect(fullPath) : [fullPath];
});

const files = existsSync(dist) ? collect(dist) : [];
const htmlFiles = files.filter((file) => extname(file) === '.html');
const forbidden = [
  /10[.]226[.]/,
  /192[.]168[.]/,
  /assets\/images/i,
  /assets\/badges/i,
  /rack-full[.]jpg/i,
  /assets\/resume\/Nazeem-Dickey-Resume[.]pdf/i,
  /nazeemdickey@masternazz[.]com/i,
  /Version 7[.]0/i,
  /Version 8[.]0/i,
  /Version 9[.]0/i,
  /AI gateway/i,
  /homelab-mcp/i,
  /chess-ultimate/i,
  /—/,
];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (!/<h1[\s>]/i.test(html)) errors.push('Missing h1: ' + file);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push('Missing title: ' + file);
  for (const pattern of forbidden) {
    if (pattern.test(html)) errors.push('Forbidden public detail or legacy asset in ' + file + ': ' + pattern);
  }

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(?:https?:|mailto:|tel:|#)/i.test(href)) continue;
    const clean = href.split(/[?#]/)[0];
    if (!clean) continue;
    const routePath = clean.startsWith('/')
      ? join(dist, clean.slice(1))
      : normalize(join(dirname(file), clean));
    const target = extname(routePath) ? routePath : join(routePath, 'index.html');
    if (!existsSync(target)) {
      errors.push('Broken internal link in ' + relative(dist, file) + ': ' + href);
    }
  }
}

const publicRasterAssets = files.filter((file) => /[.](png|jpe?g|webp|gif)$/i.test(file));
if (publicRasterAssets.length) {
  errors.push('Unexpected raster assets: ' + publicRasterAssets.join(', '));
}

const homeHtml = existsSync(join(dist, 'index.html')) ? readFileSync(join(dist, 'index.html'), 'utf8') : '';
const workHtml = existsSync(join(dist, 'work', 'index.html')) ? readFileSync(join(dist, 'work', 'index.html'), 'utf8') : '';
if (!homeHtml.includes('nazeemdickey@gmail.com')) errors.push('Visible contact email is missing from the home page.');
if (!homeHtml.includes('Read case study')) errors.push('Explicit case study actions are missing from the home page.');
if (!homeHtml.includes('View evidence')) errors.push('Explicit evidence action is missing from the featured work.');
if (!workHtml.includes('Additional technical work')) errors.push('The compact additional technical work section is missing.');

const caseFiles = htmlFiles.filter((file) => /work[\\/][^\\/]+[\\/]index[.]html$/i.test(file));
for (const file of caseFiles) {
  const html = readFileSync(file, 'utf8');
  for (const id of ['starting-point', 'what-i-did', 'result', 'lessons']) {
    if (!html.includes(`id="${id}"`)) errors.push(`Missing case-study anchor ${id}: ${file}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Site checks passed: ' + htmlFiles.length + ' HTML pages, no legacy raster assets, no forbidden infrastructure details.');
