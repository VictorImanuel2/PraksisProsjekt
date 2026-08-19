import type { ReactNode } from "react"

type ComingSoonProps = {
  children: ReactNode
  label?: string
}

export function ComingSoon({ children, label = "Kommer" }: ComingSoonProps) {
  return (
    <section className="px-5 pb-24 pt-[72px]">
      <div className="mx-auto max-w-[760px] border border-l-[6px] border-border border-l-brand-blue bg-card px-11 py-14">
        <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
          {label}
        </p>
        <p className="font-display text-[clamp(26px,3.4vw,38px)] font-bold uppercase leading-[1.08] text-foreground text-balance">
          {children}
        </p>
      </div>
    </section>
  )
}
