/** Problems customers keep facing when they do not use this REVNCIA line. */
export const painPoints: Record<string, string[]> = {
  "ai-platform": [
    "Staff pick random AI tools with no shared rules, so answers conflict.",
    "AI bills grow because every team uses expensive models for simple work.",
    "Nobody can show a board or auditor who asked what, or who was allowed to see it.",
    "Knowledge stays in one chatbot while the next project starts from zero.",
  ],
  "customer-operations": [
    "Customers wait on hold or repeat their story on every channel.",
    "Leads go cold because nights and weekends have no coverage.",
    "Complaints sit in inboxes instead of becoming tickets with owners.",
    "The business cannot measure how many questions were really solved.",
  ],
  "whatsapp-ai": [
    "WhatsApp chats live on one person’s phone and disappear when they leave.",
    "Leads ask a price and never get a follow-up.",
    "Orders and payment notices are typed by hand and arrive late.",
    "There is no clean handoff to a human, so customers feel ignored.",
  ],
  "voice-ai": [
    "The front desk misses calls while helping people in the lobby.",
    "After-hours callers hang up and choose a competitor.",
    "Call notes never reach the CRM, so the next agent starts blind.",
    "Managers cannot hear why customers are unhappy.",
  ],
  crm: [
    "Customer history sits in spreadsheets, inboxes, and people’s heads.",
    "Sales people chase the same lead twice or lose it entirely.",
    "Follow-ups depend on memory, not a pipeline.",
    "Leaders cannot see which offers actually convert.",
  ],
  erp: [
    "Finance, stock, and HR each keep a different version of the truth.",
    "Month-end close is a scramble of exports and corrections.",
    "Buying and inventory surprises appear too late to fix cheaply.",
    "Reports cannot be trusted in a board meeting.",
  ],
  "process-automation": [
    "Simple approvals wait days because someone is travelling.",
    "The same form is retyped into three systems.",
    "Errors repeat because the process lives in a person’s habit, not a system.",
    "New staff take months to learn unofficial workarounds.",
  ],
  "document-intelligence": [
    "Contracts and invoices pile up unread.",
    "Nobody can answer “what did we promise?” without days of search.",
    "Invoice data is typed by hand and numbers go wrong.",
    "Risk in old documents is found only after a dispute.",
  ],
  "knowledge-ai": [
    "Staff ask colleagues the same policy question every week.",
    "Wrong answers spread because the latest SOP is not where people look.",
    "New hires cannot find how work is supposed to be done.",
    "Sensitive files get pasted into public chat tools.",
  ],
  intelligence: [
    "Dashboards show last month, not what is about to break.",
    "Leaders argue from gut feel because forecasts are missing.",
    "Problems are spotted after money is already lost.",
    "Reports take so long to build that the decision has already passed.",
  ],
  cybersecurity: [
    "Everyone shares logins “just this once.”",
    "There is no record of who changed what.",
    "A laptop loss becomes a full data scare.",
    "AI tools are used with customer data and no rules.",
  ],
  "data-transformation": [
    "Reports disagree because names and codes are not cleaned.",
    "Moving to a new system copies the old mess.",
    "AI projects stall because the data is not ready.",
    "Nobody owns a single customer or product record.",
  ],
  cloud: [
    "Old servers fail and backups were never tested.",
    "Cloud bills rise with no owner watching them.",
    "A disaster means days of downtime.",
    "Apps cannot grow without buying more hardware that sits idle.",
  ],
  software: [
    "Off-the-shelf tools almost fit, so staff keep using paper beside them.",
    "Citizens or customers cannot finish a task online.",
    "Field staff still carry clipboards.",
    "Every new need becomes another disconnected app.",
  ],
  integrations: [
    "Staff copy data between CRM, WhatsApp, and accounts by hand.",
    "A sale in one system never updates stock in another.",
    "AI cannot help because it is not connected to live records.",
    "One broken export stops the whole week’s work.",
  ],
  government: [
    "Citizens queue, call, and still do not know the status of a case.",
    "Files move slowly between desks.",
    "Leaders cannot show how many people were served, or how long it took.",
    "Language and access barriers leave people behind.",
  ],
  education: [
    "Parents only hear from the school when something is wrong.",
    "Admissions and attendance eat staff time every day.",
    "Teachers repeat the same answers instead of teaching.",
    "The institution cannot see which students need help early.",
  ],
  healthcare: [
    "Patients miss appointments because reminders are manual.",
    "Front-office staff drown in forms instead of helping people.",
    "Records are hard to find when a caller needs an answer.",
    "Privacy is at risk if tools are not chosen with care.",
  ],
  "financial-services": [
    "Onboarding takes weeks of paper and repeat visits.",
    "Service teams cannot see the full customer file.",
    "Compliance evidence is gathered in a panic.",
    "Fraud and risk signals arrive after the loss.",
  ],
  retail: [
    "Shoppers ask on WhatsApp and get a slow human reply — or none.",
    "Stockouts and overstock happen in the same week.",
    "The website and the store do not share the same inventory.",
    "Repeat customers are not recognised.",
  ],
  marketing: [
    "Campaigns go out with no link to CRM, so results are guessed.",
    "The same people get the same message too often.",
    "Leads are not qualified before sales time is spent.",
    "Content is slow, so campaigns miss the moment.",
  ],
  "sales-ai": [
    "Good leads wait while the team works the loudest inbox.",
    "Meetings happen with no notes in the CRM.",
    "Proposals are late and generic.",
    "Nobody sees churn until the customer is already gone.",
  ],
  "hr-ai": [
    "CVs sit unread while good people take other jobs.",
    "Onboarding is a scavenger hunt for forms.",
    "Staff cannot find the leave or policy answer they need.",
    "HR spends days on scheduling instead of people.",
  ],
  "finance-ai": [
    "Invoices wait in email until someone has time to type them.",
    "Cash position is known only after a painful spreadsheet.",
    "Budgets are watched too late.",
    "Managers wait on packs that are already out of date.",
  ],
  "procurement-ai": [
    "Purchases skip approval “because it was urgent.”",
    "The same item is bought at three different prices.",
    "Delivery and invoice never match the order.",
    "Vendor risk is discovered after a failure.",
  ],
  "workflow-rpa": [
    "Work stops when one person is away.",
    "Email is used as a workflow tool and things get lost.",
    "Humans do copy-paste that a system should do.",
    "There is no proof of who approved what, and when.",
  ],
  "digital-experience": [
    "The website looks like a brochure, not a place to get work done.",
    "Customers cannot self-serve simple tasks.",
    "Kiosks or counters have no link to back-office systems.",
    "People who need accessibility support are blocked.",
  ],
  "intelligent-websites": [
    "The site collects no leads, or leads never reach CRM.",
    "Visitors cannot find answers and leave.",
    "There is no assistant, booking, or account — only pages of text.",
    "Support still starts with a phone number on the footer.",
  ],
  "managed-ai": [
    "A project goes live and then slowly gets worse with no owner.",
    "Models and prompts are never updated as the business changes.",
    "Costs rise and quality falls at the same time.",
    "Knowledge bases go stale and staff stop trusting the AI.",
  ],
  "ai-governance": [
    "Staff use public AI tools with private data.",
    "There is no policy for what AI is allowed to decide.",
    "When something goes wrong, there is no audit trail.",
    "Regulators or boards ask questions the organisation cannot answer.",
  ],
  academy: [
    "Leaders buy tools before teams know how to use them safely.",
    "Fear and rumour fill the gap where training should be.",
    "Government and enterprise staff are left to learn from random videos.",
    "There is no shared language for AI risk and value.",
  ],
  consulting: [
    "Projects start with software instead of a clear problem.",
    "Automation is applied where judgement was needed — or the reverse.",
    "Cost and ROI are unknown until the invoice arrives.",
    "Risks surface after go-live, not in the plan.",
  ],
  audits: [
    "The organisation does not know how mature it really is.",
    "Budget is spent on the loudest vendor, not the biggest gap.",
    "Security and process holes stay hidden until an incident.",
    "There is no 12–36 month map, only a pile of ideas.",
  ],
  "command-center": [
    "Executives see five dashboards and still cannot explain a drop in revenue.",
    "Alerts arrive with no owner.",
    "AI activity is invisible, so spend cannot be governed.",
    "Decisions wait for a weekly pack instead of a live picture.",
  ],
  "digital-workforce": [
    "Every team builds a one-off bot that nobody else can reuse.",
    "There is no named “who does this work” when a person is off.",
    "Permissions are too wide, so agents can see too much.",
    "Work is automated without a workflow or an owner.",
  ],
  "industry-solutions": [
    "Every sale is a custom project, so delivery is slow and uneven.",
    "Banks, schools, or agencies get a generic tool that misses their mandate.",
    "Lessons from one client never become a product for the next.",
    "Buyers cannot compare a clear pack — only a long proposal.",
  ],
};

export const plainWhy: Record<string, string> = {
  "ai-platform":
    "This is the shared engine under all REVNCIA assistants. It chooses models, controls cost, checks who may see what, and keeps a log. Without it, every team buys a different chatbot and nobody can govern AI.",
  "customer-operations":
    "We run customer service across web, WhatsApp, phone, email, and more as one monthly platform. Customers get answers faster. Your team only handles the hard cases.",
  "whatsapp-ai":
    "If you already sell or support on WhatsApp, we turn those chats into a proper system: bots, follow-ups, payments notices, and a path to a human — plus CRM.",
  "voice-ai":
    "REVNCIA Voice answers and places calls for reception, sales, bookings, and service. It writes summaries into your CRM and passes the call to a person when needed.",
  crm: "We do not only install CRM. We fix how you win and keep customers: pipeline, follow-up, and AI help inside the same system of record.",
  erp: "ERP is the backbone for money, stock, people, and projects. We implement it cleanly and add AI that helps finance, buying, HR, and operations — numbers you can trust.",
  "process-automation":
    "We look at how work really happens, then move it from paper to digital to automated to AI-assisted. Approvals, onboarding, and invoices stop waiting on one person.",
  "document-intelligence":
    "We teach systems to read PDFs, contracts, invoices, and forms. You can ask what you promised in thousands of files instead of searching cupboards.",
  "knowledge-ai":
    "Staff ask a question in plain language and get an answer from your policies and systems — only the files they are allowed to see.",
  intelligence:
    "We go past static dashboards: forecasts, alerts, and explanations so leaders can act before the month is already lost.",
  cybersecurity:
    "We start with identity, access, logs, and AI-use rules. For deep cyber work we partner with specialists. The goal is fewer accidents and a story you can tell a board.",
  "data-transformation":
    "Clean, connected data is what makes CRM, ERP, and AI work. We integrate, clean, and govern data so reports and models stop arguing with each other.",
  cloud: "We help you leave fragile old servers: move, protect, watch cost, and recover if something fails. Later this can become REVNCIA Cloud Operations.",
  software:
    "When a package is the wrong shape, we build portals, apps, and APIs — including government and field work — so people can finish the job on a screen.",
  integrations:
    "We connect the systems you already pay for so staff stop copy-pasting. CRM, ERP, WhatsApp, payments, and AI share one flow.",
  government:
    "Citizens get status, bookings, and help in their language. Offices get case files and numbers: how many served, how long it took, what it cost.",
  education:
    "Schools and universities get help with admissions, attendance, parent messages, and staff questions so teachers can teach.",
  healthcare:
    "We focus on admin, reminders, documents, and call handling — with privacy first. Clinical care stays with clinicians. We use specialists where the law requires it.",
  "financial-services":
    "Banks and insurers need faster onboarding, a full customer view, and evidence for compliance. We add AI where it reduces waiting without hiding risk.",
  retail:
    "Shops and e-commerce get assistants, stock insight, WhatsApp selling, and demand signals so you sell what you have and keep customers coming back.",
  marketing:
    "This is automation, not our whole identity: content, leads, email, and campaigns that write back into CRM so you can see what worked.",
  "sales-ai":
    "From first lead to renewal: qualify, follow up, meet, propose, and update CRM. The team spends time on deals, not typing.",
  "hr-ai":
    "Hiring, screening, onboarding, and policy answers become faster. People get self-service. HR sees the workforce, not only a pile of CVs.",
  "finance-ai":
    "Invoices, expenses, cash, and board packs move faster with fewer typing errors. Finance staff check exceptions instead of every line.",
  "procurement-ai":
    "From request to payment, with a trail. AI helps compare vendors and prices so urgent buying does not become the expensive habit.",
  "workflow-rpa":
    "Email, forms, CRM, ERP, and WhatsApp become one workflow with human approval where it matters. This is often where you see the saving first.",
  "digital-experience":
    "Websites, portals, and kiosks that let people do the task — not only read about you — including better access for more users.",
  "intelligent-websites":
    "We do not sell “just a website.” The site can greet, capture a lead, search knowledge, book a slot, and open a ticket — then land in CRM.",
  "managed-ai":
    "After go-live we stay: watch quality and cost, update knowledge, and keep the system trustworthy. AI that is left alone usually gets worse.",
  "ai-governance":
    "Rules, permissions, logs, and human checks so AI can be explained to a board or a public body. More AI without this becomes a risk project.",
  academy:
    "Training for leaders, staff, and government so tools are used with skill and care. Courses, contracts, and certificates are how this grows.",
  consulting:
    "Before software, we help you decide where AI belongs, what stays human, what it may cost, and what could go wrong. You leave with a roadmap.",
  audits:
    "A formal look at people, process, technology, data, AI, and security. You get a maturity picture, gaps, and a 12 / 24 / 36-month plan. A common first step for large buyers.",
  "command-center":
    "One executive view of money, customers, operations, AI use, and risk — plus the ability to ask why a number moved, using data you authorised.",
  "digital-workforce":
    "Named AI workers (sales, support, finance, HR, operations, research, executive) with limits and workflows — not a pile of disconnected bots.",
  "industry-solutions":
    "Ready packs for banks, government, universities, healthcare, retail, NGOs, and enterprises so you are not buying a brand-new custom project every time.",
};
