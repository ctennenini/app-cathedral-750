// src/app/[locale]/timeline/page.tsx

import { TextPageLayout } from '@/layouts/TextPageLayout'
import { TimelineEvent } from '@/layouts/TextPageLayout/TimelineLayout'
import heroImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

const timelineEvents: TimelineEvent[] = [
  {
    year: '1133',
    title: 'Inizio costruzione della cattedrale',
    description: 'La costruzione della Grossmünster iniziò sotto l imperatore Enrico IV.',
  },
  {
    year: '1523',
    title: 'Riforma di Zwingli',
    description: 'Ulrich Zwingli lancia il movimento della Riforma protestante a Zurigo.',
  },
  {
    year: '1833',
    title: 'Fondazione dell’Università di Zurigo',
    description: 'La prima università europea fondata da uno stato democratico.',
  },
    {
    year: '1133',
    title: 'Inizio costruzione della cattedrale',
    description: 'La costruzione della Grossmünster iniziò sotto l imperatore Enrico IV.',
  },
  {
    year: '1523',
    title: 'Riforma di Zwingli',
    description: 'Ulrich Zwingli lancia il movimento della Riforma protestante a Zurigo.',
  },
  {
    year: '1833',
    title: 'Fondazione dell’Università di Zurigo',
    description: 'La prima università europea fondata da uno stato democratico.',
  },
]

export default function TimelinePage() {
  return (
    <TextPageLayout
      title="Storia della Cattedrale"
      subtitle="Una linea del tempo degli eventi più significativi"
      text="Esplora i momenti chiave che hanno segnato la storia della Grossmünster nel corso dei secoli."
      bgImg={heroImg}
      bgImgAlt="Veduta aerea della Grossmünster"
      withHomeButton
      pullOutContent={{
        type: 'timeline',
        events: timelineEvents,
      }}
    />
  )
}
