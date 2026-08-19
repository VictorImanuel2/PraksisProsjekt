import { ComingSoon } from "@/components/coming-soon"
import { PageHero } from "@/components/page-hero"

export default function Status2Page() {
  return (
    <div>
      <PageHero
        title="Status 2"
        lead="Andre statusoppdatering fra praksisprosjektet."
      />
      <ComingSoon>Statusoppdatering kommer høst 2026.</ComingSoon>
    </div>
  )
}
