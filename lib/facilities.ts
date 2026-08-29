/**
 * Customer-facing facilities: what a client receives and can use.
 * Not internal company ops, not staff HR.
 */

export type FacilityId =
  | "voice"
  | "whatsapp"
  | "ai-gateway"
  | "crm-erp"
  | "documents"
  | "citizen-services"
  | "operating-support";

export type CustomerFacility = {
  id: FacilityId;
  n: string;
  name: string;
  title: string;
  summary: string;
  youReceive: string[];
  howYouAccess: string[];
  included: string[];
  notIncluded: string[];
  relatedSlugs: string[];
};

export type BuyLayer = {
  id: string;
  layer: string;
  cadence: string;
  whatYouGet: string;
  howYouUseIt: string;
  typicalWhen: string;
};

export type HonestyLimit = {
  id: string;
  title: string;
  text: string;
  slugs: string[];
};

export const facilitiesIntro = {
  kicker: "What you can use",
  title: "What your callers, staff, and citizens can actually use after go-live.",
  lede: "After a programme is commissioned you can run Voice, WhatsApp, the AI Gateway, CRM and ERP logins, documents, citizen portals, and operating support. Scope is written in the statement of work. We do not publish fake SLAs, WhatsApp tokens, or a PKR package.",
} as const;

export const customerFacilities: CustomerFacility[] = [
  {
    id: "voice",
    n: "01",
    name: "REVNCIA Voice",
    title: "Inbound and outbound voice agents your callers can reach",
    summary:
      "A voice line your organisation configures: reception, sales, service, bookings, collections, and helpdesk — with a path to a human.",
    youReceive: [
      "Voice agents for roles you name: receptionist, sales, service, appointments, collections, information, or an internal assistant.",
      "Inbound calls that greet, qualify, book, or answer FAQs in the languages you approve.",
      "Outbound calls only where you have a lawful basis and a written script — reminders, follow-ups, collections notices.",
      "Call summaries and field updates written into the CRM or case system in scope.",
      "Escalation to a named human queue when the caller asks, or when the agent is outside its permissions.",
    ],
    howYouAccess: [
      "Callers use the phone numbers you provide or port. REVNCIA does not publish a public Voice number.",
      "Your supervisors use a console or CRM view for transcripts, summaries, and handoff — after accounts are issued at go-live.",
      "Hours of cover are yours to set (for example front-desk hours plus after-hours). That is a configuration, not a 24/7 REVNCIA guarantee.",
      "Recording and retention follow the schedule in your contract and local law. We do not invent a retention period here.",
    ],
    included: [
      "Agent design, prompts, and escalation rules for the scoped roles.",
      "CRM or ticket write-back when that integration is in the programme.",
      "Multilingual conversation where you supply approved phrasing.",
      "Handover so your staff can take over a live or completed call.",
    ],
    notIncluded: [
      "A guaranteed answer-accuracy or containment SLA unless a later contract states one.",
      "A REVNCIA-owned public phone number or carrier account you did not buy.",
      "Legal collections advice, medical diagnosis, or decisions that must stay with a licensed person.",
    ],
    relatedSlugs: ["voice-ai", "customer-operations", "managed-ai"],
  },
  {
    id: "whatsapp",
    n: "02",
    name: "WhatsApp facility",
    title: "Business chat your customers already use — governed, not on one phone",
    summary:
      "WhatsApp becomes a system: bot, leads, support, scheduling, notices, documents, and a clean handoff to a person.",
    youReceive: [
      "An AI chatbot on the WhatsApp Business identity you own — not a number we invent.",
      "Lead capture and qualification that can write into CRM.",
      "Support answers, appointment scheduling, and order or payment notices you authorise.",
      "Document collection (for example a form photo or PDF) into a ticket or case.",
      "Campaign and follow-up flows you approve, plus analytics on the conversations in scope.",
      "Human-agent handoff so a staff member can continue the same thread.",
    ],
    howYouAccess: [
      "You need a WhatsApp Business account and the Meta / Cloud API approvals that apply to your country. We help you connect; we do not issue secret tokens in marketing copy.",
      "Customers message the business number you publish.",
      "Your team uses a shared inbox or CRM — chats should not live on one employee’s personal phone.",
      "Message volume is a usage meter. Rates are agreed in writing, not listed as a guess here.",
    ],
    included: [
      "Bot design, intents, and the handoff path.",
      "CRM integration when that system is in the programme.",
      "Operating runbook for who answers after the bot.",
    ],
    notIncluded: [
      "A pre-approved Meta token, WABA, or display name — those are yours and Meta’s.",
      "Spam or unsolicited campaigns that break WhatsApp or local rules.",
      "A promised delivery rate or 24/7 human cover unless the contract says so.",
    ],
    relatedSlugs: ["whatsapp-ai", "customer-operations", "retail"],
  },
  {
    id: "ai-gateway",
    n: "03",
    name: "AI Gateway",
    title: "The shared engine: routing, identity, cost, knowledge, and logs",
    summary:
      "Staff and systems reach models through one governed door — not a pile of personal chatbot logins.",
    youReceive: [
      "An AI Gateway that routes work across approved models, with cost-aware selection for simple vs hard tasks.",
      "Named user accounts, roles, and permissions so not everyone sees every file or conversation.",
      "Knowledge, memory, and context for the assistants you commissioned — grounded in sources you authorise.",
      "Safety controls, guardrails, and evaluation hooks so outputs can be reviewed.",
      "Logging, observability, and usage analytics your owner can read — who asked what, and what it cost.",
      "Enterprise assistants and agents (employee, customer, department, research) that sit on this same layer.",
    ],
    howYouAccess: [
      "Your staff sign in with the identity method in the programme (for example organisation email or SSO when that is in scope).",
      "Applications and portals call the Gateway through credentials we issue at go-live — not a public API key we publish.",
      "Cost and token envelopes are set with you. Over-use is a conversation, not a silent surprise we hide.",
      "You do not get unlimited model access. Unused personal ChatGPT accounts are out of scope unless you connect them yourself.",
    ],
    included: [
      "Routing, usage meters, and an operator view for the environments in the contract.",
      "Guardrails and audit logs for the assistants on this Gateway.",
      "Knowledge connectors that were scoped (documents, CRM, ERP, sites).",
    ],
    notIncluded: [
      "Every commercial model on earth, or a promise we host all of them ourselves.",
      "A published token price list or a fake “unlimited” plan.",
      "Bypass of your own access rules — the Gateway enforces them; it does not replace your legal duty.",
    ],
    relatedSlugs: ["ai-platform", "knowledge-ai", "managed-ai", "ai-governance"],
  },
  {
    id: "crm-erp",
    n: "04",
    name: "CRM and ERP access",
    title: "The systems of record your people log into every day",
    summary:
      "Relationship and enterprise backbones — implemented, migrated, and opened to AI only where you allow it.",
    youReceive: [
      "A CRM your sales and service teams actually use: leads, customers, pipelines, cases, and follow-ups.",
      "ERP coverage you scoped: finance, procurement, inventory, HR, projects, assets, or reporting — not a slogan that claims every module on day one.",
      "Role-based logins so a clerk and a director do not share one password.",
      "AI assistants that sit inside or beside CRM/ERP: summaries, next actions, exception lists — with a human still approving money movement.",
      "Integrations so WhatsApp, Voice, web, and accounting are not retyped by hand.",
    ],
    howYouAccess: [
      "Named user accounts in the CRM or ERP tenant that is yours (or the environment we stand up for you).",
      "Admin roles stay with people you name. REVNCIA keeps only the access needed to implement and, if bought, to operate.",
      "Training and a handover pack so adoption is part of the facility, not an afterthought.",
      "We are a transformation partner. We do not print vendor partner badges or licence SKUs.",
    ],
    included: [
      "Implementation, migration, and process design in the statement of work.",
      "Pipelines, segmentation, and the AI assistants that were scoped.",
      "Documented integrations to the systems listed in the programme.",
    ],
    notIncluded: [
      "A perpetual licence we do not own — your CRM/ERP vendor still bills you unless we resell under a written deal.",
      "Cleaning every historical spreadsheet unless data work is a line item.",
      "Unattended payments or journal posts without the dual control you require.",
    ],
    relatedSlugs: ["crm", "erp", "integrations", "sales-ai"],
  },
  {
    id: "documents",
    n: "05",
    name: "Documents and knowledge",
    title: "Files your staff can search, extract, and ask — with access control",
    summary:
      "Contracts, invoices, forms, policies, and SOPs become a question you can ask — not a cupboard you must search.",
    youReceive: [
      "Ingestion of PDFs and scans you upload or connect: classification, extraction, summarisation, search, and comparison.",
      "Contract and obligation questions across a corpus you designate — with citations back to the file.",
      "Invoice and form fields written into finance or case systems when that integration is in scope.",
      "A private knowledge assistant that answers from policies and SOPs the user is allowed to see.",
      "Human review queues for high-risk documents (money, legal effect, personal data).",
    ],
    howYouAccess: [
      "Staff use a search or chat interface with the same roles as your files. A contractor should not see the board pack.",
      "Source systems (share drives, records, mail) are connected only when you authorise the connector.",
      "Downloads and exports follow your records policy. We do not invent a public document dump.",
    ],
    included: [
      "The document types and volumes listed in the programme.",
      "Knowledge-base creation from the sources you approve.",
      "Exception queues so a person checks what the model is unsure about.",
    ],
    notIncluded: [
      "Legal advice, a binding contract interpretation, or a court-ready opinion.",
      "A promise of 100% extraction accuracy on every scan.",
      "Medical diagnosis from clinical notes — healthcare work here is administrative unless a specialist engagement says otherwise.",
    ],
    relatedSlugs: ["document-intelligence", "knowledge-ai", "process-automation"],
  },
  {
    id: "citizen-services",
    n: "06",
    name: "Citizen and public services",
    title: "Portals, cases, and assistants the public can use",
    summary:
      "Municipal, agency, campus, and mission programmes: status, bookings, complaints, and measured access — not a black-box chatbot.",
    youReceive: [
      "A citizen or student-facing assistant and a digital portal for the services you name.",
      "Complaint and case files with a status a person can check without calling the same desk twice.",
      "Appointments and notifications (email, SMS, or the channel in scope).",
      "Multilingual support where you supply approved language.",
      "Officer or staff copilots that leave an auditable file.",
      "Impact measures you choose to publish: people served, time to process, accessibility, resolution — not invented KPIs.",
    ],
    howYouAccess: [
      "The public uses the URL, kiosk, or phone number you publish. They do not need a REVNCIA account.",
      "Officers sign in with your identity system. Case actions are logged.",
      "Digital identity (national ID, campus ID) is integrated only when you and the identity provider allow it.",
      "Appeal and human review paths stay yours. The system does not replace a statutory decision-maker.",
    ],
    included: [
      "The citizen journeys and back-office workflows in the statement of work.",
      "Reporting on the measures you agreed to collect.",
      "Accessibility improvements that were scoped (this is work, not a badge we invent).",
    ],
    notIncluded: [
      "REVNCIA acting as a government or issuing benefits.",
      "Unreviewed automated denial of a right or a benefit.",
      "Clinical care, court judgements, or immigration decisions.",
    ],
    relatedSlugs: ["government", "education", "healthcare", "industry-solutions"],
  },
  {
    id: "operating-support",
    n: "07",
    name: "Operating support",
    title: "How you reach REVNCIA, and how we stay after go-live",
    summary:
      "Email-first human help from the published office, plus optional Managed AI so the system does not go stale.",
    youReceive: [
      "A named way to write to REVNCIA: info@revncia.com and the inquiry form.",
      "A written handover: who owns the system on your side, and who we contact.",
      "If you buy Managed AI: monitoring, prompt and knowledge updates, cost watch, and improvement — on a monthly cadence.",
      "If you buy Academy or consulting: training and a roadmap you keep.",
      "Incident conversation by email when something in our scope breaks. We do not invent a status-page URL here.",
    ],
    howYouAccess: [
      "Human REVNCIA support is email-first from 525 Randall Ave Ste 100, Cheyenne, WY, USA.",
      "We handle correspondence on ordinary US business days. We do not publish a guaranteed reply-time SLA.",
      "Voice and WhatsApp that your customers use can run on the hours you set. That is your channel facility, not a promise that a REVNCIA person answers at 03:00.",
      "Emergency phone trees, if any, are written into a later operations schedule — not invented in marketing copy.",
    ],
    included: [
      "Email routing when you name the service line in the subject.",
      "Handover documents and training that were in the project.",
      "Managed operations only when that layer is on the order.",
    ],
    notIncluded: [
      "A 24/7 network operations centre or a published five-minute SLA.",
      "On-site staff in Cheyenne as a walk-in helpdesk.",
      "Support for tools you bought elsewhere and never put in the contract.",
    ],
    relatedSlugs: ["managed-ai", "consulting", "audits", "academy"],
  },
];

/** Five commercial layers — how a customer can buy, not a PKR price. */
export const buyLayers: BuyLayer[] = [
  {
    id: "consulting",
    layer: "Consulting",
    cadence: "One-time",
    whatYouGet:
      "A written AI Transformation Roadmap: where AI belongs, what stays human, the shape of cost and risk, and a sequence you can take to a board.",
    howYouUseIt:
      "Workshops and interviews with your people. You keep the document. You do not need a platform login for this layer.",
    typicalWhen:
      "Before you buy software, or when leaders need a plan instead of a product demo.",
  },
  {
    id: "implementation",
    layer: "Implementation",
    cadence: "Project",
    whatYouGet:
      "A working facility in your environment — Voice, WhatsApp, Gateway, CRM, ERP, documents, or a citizen portal — as named in the statement of work.",
    howYouUseIt:
      "Discovery, design, build, training, and go-live. You receive accounts, runbooks, and a handover. Project fees are scoped; we do not quote a single headline number.",
    typicalWhen: "You have decided what to stand up and need it live.",
  },
  {
    id: "saas",
    layer: "SaaS",
    cadence: "Monthly",
    whatYouGet:
      "Ongoing access to the platform or line you commissioned: assistants, routing, knowledge, and the customer channels in scope.",
    howYouUseIt:
      "Your staff log in. Your customers use Voice, WhatsApp, web, or the portal you configured. The monthly fee follows that scope — not a public price card.",
    typicalWhen: "After go-live, when the system is how work gets done.",
  },
  {
    id: "managed-ai",
    layer: "Managed AI",
    cadence: "Monthly",
    whatYouGet:
      "REVNCIA stays: monitoring, prompt and knowledge updates, cost watch, and improvement so the facility does not quietly get worse.",
    howYouUseIt:
      "You keep a named owner. We report usage and issues by the channel in the operations schedule. This is not a 24/7 guaranteed SLA unless a later contract says so.",
    typicalWhen: "You want the AI to stay trustworthy after the project team leaves.",
  },
  {
    id: "usage",
    layer: "Usage / API",
    cadence: "Variable",
    whatYouGet:
      "Capacity that moves with calls, messages, tokens, or document volume — billed on the meters written in the contract.",
    howYouUseIt:
      "Meters are agreed before go-live. We do not invent token prices, WhatsApp message rates, or a PKR package.",
    typicalWhen: "Voice, WhatsApp, Gateway, or document volume will grow or shrink.",
  },
];

export const honestyLimits: HonestyLimit[] = [
  {
    id: "cyber",
    title: "Cybersecurity is implementation — not a full cyber firm",
    text: "You can receive identity, access, logs, AI-use rules, and incident workflows we implement. Advanced testing, certifications, and deep incident retainers are done with specialist partners. We do not present REVNCIA as a complete cybersecurity practice on day one.",
    slugs: ["cybersecurity", "ai-governance", "cloud"],
  },
  {
    id: "healthcare",
    title: "Healthcare is administrative — not clinical care",
    text: "You can receive appointments, reminders, documents, portals, and call handling designed with privacy first. We do not diagnose, treat, prescribe, or replace a clinician. Local law and specialists decide what may go live.",
    slugs: ["healthcare"],
  },
  {
    id: "marketing",
    title: "Marketing is a capability — not the company identity",
    text: "You can receive content systems, lead flows, email, and campaigns that write back to CRM. REVNCIA is an AI digital transformation and public-impact company. Marketing automation is one facility, not the name on the door.",
    slugs: ["marketing"],
  },
  {
    id: "advice",
    title: "No medical, legal, or financial diagnosis",
    text: "Nothing we publish is medical, legal, or investment advice. Document and Voice facilities can draft or summarise; a qualified person must check anything that can harm a person, a case, or a regulated file.",
    slugs: ["document-intelligence", "healthcare", "financial-services", "voice-ai"],
  },
];

export const customerSupport = {
  email: "info@revncia.com",
  office: "525 Randall Ave Ste 100, Cheyenne, WY, USA",
  hours:
    "Human REVNCIA correspondence is email-first from the Cheyenne office on ordinary US business days. We do not publish a guaranteed response-time SLA.",
  channelNote:
    "Voice, WhatsApp, web chat, and citizen portals can run on the hours your organisation sets after go-live. That is your facility. It is not a promise that a REVNCIA person is on the line at all hours.",
  channels: [
    {
      name: "Email",
      detail:
        "info@revncia.com — name who waits in the subject so the right person replies.",
    },
    {
      name: "Office",
      detail: "525 Randall Ave Ste 100, Cheyenne, WY, USA. Not a walk-in helpdesk.",
    },
    {
      name: "Inquiry form",
      detail:
        "Write from the inquiry form — it opens a draft you can review. There is no invented phone number or WhatsApp token.",
    },
  ],
} as const;

const slugToFacilityIds: Record<string, FacilityId[]> = {
  "voice-ai": ["voice"],
  "customer-operations": ["voice", "whatsapp"],
  "whatsapp-ai": ["whatsapp"],
  retail: ["whatsapp"],
  marketing: ["whatsapp"],
  "intelligent-websites": ["whatsapp", "ai-gateway"],
  "ai-platform": ["ai-gateway"],
  "knowledge-ai": ["ai-gateway", "documents"],
  intelligence: ["ai-gateway"],
  "ai-governance": ["ai-gateway"],
  "command-center": ["ai-gateway"],
  "digital-workforce": ["ai-gateway"],
  "managed-ai": ["ai-gateway", "operating-support"],
  crm: ["crm-erp"],
  erp: ["crm-erp"],
  integrations: ["crm-erp"],
  "sales-ai": ["crm-erp"],
  "hr-ai": ["crm-erp"],
  "finance-ai": ["crm-erp"],
  "procurement-ai": ["crm-erp"],
  "document-intelligence": ["documents"],
  "process-automation": ["documents"],
  "workflow-rpa": ["documents"],
  "data-transformation": ["documents"],
  government: ["citizen-services"],
  education: ["citizen-services"],
  healthcare: ["citizen-services"],
  "digital-experience": ["citizen-services"],
  "industry-solutions": ["citizen-services"],
  software: ["citizen-services"],
  "financial-services": ["crm-erp", "documents"],
  consulting: ["operating-support"],
  audits: ["operating-support"],
  academy: ["operating-support"],
  cloud: ["operating-support"],
  cybersecurity: ["ai-gateway", "operating-support"],
};

export function facilityById(id: string) {
  return customerFacilities.find((f) => f.id === id);
}

export function facilitiesForSlug(slug: string): CustomerFacility[] {
  const ids = slugToFacilityIds[slug] ?? [];
  return ids
    .map((id) => facilityById(id))
    .filter((f): f is CustomerFacility => Boolean(f));
}

export function honestyForSlug(slug: string): HonestyLimit[] {
  return honestyLimits.filter((h) => h.slugs.includes(slug));
}
