export const PROFILE = {
  name: "Shubham Soni",
  title: "Senior ServiceNow Platform Engineer",
  subtitle: "AI-Native Automation & Platform Engineering",
  location: "Bengaluru, India",
  email: "shubham.soni1729@gmail.com",
  linkedin: "https://linkedin.com/in/2shubhamsoni",
  github: "https://github.com/2shubhamsoni",
  portfolio: "https://shubham-servicenow.vercel.app",
  summary:
    "Senior ServiceNow Platform Engineer with 4+ years building AI-native automation systems at enterprise scale. Expertise in GenAI middleware, NASK, Predictive Intelligence, and Virtual Agent. Top 3 of 70+ global teams (Scania Hackathon 2026) | 2× Innovation Award (Executive Director & COO).",
  heroHeading: "Building AI-Native Enterprise Automation Systems",
  heroSubtitle:
    "4+ years building AI-native automation systems on ServiceNow for enterprise environments with 200K+ users, handling 400+ weekly incidents across global organizations.",
  availability: "Open to Senior Roles",
};

export const STATS = [
  { value: 200000, suffix: "+", compact: true, label: "Users Impacted" },
  { value: 400, suffix: "+", compact: false, label: "Weekly Incidents" },
  { value: 2500, suffix: "+", compact: true, label: "KB Articles" },
  { value: 4, suffix: "+", compact: false, label: "Certifications" },
];

export const EXPERIENCE = [
  {
    id: "vw",
    company: "Volkswagen Group Digital Solutions India",
    role: "Sr. Software Engineer — ServiceNow Platform",
    period: "Apr 2024 – Present",
    current: true,
    badge: "Current",
    badgeColor: "blue",
    highlights: [
      "Designed GenAI-powered REST middleware automating knowledge classification and metadata generation, reducing KB curation effort by ~50–60% across 3,000+ articles",
      "Built enterprise Virtual Agent with ~80% intent classification accuracy in UAT, targeting 25–30% L1 ticket deflection",
      "Trained and deployed Predictive Intelligence models enabling automated classification and assignment, contributing to ~35% faster incident resolution across 400+ weekly incidents",
      "Engineered dynamic CI reference qualifiers using Script Includes, eliminating invalid CI selections across 200+ incidents per day",
    ],
  },
  {
    id: "infosys",
    company: "Infosys Limited",
    role: "Senior Systems Associate — ServiceNow Developer",
    period: "Feb 2022 – Apr 2024",
    current: false,
    badge: "Client: Scania CV AB",
    badgeColor: "purple",
    highlights: [
      "Built end-to-end SaaS provisioning automation using Flow Designer and IntegrationHub, reducing manual effort by ~70% and eliminating cross-team handoffs",
      "Developed ML-driven Change Risk Assessment using Predictive Intelligence for enterprise-scale environments",
      "Rebuilt CMDB LDAP ingestion pipeline, correcting 10,000+ records and resolving critical data integrity issues impacting 1,000+ users",
    ],
  },
];

export const PROJECTS = [
  {
    id: "war-room",
    title: "AI Incident War Room",
    year: "2026",
    featured: true,
    tech: ["Now Assist", "NASK", "Now LLM", "ServiceNow"],
    impact: "40 min → 2 min",
    impactLabel: "P1 Triage Time",
    description:
      "AI-native incident management system for P1 workflows using NASK and Now LLM. Aggregates real-time signals, surfaces related services, generates resolution guidance, and routes incidents to appropriate SMEs at creation time.",
    achievement: "Top 3 of 70+ global teams — Scania Hackathon 2026",
    color: "blue",
  },
  {
    id: "genai-middleware",
    title: "GenAI REST Middleware",
    year: "2024",
    featured: false,
    tech: ["ChatGPT API", "Scripted REST", "Virtual Agent", "ServiceNow"],
    impact: "~60%",
    impactLabel: "KB Curation Effort Reduction",
    description:
      "LLM-assisted middleware that automates knowledge classification and metadata generation for 3,000+ articles using ChatGPT API integrated via Scripted REST APIs and custom orchestration logic.",
    achievement: "2× Innovation Award — VW Executive Director & COO",
    color: "purple",
  },
  {
    id: "label-deviation",
    title: "Label Deviation Detection",
    year: "2025",
    featured: false,
    tech: ["ServiceNow AI/ML", "Predictive Intelligence", "Flow Designer"],
    impact: "20%",
    impactLabel: "Production Cost Reduction",
    description:
      "Designed and developed an ML-based label deviation detection system for manufacturing workflows using ServiceNow Predictive Intelligence. The solution was adopted into Scania’s production environment, reducing operational costs by ~20%.",
    achievement:
      "Production-adopted at Scania CV AB ",
    color: "cyan",
  },
  {
    id: "saas-automation",
    title: "SaaS Provisioning Automation",
    year: "2023",
    featured: false,
    tech: ["Flow Designer", "IntegrationHub", "REST APIs"],
    impact: "~70%",
    impactLabel: "Effort Reduction",
    description:
      "End-to-end SaaS provisioning system built using Flow Designer and IntegrationHub, eliminating multi-team handoffs across procurement, IT, and HR with full audit traceability.",
    achievement: "Deployed in enterprise environment at scale",
    color: "green",
  },
];

export const SKILLS = [
  {
    category: "ServiceNow Platform",
    icon: "layers",
    skills: [
      "ITSM",
      "CMDB",
      "Flow Designer",
      "IntegrationHub",
      "Service Portal",
      "Performance Analytics",
      "Service Catalog",
      "Scoped Apps",
    ],
  },
  {
    category: "AI & Automation",
    icon: "cpu",
    skills: [
      "Now Assist",
      "Now LLM",
      "NASK",
      "Predictive Intelligence",
      "AI Search",
      "NLU Workbench",
      "Virtual Agent",
      "ChatGPT API",
    ],
  },
  {
    category: "Dev & Scripting",
    icon: "code2",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "GlideRecord",
      "GlideAggregate",
      "Business Rules",
      "Script Includes",
      "Scripted REST APIs",
      "AngularJS",
    ],
  },
  {
    category: "Integration & Data",
    icon: "git-merge",
    skills: [
      "REST",
      "SOAP",
      "MID Server",
      "LDAP / Active Directory",
      "Snowflake",
      "Matillion",
      "OAuth 2.0",
    ],
  },
  {
    category: "Governance & Process",
    icon: "shield-check",
    skills: [
      "ITIL v4",
      "SLA / OLA",
      "ACL Security",
      "Agile / Scrum",
      "Update Sets",
      "App Repository",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "csa",
    name: "Certified System Administrator",
    short: "CSA",
    issuer: "ServiceNow",
    color: "#4B9EFF",
  },
  {
    id: "cad",
    name: "Certified Application Developer",
    short: "CAD",
    issuer: "ServiceNow",
    color: "#A855F7",
  },
  {
    id: "cis-itsm",
    name: "Certified Implementation Specialist — ITSM",
    short: "CIS-ITSM",
    issuer: "ServiceNow",
    color: "#22D3EE",
  },
  {
    id: "now-assist",
    name: "Now Assist for ITSM Pro Plus",
    short: "Suite Cert",
    issuer: "ServiceNow",
    color: "#22C55E",
  },
];

export const RECOGNITION = [
  {
    id: "hackathon-2026",
    title: "Top 3 of 70+ Global Teams",
    event: "Scania Hackathon 2026",
    description:
      "Built AI Incident War Room system reducing P1 triage time from 40 minutes to under 2 minutes using NASK and Now LLM.",
    year: "2026",
    icon: "trophy",
    color: "amber",
  },
  {
    id: "innovation-2025",
    title: "2× Innovation Award",
    event: "Volkswagen Group — COO Award",
    description:
      "Recognised for building GenAI middleware that reduced knowledge curation effort by ~60% across 3,000+ articles.",
    year: "2024 & 2025",
    icon: "award",
    color: "gold",
  },
{
  id: "hackathon-2025",
  title: "Production ML Anomaly Detection System",
  event: "Scania Hackathon 2025",
  description:
    "Designed and deployed an ML-based deviation detection system, reducing manufacturing costs by ~20%; one of <5% of hackathon solutions adopted into production.",
  year: "2025",
  icon: "star",
  color: "amber",
}
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Vinoba Bhave University",
  cgpa: "8.4 / 10",
  period: "2018 – 2021",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];
