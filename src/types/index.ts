export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  skills: string[];
  avatarInitial: string;
  colorScheme: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface WorkflowStage {
  id: number;
  stageNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  stakeholders: string[];
  deliverables: string[];
  kpis: string[];
  duration: string;
  iconName: string;
}

export interface ArchitectureLayer {
  layer: number;
  name: string;
  tagline: string;
  items: {
    title: string;
    description: string;
    techBadge?: string;
  }[];
}

export interface DemoStartup {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  location: string;
  matchScore: number;
  dpiitRegistered: boolean;
  stage: string;
  readinessLevel: string;
  keyInnovations: string[];
  verifiedEligibility: string[];
  demoStatus: 'Matched' | 'Shortlisted' | 'Pilot Candidate';
}

export interface PilotMilestone {
  number: number;
  title: string;
  duration: string;
  fundingShare: string;
  deliverables: string[];
  kpis: string[];
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

export interface ChallengeDemo {
  id: string;
  dept: string;
  title: string;
  budget: string;
  duration: string;
  domain: string;
  applicantsCount: number;
  pilotsActive: number;
  status: 'Active' | 'Reviewing' | 'In Pilot';
}
