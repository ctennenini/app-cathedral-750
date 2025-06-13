import { TextPageLayout } from '@/layouts/TextPageLayout'


import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.biodeterioration.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.degradationTypes.title}
      text={pages.degradationTypes.biodeterioration.description}
      backButtonTarget="/degradation-types/sanding"
      actions={[
        {
          type: 'back',
          label: pages.weatheringOfMolasse.title,
          target: '/molasse-and-its-weathering',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: biodeteriorationExample,
        },
      ]}
    />
  )
})
