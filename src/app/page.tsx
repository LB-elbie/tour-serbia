// src/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockLandmarks } from '@/features/landmarks/mockData';
import LandmarkCard from '@/components/LandmarkCard';
import InteractiveMap from '@/features/map/InteractiveMap';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Serbia</h1>
      <InteractiveMap />
    </main>
  );
}

