import { ComingSoon } from "@/components/coming-soon"
import { PageHero } from "@/components/page-hero"

export default function OppgavebeskrivelsePage() {
  return (
    <div>
      <PageHero
        title="Oppgavebeskrivelse"
        lead="Informasjon om praksisprosjektet vårt."
      />
      <ComingSoon>Oppgavebeskrivelsen vil bli publisert når praksisprosjektet starter høst 2026.</ComingSoon>
    </div>
  )
}
