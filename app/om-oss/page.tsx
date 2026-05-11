import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Kristian Espevik",
    role: "Gruppeleder",
    linkedin: "https://www.linkedin.com/in/kristian-espevik-074435220/",
    github: "https://github.com/KristianEspevikUIA",
    bio: "Kristian studerer IT og informasjonssystemer ved UiA (2024–). Han har erfaring med systemutvikling, databaser og IT-sikkerhet, og har blant annet utviklet et fullverdig hinderregistreringssystem for Kartverket i ASP.NET Core MVC med MariaDB og Docker. Han kombinerer teknisk presisjon med gode samarbeids- og kommunikasjonsevner, og motiveres av å bygge løsninger som faktisk fungerer i praksis.",
    initials: "KE",
    image: "/images/kristian.png",
  },
  {
    name: "Brage Kristoffersen",
    role: "Utvikler",
    linkedin: "https://www.linkedin.com/in/brage-kristoffersen-a0b9ba289/",
    bio: "Brage fokuserer på brukergrensesnitt og brukeropplevelse. Han har kompetanse innen moderne webutvikling med React og TypeScript, og brenner for å lage intuitive og tilgjengelige løsninger.",
    initials: "BK",
    image: "/images/brage.png",
  },
  {
    name: "Victor Ziadpour",
    role: "Utvikler",
    linkedin: "https://www.linkedin.com/in/victor-ziadpour-8a7a29345/",
    github: "https://github.com/VictorImanuel2",
    bio: "Victor studerer IT og informasjonssystemer ved UiA (2024–2027). Han har praktisk erfaring med full-stack utvikling gjennom egne prosjekter – blant annet en nettside for en lokal gull- og sølvhandel med sanntids prisintegrasjon, og et interaktivt beredskapskart for Kristiansand. Han har erfaring med React, TypeScript, Flask, ASP.NET og Supabase, og er spesielt interessert i backend-utvikling og API-integrasjoner.",
    initials: "VZ",
    image: "/images/victor.png",
  },
]

export default function OmOssPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Om oss</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vi er TechTrio - tre IT-studenter fra Universitetet i Agder som er klare for 
            vårt IS-302 praksisprosjekt høsten 2026. Her kan du bli bedre kjent med teamet.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-border bg-card overflow-hidden">
              <CardContent className="p-0">
                {/* Photo */}
                <div className="aspect-square bg-primary flex items-center justify-center relative overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`Bilde av ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-6xl font-bold text-primary-foreground">
                      {member.initials}
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-card-foreground mb-1">
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium text-accent mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    {member.github && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Group Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                Om gruppen vår
              </h2>
              <div className="prose prose-sm text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  TechTrio ble dannet som en del av emnet IS-302 Praksisprosjekt ved Universitetet 
                  i Agder. Vi er tre studenter med komplementære ferdigheter og en felles interesse 
                  for teknologi og innovasjon.
                </p>
                <p className="mb-4 leading-relaxed">
                  Vår tilnærming til prosjektarbeid vil være basert på smidig metodikk, hvor vi 
                  planlegger å jobbe i korte iterasjoner med jevnlig tilbakemelding. Vi tror på 
                  åpen kommunikasjon, kunnskapsdeling og kontinuerlig forbedring.
                </p>
                <p className="leading-relaxed">
                  Vi ser frem til å anvende teoretisk kunnskap fra studiet i en praktisk setting, 
                  samtidig som vi bygger verdifulle relasjoner med næringslivet og forbereder oss 
                  på arbeidslivet etter endt utdanning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
