// /app/landmarks/[id]/page.tsx
import { Landmark } from '@/types/landmark'; // Assuming Landmark is the type
import { mockLandmarks } from '@/features/landmarks/mockData'; // Mock data for now

const LandmarkPage = ({ params }: { params: { id: string } }) => {
  const landmarkId = params.id;
  const landmark = mockLandmarks.find((item) => item.id === landmarkId);

  if (!landmark) {
    return <div>Landmark not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-semibold text-center">{landmark.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={landmark.image}
          alt={landmark.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-between">
          <p className="text-lg">{landmark.location}</p>
          <p className="mt-4 text-gray-700">{landmark.description}</p>
          <p className="mt-2 font-semibold">Tags:</p>
          <p className="mt-1 text-gray-600">{landmark.tags.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default LandmarkPage;
