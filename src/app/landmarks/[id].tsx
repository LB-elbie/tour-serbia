// src/app/landmarks/[id].tsx
import { useRouter } from 'next/router';
import { mockLandmarks } from '@/features/landmarks/mockData';
import { Landmark } from '@/types/landmark';

const LandmarkPage = () => {
  const { query } = useRouter();
  const { id } = query;

  console.log("Landmark ID in URL:", id);  // Debugging line to ensure it's coming through

  if (!id) {
    return <div>Loading...</div>;
  }

  // Find the landmark by ID
  const landmark = mockLandmarks.find((l) => l.id === id);

  if (!landmark) {
    return <div>Landmark not found</div>;
  }

  return (
    <div>
      <h1>{landmark.name}</h1>
      <p>{landmark.description}</p>
      <img src={landmark.image} alt={landmark.name} />
      <p>Location: {landmark.location}</p>
    </div>
  );
};

export default LandmarkPage;
