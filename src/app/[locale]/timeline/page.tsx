// src/app/[locale]/timeline/page.tsx

import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'
import heroImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

// Import delle immagini locali
import towerold from './tower/tour_lantern_old.png'
import towerfire from './tower/tour_lantern_fire.png'
import towerproj from './tower/tour_lantern_project.png'
import towernew from './tower/tour_lantern_new.png'
import hystory from './history.jpg'

export default makePage((dictionary) => {
  const pages = dictionary.pages
  const timelineData = (pages as any).timeline // Accesso sicuro con type assertion

  // Funzione helper per convertire array di stringhe in testo semplice
  const formatDescription = (descArray: string[]) => {
    return descArray.join('\n\n') // Unisce i paragrafi con doppio a capo
  }

  // Costruisci gli eventi della timeline dai dati del dictionary JSON
  const timelineEvents = [
    {
      year: timelineData.event1170.year,
      title: timelineData.event1170.title,
      description: timelineData.event1170.description[0], // Prima frase per la timeline
      fullDescription: formatDescription(timelineData.event1170.fullDescription), // Testo completo per il popup
      images: [
        {
          src: hystory.src,
          alt: timelineData.event1170.imageAlt,
          width: 300,
          height: 450
        }
      ]
    },
    {
      year: timelineData.event1523.year,
      title: timelineData.event1523.title,
      description: timelineData.event1523.description[0],
      fullDescription: formatDescription(timelineData.event1523.fullDescription),
      images: [
        {
          src: towerold.src,
          alt: timelineData.event1523.imageAlt1,
          width: 300,
          height: 450
        },
        {
          src: towerfire.src,
          alt: timelineData.event1523.imageAlt2,
          width: 300,
          height: 450
        }
      ]
    },
    {
      year: timelineData.event1833.year,
      title: timelineData.event1833.title,
      description: timelineData.event1833.description[0],
      fullDescription: formatDescription(timelineData.event1833.fullDescription),
      images: [
        {
          src: towerproj.src,
          alt: timelineData.event1833.imageAlt,
          width: 300,
          height: 450
        }
      ]
    },
    {
      year: timelineData.event1950.year,
      title: timelineData.event1950.title,
      description: timelineData.event1950.description[0],
      fullDescription: formatDescription(timelineData.event1950.fullDescription),
      images: [
        {
          src: towernew.src,
          alt: timelineData.event1950.imageAlt1,
          width: 300,
          height: 450
        },
        {
          src: hystory.src,
          alt: timelineData.event1950.imageAlt2,
          width: 300,
          height: 400
        },
        // Aggiungiamo più immagini per testare lo scroll
        {
          src: towerold.src,
          alt: "Additional image 1",
          width: 300,
          height: 450
        },
        {
          src: towerfire.src,
          alt: "Additional image 2",
          width: 300,
          height: 450
        },
        {
          src: towerproj.src,
          alt: "Additional image 3",
          width: 300,
          height: 450
        }
      ]
    },
    // {
    //   year: timelineData.event2009.year,
    //   title: timelineData.event2009.title,
    //   description: timelineData.event2009.description[0],
    //   fullDescription: formatDescription(timelineData.event2009.fullDescription),
    //   images: [
    //     {
    //       src: towerold.src,
    //       alt: timelineData.event2009.imageAlt,
    //       width: 300,
    //       height: 450
    //     }
    //   ]
    // },
    // {
    //   year: timelineData.event2020.year,
    //   title: timelineData.event2020.title,
    //   description: timelineData.event2020.description[0],
    //   fullDescription: formatDescription(timelineData.event2020.fullDescription),
    //   images: [
    //     {
    //       src: towerfire.src,
    //       alt: timelineData.event2020.imageAlt1,
    //       width: 300,
    //       height: 450
    //     },
    //     {
    //       src: towerproj.src,
    //       alt: timelineData.event2020.imageAlt2,
    //       width: 300,
    //       height: 400
    //     }
    //   ]
    // }
  ]

  return (
    <TextPageLayout
      title={timelineData.title}
      subtitle={timelineData.subtitle}
      text={timelineData.description.join('<br><br>')} // Usa tag HTML per a capo
      bgImg={heroImg}
      bgImgAlt={timelineData.bgImgAlt}
      withHomeButton
      backButtonTarget='/conservation-strategies'
      pullOutContent={{
        type: 'timeline',
        events: timelineEvents,
      }}
    />
  )
})