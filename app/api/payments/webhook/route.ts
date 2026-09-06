import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !webhookSecret) return NextResponse.json({ error: "Payment webhook is not configured." }, { status: 503 });

  const signature = request.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Missing payment signature." }, { status: 400 });

  const stripe = new Stripe(secret);
  const payload = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid payment signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed" || event.type === "invoice.paid") {
    console.info("Verified payment event received", { type: event.type, id: event.id });
  }

  return NextResponse.json({ received: true });
}
