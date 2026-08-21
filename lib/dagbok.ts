export type DagbokEntry = {
  week: string
  title: string
  body: string
}

// Eldste først - dagboken leses som et forløp gjennom semesteret.
export const dagbokEntries: DagbokEntry[] = [
  {
    week: "Uke 33",
    title: "Første møte med bedriften",
    body: "Første møte med bedriften og presentasjon av prosjekter for gruppene.",
  },
  {
    week: "Uke 34",
    title: "Prosjektet er i gang",
    body: "Andre møte med bedriften. Oppgaven var fortsatt litt uklar i starten av uken, men vi kom skikkelig i gang mot slutten. Vi satte opp prosjektet i Visual Studio Code med MVC-struktur, og fikk laget navigasjonskart og wireframes. Nettsiden til IS-302 ble også ferdigstilt.",
  },
]
