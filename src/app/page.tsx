import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={'https://cdn.snurroslo.no/uploads/smakesnurr_main.jpg'}
        alt="Snurr"
        width={480}
        height={640}
      />
    </main>
  );
}
