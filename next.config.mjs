const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: isProd ? 'export' : undefined,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  basePath: process.env.PREFIX ?? undefined,
  assetPrefix: process.env.PREFIX ?? undefined,

  env: {
    PREFIX: process.env.PREFIX ?? '',
  },
}

export default nextConfig
