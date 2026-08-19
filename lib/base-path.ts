// basePath legges ikke automatisk på <Image src> eller andre rå filstier,
// så statiske filer i public/ må prefikses manuelt.
// Verdien inlines ved bygging fordi den er en NEXT_PUBLIC-variabel.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function asset(path: string): string {
  return `${basePath}${path}`
}
