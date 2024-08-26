'use client';

import { revalidateTimeAction } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Buttons() {
  const [done, setDone] = useState(false);
  const router = useRouter();
  return (
    <div className="flex gap-4">
      <button
        className="btn btn-primary"
        disabled={done}
        onClick={() => revalidateTimeAction()}
      >
        Revalidate
      </button>
      <button className="btn btn-primary" onClick={() => router.refresh()}>
        router.refresh()
      </button>
    </div>
  );
}
