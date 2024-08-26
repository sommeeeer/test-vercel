import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <Link className="btn btn-primary" href="/path/to/my">
          Go to "/path/to/my"
        </Link>
        <Link className="btn btn-primary" href="/path">
          Go to "/path"
        </Link>
        <Link className="btn btn-primary" href="/my/super/long/path/hello">
          Go to "/my/super/long/path/[slug]"
        </Link>
        <a className="btn btn-secondary" href="/tags">
          getByTag('time')
        </a>
      </div>
    </main>
  );
}
