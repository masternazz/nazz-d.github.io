import { certificationHighlights } from '../data/certifications';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { writeups } from '../data/writeups';

export const prerender = true;

export function GET() {
  const staticPages = [
    {
      title: 'Home',
      url: '/',
      summary: site.description,
      tags: 'home portfolio network admin soc noc msp homelab',
    },
    {
      title: 'Project Hub',
      url: '/pages/projects.html',
      summary: 'Full data-driven project directory with domain and role filters.',
      tags: 'projects networking security infrastructure automation operations competition',
    },
    {
      title: 'Writeups',
      url: '/pages/writeups.html',
      summary: 'Public-safe operational notes and competition recaps.',
      tags: 'writeups notes opnsense vlan automation competition',
    },
    {
      title: 'Resume',
      url: '/pages/resume.html',
      summary: 'Resume downloads and role-fit shortcuts.',
      tags: 'resume pdf ats hiring',
    },
    {
      title: 'Certifications',
      url: '/pages/certifications.html',
      summary: certificationHighlights.join(', '),
      tags: 'certifications comptia cisco microsoft certiport',
    },
  ];

  const projectPages = projects.map(project => ({
    title: project.title,
    url: `/pages/${project.slug}.html`,
    summary: project.summary,
    tags: [...project.categories, ...project.rolePaths, ...project.skills].join(' '),
  }));

  const writeupPages = writeups.map(writeup => ({
    title: writeup.title,
    url: writeup.href,
    summary: writeup.summary,
    tags: `${writeup.category} ${writeup.relatedProjects.join(' ')}`,
  }));

  return new Response(JSON.stringify([...staticPages, ...projectPages, ...writeupPages]), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
