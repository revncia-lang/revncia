"use client";

import { FormEvent, useState } from "react";
import { offerings } from "@/lib/catalog";
import { company } from "@/lib/site";

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
      <p className="border border-cyan-400/20 bg-black/40 p-6 text-sm leading-relaxed text-slate-400">
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
          className="border border-cyan-400/25 bg-black/50 px-3 py-2.5 outline-none focus:border-cyan-400"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Organization</span>
        <input
          name="org"
          autoComplete="organization"
          className="border border-cyan-400/25 bg-black/50 px-3 py-2.5 outline-none focus:border-cyan-400"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="border border-cyan-400/25 bg-black/50 px-3 py-2.5 outline-none focus:border-cyan-400"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Interest</span>
        <select
          name="interest"
          className="border border-cyan-400/25 bg-black/50 px-3 py-2.5 outline-none focus:border-cyan-400"
          defaultValue={offerings[0].name}
        >
          {offerings.map((s) => (
            <option key={s.slug}>{s.name}</option>
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
          className="resize-y border border-cyan-400/25 bg-black/50 px-3 py-2.5 outline-none focus:border-cyan-400"
        />
      </label>
      <button
        type="submit"
        className="mt-2 w-fit bg-cyan-400 px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-black"
      >
        Send inquiry
      </button>
    </form>
  );
}
