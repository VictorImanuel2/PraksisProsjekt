export type TeamMember = {
  name: string
  role: string
  initials: string
  image?: string
  linkedin: string
  github?: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Kristian Espevik",
    role: "Gruppeleder",
    initials: "KE",
    image: "/images/kristian.png",
    linkedin: "https://www.linkedin.com/in/kristian-espevik-074435220/",
    github: "https://github.com/KristianEspevikUIA",
    bio: "Kristian studerer IT og informasjonssystemer ved UiA (2024–). Han har erfaring med systemutvikling, databaser og IT-sikkerhet, og har blant annet utviklet et fullverdig hinderregistreringssystem for Kartverket i ASP.NET Core MVC med MariaDB og Docker. Han kombinerer teknisk presisjon med gode samarbeids- og kommunikasjonsevner, og motiveres av å bygge løsninger som faktisk fungerer i praksis.",
  },
  {
    name: "Brage Kristoffersen",
    role: "Utvikler",
    initials: "BK",
    image: "/images/brage.png",
    linkedin: "https://www.linkedin.com/in/brage-kristoffersen-a0b9ba289/",
    github: "https://github.com/brege03",
    bio: "Brage studerer IT og informasjonssystemer ved UiA (2024–). Han har en variert bakgrunn med erfaring fra Sjøforsvaret som vognfører på Haakonsvern, og jobber i dag som tilkallingsvikar ved Mandal fengsel. Han er vant til å ta ansvar, jobbe strukturert og fungere godt i team – egenskaper han tar med seg inn i IT-studiet og praksisprosjektet.",
  },
  {
    name: "Victor Ziadpour",
    role: "Utvikler",
    initials: "VZ",
    image: "/images/victor.png",
    linkedin: "https://www.linkedin.com/in/victor-ziadpour-8a7a29345/",
    github: "https://github.com/VictorImanuel2",
    bio: "Victor studerer IT og informasjonssystemer ved UiA (2024–2027). Han har praktisk erfaring med full-stack utvikling gjennom egne prosjekter – blant annet en nettside for en lokal gull- og sølvhandel med sanntids prisintegrasjon, og et interaktivt beredskapskart for Kristiansand. Han har erfaring med React, TypeScript, Flask, ASP.NET og Supabase, og er spesielt interessert i backend-utvikling og API-integrasjoner.",
  },
  {
    name: "Taavi-Topias Henell",
    role: "Utvikler",
    initials: "TH",
    linkedin: "https://www.linkedin.com/in/taavith/",
    github: "https://github.com/HenellTT",
    bio: "Taavi-Topias studerer IT og informasjonssystemer ved UiA (2024–2027). Han har en internasjonal bakgrunn med flytende norsk, engelsk og finsk. Han har tekniske ferdigheter innen HTML, CSS, JavaScript, C#, Python og SQL, og kombinerer strukturert arbeidserfaring med et voksende fokus på systemutvikling.",
  },
]
