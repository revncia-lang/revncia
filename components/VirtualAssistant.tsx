"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { offerings } from "@/lib/catalog";
import { painPoints, plainWhy } from "@/lib/pains";
import { company } from "@/lib/site";
import { btnPrimary } from "@/lib/ui";

type Msg = { role: "user" | "va"; text: string; href?: string };

const MEMORY_KEY = "revncia-va-memory";

type Memory = { name: string };

function reply(input: string, memory: Memory): { text: string; href?: string } {
  const q = input.trim();
  const lower = q.toLowerCase();
  const nameHit = q.match(
    /(?:my name is|i am|i'm|this is)\s+([A-Za-z][A-Za-z .'-]{1,40})/i,
  );
  if (nameHit) {
    const name = nameHit[1].replace(/[.,!?].*$/, "").trim();
    return {
      text: `I will remember you as ${name}. Together we transform. Ask about Voice, WhatsApp, CRM, ERP, or who waits today. Write info@revncia.com when you want to start.`,
    };
  }
  const greet = memory.name ? `${memory.name}, ` : "";
  if (/^(hi|hello|hey|salam|assalam)/i.test(lower)) {
    return {
      text: `${greet}welcome to REVNCIA. Together we transform. We help your callers get answers and your staff share one system — Voice, WhatsApp, the AI Gateway, CRM, and ERP. Ask about who waits, or write info@revncia.com.`,
    };
  }
  if (/contact|email|office|address/.test(lower)) {
    return {
      text: `${greet}we would be glad to help. Write ${company.email} and name who waits — callers, chats, files, or a plan. Office: ${company.address}.`,
      href: "/contact",
    };
  }
  const hit = offerings.find(
    (o) =>
      lower.includes(o.slug.replace(/-/g, " ")) ||
      lower.includes(o.name.toLowerCase()) ||
      o.capabilities.some((c) => lower.includes(c.toLowerCase().slice(0, 12))) ||
      o.title.toLowerCase().split(" ").slice(0, 2).every((w) => lower.includes(w.toLowerCase())),
  );
  const keywordMap: { keys: string[]; slug: string }[] = [
    { keys: ["whatsapp"], slug: "whatsapp-ai" },
    { keys: ["voice", "call", "receptionist"], slug: "voice-ai" },
    { keys: ["crm"], slug: "crm" },
    { keys: ["erp"], slug: "erp" },
    { keys: ["gateway", "platform", "routing"], slug: "ai-platform" },
    { keys: ["document", "contract", "pdf"], slug: "document-intelligence" },
    { keys: ["government", "citizen", "public"], slug: "government" },
    { keys: ["command", "executive dashboard"], slug: "command-center" },
    { keys: ["agent", "workforce"], slug: "digital-workforce" },
    { keys: ["audit", "maturity"], slug: "audits" },
    { keys: ["consult", "price", "fee", "cost"], slug: "consulting" },
  ];
  const mapped = keywordMap.find((m) => m.keys.some((k) => lower.includes(k)));
  const found = hit || offerings.find((o) => o.slug === mapped?.slug);
  if (found) {
    const pain = (painPoints[found.slug] ?? [])[0];
    const why = plainWhy[found.slug] ?? found.summary;
    return {
      text: `${greet}${found.name}: ${why} If you skip it, a common problem is: ${pain} Write info@revncia.com to start.`,
      href: `/services/${found.slug}`,
    };
  }
  if (/problem|struggle|without|skip|don't|dont|not use/.test(lower)) {
    return {
      text: `${greet}If callers wait, chats go unread, or files pile up — name Voice, WhatsApp, documents, or government and I will help. Together we transform — write info@revncia.com when you are ready.`,
      href: "/services",
    };
  }
  if (/service|catalog|what do you|offer/.test(lower)) {
    return {
      text: `${greet}REVNCIA delivers Voice, WhatsApp, the AI Platform, CRM, ERP, government, and Digital Workforce so callers get answers and staff share one system. Ask about who waits, or write info@revncia.com.`,
      href: "/services",
    };
  }
  return {
    text: `${greet}Ask about Voice, WhatsApp, the AI your staff use, CRM, ERP, documents, or citizen cases. Or write info@revncia.com.`,
    href: "/services",
  };
}

export function VirtualAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState<Memory>({ name: "" });
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "va",
      text: "Welcome to REVNCIA. Together we transform. I can help with Voice, WhatsApp, the AI Platform, CRM, and ERP. Write info@revncia.com when you want to start. Say “my name is …” to be remembered.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(MEMORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Memory;
        setMemory(parsed);
        if (parsed.name) {
          setMsgs((m) => [
            ...m,
            { role: "va", text: `Welcome back, ${parsed.name}. Together we transform. How may I help with Voice, WhatsApp, CRM, or ERP?` },
          ]);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const persistName = (name: string) => {
    const next = { name };
    setMemory(next);
    localStorage.setItem(MEMORY_KEY, JSON.stringify(next));
  };

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const nameHit = trimmed.match(
      /(?:my name is|i am|i'm|this is)\s+([A-Za-z][A-Za-z .'-]{1,40})/i,
    );
    if (nameHit) persistName(nameHit[1].replace(/[.,!?].*$/, "").trim());
    const out = reply(trimmed, nameHit ? { name: nameHit[1] } : memory);
    setMsgs((m) => [
      ...m,
      { role: "user", text: trimmed },
      { role: "va", text: out.text, href: out.href },
    ]);
    setInput("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  function listen() {
    const w = window as Window & {
      webkitSpeechRecognition?: new () => {
        lang: string;
        onresult: ((ev: { results: { 0: { 0: { transcript: string } } } }) => void) | null;
        start: () => void;
      };
      SpeechRecognition?: new () => {
        lang: string;
        onresult: ((ev: { results: { 0: { 0: { transcript: string } } } }) => void) | null;
        start: () => void;
      };
    };
    const SR = w.webkitSpeechRecognition || w.SpeechRecognition;
    if (!SR) {
      setMsgs((m) => [
        ...m,
        {
          role: "va",
          text: "This browser has no speech recognition. Type your question, or use Chrome for listen mode.",
        },
      ]);
      return;
    }
    const rec = new SR();
    rec.lang = "en-US";
    rec.onresult = (ev) => {
      const said = ev.results[0][0].transcript;
      send(said);
    };
    rec.start();
  }

  const label = useMemo(
    () => (memory.name ? memory.name : "REVNCIA"),
    [memory.name],
  );

  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-3">
      {open ? (
        <div className="va-panel w-[min(100vw-2rem,22rem)] overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="va-panel-title text-[0.72rem] font-semibold tracking-[0.16em] uppercase">
                {label}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-white/55">
                How can we help?
              </p>
            </div>
            <button
              type="button"
              className="va-panel-close rounded-md px-2.5 py-1 text-xs font-medium tracking-wide"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="max-h-72 space-y-2.5 overflow-y-auto px-4 py-3 text-[0.9rem] leading-6">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "va-msg-user ml-8 px-3.5 py-2.5"
                    : "va-msg-va mr-6 px-3.5 py-2.5"
                }
              >
                <p className="break-words">{m.text}</p>
                {m.href ? (
                  <Link
                    href={m.href}
                    className="va-msg-link mt-2 inline-block text-xs font-medium tracking-wide"
                  >
                    Continue
                  </Link>
                ) : null}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-1.5 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="va-input min-w-0 flex-1 px-3 py-2 text-sm leading-relaxed outline-none"
            />
            <button
              type="button"
              onClick={listen}
              className="va-listen px-2.5 py-2 text-[0.65rem] font-semibold uppercase tracking-wider"
            >
              Listen
            </button>
            <button type="submit" className={`${btnPrimary} px-3 py-2`}>
              Send
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="btn-cta inline-flex h-12 min-w-[5.5rem] items-center justify-center rounded-full border px-6 text-sm font-semibold tracking-normal text-white shadow-[0_8px_24px_rgba(249,115,22,0.28)] transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Help!"
        aria-expanded={open}
      >
        Help!
      </button>
    </div>
  );
}
