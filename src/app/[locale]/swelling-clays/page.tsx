import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import img1 from './swelling-clays-01.png'
import img2 from './swelling-clays-02.png'

export default async function SwellingClays({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.swellingClays.title}
      subtitle={pages.weatheringMechanisms.title}
      text={pages.swellingClays.description}
      backButtonTarget="/weathering-mechanisms"
      actions={[
        {
          type: 'back',
          label: pages.weatheringMechanisms.title,
          target: '/weathering-mechanisms',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: img1,
          labels: [
            {
              text: pages.swellingClays.labels.wetting,
              style: {
                top: 0,
                left: 0,
                width: '50%',
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#2e4556',
                fontStyle: 'italic',
              },
            },
            {
              text: pages.swellingClays.labels.drying,
              style: {
                top: 0,
                left: '50%',
                width: '50%',
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#447294',
                fontStyle: 'italic',
              },
            },
            {
              text: pages.swellingClays.labels.dryBlock,
              style: {
                left: '38%',
                top: '9%',
                width: '20%',
                fontSize: '1.5rem',
                color: '#050505',
              },
            },
            {
              text: pages.swellingClays.labels.wetBlock,
              style: {
                left: '85%',
                top: '9%',
                fontSize: '1.5rem',
                color: '#050505',
              },
            },
            {
              text: pages.swellingClays.labels.buckling,
              style: {
                left: 0,
                top: '90%',
                width: '50%',
                textAlign: 'center',
                fontSize: '1.5rem',
                color: '#050505',
              },
            },
            {
              text: pages.swellingClays.labels.peeling,
              style: {
                left: '40%',
                top: '90%',
                width: '33%',
                textAlign: 'center',
                fontSize: '1.5rem',
                color: '#050505',
              },
            },
            {
              text: pages.swellingClays.labels.mudCracking,
              style: {
                left: '66%',
                top: '90%',
                width: '33%',
                textAlign: 'center',
                fontSize: '1.5rem',
                color: '#050505',
              },
            },
          ],
        },
        {
          type: 'image',
          src: img2,
          labels: [
            {
              text: pages.swellingClays.labels.dry,
              style: {
                top: 0,
                left: 0,
                width: '50%',
                textAlign: 'center',
                fontSize: '2.3rem',
              },
            },
            {
              text: pages.swellingClays.labels.wet,
              style: {
                top: 0,
                left: '50%',
                width: '50%',
                textAlign: 'center',
                fontSize: '2.3rem',
              },
            },
            {
              text: pages.swellingClays.labels.swelling,
              style: {
                top: '9%',
                left: '50%',
                width: '50%',
                textAlign: 'center',
                color: '#000000',
                fontSize: '1.2rem',
              },
            },
          ],
        },
      ]}
    />
  )
}
