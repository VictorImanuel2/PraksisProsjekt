import { ComingSoon } from "@/components/coming-soon"
import { PageHero } from "@/components/page-hero"

export default function Status1Page() {
  return (
    <div>
      <PageHero
        title="Status 1"
        lead="Første statusoppdatering fra praksisprosjektet."
      />
      <ComingSoon>Statusoppdatering kommer høst 2026.</ComingSoon>
    </div>
  )
}
