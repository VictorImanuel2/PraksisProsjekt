import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { teamMembers } from "@/lib/team"

const linkStyles =
  "flex-1 border-2 border-brand-blue px-3 py-2.5 text-center font-display text-base font-bold uppercase tracking-[0.1em] text-brand-blue no-underline transition-colors hover:bg-brand-blue hover:text-white hover:no-underline"

export default function OmOssPage() {
  return (
    <div>
      <PageHero
        title="Om oss"
        lead="Vi er TechSquad - fire IT-studenter fra Universitetet i Agder som er klare for vårt IS-302 praksisprosjekt høsten 2026. Her kan du bli bedre kjent med teamet."
      />

      <section className="px-5 pb-[76px] pt-[60px]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-ink">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Bilde av ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center font-display text-[72px] font-extrabold text-brand-yellow/90">
                    {member.initials}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-6">
                <div>
                  <h2 className="mb-1.5 font-display text-[28px] font-extrabold uppercase leading-none text-foreground">
                    {member.name}
                  </h2>
                  <p className="inline-block bg-brand-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
                    {member.role}
                  </p>
                </div>

                <p className="flex-1 text-[15px] leading-[1.7] text-muted-foreground text-pretty">
                  {member.bio}
                </p>

                <div className="flex gap-2.5">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles}
                  >
                    LinkedIn
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkStyles}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-11 max-w-[1100px]">
          <div className="relative overflow-hidden bg-brand-ink p-10">
            <div
              className="absolute -right-[60px] bottom-0 top-0 w-[40%] bg-brand-yellow opacity-[0.12]"
              style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div className="relative max-w-[760px]">
              <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
              <h2 className="mb-[18px] font-display text-[34px] font-extrabold uppercase leading-none text-white">
                Om gruppen vår
              </h2>
              <p className="mb-3.5 text-base leading-[1.75] text-white/[0.78] text-pretty">
                TechSquad ble dannet som en del av emnet IS-302 Praksisprosjekt ved
                Universitetet i Agder. Vi er fire studenter med komplementære
                ferdigheter og en felles interesse for teknologi og innovasjon.
              </p>
              <p className="mb-3.5 text-base leading-[1.75] text-white/[0.78] text-pretty">
                Vår tilnærming til prosjektarbeid vil være basert på smidig
                metodikk, hvor vi planlegger å jobbe i korte iterasjoner med
                jevnlig tilbakemelding. Vi tror på åpen kommunikasjon,
                kunnskapsdeling og kontinuerlig forbedring.
              </p>
              <p className="text-base leading-[1.75] text-white/[0.78] text-pretty">
                Vi ser frem til å anvende teoretisk kunnskap fra studiet i en
                praktisk setting, samtidig som vi bygger verdifulle relasjoner med
                næringslivet og forbereder oss på arbeidslivet etter endt
                utdanning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
