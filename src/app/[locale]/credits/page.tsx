import { makePage } from '@/components/makePage'
import { ImageSlideLayout } from '@/layouts/ImageSlideLayout'
import creditImage from './credits.webp'

export default makePage((dictionary) => (
  <ImageSlideLayout src={creditImage} alt={dictionary.pages.credits.title} backButtonTarget="/the-immersive-cathedral" />
))
