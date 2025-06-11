import createMDX from '@next/mdx'

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
