/**
 * Adds the site's base path (e.g. "/app-cathedral-750" on GitHub Pages) to a path of a file in public/,
 * e.g. "/videos/Amsler.mp4". Next.js does this by itself for links and imported images, but not for
 * plain paths like video sources, which would otherwise point to the root of the domain.
 */
export function withBasePath(path: string) {
  const prefix = process.env.PREFIX ?? ''
  if (!path.startsWith('/') || (prefix && path.startsWith(`${prefix}/`))) {
    return path
  }
  return `${prefix}${path}`
}
