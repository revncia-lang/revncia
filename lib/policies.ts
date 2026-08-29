import { company } from "./site";

export const policies = [
  {
    slug: "copyright",
    navLabel: "Copyright",
    title: "Who owns the work — and what you keep after you buy",
    summary:
      "All rights reserved. Customers keep what the signed statement of work says. Drafts stay ours until then.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "All rights reserved",
        body: `© 2026 ${company.name}. All rights reserved. The name ${company.name}, the stylised R mark, the motto “${company.motto}”, the attendant image, photographs, diagrams, copy, and software interfaces published on this website are owned by ${company.name} or used under licence. You may view them in a browser. You may not copy, scrape, train models on, resell, or rebrand them without written permission.`,
      },
      {
        heading: "What you own after you buy",
        body: "Work we design or implement for a paying client is owned as the signed statement of work or licence says. Until that document is signed, drafts, architectures, and proposals remain REVNCIA property. Your customer lists, citizen files, and recordings never become our marketing content. Pictures and graphs on this website stay REVNCIA’s unless a licence says otherwise.",
      },
      {
        heading: "What you may do as a visitor",
        body: "You may read this site to decide whether to write to us. You may not copy the attendant image, scenes, or copy into another product, or train a model on this site, without written permission.",
      },
      {
        heading: "Third-party marks",
        body: "Names such as WhatsApp, CRM, and ERP appear as ordinary descriptions of capabilities. They remain the property of their owners. REVNCIA is not those vendors.",
      },
      {
        heading: "Permission",
        body: `To request a licence or takedown, write ${company.email} with the subject line “Copyright”. Include the URL and what you need.`,
      },
    ],
  },
  {
    slug: "privacy",
    navLabel: "Privacy",
    title: "How we treat your name, mail, and programme data",
    summary:
      "Inquiry mail is for a reply. Commissioned Voice, WhatsApp, CRM, and citizen systems follow your instructions and the law.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "Who we are",
        body: `${company.name} is ${company.descriptor.toLowerCase()}, led by ${company.founder}, ${company.founderTitle}. Published office: ${company.address}. Mail: ${company.email}.`,
      },
      {
        heading: "This website",
        body: "The contact form opens your own email client. We do not store that draft. If you send mail, we use your name, organisation, address, and message only to reply and to reach the right person. We do not sell inquiry lists.",
      },
      {
        heading: "The attendant and assistant",
        body: "If you allow actions, speech runs in your browser. A first name you give the assistant may be kept in your browser only (local storage) so it can greet you. Clear site data to remove it. We do not require an account to read this site.",
      },
      {
        heading: "Commissioned systems",
        body: "Programmes for Voice, WhatsApp, CRM, ERP, documents, or citizen services process personal data under the client’s instructions, lawful basis, and retention schedule. Healthcare work is administrative and communication-first. Privacy is a design constraint, not an add-on. We are not a clinical-care provider. We do not invent a retention period or a WhatsApp token.",
      },
      {
        heading: "What we do not do with inquiry mail",
        body: "We do not sell inquiry lists, invent a newsletter you did not ask for, or publish your organisation as a case study unless you agree in writing.",
      },
      {
        heading: "Requests",
        body: `To access, correct, or delete inquiry mail we hold, write ${company.email} with the subject “Privacy”. Public-sector and enterprise programmes follow the contract and applicable law, including U.S. state privacy rules where they apply.`,
      },
    ],
  },
  {
    slug: "terms",
    navLabel: "Terms",
    title: "When a programme starts — and what you can rely on",
    summary:
      "These pages are information. A programme starts only when both sides accept scope, fees, and data terms in writing.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "What you can rely on — and what you cannot",
        body: "What you read here describes offerings, facilities, and how to write to us. Example pictures and graphs are not a quote, a service-level promise, a PKR package, or legal, medical, or investment advice. No WhatsApp token or public Voice number is published here.",
      },
      {
        heading: "Acceptable use",
        body: "Do not attack, scrape at scale, impersonate REVNCIA, or use the site to send unlawful content. The attendant and assistant are for orientation. They do not bind the company.",
      },
      {
        heading: "Commissioning",
        body: "A programme starts only when both sides sign (or otherwise accept in writing) scope, fees, and data terms. You can buy consulting, implementation, monthly access, managed AI, or usage meters. Figures in plans are scenarios, not public prices.",
      },
      {
        heading: "Liability",
        body: "To the extent Wyoming law allows, REVNCIA is not liable for decisions you make from public website copy alone. Commissioned work follows the signed limits of liability.",
      },
      {
        heading: "Law",
        body: `The published office is ${company.address}. Website terms are governed by the laws of the State of Wyoming, without regard to conflict-of-law rules, unless a signed contract says otherwise.`,
      },
    ],
  },
  {
    slug: "confidentiality",
    navLabel: "Confidentiality",
    title: "How we treat your files — and the limit of our cyber offer",
    summary:
      "Briefs stay confidential. Identity and AI-use rules are design inputs. We are not a full cybersecurity firm.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "Confidentiality",
        body: "Briefs, credentials, and files you send to commission work are treated as confidential. We share them only with people who need them to respond or deliver, or when the law requires it.",
      },
      {
        heading: "Security in delivery",
        body: "Identity, access, logging, and rules for AI use are design inputs. We apply least privilege. We partner for advanced cybersecurity rather than claiming to be a full cyber firm.",
      },
      {
        heading: "If something in our scope breaks",
        body: "Recovery and records expectations are set in the programme, not on this public site. Write info@revncia.com and name the service line or facility. We do not invent a status-page URL or a five-minute SLA here. Voice and WhatsApp hours after go-live are your facility — not a promise that a REVNCIA person is on the line at all hours.",
      },
      {
        heading: "Conduct",
        body: "Staff and contractors are expected to follow integrity, accountability, transparency, respect, client success, confidentiality, compliance, innovation, and professional excellence — the same code listed on About.",
      },
    ],
  },
] as const;

export function policyBySlug(slug: string) {
  return policies.find((p) => p.slug === slug);
}
