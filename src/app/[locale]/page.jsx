export const dynamic = true;

export async function generateStaticParams() {
  // eslint-disable-next-line prefer-rest-params
  // console.log('generateStaticParams', arguments);

  return [
    {
      locale: 'en',
    },
    {
      locale: 'de',
    },
  ];
}

export default function Home() {
  // eslint-disable-next-line prefer-rest-params
  console.log('Home', arguments);
  return <p>English!</p>;
}
