import { ComingSoon } from "@/components/coming-soon"
import { PageHero } from "@/components/page-hero"

export default function RefleksjonPage() {
  return (
    <div>
      <PageHero
        title="Refleksjon"
        lead="Våre tanker og refleksjoner fra praksisprosjektet."
      />
      <ComingSoon>Refleksjoner vil bli delt etter endt praksisprosjekt.</ComingSoon>
    </div>
  )
}
