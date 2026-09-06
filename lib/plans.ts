import { offerings } from "@/lib/catalog";

const names = offerings.map((offering) => offering.name);

export const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$25",
    amount: 2500,
    accessLabel: "5 services",
    serviceLimit: 5,
    discount: null,
    benefits: ["Customer workspace guidance", "Service discovery and request tracking", "Secure hosted checkout"],
    services: names.slice(0, 5),
  },
  {
    id: "pro",
    name: "Pro",
    price: "$154",
    amount: 15400,
    accessLabel: "30 services",
    serviceLimit: 30,
    discount: "12% discount",
    benefits: ["Everything in Basic", "AI and workflow guidance", "Operational measurement and support"],
    services: names.slice(0, 30),
  },
  {
    id: "premium",
    name: "Premium",
    price: "$215.60",
    amount: 21560,
    accessLabel: "50 services",
    serviceLimit: 50,
    discount: "12% discount",
    benefits: ["Everything in Pro", "Governance and security guidance", "Cross-functional transformation planning"],
    services: names.slice(0, 50),
  },
  {
    id: "corporate",
    name: "Corporate Premium Plus",
    price: "$374",
    amount: 37400,
    accessLabel: `All ${names.length} services`,
    serviceLimit: names.length,
    discount: "12% discount",
    benefits: ["Complete service catalog", "Enterprise operating guidance", "Portfolio and continuous improvement planning"],
    services: names,
  },
] as const;

export type SubscriptionPlan = (typeof subscriptionPlans)[number];

export function subscriptionPlan(id: string) {
  return subscriptionPlans.find((plan) => plan.id === id);
}
