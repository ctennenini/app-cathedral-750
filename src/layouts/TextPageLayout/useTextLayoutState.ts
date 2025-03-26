import { ExtraContentProps } from '@/layouts/shared/ColumnExtraContent'
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation'

export type TextLayoutState<T extends ExtraContentProps> = ReturnType<typeof useTextLayoutState<T>>

export function useTextLayoutState<T extends ExtraContentProps>(
  text: string | string[] | string[][],
  extraContent?: T | T[],
) {
  const [page, setPage] = usePage(text)

  if (extraContent && !Array.isArray(extraContent)) {
    extraContent = [extraContent]
  }

  if (Array.isArray(text) && Array.isArray(text[0])) {
    const hasMore = text.length > page + 1
    const hasPrevious = page > 0
    const extraContentIndex = extraContent ? Math.min(page, extraContent?.length - 1) : 0

    return {
      text: text[page] as string[],
      goForward: hasMore ? () => setPage(page + 1) : undefined,
      goBack: hasPrevious ? () => setPage(page - 1) : undefined,
      extra: extraContent?.[extraContentIndex],
    }
  } else if (Array.isArray(text)) {
    return { text: text as string[], extra: extraContent?.[0] }
  } else {
    return { text: [text], extra: extraContent?.[0] }
  }
}

function usePage(text: string | string[] | string[][]) {
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
