import { OSModulePage } from "@/components/OSModulePage";

export default function Page() {
  return <OSModulePage kicker="REVNCIA OS" title="CRM Operations" description="Connect CRM processes to AI, workflows, communications and analytics so teams can see the complete customer journey." scene="os-crm" metrics=[["100%","Shared record","Target operating principle"],["05","Core pipelines","Illustrative CRM domains"],["AI","Assistive layer","Role-based copilots"]] items=[{ title: "Customer 360", description: "Unify interactions, cases, opportunities and service history." },{ title: "Sales automation", description: "Automate qualification, follow-up, routing and reporting." },{ title: "Service intelligence", description: "Give service teams context, summaries and governed next actions." }] actionHref="/os" actionLabel="Back to Command Center" />;
}
