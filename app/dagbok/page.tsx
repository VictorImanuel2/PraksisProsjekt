import { PageHero } from "@/components/page-hero"
import { dagbokEntries } from "@/lib/dagbok"

export default function DagbokPage() {
  return (
    <div>
      <PageHero
        title="Dagbok"
        lead="Vår prosjektdagbok med jevnlige oppdateringer gjennom praksisperioden høst 2026."
      />

      <section className="px-5 pb-24 pt-[60px]">
        <ol className="mx-auto max-w-[820px]">
          {dagbokEntries.map((entry) => (
            <li
              key={entry.week}
              className="relative border-l-2 border-border pb-10 pl-8 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[9px] top-1.5 block h-4 w-4 bg-brand-blue"
              />

              <p className="mb-2.5 inline-block bg-brand-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
                {entry.week}
              </p>

              <h2 className="mb-2.5 font-display text-[28px] font-extrabold uppercase leading-none text-foreground">
                {entry.title}
              </h2>

              <p className="text-[15px] leading-[1.7] text-muted-foreground text-pretty">
                {entry.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-[820px] border border-l-[6px] border-border border-l-brand-blue bg-card px-7 py-5 text-[15px] leading-[1.7] text-muted-foreground">
          Dagboken oppdateres fortløpende gjennom praksisperioden.
        </p>
      </section>
    </div>
  )
}
