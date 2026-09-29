import type { TeamMember } from '../types';

/**
 * ==============================================================
 * TRIAD7 TEAM DATA
 * ==============================================================
 * Easily edit team members, roles, bios, and links here.
 * Placeholder values can be customized anytime without breaking UI.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Team Lead & Architect',
    role: 'Team Lead / System Architect',
    focus: 'Product Strategy & Architecture',
    bio: 'Leads solution architecture, platform workflows, and cross-functional alignment for the SAMARTH GovTech platform.',
    skills: ['System Design', 'React / TypeScript', 'GovTech Policy', 'Team Leadership'],
    avatarInitial: 'TL',
    colorScheme: 'from-blue-600 to-cyan-500',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'teamlead@triad7.example'
  },
  {
    id: 'member-2',
    name: 'Frontend / UI Developer',
    role: 'Frontend & UI/UX Specialist',
    focus: 'User Experience & Interactive Design',
    bio: 'Crafts accessible, responsive interfaces and seamless design systems tailored for government officers and startup founders.',
    skills: ['React 19', 'Tailwind CSS', 'Framer Motion', 'WCAG Accessibility'],
    avatarInitial: 'FE',
    colorScheme: 'from-cyan-500 to-teal-500',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'frontend@triad7.example'
  },
  {
    id: 'member-3',
    name: 'Backend Developer',
    role: 'Backend & Security Engineer',
    focus: 'API Ecosystem & Data Integrity',
    bio: 'Engineers robust REST/GraphQL microservices, tamper-evident audit logs, and secure authentication for government data.',
    skills: ['Node.js', 'PostgreSQL', 'RBAC & Auth', 'API Security'],
    avatarInitial: 'BE',
    colorScheme: 'from-indigo-600 to-blue-500',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'backend@triad7.example'
  },
  {
    id: 'member-4',
    name: 'AI / Data Engineer',
    role: 'AI & Matching Systems Engineer',
    focus: 'Intelligent Discovery & Evaluation',
    bio: 'Develops semantic similarity matching models to map complex departmental challenge statements to verified startup competencies.',
    skills: ['Semantic Matching', 'NLP & Vector Search', 'Python', 'KPI Analytics'],
    avatarInitial: 'AI',
    colorScheme: 'from-sky-600 to-blue-700',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'ai-data@triad7.example'
  },
  {
    id: 'member-5',
    name: 'Cloud / DevOps Engineer',
    role: 'Cloud & Infrastructure Specialist',
    focus: 'Scalability & Reliability',
    bio: 'Builds automated CI/CD pipelines, containerized deployment, and high-availability infrastructure complying with government standards.',
    skills: ['Docker / K8s', 'Cloud Architecture', 'CI/CD Pipelines', 'System Monitoring'],
    avatarInitial: 'CD',
    colorScheme: 'from-slate-700 to-slate-900',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'devops@triad7.example'
  },
  {
    id: 'member-6',
    name: 'Research & Documentation',
    role: 'Research & Documentation Lead',
    focus: 'Procurement Policy & Regulatory Compliance',
    bio: 'Analyzes public procurement frameworks (GeM, GFR 2017, CPPP), startup eligibility guidelines, and formal validation criteria.',
    skills: ['GFR Rules Analysis', 'Technical Writing', 'Impact Assessment', 'Policy Research'],
    avatarInitial: 'RD',
    colorScheme: 'from-blue-800 to-indigo-900',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'research@triad7.example'
  }
];

export const hackathonInfo = {
  teamName: 'TRIAD7',
  event: 'Smart India Hackathon 2026',
  problemStatementId: 'SIH26136',
  category: 'Software',
  theme: 'Miscellaneous',
  organization: 'Government of Maharashtra',
  department: 'Maharashtra State Innovation Society (MSInS), Department of Skills, Employment, Entrepreneurship and Innovation',
  solutionName: 'SAMARTH',
  solutionTagline: 'A digital platform connecting government problems with startup solutions for evaluation, piloting, milestone-based funding, validation, procurement, and scale-up.'
};
