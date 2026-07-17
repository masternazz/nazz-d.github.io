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

export type AdditionalWork = {
  title: string;
  category: string;
  period: string;
  summary: string;
  skills: string[];
};

export const additionalWork: AdditionalWork[] = [
  {
    title: 'OPNsense OIDC and service-name recovery',
    category: 'Identity / firewall',
    period: 'May 2026',
    summary:
      'Diagnosed a disappearing OIDC login option after LDAP was added, corrected the identity-provider redirect path, installed a patched plugin package, and moved firewall integrations from hardcoded addresses to service DNS names.',
    skills: ['OPNsense', 'Authentik', 'OIDC', 'LDAP', 'DNS'],
  },
  {
    title: 'Dynamic split-horizon DNS updater',
    category: 'DNS / Python',
    period: 'May 2026',
    summary:
      'Built a Python job that detects residential public-IP changes, updates Technitium Split Horizon address translation only when the value changes, restarts the DNS service, and records the result.',
    skills: ['Technitium', 'Python', 'Split-horizon DNS', 'Cron', 'Change detection'],
  },
  {
    title: 'Private remote administration path',
    category: 'Remote access / security',
    period: '2025–present',
    summary:
      'Used encrypted mesh networking and separated public application ingress from administration so firewall, hypervisor, switch, and storage management interfaces stay off the public internet.',
    skills: ['Mesh VPN', 'Access boundaries', 'Private administration', 'Documentation'],
  },
  {
    title: 'Storage and backup network operations',
    category: 'Systems / recovery',
    period: '2026–present',
    summary:
      'Moved NAS and backup roles into dedicated network paths, restored Proxmox storage targets after addressing changes, and documented boot order, backup validation, dependencies, and rollback steps.',
    skills: ['Proxmox Backup Server', 'NFS', 'NAS', 'Storage VLAN', 'Recovery checks'],
  },
];

export const projects: Project[] = [
  {
    slug: 'operated-homelab',
    index: '03',
    title: 'Operating a segmented three-node homelab',
    category: 'Infrastructure / networking',
    summary:
      'My homelab grew from one server into a three-node Proxmox environment with managed switching, separate network zones, identity, monitoring, storage, and recovery notes.',
    statement: 'I wanted a lab I could maintain and recover, not just a collection of services that happened to be running.',
    status: 'Operating',
    period: '2025–present',
    featured: false,
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
    index: '04',
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
    slug: 'vlan-segmentation-migration',
    index: '02',
    title: 'Migrating a flat lab into role-based VLANs',
    category: 'Network operations / migration',
    summary:
      'I moved a flat homelab into 10 role-based VLANs, migrated more than 20 virtual workloads, and restored three-node Proxmox quorum after a switching cutover broke two node paths.',
    statement: 'The hard part was not creating VLANs. It was preserving every dependency during the cutover.',
    status: 'Completed and operating',
    period: 'May 2026',
    featured: true,
    role: 'Network designer and operator',
    stack: ['OPNsense', 'Cisco SG300', 'Netgear GS728TP', '802.1Q', 'Proxmox VE', 'DNS/DHCP'],
    proof: ['10 role-based VLANs', '3/3 cluster quorum restored', '20+ workloads migrated', 'Validation and rollback notes'],
    problem:
      'The lab had grown around one flat network. Management, storage, public services, guests, testing, and internal applications shared the same trust boundary, and replacing the switching fabric exposed how many services depended on the old path.',
    actions: [
      'Mapped network roles, service dependencies, migration order, validation checks, and rollback points before the cutover.',
      'Replaced the legacy switching path with a Cisco SG300 core and Netgear managed access switch, then audited tagged membership and physical links.',
      'Restored Proxmox quorum by tracing the affected node ports and correcting management-VLAN reachability across the trunks.',
      'Moved virtual workloads in phases and updated their DHCP reservations, DNS records, reverse-proxy targets, storage paths, and required firewall policy.',
    ],
    outcome:
      'The lab now separates network roles, the three-node cluster is healthy, dependent services resolve through the correct paths, and the recovery order is documented for the next change.',
    lessons: [
      'A switch can be online while one required VLAN is still missing from the path.',
      'Service migrations fail at dependencies such as DNS, storage, and proxy targets more often than at the new address itself.',
      'Keep the previous management path until the replacement has been verified end to end.',
    ],
    evidence: [
      {
        title: 'Switching cutover / May 8, 2026',
        detail: 'Replaced the old switching path, restored the public-service VLAN, verified gigabit links, and documented the new core and access roles.',
      },
      {
        title: 'Cluster recovery / May 10, 2026',
        detail: 'Used neighbor and port mapping to find two Proxmox trunks missing the management VLAN, corrected the allowed membership, confirmed three nodes and three votes, then saved the switch state.',
      },
      {
        title: 'Dependency validation',
        detail: 'Checked workload addressing, DNS, proxy backends, storage reachability, required inter-VLAN paths, and the cluster state before retiring the old route.',
      },
    ],
    artifact: { href: '/evidence/homelab-operations', label: 'Review sanitized operations evidence' },
  },
  {
    slug: 'guest-network-recovery',
    index: '05',
    title: 'Repairing a guest network from client to firewall',
    category: 'Network support / firewall',
    summary:
      'A guest SSID connected but skipped the captive portal. I followed the path through VLAN tagging, DHCP, DNS, OPNsense sessions, and firewall policy until the wrong interface binding surfaced.',
    statement: 'The Wi-Fi name looked right. The live interface state did not.',
    status: 'Resolved',
    period: 'May 2026',
    featured: false,
    role: 'Network operator and troubleshooter',
    stack: ['OPNsense', 'VLANs', 'Managed switching', 'Wi-Fi', 'DHCP', 'DNS'],
    proof: ['Wrong interface isolated', 'Fresh mobile validation', 'Internet-only guest policy', 'Stale sessions removed'],
    problem:
      'Guest clients could join the wireless network, but the expected portal flow did not appear consistently. The SSID label alone could not show whether the client VLAN, resolver path, portal zone, session state, and firewall rules agreed.',
    actions: [
      'Verified the guest SSID tag across the access point, managed switching path, and OPNsense interface.',
      'Checked the client lease and DNS path separately from captive-portal enforcement.',
      'Found the portal zone bound to a network-services interface instead of the actual guest interface and corrected the binding.',
      'Cleared stale bypass sessions, aligned lease and portal timeouts, and repeated the test with a fresh mobile connection.',
    ],
    outcome:
      'A fresh client received the expected guest lease, entered the portal flow, established a guest session, reached the internet, and remained isolated from internal network roles.',
    lessons: [
      'Interface labels are not enough; verify the live handle and generated service state.',
      'Stale sessions can make a correct fix look broken or a broken configuration look correct.',
      'Client behavior, DHCP, DNS, portal state, and firewall policy all need to agree before the issue is closed.',
    ],
    evidence: [
      {
        title: 'Path check',
        detail: 'Confirmed the guest tag traversed the access point and managed switching path to the firewall interface.',
      },
      {
        title: 'Root cause',
        detail: 'The captive-portal zone referenced the wrong logical interface even though the visible guest-network labels looked plausible.',
      },
      {
        title: 'Validation',
        detail: 'Retested with a fresh phone, confirmed a guest lease and portal session, then checked that internal network roles remained unreachable.',
      },
    ],
    artifact: { href: '/evidence/homelab-operations', label: 'Review the dated guest-network record' },
  },
  {
    slug: 'wazuh-monitoring-operations',
    index: '06',
    title: 'Restoring and operating Wazuh monitoring',
    category: 'Monitoring / security operations',
    summary:
      'I use Wazuh as a lab monitoring and SIEM environment, including cross-VLAN agent paths, service recovery, endpoint visibility, and a repeatable alert-review workflow.',
    statement: 'A dashboard is not useful if the manager is unhealthy or the endpoints stopped reporting.',
    status: 'Operating',
    period: '2026–present',
    featured: false,
    role: 'Lab operator and analyst',
    stack: ['Wazuh', 'Linux', 'Windows Server', 'Syslog', 'Endpoint monitoring'],
    proof: ['22 active lab agents at validation', 'Cross-VLAN monitoring paths', 'Manager recovery record', 'Sanitized triage workflow'],
    problem:
      'Monitoring depended on a healthy central manager and narrow agent paths across separated network roles. A failed manager start and silent reporting gaps could remove visibility without breaking the monitored service itself.',
    actions: [
      'Investigated a manager startup failure, identified stale processes from an earlier crash, restarted the Wazuh control plane, and checked agent state afterward.',
      'Validated that each network role could reach only the required agent and log-ingestion paths instead of receiving broad inter-VLAN access.',
      'Documented a review sequence for active alerts, affected endpoint, event context, severity, related activity, notes, and escalation.',
      'Kept real alert contents, internal addresses, account details, and full firewall policy out of public evidence.',
    ],
    outcome:
      'Central monitoring returned with 22 active lab agents at the validation point, the required segmented paths remained narrow, and future reviews have a consistent investigation sequence.',
    lessons: [
      'Monitoring needs health checks for the monitoring system itself.',
      'An agent count is a starting signal, not proof that every source is useful or current.',
      'A consistent triage record makes escalation easier and prevents the next review from starting from zero.',
    ],
    evidence: [
      {
        title: 'Manager recovery / May 15, 2026',
        detail: 'Recovered the Wazuh manager after a failed startup caused by stale processes, then confirmed the manager state and 22 active lab agents.',
      },
      {
        title: 'Segmented collection path',
        detail: 'Used scoped per-network rules for required agent and log traffic without opening general access between network roles.',
      },
      {
        title: 'Public-safety boundary',
        detail: 'The portfolio describes the workflow and recovery result but does not expose live alert data, addresses, device names, accounts, or exact policy.',
      },
    ],
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

const recruiterOrder = [
  'everyday-it-support',
  'vlan-segmentation-migration',
  'operated-homelab',
  'cisco-ios-practice-system',
  'guest-network-recovery',
  'wazuh-monitoring-operations',
];
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
