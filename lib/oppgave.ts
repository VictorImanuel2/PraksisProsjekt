export type Feature = {
  title: string
  text: string
}

// De fem C-ene er rammeverket klubben sporer utvikling etter.
// Norske navn må bekreftes med Start før siden regnes som endelig.
export const fiveCs: Feature[] = [
  {
    title: "Commitment",
    text: "Innsatsvilje og evne til å stå i langsiktig utvikling over tid.",
  },
  {
    title: "Communication",
    text: "Kommunikasjon med med- og motspillere, trenerteam og støtteapparat.",
  },
  {
    title: "Concentration",
    text: "Konsentrasjon og evne til å holde fokus gjennom en hel kamp eller økt.",
  },
  {
    title: "Control",
    text: "Selvkontroll og emosjonell regulering i pressede situasjoner.",
  },
  {
    title: "Confidence",
    text: "Selvtillit og tro på egne ferdigheter i kamp og trening.",
  },
]

export const features: Feature[] = [
  {
    title: "Samlet oversikt",
    text: "Trenerne får spillere og lag samlet ett sted, både individuelt og kollektivt, med en effektiv søkefunksjon.",
  },
  {
    title: "Ukentlig skjema",
    text: "Spillerne rangerer seg selv fra 1 til 5 på de fem C-ene. For de yngste fyller foresatte ut på vegne av spilleren.",
  },
  {
    title: "Sammenligning mot forventning",
    text: "Spillerens egen vurdering holdes opp mot trenerens forventning, slik at avviket mellom dem blir synlig.",
  },
  {
    title: "Utvikling over tid",
    text: "Grafer viser utviklingen ukentlig, månedlig og over mesosykluser på åtte til ni uker.",
  },
]

export const roles: Feature[] = [
  {
    title: "Administrator",
    text: "Forvalter brukere, lag og roller, og har tilgang på tvers av klubben.",
  },
  {
    title: "Trener",
    text: "Ser sine egne lag, registrerer forventninger og følger utviklingen til spillerne sine.",
  },
  {
    title: "Foresatt",
    text: "Fyller ut på vegne av de yngste spillerne og følger utviklingen til sitt eget barn.",
  },
  {
    title: "Spiller",
    text: "Fyller ut sitt eget skjema og ser sin egen utvikling over tid.",
  },
]
