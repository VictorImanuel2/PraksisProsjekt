/** @type {import('next').NextConfig} */

// Settes av GitHub Actions til '/PraksisProsjekt'. Tom lokalt, slik at
// `next dev` og `next build` kjører på rot uten prefiks.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig = {
  // Statisk eksport til ./out - GitHub Pages serverer kun statiske filer.
  output: 'export',
  basePath,
  // Gir om-oss/index.html i stedet for om-oss.html, som GitHub Pages
  // serverer direkte på /om-oss/.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
