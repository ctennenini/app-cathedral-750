import { ExtraContentProps } from '@/layouts/shared/ColumnExtraContent'
import { usePage } from '@/utils/usePage'

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
