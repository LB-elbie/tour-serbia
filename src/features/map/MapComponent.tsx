// src/features/map/MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Landmark } from '@/types/landmark'; // Correct import for the Landmark type
import 'leaflet/dist/leaflet.css'; // Leaflet styles

const MapComponent = ({ landmarks }: { landmarks: Landmark[] }) => {
  return (
    <MapContainer center={[44.8176, 20.4633]} zoom={7} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {landmarks.map((landmark) => (
        <Marker
          key={landmark.id}
          position={[landmark.latitude, landmark.longitude] as LatLngExpression}
        >
          <Popup>
            <a href={`/landmarks/${landmark.id}`}>
              <strong>{landmark.name}</strong>
            </a>
            <br />
            {landmark.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
