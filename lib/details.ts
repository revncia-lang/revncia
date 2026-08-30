/** Extra specification blocks for each service page — unique to that line. */
export const detailBlocks: Record<
  string,
  { heading: string; items: string[] }[]
> = {
  "ai-platform": [
    {
      heading: "Who this helps",
      items: [
        "IT and platform owners who must stop personal chatbot logins",
        "Risk and audit teams who will be asked who saw what",
        "Operations leads who need one cost envelope, not thirty invoices",
        "Department heads who want an assistant that stays inside the rules",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "An AI Gateway with multi-model routing and cost-aware selection",
        "Named accounts, roles, and permissions",
        "Safety, guardrails, and evaluation hooks",
        "Logging, observability, and usage analytics",
        "Knowledge, memory, and context for the assistants you commissioned",
        "Employee, executive, customer, and department assistants on the same layer",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Staff sign in with the identity method in the programme",
        "Your owner can read who asked what, and what it cost",
        "Over-use is a conversation — not a silent surprise we hide",
        "New assistants reuse the same door instead of starting from zero",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not every commercial model on earth, and not a public API key we publish",
        "No published token price list or fake “unlimited” plan",
        "The Gateway enforces your access rules — it does not replace your legal duty",
        "Unused personal ChatGPT accounts stay out of scope unless you connect them",
      ],
    },
    {
      heading: "Specialized agents you can add",
      items: [
        "Sales, marketing, customer service",
        "HR, finance, operations, procurement",
        "Compliance, research, administration",
        "Project management and executive operations",
      ],
    },
  ],
  "customer-operations": [
    {
      heading: "Who this helps",
      items: [
        "Service managers whose customers repeat their story on every channel",
        "Sales ops who lose nights and weekends",
        "Public counters that cannot measure what was really solved",
        "Teams whose complaints sit in inboxes with no owner",
      ],
    },
    {
      heading: "Channels customers already use",
      items: [
        "Website chatbot",
        "WhatsApp on the number you publish",
        "Facebook Messenger and Instagram messaging",
        "Email AI, Voice AI, SMS, and mobile apps",
      ],
    },
    {
      heading: "What customers can finish",
      items: [
        "Questions and FAQ",
        "Lead qualification and appointment booking",
        "Order tracking and complaint handling",
        "Onboarding and document collection",
        "Tickets, escalation, and follow-ups",
        "Languages you approve",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Charged as a monthly operating platform per organisation",
        "Hours of cover are yours to set — not a 24/7 REVNCIA guarantee",
        "Your team takes the hard cases; the assistant handles the rest",
        "We do not invent WhatsApp tokens or a public voice number here",
      ],
    },
  ],
  "whatsapp-ai": [
    {
      heading: "Who this helps",
      items: [
        "Retailers, clinics, and campuses whose WhatsApp lives on one phone",
        "Teams whose leads ask a price and never get a follow-up",
        "Operations that type payment and order notices by hand",
        "Anyone who needs a clean handoff to a human in the same thread",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "An AI chatbot on the WhatsApp Business identity you own",
        "Lead generation and qualification into CRM",
        "Support, scheduling, payment and order notices you authorise",
        "Verification, document collection, campaigns, and follow-ups",
        "Human-agent handoff, CRM integration, and analytics",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Customers keep messaging the business number you publish",
        "Your team uses a shared inbox or CRM — not one personal phone",
        "Message volume is a usage meter agreed in writing",
        "You still need Meta / Cloud API approvals for your country",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "No pre-approved Meta token, WABA, or display name — those are yours and Meta’s",
        "No spam or unsolicited campaigns that break WhatsApp or local rules",
        "No promised delivery rate or 24/7 human cover unless the contract says so",
      ],
    },
  ],
  "voice-ai": [
    {
      heading: "Who this helps",
      items: [
        "Front desks that miss calls while helping people in the lobby",
        "After-hours lines that lose callers to a competitor",
        "Teams whose call notes never reach CRM",
        "Managers who cannot hear why customers are unhappy",
      ],
    },
    {
      heading: "Voice roles you can name",
      items: [
        "Receptionist",
        "Sales representative",
        "Customer service",
        "Appointment agent",
        "Collection agent (notices — not legal advice)",
        "Information, helpdesk, and internal assistant",
      ],
    },
    {
      heading: "What callers experience",
      items: [
        "Incoming and outbound calls on numbers you provide or port",
        "Booking, verification, qualification, and FAQs",
        "Call summaries and CRM field updates",
        "Escalation when they ask, or when the agent is outside its rules",
        "Languages you supply approved phrasing for",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Supervisors use a console or CRM view for transcripts and handoff",
        "Hours of cover are a configuration — not a 24/7 REVNCIA promise",
        "Recording and retention follow your contract and local law",
        "We do not publish a public Voice number",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "No guaranteed answer-accuracy SLA unless a later contract states one",
        "No REVNCIA-owned public phone number you did not buy",
        "No medical diagnosis, legal collections advice, or licensed decisions",
      ],
    },
  ],
  crm: [
    {
      heading: "Who this helps",
      items: [
        "Sales teams who chase the same lead twice",
        "Service and case teams whose history lives in inboxes",
        "Leaders who cannot see which offers convert",
        "Public programmes that need accountable handoffs",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Implementation, migration, and customization — not only a licence install",
        "Lead and customer management, pipelines, and segmentation",
        "Customer analytics and journey automation",
        "Follow-ups that do not depend on memory",
        "AI sales assistant and AI CRM assistant inside the same record",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Named users log into the tenant that is yours",
        "Admin roles stay with people you name",
        "Training and a handover pack so adoption is in scope",
        "Your CRM vendor still bills you unless a written resale deal says otherwise",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "We do not print vendor partner badges or licence SKUs",
        "Cleaning every historical spreadsheet is a line item — not assumed",
        "Unattended payments stay under your dual control",
      ],
    },
  ],
  erp: [
    {
      heading: "Who this helps",
      items: [
        "Finance, stock, and HR teams who each keep a different truth",
        "Controllers whose month-end is a scramble of exports",
        "Leaders who cannot trust a report in a board meeting",
        "Operations leads who see inventory surprises too late",
      ],
    },
    {
      heading: "Domains you can scope",
      items: [
        "Finance, HR, procurement, inventory",
        "Operations, sales, customer service",
        "Projects, assets, reporting",
      ],
    },
    {
      heading: "AI on the backbone",
      items: [
        "Finance, procurement, HR, and operations assistants",
        "Forecasting, reporting, and anomaly detection for a human to check",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Role-based logins — a clerk and a director do not share a password",
        "Money movement still needs the dual control you require",
        "Long-term this can sit under REVNCIA Enterprise OS",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not every ERP module on day one — only what the statement of work names",
        "We are not your ERP vendor unless a written deal says so",
        "Historical cleanup is not included unless data work is scoped",
      ],
    },
  ],
  "process-automation": [
    {
      heading: "Who this helps",
      items: [
        "Operations leads whose simple approvals wait days",
        "Teams who retype the same form into three systems",
        "Managers whose process lives in one person’s habit",
        "New staff who take months to learn unofficial workarounds",
      ],
    },
    {
      heading: "Typical programmes",
      items: [
        "Invoice processing",
        "Employee and customer onboarding",
        "Leave and purchase requests",
        "Approvals and reporting",
        "Document and email workflows",
        "CRM updates, compliance, and internal communications",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "The process lives in a system with an owner",
        "Staff follow the path — they do not invent a new one each week",
        "You measure cycle time on the process you named",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "We automate what you scoped — not every judgement in the building",
        "No invented cycle-time SLA unless a later contract states one",
      ],
    },
  ],
  "document-intelligence": [
    {
      heading: "Who this helps",
      items: [
        "Legal and commercial teams who cannot answer “what did we promise?”",
        "Finance teams who type invoice data by hand",
        "Records teams whose contracts pile up unread",
        "Anyone who finds risk in old documents only after a dispute",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "PDF, contract, invoice, and form processing",
        "Classification, extraction, summarisation, search, and comparison",
        "Risk identification and knowledge-base creation",
        "Obligation questions across a corpus you designate — with citations",
        "Human review queues for money, legal effect, and personal data",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Staff search or chat with the same roles as your files",
        "A contractor should not see the board pack",
        "Exports follow your records policy",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not legal advice, a binding interpretation, or a court-ready opinion",
        "Not a promise of 100% extraction accuracy on every scan",
        "Not medical diagnosis from clinical notes",
      ],
    },
  ],
  "knowledge-ai": [
    {
      heading: "Who this helps",
      items: [
        "Staff who ask colleagues the same policy question every week",
        "New hires who cannot find how work is supposed to be done",
        "Owners who fear private files in public chat tools",
        "Public officers who must cite the authorised SOP",
      ],
    },
    {
      heading: "Sources you can connect",
      items: [
        "Documents, policies, and SOPs",
        "Databases and websites you authorise",
        "CRM, ERP, and email when those connectors are in scope",
        "Internal knowledge with access control",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Answers come only from sources the user’s role may see",
        "Citations so a person can check the file",
        "Connectors run only when you authorise them",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "The assistant does not replace your legal or policy owner",
        "We do not invent a public document dump",
      ],
    },
  ],
  intelligence: [
    {
      heading: "Who this helps",
      items: [
        "Leaders who only see last month — not what is about to break",
        "Teams who argue from gut feel because forecasts are missing",
        "Owners who spot problems after money is already lost",
        "Analysts whose reports take so long the decision has passed",
      ],
    },
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
    {
      heading: "After go-live",
      items: [
        "Owners watch the measures you agreed to collect",
        "Models can be documented, monitored, and retired",
        "Example charts are not a quote or a guaranteed accuracy number",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "No guaranteed forecast accuracy unless a later contract says so",
        "No unexplained score sold as a decision",
        "Outputs are only as good as the data you authorised",
      ],
    },
  ],
  cybersecurity: [
    {
      heading: "Who this helps",
      items: [
        "Enterprises that share logins “just this once”",
        "Owners who have no record of who changed what",
        "Teams using AI tools with customer data and no rules",
        "Boards who will ask after a laptop loss",
      ],
    },
    {
      heading: "What you can receive from us",
      items: [
        "Assessments and identity",
        "Access and role-based permissions",
        "AI security and data protection",
        "Monitoring, audit logging, vulnerability management",
        "Policies, AI governance, and incident workflows",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Staff use named accounts and written AI-use rules",
        "You have a trail for an auditor — not a story invented later",
      ],
    },
    {
      heading: "Honest limits — not a full cyber firm",
      items: [
        "We start with digital-security implementation",
        "Advanced testing, certifications, and deep incident retainers are partner work",
        "We do not invent certifications we do not hold",
        "We do not present REVNCIA as a complete cybersecurity practice on day one",
      ],
    },
  ],
  "data-transformation": [
    {
      heading: "Who this helps",
      items: [
        "Teams whose reports disagree because names and codes were never cleaned",
        "Projects that copy the old mess into a new system",
        "AI programmes that stall because the data is not ready",
        "Organisations with no owner for a single customer or product record",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Integration, cleaning, and migration",
        "Database modernization",
        "Warehouses and pipelines",
        "API integration and master data",
        "Governance, visualization, and AI-ready infrastructure",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Someone you name owns the master record",
        "Reports and models stop arguing with each other",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Cleaning every historical spreadsheet is a line item",
        "We do not invent a public data dump",
      ],
    },
  ],
  cloud: [
    {
      heading: "Who this helps",
      items: [
        "Owners whose old servers fail and whose backups were never tested",
        "Teams whose cloud bills rise with no owner",
        "Organisations that cannot grow without buying idle hardware",
        "Anyone who needs a recovery path written down",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Strategy and migration",
        "Application modernization",
        "Architecture and automation",
        "Backup and disaster recovery",
        "Monitoring and cost optimization",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "A recovery path written in the programme",
        "Cost envelopes are a conversation, not a silent surprise",
        "Later this can become REVNCIA Cloud Operations",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "No five-minute SLA or 24/7 NOC unless a later contract says so",
        "No invented status-page URL",
        "Advanced cyber remainders still follow the partner model",
      ],
    },
  ],
  software: [
    {
      heading: "Who this helps",
      items: [
        "Organisations whose package almost fits — so staff keep paper beside it",
        "Citizens or customers who cannot finish a task online",
        "Field staff who still carry clipboards",
        "Teams whose every new need becomes another disconnected app",
      ],
    },
    {
      heading: "What we build when a package is wrong",
      items: [
        "Enterprise, customer, and government portals",
        "SaaS, dashboards, and internal apps",
        "Customer, employee, field, and citizen mobile",
        "APIs, microservices, databases, and authentication",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "You own the accounts and the runbook in the handover",
        "Integrations are part of the design so the next need can connect",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "We build what is in the statement of work",
        "No generic “app factory” headline price",
      ],
    },
  ],
  integrations: [
    {
      heading: "Who this helps",
      items: [
        "Staff who copy data between CRM, WhatsApp, and accounts by hand",
        "Teams whose sale in one system never updates stock in another",
        "Owners whose AI cannot help because it is not connected to live records",
        "Anyone whose week stops when one export breaks",
      ],
    },
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
    {
      heading: "After go-live",
      items: [
        "Connections are documented and monitored for the systems listed",
        "A single failure should not take down the operation",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not every vendor API on earth",
        "Only the systems named in the programme",
      ],
    },
  ],
  government: [
    {
      heading: "Who this helps",
      items: [
        "Citizens who queue, call, and still do not know case status",
        "Officers whose files move slowly between desks",
        "Leaders who cannot show how many people were served, or how long it took",
        "People left behind by language or access barriers",
      ],
    },
    {
      heading: "What citizens can use",
      items: [
        "AI citizen assistants",
        "Digital service portals",
        "Complaints and case management with a status they can check",
        "Appointments and notifications",
        "Multilingual support where you supply approved language",
      ],
    },
    {
      heading: "What offices keep",
      items: [
        "Workflow and document management",
        "Internal AI, data, and analytics",
        "Digital identity integrations when you and the provider allow it",
        "Impact measures you choose: people served, time, cost, access, resolution",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "The public uses the URL, kiosk, or number you publish",
        "Officers sign in with your identity system; actions are logged",
        "Appeal and human review paths stay yours",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "REVNCIA does not act as a government or issue benefits",
        "No unreviewed automated denial of a right or a benefit",
        "No court judgements or immigration decisions",
      ],
    },
  ],
  education: [
    {
      heading: "Who this helps",
      items: [
        "Parents who only hear from the school when something is wrong",
        "Registrars whose admissions and attendance eat every day",
        "Teachers who repeat the same answers instead of teaching",
        "Institutions that cannot see which students need help early",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Student and teacher assistants grounded in your materials",
        "Admissions and student support",
        "Attendance and parent communication",
        "Learning and institutional analytics",
        "Administrative and document automation",
        "Career guidance systems",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Families use the portal or channel you publish",
        "Staff keep decisions that must stay human (discipline, grades where policy requires it)",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not a replacement for teaching",
        "Not a clinical or safeguarding product",
        "Accessibility is scoped work — not a badge we invent",
      ],
    },
  ],
  healthcare: [
    {
      heading: "Who this helps",
      items: [
        "Front-office teams drowning in forms",
        "Patients who miss appointments because reminders are manual",
        "Callers whose records are hard to find",
        "Privacy officers who need tools chosen with care",
      ],
    },
    {
      heading: "What you can receive — administrative",
      items: [
        "Patient communication and appointment automation",
        "Administrative AI and documents",
        "Patient portals and workflows",
        "Analytics and call-centre AI",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Reminders and portals run on the hours you set",
        "Clinicians still own diagnosis and treatment",
        "Privacy remains a design constraint",
      ],
    },
    {
      heading: "Honest limits — not clinical care",
      items: [
        "We do not diagnose, treat, prescribe, or replace a clinician",
        "Local law and specialists decide what may go live",
        "Nothing we publish is medical advice",
      ],
    },
  ],
  "financial-services": [
    {
      heading: "Who this helps",
      items: [
        "Banks and insurers whose onboarding takes weeks of paper",
        "Service teams who cannot see the full customer file",
        "Compliance officers who gather evidence in a panic",
        "Risk owners who see fraud signals after the loss",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Customer service AI and employee copilots",
        "Document intelligence and knowledge systems",
        "Onboarding and CRM transformation",
        "Fraud and risk analytics for your owners to act on",
        "Compliance workflows and reporting automation",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Staff see a fuller customer file",
        "Money movement and credit decisions stay under your licensed controls",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not investment advice",
        "Fraud models are signals — not a guarantee against loss",
        "Website charts are examples, not a promised detection rate",
      ],
    },
  ],
  retail: [
    {
      heading: "Who this helps",
      items: [
        "Shops whose WhatsApp replies are slow or missing",
        "Teams who stock out and overstock in the same week",
        "Owners whose website and store do not share inventory",
        "Brands that do not recognise repeat customers",
      ],
    },
    {
      heading: "What shoppers and staff get",
      items: [
        "Shopping assistants and recommendations",
        "Customer service and order management",
        "Inventory analytics the store and the site can share",
        "WhatsApp commerce on the number you own",
        "Retention and demand forecasting as planning aids",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Shoppers use the channels you publish",
        "Repeat customers can be recognised in the CRM in scope",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "No invented WhatsApp token",
        "Demand forecasts are not a guaranteed sell-through",
        "Marketing here is a capability tied to CRM — not our identity",
      ],
    },
  ],
  marketing: [
    {
      heading: "Who this helps",
      items: [
        "Teams whose campaigns have no link to CRM",
        "Lists that get the same message too often",
        "Sales people who spend time on unqualified leads",
        "Owners whose content is too slow for the moment",
      ],
    },
    {
      heading: "What you receive — a capability",
      items: [
        "AI content systems",
        "Lead generation and qualification",
        "Email and social automation",
        "Segmentation and campaign analytics",
        "CRM automation and personalization",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Leads and outcomes write back to the CRM in scope",
        "You can see what converted — not guess",
      ],
    },
    {
      heading: "Honest limits — not the company identity",
      items: [
        "REVNCIA is an AI digital transformation and public-impact company",
        "Marketing automation is one facility — not the name on the door",
        "No spam that breaks channel or local rules",
        "No guaranteed open rate or PKR package",
      ],
    },
  ],
  "sales-ai": [
    {
      heading: "Who this helps",
      items: [
        "Managers whose good leads wait while the team works the loudest inbox",
        "Teams whose meetings leave no notes in CRM",
        "Owners whose proposals are late and generic",
        "Anyone who sees churn only after the customer is gone",
      ],
    },
    {
      heading: "The path customers and sales share",
      items: [
        "Lead → qualify → CRM → follow-up",
        "Meeting → proposal → conversion → retention",
        "Meeting summaries and CRM updates",
        "Opportunity and churn signals for an owner",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "The CRM is the system of record",
        "Humans still own the offer and the signature",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Drafts are drafts — not a promised conversion rate",
        "Churn signals are for your owner to act on — not a stay-or-else guarantee",
      ],
    },
  ],
  "hr-ai": [
    {
      heading: "Who this helps",
      items: [
        "HR teams whose CVs sit unread while good people take other jobs",
        "New staff whose onboarding is a scavenger hunt",
        "Employees who cannot find the leave or policy answer",
        "HR who spend days on scheduling instead of people",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Recruitment and screening drafts for humans to review",
        "Interview scheduling",
        "Onboarding and employee self-service",
        "HR and policy assistants",
        "Training and workforce analytics",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Employees use self-service for the journeys you scoped",
        "Hiring decisions stay with your managers",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "We do not make a legally binding employment decision",
        "Workforce analytics are not a medical or psychological diagnosis",
      ],
    },
  ],
  "finance-ai": [
    {
      heading: "Who this helps",
      items: [
        "Controllers whose invoices wait in email",
        "Teams who know cash only after a painful spreadsheet",
        "Owners who watch budgets too late",
        "Managers who wait on packs that are already out of date",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Invoice and expense automation",
        "Reporting and cash-flow analytics",
        "Budget monitoring",
        "Financial document intelligence",
        "An AI finance assistant that drafts — a person who posts",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Packs move faster",
        "Journal posts and payments still follow your dual control",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not investment advice",
        "Not a substitute for a licensed accountant where the law requires one",
        "No promised close date or 100% extraction on every scan",
      ],
    },
  ],
  "procurement-ai": [
    {
      heading: "Who this helps",
      items: [
        "Teams whose purchases skip approval “because it was urgent”",
        "Buyers who pay three prices for the same item",
        "Finance whose delivery and invoice never match the order",
        "Owners who discover vendor risk after a failure",
      ],
    },
    {
      heading: "The path from request to payment",
      items: [
        "Request → approval → vendor → purchase order",
        "Delivery → invoice → payment",
        "Vendor, price, and contract comparison",
        "Patterns, spend, and risk signals",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "The trail is in the system",
        "Your approvers still approve",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Risk flags are not a promise a vendor never fails",
        "We do not replace your legal contract review",
      ],
    },
  ],
  "workflow-rpa": [
    {
      heading: "Who this helps",
      items: [
        "Teams whose work stops when one person is away",
        "Offices that use email as a workflow tool",
        "Staff who do copy-paste a system should do",
        "Owners who have no proof of who approved what, and when",
      ],
    },
    {
      heading: "What we connect",
      items: [
        "Email, forms, and databases",
        "CRM, ERP, WhatsApp, and APIs",
        "AI judgement only where you allow it",
        "Human approvals where compliance needs them",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "There is a trail when someone is away",
        "ROI is measured on the process you scoped",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "No invented cycle-time SLA",
        "No global percentage we made up",
      ],
    },
  ],
  "digital-experience": [
    {
      heading: "Who this helps",
      items: [
        "Organisations whose website is a brochure, not a place to get work done",
        "Customers who cannot self-serve simple tasks",
        "Counters and kiosks with no link to back-office systems",
        "People blocked by missing accessibility",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Corporate and AI-aware websites",
        "Enterprise and customer portals",
        "Kiosks and self-service tied to back-office systems",
        "Accessibility improvements that were scoped",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "The public uses the URL or kiosk you publish",
        "The counter is not a dead end",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Accessibility is work we scope — not a badge we invent",
        "We do not sell surveillance kiosks",
      ],
    },
  ],
  "intelligent-websites": [
    {
      heading: "Who this helps",
      items: [
        "Owners whose site collects no leads — or leads never reach CRM",
        "Visitors who cannot find answers and leave",
        "Brands with no assistant, booking, or account — only pages of text",
        "Support that still starts with a phone number on the footer",
      ],
    },
    {
      heading: "What an Intelligent Digital Experience Platform includes",
      items: [
        "On-site AI assistant",
        "Lead capture and CRM write-back",
        "Personalization and analytics",
        "Knowledge search",
        "Booking, accounts, and automated support",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "The assistant and forms write into the CRM in scope",
        "Support does not have to start in the footer",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "We do not sell “just a website” as transformation",
        "No promised conversion rate",
        "Content and knowledge stay yours to approve",
      ],
    },
  ],
  "managed-ai": [
    {
      heading: "Who this helps",
      items: [
        "Owners whose project went live and then slowly got worse",
        "Teams whose models and prompts never update as the business changes",
        "Finance who see cost rise and quality fall at the same time",
        "Staff who stop trusting a stale knowledge base",
      ],
    },
    {
      heading: "What you receive each month",
      items: [
        "Monitoring and maintenance",
        "Model, cost, and prompt optimization",
        "Security monitoring",
        "Knowledge updates",
        "Usage analytics and improvement",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "You keep a named owner on your side",
        "We report by the channel in the operations schedule",
        "Human REVNCIA mail is email-first from Cheyenne on ordinary US business days",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not a 24/7 guaranteed SLA unless a later contract says so",
        "No invented status-page URL — recovery is written in the programme",
      ],
    },
  ],
  "ai-governance": [
    {
      heading: "Who this helps",
      items: [
        "Staff using public AI tools with private data",
        "Boards who ask what AI is allowed to decide",
        "Teams who have no audit trail when something goes wrong",
        "Public bodies that will examine the programme",
      ],
    },
    {
      heading: "What you receive",
      items: [
        "Policies and usage controls",
        "Risk assessment and authorization",
        "Model and data governance",
        "Audit trails and human oversight",
        "Evaluation and responsible AI frameworks",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "More assistants can be added without starting risk from zero",
        "You can explain the system to an auditor",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "We do not replace your legal counsel",
        "Evaluation is assurance work — not a marketing badge",
      ],
    },
  ],
  academy: [
    {
      heading: "Who this helps",
      items: [
        "Leaders who buy tools before teams know how to use them safely",
        "Organisations where fear and rumour fill the training gap",
        "Government and enterprise staff left to learn from random videos",
        "Teams with no shared language for AI risk and value",
      ],
    },
    {
      heading: "What you can buy",
      items: [
        "Corporate, government, executive, and employee training",
        "Automation, transformation, and governance courses",
        "Contracts, certifications, and subscriptions named in writing",
      ],
    },
    {
      heading: "After a course",
      items: [
        "You keep the materials named in the contract",
        "Staff share one vocabulary for risk and value",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not a degree or a regulated professional licence unless a later accredited programme exists",
        "Scope is written per contract — we do not sell a degree unless a later accredited programme exists",
      ],
    },
  ],
  consulting: [
    {
      heading: "Who this helps",
      items: [
        "Leaders whose projects start with software instead of a clear problem",
        "Teams who automate where judgement was needed — or the reverse",
        "Boards who see cost only when the invoice arrives",
        "Owners who meet risk after go-live, not in the plan",
      ],
    },
    {
      heading: "Questions the roadmap answers",
      items: [
        "Where to deploy AI",
        "What to automate vs keep human",
        "Which systems to modernize",
        "The shape of cost, ROI, and risk",
        "Deliverable: AI Transformation Roadmap you keep",
      ],
    },
    {
      heading: "After the engagement",
      items: [
        "You keep the document — no platform login required for this layer",
        "Workshops and interviews are with your people",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Cost and ROI in the roadmap are scenarios — not a public price",
        "No PKR package or headline number",
        "A conversation here does not start a programme",
      ],
    },
  ],
  audits: [
    {
      heading: "Who this helps",
      items: [
        "Large buyers who do not know how mature they really are",
        "Organisations that spend on the loudest vendor, not the biggest gap",
        "Owners whose security and process holes stay hidden until an incident",
        "Leaders with a pile of ideas and no 12–36 month map",
      ],
    },
    {
      heading: "What you take away",
      items: [
        "People, process, technology, data, AI, and security — current state",
        "A maturity score for this engagement",
        "Automation and AI opportunities",
        "Technology and security gaps",
        "ROI opportunities",
        "A 12 / 24 / 36-month roadmap",
      ],
    },
    {
      heading: "After the audit",
      items: [
        "You have a map you can take to a board",
        "Budget can follow the gap — not the loudest demo",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "The score is our method for this engagement — not a regulator’s certificate",
        "We do not invent a public league table of your organisation",
      ],
    },
  ],
  "command-center": [
    {
      heading: "Who this helps",
      items: [
        "Executives who see five dashboards and still cannot explain a drop",
        "Owners whose alerts arrive with no owner",
        "Leaders who cannot govern AI spend because activity is invisible",
        "Teams who wait for a weekly pack instead of a live picture",
      ],
    },
    {
      heading: "What you can see and ask",
      items: [
        "Revenue, customers, and operations",
        "AI activity and productivity",
        "Sales, finance, risks, and alerts",
        "KPIs and forecasts",
        "Investigative questions on authorised data: why did this move?",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "Alerts need an owner you name",
        "AI spend can be governed because activity is visible",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Example charts are not a quote",
        "We do not promise a live picture of systems we were never connected to",
      ],
    },
  ],
  "digital-workforce": [
    {
      heading: "Who this helps",
      items: [
        "Organisations where every team built a one-off bot nobody else can reuse",
        "Managers who have no named “who does this work” when a person is off",
        "Owners whose permissions are too wide",
        "Teams who automated without a workflow or an owner",
      ],
    },
    {
      heading: "Named agents you can commission",
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
    {
      heading: "After go-live",
      items: [
        "Each agent stays inside defined permissions and workflows",
        "Humans still oversee; money and legal effect stay under your rules",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Not an unsupervised workforce",
        "Agents cannot see what you did not grant",
      ],
    },
  ],
  "industry-solutions": [
    {
      heading: "Who this helps",
      items: [
        "Buyers who cannot compare a clear pack — only a long proposal",
        "Banks, schools, or agencies who get a generic tool that misses their mandate",
        "Delivery teams whose lessons never become a product for the next client",
        "Enterprises and NGOs who do not want a blank custom project every time",
      ],
    },
    {
      heading: "Packs you can start from",
      items: [
        "REVNCIA for Banks",
        "REVNCIA for Governments",
        "REVNCIA for Universities",
        "REVNCIA for Healthcare (administrative)",
        "REVNCIA for Retail",
        "REVNCIA for NGOs",
        "REVNCIA for Enterprises",
      ],
    },
    {
      heading: "After go-live",
      items: [
        "You still get the facilities named in the statement of work",
        "The pack is a starting kit — not every module live on day one",
      ],
    },
    {
      heading: "Honest limits",
      items: [
        "Healthcare packs stay administrative — not clinical care",
        "Banking packs do not replace your licence",
        "Government packs do not make REVNCIA a public authority",
        "Cyber remains implementation plus partners — not a full cyber firm",
      ],
    },
  ],
};
