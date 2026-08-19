import { ComingSoon } from "@/components/coming-soon"
import { PageHero } from "@/components/page-hero"

export default function OppgavebeskrivelsePage() {
  return (
    <div>
      <PageHero
        title="Oppgavebeskrivelse"
        lead="Informasjon om praksisprosjektet vårt."
      />
      <ComingSoon>Utvikle en digital trenarhub for utviklingsavdelinga, som skal gi en samlet oversikt over spillere og lag både individuelt og kollektivt. Plattformen skal automatisere ukentlig sporing av de 5 C-ene ved at spillere (eller føresette for de yngste) fyller ut et skjema med ei rangering fra 1–5, som deretter sammenligner direkte med trenerens forventning. Systemet skal visualisere denne utviklingen gjennom grafer over ulike tidsintervaller—inkludert ukentlege, månedlege og mesosykluser på 8–9 uker—samt inneholde en effektiv søkefunksjon. Løysinga vil ha et rollebasert tilgangssystem som sikrer at administratorer, trenere, føresette og spelarar bare har tilgang til relevant informasjon. </ComingSoon>
    </div>
  )
}
