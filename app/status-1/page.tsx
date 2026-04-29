import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, AlertCircle } from "lucide-react"

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
    status: "in-progress",
    description: "Utvikling av første versjon av prototypen med grunnleggende funksjonalitet.",
  },
  {
    title: "Brukertesting",
    date: "Uke 41",
    status: "pending",
    description: "Testing med reelle brukere og innsamling av tilbakemeldinger.",
  },
]

const achievements = [
  "Etablert god kommunikasjon med praksispartner",
  "Ferdigstilt kravspesifikasjon og fått godkjenning",
  "Valgt teknologistack (React, Node.js, PostgreSQL)",
  "Satt opp utviklingsmiljø og CI/CD-pipeline",
  "Gjennomført første sprint med positive resultater",
]

const challenges = [
  {
    title: "Integrasjon med eksisterende systemer",
    description: "Uventet kompleksitet i API-grensesnitt mot partnerens systemer.",
    resolution: "Arrangerte ekstra møte for å avklare tekniske detaljer.",
  },
  {
    title: "Tidsplanlegging",
    description: "Parallelle eksamener påvirket tilgjengelighet i uke 36.",
    resolution: "Justert sprint-plan og fordelt arbeidsoppgaver.",
  },
]

export default function Status1Page() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">Statusrapport 1</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Første statusoppdatering</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oppsummering av prosjektets fremdrift fra oppstart til midten av semesteret.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Publisert: Oktober 2026</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Timeline */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Milepælsoversikt</CardTitle>
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
              <CardTitle className="text-card-foreground">Oppnåelser</CardTitle>
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

          {/* Summary */}
          <Card className="border-border bg-muted/30">
            <CardHeader>
              <CardTitle className="text-card-foreground">Oppsummering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prosjektet er i rute etter de første ukene av semesteret. Vi har etablert et 
                godt samarbeid med praksispartneren og har en klar forståelse av kravene. 
                Den tekniske plattformen er på plass, og vi har begynt utviklingen av 
                prototypen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Neste fase vil fokusere på å ferdigstille grunnleggende funksjonalitet og 
                forberede for brukertesting. Vi ser frem til å presentere første versjon 
                av prototypen for praksispartneren i uke 40.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
