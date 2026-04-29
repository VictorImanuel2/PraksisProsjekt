import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react"

export default function OppgavebeskrivelsePage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Oppgavebeskrivelse</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En detaljert beskrivelse av praksisprosjektet vårt, inkludert mål, metoder 
            og forventede resultater.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                Prosjektoversikt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                IS-302 Praksisprosjekt er et obligatorisk emne i bachelorprogrammet for 
                IT og informasjonssystemer ved Universitetet i Agder. Emnet gir studenter 
                mulighet til å arbeide med reelle problemstillinger i samarbeid med 
                næringslivet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vårt prosjekt gjennomføres i samarbeid med en lokal IT-bedrift som ønsker 
                å utforske nye teknologiske løsninger for sine interne prosesser. Prosjektet 
                innebærer utvikling av en prototype som demonstrerer mulighetene innen 
                moderne webutvikling og automatisering.
              </p>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                Hovedmål
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Utvikle en funksjonell prototype som adresserer bedriftens behov",
                  "Dokumentere utviklingsprosessen grundig gjennom dagbok og statusrapporter",
                  "Anvende smidig metodikk i praksis med iterativ utvikling",
                  "Etablere god kommunikasjon mellom akademia og næringsliv",
                  "Tilegne praktisk erfaring med moderne utviklingsverktøy og teknologier",
                ].map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Methods Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Lightbulb className="h-5 w-5 text-accent" />
                </div>
                Metode og tilnærming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi benytter en smidig utviklingsmetodikk inspirert av Scrum, med 
                to-ukers sprinter og regelmessige møter med praksispartner. Hver sprint 
                avsluttes med en demonstrasjon av oppnådde resultater og planlegging av 
                neste iterasjon.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Sprint-basert", desc: "To-ukers arbeidsperioder med definerte mål" },
                  { title: "Daglige standups", desc: "Korte møter for å koordinere arbeidet" },
                  { title: "Kodegjennomgang", desc: "Kvalitetssikring gjennom peer review" },
                  { title: "Kontinuerlig testing", desc: "Automatiserte tester for pålitelighet" },
                ].map((method) => (
                  <div key={method.title} className="rounded-lg bg-muted/50 p-4">
                    <h4 className="font-medium text-card-foreground mb-1">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Collaboration Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                Samarbeid med praksispartner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Samarbeidet med vår praksispartner er en sentral del av prosjektet. Vi har 
                ukentlige møter hvor vi diskuterer fremdrift, utfordringer og justeringer 
                av prosjektomfanget. Partneren bidrar med domeneekspertise og gir verdifull 
                tilbakemelding på våre løsninger.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gjennom dette samarbeidet får vi innsikt i hvordan IT-prosjekter 
                gjennomføres i arbeidslivet, og vi lærer å balansere akademiske krav med 
                praktiske bedriftsbehov. Dette er en uvurderlig erfaring som forbereder oss 
                på fremtidige karrierer innen IT-bransjen.
              </p>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <Card className="border-border bg-muted/30">
            <CardHeader>
              <CardTitle className="text-card-foreground">Forventede leveranser</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Funksjonell prototype",
                  "Teknisk dokumentasjon",
                  "Brukerveiledning",
                  "Prosjektrapport",
                  "Presentasjon",
                  "Kildekode med README",
                ].map((deliverable) => (
                  <div key={deliverable} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-card-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
