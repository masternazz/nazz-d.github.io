const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'dist');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function existsTarget(target) {
  if (fs.existsSync(target) && fs.statSync(target).isFile()) {
    return true;
  }

  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    return fs.existsSync(path.join(target, 'index.html'));
  }

  return false;
}

function resolveLink(file, value) {
  const cleanValue = value.split('#')[0].split('?')[0];

  if (!cleanValue || cleanValue === '/') {
    return path.join(root, 'index.html');
  }

  if (cleanValue.startsWith('/')) {
    return path.join(root, cleanValue);
  }

  return path.resolve(path.dirname(file), cleanValue);
}

if (!fs.existsSync(root)) {
  throw new Error('dist/ does not exist. Run npm run build first.');
}

const htmlFiles = walk(root).filter(file => file.endsWith('.html'));
const missing = [];
const attrPattern = /\b(?:href|src)=["']([^"']+)["']/g;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  let match;

  while ((match = attrPattern.exec(html)) !== null) {
    const value = match[1].trim();

    if (
      !value ||
      value.includes('${') ||
      value.startsWith('#') ||
      value.startsWith('http://') ||
      value.startsWith('https://') ||
      value.startsWith('mailto:') ||
      value.startsWith('tel:') ||
      value.startsWith('data:') ||
      value.startsWith('javascript:')
    ) {
      continue;
    }

    const target = resolveLink(file, value);

    if (!existsTarget(target)) {
      missing.push(`${path.relative(root, file)} -> ${value}`);
    }
  }
}

if (missing.length) {
  console.error('Missing internal links:');
  for (const item of missing.slice(0, 50)) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. No missing internal links found.`);
