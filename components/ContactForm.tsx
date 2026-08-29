"use client";

import { FormEvent, useState } from "react";
import { offerings } from "@/lib/catalog";
import { company } from "@/lib/site";

const field =
  "w-full min-w-0 border border-cyan-400/25 bg-black/50 px-3 py-2.5 text-sm leading-relaxed text-cyan-50 outline-none focus:border-cyan-400";

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
      <p className="border border-cyan-400/20 bg-black/40 p-6 text-sm leading-relaxed break-words text-slate-400">
        Your email client should open with the message ready for{" "}
        <a className="break-all text-cyan-200 underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        . If it does not, write us directly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid w-full min-w-0 gap-5">
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-cyan-50">Name</span>
        <span className="text-xs leading-relaxed text-slate-500">
          The person we should address in the reply.
        </span>
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-cyan-50">Organization</span>
        <span className="text-xs leading-relaxed text-slate-500">
          Company, ministry, university, or NGO — optional.
        </span>
        <input name="org" autoComplete="organization" className={field} />
      </label>
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-cyan-50">Email</span>
        <span className="text-xs leading-relaxed text-slate-500">
          We reply to this address from {company.email}.
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className={field}
        />
      </label>
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-cyan-50">Interest</span>
        <span className="text-xs leading-relaxed text-slate-500">
          Pick the service line so the brief is routed correctly.
        </span>
        <select
          name="interest"
          className={field}
          defaultValue={offerings[0].name}
        >
          {offerings.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>General inquiry</option>
        </select>
      </label>
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-cyan-50">How can we help?</span>
        <span className="text-xs leading-relaxed text-slate-500">
          Volume, systems in use, and the outcome you need. Wrap as you type —
          the field expands.
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className={`${field} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="mt-1 w-full bg-cyan-400 px-6 py-3 text-[0.75rem] tracking-[0.16em] uppercase text-black sm:w-fit"
      >
        Send inquiry
      </button>
    </form>
  );
}
