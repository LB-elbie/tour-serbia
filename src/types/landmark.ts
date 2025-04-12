// src/types/landmark.ts

export type Landmark = {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
  latitude: number;  // Add latitude
  longitude: number; // Add longitude
};
