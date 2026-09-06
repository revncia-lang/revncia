"use client";

import { useState } from "react";

export function CheckoutButton({ plan }: { plan: string }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    const email = window.prompt("Enter your work email for secure checkout:");
    if (!email) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/payments/checkout", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ plan, email }) });
      const result = await response.json() as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error || "Checkout is unavailable.");
      window.location.assign(result.url);
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout is unavailable.");
      setBusy(false);
    }
  }

  return <div className="mt-auto"><button type="button" onClick={startCheckout} disabled={busy} className="inline-flex w-full justify-center border border-[#0078d4] bg-[#0078d4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#106ebe] disabled:cursor-wait disabled:opacity-60">{busy ? "Opening secure checkout…" : "Pay securely"}</button>{error ? <p className="mt-2 text-xs leading-5 text-[#a4262c]" role="alert">{error} Contact REVNCIA if you need assistance.</p> : null}</div>;
}
