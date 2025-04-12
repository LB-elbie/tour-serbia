// src/components/LandmarkCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Landmark } from '@/types/landmark';

export default function LandmarkCard({ landmark }: { landmark: Landmark }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border bg-white">
      <Image
        src={landmark.image}
        alt={landmark.name}
        width={400}
        height={250}
        className="object-cover w-full h-52"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{landmark.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{landmark.location}</p>
        <Link
          href={`/landmarks/${landmark.id}`}
          className="text-indigo-600 hover:underline text-sm"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
