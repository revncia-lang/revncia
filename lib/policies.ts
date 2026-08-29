import { company } from "./site";

export const policies = [
  {
    slug: "copyright",
    navLabel: "Copyright",
    title: "Copyright and intellectual property",
    summary:
      "All rights reserved. Who owns the site, the marks, and work we deliver.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "All rights reserved",
        body: `© 2026 ${company.name}. All rights reserved. The name ${company.name}, the stylised R mark, the motto “${company.motto}”, the attendant image, photographs, diagrams, copy, and software interfaces published on this website are owned by ${company.name} or used under licence. You may view them in a browser. You may not copy, scrape, train models on, resell, or rebrand them without written permission.`,
      },
      {
        heading: "Client work",
        body: "Work we design or implement for a paying client is owned as the signed statement of work or licence says. Until that document is signed, drafts, architectures, and proposals remain REVNCIA property. Client data never becomes our marketing content.",
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
    title: "Privacy",
    summary:
      "How we handle inquiry mail, site use, and personal data in delivery.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "Who we are",
        body: `${company.name} is ${company.descriptor.toLowerCase()}, led by ${company.founder}, ${company.founderTitle}. Published office: ${company.address}. Mail: ${company.email}.`,
      },
      {
        heading: "This website",
        body: "The contact form opens your own email client. We do not store that draft on this site. If you send mail, we use your name, organisation, address, and message only to reply and to route the brief. We do not sell inquiry lists.",
      },
      {
        heading: "The attendant and assistant",
        body: "If you allow actions, speech runs in your browser. A first name you give the assistant may be kept in your browser only (local storage) so it can greet you. Clear site data to remove it. We do not require an account to read this site.",
      },
      {
        heading: "Commissioned systems",
        body: "Programmes for Voice, WhatsApp, CRM, ERP, documents, or citizen services process personal data under the client’s instructions, lawful basis, and retention schedule. Healthcare work is administrative and communication-first. Privacy is a design constraint, not an add-on. We are not a clinical-care provider.",
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
    title: "Terms of use",
    summary: "Rules for using this website. Delivery contracts sit on top.",
    updated: "29 August 2026",
    sections: [
      {
        heading: "The site is information",
        body: "These pages describe offerings, stages, and how to write to us. Graphs and scenes are illustrative. They are not a quote, a service-level promise, or legal, medical, or investment advice.",
      },
      {
        heading: "Acceptable use",
        body: "Do not attack, scrape at scale, impersonate REVNCIA, or use the site to send unlawful content. The attendant and assistant are for orientation. They do not bind the company.",
      },
      {
        heading: "Commissioning",
        body: "A programme starts only when both sides sign (or otherwise accept in writing) scope, fees, and data terms. Five commercial layers — consulting, implementation, SaaS, managed AI, and usage — are described on About. Figures in internal plans are scenarios, not website prices.",
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
    title: "Confidentiality and security",
    summary:
      "How we treat client information, identity, and the limits of our cyber offer.",
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
        heading: "Continuity",
        body: "Recovery and records expectations are set in the programme, not on this public site. If something goes wrong, write the published email and name the service line.",
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
