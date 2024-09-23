import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // experimental: {
  //   typedRoutes: true,
  // },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
