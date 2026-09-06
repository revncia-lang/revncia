import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const organization = typeof body?.organization === "string" ? body.organization.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const interest = typeof body?.interest === "string" ? body.interest.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !interest || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: "The contact service is not configured yet." }, { status: 503 });
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, organization, email, interest, message, receivedAt: new Date().toISOString() }),
  });

  if (!response.ok) return NextResponse.json({ error: "The message could not be delivered." }, { status: 502 });
  return NextResponse.json({ received: true });
}
