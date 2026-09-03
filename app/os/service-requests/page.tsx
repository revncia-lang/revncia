import Link from "next/link";
import { shell } from "@/lib/ui";

const rows = [
  ["SR-2026-001", "AI Readiness Assessment", "In Review", "High"],
  ["SR-2026-002", "Process Automation", "New", "Medium"],
  ["SR-2026-003", "Data Strategy", "In Progress", "High"],
  ["SR-2026-004", "AI Agent Development", "In Progress", "High"],
  ["SR-2026-005", "Workflow Automation", "Completed", "Low"],
];

export default function ServiceRequests() {
  return <div className="min-h-[calc(100vh-72px)] bg-[radial-gradient(ellipse_70%_40%_at_70%_0%,rgba(98,217,255,.06),transparent_65%)]"><div className={`${shell} py-10 lg:py-14`}>
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-200/55">Services / Requests</div><h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">Service Requests</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-white/42">Manage discovery, assessment, approvals and implementation requests from one operating queue.</p></div><Link href="/os/services" className="inline-flex w-fit rounded-xl border border-white/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65 hover:border-white/35 hover:text-white">Browse catalog →</Link></div>
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"><div className="grid grid-cols-[1.1fr_2fr_1.2fr_1fr] border-b border-white/10 px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25"><span>ID</span><span>Service</span><span>Status</span><span>Priority</span></div>{rows.map(r=><div key={r[0]} className="grid grid-cols-[1.1fr_2fr_1.2fr_1fr] items-center border-b border-white/7 px-5 py-4 text-xs last:border-0"><span className="font-mono text-white/35">{r[0]}</span><span className="text-white/75">{r[1]}</span><span><span className="rounded-md border border-cyan-200/15 bg-cyan-200/5 px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-cyan-100/70">{r[2]}</span></span><span className="text-white/45">{r[3]}</span></div>)}</div>
  </div></div>;
}
