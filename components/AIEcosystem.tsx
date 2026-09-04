"use client";

export function AIEcosystem() {
  const nodes = [
    { label: ["AI AGENTS", "Autonomous digital workforce"], x: 50, y: 7 },
    { label: ["DATA INTELLIGENCE", "Turn data into decisions"], x: 82, y: 28 },
    { label: ["INTEGRATIONS", "Connect enterprise systems"], x: 83, y: 72 },
    { label: ["ANALYTICS", "Real-time insight"], x: 50, y: 94 },
    { label: ["WORKFLOWS", "End-to-end orchestration"], x: 17, y: 72 },
    { label: ["AUTOMATION", "Intelligent process execution"], x: 18, y: 28 },
  ];
  return <div className="ecosystem-graphic" aria-label="REVNCIA revolving AI ecosystem globe" role="img">
    <svg viewBox="0 0 520 520" className="h-full w-full" fill="none">
      <defs>
        <radialGradient id="ecoGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="white" stopOpacity=".16"/><stop offset="45%" stopColor="#62d9ff" stopOpacity=".06"/><stop offset="100%" stopColor="transparent"/></radialGradient>
        <linearGradient id="ecoLine" x1="0" y1="0" x2="1" y2="1"><stop stopColor="white" stopOpacity=".55"/><stop offset="1" stopColor="#62d9ff" stopOpacity=".15"/></linearGradient>
      </defs>
      <circle cx="260" cy="260" r="225" fill="url(#ecoGlow)"/>
      <g className="eco-orbit eco-orbit-a"><ellipse cx="260" cy="260" rx="185" ry="70" stroke="rgba(255,255,255,.30)"/><circle cx="445" cy="260" r="3" fill="#62d9ff"/></g>
      <g className="eco-orbit eco-orbit-b"><ellipse cx="260" cy="260" rx="185" ry="70" transform="rotate(60 260 260)" stroke="rgba(255,255,255,.20)"/><circle cx="260" cy="75" r="3" fill="white"/></g>
      <g className="eco-orbit eco-orbit-c"><ellipse cx="260" cy="260" rx="185" ry="70" transform="rotate(-60 260 260)" stroke="rgba(98,217,255,.22)"/><circle cx="260" cy="445" r="3" fill="#62d9ff"/></g>
      <g className="eco-globe">
        <circle cx="260" cy="260" r="122" stroke="url(#ecoLine)"/>
        {[-90,-60,-30,0,30,60,90].map((a)=><ellipse key={a} cx="260" cy="260" rx="122" ry={Math.max(8,Math.abs(a)===90?8:122*Math.cos(a*Math.PI/180))} transform={`rotate(${a} 260 260)`} stroke="rgba(255,255,255,.11)"/>)}
        {[-60,-30,0,30,60].map((a)=><ellipse key={`v${a}`} cx="260" cy="260" rx={Math.max(10,122*Math.cos(a*Math.PI/180))} ry="122" transform={`rotate(${a} 260 260)`} stroke="rgba(255,255,255,.10)"/>)}
        <path d="M138 260H382M260 138V382" stroke="rgba(255,255,255,.10)" strokeDasharray="4 8"/>
      </g>
      <circle cx="260" cy="260" r="9" fill="#62d9ff" opacity=".18" className="eco-core-pulse"/><circle cx="260" cy="260" r="4" fill="white"/>
      <text x="260" y="252" textAnchor="middle" className="eco-title">REVNCIA</text><text x="260" y="278" textAnchor="middle" className="eco-subtitle">AI ECOSYSTEM</text>
      {nodes.map((n,i)=>{const cx=n.x/100*520, cy=n.y/100*520; return <g key={n.label[0]} className="eco-node"><line x1="260" y1="260" x2={cx} y2={cy} stroke="rgba(255,255,255,.18)" strokeDasharray="3 7"/><circle cx={cx} cy={cy} r="4" fill="#62d9ff"/><circle cx={cx} cy={cy} r="9" stroke="rgba(98,217,255,.30)"/><text x={cx} y={cy-15} textAnchor="middle" className="eco-label"><tspan x={cx}>{n.label[0]}</tspan><tspan x={cx} dy="13" className="eco-desc">{n.label[1]}</tspan></text></g>})}
    </svg>
  </div>;
}
