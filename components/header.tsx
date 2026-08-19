"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/oppgavebeskrivelse", label: "Oppgavebeskrivelse" },
  { href: "/status-1", label: "Status 1" },
  { href: "/status-2", label: "Status 2" },
  { href: "/dagbok", label: "Dagbok" },
  { href: "/refleksjon", label: "Refleksjon" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-brand-ink bg-brand-yellow">
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="grid place-items-center border border-black/10 bg-white p-1">
            <Image
              src="/images/start-logo.png"
              alt="Start"
              width={40}
              height={40}
              className="block h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-[1.05]">
            <span className="font-display text-[23px] font-extrabold uppercase tracking-[0.06em] text-brand-ink">
              TechSquad
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/60">
              IS-302 Praksisprosjekt
            </span>
          </span>
        </Link>

        {/* Desktop-navigasjon */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap px-[13px] py-[9px] text-[13px] font-bold uppercase tracking-[0.1em] no-underline transition-colors",
                pathname === link.href
                  ? "bg-brand-ink text-brand-yellow"
                  : "text-black/60 hover:text-brand-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobilmeny-knapp */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={mobileMenuOpen}
          className="grid h-[42px] w-[42px] place-items-center border border-black/20 lg:hidden"
        >
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-[18px] bg-brand-ink" />
            <span className="block h-0.5 w-[18px] bg-brand-ink" />
            <span className="block h-0.5 w-[18px] bg-brand-ink" />
          </span>
        </button>
      </div>

      {/* Mobilnavigasjon */}
      {mobileMenuOpen && (
        <nav className="bg-brand-ink lg:hidden">
          <div className="flex flex-col gap-0.5 px-5 pb-4 pt-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3.5 py-3 text-sm font-bold uppercase tracking-[0.1em] no-underline transition-colors",
                  pathname === link.href
                    ? "bg-brand-yellow text-brand-ink"
                    : "text-white/80 hover:text-brand-yellow",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
