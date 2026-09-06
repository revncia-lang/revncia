"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { btnPrimary, shell, field } from "@/lib/ui";

const guidance = [
  ["Strengthen security", "Use governed access, clear ownership, and an auditable operating record."],
  ["Protect business value", "Connect service decisions to measurable outcomes, cost visibility, and accountable owners."],
  ["Move faster", "Give teams one place to coordinate requests, workflows, knowledge, and improvement."],
] as const;

export default function LoginPage() {
  const [message, setMessage] = useState("");

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Login requires a verified REVNCIA account session. Payment confirmation and account provisioning must be completed before OS access is granted.");
  }

  return <main className="min-h-[70vh] bg-[#f5f5f5] py-16">
    <div className={`${shell} mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]`}>
      <section>
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0078d4]">Customer access</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#505050]">Log in to REVNCIA</h1>
        <p className="mt-4 max-w-xl leading-7 text-[#606060]">Access your workspace, service requests, project information, governed AI capabilities, and operating guidance.</p>
        <form onSubmit={submitLogin} className="mt-8 grid max-w-md gap-5 border border-[#d2d2d2] bg-white p-6 shadow-[0_12px_35px_rgba(11,31,51,.08)]">
          <label className="grid gap-2 text-sm font-semibold text-[#505050]">Work email<input required type="email" name="email" autoComplete="email" className={field} /></label>
          <label className="grid gap-2 text-sm font-semibold text-[#505050]">Password<input required type="password" name="password" autoComplete="current-password" className={field} /></label>
          <button type="submit" className={btnPrimary}>Log in</button>
          {message ? <p className="text-sm leading-6 text-[#505050]" role="status">{message}</p> : null}
        </form>
        <p className="mt-5 text-sm text-[#606060]">New to REVNCIA? <Link href="/signup" className="font-semibold text-[#0078d4] hover:underline">Create your customer account</Link></p>
      </section>
      <section className="border border-[#d2d2d2] bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0078d4]">After you join</p>
        <h2 className="mt-3 text-2xl font-semibold text-[#505050]">A better operating system starts with informed teams.</h2>
        <div className="mt-8 grid gap-5">{guidance.map(([title, detail]) => <article key={title} className="border-l-4 border-[#0078d4] bg-[#f5f5f5] p-5"><h3 className="font-semibold text-[#505050]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#606060]">{detail}</p></article>)}</div>
      </section>
    </div>
  </main>;
}
