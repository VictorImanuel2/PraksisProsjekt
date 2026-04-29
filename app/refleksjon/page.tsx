import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function RefleksjonPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Refleksjon</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Våre tanker og refleksjoner rundt praksisprosjektet, læringsprosessen 
            og erfaringene vi har gjort oss gjennom semesteret.
          </p>
        </div>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto">
          <Card className="border-border bg-card">
            <CardContent className="p-8 md:p-12">
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Innledning</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Da vi startet på IS-302 Praksisprosjekt våren 2026, visste vi at dette ville 
                  bli en annerledes erfaring enn de tradisjonelle emnene vi hadde hatt tidligere. 
                  For første gang skulle vi anvende kunnskapen vår i en reell bedriftssetting, 
                  med reelle forventninger og deadlines.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nå, ved semesterets slutt, kan vi se tilbake på en lærerik og utfordrende 
                  periode som har gitt oss verdifull innsikt i hva det vil si å jobbe med 
                  IT-prosjekter i praksis.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Learning Outcomes */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Hva vi har lært</h2>
                
                <h3 className="text-lg font-semibold text-card-foreground mt-6 mb-3">Tekniske ferdigheter</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prosjektet har gitt oss mulighet til å fordype oss i moderne webutviklingsteknologier. 
                  Vi har fått praktisk erfaring med React og TypeScript på frontend, Node.js på backend, 
                  og PostgreSQL for databasehåndtering. Kanskje viktigst er at vi har lært hvordan disse 
                  teknologiene fungerer sammen i et helhetlig system.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vi har også fått erfaring med verktøy og praksiser som er standard i bransjen, 
                  som Git for versjonskontroll, CI/CD for automatisert testing og deployment, 
                  og agile metodikker for prosjektstyring.
                </p>

                <h3 className="text-lg font-semibold text-card-foreground mt-6 mb-3">Samarbeid og kommunikasjon</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En av de største lærdommene har vært viktigheten av god kommunikasjon - både 
                  internt i teamet og med praksispartneren. Vi har lært at misforståelser kan 
                  være kostbare, og at det alltid er bedre å spørre en gang for mye enn en gang 
                  for lite.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Regelmessige møter med praksispartneren har lært oss å presentere teknisk 
                  informasjon på en forståelig måte for ikke-tekniske interessenter. Dette er 
                  en ferdighet vi tror vil være uvurderlig i arbeidslivet.
                </p>

                <h3 className="text-lg font-semibold text-card-foreground mt-6 mb-3">Problemløsning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prosjektet har vært fullt av uforutsette utfordringer, fra tekniske problemer 
                  til endrede krav. Vi har lært å være fleksible, å tilpasse oss nye situasjoner, 
                  og å se på problemer som muligheter for læring snarere enn hindringer.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Challenges */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Utfordringer vi møtte</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Den største utfordringen var kanskje balansen mellom ambisjon og realisme. 
                  I starten hadde vi mange ideer og ønsket å implementere alt, men vi lærte 
                  raskt at god prioritering er nøkkelen til et vellykket prosjekt. Å si nei 
                  til gode ideer fordi tiden ikke strekker til er vanskelig, men nødvendig.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vi opplevde også tekniske utfordringer, spesielt knyttet til integrasjon med 
                  praksispartnerens eksisterende systemer. Dette krevde tålmodighet og grundig 
                  feilsøking, og minnet oss om at virkeligheten sjelden er så ryddig som 
                  lærebøkene gir inntrykk av.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tidvis var det også utfordrende å kombinere prosjektarbeidet med andre 
                  studieforpliktelser. Vi lærte viktigheten av god planlegging og å være 
                  åpne med hverandre om kapasitet og begrensninger.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Teamwork */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Teamarbeid</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Å jobbe som et team har vært en av de mest berikende delene av prosjektet. 
                  Vi har ulik bakgrunn og interesser, noe som har vist seg å være en styrke. 
                  Der én person har slitt, har en annen kunnet bidra med kunnskap eller et 
                  nytt perspektiv.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vi etablerte tidlig rutiner for samarbeid, inkludert daglige korte møter, 
                  ukentlige retrospektiver, og en kultur for å gi konstruktiv tilbakemelding. 
                  Dette har skapt et trygt miljø hvor vi har kunnet diskutere utfordringer 
                  åpent og lære av hverandres feil.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Prosjektet har også styrket våre vennskap. Vi har tilbrakt mange timer 
                  sammen, både i arbeid og pauser, og har utviklet en gjensidig respekt og 
                  forståelse som vi vil ta med oss videre.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Future */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Veien videre</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Erfaringene fra dette prosjektet har gitt oss en tydeligere idé om hva vi 
                  ønsker å jobbe med etter endt utdanning. Vi har fått smaken på hvordan det 
                  er å jobbe med reelle prosjekter og reelle kunder, og det har styrket vår 
                  motivasjon for en karriere innen IT.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vi tar med oss ikke bare tekniske ferdigheter, men også en forståelse for 
                  prosjektarbeid, samarbeid og kommunikasjon som vi tror vil være verdifull 
                  uansett hvilken retning vi velger å gå.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Conclusion */}
              <section>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Avslutning</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  IS-302 Praksisprosjekt har vært en av de mest givende erfaringene i løpet av 
                  studiet vårt. Vi vil takke praksispartneren for tilliten de har vist oss, 
                  veilederen vår for støtte og veiledning, og ikke minst hverandre for et 
                  fantastisk samarbeid.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vi er stolte av det vi har oppnådd, og ser frem til å bruke det vi har lært 
                  i fremtidige prosjekter og karrierer.
                </p>
                <p className="text-card-foreground font-medium mt-6 italic">
                  - Kristian, Brage og Victor (TechTrio)
                </p>
              </section>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}
