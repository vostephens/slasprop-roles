import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Container, Box, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export default function TagCoordinatesDialog(props) {
    const [open, setOpen] = React.useState(false);
    const handleDragEnd = (e) => {
        const { lat, lng } = e.target.getLatLng();
        console.log(`Lat: ${lat}, Lon: ${lng}`);
    };
    const [PIN1, setPIN1]= React.useState(false);
    const [PIN2, setPIN2]= React.useState(false);
    const [PIN3, setPIN3]= React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        <Button  onClick={handleClickOpen} sx={{textTransform:'capitalize', color:'black',ml:-1,fontSize:14}}>
            Tag Co-Ordinates
        </Button>
        
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            PaperProps={{
            component: 'form',
            onSubmit: (event) => {
                event.preventDefault();
                handleClose();
            },
            }}
        >
            <DialogTitle sx={{display:'flex', justifyContent:'space-between', borderBottom:1}}>
                <Typography sx={{
                                fontFamily:"monospace",
                                fontSize:16,
                                fontWeight:"bold",
                                }}>
                            Tag Co-Ordiantes
                    </Typography> 
                    <Button onClick={handleClose}>
                    <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                    </Button>
            </DialogTitle>
            <DialogContent sx={{mt:2}}>

            <Box sx={{ mt:2, display:'flex', justifyContent:'space-between' }}>
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

                <Box sx={{ml:2, minWidth:200, display:'flex', flexDirection:'column'}}>
                    <Typography sx={{fontWeight:'bold',color:'#26a69a'}}>
                        Co-Ordinates
                    </Typography>
                    <Button sx={{   mt:1, 
                                    pl:2, 
                                    backgroundColor:'#FEFEF7',
                                    textTransform:'capitalize',
                                    fontWeight:'bold',
                                    color:'black',
                                    justifyContent: "flex-start",                                            
                                    }}
                            onClick={()=>{setPIN1(!PIN1)}} 
                            endIcon={PIN1?<KeyboardArrowDown/>:<KeyboardArrowUp/>}
                    >
                        PIN 1
                    </Button>
                    {
                        PIN1 && (  <Box sx={{p:2}}>
                                        <Typography sx={{fontSize:12}}>
                                            Latitude: 38.9821
                                        </Typography>
                                        <Typography sx={{fontSize:12}}>
                                            Longitude: 38.9821
                                        </Typography>
                                    </Box>
                                )

                    }

                    <Button sx={{   mt:1, 
                                    pl:2, 
                                    backgroundColor:'#FEFEF7',
                                    textTransform:'capitalize',
                                    fontWeight:'bold',
                                    color:'black',
                                    justifyContent: "flex-start", 
                                        
                                }}
                            onClick={()=>{setPIN2(!PIN2)}} 
                            endIcon={PIN2?<KeyboardArrowDown/>:<KeyboardArrowUp/>}
                        >
                            PIN 2
                    </Button>
                    {
                        PIN2 && (  <Box sx={{p:2}}>
                                                <Typography sx={{fontSize:12}}>
                                                    Latitude: 38.9821
                                                </Typography>
                                                <Typography sx={{fontSize:12}}>
                                                    Longitude: 38.9821
                                                </Typography>
                                            </Box>
                                        )

                    }

                    <Button sx={{   mt:1, 
                                    pl:2, 
                                    backgroundColor:'#FEFEF7',
                                    textTransform:'capitalize',
                                    fontWeight:'bold',
                                    color:'black',
                                    justifyContent: "flex-start", 
                                        
                                }}
                            onClick={()=>{setPIN3(!PIN3)}} 
                            endIcon={PIN3?<KeyboardArrowDown/>:<KeyboardArrowUp/>}
                        >
                            PIN 3
                    </Button>
                    {
                        PIN3 && (  <Box sx={{p:2}}>
                                                <Typography sx={{fontSize:12}}>
                                                    Latitude: 38.9821
                                                </Typography>
                                                <Typography sx={{fontSize:12}}>
                                                    Longitude: 38.9821
                                                </Typography>
                                            </Box>
                                        )

                    }
                </Box>
            </Box>
                
            </DialogContent>
            <Container sx={{display:"flex", justifyContent:"center"}}>
                <DialogActions>
                    <Button type="submit" variant="contained"
                                size="medium" 
                                sx={{ mt: 2,
                                    backgroundColor: "#26a69a",
                                    "&:hover": { backgroundColor: "#26a69a" },
                                    borderRadius:"16px",
                                    boxShadow: "10px 10px 5px #269d91 inset",
                                    width: "150px",
                                    }}>
                        Add Co-Ordinates
                        </Button>
                </DialogActions>
            </Container>
        </Dialog>
        </React.Fragment>
    );
}