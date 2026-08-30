/** Customer-readable labels for per-service graphs and pictures. */

export function pictureCaption(name: string) {
  return `${name} — illustrated so you can see the work`;
}

export function chartCaption(
  name: string,
  kind: "work" | "wait" | "trust" | "card",
) {
  if (kind === "card") {
    return `${name}: how waiting usually falls after go-live (example)`;
  }
  if (kind === "wait") {
    return `${name}: waiting and rework when this is missing (example)`;
  }
  if (kind === "trust") {
    return `${name}: a trail you can show over time (example)`;
  }
  return `${name}: how work typically moves after go-live (example)`;
}

export function axisLabels(seed: number): string[] {
  const sets = [
    ["Intake", "Triage", "Owner", "Done"],
    ["Week 1", "Week 4", "Week 8", "Week 12"],
    ["Before", "Pilot", "Live", "Steady"],
    ["Queue", "Reply", "Close", "Review"],
  ];
  return sets[seed % sets.length];
}
