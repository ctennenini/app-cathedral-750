import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath:
    process.env.NODE_ENV === 'production' ? '/ethz-slideshow-poc/' : undefined,
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/ethz-slideshow-poc/' : undefined,
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
