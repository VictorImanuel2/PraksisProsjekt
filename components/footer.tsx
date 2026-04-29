import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground">TT</span>
            </div>
            <span className="font-semibold text-foreground">TechTrio</span>
          </div>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <p>IS-302 Praksisprosjekt | Universitetet i Agder</p>
            <p>&copy; 2026 TechTrio. Alle rettigheter reservert.</p>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Hjem
            </Link>
            <Link href="/om-oss" className="text-muted-foreground hover:text-foreground transition-colors">
              Om oss
            </Link>
            <Link href="/dagbok" className="text-muted-foreground hover:text-foreground transition-colors">
              Dagbok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
