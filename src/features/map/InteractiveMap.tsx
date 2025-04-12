// src/features/map/InteractiveMap.tsx
'use client';

import dynamic from 'next/dynamic';
import { mockLandmarks } from '@/features/landmarks/mockData'; // Import mock data

// Dynamically import the MapComponent with SSR disabled
const MapWithNoSSR = dynamic(() => import('./MapComponent'), { ssr: false });

export default function InteractiveMap() {
  return (
    <div>
      <MapWithNoSSR landmarks={mockLandmarks} /> {/* Pass landmarks to MapComponent */}
    </div>
  );
}
