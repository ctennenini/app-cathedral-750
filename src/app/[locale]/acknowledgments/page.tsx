import { makePage } from '@/components/makePage'
import { ImageSlideLayout } from '@/layouts/ImageSlideLayout'
import creditImage from './credits2.webp'

export default makePage((dictionary) => (
  <ImageSlideLayout src={creditImage} alt={dictionary.pages.acknowledgments.title} backButtonTarget="/the-immersive-cathedral" />
))
