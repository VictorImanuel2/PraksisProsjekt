type PageHeroProps = {
  title: string
  lead: string
}

export function PageHero({ title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-yellow px-5 pb-[60px] pt-14">
      <div className="diagonal-stripes absolute inset-0" />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
        <h1 className="mb-3.5 font-display text-[clamp(40px,6.5vw,76px)] font-extrabold uppercase leading-[0.95] text-brand-ink">
          {title}
        </h1>
        <p className="max-w-[640px] text-lg leading-relaxed text-black/70 text-pretty">
          {lead}
        </p>
      </div>
    </section>
  )
}
