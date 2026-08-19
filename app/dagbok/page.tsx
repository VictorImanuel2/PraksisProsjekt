import { ComingSoon } from "@/components/coming-soon"
import { PageHero } from "@/components/page-hero"

export default function DagbokPage() {
  return (
    <div>
      <PageHero
        title="Dagbok"
        lead="Vår prosjektdagbok med jevnlige oppdateringer."
      />
      <ComingSoon>Dagboken vil bli oppdatert fortløpende gjennom praksisperioden høst 2026.</ComingSoon>
    </div>
  )
}
