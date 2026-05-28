export type Writeup = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  href: string;
  relatedProjects: string[];
};

export const writeups: Writeup[] = [
  {
    slug: 'writeup-guest-captive-portal',
    title: 'Guest VLAN Captive Portal',
    category: 'Networking',
    date: 'May 2026',
    summary:
      'Validated guest isolation and captive portal behavior while keeping the public writeup sanitized.',
    href: '/pages/writeup-guest-captive-portal.html',
    relatedProjects: ['vlan-segmentation', 'opnsense'],
  },
  {
    slug: 'writeup-vlan-migration',
    title: 'VLAN Segmentation Migration',
    category: 'Infrastructure',
    date: 'May 2026',
    summary:
      'Moved the lab toward production-style network separation with documented recovery points.',
    href: '/pages/writeup-vlan-migration.html',
    relatedProjects: ['vlan-segmentation', 'switching', 'proxmox'],
  },
  {
    slug: 'writeup-opnsense-oidc',
    title: 'OPNsense OIDC SSO Fix',
    category: 'Security',
    date: 'May 2026',
    summary:
      'Tracked down an authentication UI issue, fixed it, and cleaned stale service references.',
    href: '/pages/writeup-opnsense-oidc.html',
    relatedProjects: ['opnsense', 'identity'],
  },
  {
    slug: 'writeup-ai-gateway',
    title: 'Self-Hosted AI Gateway',
    category: 'Automation',
    date: 'May 2026',
    summary:
      'Built and debugged a local AI routing service with persistent workflow context and documented edge cases.',
    href: '/pages/writeup-ai-gateway.html',
    relatedProjects: ['ai-gateway', 'ai-automation'],
  },
  {
    slug: 'writeup-mcp-server',
    title: 'MCP Server For Homelab Control',
    category: 'Automation',
    date: 'May 2026',
    summary:
      'Designed a controlled tool layer for AI-assisted homelab operations and safe repeatable checks.',
    href: '/pages/writeup-mcp-server.html',
    relatedProjects: ['mcp-server'],
  },
  {
    slug: 'writeup-mailcow-email',
    title: 'Self-Hosted Email On Residential Internet',
    category: 'Infrastructure',
    date: 'May 2026',
    summary:
      'Explored mail delivery constraints, relay tradeoffs, and public-safe infrastructure documentation.',
    href: '/pages/writeup-mailcow-email.html',
    relatedProjects: ['operations-alerting', 'proxmox'],
  },
  {
    slug: 'writeup-vlan50',
    title: 'VLAN Trunking Path Fix',
    category: 'Networking',
    date: '2026',
    summary:
      'Diagnosed a trunking mismatch and validated the public ingress path after the fix.',
    href: '/pages/writeup-vlan50.html',
    relatedProjects: ['vlan-segmentation', 'switching'],
  },
  {
    slug: 'writeup-cyberlaunch-2026',
    title: 'CyberLaunch USF 2026 State Championship',
    category: 'CTF',
    date: 'April 2026',
    summary:
      'Competition recap covering Linux tooling, exploitation practice, hash cracking, OSINT, and pressure management.',
    href: '/pages/writeup-cyberlaunch-2026.html',
    relatedProjects: ['skillsusa'],
  },
];

export const latestWriteups = writeups.slice(0, 3);
