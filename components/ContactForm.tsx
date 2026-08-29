"use client";

import { FormEvent, useState } from "react";
import { offerings } from "@/lib/catalog";
import { customerFacilities } from "@/lib/facilities";
import { company } from "@/lib/site";
import { btnPrimary, field } from "@/lib/ui";

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
      <p className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-relaxed break-words text-slate-400">
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
          Name the work so the right person replies.
        </span>
        <select
          name="interest"
          className={field}
          defaultValue={offerings[0].name}
        >
          <optgroup label="Service lines">
            {offerings.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
          </optgroup>
          <optgroup label="Customer facilities">
            {customerFacilities.map((f) => (
              <option key={f.id}>{f.name}</option>
            ))}
          </optgroup>
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
        className={`${btnPrimary} mt-1 w-full sm:w-fit`}
      >
        Write to us
      </button>
    </form>
  );
}
