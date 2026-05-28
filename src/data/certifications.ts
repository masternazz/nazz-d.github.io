export type CertificationGroup = {
  issuer: string;
  items: string[];
};

export const certificationGroups: CertificationGroup[] = [
  {
    issuer: 'CompTIA',
    items: ['A+', 'Network+', 'Security+', 'CySA+', 'CIOS', 'CSIS', 'CSAP'],
  },
  {
    issuer: 'Cisco',
    items: ['CCST Networking', 'CCST IT Support', 'CCST Cybersecurity', 'Data Science', 'Modern AI'],
  },
  {
    issuer: 'Microsoft',
    items: ['AZ-900', 'SC-900', 'AI-900', 'DP-900', 'PL-900', 'AB-900'],
  },
  {
    issuer: 'Certiport / Other',
    items: ['ITS Network Security', 'ITS Device Configuration', 'ITS Cloud Computing', 'QuickBooks', 'Professional Communication'],
  },
];

export const certificationHighlights = [
  'CompTIA Trifecta + CySA+',
  'Cisco CCST triple stack',
  'Microsoft fundamentals stack',
  '31+ total credentials',
];
