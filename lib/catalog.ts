export type Offering = {
  slug: string;
  n: string;
  name: string;
  title: string;
  stage: "1" | "2" | "3" | "4" | "5";
  group: string;
  summary: string;
  body: string;
  capabilities: string[];
  image?: string;
  note?: string;
};

export const offerings: Offering[] = [
  {
    slug: "ai-platform",
    n: "01",
    name: "REVNCIA AI Platform",
    title: "AI Gateway, routing, safety, and observability",
    stage: "2",
    group: "Platform",
    summary:
      "The technological core: multi-model routing, cost control, identity, knowledge, memory, agents, guardrails, and analytics.",
    body: "REVNCIA AI Platform is the operating layer underneath assistants and agents. It provides an AI Gateway with multi-model routing and model selection, cost-aware routing, token and usage management, authentication, permissions, safety controls, guardrails, evaluation, logging, observability, and analytics. Knowledge systems, memory, and context management sit beside enterprise assistants — internal knowledge, employee copilots, executive and customer assistants, department-specific agents, research and document assistants, and decision-support. Specialized agents cover sales, marketing, customer service, HR, finance, operations, procurement, compliance, research, administration, project management, and executive operations. The stack is gateway, identity, knowledge, memory, tools, authorization, observability, and cost-controlled infrastructure.",
    capabilities: [
      "AI Gateway and multi-model routing",
      "Cost-aware model selection",
      "Token and usage management",
      "Safety, permissions, authentication",
      "Observability, logging, evaluation",
      "Knowledge, memory, context",
      "Enterprise assistants and agents",
    ],
  },
  {
    slug: "customer-operations",
    n: "02",
    name: "AI Customer Service",
    title: "REVNCIA AI Customer Operations Platform",
    stage: "1",
    group: "Revenue engine",
    image: "/images/ops-room.png",
    summary:
      "Omnichannel customer AI — website, WhatsApp, Messenger, Instagram, email, voice, SMS, and mobile — charged as a monthly operating platform.",
    body: "A major recurring-revenue service: customer questions, lead qualification, appointment booking, order tracking, complaint handling, FAQ automation, onboarding, document collection, ticket creation, human escalation, follow-ups, and multilingual support. Channels include website chatbot, WhatsApp, Facebook Messenger, Instagram, email AI, Voice AI, SMS, and mobile applications. The destination product is REVNCIA AI Customer Operations Platform, operated monthly per organization.",
    capabilities: [
      "Website, WhatsApp, Messenger, Instagram",
      "Email, voice, SMS, mobile",
      "Qualification, booking, tracking",
      "Complaints, tickets, escalation",
      "Multilingual follow-ups",
    ],
  },
  {
    slug: "whatsapp-ai",
    n: "03",
    name: "WhatsApp AI Automation",
    title: "Business on WhatsApp, governed by REVNCIA",
    stage: "1",
    group: "Revenue engine",
    image: "/images/scene-messaging.png",
    summary:
      "Chatbot, lead generation, support, scheduling, payments, verification, campaigns, human handoff, CRM, and analytics.",
    body: "For organizations that already conduct business on WhatsApp: AI chatbot, lead generation and qualification, customer support, appointment scheduling, payment and order notifications, customer verification, document collection, automated follow-ups, campaign automation, human-agent handoff, CRM integration, and analytics. Commercial model: setup fee + monthly platform fee + usage.",
    capabilities: [
      "WhatsApp AI chatbot",
      "Leads, support, scheduling",
      "Payments and order notices",
      "Verification and documents",
      "CRM integration and analytics",
    ],
  },
  {
    slug: "voice-ai",
    n: "04",
    name: "REVNCIA Voice",
    title: "Voice agents and Voice Operations",
    stage: "1",
    group: "Revenue engine",
    image: "/images/scene-voice.png",
    summary:
      "Receptionist, sales, service, appointments, collections, information, helpdesk, and internal assistants — inbound and outbound.",
    body: "REVNCIA Voice is a product line: AI voice agents for receptionist, sales representative, customer service, appointment, collection, information, helpdesk, and internal employee assistant roles. Functions include incoming and outbound calls, booking, verification, lead qualification, FAQs, call summaries, CRM updates, escalation, and multilingual conversations. Long-term product: REVNCIA Voice Operations.",
    capabilities: [
      "Inbound and outbound voice",
      "Reception, sales, service agents",
      "Booking, verification, FAQs",
      "Call summaries and CRM updates",
      "Escalation and multilingual",
    ],
  },
  {
    slug: "crm",
    n: "05",
    name: "CRM Transformation",
    title: "From installation to REVNCIA CRM",
    stage: "1",
    group: "Systems",
    image: "/images/boardroom.png",
    summary:
      "Implementation, migration, customization, pipelines, segmentation, analytics, and AI inside the relationship system of record.",
    body: "We do not only install CRM. We transform it: implementation, migration, customization, lead and customer management, sales pipelines, segmentation, customer analytics, automated follow-ups, marketing and sales automation, AI sales assistant, AI CRM assistant, and customer-journey automation. Destination product: REVNCIA CRM.",
    capabilities: [
      "Implementation and migration",
      "Pipelines and segmentation",
      "Analytics and journeys",
      "AI CRM and sales assistants",
    ],
  },
  {
    slug: "erp",
    n: "06",
    name: "ERP Transformation",
    title: "Enterprise backbone toward REVNCIA Enterprise OS",
    stage: "3",
    group: "Systems",
    summary:
      "Finance, HR, procurement, inventory, operations, sales, service, projects, assets, reporting — with AI assistants on top.",
    body: "For larger organizations: finance, HR, procurement, inventory, operations, sales, customer service, projects, assets, and reporting. AI layer: financial, procurement, HR, and operations assistants, forecasting, reporting, and anomaly detection. Long-term: REVNCIA Enterprise OS.",
    capabilities: [
      "Core ERP domains",
      "AI finance and procurement",
      "AI HR and operations",
      "Forecasting and anomaly detection",
    ],
  },
  {
    slug: "process-automation",
    n: "07",
    name: "Business Process Automation",
    title: "Manual → digital → automated → AI-assisted",
    stage: "1",
    group: "Automation",
    summary:
      "High-value consulting that maps how work actually happens and automates invoices, onboarding, approvals, documents, and CRM updates.",
    body: "Analyze operations and move work along the path: manual process to digital process to automated process to AI-assisted process. Typical programmes: invoice processing, employee and customer onboarding, leave management, purchase requests, approvals, reporting, document processing, email workflows, CRM updates, compliance workflows, and internal communications.",
    capabilities: [
      "Process discovery",
      "Invoice and onboarding flows",
      "Approvals and leave",
      "Documents, email, CRM",
      "Compliance workflows",
    ],
  },
  {
    slug: "document-intelligence",
    n: "08",
    name: "AI Document Intelligence",
    title: "Contracts, invoices, forms, and obligations at scale",
    stage: "1",
    group: "Intelligence",
    image: "/images/scene-knowledge.png",
    summary:
      "PDF processing, extraction, classification, search, comparison, risk, and knowledge-base creation — including obligation questions across thousands of files.",
    body: "Systems that understand organizational documents: PDF processing, contract analysis, invoice extraction, form processing, classification, data extraction, summarization, search, document comparison, risk identification, and knowledge-base creation. Clients can ask questions such as what obligations exist under a corpus of contracts — a more valuable product than a generic chatbot.",
    capabilities: [
      "PDF, contracts, invoices, forms",
      "Classification and extraction",
      "Search, compare, summarize",
      "Risk and knowledge bases",
    ],
  },
  {
    slug: "knowledge-ai",
    n: "09",
    name: "Enterprise Knowledge AI",
    title: "Authorized answers from your own estate",
    stage: "2",
    group: "Intelligence",
    summary:
      "Connect documents, policies, SOPs, databases, websites, CRM, ERP, and mail so staff can ask policy questions with access control.",
    body: "Private organizational knowledge systems connecting documents, policies, SOPs, databases, websites, CRM, ERP, emails, and internal knowledge. Employees ask what the policy is for a situation; the assistant answers from authorized company information only.",
    capabilities: [
      "Policies, SOPs, documents",
      "CRM, ERP, databases",
      "Role-based retrieval",
      "Cited, authorized answers",
    ],
  },
  {
    slug: "intelligence",
    n: "10",
    name: "AI Analytics & Decision Intelligence",
    title: "Beyond dashboards — toward REVNCIA Intelligence",
    stage: "2",
    group: "Intelligence",
    summary:
      "BI, forecasting, executive reports, KPIs, anomalies, scenarios, and decision-support — not unexplained scores.",
    body: "Business intelligence, predictive analytics, AI-generated reports, executive dashboards, forecasting, risk and trend detection, performance analysis, KPI monitoring, anomaly detection, scenario analysis, and decision-support systems. Long-term product: REVNCIA Intelligence.",
    capabilities: [
      "Forecasts and KPIs",
      "Anomaly and risk detection",
      "Executive reports",
      "Scenario analysis",
    ],
  },
  {
    slug: "cybersecurity",
    n: "11",
    name: "Cybersecurity & AI Security",
    title: "Digital-security implementation with specialist partners",
    stage: "3",
    group: "Trust",
    note: "We start with digital-security implementation and partner with specialists for advanced security. We do not initially present REVNCIA as a full cybersecurity firm.",
    summary:
      "Assessments, identity, access, AI security, monitoring, audit logging, vulnerability management, governance, and incident workflows.",
    body: "For enterprise customers: security assessments, identity management, access control, role-based permissions, AI security, data protection, security monitoring, audit logging, vulnerability management, security policies, AI governance, and incident-response workflows. Important distinction: REVNCIA begins with digital-security implementation and partners with specialists for advanced security rather than claiming a full cybersecurity practice without the required expertise, certifications, and team.",
    capabilities: [
      "Identity and access",
      "AI security and data protection",
      "Monitoring and audit logs",
      "Policies and incident workflows",
    ],
  },
  {
    slug: "data-transformation",
    n: "12",
    name: "Data Transformation",
    title: "AI-ready data infrastructure",
    stage: "3",
    group: "Infrastructure",
    image: "/images/scene-data.png",
    summary:
      "Integration, cleaning, migration, warehouses, pipelines, APIs, master data, governance, and visualization.",
    body: "Data integration, cleaning, migration, database modernization, warehouses, pipelines, API integration, master-data management, data governance, visualization, and AI-ready data infrastructure.",
    capabilities: [
      "Integration and cleaning",
      "Warehouses and pipelines",
      "Master data and governance",
      "AI-ready platforms",
    ],
  },
  {
    slug: "cloud",
    n: "13",
    name: "Cloud Transformation",
    title: "Toward REVNCIA Cloud Operations",
    stage: "3",
    group: "Infrastructure",
    summary:
      "Strategy, migration, modernization, architecture, automation, backup, DR, monitoring, and cost optimization.",
    body: "Help organizations move from legacy systems to modern infrastructure: cloud strategy, migration, application modernization, architecture, infrastructure automation, backup, disaster recovery, monitoring, and cost optimization. Eventually: REVNCIA Cloud Operations.",
    capabilities: [
      "Strategy and migration",
      "Modernization and architecture",
      "Backup and DR",
      "Monitoring and cost control",
    ],
  },
  {
    slug: "software",
    n: "14",
    name: "Software Development",
    title: "Portals, SaaS, mobile, APIs, and identity",
    stage: "3",
    group: "Build",
    summary:
      "Custom systems where packaged software is the wrong fit — web, mobile, backend, and government service apps.",
    body: "Web: enterprise, customer, and government portals, SaaS platforms, dashboards, internal applications. Mobile: customer, employee, field-service, and government service apps. Backend: APIs, microservices, databases, authentication, integrations.",
    capabilities: [
      "Portals and SaaS",
      "Dashboards and internal apps",
      "Mobile field and citizen apps",
      "APIs, identity, databases",
    ],
  },
  {
    slug: "integrations",
    n: "15",
    name: "API & Integration Services",
    title: "Connect the systems you already run",
    stage: "3",
    group: "Build",
    summary:
      "CRM↔ERP, WhatsApp, accounting, websites, AI↔data/documents/email/workflow, payments, and citizen services.",
    body: "Connect CRM and ERP, CRM and WhatsApp, ERP and accounting, website and CRM, AI to databases, documents, email, and workflow, payments to ERP, and government systems to citizen services. This is among the highest-value work for enterprise customers.",
    capabilities: [
      "CRM–ERP–accounting",
      "WhatsApp and web",
      "AI to data and documents",
      "Payments and public systems",
    ],
  },
  {
    slug: "government",
    n: "16",
    name: "Government Digital Transformation",
    title: "Citizen services, operations, and public impact",
    stage: "4",
    group: "Public impact",
    image: "/images/scene-civic.png",
    summary:
      "Municipal, state, federal, and public authorities — assistants, portals, cases, notifications, identity, and measured outcomes.",
    body: "A major REVNCIA vertical: municipal governments, state/provincial agencies, federal agencies, public authorities, and public-sector organizations. Citizen services: AI citizen assistants, digital portals, complaint and case management, appointments, notifications, multilingual support. Operations: workflow automation, document management, internal AI, data platforms, analytics, digital identity integrations, reporting, case processing. Public impact is measured: citizens served, processing time, cost savings, response time, accessibility, resolution rates.",
    capabilities: [
      "Citizen assistants and portals",
      "Complaints, cases, appointments",
      "Internal AI and data platforms",
      "Public-impact measures",
    ],
  },
  {
    slug: "education",
    n: "17",
    name: "Education Transformation",
    title: "Schools, universities, training, and departments",
    stage: "4",
    group: "Public impact",
    image: "/images/civic.png",
    summary:
      "Student and teacher assistants, admissions, attendance, parent communication, learning analytics, and administration.",
    body: "Target: schools, universities, training institutions, education departments. Services: AI student assistant, AI teacher assistant, admissions automation, student support, attendance, parent communication, learning analytics, administrative automation, document automation, career guidance, institutional analytics.",
    capabilities: [
      "Student and teacher AI",
      "Admissions and attendance",
      "Parent communication",
      "Learning and institutional analytics",
    ],
  },
  {
    slug: "healthcare",
    n: "18",
    name: "Healthcare Digital Transformation",
    title: "Administrative AI with privacy-first delivery",
    stage: "4",
    group: "Verticals",
    note: "Healthcare programmes require strong privacy, security, compliance processes, and appropriate specialist expertise.",
    summary:
      "Patient communication, appointments, admin AI, documents, portals, workflows, analytics, and call-centre AI.",
    body: "Potential services: patient communication, appointment automation, administrative AI, document processing, patient portals, workflow automation, analytics, and call-center AI. Delivery requires strong privacy, security, and compliance processes and specialist expertise.",
    capabilities: [
      "Appointments and communication",
      "Admin AI and documents",
      "Portals and workflows",
      "Call-centre AI",
    ],
  },
  {
    slug: "financial-services",
    n: "19",
    name: "Financial Services Transformation",
    title: "Banks, fintech, microfinance, insurance",
    stage: "4",
    group: "Verticals",
    summary:
      "Service AI, copilots, documents, onboarding, CRM, knowledge, reporting, fraud/risk analytics, and compliance workflows.",
    body: "A high-value vertical: banks, fintechs, microfinance, insurance, and financial institutions. Services include customer service AI, employee copilots, document intelligence, workflow automation, fraud/risk analytics, compliance workflows, customer onboarding, CRM transformation, AI knowledge systems, and reporting automation.",
    capabilities: [
      "Service AI and copilots",
      "Onboarding and CRM",
      "Fraud/risk analytics",
      "Compliance and reporting",
    ],
  },
  {
    slug: "retail",
    n: "20",
    name: "Retail & E-Commerce AI",
    title: "Commerce assistants, inventory, and WhatsApp commerce",
    stage: "4",
    group: "Verticals",
    summary:
      "Shopping assistants, recommendations, service, orders, inventory, marketing, retention, and demand forecasting.",
    body: "AI shopping assistants, product recommendations, customer service, order management, inventory analytics, marketing automation, WhatsApp commerce, sales automation, customer retention, and demand forecasting.",
    capabilities: [
      "Shopping and recommendations",
      "Orders and inventory",
      "WhatsApp commerce",
      "Retention and forecasting",
    ],
  },
  {
    slug: "marketing",
    n: "21",
    name: "Marketing Automation",
    title: "Automation capability — not the company identity",
    stage: "1",
    group: "Growth",
    summary:
      "Content systems, leads, email, social, segmentation, campaigns, CRM automation, and personalized outreach.",
    body: "AI content systems, lead generation and qualification, email automation, social media automation, customer segmentation, campaign analytics, CRM automation, AI sales assistants, and personalized campaigns. Positioned as an automation capability, not the core identity of REVNCIA.",
    capabilities: [
      "Content and campaigns",
      "Leads and email",
      "Segmentation and analytics",
      "CRM-tied personalization",
    ],
  },
  {
    slug: "sales-ai",
    n: "22",
    name: "AI Sales Systems",
    title: "Lead through retention as one engine",
    stage: "1",
    group: "Growth",
    summary:
      "Find, qualify, follow up, meet, propose, convert, retain — with CRM updates, meeting summaries, and churn signals.",
    body: "A complete AI sales engine: Lead → Qualification → CRM → Follow-up → Meeting → Proposal → Conversion → Retention. AI can organize leads, qualify, send follow-ups, schedule meetings, prepare proposals, update CRM, summarize meetings, identify opportunities, and predict churn.",
    capabilities: [
      "Lead to conversion path",
      "Meetings and proposals",
      "CRM updates",
      "Opportunity and churn signals",
    ],
  },
  {
    slug: "hr-ai",
    n: "23",
    name: "AI HR",
    title: "Recruitment through workforce analytics",
    stage: "3",
    group: "Functions",
    summary:
      "Screening, scheduling, onboarding, policy assistant, self-service, training, and workforce analytics.",
    body: "Recruitment automation, candidate screening, interview scheduling, employee onboarding, HR assistant, policy assistant, employee self-service, training systems, and workforce analytics.",
    capabilities: [
      "Recruitment and screening",
      "Onboarding and self-service",
      "Policy assistant",
      "Workforce analytics",
    ],
  },
  {
    slug: "finance-ai",
    n: "24",
    name: "AI Finance",
    title: "Invoices, expense, cash, budget, and reporting",
    stage: "3",
    group: "Functions",
    summary:
      "Invoice and expense automation, financial reporting, cash-flow, budgets, document intelligence, and management packs.",
    body: "Invoice automation, expense processing, financial reporting, cash-flow analytics, budget monitoring, financial document intelligence, AI finance assistant, and management reporting.",
    capabilities: [
      "Invoices and expenses",
      "Cash and budgets",
      "Document intelligence",
      "Management reporting",
    ],
  },
  {
    slug: "procurement-ai",
    n: "25",
    name: "AI Procurement",
    title: "Request through payment, with spend intelligence",
    stage: "3",
    group: "Functions",
    summary:
      "Request, approval, vendor, PO, delivery, invoice, payment — plus vendors, prices, contracts, patterns, and risk.",
    body: "Automate Request → Approval → Vendor → Purchase Order → Delivery → Invoice → Payment. AI analyzes vendors, prices, contracts, purchasing patterns, spending, and risk.",
    capabilities: [
      "P2P workflow",
      "Vendor and price analysis",
      "Contracts and spend",
      "Risk signals",
    ],
  },
  {
    slug: "workflow-rpa",
    n: "26",
    name: "Workflow & RPA",
    title: "Email, forms, CRM, ERP, WhatsApp, APIs, AI, humans",
    stage: "1",
    group: "Automation",
    summary:
      "Automated workflows that connect systems and people — where REVNCIA produces measurable ROI.",
    body: "Build automated workflows connecting email, forms, databases, CRM, ERP, WhatsApp, APIs, AI, and human approvals. This is where REVNCIA produces measurable ROI.",
    capabilities: [
      "Cross-system workflows",
      "Human approvals",
      "RPA plus AI judgement",
      "Measurable cycle-time ROI",
    ],
  },
  {
    slug: "digital-experience",
    n: "27",
    name: "Digital Experience",
    title: "Sites, portals, kiosks, and accessibility",
    stage: "1",
    group: "Experience",
    summary:
      "Corporate websites, enterprise and customer portals, interactive experiences, kiosks, self-service, accessibility.",
    body: "Corporate websites, enterprise portals, customer portals, AI websites, interactive experiences, digital kiosks, self-service systems, and accessibility improvements.",
    capabilities: [
      "Websites and portals",
      "Kiosks and self-service",
      "Interactive experiences",
      "Accessibility",
    ],
  },
  {
    slug: "intelligent-websites",
    n: "28",
    name: "AI-Powered Websites",
    title: "Intelligent Digital Experience Platforms",
    stage: "1",
    group: "Experience",
    summary:
      "Not “we make websites” — assistant, lead capture, CRM, personalization, knowledge search, booking, accounts, support.",
    body: "REVNCIA does not sell generic websites. We deliver Intelligent Digital Experience Platforms: AI assistant, lead capture, CRM integration, personalization, analytics, knowledge search, appointment booking, customer accounts, and automated support.",
    capabilities: [
      "On-site AI assistant",
      "Lead capture and CRM",
      "Knowledge search",
      "Booking, accounts, support",
    ],
  },
  {
    slug: "managed-ai",
    n: "29",
    name: "Managed AI Services",
    title: "Operate the system after go-live",
    stage: "2",
    group: "Recurring",
    summary:
      "Monitoring, model and cost optimization, security, prompts, knowledge updates, usage analytics, and improvement.",
    body: "Critical for recurring revenue. Instead of delivering AI and leaving, REVNCIA continuously operates it: AI monitoring, model optimization, cost optimization, security monitoring, prompt optimization, knowledge updates, performance monitoring, usage analytics, system maintenance, and AI improvement.",
    capabilities: [
      "Monitoring and maintenance",
      "Model and cost optimization",
      "Prompt and knowledge updates",
      "Usage analytics",
    ],
  },
  {
    slug: "ai-governance",
    n: "30",
    name: "AI Governance",
    title: "Policy, risk, authorization, and human oversight",
    stage: "2",
    group: "Trust",
    summary:
      "Usage controls, model and data governance, audit trails, evaluation, and responsible AI frameworks.",
    body: "For enterprise and government: AI policies, usage controls, risk assessment, authorization, model governance, data governance, audit trails, human oversight, evaluation, and responsible AI frameworks. This becomes more important as organizations deploy more AI.",
    capabilities: [
      "Policies and usage controls",
      "Risk and authorization",
      "Audit trails",
      "Human oversight and evaluation",
    ],
  },
  {
    slug: "academy",
    n: "31",
    name: "REVNCIA AI Academy",
    title: "Corporate, government, and executive training",
    stage: "5",
    group: "Academy",
    summary:
      "Courses, certifications, and subscriptions — AI, automation, transformation, and governance training.",
    body: "A future education business: corporate, government, executive, and employee AI training; AI automation courses; digital transformation courses; AI governance training. Revenue: courses, corporate contracts, certifications, subscriptions.",
    capabilities: [
      "Executive and employee training",
      "Government AI training",
      "Automation and transformation",
      "Governance and certification",
    ],
  },
  {
    slug: "consulting",
    n: "32",
    name: "REVNCIA Consulting",
    title: "Executive AI strategy and transformation roadmaps",
    stage: "1",
    group: "Advisory",
    image: "/images/docs-ai.png",
    summary:
      "Where to deploy AI, what stays human, cost, ROI, risk — delivered as an AI Transformation Roadmap.",
    body: "High-value consulting sits above delivery. Executive AI strategy answers: where AI should be deployed, what should be automated, what should remain human, what systems need modernization, what AI will cost, what ROI can be expected, what risks exist. Deliverable: AI Transformation Roadmap.",
    capabilities: [
      "Executive strategy",
      "Automation vs human work",
      "Cost, ROI, risk",
      "Transformation roadmap",
    ],
  },
  {
    slug: "audits",
    n: "33",
    name: "Digital Transformation Audits",
    title: "People, process, technology, data, AI, security",
    stage: "1",
    group: "Advisory",
    summary:
      "Entry product for large customers: maturity, gaps, ROI opportunities, and a 12/24/36-month roadmap.",
    body: "A formal assessment of people, process, technology, data, AI, and security. Output: current-state assessment, digital maturity score, automation and AI opportunities, technology and security gaps, ROI opportunities, and a 12/24/36-month roadmap. Designed as an entry product for large customers.",
    capabilities: [
      "Maturity scoring",
      "Opportunity maps",
      "Security and tech gaps",
      "12/24/36-month roadmap",
    ],
  },
  {
    slug: "command-center",
    n: "34",
    name: "REVNCIA Command Center",
    title: "Premium executive platform",
    stage: "5",
    group: "Platform",
    image: "/images/scene-command.png",
    summary:
      "Revenue, customers, operations, AI activity, people, finance, risk, alerts, KPIs, forecasts — plus “why did this move?”",
    body: "Executives see revenue, customers, operations, AI activity, employee productivity, sales, finance, risks, alerts, KPIs, and forecasts. They can ask why revenue declined in a period; the system investigates authorized data and explains the answer.",
    capabilities: [
      "Executive KPIs and alerts",
      "AI activity views",
      "Risk and forecasts",
      "Investigative Q&A",
    ],
  },
  {
    slug: "digital-workforce",
    n: "35",
    name: "REVNCIA Digital Workforce",
    title: "AI employees under defined permissions",
    stage: "5",
    group: "Platform",
    image: "/images/scene-workforce.png",
    summary:
      "Sales, Support, Finance, HR, Operations, Research, and Executive agents — not one-off automations.",
    body: "Instead of selling individual automation, sell AI employees/agents: REVNCIA Sales Agent, Support Agent, Finance Agent, HR Agent, Operations Agent, Research Agent, Executive Agent. Each operates within defined permissions and workflows.",
    capabilities: [
      "Named functional agents",
      "Permissioned workflows",
      "Human oversight",
      "Workforce operating model",
    ],
  },
  {
    slug: "industry-solutions",
    n: "36",
    name: "REVNCIA Industry Solutions",
    title: "Packaged solutions, not only custom projects",
    stage: "5",
    group: "Platform",
    summary:
      "REVNCIA for Banks, Governments, Universities, Healthcare, Retail, NGOs, and Enterprises.",
    body: "Packaged industry solutions so REVNCIA is not selling a fully custom project every time: REVNCIA for Banks, Governments, Universities, Healthcare, Retail, NGOs, and Enterprises.",
    capabilities: [
      "Banking and government packs",
      "University and healthcare",
      "Retail, NGO, enterprise",
      "Repeatable delivery kits",
    ],
  },
];

export function offeringBySlug(slug: string) {
  return offerings.find((o) => o.slug === slug);
}

export const stages = [
  {
    id: "1",
    title: "Stage 1 — Revenue engine",
    text: "AI chatbots, WhatsApp AI, Voice AI, automation, CRM automation, AI websites, document processing, AI consulting.",
  },
  {
    id: "2",
    title: "Stage 2 — Recurring platform",
    text: "REVNCIA AI Gateway: assistants, agents, knowledge, memory, usage and cost controls, analytics, integrations.",
  },
  {
    id: "3",
    title: "Stage 3 — Enterprise",
    text: "CRM, ERP, data, workflow, security, and cloud on the same governed layer.",
  },
  {
    id: "4",
    title: "Stage 4 — Public impact",
    text: "Government, education, NGOs, and citizen services with measured outcomes.",
  },
  {
    id: "5",
    title: "Stage 5 — REVNCIA Global",
    text: "An intelligent operating layer connecting people, organizations, software, AI, workflows, and public-impact services.",
  },
] as const;

export const engagement = [
  { layer: "Consulting", cadence: "One-time / high margin" },
  { layer: "Implementation", cadence: "Project revenue" },
  { layer: "SaaS", cadence: "Monthly recurring" },
  { layer: "Managed AI", cadence: "Monthly recurring" },
  { layer: "Usage / API", cadence: "Variable recurring" },
] as const;

export const flywheel = [
  "Digital transformation",
  "AI · Automation · Data",
  "REVNCIA Platform",
  "CRM · ERP · AI Core",
  "Digital workforce",
  "Measurable impact",
  "Recurring revenue",
  "Global scale",
] as const;
