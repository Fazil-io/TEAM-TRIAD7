import type {
  WorkflowStage,
  ArchitectureLayer,
  DemoStartup,
  PilotMilestone,
  ChallengeDemo
} from '../types';

export const workflowStages: WorkflowStage[] = [
  {
    id: 1,
    stageNumber: '01',
    title: 'IDENTIFY',
    shortDesc: 'Government identifies an operational challenge.',
    fullDesc: 'Department nodal officers define real-world operational bottlenecks, service delivery gaps, or modernization requirements with clear problem scopes and end-user definitions.',
    stakeholders: ['Nodal Officers', 'Department Heads', 'Field Supervisors'],
    deliverables: ['Problem Definition Dossier', 'Target Beneficiaries Map', 'Expected Operational KPIs'],
    kpis: ['Problem scope clarity score', 'Operational relevance index'],
    duration: 'Week 1 - 2',
    iconName: 'Search'
  },
  {
    id: 2,
    stageNumber: '02',
    title: 'PUBLISH',
    shortDesc: 'Challenge is published with requirements, eligibility, KPIs, budget and timeline.',
    fullDesc: 'Standardized challenge briefs are authored with eligibility criteria (DPIIT recognition, tech readiness), milestone funding caps, measurable trial metrics, and sandbox access parameters.',
    stakeholders: ['Procurement Officers', 'MSInS Committee', 'Technical Advisors'],
    deliverables: ['Public Challenge Brief', 'Evaluation Rubric', 'Sandbox Specifications'],
    kpis: ['Clarity of RFP specifications', 'Compliance with GFR/State procurement norms'],
    duration: 'Week 2 - 3',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 3,
    stageNumber: '03',
    title: 'DISCOVER',
    shortDesc: 'Startups discover relevant government opportunities.',
    fullDesc: 'AI-assisted matching notifies eligible startups based on sector classification, registered capabilities, geographic presence, and technical readiness, lowering the barrier to public entry.',
    stakeholders: ['Registered Startups', 'Incubator Partners', 'Ecosystem Networks'],
    deliverables: ['Personalized Opportunity Alert', 'Eligibility Pre-Check Report'],
    kpis: ['Startup discovery rate', 'Relevant sector reach percentage'],
    duration: 'Week 3 - 5',
    iconName: 'Compass'
  },
  {
    id: 4,
    stageNumber: '04',
    title: 'SUBMIT',
    shortDesc: 'Startups submit their solutions and required documents.',
    fullDesc: 'A frictionless digital submission gateway where startups submit technical proposals, architecture diagrams, past proof-of-concepts, and statutory compliance documents without tedious tender paperwork.',
    stakeholders: ['Startup Founders', 'Technical Leads'],
    deliverables: ['Solution Architecture Pitch', 'Implementation Roadmap', 'Compliance Self-Attestation'],
    kpis: ['Submission completion rate', 'Zero manual paperwork overhead'],
    duration: 'Week 4 - 6',
    iconName: 'UploadCloud'
  },
  {
    id: 5,
    stageNumber: '05',
    title: 'EVALUATE',
    shortDesc: 'Experts evaluate feasibility, innovation, cost, impact and security.',
    fullDesc: 'Independent technical committees and domain experts score submissions across innovation novelty, cost-effectiveness, cybersecurity compliance, deployment feasibility, and scalability.',
    stakeholders: ['Domain Experts', 'Academic Evaluators', 'Department Technical Teams'],
    deliverables: ['Comparative Scorecard', 'Technical Due Diligence Note', 'Shortlist Recommendation'],
    kpis: ['Multi-expert consensus score', 'Standardized grading index'],
    duration: 'Week 6 - 8',
    iconName: 'CheckCircle2'
  },
  {
    id: 6,
    stageNumber: '06',
    title: 'PILOT',
    shortDesc: 'Selected startups conduct controlled real-world pilots.',
    fullDesc: 'Top-ranked startups enter a governed sandbox deployment in designated districts or wards with structured milestone-based funding tranches (30% - 40% - 30%) released upon verifiable progress.',
    stakeholders: ['Startup Deployment Team', 'Pilot District In-charge', 'Field Testers'],
    deliverables: ['Controlled Test Deployment', 'Field Performance Logs', 'Milestone Deliverable Reports'],
    kpis: ['On-time milestone delivery', 'System uptime & real data processing rate'],
    duration: 'Month 2 - 4',
    iconName: 'FlaskConical'
  },
  {
    id: 7,
    stageNumber: '07',
    title: 'VALIDATE',
    shortDesc: 'Pilot results are measured against defined KPIs.',
    fullDesc: 'Rigorous empirical audit comparing pilot outcomes against initial baseline metrics. Independent validators verify cost reduction, service speed, citizen satisfaction, and technical resilience.',
    stakeholders: ['Third-Party Evaluators', 'Audit Officers', 'Citizen User Focus Groups'],
    deliverables: ['Pilot Validation Certificate', 'KPI Benchmark Report', 'Risk Assessment Report'],
    kpis: ['Target KPI attainment %', 'Return on Investment (ROI) projection'],
    duration: 'Month 4 - 5',
    iconName: 'BarChart3'
  },
  {
    id: 8,
    stageNumber: '08',
    title: 'SCALE',
    shortDesc: 'Successful solutions move toward procurement and wider deployment.',
    fullDesc: 'Validated solutions obtain an expedited public procurement recommendation, facilitating seamless onboarding to GeM or state procurement portals for statewide departmental expansion.',
    stakeholders: ['State Procurement Cell', 'Finance Department', 'Department Leadership'],
    deliverables: ['Scale-Up Procurement Pack', 'GeM / State Portal Listing Dossier', 'Long-term SLA'],
    kpis: ['Department adoption count', 'Procurement cycle compression (months to weeks)'],
    duration: 'Month 5+',
    iconName: 'TrendingUp'
  }
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    layer: 1,
    name: 'LAYER 1 — USERS',
    tagline: 'Multi-role ecosystem access with tailored workspaces',
    items: [
      {
        title: 'Government Departments',
        description: 'State ministries, municipal corporations, district collectors, and nodal agencies creating challenges and monitoring pilots.',
        techBadge: 'Role-Based Access (RBAC)'
      },
      {
        title: 'Startups & Innovators',
        description: 'DPIIT-recognized startups, MSMEs, university spin-offs submitting solutions and tracking milestones.',
        techBadge: 'Startup Profile & KYC'
      },
      {
        title: 'Experts & Evaluators',
        description: 'Independent domain specialists, academic researchers, and technical audit officers conducting blind peer reviews.',
        techBadge: 'Secure Scoring Workspace'
      },
      {
        title: 'Platform Admins',
        description: 'Innovation society administrators supervising challenge pipelines, compliance, and institutional escrow milestones.',
        techBadge: 'Super-Admin Governance'
      }
    ]
  },
  {
    layer: 2,
    name: 'LAYER 2 — WEB PORTALS',
    tagline: 'High-performance responsive interfaces crafted for clarity',
    items: [
      {
        title: 'Government Portal',
        description: 'Intuitive challenge authoring studio, applicant review dashboard, sandbox provisioning, and pilot KPI monitoring.',
        techBadge: 'React + TypeScript'
      },
      {
        title: 'Startup Portal',
        description: 'Opportunity discovery feed, proposal builder, milestone submission gateway, and transparent payment tracking.',
        techBadge: 'Responsive Web'
      },
      {
        title: 'Expert Portal',
        description: 'Standardized evaluation rubric engine, comparative blind scoring matrix, and qualitative feedback builder.',
        techBadge: 'Rubric Evaluator'
      },
      {
        title: 'Admin Governance Console',
        description: 'Ecosystem-wide analytics, audit trail logs, security monitoring, and state innovation metrics dashboard.',
        techBadge: 'Analytics Hub'
      }
    ]
  },
  {
    layer: 3,
    name: 'LAYER 3 — BACKEND SERVICES',
    tagline: 'Modular microservice architecture for scale and reliability',
    items: [
      {
        title: 'Challenge Management Service',
        description: 'Lifecycle tracking for operational challenges from draft ideation to public issuance and deadline management.',
        techBadge: 'REST / GraphQL'
      },
      {
        title: 'Startup Matching Engine',
        description: 'Vector embeddings & multi-attribute filtering matching challenge requirements with startup competencies.',
        techBadge: 'AI Match Engine'
      },
      {
        title: 'Evaluation Engine',
        description: 'Multi-criteria decision analysis (MCDA) aggregating independent evaluator scores with bias detection.',
        techBadge: 'Consensus Alg'
      },
      {
        title: 'Pilot & Milestone Management',
        description: 'Real-time sandbox progress tracking, verifiable milestone validation, and tranche release authorizations.',
        techBadge: 'Milestone Escrow'
      },
      {
        title: 'KPI Tracking & Analytics',
        description: 'Continuous telemetry ingestion comparing real-world pilot metrics with baseline departmental benchmarks.',
        techBadge: 'Telemetry Pipeline'
      },
      {
        title: 'Procurement Transition Engine',
        description: 'Automated synthesis of validation certificates and procurement dossiers formatted for GeM/State portals.',
        techBadge: 'Dossier Generator'
      }
    ]
  },
  {
    layer: 4,
    name: 'LAYER 4 — DATA & AUDIT',
    tagline: 'Secure, encrypted, tamper-evident data persistence',
    items: [
      {
        title: 'Startup & Founder Profiles',
        description: 'DPIIT certificates, Udyam registration, technical domains, patents, and team capabilities.',
        techBadge: 'Encrypted DB'
      },
      {
        title: 'Challenges & Specifications',
        description: 'Structured problem briefs, functional requirements, sandbox constraints, and budget caps.',
        techBadge: 'Versioned Specs'
      },
      {
        title: 'Proposals & Solution Documents',
        description: 'Technical pitch decks, architecture schematics, security attestations, and pricing breakdowns.',
        techBadge: 'Secure Object Storage'
      },
      {
        title: 'Evaluation & Audit Logs',
        description: 'Timestamped evaluator scores, qualitative review notes, and tamper-resistant audit trails.',
        techBadge: 'Append-Only Ledger'
      },
      {
        title: 'Pilot Data & KPI Results',
        description: 'Telemetry logs, user feedback surveys, pilot performance metrics, and validation certificates.',
        techBadge: 'Time-Series Data'
      },
      {
        title: 'Procurement Records',
        description: 'Historical pilot-to-contract conversion data, savings calculations, and departmental adoption histories.',
        techBadge: 'Procurement Ledger'
      }
    ]
  },
  {
    layer: 5,
    name: 'LAYER 5 — CLOUD & INTEGRATIONS',
    tagline: 'Standard-compliant infrastructure ready for national ecosystems',
    items: [
      {
        title: 'Cloud Infrastructure',
        description: 'Containerized Kubernetes clusters with automated auto-scaling, high availability, and multi-region backup.',
        techBadge: 'MeitY-Empaneled Cloud'
      },
      {
        title: 'Government Integration APIs',
        description: 'Architectural readiness for DigiLocker KYC, Aadhaar e-Sign, and Maharashtra Single Sign-On (SSO).',
        techBadge: 'OpenAPI Standard'
      },
      {
        title: 'Public Procurement Ecosystems',
        description: 'Seamless alignment with GeM (Government e-Marketplace) and CPPP procurement standards.',
        techBadge: 'Ecosystem Connect'
      },
      {
        title: 'Milestone Disbursal Gateway',
        description: 'Integration framework for Public Financial Management System (PFMS) and treasury disbursements.',
        techBadge: 'PFMS Ready'
      },
      {
        title: 'Notification & SMS Services',
        description: 'Multi-channel alerting via government SMS gateways, email notifications, and dashboard feeds.',
        techBadge: 'Webhook Engine'
      }
    ]
  }
];

export const demoStartups: DemoStartup[] = [
  {
    id: 'startup-1',
    name: 'JalDrishti IoT Labs',
    tagline: 'Real-time urban water pipeline leak detection & acoustic telemetry',
    domain: 'Water Resources & Smart Infrastructure',
    location: 'Pune, Maharashtra',
    matchScore: 94,
    dpiitRegistered: true,
    stage: 'Early Traction / Pilot Ready',
    readinessLevel: 'TRL 7 — System Prototype in Operational Environment',
    keyInnovations: [
      'Acoustic vibration sensors retrofitted onto existing municipal pipelines',
      'Edge AI processing reducing false positive alarms by 82%',
      'Solar-powered low-power wireless mesh network with 5km range'
    ],
    verifiedEligibility: [
      'DPIIT Certified (#DPIIT-8921)',
      'Maharashtra MSME Registered',
      'Zero Disbarment Self-Declaration'
    ],
    demoStatus: 'Pilot Candidate'
  },
  {
    id: 'startup-2',
    name: 'ArogyaBridge HealthTech',
    tagline: 'Offline-capable AI diagnostics for primary health centres (PHCs)',
    domain: 'Healthcare & Public Health',
    location: 'Nagpur, Maharashtra',
    matchScore: 89,
    dpiitRegistered: true,
    stage: 'Validated Product',
    readinessLevel: 'TRL 8 — Actual System Completed and Qualified',
    keyInnovations: [
      'Local tablet-based diagnostic AI working without active internet connection',
      'Multi-lingual voice guidance in Marathi, Hindi, and English',
      'Automated triage queuing integrated into district civil hospital databases'
    ],
    verifiedEligibility: [
      'DPIIT Certified (#DPIIT-6712)',
      'ISO 13485 Quality Compliant',
      'Empaneled with Health Incubator'
    ],
    demoStatus: 'Shortlisted'
  },
  {
    id: 'startup-3',
    name: 'UrjaKavach Analytics',
    tagline: 'Predictive transformer failure & power distribution grid load balancing',
    domain: 'Energy & Power Infrastructure',
    location: 'Mumbai, Maharashtra',
    matchScore: 92,
    dpiitRegistered: true,
    stage: 'Growth & Scaling',
    readinessLevel: 'TRL 7 — Field Trial Tested',
    keyInnovations: [
      'Thermal gradient image analytics identifying overload 72 hours in advance',
      'Compatible with MSEDCL legacy distribution transformers',
      'Reduces transformer blowout frequency by an estimated 65%'
    ],
    verifiedEligibility: [
      'DPIIT Certified (#DPIIT-5541)',
      'Patent Pending (#IN2025110)',
      'C-DAC Security Audited'
    ],
    demoStatus: 'Matched'
  }
];

export const pilotMilestones: PilotMilestone[] = [
  {
    number: 1,
    title: 'Milestone 1 — Sandbox Setup & Baseline Telemetry',
    duration: 'Month 1 (Days 1 - 30)',
    fundingShare: '30% Tranche Release',
    deliverables: [
      'Deployment of pilot hardware/software in 3 designated municipal test zones',
      'Establishment of baseline operational telemetry and data pipeline',
      'Security audit and sandbox isolation validation report'
    ],
    kpis: [
      '100% sensor node communication stability over 14 consecutive days',
      'Zero unauthorized packet leaks during external penetration check'
    ],
    status: 'Completed'
  },
  {
    number: 2,
    title: 'Milestone 2 — Operational Trial & Active Data Ingestion',
    duration: 'Month 2 - 3 (Days 31 - 90)',
    fundingShare: '40% Tranche Release',
    deliverables: [
      'Full operational testing under live municipal conditions',
      'Department staff training and field operator feedback documentation',
      'Interim performance report with anomaly detection accuracy logs'
    ],
    kpis: [
      'Achieving >85% anomaly detection accuracy vs ground truth',
      'Mean time to notify nodal officer under 8 minutes'
    ],
    status: 'In Progress'
  },
  {
    number: 3,
    title: 'Milestone 3 — KPI Validation & Procurement Dossier',
    duration: 'Month 4 (Days 91 - 120)',
    fundingShare: '30% Final Tranche Release',
    deliverables: [
      'Independent third-party evaluation and KPI attainment certificate',
      'Lifecycle cost-benefit model and return on investment (ROI) audit',
      'Scale-up procurement dossier prepared for GeM / State procurement'
    ],
    kpis: [
      'Demonstrated 40%+ operational cost reduction vs manual process',
      'Department nodal officer acceptance sign-off'
    ],
    status: 'Upcoming'
  }
];

export const demoChallenges: ChallengeDemo[] = [
  {
    id: 'CHAL-MH-2026-041',
    dept: 'Water Supply & Sanitation Dept',
    title: 'Smart Leak Detection & Non-Revenue Water (NRW) Reduction in Tier-2 Cities',
    budget: '₹25,00,000 Sandbox Grant',
    duration: '4 Months Pilot',
    domain: 'Water & Urban Utilities',
    applicantsCount: 18,
    pilotsActive: 2,
    status: 'In Pilot'
  },
  {
    id: 'CHAL-MH-2026-088',
    dept: 'Public Health Department',
    title: 'Point-of-Care Diagnostic Screening in Tribal Districts (Gadchiroli & Nandurbar)',
    budget: '₹35,00,000 Sandbox Grant',
    duration: '5 Months Pilot',
    domain: 'Healthcare & Diagnostics',
    applicantsCount: 27,
    pilotsActive: 3,
    status: 'Reviewing'
  },
  {
    id: 'CHAL-MH-2026-112',
    dept: 'Agriculture & Rural Development',
    title: 'Solar Cold-Storage Telemetry & Spoilage Prevention for Perishable Produce',
    budget: '₹20,00,000 Sandbox Grant',
    duration: '3 Months Pilot',
    domain: 'AgriTech & Cold Chain',
    applicantsCount: 14,
    pilotsActive: 1,
    status: 'Active'
  }
];

export const ecosystemReferences = [
  {
    name: 'Startup India / DPIIT',
    category: 'Startup Recognition & Regulatory Exemption',
    roleInSamarth: 'Validates recognized startup status, entity age, turnover thresholds, and exemption certificates under GFR Rule 170/173.',
    integrationScope: 'API-based DPIIT certificate verification and exemption status check.'
  },
  {
    name: 'Government e-Marketplace (GeM)',
    category: 'National Public Procurement Platform',
    roleInSamarth: 'Destination portal for validated pilot innovations transitioning into state-wide or pan-India public procurement catalog.',
    integrationScope: 'Automated synthesis of GeM-ready technical evaluation dossiers and pilot certificates.'
  },
  {
    name: 'Central Public Procurement Portal (CPPP)',
    category: 'e-Procurement & Tender Ecosystem',
    roleInSamarth: 'Regulatory reference for transparency, e-tendering standards, and open public procurement compliance.',
    integrationScope: 'Standardized XML/JSON challenge export matching CPPP transparency conventions.'
  },
  {
    name: 'Maha-eProcurement (MahaTenders)',
    category: 'State Procurement Gateway',
    roleInSamarth: 'Maharashtra state nodal portal for department-level procurement orders and framework contracts post successful pilot.',
    integrationScope: 'Direct alignment with Maharashtra State Innovation Society (MSInS) policy guidelines.'
  }
];
