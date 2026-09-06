"use client";

import { FormEvent, useState } from "react";
import { offerings } from "@/lib/catalog";
import { customerFacilities } from "@/lib/facilities";
import { btnPrimary, field } from "@/lib/ui";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setError("");
    const response = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: data.get("name"), organization: data.get("org"), email: data.get("email"), interest: data.get("interest"), message: data.get("message") }) });
    const result = await response.json().catch(() => ({})) as { error?: string };
    if (!response.ok) { setError(result.error || "The message could not be sent."); return; }
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl border border-cyan-200/15 bg-cyan-200/[.05] p-6 text-sm leading-relaxed break-words text-white/65">
        Your message has been submitted securely. Our team will review it and respond through the contact details you provided.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid w-full min-w-0 gap-5">
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-[#505050]">Name</span>
        <span className="text-xs leading-relaxed text-[#606060]">
          The person we should address in the reply.
        </span>
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-[#505050]">Organization</span>
        <span className="text-xs leading-relaxed text-[#606060]">
          Company, ministry, university, or NGO — optional.
        </span>
        <input name="org" autoComplete="organization" className={field} />
      </label>
      <label className="grid min-w-0 gap-1.5">
        <span className="text-sm text-[#505050]">Email</span>
        <span className="text-xs leading-relaxed text-[#606060]">
          We use this address only to respond to your request.
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
        <span className="text-sm text-[#505050]">Interest</span>
        <span className="text-xs leading-relaxed text-[#606060]">
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
        <span className="text-sm text-[#505050]">How can we help?</span>
        <span className="text-xs leading-relaxed text-[#606060]">
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
      {error ? <p className="text-sm leading-6 text-[#a4262c]" role="alert">{error}</p> : null}
    </form>
  );
}
