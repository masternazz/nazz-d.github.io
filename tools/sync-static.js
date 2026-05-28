const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

function ensureDir(target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
}

function copyFile(source, target, overwrite = false) {
  if (!fs.existsSync(source)) {
    return;
  }

  if (!overwrite && fs.existsSync(target)) {
    return;
  }

  ensureDir(target);
  fs.copyFileSync(source, target);
}

function copyDirectory(source, target) {
  if (!fs.existsSync(source)) {
    return;
  }

  fs.cpSync(source, target, { recursive: true });
}

if (!fs.existsSync(dist)) {
  throw new Error('dist/ does not exist. Run astro build before syncing static assets.');
}

copyDirectory(path.join(root, 'assets'), path.join(dist, 'assets'));

for (const file of ['CNAME', 'robots.txt', 'favicon.svg']) {
  copyFile(path.join(root, file), path.join(dist, file), true);
}

for (const file of ['card.html']) {
  copyFile(path.join(root, file), path.join(dist, file));
}

const legacyPages = path.join(root, 'pages');
const distPages = path.join(dist, 'pages');

if (fs.existsSync(legacyPages)) {
  for (const entry of fs.readdirSync(legacyPages)) {
    if (!entry.endsWith('.html')) {
      continue;
    }

    copyFile(path.join(legacyPages, entry), path.join(distPages, entry));
  }
}

console.log('Synced static assets and legacy fallback pages into dist/.');
