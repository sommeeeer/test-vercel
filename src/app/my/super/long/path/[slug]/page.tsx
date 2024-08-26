import Buttons from '@/components/buttons';

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/Oslo', {
    next: {
      tags: ['time'],
    },
  });
  const time = await res.json();
  return (
    <div className="flex items-center flex-col justify-center gap-4">
      <h1>Current time in Oslo:</h1>
      <h1>Slug: {params.slug}</h1>
      <p>{time.datetime}</p>
      <Buttons />
    </div>
  );
}
