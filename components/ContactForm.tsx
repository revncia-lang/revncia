"use client";

import { FormEvent, useState } from "react";
import { company, solutions } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const org = String(data.get("org") || "");
    const email = String(data.get("email") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Organization: ${org}`,
      `Email: ${email}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Inquiry — ${interest || "REVNCIA"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-[color:var(--line)] bg-white p-6 text-sm leading-relaxed text-[color:var(--muted)]">
        Your email client should open with the message ready for{" "}
        <a className="text-[color:var(--ink)] underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        . If it does not, write us directly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm">
        <span>Name</span>
        <input
          required
          name="name"
          autoComplete="name"
          className="border border-[color:var(--line)] bg-white px-3 py-2.5 outline-none focus:border-[color:var(--ink)]"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Organization</span>
        <input
          name="org"
          autoComplete="organization"
          className="border border-[color:var(--line)] bg-white px-3 py-2.5 outline-none focus:border-[color:var(--ink)]"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="border border-[color:var(--line)] bg-white px-3 py-2.5 outline-none focus:border-[color:var(--ink)]"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Interest</span>
        <select
          name="interest"
          className="border border-[color:var(--line)] bg-white px-3 py-2.5 outline-none focus:border-[color:var(--ink)]"
          defaultValue="Digital transformation"
        >
          {solutions.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>General inquiry</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>How can we help?</span>
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y border border-[color:var(--line)] bg-white px-3 py-2.5 outline-none focus:border-[color:var(--ink)]"
        />
      </label>
      <button
        type="submit"
        className="mt-2 w-fit bg-[color:var(--ink)] px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-[color:var(--paper)]"
      >
        Send inquiry
      </button>
    </form>
  );
}
