export type Service = readonly [name: string, category: string, description: string, tags: string[]];

export const solutionPillars = [
  { id: 'ai-transformation', name: 'AI Transformation', category: 'Artificial Intelligence', outcome: 'Smarter Operations', description: 'Introduce intelligent AI systems, assistants and decision-support capabilities into everyday operations.' },
  { id: 'business-automation', name: 'Business Automation', category: 'Business Transformation', outcome: 'Faster Processes', description: 'Reduce repetitive work by connecting people, applications, documents and business workflows.' },
  { id: 'digital-platforms', name: 'Digital Platforms', category: 'Digital Ecosystems', outcome: 'Connected Experiences', description: 'Design connected digital experiences, customer portals, SaaS applications and intelligent service platforms.' },
  { id: 'data-intelligence', name: 'Data & Intelligence', category: 'Data & Analytics', outcome: 'Better Decisions', description: 'Convert organizational data into dashboards, analytics and actionable intelligence for better decisions.' },
  { id: 'digital-government', name: 'Digital Government', category: 'Public Sector', outcome: 'Better Public Services', description: 'Make public services more accessible, connected and intelligent through digital service platforms and citizen engagement.' },
  { id: 'intelligent-education', name: 'Intelligent Education', category: 'Education Technology', outcome: 'Smarter Learning', description: 'Empower students, teachers and institutions with AI-powered learning, support systems and intelligent educational workflows.' },
  { id: 'public-impact', name: 'Public Impact Solutions', category: 'Social Innovation', outcome: 'Measurable Impact', description: 'Use technology, AI and data to help communities, NGOs and public-impact organizations deliver better services and measurable outcomes.' },
  { id: 'voice-ai', name: 'Voice & AI Assistants', category: 'Conversational AI', outcome: 'Intelligent Engagement', description: 'Create intelligent conversational experiences across websites, WhatsApp and voice-enabled customer service environments.' },
] as const;

export const services: Service[] = [
  // AI Transformation
  ['AI Strategy','AI Transformation','AI strategy, readiness assessment and transformation roadmap.',['AI','Strategy']],
  ['AI Assistants','AI Transformation','AI assistants for staff, customers and decision support.',['AI','Assistants']],
  ['Decision Support','AI Transformation','AI-powered decision-support systems and insights.',['AI','Decision Support']],
  ['Intelligent Automation','AI Transformation','AI-enabled automation for operational processes.',['AI','Automation']],
  // Business Automation
  ['Workflow Automation','Business Automation','Automate repeatable business workflows and approvals.',['Automation','Workflow']],
  ['WhatsApp Automation','Business Automation','Automate customer and operational WhatsApp journeys.',['WhatsApp','Automation']],
  ['Email Automation','Business Automation','Automate email routing, notifications and business processes.',['Email','Automation']],
  ['Document Automation','Business Automation','Automate document generation, extraction and processing.',['Documents','Automation']],
  // Digital Platforms
  ['SaaS Platforms','Digital Platforms','Multi-tenant software platforms for organizations and customers.',['SaaS','Platforms']],
  ['Customer Portals','Digital Platforms','Secure customer self-service and engagement portals.',['Portals','Customer Experience']],
  ['Web Applications','Digital Platforms','Modern responsive business and public web applications.',['Web','Applications']],
  ['Digital Ecosystems','Digital Platforms','Connected services, integrations and digital journeys.',['Ecosystems','Integration']],
  // Data
  ['Business Intelligence','Data & Intelligence','Executive and operational intelligence from enterprise data.',['BI','Analytics']],
  ['Data Analytics','Data & Intelligence','Descriptive, diagnostic and predictive analytics.',['Data','Analytics']],
  ['AI Insights','Data & Intelligence','AI-assisted analysis and actionable insights.',['AI','Insights']],
  ['Executive Dashboards','Data & Intelligence','KPI dashboards for leadership and operations.',['Dashboards','KPI']],
  // Government
  ['Citizen Portals','Digital Government','Digital portals for public information and citizen services.',['Government','Portal']],
  ['Public Information','Digital Government','Accessible digital information and service publishing.',['Government','Information']],
  ['Citizen Feedback','Digital Government','Digital feedback, complaints and engagement workflows.',['Government','Feedback']],
  ['Public Analytics','Digital Government','Analytics for public-service performance and impact.',['Government','Analytics']],
  // Education
  ['AI Learning Assistants','Intelligent Education','AI support for learning, teaching and knowledge access.',['Education','AI']],
  ['Student Support','Intelligent Education','Digital student assistance and support workflows.',['Education','Support']],
  ['Institutional Automation','Intelligent Education','Automate administrative and academic workflows.',['Education','Automation']],
  ['Education Analytics','Intelligent Education','Institutional, student and performance analytics.',['Education','Analytics']],
  // Public Impact
  ['Community Platforms','Public Impact','Digital platforms supporting community programs and services.',['Community','Platforms']],
  ['NGO Solutions','Public Impact','Technology solutions for NGOs and mission-driven organizations.',['NGO','Impact']],
  ['Public Feedback','Public Impact','Feedback and engagement systems for communities and stakeholders.',['Feedback','Impact']],
  ['Impact Measurement','Public Impact','Measure programs, outcomes and public impact.',['Impact','KPI']],
  // Conversational AI
  ['Voice AI','Voice & AI Assistants','Voice-enabled AI experiences and customer service.',['Voice','AI']],
  ['Website AI','Voice & AI Assistants','AI assistants embedded in customer-facing websites.',['Web','AI']],
  ['WhatsApp AI','Voice & AI Assistants','AI customer assistance through WhatsApp.',['WhatsApp','AI']],
  ['Customer Assistance','Voice & AI Assistants','Conversational support across digital channels.',['CX','AI']],
  // Cloud / Microsoft ecosystem evidenced by REVNCIA manuals
  ['Cloud Architecture','Cloud & Infrastructure','Secure cloud architecture across Azure, AWS, Google Cloud and hybrid environments.',['Cloud','Architecture']],
  ['Cloud Governance','Cloud & Infrastructure','Tenant, subscription, policy, tagging and governance standards.',['Cloud','Governance']],
  ['Cloud FinOps','Cloud & Infrastructure','Budgets, cost allocation, rightsizing and optimization.',['Cloud','FinOps']],
  ['Infrastructure as Code','Cloud & Infrastructure','Terraform/Bicep-based repeatable infrastructure delivery.',['IaC','DevOps']],
  ['Backup & Disaster Recovery','Cloud & Infrastructure','Backup, recovery testing, RTO/RPO and resilience planning.',['DR','Resilience']],
  ['Azure Operations','Microsoft Cloud','Azure governance, networking, compute, storage, monitoring and recovery.',['Azure','Operations']],
  ['Microsoft 365 Administration','Microsoft Cloud','Entra ID, Exchange, SharePoint, OneDrive, Teams, Intune and security administration.',['Microsoft 365','Administration']],
  ['Power Platform Governance','Microsoft Cloud','Power Apps, Power Automate, Power BI, Power Pages, Copilot Studio, Dataverse and governance.',['Power Platform','Governance']],
  // Cybersecurity / risk / compliance
  ['Cybersecurity Operations','Cybersecurity','Continuous monitoring, threat management and response.',['SOC','Security']],
  ['Security Logging & Monitoring','Cybersecurity','Security log collection, SIEM operations, alerting and threat hunting.',['SIEM','Monitoring']],
  ['Vulnerability Management','Cybersecurity','Asset discovery, vulnerability identification, risk rating and remediation.',['Vulnerability','Risk']],
  ['Patch Management','Cybersecurity','Patch identification, testing, deployment and verification.',['Patching','Security']],
  ['Incident Response','Cybersecurity','Detection, containment, eradication, recovery and lessons learned.',['Incident Response','SOC']],
  ['Information Security Management','Cybersecurity','Security governance, access control, data protection and security operations.',['ISMS','Security']],
  ['Data Privacy & Protection','Security & Compliance','Privacy governance, data lifecycle, rights and breach management.',['Privacy','Data']],
  ['Compliance Management','Security & Compliance','Compliance monitoring, audits, corrective actions and governance.',['Compliance','Governance']],
  ['Enterprise Risk Management','Governance & Risk','Risk identification, assessment, treatment, registers and reporting.',['ERM','Risk']],
  ['Quality Management','Governance & Risk','QMS, process management, audits, corrective actions and continual improvement.',['QMS','Quality']],
  ['Project Management Office','Delivery & PMO','Project governance, portfolio management, delivery controls and KPIs.',['PMO','Projects']],
];

export const serviceCatalog = services.map(([name, category, description, tags], i) => ({
  id: `svc-${String(i + 1).padStart(3, '0')}`,
  name, category, description, tags,
}));
