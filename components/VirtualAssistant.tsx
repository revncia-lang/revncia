"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
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
      text: `I will remember you as ${name}. I can guide REVNCIA Platform, Voice, WhatsApp, CRM, ERP, government, and the rest of the catalogue. What do you need stood up?`,
    };
  }
  const greet = memory.name ? `${memory.name}, ` : "";
  if (/^(hi|hello|hey|salam|assalam)/i.test(lower)) {
    return {
      text: `${greet}welcome to REVNCIA. I can walk you through thirty-six service lines, the AI Gateway, Voice, WhatsApp, and how to engage. Ask for a service or say your name so I can remember it.`,
    };
  }
  if (/contact|email|office|address/.test(lower)) {
    return {
      text: `${greet}write ${company.email} or use the contact form. Office: ${company.address}. Founder: ${company.founder}.`,
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
    { keys: ["consult"], slug: "consulting" },
    { keys: ["price", "fee", "cost", "engage"], slug: "consulting" },
  ];
  const mapped = keywordMap.find((m) => m.keys.some((k) => lower.includes(k)));
  const found = hit || offerings.find((o) => o.slug === mapped?.slug);
  if (found) {
    const pain = (painPoints[found.slug] ?? [])[0];
    const why = plainWhy[found.slug] ?? found.summary;
    return {
      text: `${greet}${found.name}: ${why} If you skip it, a common problem is: ${pain} Open the page for the full list, pictures, and graphs.`,
      href: `/services/${found.slug}`,
    };
  }
  if (/problem|struggle|without|skip|don't|dont|not use/.test(lower)) {
    return {
      text: `${greet}Each service page lists what usually goes wrong if the organisation does not adopt that line — missed calls, unread contracts, conflicting reports, and slow citizen service. Name a service and I will open it.`,
      href: "/services",
    };
  }
  if (/service|catalog|what do you|offer/.test(lower)) {
    return {
      text: `${greet}REVNCIA delivers thirty-six lines from AI Platform and Customer Operations through Voice, WhatsApp, CRM, ERP, government, and Digital Workforce. Open Services to browse, or name a domain.`,
      href: "/services",
    };
  }
  return {
    text: `${greet}I can guide Platform, Voice AI, WhatsApp, CRM, ERP, documents, government, Command Center, and engagement. Try “WhatsApp”, “voice receptionist”, or “my name is …”.`,
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
      text: "REVNCIA attendant. I can text, listen, remember your name, and guide every service. Say “my name is …” to be remembered on this device.",
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
            { role: "va", text: `Welcome back, ${parsed.name}. How may I guide you?` },
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
        <div className="w-[min(100vw-2rem,22rem)] border border-cyan-400/30 bg-[#070b14]/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <p className="text-[0.7rem] tracking-[0.14em] uppercase text-cyan-300">
              {label}
            </p>
            <button
              type="button"
              className="text-xs text-white/60"
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
                    ? "ml-6 bg-cyan-950/50 px-3 py-2 text-cyan-50"
                    : "mr-4 bg-white/5 px-3 py-2 text-slate-200"
                }
              >
                <p className="break-words">{m.text}</p>
                {m.href ? (
                  <Link
                    href={m.href}
                    className="mt-1 inline-block text-[0.7rem] uppercase tracking-wider text-cyan-300 underline"
                  >
                    Open page
                  </Link>
                ) : null}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={onSubmit} className="flex gap-1 border-t border-white/10 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask or say your name…"
              className="min-w-0 flex-1 bg-black/40 px-2 py-2 text-sm leading-relaxed text-white outline-none"
            />
            <button
              type="button"
              onClick={listen}
              className="px-2 text-[0.65rem] uppercase tracking-wider text-cyan-300"
            >
              Listen
            </button>
            <button
              type="submit"
              className="bg-cyan-400 px-3 text-[0.65rem] uppercase tracking-wider text-black"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full border border-cyan-300/50 bg-cyan-500 text-xs font-semibold tracking-wide text-black shadow-[0_0_24px_rgba(34,211,238,0.45)]"
        aria-label="Open virtual assistant"
      >
        VA
      </button>
    </div>
  );
}
