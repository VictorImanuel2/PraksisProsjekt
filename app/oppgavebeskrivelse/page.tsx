import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function OppgavebeskrivelsePage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Oppgavebeskrivelse</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Informasjon om praksisprosjektet vårt.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border bg-muted/30">
            <CardContent className="p-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oppgavebeskrivelsen vil bli publisert når praksisprosjektet starter høst 2026.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
