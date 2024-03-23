'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/home');
    }, 2500);
  }, []);

  return (
    <div className="bg-[#01B275] w-full h-screen flex justify-center items-center">
      <Image
        src={'/logo.png'}
        alt="logo"
        width={200}
        height={200}
        className="rounded-full bg-white"
      />
    </div>
  );
}
