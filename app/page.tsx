import Image from "next/image"
import Link from "next/link"
import { teamMembers } from "@/lib/team"
import { asset } from "@/lib/base-path"

const stats = [
  { value: "04", label: "Gruppemedlemmer" },
  { value: "UiA", label: "Universitetet i Agder" },
  { value: "H26", label: "Høstsemesteret" },
]

const highlights = [
  {
    number: "01",
    title: "Teamet vårt",
    text: "Fire engasjerte IT-studenter med ulik bakgrunn og kompetanse, klare til å jobbe sammen mot felles mål.",
    accent: "border-t-brand-blue",
  },
  {
    number: "02",
    title: "Læringsmål",
    text: "Vi ønsker å få praktisk erfaring med prosjektarbeid, samarbeid med bedrifter og anvendelse av akademisk kunnskap.",
    accent: "border-t-brand-ink",
  },
  {
    number: "03",
    title: "Tidsramme",
    text: "Prosjektet vil gjennomføres i løpet av høstsemesteret 2026, med jevnlige statusoppdateringer.",
    accent: "border-t-brand-blue",
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-yellow px-5 pb-24 pt-[84px]">
        <div className="diagonal-stripes absolute inset-0" />
        <div
          className="absolute -right-20 bottom-0 top-0 w-[46%] bg-brand-ink opacity-[0.09]"
          style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="relative mx-auto flex max-w-[1180px] flex-col items-start gap-[26px]">
          <p className="inline-flex items-center gap-2.5 bg-brand-ink px-3.5 py-[7px] text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
            IS-302 Praksisprosjekt <span className="opacity-50">|</span> Høst 2026
          </p>
          <h1 className="font-display text-[clamp(52px,9vw,116px)] font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-brand-ink text-balance">
            Start<span className="text-brand-blue">Compass</span>
          </h1>
          <p className="max-w-[620px] text-[19px] leading-relaxed text-black/70 text-pretty">
            En digital trenerhub for utviklingsavdelingen i IK Start. Spillere og
            foresatte vurderer de fem C-ene hver uke, og systemet viser avviket
            mellom spillerens egen opplevelse og trenerens forventning.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/oppgavebeskrivelse"
              className="inline-flex items-center gap-3 bg-brand-ink px-[26px] py-4 font-display text-[19px] font-bold uppercase tracking-[0.1em] text-brand-yellow no-underline transition-colors hover:bg-brand-blue hover:text-brand-yellow hover:no-underline"
            >
              Om oppgaven <span className="text-base">→</span>
            </Link>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-3 border-2 border-brand-ink px-[26px] py-4 font-display text-[19px] font-bold uppercase tracking-[0.1em] text-brand-ink no-underline transition-colors hover:bg-brand-ink hover:text-brand-yellow hover:no-underline"
            >
              Møt teamet
            </Link>
          </div>
        </div>
      </section>

      {/* Nøkkeltall */}
      <section className="bg-brand-ink">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index < stats.length - 1
                  ? "border-r border-white/10 px-5 py-[26px]"
                  : "px-5 py-[26px]"
              }
            >
              <div className="font-display text-[40px] font-extrabold leading-none text-brand-yellow">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Om oss */}
      <section className="px-5 py-[76px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-11 max-w-[660px]">
            <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
            <h2 className="mb-3.5 font-display text-[clamp(32px,4.4vw,46px)] font-extrabold uppercase leading-none text-foreground">
              Om oss
            </h2>
            <p className="text-[17px] leading-relaxed text-muted-foreground text-pretty">
              IS-302 Praksisprosjekt er et emne ved Universitetet i Agder hvor
              studenter får praktisk erfaring gjennom samarbeid med næringslivet.
              Vi gleder oss til å ta fatt på denne spennende utfordringen.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {highlights.map((item) => (
              <article
                key={item.number}
                className={`border border-t-[5px] border-border bg-card p-7 ${item.accent}`}
              >
                <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                  {item.number}
                </div>
                <h3 className="mb-2.5 font-display text-[25px] font-bold uppercase leading-[1.05] text-foreground">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gruppemedlemmer */}
      <section className="border-t border-border bg-card px-5 py-[76px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
              <h2 className="mb-2.5 font-display text-[clamp(32px,4.4vw,46px)] font-extrabold uppercase leading-none text-foreground">
                Gruppemedlemmer
              </h2>
              <p className="text-[17px] text-muted-foreground">
                TechSquad består av fire studenter fra IT-studiet ved UiA.
              </p>
            </div>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-2.5 border-2 border-brand-blue px-5 py-3 font-display text-[17px] font-bold uppercase tracking-[0.1em] text-brand-blue no-underline transition-colors hover:bg-brand-blue hover:text-white hover:no-underline"
            >
              Les mer om oss <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[18px]">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="border border-border bg-background"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-ink">
                  {member.image ? (
                    <Image
                      src={asset(member.image)}
                      alt={`Bilde av ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center font-display text-[56px] font-extrabold text-brand-yellow/90">
                      {member.initials}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 bg-brand-ink px-2.5 py-[5px] text-[11px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
                    {member.role}
                  </div>
                </div>
                <div className="px-4 pb-[18px] pt-3.5">
                  <div className="font-display text-[21px] font-bold uppercase leading-[1.05] text-foreground">
                    {member.name}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
