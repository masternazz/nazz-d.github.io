const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'dist');
const sitemapPath = path.join(root, 'sitemap.xml');

function localTargetFromUrl(url) {
  const parsed = new URL(url);
  const pathname = parsed.pathname === '/' ? '/index.html' : parsed.pathname;
  return path.join(root, pathname);
}

if (!fs.existsSync(sitemapPath)) {
  throw new Error('dist/sitemap.xml does not exist. Run npm run build first.');
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const missing = urls.filter(url => !fs.existsSync(localTargetFromUrl(url)));

if (!urls.length) {
  throw new Error('Sitemap has no <loc> entries.');
}

if (missing.length) {
  console.error('Sitemap points at missing local files:');
  for (const url of missing) {
    console.error(`- ${url}`);
  }
  process.exit(1);
}

console.log(`Validated ${urls.length} sitemap entries.`);
