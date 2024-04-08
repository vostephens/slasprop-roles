import React from 'react';

import { Box, Typography, FormLabel, TextField, Stack, MenuItem, Select, FormControl, Button } from "@mui/material";
import Footer from '../components/Footer';

const CreateGISParcelDataPackets = () => {

    const [propertyType,setPropertyType] = React.useState('10');

    return (
        <>
            <Box
                sx={{
                    marginLeft: '25%',
                    mt: 4,
                    borderBottom: '1px solid lightgray',
                    pb: 2
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Create Parcel Data Packets
                </Typography>
            </Box>

            <Box sx={{display:'flex', marginLeft:"30%", flexDirection:'column', mt:2, pl:2}}>
                <Box component='form'>
                    <Stack spacing={16} direction="row" sx={{my:1}}>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>Name of Current Owner</FormLabel>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>Type of Land</FormLabel>
                    </Stack>
                    <Stack spacing={4} direction="row" sx={{my:1}}>
                        <TextField size="small" label='Enter data'/>
                        <FormControl sx={{mx:2, minWidth: 220}} size='small' >
                            <Select
                                defaultValue=""
                                value={propertyType || null}
                                sx={{fontSize:"12px"}}
                                name="propertyType"
                                onChange={(e) => setPropertyType(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" sx={{fontSize:"12px"}}>
                                    <em>Type of Land</em>
                                </MenuItem>
                                <MenuItem value={10} sx={{fontSize:"12px"}}>Ten</MenuItem>
                                <MenuItem value={20} sx={{fontSize:"12px"}}>Twenty</MenuItem>
                                <MenuItem value={30} sx={{fontSize:"12px"}}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Stack spacing={18} direction="row" sx={{my:1}}>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>Registration Number</FormLabel>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>ID For Property Tax</FormLabel>
                    </Stack>
                    <Stack spacing={4} direction="row" sx={{my:1}}>    
                        <TextField size="small" label='Enter data'/>
                        <TextField size="small" label='Enter data'/>
                    </Stack>
                    <Stack spacing={23} direction="row" sx={{my:1}}>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>Area of Land</FormLabel>
                        <FormLabel sx={{color:'black', fontSize:'12px', my:1}}>Registered Address</FormLabel>
                    </Stack>
                    <Stack spacing={13} direction="row" sx={{my:1}}>
                        <TextField size="small" label='Enter data'/>
                        <TextField
                        fullWidth 
                        label="Enter Data"
                        multiline
                        maxRows={5}
                        sx={{my:1}}/>   
                    </Stack>
                    <Stack spacing={26} direction="row" sx={{my:1}}>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>Location</FormLabel>
                        <FormLabel sx={{color:'black', fontSize:'12px'}}>ZIP/PIN Code</FormLabel>
                    </Stack>
                    <Stack spacing={4} direction="row" sx={{my:1}}>
                        <TextField size="small" label='Enter data'/>
                        <TextField size="small" label='Enter data'/>
                    </Stack>
                </Box>   
            </Box>

            <Button type="submit" variant="contained"
                        size="medium" 
                        sx={{ mt: 3,
                              backgroundColor: "#26a69a",
                              "&:hover": { backgroundColor: "#26a69a" },
                              borderRadius:"16px",
                              boxShadow: "10px 10px 5px #269d91 inset",
                              width: "150px",
                              display:'flex', marginLeft:"31%",
                              mb:6,
                              
                            }}>
                  Submit Data
            </Button>

            <Footer />
        </>
    );
};

export default CreateGISParcelDataPackets;
