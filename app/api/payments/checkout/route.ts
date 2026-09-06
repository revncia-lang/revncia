import Stripe from "stripe";
import { NextResponse } from "next/server";
import { subscriptionPlan } from "@/lib/plans";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.PUBLIC_SITE_URL;
  if (!secret || !siteUrl) {
    return NextResponse.json({ error: "Secure checkout is not configured yet." }, { status: 503 });
  }

  const body = await request.json().catch(() => null) as { plan?: string; email?: string } | null;
  const planKey = body?.plan;
  const plan = planKey ? subscriptionPlan(planKey) : undefined;
  if (!plan || !planKey || !body?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "A valid plan and customer email are required." }, { status: 400 });
  }

  const stripe = new Stripe(secret);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: body.email,
    line_items: [{ price_data: { currency: "usd", product_data: { name: `REVNCIA ${plan.name} Service Access`, description: `${plan.accessLabel}. Installation and monthly maintenance quoted separately.` }, unit_amount: plan.amount }, quantity: 1 }],
    success_url: `${siteUrl}/login?payment=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/plans?payment=cancelled`,
    metadata: { plan: planKey, serviceLimit: String(plan.serviceLimit), services: plan.services.join(" | ") },
  });

  return NextResponse.json({ url: session.url });
}
