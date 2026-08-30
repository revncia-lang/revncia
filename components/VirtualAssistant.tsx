"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { BetaLabel } from "@/components/BetaLabel";
import { offerings } from "@/lib/catalog";
import { painPoints, plainWhy } from "@/lib/pains";
import { company } from "@/lib/site";

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
    () => (memory.name ? `Assistant · ${memory.name}` : "REVNCIA Assistant"),
    [memory.name],
  );

  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-2">
      {open ? (
        <div className="w-[min(100vw-2rem,22rem)] border border-[#c41e3a]/25 bg-[#fffdf8]/96 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-[#e8d9ce] px-3 py-2">
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#b91c2c]">
              {label}
            </p>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider text-orange-800 hover:bg-orange-50"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="max-h-72 space-y-2 overflow-y-auto p-3 text-sm">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-6 bg-[#f6ebe3] px-3 py-2 text-[#2a221f]"
                    : "mr-4 bg-[#fff8f2] px-3 py-2 text-stone-700"
                }
              >
                <p className="break-words">{m.text}</p>
                {m.href ? (
                  <Link
                    href={m.href}
                    className="mt-1 inline-block text-[0.7rem] font-semibold uppercase tracking-wider text-orange-700 underline"
                  >
                    What you receive
                  </Link>
                ) : null}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={onSubmit} className="flex gap-1 border-t border-[#e8d9ce] p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask or say your name…"
              className="min-w-0 flex-1 bg-[#fffdf8] px-2 py-2 text-sm leading-relaxed text-[#2a221f] outline-none"
            />
            <button
              type="button"
              onClick={listen}
              className="rounded-md border border-[#c41e3a]/30 px-2 text-[0.65rem] font-semibold uppercase tracking-wider text-[#8b1e2d] hover:bg-[#f6ebe3]"
            >
              Listen
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#c41e3a] px-3 text-[0.65rem] font-semibold uppercase tracking-wider text-white hover:bg-[#9f1730]"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-14 items-center gap-2 rounded-full border border-[#c41e3a] bg-[#c41e3a] px-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_24px_rgba(196,30,58,0.45)] transition hover:bg-[#9f1730] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff8f2]"
        aria-label="Open support assistant"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.938L3 20l1.06-3.188A7.5 7.5 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Support
        <BetaLabel />
      </button>
    </div>
  );
}
