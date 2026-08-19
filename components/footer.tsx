import Image from "next/image"
import Link from "next/link"
import { asset } from "@/lib/base-path"

const footerLinks = [
  { href: "/", label: "Hjem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/dagbok", label: "Dagbok" },
]

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-yellow bg-brand-ink px-5 py-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={asset("/images/start-logo.png")}
            alt="Start"
            width={38}
            height={38}
            className="block h-[38px] w-[38px] object-contain"
          />
          <span className="font-display text-[21px] font-extrabold uppercase tracking-[0.06em] text-white">
            TechSquad
          </span>
        </div>

        <div className="flex flex-col gap-1.5 text-sm text-white/60">
          <span>IS-302 Praksisprosjekt | Universitetet i Agder</span>
          <span>&copy; 2026 TechSquad. Alle rettigheter reservert.</span>
        </div>

        <nav className="flex gap-[18px]">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.14em] text-white/70 no-underline transition-colors hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
