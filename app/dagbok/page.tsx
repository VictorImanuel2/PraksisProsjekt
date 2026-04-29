import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

const diaryEntries = [
  {
    date: "15. november 2026",
    week: "Uke 46",
    author: "Kristian",
    title: "Sluttspurt og dokumentasjon",
    content: "I dag har vi fokusert på å ferdigstille dokumentasjonen. Brage har jobbet med brukerveiledningen, mens Victor og jeg har oppdatert den tekniske dokumentasjonen. Vi har også hatt en gjennomgang av koden for å sikre at alt er godt kommentert og lesbart. Praksispartneren er fornøyd med fremdriften.",
    tags: ["Dokumentasjon", "Kvalitetssikring"],
  },
  {
    date: "8. november 2026",
    week: "Uke 45",
    author: "Brage",
    title: "Brukertesting runde 2",
    content: "Gjennomførte en ny runde med brukertesting basert på forbedringene vi har gjort. Tilbakemeldingene var mye mer positive denne gangen. Spesielt ble den nye navigasjonsstrukturen godt mottatt. Vi identifiserte noen mindre justeringer som bør gjøres før levering.",
    tags: ["Testing", "UX"],
  },
  {
    date: "1. november 2026",
    week: "Uke 44",
    author: "Victor",
    title: "Ytelsesoptimalisering fullført",
    content: "Endelig har vi løst ytelsesproblemene vi har slitt med de siste ukene. Ved å implementere caching og optimalisere databasespørringene har vi redusert lastetiden med over 60%. Backend-en håndterer nå betydelig større datamengder uten problemer.",
    tags: ["Backend", "Optimalisering"],
  },
  {
    date: "25. oktober 2026",
    week: "Uke 43",
    author: "Kristian",
    title: "Møte med praksispartner",
    content: "Positivt møte med praksispartneren i dag. De var imponert over prototypen og ga oss verdifull tilbakemelding på prioriteringer for de siste ukene. Vi ble enige om å fokusere på stabilitet og dokumentasjon fremfor nye funksjoner.",
    tags: ["Møte", "Planlegging"],
  },
  {
    date: "18. oktober 2026",
    week: "Uke 42",
    author: "Brage",
    title: "Responsive design forbedringer",
    content: "Brukte dagen på å forbedre mobilopplevelsen. Redesignet hovedmenyen til en mer mobilvenlig hamburger-meny og justerte layouten på flere sider. Testet på ulike enheter og er fornøyd med resultatet.",
    tags: ["Frontend", "Responsivt design"],
  },
  {
    date: "11. oktober 2026",
    week: "Uke 41",
    author: "Victor",
    title: "Første brukertesting",
    content: "Gjennomførte brukertesting med 8 testpersoner fra praksispartneren. Fikk mye nyttig innsikt om brukeropplevelsen. Hovedutfordringene var relatert til navigasjon og noen forvirrende knapper. Lager en liste over forbedringer basert på tilbakemeldingene.",
    tags: ["Testing", "UX"],
  },
  {
    date: "4. oktober 2026",
    week: "Uke 40",
    author: "Kristian",
    title: "Prototype v1 levert",
    content: "I dag leverte vi første versjon av prototypen til praksispartneren. Det var en god følelse å se produktet vårt i bruk. De var generelt positive, men hadde som forventet noen tilbakemeldinger og endringsønsker. Neste sprint blir fokusert på forbedringer.",
    tags: ["Levering", "Milepæl"],
  },
  {
    date: "27. september 2026",
    week: "Uke 39",
    author: "Brage",
    title: "Frontend-komponenter ferdigstilt",
    content: "Fullførte de siste UI-komponentene i dag. Dashboard-visningen er nå komplett med alle planlagte grafer og oversikter. Har også implementert et notifikasjonssystem som gir brukerne beskjed om viktige hendelser.",
    tags: ["Frontend", "Utvikling"],
  },
  {
    date: "20. september 2026",
    week: "Uke 38",
    author: "Victor",
    title: "API-utvikling i gang",
    content: "Startet på API-utviklingen for alvor denne uken. Har satt opp endepunkter for alle hovedfunksjonene og implementert autentisering. Jobber tett med Brage for å sikre at frontend og backend kommuniserer godt.",
    tags: ["Backend", "API"],
  },
  {
    date: "13. september 2026",
    week: "Uke 37",
    author: "Kristian",
    title: "Teknisk design fullført",
    content: "Ferdigstilte det tekniske designet i dag. Vi har valgt en mikrotjenestearkitektur som gir oss fleksibilitet og skalerbarhet. Teamet er enige om teknologivalgene, og vi er klare til å starte utviklingen.",
    tags: ["Arkitektur", "Planlegging"],
  },
  {
    date: "6. september 2026",
    week: "Uke 36",
    author: "Brage",
    title: "Kravspesifikasjon godkjent",
    content: "Fikk endelig godkjenning på kravspesifikasjonen fra praksispartneren. Det var en del diskusjon rundt prioriteringer, men vi kom frem til en god løsning. Nå har vi et klart grunnlag for utviklingen.",
    tags: ["Dokumentasjon", "Milepæl"],
  },
  {
    date: "23. august 2026",
    week: "Uke 34",
    author: "Kristian",
    title: "Prosjektoppstart",
    content: "Første dag på praksisprosjektet! Hadde et introduksjonsmøte med praksispartneren hvor vi ble kjent med bedriften og prosjektoppgaven. Spennende utfordringer venter, og teamet er motivert for å komme i gang.",
    tags: ["Oppstart", "Møte"],
  },
]

export default function DagbokPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Arbeidsdagbok</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En kronologisk oversikt over vårt arbeid gjennom semesteret. Her dokumenterer 
            vi fremgang, utfordringer og lærdommer fra prosjektet.
          </p>
        </div>

        {/* Diary Entries */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {diaryEntries.map((entry, index) => (
                <div key={index} className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:ml-0' : 'md:pl-8 md:ml-auto'}`}>
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-accent border-2 border-background ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2 md:-right-1.5' : 'left-0 -translate-x-1/2 md:-left-1.5'
                  }`} />
                  
                  <Card className="border-border bg-card">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{entry.date}</span>
                        </div>
                        <span className="text-border">•</span>
                        <Badge variant="outline" className="text-xs">{entry.week}</Badge>
                        <span className="text-border">•</span>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{entry.author}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-card-foreground mb-3">
                        {entry.title}
                      </h3>

                      {/* Content */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {entry.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
