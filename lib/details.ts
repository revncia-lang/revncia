/** Extra specification blocks for each service page — unique to that line. */
export const detailBlocks: Record<
  string,
  { heading: string; items: string[] }[]
> = {
  "ai-platform": [
    {
      heading: "Infrastructure",
      items: [
        "AI Gateway",
        "Multi-model routing and selection",
        "Cost-aware routing",
        "Token and usage management",
        "Authentication and permissions",
        "Safety, guardrails, evaluation",
        "Logging, observability, analytics",
        "Knowledge, memory, context",
      ],
    },
    {
      heading: "Enterprise assistants",
      items: [
        "Internal knowledge assistants",
        "Employee copilots",
        "Executive and customer assistants",
        "Department-specific AI",
        "Research and document assistants",
        "Decision-support systems",
      ],
    },
    {
      heading: "Specialized agents",
      items: [
        "Sales, marketing, customer service",
        "HR, finance, operations, procurement",
        "Compliance, research, administration",
        "Project management, executive operations",
      ],
    },
  ],
  "customer-operations": [
    {
      heading: "Channels",
      items: [
        "Website chatbot",
        "WhatsApp",
        "Facebook Messenger",
        "Instagram messaging",
        "Email AI",
        "Voice AI",
        "SMS",
        "Mobile applications",
      ],
    },
    {
      heading: "Capabilities",
      items: [
        "Questions and FAQ automation",
        "Lead qualification",
        "Appointment booking",
        "Order tracking",
        "Complaint handling",
        "Onboarding and document collection",
        "Tickets, escalation, follow-ups",
        "Multilingual support",
      ],
    },
  ],
  "whatsapp-ai": [
    {
      heading: "Programme scope",
      items: [
        "WhatsApp AI chatbot",
        "Lead generation and qualification",
        "Customer support and scheduling",
        "Payment and order notifications",
        "Verification and documents",
        "Campaigns and follow-ups",
        "Human-agent handoff",
        "CRM integration and analytics",
      ],
    },
  ],
  "voice-ai": [
    {
      heading: "Voice agents",
      items: [
        "Receptionist",
        "Sales representative",
        "Customer service",
        "Appointment agent",
        "Collection agent",
        "Information and helpdesk",
        "Internal employee assistant",
      ],
    },
    {
      heading: "Functions",
      items: [
        "Incoming and outbound calls",
        "Booking and verification",
        "Lead qualification and FAQs",
        "Call summaries and CRM updates",
        "Escalation",
        "Multilingual conversations",
      ],
    },
  ],
  crm: [
    {
      heading: "Transformation work",
      items: [
        "Implementation, migration, customization",
        "Lead and customer management",
        "Sales pipelines and segmentation",
        "Customer analytics",
        "Follow-ups and journey automation",
        "Marketing and sales automation",
        "AI sales assistant and AI CRM assistant",
      ],
    },
  ],
  erp: [
    {
      heading: "Domains",
      items: [
        "Finance, HR, procurement, inventory",
        "Operations, sales, customer service",
        "Projects, assets, reporting",
      ],
    },
    {
      heading: "AI on ERP",
      items: [
        "Financial, procurement, HR, operations assistants",
        "Forecasting, reporting, anomaly detection",
      ],
    },
  ],
  "process-automation": [
    {
      heading: "Typical programmes",
      items: [
        "Invoice processing",
        "Employee and customer onboarding",
        "Leave and purchase requests",
        "Approvals and reporting",
        "Document and email workflows",
        "CRM updates and compliance",
        "Internal communications",
      ],
    },
  ],
  "document-intelligence": [
    {
      heading: "Document work",
      items: [
        "PDF, contracts, invoices, forms",
        "Classification and extraction",
        "Summarization, search, comparison",
        "Risk identification",
        "Knowledge-base creation",
        "Obligation questions across large corpora",
      ],
    },
  ],
  "knowledge-ai": [
    {
      heading: "Connected sources",
      items: [
        "Documents, policies, SOPs",
        "Databases and websites",
        "CRM, ERP, email",
        "Internal knowledge with access control",
      ],
    },
  ],
  intelligence: [
    {
      heading: "Decision products",
      items: [
        "Business intelligence and forecasts",
        "AI-generated reports",
        "Executive dashboards and KPIs",
        "Risk, trend, and anomaly detection",
        "Scenario analysis and decision-support",
      ],
    },
  ],
  cybersecurity: [
    {
      heading: "Starting scope",
      items: [
        "Assessments and identity",
        "Access and role-based permissions",
        "AI security and data protection",
        "Monitoring, audit logging",
        "Vulnerability management and policies",
        "AI governance and incident workflows",
      ],
    },
  ],
  "data-transformation": [
    {
      heading: "Data services",
      items: [
        "Integration, cleaning, migration",
        "Database modernization",
        "Warehouses and pipelines",
        "API integration and master data",
        "Governance, visualization, AI-ready infrastructure",
      ],
    },
  ],
  cloud: [
    {
      heading: "Cloud services",
      items: [
        "Strategy and migration",
        "Application modernization",
        "Architecture and automation",
        "Backup and disaster recovery",
        "Monitoring and cost optimization",
      ],
    },
  ],
  software: [
    {
      heading: "Build",
      items: [
        "Enterprise, customer, and government portals",
        "SaaS, dashboards, internal apps",
        "Customer, employee, field, and citizen mobile",
        "APIs, microservices, databases, authentication",
      ],
    },
  ],
  integrations: [
    {
      heading: "Typical connections",
      items: [
        "CRM ↔ ERP",
        "CRM ↔ WhatsApp",
        "ERP ↔ accounting",
        "Website ↔ CRM",
        "AI ↔ database, documents, email, workflow",
        "Payment ↔ ERP",
        "Government systems ↔ citizen services",
      ],
    },
  ],
  government: [
    {
      heading: "Citizen services",
      items: [
        "AI citizen assistants",
        "Digital service portals",
        "Complaints and case management",
        "Appointments and notifications",
        "Multilingual support",
      ],
    },
    {
      heading: "Operations and impact",
      items: [
        "Workflow and document management",
        "Internal AI, data, analytics",
        "Digital identity integrations",
        "Citizens served, processing time, cost, accessibility, resolution",
      ],
    },
  ],
  education: [
    {
      heading: "Education services",
      items: [
        "Student and teacher assistants",
        "Admissions and student support",
        "Attendance and parent communication",
        "Learning and institutional analytics",
        "Administrative and document automation",
        "Career guidance systems",
      ],
    },
  ],
  healthcare: [
    {
      heading: "Healthcare services",
      items: [
        "Patient communication",
        "Appointment automation",
        "Administrative AI and documents",
        "Patient portals and workflows",
        "Analytics and call-centre AI",
      ],
    },
  ],
  "financial-services": [
    {
      heading: "FS services",
      items: [
        "Customer service AI and copilots",
        "Document intelligence",
        "Onboarding and CRM transformation",
        "Fraud/risk analytics",
        "Compliance workflows and reporting",
        "Knowledge systems",
      ],
    },
  ],
  retail: [
    {
      heading: "Commerce AI",
      items: [
        "Shopping assistants and recommendations",
        "Customer service and orders",
        "Inventory analytics",
        "WhatsApp commerce",
        "Retention and demand forecasting",
      ],
    },
  ],
  marketing: [
    {
      heading: "Automation (not brand identity)",
      items: [
        "AI content systems",
        "Lead generation and qualification",
        "Email and social automation",
        "Segmentation and campaign analytics",
        "CRM automation and personalization",
      ],
    },
  ],
  "sales-ai": [
    {
      heading: "Sales engine",
      items: [
        "Lead → qualify → CRM → follow-up",
        "Meeting → proposal → conversion → retention",
        "Meeting summaries and CRM updates",
        "Opportunity and churn signals",
      ],
    },
  ],
  "hr-ai": [
    {
      heading: "HR services",
      items: [
        "Recruitment and screening",
        "Interview scheduling",
        "Onboarding and self-service",
        "HR and policy assistants",
        "Training and workforce analytics",
      ],
    },
  ],
  "finance-ai": [
    {
      heading: "Finance services",
      items: [
        "Invoice and expense automation",
        "Reporting and cash-flow analytics",
        "Budget monitoring",
        "Financial document intelligence",
        "AI finance assistant",
      ],
    },
  ],
  "procurement-ai": [
    {
      heading: "P2P path",
      items: [
        "Request → approval → vendor → PO",
        "Delivery → invoice → payment",
        "Vendors, prices, contracts",
        "Patterns, spend, and risk",
      ],
    },
  ],
  "workflow-rpa": [
    {
      heading: "Connected systems",
      items: [
        "Email, forms, databases",
        "CRM, ERP, WhatsApp, APIs",
        "AI judgement and human approvals",
      ],
    },
  ],
  "digital-experience": [
    {
      heading: "Experience",
      items: [
        "Corporate and AI websites",
        "Enterprise and customer portals",
        "Kiosks and self-service",
        "Accessibility improvements",
      ],
    },
  ],
  "intelligent-websites": [
    {
      heading: "Intelligent Digital Experience Platform",
      items: [
        "On-site AI assistant",
        "Lead capture and CRM",
        "Personalization and analytics",
        "Knowledge search",
        "Booking, accounts, automated support",
      ],
    },
  ],
  "managed-ai": [
    {
      heading: "Monthly operations",
      items: [
        "Monitoring and maintenance",
        "Model, cost, and prompt optimization",
        "Security monitoring",
        "Knowledge updates",
        "Usage analytics and improvement",
      ],
    },
  ],
  "ai-governance": [
    {
      heading: "Governance pack",
      items: [
        "Policies and usage controls",
        "Risk assessment and authorization",
        "Model and data governance",
        "Audit trails and human oversight",
        "Evaluation and responsible AI frameworks",
      ],
    },
  ],
  academy: [
    {
      heading: "Academy",
      items: [
        "Corporate, government, executive, employee training",
        "Automation, transformation, governance courses",
        "Contracts, certifications, subscriptions",
      ],
    },
  ],
  consulting: [
    {
      heading: "Executive questions",
      items: [
        "Where to deploy AI",
        "What to automate vs keep human",
        "Which systems to modernize",
        "Cost, ROI, and risk",
        "Deliverable: AI Transformation Roadmap",
      ],
    },
  ],
  audits: [
    {
      heading: "Audit output",
      items: [
        "People, process, technology, data, AI, security",
        "Current state and maturity score",
        "Automation and AI opportunities",
        "Technology and security gaps",
        "ROI opportunities",
        "12 / 24 / 36-month roadmap",
      ],
    },
  ],
  "command-center": [
    {
      heading: "Executive view",
      items: [
        "Revenue, customers, operations",
        "AI activity and productivity",
        "Sales, finance, risks, alerts",
        "KPIs and forecasts",
        "Investigative questions on authorized data",
      ],
    },
  ],
  "digital-workforce": [
    {
      heading: "Named agents",
      items: [
        "Sales Agent",
        "Support Agent",
        "Finance Agent",
        "HR Agent",
        "Operations Agent",
        "Research Agent",
        "Executive Agent",
      ],
    },
  ],
  "industry-solutions": [
    {
      heading: "Packs",
      items: [
        "REVNCIA for Banks",
        "REVNCIA for Governments",
        "REVNCIA for Universities",
        "REVNCIA for Healthcare",
        "REVNCIA for Retail",
        "REVNCIA for NGOs",
        "REVNCIA for Enterprises",
      ],
    },
  ],
};
