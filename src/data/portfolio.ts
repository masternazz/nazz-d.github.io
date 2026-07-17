export const profile = {
  name: 'Nazeem Massoom Dickey',
  shortName: 'Nazeem Dickey',
  role: 'IT Support & Network Technician',
  location: 'Boynton Beach, Florida',
  email: 'nazeemdickey@gmail.com',
  phone: '(561) 870-3191',
  phoneHref: 'tel:+15618703191',
  github: 'https://github.com/masternazz',
  linkedin: 'https://www.linkedin.com/in/nazeemdickey/',
  site: 'https://masternazz.com',
  availability: 'Open to entry-level IT support, network support, and NOC roles',
  description:
    'Portfolio of Nazeem Dickey, an entry-level IT support and network technician who troubleshoots user issues and operates a documented homelab.',
};

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Resume', href: '/resume' },
];

export const metrics = [
  { value: '3', label: 'Proxmox nodes operated' },
  { value: '3', label: 'Real support fixes documented' },
  { value: '1st', label: 'SkillsUSA Florida' },
  { value: '2026', label: 'SouthTech graduate' },
];

export const capabilities = [
  {
    code: 'SUP',
    title: 'IT support',
    text: 'Windows, PC hardware, connectivity, DNS, account basics, user communication, and focused troubleshooting that starts with the symptom.',
    tools: ['Windows', 'Hardware', 'Remote support', 'Documentation'],
  },
  {
    code: 'NET',
    title: 'Networks',
    text: 'VLANs, switching, routing, DNS, DHCP, firewall policy, wireless, dual-stack labs, and methodical break-fix work.',
    tools: ['Cisco IOS', 'OPNsense', 'CML', 'TCP/IP'],
  },
  {
    code: 'SYS',
    title: 'Systems',
    text: 'Virtualization, Linux, containers, storage, identity, monitoring, backups, and the dependencies that keep services usable.',
    tools: ['Proxmox', 'Linux', 'Docker', 'Authentik'],
  },
  {
    code: 'SEC',
    title: 'Security foundations',
    text: 'Segmentation, least privilege, endpoint visibility, safe remote access, and incident notes practiced inside the lab.',
    tools: ['Wazuh', 'Suricata', 'Access control', 'SIEM'],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  statement: string;
  status: string;
  period: string;
  featured: boolean;
  role: string;
  stack: string[];
  proof: string[];
  problem: string;
  actions: string[];
  outcome: string;
  lessons: string[];
  evidence?: { title: string; detail: string }[];
  artifact?: { href: string; label: string };
  repo?: string;
  repoLabel?: string;
};

export const projects: Project[] = [
  {
    slug: 'operated-homelab',
    index: '02',
    title: 'Operating a segmented three-node homelab',
    category: 'Infrastructure / networking',
    summary:
      'My homelab grew from one server into a three-node Proxmox environment with managed switching, separate network zones, identity, monitoring, storage, and recovery notes.',
    statement: 'I wanted a lab I could maintain and recover, not just a collection of services that happened to be running.',
    status: 'Operating',
    period: '2025–present',
    featured: true,
    role: 'Designer, operator, and documentarian',
    stack: ['Proxmox VE', 'OPNsense', 'VLANs', 'Linux', 'Docker', 'Wazuh', 'Authentik'],
    proof: ['3-node cluster', 'Role-based segmentation', 'Dated change records', 'Layered backups'],
    problem:
      'The lab had outgrown a flat network. Management, storage, identity, public services, guests, and monitoring needed distinct trust boundaries without losing the ability to recover when a migration went wrong.',
    actions: [
      'Designed role-based network zones and migrated services in dependency-aware phases.',
      'Reworked managed switching, firewall policy, DNS behavior, reverse-proxy paths, and remote access.',
      'Recovered cluster quorum during a switching migration and captured validation and rollback checks.',
      'Built a source-of-truth documentation system for inventory, services, decisions, incidents, and public-safe exports.',
    ],
    outcome:
      'The environment now has clearer boundaries, visible service dependencies, defined backup roles, and an operational record that survives the next troubleshooting session.',
    lessons: [
      'Migration order matters as much as the final architecture.',
      'DNS and identity failures often present as application failures.',
      'A recovery path written before a change is more useful than a perfect diagram written afterward.',
    ],
    evidence: [
      {
        title: 'Cluster recovery / May 10, 2026',
        detail: 'Restored Proxmox quorum after a switch migration interrupted two node paths, verified all three nodes, then saved and documented the corrected switch state.',
      },
      {
        title: 'Guest network repair / May 26, 2026',
        detail: 'Corrected an OPNsense captive-portal interface binding, removed stale bypass sessions, and validated the repaired path with a fresh mobile connection.',
      },
      {
        title: 'DNS migration / May 31, 2026',
        detail: 'Moved client-facing DNS to Technitium, updated DHCP resolver assignments across VLANs, and documented the split-horizon and upstream resolution path.',
      },
    ],
    artifact: { href: '/evidence/homelab-operations', label: 'Review sanitized operations evidence' },
  },
  {
    slug: 'cisco-ios-practice-system',
    index: '03',
    title: 'Turning a competition loss into Cisco IOS practice',
    category: 'Cisco / competition',
    summary:
      'I won SkillsUSA Florida Internetworking, then struggled at nationals. That experience showed me exactly where I needed more Cisco IOS practice.',
    statement: 'I did not place at nationals, so I built a practice system around the part that slowed me down.',
    status: 'Training',
    period: '2026',
    featured: true,
    role: 'Competitor and lab author',
    stack: ['Cisco IOS', 'Cisco CML', 'IPv4/IPv6', 'OSPF', 'VLANs', 'NAT/PAT', 'ACLs'],
    proof: ['Florida gold medal', '5-node guided lab', '5 break-fix tickets', 'Locally validated files'],
    problem:
      'Concept knowledge from certifications and homelab work did not automatically become fast, accurate configuration on a live console with a competition clock running.',
    actions: [
      'Named the constraint precisely: verification and configuration speed, not a broad lack of networking knowledge.',
      'Built blank, hinted, and answer-key versions of CML-friendly campus labs.',
      'Added dual-stack routing, VLANs, trunks, EtherChannel, DHCP, NAT/PAT, ACLs, OSPF, and structured fault tickets.',
      'Created show-command checklists, scoring rubrics, flashcards, and deliberate repetition plans.',
    ],
    outcome:
      'The competition result became a reusable learning system that turns “I understand it” into repeatable console fluency and better troubleshooting under pressure.',
    lessons: [
      'A vague weakness is hard to train; a named constraint is actionable.',
      'Verification commands should become muscle memory.',
      'Strong technical stories include the gap, the response, and the evidence of growth.',
    ],
    evidence: [
      {
        title: 'Guided practice path',
        detail: 'Built blank, hinted, and answer-key versions of a five-node CML-Free campus lab so configuration can be repeated without memorizing the answer file.',
      },
      {
        title: 'Break-fix coverage',
        detail: 'Wrote five tickets covering DHCP failure, EtherChannel mismatch, NAT failure, a missing IPv6 route, and unreachable switch management.',
      },
      {
        title: 'Local validation record',
        detail: 'Checked topology YAML for syntax, node and link consistency, duplicate IDs, and CML-Free compatibility, while documenting the limits of local validation.',
      },
    ],
    artifact: { href: '/evidence/cisco-ios', label: 'Review the Cisco lab evidence' },
  },
  {
    slug: 'ai-gateway',
    index: '04',
    title: 'A remote gateway for the AI tools I already use',
    category: 'Automation / self-hosting',
    summary:
      'I built a Node.js service that lets me reach several command-line assistants through Telegram or email while keeping history, memory, and repository access in one place.',
    statement: 'The project started because I wanted to use my workstation tools when I was away from my desk.',
    status: 'Built',
    period: '2026',
    featured: false,
    role: 'Developer and operator',
    stack: ['Node.js', 'Express', 'Telegram', 'IMAP/SMTP', 'Git', 'systemd'],
    proof: ['3 engine routes', '2 message channels', 'Shared context', 'Allow-listed access'],
    problem:
      'Useful CLI assistants were tied to a workstation and split across separate interfaces, histories, and repository contexts.',
    actions: [
      'Built command parsing and routing for three CLI-based assistants.',
      'Added Telegram webhooks, email polling and replies, per-channel history, and shared memory.',
      'Integrated controlled repository operations and sender allow-listing.',
      'Separated credentials from source and documented deployment, service management, and failure modes.',
    ],
    outcome:
      'One remote interface can dispatch work to multiple assistants while preserving useful context and keeping the operational boundary visible.',
    lessons: [
      'Remote convenience makes narrow authorization more important.',
      'Memory needs limits, compaction, and explicit ownership.',
      'Operational documentation is part of the feature.',
    ],
    repo: 'https://github.com/masternazz/ai-gateway',
    repoLabel: 'View the repository',
  },
  {
    slug: 'homelab-mcp',
    index: '05',
    title: 'Safer infrastructure checks with named tools',
    category: 'AI operations / APIs',
    summary:
      'A typed Model Context Protocol service that turns common API and SSH checks into smaller operations with clear names and inputs.',
    statement: 'I wanted routine checks to be easier to understand than a block of shell commands.',
    status: 'Operating',
    period: '2026',
    featured: false,
    role: 'Developer and operator',
    stack: ['Node.js', 'MCP', 'Zod', 'REST APIs', 'SSH'],
    proof: ['Typed schemas', 'Multiple service adapters', 'Credential separation', 'Repeatable checks'],
    problem:
      'Broad shell access makes routine infrastructure work difficult to constrain, explain, and audit.',
    actions: [
      'Created named tools for virtualization, firewall, proxy, mail, monitoring, and service checks.',
      'Defined typed inputs and predictable responses for each operation.',
      'Separated credentials from code and kept public descriptions sanitized.',
      'Paired the tools with source-of-truth documentation and outcome verification.',
    ],
    outcome:
      'Common infrastructure checks now start from explicit intent, creating a clearer boundary between a request and the system underneath it.',
    lessons: [
      'A named tool is easier to review than an arbitrary command.',
      'Read-only and mutating actions should be visibly distinct.',
      'Tools still need current context and post-action verification.',
    ],
  },
  {
    slug: 'chess-ultimate',
    index: '06',
    title: 'Building four versions of chess with a friend',
    category: 'Desktop product / collaboration',
    summary:
      'A collaborative Electron game with four themed editions, more than 11 variants, reactive procedural audio, custom mechanics, and a packaged Windows build.',
    statement: 'This project pushed me outside infrastructure and into interaction design, audio, game state, testing, and release work.',
    status: 'Shipped',
    period: '2026',
    featured: false,
    role: 'Collaborator',
    stack: ['Electron', 'JavaScript', 'Web Audio API', 'Desktop packaging', 'QA'],
    proof: ['4 themed editions', '11+ variants', 'Procedural audio', 'Windows release'],
    problem:
      'The goal was to make each version of chess feel distinct without depending on a server or bundled audio library.',
    actions: [
      'Collaborated on four editions with separate mechanics and visual identities.',
      'Built synthesized soundtracks that react to captures, checks, pressure, and game state.',
      'Added variants, analysis labels, achievements, and optional Discord presence.',
      'Used smoke tests and build scripts to prepare a desktop release.',
    ],
    outcome:
      'The shipped app demonstrates collaboration, product polish, state-heavy front-end work, testing, and release discipline.',
    lessons: [
      'State bugs hide in the interactions between systems.',
      'Procedural audio can create identity without a large asset footprint.',
      'A launcher has to explain the product before the first move.',
    ],
    repo: 'https://github.com/Flopper1-1/Chess-Ultimate',
    repoLabel: 'View the collaborative project',
  },
  {
    slug: 'everyday-it-support',
    index: '01',
    title: 'Three small IT problems, isolated quickly',
    category: 'IT support / troubleshooting',
    summary:
      'Three real freelance support requests: a 100 Mbps Ethernet link, a no-boot memory change, and a DNS resolution failure.',
    statement: 'The fixes were small. The useful part was identifying the failing layer before changing anything.',
    status: 'Active',
    period: '2024–present',
    featured: true,
    role: 'Freelance IT support technician',
    stack: ['Windows', 'Ethernet', 'PC hardware', 'DNS', 'User communication'],
    proof: ['3 real freelance requests', '1 to 5 minute fixes', 'Network, hardware, and DNS', 'Plain-language handoff'],
    problem:
      'Each person knew only that something was slow or broken. I needed to translate the symptom into a likely layer, make one focused change, and confirm the original problem was gone.',
    actions: [
      'Found an Ethernet adapter negotiating at 100/100 Mbps, recommended replacing the cable, and confirmed the faster link after the swap in about five minutes.',
      'Helped recover a PC that stopped booting after a memory change by correcting the DIMM seating and slot placement in about one minute.',
      'Isolated a browsing problem to DNS resolution, changed the device to Cloudflare DNS, and confirmed name lookups worked in about five minutes.',
      'Explained what failed and why each focused change was safer than changing several settings at once.',
    ],
    outcome:
      'All three systems returned to normal in five minutes or less, and each person left knowing which component or setting caused the symptom.',
    lessons: [
      'Link speed is evidence, not just a number in a settings panel.',
      'After a hardware change, check seating and the board layout before assuming a failed part.',
      'A DNS failure can look like the internet is down even when the connection itself still works.',
    ],
    evidence: [
      {
        title: 'Ethernet link / about 5 minutes',
        detail: 'Symptom: slow downloads. Check: adapter link rate showed 100/100 Mbps. Fix: replace the Ethernet cable. Validation: download performance recovered after the replacement.',
      },
      {
        title: 'Memory no-boot / about 1 minute',
        detail: 'Symptom: PC stopped booting after RAM was moved. Check: module seating and motherboard slot layout. Fix: reseat the modules in a supported paired layout. Validation: the system completed startup.',
      },
      {
        title: 'DNS resolution / about 5 minutes',
        detail: 'Symptom: searches and named sites failed. Check: separated name resolution from basic connectivity. Fix: set Cloudflare as the resolver. Validation: domain lookups and browsing worked again.',
      },
    ],
  },
];

const recruiterOrder = ['everyday-it-support', 'operated-homelab', 'cisco-ios-practice-system', 'ai-gateway', 'homelab-mcp', 'chess-ultimate'];
export const orderedProjects = recruiterOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));
export const featuredProjects = orderedProjects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const experience = [
  {
    period: 'Jun 2024–present',
    role: 'Freelance IT Support Technician',
    organization: 'Self-employed · Boynton Beach, FL',
    text: 'Set up home routers and provided basic network and computer support, including Ethernet, Wi-Fi, DNS, hardware, and connectivity troubleshooting.',
  },
  {
    period: 'Jun 2024–Jan 2026',
    role: 'Community Event Volunteer',
    organization: 'Center for Child Counseling · Palm Beach, FL',
    text: 'Supported inventory, supply distribution, event setup, community activities, and guest-facing logistics.',
  },
  {
    period: 'Apr–Jun 2026',
    role: 'Internetworking Competitor',
    organization: 'SkillsUSA · Florida and national stages',
    text: 'First place in Florida, then national competition experience translated into a focused Cisco IOS practice track.',
  },
];

export const primaryCredentials = [
  { name: 'CompTIA CySA+', issuer: 'CompTIA', year: '2026', area: 'Security analysis', verify: 'https://www.credly.com/badges/7f5d30d4-440c-435c-8ece-c7bcf3ea0aa3/public_url' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2026', area: 'Security fundamentals', verify: 'https://www.credly.com/badges/35c52457-89d2-46e6-a4df-f74ee8ff2cb4/public_url' },
  { name: 'CompTIA Network+', issuer: 'CompTIA', year: '2026', area: 'Network infrastructure', verify: 'https://www.credly.com/badges/b1b0282b-9f5e-480c-9df8-9fe58b3e3095/public_url' },
  { name: 'CompTIA A+', issuer: 'CompTIA', year: '2026', area: 'IT support and systems', verify: 'https://www.credly.com/badges/9190e368-d981-49b9-a0c2-d77fff27756a/public_url' },
  { name: 'Cisco CCST Networking', issuer: 'Cisco', year: '2026', area: 'Network support', verify: 'https://www.credly.com/badges/aba8aba4-7de1-4c37-b3b1-20a1ab7e6970/public_url' },
  { name: 'Cisco CCST IT Support', issuer: 'Cisco', year: '2026', area: 'End-user support', verify: 'https://www.credly.com/badges/1a573dae-9030-44d5-84ab-eaa9ffe6bed6/public_url' },
  { name: 'Cisco CCST Cybersecurity', issuer: 'Cisco', year: '2026', area: 'Cybersecurity support', verify: 'https://www.credly.com/badges/38c9d3c3-834f-47bb-8a80-5be24131b1d6/public_url' },
];

export const credentialGroups = [
  {
    issuer: 'Microsoft fundamentals',
    summary: 'Exam-based fundamentals credentials',
    items: ['AZ-900 Azure', 'SC-900 Security, Compliance & Identity', 'AI-900 Azure AI', 'DP-900 Azure Data', 'PL-900 Power Platform', 'AB-900 Copilot & Agent Administration'],
  },
  {
    issuer: 'CompTIA stackable titles',
    summary: 'Automatically earned from the CompTIA certifications above',
    items: ['CIOS IT Operations Specialist', 'CSIS Secure Infrastructure Specialist', 'CSAP Security Analytics Professional'],
  },
  {
    issuer: 'Additional certificates & badges',
    summary: 'Course and platform credentials, separated from primary certifications',
    items: ['EC-Council EHE and NDE', 'Cisco Data Science and Modern AI', 'ITS Network Security, Device Configuration, and Cloud Computing', 'QuickBooks and Professional Communication'],
  },
];

export const timeline = [
  { date: 'Jan 2025', title: 'Started formal IT study', text: 'Entered SouthTech Academy with curiosity, a willingness to fail, and no polished origin story.' },
  { date: 'Mar 2025', title: 'First rack server', text: 'Game hosting and Linux services turned one machine into a lesson about real dependencies.' },
  { date: 'Sep 2025', title: 'Built the first rack', text: 'Storage, managed switching, and a dedicated firewall turned experiments into operations.' },
  { date: 'Mar 2026', title: 'Built a stronger IT foundation', text: 'Earned A+, Network+, and Security+, then continued into security analysis with CySA+.' },
  { date: 'Apr 2026', title: 'SkillsUSA Florida gold', text: 'Placed first in Internetworking and qualified for the national competition.' },
  { date: 'May 2026', title: 'Graduated SouthTech Academy', text: 'Graduated with Honor Roll recognition, honors classes, and Esports Team Captain experience.' },
  { date: 'Jun 2026', title: 'Nationals defined the next step', text: 'Did not place nationally; turned the gap into a structured Cisco IOS lab program.' },
];
