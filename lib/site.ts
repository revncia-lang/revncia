export const company = {
  name: "REVNCIA",
  descriptor: "A Digital Transformation & Public Impact Company",
  tagline: "AI, CRM, ERP, and digital transformation — built for enterprises and the public sector.",
  motto: "Together we transform",
  email: "info@revncia.com",
  address: "525 Randall Ave Ste 100, Cheyenne, WY, USA",
  founder: "Muhammad Danish",
  founderTitle: "Founder & Chief Executive Officer",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blueprint", label: "Blueprint" },
  { href: "/engagement", label: "Engage" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const principles = [
  "Integrity",
  "Accountability",
  "Transparency",
  "Respect",
  "Client success",
  "Confidentiality",
  "Compliance",
  "Innovation",
  "Professional excellence",
] as const;

export const objectives = [
  "Client growth",
  "Operational excellence",
  "Innovation",
  "Security",
  "Financial sustainability",
  "Public impact",
] as const;

export const solutions = [
  {
    slug: "crm",
    name: "CRM",
    title: "Customer Relationship Management",
    summary:
      "A single view of citizens, customers, and partners — from first inquiry through service delivery.",
    body: "REVNCIA designs and implements CRM platforms that unify sales, service, and case management. We map your processes, integrate existing systems, and train teams so adoption lasts. Public-sector deployments emphasize case tracking, transparency, and accountable handoffs.",
  },
  {
    slug: "erp",
    name: "ERP",
    title: "Enterprise Resource Planning",
    summary:
      "Finance, operations, inventory, and HR on one governed backbone — not a patchwork of spreadsheets.",
    body: "We implement ERP that matches how your organization actually works: chart of accounts, procurement, inventory, HR, and reporting. The emphasis is clean data, controlled access, and reporting leadership can trust.",
  },
  {
    slug: "ai",
    name: "AI",
    title: "Applied Artificial Intelligence",
    summary:
      "Practical AI for operations: assistants, document intelligence, forecasting, and workflow automation.",
    body: "We deploy AI where it reduces cost and cycle time — reception and service desks, document extraction, routing, forecasting, and internal copilots. Every engagement includes data-handling rules, human review where it matters, and measurable outcomes.",
  },
  {
    slug: "digital-transformation",
    name: "Digital transformation",
    title: "End-to-end digital transformation",
    summary:
      "Strategy, systems, and change management so technology actually changes how work gets done.",
    body: "Transformation is not a software purchase. REVNCIA sequences discovery, architecture, implementation, and adoption. We retire duplicate tools, standardize processes, and leave you with operating rhythm — KPIs, reviews, and ownership.",
  },
  {
    slug: "integration",
    name: "Integration",
    title: "Systems integration & cloud",
    summary:
      "APIs, data pipelines, and cloud platforms that connect CRM, ERP, and the rest of the estate.",
    body: "Most organizations already have systems. We connect them: identity, payments, records, analytics, and partner platforms. Integrations are documented, monitored, and designed so a single failure does not take down the operation.",
  },
  {
    slug: "governance",
    name: "Governance",
    title: "Security, privacy & governance",
    summary:
      "Information security, privacy, continuity, and compliance built into delivery — not bolted on later.",
    body: "REVNCIA operates with enterprise policy for information security, privacy, identity and access, risk, continuity, and ethics. Client work follows the same standard: least privilege, lawful processing of personal data, and recovery planning.",
  },
] as const;

export const industries = [
  {
    name: "Government & public sector",
    text: "Citizen services, case management, records, and transparent operations with public-impact outcomes.",
  },
  {
    name: "Enterprise & mid-market",
    text: "CRM, ERP, and AI programs that replace fragmented tools with a governed operating system.",
  },
  {
    name: "Healthcare & social services",
    text: "Care coordination, intake, and administrative systems designed around privacy and continuity.",
  },
  {
    name: "Education",
    text: "Student, staff, and operations platforms that reduce administrative load and improve service.",
  },
  {
    name: "Finance & professional services",
    text: "Client lifecycle, reporting, and controls that stand up to audit and client confidentiality.",
  },
  {
    name: "Logistics & operations",
    text: "Inventory, fulfillment, and field operations with real-time visibility and exception handling.",
  },
] as const;

export const aiServices = [
  {
    slug: "reception",
    name: "Intelligent reception",
    title: "Front-of-house and AI receptionist services",
    summary:
      "Governed reception that greets, triages, schedules, and routes visitors, callers, and digital inquiries without abandoning human escalation.",
    body: "REVNCIA deploys intelligent reception for corporate lobbies, clinics, campuses, and public counters. The service captures intent, verifies identity where policy allows, books appointments, issues tickets, and hands off to staff with a complete brief. Operating hours, languages, and escalation rules are configured to your institution — not a generic chatbot.",
  },
  {
    slug: "contact-centre",
    name: "Conversational AI",
    title: "Contact centre and omnichannel dialogue",
    summary:
      "Voice, chat, email, and WhatsApp service desks that resolve routine cases and brief agents on the remainder.",
    body: "We design omnichannel conversational platforms that sit in front of CRM and case systems. Intents, knowledge bases, and sentiment signals are version-controlled. Supervisors receive transcripts, quality scores, and containment metrics. Public-sector programmes emphasise lawful processing, audit trails, and equal access.",
  },
  {
    slug: "documents",
    name: "Document intelligence",
    title: "Intelligent document processing",
    summary:
      "Classification, extraction, and validation of forms, contracts, invoices, records, and correspondence at institutional scale.",
    body: "Paper and PDF remain the system of record in many organisations. REVNCIA implements document intelligence that classifies inbound files, extracts structured fields, flags exceptions, and writes results into ERP, CRM, or records systems. Human review queues protect accuracy on high-risk documents.",
  },
  {
    slug: "copilots",
    name: "Enterprise copilots",
    title: "Knowledge assistants and role-based copilots",
    summary:
      "Internal assistants grounded in your policies, manuals, and systems of record — with access control matching the employee’s role.",
    body: "Copilots are only useful if they cite the correct source and cannot see what the user may not see. We retrieve from approved repositories, enforce identity and access, and keep a log of prompts and outputs where your policy requires it. Typical roles: case officers, finance controllers, field supervisors, and executive briefings.",
  },
  {
    slug: "analytics",
    name: "Predictive analytics",
    title: "Forecasting, scoring, and operational intelligence",
    summary:
      "Demand, risk, churn, caseload, and exception forecasts presented as decisions — not unexplained model scores.",
    body: "REVNCIA builds predictive services on governed data: next-best-action in CRM, demand and working-capital signals in ERP, caseload and fraud risk in public programmes. Models are documented, monitored for drift, and retired when they no longer earn their place.",
  },
  {
    slug: "automation",
    name: "Intelligent automation",
    title: "Process automation with human oversight",
    summary:
      "End-to-end workflows that combine rules, robotic process automation, and AI judgement where the work is repetitive but not trivial.",
    body: "We automate intake, routing, reconciliation, notifications, and status updates across CRM, ERP, and line-of-business systems. AI is used where classification or language is required; deterministic rules remain where compliance demands them. Every automated path has an owner, an SLA, and a fallback.",
  },
  {
    slug: "vision",
    name: "Computer vision",
    title: "Operational vision and sensing",
    summary:
      "Inspection, occupancy, logistics, and facilities insight from cameras and imagery — deployed only where policy and privacy permit.",
    body: "Where clients have a lawful basis, REVNCIA implements vision services for inventory, safety observations, document capture, and facilities utilisation. Feeds are minimised, retention is limited, and access is restricted. We do not sell surveillance as a product; we deliver operational sensing under written policy.",
  },
  {
    slug: "voice",
    name: "Voice intelligence",
    title: "Speech recognition, voicebots, and call analytics",
    summary:
      "Accurate speech-to-text, outbound and inbound voicebots, and quality analytics for regulated service environments.",
    body: "Voice remains the primary channel for many citizens and customers. We implement recognition, synthesis, and post-call analytics that integrate with the contact centre and CRM. Recordings and transcripts follow your retention and privacy schedule.",
  },
  {
    slug: "crm-intelligence",
    name: "CRM intelligence",
    title: "AI inside customer and citizen relationship systems",
    summary:
      "Lead and case scoring, next-best-action, summarisation, and service recommendations inside the CRM — not in a side tool.",
    body: "REVNCIA embeds intelligence in the relationship system of record: automatic case summaries, duplicate detection, routing, and recommended offers or remedies. Staff see why a recommendation was made. Public programmes use the same pattern for case prioritisation and fairness reviews.",
  },
  {
    slug: "erp-intelligence",
    name: "ERP intelligence",
    title: "AI inside finance, supply, and operations",
    summary:
      "Invoice matching, anomaly detection, demand planning, and exception management on the ERP backbone.",
    body: "Finance and operations generate the data that leadership trusts. We add intelligence to accounts payable and receivable, inventory, procurement, and close processes — with dual control where money moves. Outputs are reconcilable to the general ledger.",
  },
  {
    slug: "public-ai",
    name: "Public-impact AI",
    title: "Citizen services and case intelligence",
    summary:
      "Intake, eligibility support, records, and transparent case handling designed for government and mission-driven institutions.",
    body: "Public-impact AI is judged by access, fairness, and records — not only containment rate. REVNCIA designs citizen portals, multilingual intake, and officer copilots that leave an auditable file. Models that affect benefits or enforcement receive extra human review and documented appeal paths.",
  },
  {
    slug: "assurance",
    name: "AI assurance",
    title: "Governance, model risk, and human oversight",
    summary:
      "Policy, access, evaluation, and operating rhythm so AI can be shown to a board, an auditor, or a regulator.",
    body: "Every AI service REVNCIA delivers includes an assurance layer: purpose limitation, data inventory, evaluation sets, human-in-the-loop design, incident response, and retirement criteria. This is how we expect to be examined by enterprise risk and public-sector clients.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Discover",
    text: "Map processes, systems, risks, and outcomes. Agree what success looks like before software is chosen.",
  },
  {
    n: "02",
    title: "Design",
    text: "Architecture, data model, access, and change plan. Security and privacy are design inputs, not afterthoughts.",
  },
  {
    n: "03",
    title: "Deliver",
    text: "Implement CRM, ERP, AI, and integrations in controlled releases with training and measurable go-live criteria.",
  },
  {
    n: "04",
    title: "Operate",
    text: "Handover with KPIs, support, and continuous improvement so the system remains the system of record.",
  },
] as const;
