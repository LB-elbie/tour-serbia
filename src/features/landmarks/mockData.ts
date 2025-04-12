// src/features/landmarks/mockData.ts
import { Landmark } from '@/types/landmark';

export const mockLandmarks: Landmark[] = [
  {
    id: '1',
    name: 'Uvac Canyon',
    location: 'Southwestern Serbia',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Check URL
    description: 'A stunning meandering canyon famous for its Griffon vultures.',
    tags: ['nature', 'hiking', 'viewpoint', 'lake'],
    latitude: 43.43, // Ensure latitude is valid
    longitude: 19.71, // Ensure longitude is valid
  },
  {
    id: '2',
    name: 'Đavolja Varoš',
    location: 'Southern Serbia',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Check URL
    description: 'Otherworldly rock formations formed by erosion.',
    tags: ['natural wonder', 'UNESCO', 'rock formations'],
    latitude: 43.42, // Ensure latitude is valid
    longitude: 22.25, // Ensure longitude is valid
  },
  {
    id: '3',
    name: 'Tara National Park',
    location: 'Western Serbia',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Check URL
    description: 'A large forested area ideal for hiking and wildlife watching.',
    tags: ['forest', 'wildlife', 'camping'],
    latitude: 44.10, // Ensure latitude is valid
    longitude: 19.43, // Ensure longitude is valid
  },
];

