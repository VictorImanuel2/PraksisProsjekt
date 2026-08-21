import { PageHero } from "@/components/page-hero"
import { features, fiveCs, roles } from "@/lib/oppgave"

export default function OppgavebeskrivelsePage() {
  return (
    <div>
      <PageHero
        title="Oppgavebeskrivelse"
        lead="StartCompass er en digital trenerhub for utviklingsavdelingen i IK Start, som samler oversikten over spillere og lag og automatiserer den ukentlige sporingen av de fem C-ene."
      />

      {/* Oppdraget */}
      <section className="px-5 pt-[60px]">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
          <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
            Oppdraget
          </h2>
          <p className="mb-3.5 text-base leading-[1.75] text-muted-foreground text-pretty">
            Utviklingsavdelingen i IK Start følger spillerne sine tett, men
            oversikten ligger spredt og den ukentlige oppfølgingen gjøres manuelt.
            Vi skal bygge en plattform som samler dette: en trenerhub der spillere
            og lag vises både individuelt og kollektivt.
          </p>
          <p className="text-base leading-[1.75] text-muted-foreground text-pretty">
            Kjernen i løsningen er en sammenligning. Spilleren vurderer seg selv,
            treneren registrerer sin forventning, og systemet viser avviket mellom
            dem. Det gjør det synlig når trener og spiller har ulikt bilde av
            situasjonen — og det er ofte der utviklingsarbeidet begynner.
          </p>
        </div>
      </section>

      {/* De fem C-ene */}
      <section className="px-5 pt-[60px]">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
          <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
            De fem C-ene
          </h2>
          <p className="mb-10 max-w-[680px] text-base leading-[1.75] text-muted-foreground text-pretty">
            Rammeverket klubben måler utvikling etter. Hver uke rangerer spilleren
            seg selv fra 1 til 5 på hvert av de fem punktene.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            {fiveCs.map((c) => (
              <article
                key={c.title}
                className="border border-t-[5px] border-border border-t-brand-blue bg-card p-6"
              >
                <h3 className="mb-2.5 font-display text-[25px] font-bold uppercase leading-[1.05] text-foreground">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-muted-foreground text-pretty">
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hva systemet skal gjøre */}
      <section className="px-5 pt-[60px]">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
          <h2 className="mb-10 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
            Hva systemet skal gjøre
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {features.map((f) => (
              <article
                key={f.title}
                className="border border-l-[6px] border-border border-l-brand-ink bg-card px-7 py-6"
              >
                <h3 className="mb-2.5 font-display text-[25px] font-bold uppercase leading-[1.05] text-foreground">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-muted-foreground text-pretty">
                  {f.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roller */}
      <section className="px-5 pt-[60px] pb-[76px]">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative overflow-hidden bg-brand-ink p-10">
            <div
              className="absolute -right-[60px] bottom-0 top-0 w-[40%] bg-brand-yellow opacity-[0.12]"
              style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div className="relative">
              <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
              <h2 className="mb-3.5 font-display text-[34px] font-extrabold uppercase leading-none text-white">
                Rollebasert tilgang
              </h2>
              <p className="mb-9 max-w-[680px] text-base leading-[1.75] text-white/[0.78] text-pretty">
                Løsningen håndterer opplysninger om mindreårige. Derfor styrer
                rollen hva den enkelte får se, slik at ingen har tilgang til mer
                enn det de trenger.
              </p>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
                {roles.map((r) => (
                  <div key={r.title} className="border-t-[3px] border-brand-yellow pt-4">
                    <h3 className="mb-2 font-display text-[21px] font-bold uppercase leading-[1.05] text-brand-yellow">
                      {r.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-white/[0.7] text-pretty">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
