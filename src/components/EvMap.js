// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const EvMap = ({ data }) => {
  // Extract the positions from the vehicle data
  const positions = data.map(vehicle => {
    const coordinates = vehicle["Vehicle Location"].replace("POINT (", "").replace(")", "").split(" ");
    return {
      longitude: parseFloat(coordinates[0]),
      latitude: parseFloat(coordinates[1]),
      label: `${vehicle.Make} ${vehicle.Model} (${vehicle.ModelYear})`
    };
  });

  return (
    <MapContainer center={[47.610365, -122.30839]} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, index) => (
        <Marker key={index} position={[position.latitude, position.longitude]}>
          <Popup>{position.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EvMap;
