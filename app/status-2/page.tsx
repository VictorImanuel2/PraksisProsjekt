import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, AlertCircle, TrendingUp } from "lucide-react"

const milestones = [
  {
    title: "Prosjektoppstart",
    date: "Uke 34",
    status: "completed",
    description: "Første møte med praksispartner og definering av prosjektomfang.",
  },
  {
    title: "Kravspesifikasjon",
    date: "Uke 35-36",
    status: "completed",
    description: "Utarbeidet detaljert kravspesifikasjon basert på innspill fra partner.",
  },
  {
    title: "Teknisk design",
    date: "Uke 37",
    status: "completed",
    description: "Arkitekturvalg og design av systemkomponenter.",
  },
  {
    title: "Prototype v1",
    date: "Uke 38-40",
    status: "completed",
    description: "Utvikling av første versjon av prototypen med grunnleggende funksjonalitet.",
  },
  {
    title: "Brukertesting",
    date: "Uke 41",
    status: "completed",
    description: "Testing med reelle brukere og innsamling av tilbakemeldinger.",
  },
  {
    title: "Prototype v2",
    date: "Uke 42-44",
    status: "in-progress",
    description: "Implementering av forbedringer basert på tilbakemeldinger fra brukertesting.",
  },
  {
    title: "Sluttrapport",
    date: "Uke 45-46",
    status: "pending",
    description: "Ferdigstilling av dokumentasjon og prosjektrapport.",
  },
]

const achievements = [
  "Fullført og levert prototype v1 til praksispartner",
  "Gjennomført brukertesting med 8 testpersoner",
  "Implementert 90% av planlagt funksjonalitet",
  "Mottatt positiv tilbakemelding fra praksispartner",
  "Etablert god testdekning (85% av kodebasen)",
  "Dokumentert API og systemarkitektur",
]

const metrics = [
  { label: "Fullførte brukerhistorier", value: "24/28", progress: 86 },
  { label: "Testdekning", value: "85%", progress: 85 },
  { label: "Bugs løst", value: "18/21", progress: 86 },
  { label: "Dokumentasjon", value: "75%", progress: 75 },
]

const challenges = [
  {
    title: "Ytelsesoptimalisering",
    description: "Databasespørringer var tregere enn forventet ved større datamengder.",
    resolution: "Implementert indeksering og optimalisert spørringer. Responstid redusert med 60%.",
  },
  {
    title: "Responsivt design",
    description: "Enkelte komponenter fungerte dårlig på mobile enheter.",
    resolution: "Redesignet kritiske visninger og testet på flere skjermstørrelser.",
  },
]

export default function Status2Page() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">Statusrapport 2</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Andre statusoppdatering</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oppsummering av prosjektets fremdrift i siste halvdel av semesteret.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Publisert: November 2026</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Progress Metrics */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <TrendingUp className="h-5 w-5 text-accent" />
                Fremdriftsmålinger
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-card-foreground">{metric.label}</span>
                      <span className="text-sm text-accent font-semibold">{metric.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div 
                        className="h-full rounded-full bg-accent transition-all"
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Oppdatert milepælsoversikt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {milestone.status === "completed" ? (
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                      ) : milestone.status === "in-progress" ? (
                        <div className="h-6 w-6 rounded-full border-2 border-accent bg-accent/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                        </div>
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground shrink-0" />
                      )}
                      {index < milestones.length - 1 && (
                        <div className={`w-0.5 flex-1 mt-2 ${
                          milestone.status === "completed" ? "bg-accent" : "bg-border"
                        }`} />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-card-foreground">{milestone.title}</h3>
                        <Badge 
                          variant={milestone.status === "completed" ? "default" : milestone.status === "in-progress" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {milestone.status === "completed" ? "Fullført" : milestone.status === "in-progress" ? "Pågår" : "Kommende"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{milestone.date}</p>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Nye oppnåelser</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Utfordringer og løsninger</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="rounded-lg border border-border bg-muted/30 p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <h4 className="font-medium text-card-foreground">{challenge.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 ml-8">
                      {challenge.description}
                    </p>
                    <div className="ml-8 flex items-start gap-2 rounded bg-accent/10 p-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-accent">{challenge.resolution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-border bg-muted/30">
            <CardHeader>
              <CardTitle className="text-card-foreground">Veien videre</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prosjektet nærmer seg sluttfasen med god fremdrift. De siste ukene vil vi 
                fokusere på å ferdigstille prototype v2, fullføre dokumentasjonen og 
                forberede den avsluttende presentasjonen.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-card-foreground">Prioriterte oppgaver:</h4>
                <ul className="space-y-2 ml-4">
                  {[
                    "Fullføre implementering av gjenværende brukerhistorier",
                    "Gjennomføre sluttesting og fikse kritiske bugs",
                    "Ferdigstille brukerveiledning og teknisk dokumentasjon",
                    "Forberede presentasjon og demonstrasjon",
                  ].map((task, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Circle className="h-2 w-2 text-accent" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
