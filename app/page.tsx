import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              IS-302 Praksisprosjekt | Vår 2026
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Velkommen til TechTrio
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 leading-relaxed text-pretty">
              Vi er tre studenter fra Universitetet i Agder som dokumenterer vårt praksisprosjekt 
              i samarbeid med en lokal IT-bedrift. Følg vår reise gjennom vårsemesteret 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link href="/om-oss">
                  Møt teamet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-medium bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/oppgavebeskrivelse">
                  Les om prosjektet
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Om prosjektet</h2>
            <p className="text-muted-foreground leading-relaxed">
              IS-302 Praksisprosjekt er et emne ved Universitetet i Agder hvor studenter får praktisk 
              erfaring gjennom samarbeid med næringslivet. Vårt prosjekt fokuserer på utvikling av 
              moderne IT-løsninger i samarbeid med vår praksispartner.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">Teamet vårt</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tre engasjerte IT-studenter med ulik bakgrunn og kompetanse som jobber sammen mot felles mål.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">Læringsmål</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Praktisk erfaring med prosjektarbeid, samarbeid med bedrifter og anvendelse av akademisk kunnskap.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">Tidsramme</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prosjektet gjennomføres i løpet av vårsemesteret 2026, med jevnlige statusoppdateringer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Gruppemedlemmer</h2>
            <p className="text-muted-foreground">
              TechTrio består av tre studenter fra IT-studiet ved UiA.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { name: "Kristian Espevik", role: "Gruppeleder" },
              { name: "Brage Kristoffersen", role: "Utvikler" },
              { name: "Victor Ziadpour", role: "Utvikler" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/om-oss">
                Les mer om oss
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Følg vår progresjon</h2>
            <p className="text-muted-foreground mb-8">
              Utforsk vår dagbok og statusoppdateringer for å følge med på hva vi jobber med 
              gjennom semesteret.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/dagbok">Se dagbok</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/status-1">Les status 1</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
