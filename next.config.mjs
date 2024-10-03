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

  basePath: isProd ? '/ethz-slideshow-poc' : undefined,
  assetPrefix: isProd ? '/ethz-slideshow-poc' : undefined,

  env: {
    LANGUAGES: 'de,en,fr',
    DEFAULT_LANGUAGE: 'en',
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
