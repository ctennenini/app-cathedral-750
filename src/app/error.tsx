'use client'

export default function Error(...args: unknown[]) {
  console.error('Error:', args)
  return <h1>Error</h1>
}
