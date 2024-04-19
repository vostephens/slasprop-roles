import React from 'react';

import { Box } from '@mui/material';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';

const TaskLocation = () => {

    const handleDragEnd = (e) => {
        const { lat, lng } = e.target.getLatLng();
        console.log(`Lat: ${lat}, Lon: ${lng}`);
    };

    return (
        <Box sx={{ marginLeft:'25%', mt:2, display:'flex', justifyContent:'space-between', mb:2}}>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '40vh', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[51.505, -0.09]}
                    draggable
                    ondragend={handleDragEnd}
                >
                    <Popup>The Selected Location</Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
};

export default TaskLocation;
