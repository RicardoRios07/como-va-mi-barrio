import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat:-4.002921,
  lng: -79.204717
};

function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCJrDavogjRmwn8CMj78uLjsqm9ZJTQNrU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;