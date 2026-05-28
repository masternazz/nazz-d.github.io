const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'dist');
const textExtensions = new Set(['.html', '.css', '.js', '.json', '.xml', '.svg', '.txt']);

const checks = [
  {
    name: 'private IPv4 address',
    pattern: /\b(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})\b/i,
  },
  {
    name: 'MAC address',
    pattern: /\b[0-9a-f]{2}([:-])(?:[0-9a-f]{2}\1){4}[0-9a-f]{2}\b/i,
  },
  {
    name: 'OPNsense config export reference',
    pattern: /config-OPNsense|<opnsense\b/i,
  },
  {
    name: 'secret material',
    pattern: /BEGIN PRIVATE KEY|BEGIN OPENSSH PRIVATE KEY|api[_-]?key\s*=|password\s*=/i,
  },
  {
    name: 'environment file reference',
    pattern: /(^|[^A-Za-z0-9_])\.env(?:\b|[./\\])/i,
  },
];

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

if (!fs.existsSync(root)) {
  throw new Error('dist/ does not exist. Run npm run build first.');
}

const findings = [];

for (const file of walk(root)) {
  if (!textExtensions.has(path.extname(file))) {
    continue;
  }

  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const check of checks) {
      if (check.pattern.test(line)) {
        findings.push({
          check: check.name,
          file: path.relative(root, file),
          line: index + 1,
          preview: line.trim().slice(0, 140),
        });
      }
    }
  });
}

if (findings.length) {
  console.error('Public-safety scan failed:');
  for (const finding of findings.slice(0, 40)) {
    console.error(`- ${finding.check}: ${finding.file}:${finding.line} ${finding.preview}`);
  }
  process.exit(1);
}

console.log('Public-safety scan passed.');
