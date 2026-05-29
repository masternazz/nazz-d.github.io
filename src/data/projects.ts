export type ProjectCategory =
  | 'network'
  | 'security'
  | 'infrastructure'
  | 'operations'
  | 'automation'
  | 'competition'
  | 'support';

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  categories: ProjectCategory[];
  rolePaths: string[];
  featured?: boolean;
  priority?: number;
  problem: string;
  built: string[];
  skills: string[];
  result: string;
  relatedWriteups?: string[];
};

export const projects: Project[] = [
  {
    slug: 'skillsusa',
    title: 'SkillsUSA Internetworking',
    eyebrow: 'Competition',
    summary:
      'State-level networking competition proof: timed work, troubleshooting, technical explanation, and advancement to nationals.',
    status: 'Gold Medal',
    categories: ['competition', 'network'],
    rolePaths: ['Network Admin', 'MSP / Help Desk'],
    featured: true,
    priority: 1,
    problem:
      'I needed to prove networking skills under pressure, not just list certifications on a resume.',
    built: [
      'Prepared across subnetting, switching, routing, cabling, troubleshooting, and client-facing explanation.',
      'Competed in a timed state event that tested both technical ability and communication.',
      'Documented the process as a public recap for hiring reviewers.',
    ],
    skills: ['Networking fundamentals', 'Troubleshooting', 'Technical communication', 'Competition discipline'],
    result:
      'Placed 1st at SkillsUSA Florida Internetworking and created a clear proof point for junior networking roles.',
    relatedWriteups: ['writeup-cyberlaunch-2026'],
  },
  {
    slug: 'vlan-segmentation',
    title: 'Production VLAN Segmentation',
    eyebrow: 'Network Security',
    summary:
      'Role-based network separation, default-deny thinking, DMZ placement, migration notes, and validation habits.',
    status: 'Active',
    categories: ['network', 'security', 'infrastructure'],
    rolePaths: ['Network Admin', 'SOC / NOC'],
    featured: true,
    priority: 2,
    problem:
      'A flat lab network was becoming too hard to reason about safely as services, storage, remote access, and public ingress grew.',
    built: [
      'Designed role-based VLAN separation for management, services, guests, storage, and public ingress paths.',
      'Moved toward default-deny firewall thinking and documented allowed dependencies at a public-safe level.',
      'Captured migration notes and rollback thinking without publishing private addressing or rule detail.',
    ],
    skills: ['VLAN design', 'Firewall policy', 'Switching', 'Migration planning', 'Validation'],
    result:
      'The lab now reads like a production environment: separated trust zones, clearer dependencies, and better troubleshooting paths.',
    relatedWriteups: ['writeup-vlan-migration', 'writeup-guest-captive-portal', 'writeup-vlan50'],
  },
  {
    slug: 'homelab',
    title: 'Enterprise Homelab Architecture',
    eyebrow: 'Infrastructure',
    summary:
      'Public-safe overview of compute, firewall, switching, storage, identity, monitoring, and recovery layers.',
    status: 'Documented',
    categories: ['infrastructure', 'network', 'security', 'operations'],
    rolePaths: ['Network Admin', 'SOC / NOC', 'MSP / Help Desk'],
    featured: true,
    priority: 3,
    problem:
      'I wanted a real environment where I could learn infrastructure by operating it, breaking it, fixing it, and documenting it.',
    built: [
      'Built a rack-based lab using virtualization, firewalling, managed switching, storage, identity, monitoring, and remote access.',
      'Published sanitized diagrams and photos that show the system without leaking sensitive configuration.',
      'Kept documentation focused on roles, dependencies, and operational habits.',
    ],
    skills: ['Infrastructure planning', 'Virtualization', 'Firewalling', 'Storage', 'Documentation'],
    result:
      'The lab gives employers concrete evidence of hands-on work across networking, systems, security, and operations.',
  },
  {
    slug: 'mcp-server',
    title: 'Homelab MCP Server',
    eyebrow: 'AI Operations',
    summary:
      'Validated tool layer for AI-assisted operations, with guardrails around controlled actions and documentation.',
    status: 'Active',
    categories: ['automation', 'infrastructure', 'operations'],
    rolePaths: ['Automation', 'SOC / NOC'],
    featured: true,
    priority: 4,
    problem:
      'AI assistants are useful only when their actions are constrained, auditable, and tied to documented infrastructure context.',
    built: [
      'Created a controlled operations layer for homelab administration tasks and checks.',
      'Focused on validated tool calls, repeatable workflows, and clear documentation boundaries.',
      'Documented the public-safe architecture and lessons learned.',
    ],
    skills: ['Node.js', 'APIs', 'Automation design', 'Operational safety', 'AI workflow testing'],
    result:
      'The project demonstrates automation judgment: when to use AI tooling, how to constrain it, and how to verify outcomes.',
    relatedWriteups: ['writeup-mcp-server'],
  },
  {
    slug: 'opnsense',
    title: 'OPNsense Edge Firewall',
    eyebrow: 'Firewall',
    summary:
      'Firewall, routing, DNS/DHCP, certificate, IDS, and public ingress patterns without exposing private details.',
    status: 'Active',
    categories: ['network', 'security', 'infrastructure'],
    rolePaths: ['Network Admin', 'SOC / NOC'],
    problem:
      'The edge firewall needed to become a stable routing, DNS, security, and ingress control point for the whole lab.',
    built: [
      'Operated OPNsense as the gateway and firewall for segmented lab networks.',
      'Documented DNS, DHCP, certificate, and ingress patterns at a sanitized level.',
      'Used change notes to track fixes and prevent stale service references.',
    ],
    skills: ['OPNsense', 'Routing', 'DNS/DHCP', 'Firewall policy', 'IDS concepts'],
    result:
      'The firewall project shows practical network administration and security-minded change control.',
    relatedWriteups: ['writeup-opnsense-oidc', 'writeup-guest-captive-portal'],
  },
  {
    slug: 'proxmox',
    title: 'Proxmox Cluster Management',
    eyebrow: 'Virtualization',
    summary:
      'Virtualization, containers, backup strategy, hardware management, and service documentation.',
    status: 'Active',
    categories: ['infrastructure', 'operations'],
    rolePaths: ['MSP / Help Desk', 'SOC / NOC'],
    problem:
      'I needed a flexible compute layer for security, identity, monitoring, automation, media, and testing workloads.',
    built: [
      'Used Proxmox to run VM and LXC workloads for the lab.',
      'Documented service roles, dependencies, backup thinking, and recovery notes.',
      'Kept public details focused on architecture rather than private inventory.',
    ],
    skills: ['Proxmox', 'Linux', 'LXC/VMs', 'Backups', 'Service documentation'],
    result:
      'This project proves day-to-day systems administration habits beyond single-machine lab exercises.',
    relatedWriteups: ['writeup-vlan-migration', 'writeup-mailcow-email'],
  },
  {
    slug: 'switching',
    title: 'Gigabit Switching & PoE+',
    eyebrow: 'Switching',
    summary:
      'Managed switching, trunk design, access ports, PoE support, and physical cabling discipline.',
    status: 'Built',
    categories: ['network', 'infrastructure'],
    rolePaths: ['Network Admin'],
    problem:
      'The lab needed a reliable physical network layer that could support segmentation, wireless access, and rack growth.',
    built: [
      'Deployed managed switching for core and access roles.',
      'Mapped trunk/access behavior and kept cabling/documentation aligned with the logical design.',
      'Used the switch layer to support VLAN and public ingress separation.',
    ],
    skills: ['Switching', '802.1Q concepts', 'PoE', 'Cabling', 'Physical troubleshooting'],
    result:
      'The network fabric is easier to inspect, troubleshoot, and explain from both physical and logical views.',
    relatedWriteups: ['writeup-vlan-migration', 'writeup-vlan50'],
  },
  {
    slug: 'remote-access',
    title: 'Secure Remote Access',
    eyebrow: 'Access',
    summary:
      'Remote administration through controlled access paths instead of exposing management surfaces directly.',
    status: 'Active',
    categories: ['network', 'security', 'operations'],
    rolePaths: ['SOC / NOC', 'MSP / Help Desk'],
    problem:
      'Remote access needed to support administration without turning private management tools into public targets.',
    built: [
      'Separated admin access patterns from public service ingress patterns.',
      'Documented the design as controlled paths and trust boundaries rather than publishing private details.',
      'Kept the public explanation focused on operational intent and safety.',
    ],
    skills: ['Remote access', 'Zero-trust concepts', 'Tunnels', 'TLS', 'Access control'],
    result:
      'The project shows security-aware access design and practical troubleshooting habits.',
  },
  {
    slug: 'identity',
    title: 'Centralized Identity & Auth',
    eyebrow: 'Identity',
    summary:
      'SSO and account management concepts across modern and legacy service patterns.',
    status: 'Active',
    categories: ['security', 'infrastructure'],
    rolePaths: ['SOC / NOC', 'MSP / Help Desk'],
    problem:
      'As the lab grew, access needed to become centralized and easier to reason about.',
    built: [
      'Used Authentik-centered identity concepts for modern service authentication.',
      'Documented OIDC/SSO lessons and integration patterns at a public-safe level.',
      'Connected identity work back to firewall, DNS, and service dependency fixes.',
    ],
    skills: ['Identity', 'SSO', 'OIDC concepts', 'Access policy', 'Documentation'],
    result:
      'The identity work shows understanding of access control beyond individual app passwords.',
    relatedWriteups: ['writeup-opnsense-oidc'],
  },
  {
    slug: 'wazuh',
    title: 'Wazuh SIEM/XDR Lab',
    eyebrow: 'SIEM',
    summary:
      'Log aggregation, alert review habits, endpoint visibility, and SOC-style investigation workflow.',
    status: 'Active',
    categories: ['security', 'operations'],
    rolePaths: ['SOC / NOC'],
    problem:
      'I wanted security monitoring practice that involved live systems, real dependencies, and alert triage habits.',
    built: [
      'Ran Wazuh as the central SIEM/XDR learning environment for the lab.',
      'Documented generic investigation workflow without publishing real alert data.',
      'Connected monitoring lessons to operations and access-control decisions.',
    ],
    skills: ['SIEM', 'Log review', 'Endpoint monitoring', 'SOC workflow', 'Alert triage'],
    result:
      'The page gives SOC/NOC reviewers a concrete path into my monitoring and investigation practice.',
  },
  {
    slug: 'operations-alerting',
    title: 'Operations & Alerting',
    eyebrow: 'Operations',
    summary:
      'Service alerts, monitoring signals, rollback notes, and the operational habit of documenting changes.',
    status: 'Active',
    categories: ['operations', 'infrastructure', 'security'],
    rolePaths: ['SOC / NOC', 'MSP / Help Desk'],
    problem:
      'Dashboards are not enough if service failures do not become visible, actionable, and documented.',
    built: [
      'Connected monitoring and alerting ideas across major lab services.',
      'Documented rollback and validation thinking for infrastructure changes.',
      'Kept public writing high-level and safe.',
    ],
    skills: ['Monitoring', 'Alerting', 'Runbooks', 'Rollback planning', 'Service dependencies'],
    result:
      'The operations work shows the habits that make infrastructure supportable after the first build.',
    relatedWriteups: ['writeup-mailcow-email'],
  },
  {
    slug: 'status',
    title: 'Live Service Status',
    eyebrow: 'Monitoring',
    summary:
      'Public status reporting for selected endpoints, kept high-level so it does not expose private topology.',
    status: 'Live',
    categories: ['operations'],
    rolePaths: ['SOC / NOC', 'MSP / Help Desk'],
    problem:
      'Public-facing services needed a clean status story without leaking backend topology.',
    built: [
      'Published a sanitized status view for selected public endpoints.',
      'Used fallback status data so the portfolio can still communicate health when live data is unavailable.',
      'Kept internal service names and private topology out of the public page.',
    ],
    skills: ['Uptime monitoring', 'Public-safe reporting', 'Fallback handling', 'Operational visibility'],
    result:
      'The status page shows practical monitoring while respecting security boundaries.',
  },
  {
    slug: 'ai-gateway',
    title: 'Self-Hosted AI Gateway',
    eyebrow: 'AI Gateway',
    summary: 'Message routing, AI tooling experiments, persistent memory, and git-aware workflows.',
    status: 'Active',
    categories: ['automation', 'infrastructure'],
    rolePaths: ['Automation'],
    problem:
      'I wanted a single controlled place to experiment with AI assistants, messages, and repo-aware workflows.',
    built: [
      'Built a self-hosted gateway around AI routing and persistent workflow context.',
      'Documented bugs, tradeoffs, and operational boundaries.',
      'Connected the gateway to broader AI automation experiments.',
    ],
    skills: ['Node.js', 'AI workflow design', 'Git workflows', 'Messaging', 'Debugging'],
    result:
      'The gateway demonstrates practical automation building and the judgment to document limitations.',
    relatedWriteups: ['writeup-ai-gateway'],
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation Research',
    eyebrow: 'Research',
    summary:
      'Testing CLI-based AI tools against documented infrastructure tasks and learning where automation needs boundaries.',
    status: 'Active',
    categories: ['automation'],
    rolePaths: ['Automation'],
    problem:
      'AI tooling needs to be tested against real tasks, not just demos, to understand where it helps and where it can cause risk.',
    built: [
      'Compared AI-assisted infrastructure workflows across documented tasks.',
      'Focused on repeatability, reviewability, and safe boundaries.',
      'Used the homelab docs as context for realistic experiments.',
    ],
    skills: ['AI tooling', 'Prompting', 'Infrastructure context', 'Workflow design', 'Risk review'],
    result:
      'The research page shows curiosity and caution: useful automation, but not blind automation.',
    relatedWriteups: ['writeup-ai-gateway', 'writeup-mcp-server'],
  },
  {
    slug: 'game-hosting',
    title: 'Game Hosting & Discord Automation',
    eyebrow: 'Automation',
    summary:
      'Panel-based hosting, bot automation, live status checks, and operational cleanup around self-hosted game servers.',
    status: 'Active',
    categories: ['automation', 'infrastructure', 'operations'],
    rolePaths: ['Automation', 'MSP / Help Desk'],
    problem:
      'Game hosting became a practical way to learn service operations, user-facing support, monitoring, and automation.',
    built: [
      'Hosted game services through a panel-and-node model.',
      'Built Discord automation and status checks around player/server state.',
      'Documented operational lessons without publishing sensitive endpoints.',
    ],
    skills: ['Python', 'APIs', 'Discord automation', 'Service operations', 'User support'],
    result:
      'The project connects technical infrastructure to real people using the services.',
  },
];

export const featuredProjects = projects
  .filter(project => project.featured)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));

export const getProject = (slug: string) => projects.find(project => project.slug === slug);
