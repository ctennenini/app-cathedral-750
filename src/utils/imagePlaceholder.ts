import { ImageProps } from 'next/image'

/**
 * A blurred preview while the image loads, when the image has one. Next.js only creates them for imported
 * JPEG, PNG and WebP files; asking for one on a GIF (or a plain URL) makes the page fail to render.
 */
export function imagePlaceholder(src: ImageProps['src']): 'blur' | 'empty' {
  return typeof src === 'object' && 'blurDataURL' in src && src.blurDataURL ? 'blur' : 'empty'
}
