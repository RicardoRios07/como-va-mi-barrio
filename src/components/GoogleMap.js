import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

function GoogleMapComponent({ setUbicacion }) {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: -4.001897,
    lng: -79.204490,
  });

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng;
    setSelectedLocation({ lat: lat(), lng: lng() });
    
    // Formatear las coordenadas como una cadena "latitud,longitud"
    const ubicacionStr = `${lat()},${lng()}`;
    setUbicacion(ubicacionStr); // Actualizar la ubicación en el formulario principal
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCJrDavogjRmwn8CMj78uLjsqm9ZJTQNrU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={14}
        onClick={handleMapClick} // Agregar el evento onClick al mapa
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
