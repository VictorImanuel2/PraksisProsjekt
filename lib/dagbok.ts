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
    title: "Andre møte med bedriften",
    body: "Andre møte med bedriften. Fortsatt litt uklart hva oppgaven blir. Fullfører arbeidet på nettsiden til IS-302.",
  },
]
