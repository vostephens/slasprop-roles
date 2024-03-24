import React from 'react';

import { Box } from '@mui/material';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';
import TaskMembers from './TaskMembers';

const Location = (props) => {

    const [flag,setFlag] = React.useState(true);
    const handleDragEnd = (e) => {
        const { lat, lng } = e.target.getLatLng();
        console.log(`Lat: ${lat}, Lon: ${lng}`);
    };

    return (
        <Box sx={{ marginLeft:'25%', mt:2, display:'flex', justifyContent:'space-between' }}>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '40vh', width: '65%' }}
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

            <Box sx={{mt:-6}}>
                <TaskMembers task ={props.task} flag={flag}/>
            </Box>
        </Box>
    );
};

export default Location;
