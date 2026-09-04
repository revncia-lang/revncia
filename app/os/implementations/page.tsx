import { OSModulePage } from "@/components/OSModulePage";

export default function Page() {
  return <OSModulePage kicker="REVNCIA OS" title="Implementations" description="Implementation is where strategy becomes configuration, integration, testing, training and go-live." scene="os-implementations" metrics=[["08","In delivery","Illustrative implementations"],["37","Work packages","Tracked delivery units"],["100%","Documented","Target for handover packs"]] items=[{ title: "Solution design", description: "Translate the selected service into architecture, scope and acceptance criteria." },{ title: "Build & integrate", description: "Configure systems, connect data and validate the workflow end to end." },{ title: "Go-live & handover", description: "Train users, transfer ownership and establish operating runbooks." }] actionHref="/os" actionLabel="Back to Command Center" />;
}
