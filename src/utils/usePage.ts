import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const usePage = process.env.STORYBOOK ? useMemoryPage : useQueryStringPage

export { usePage }

function useQueryStringPage(text: string | string[] | string[][]) {
  const numPages = Array.isArray(text) && Array.isArray(text[0]) ? text.length : 1
  const params = useSearchParams()
  const router = useRouter()

  const setPage = (newPageIndex: number) => {
    const url = new URL(window.location.toString())
    url.searchParams.set('page', (newPageIndex + 1).toString())
    router.push(url.toString())
  }

  return [getPage(params, numPages), setPage] as const
}

function getPage(params: ReadonlyURLSearchParams, numPages: number) {
  const pageParam = params.get('page')
  try {
    const pageIndex = parseInt(params?.get('page') ?? '') - 1
    if (pageIndex >= 0 && pageIndex < numPages) {
      return pageIndex
    }
  } catch (e) {
    console.error(`error processing page parameter '${pageParam}':\n\n${e}`)
  }

  return 0
}

function useMemoryPage(text: string | string[] | string[][]) {
  const numPages = Array.isArray(text) && Array.isArray(text[0]) ? text.length : 1
  const [page, setPage] = useState(0)

  return [page, (newPageIndex: number) => setPage(Math.min(numPages - 1, Math.max(0, newPageIndex)))] as const
}
