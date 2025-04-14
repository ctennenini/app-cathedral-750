import { makePage } from '@/components/makePage'
import { defaultLanguage } from '@/config'
import { redirect } from 'next/navigation'

export default makePage(() => {
  return redirect(`/${defaultLanguage}`)
})
