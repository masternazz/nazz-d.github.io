import { projects } from '../data/projects';
import { site } from '../data/site';
import { writeups } from '../data/writeups';

export const prerender = true;

export function GET() {
  const urls = [
    '/',
    '/pages/projects.html',
    '/pages/homelab.html',
    '/pages/writeups.html',
    '/pages/certifications.html',
    '/pages/resume.html',
    '/pages/journey.html',
    '/card.html',
    ...projects.map(project => `/pages/${project.slug}.html`),
    ...writeups.map(writeup => writeup.href),
  ];

  const uniqueUrls = [...new Set(urls)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls
    .map(url => `  <url><loc>${new URL(url, site.url).toString()}</loc></url>`)
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
