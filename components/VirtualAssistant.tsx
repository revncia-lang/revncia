"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
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

  function clearConversation() {
    setMsgs([{ role: "va", text: "Welcome back to REVNCIA Support. What would you like to understand or improve?" }]);
    setInput("");
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

  const label = "Support";

  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(calc(100vw-2rem),30rem)] overflow-hidden border border-[#d2d2d2] bg-white text-[#242424] shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#d2d2d2] bg-[#f5f5f5] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-[#0078d4] bg-[#0078d4] text-xs font-bold text-white">S</span>
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs leading-snug text-[#616161]"><span className="h-1.5 w-1.5 rounded-full bg-[#107c10]" />Available to guide you</p>
              </div>
            </div>
            <div className="flex items-center gap-2"><button type="button" className="border border-[#d2d2d2] bg-white px-2.5 py-1 text-xs font-medium text-[#505050] hover:border-[#0078d4]" onClick={clearConversation}>Clear</button><button type="button" className="border border-[#0078d4] bg-white px-2.5 py-1 text-xs font-medium text-[#242424] hover:bg-[#f5f5f5]" onClick={() => setOpen(false)}>Close</button></div>
          </div>
          <div className="border-b border-[#edebe9] bg-white px-5 py-3"><p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#616161]">Quick questions</p><div className="mt-2 flex flex-wrap gap-2">{["Which service fits my business?", "How can AI improve security?", "How do I reduce process delays?"] .map((prompt) => <button key={prompt} type="button" onClick={() => send(prompt)} className="border border-[#d2d2d2] bg-white px-2.5 py-1.5 text-xs text-[#505050] hover:border-[#0078d4] hover:text-[#0078d4]">{prompt}</button>)}</div></div>
          <div className="max-h-[26rem] space-y-3 overflow-y-auto px-5 py-4 text-[0.9rem] leading-6">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "ml-8 border border-[#b8d7ef] bg-[#f3f9fd] px-3.5 py-2.5 text-[#242424]" : "mr-6 border border-[#d2d2d2] bg-white px-3.5 py-2.5 text-[#242424]"}
              >
                <p className="break-words">{m.text}</p>
                {m.href ? (
                  <Link
                    href={m.href}
                    className="mt-2 inline-block text-xs font-medium tracking-wide text-[#0078d4] hover:underline"
                  >
                    Continue
                  </Link>
                ) : null}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-1.5 border-t border-[#d2d2d2] bg-[#f5f5f5] p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="min-w-0 flex-1 border border-[#8a8886] bg-white px-3 py-2 text-sm leading-relaxed text-black outline-none placeholder:text-[#616161] focus:border-[#0078d4]"
            />
            <button
              type="button"
              onClick={listen}
              className="border border-[#0078d4] bg-white px-2.5 py-2 text-xs font-semibold text-[#242424] hover:bg-[#f5f5f5]"
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
        className="inline-flex h-12 min-w-[6rem] items-center justify-center border border-[#0078d4] bg-[#0078d4] px-6 text-sm font-semibold text-white transition hover:border-[#106ebe] hover:bg-[#106ebe] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2"
        aria-label="Open Support"
        aria-expanded={open}
      >
        Support
      </button>
    </div>
  );
}
