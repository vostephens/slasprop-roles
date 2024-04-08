import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import TaskLocation from '../components/TaskLocation';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const EditTaskData = () => {

    const {state} = useLocation();

    const [PIN1, setPIN1]= React.useState(false);
    const [PIN2, setPIN2]= React.useState(false);
    const [PIN3, setPIN3]= React.useState(false);

    return (
        <>
        <Box sx={{ minHeight: 500 }}>
            <Box

                sx={{
                    marginLeft: '25%',
                    mt: 4,
                    borderBottom: '1px solid lightgray',
                    pb: 2,
                    display: 'flex'
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                    Task Details
                </Typography>
                <Button 
                    sx={{
                        "backgroundColor": '#DF593D',
                        "color": 'white',
                        "borderRadius": '0px',
                        "ml": 2,
                        "p": 2,
                        "textTransform": 'capitalize',
                        '&:hover': { backgroundColor: '#DF593D' }
                    }}
                >
                <SaveOutlinedIcon /> &nbsp;Save & Sent
                </Button>
            </Box>

            <Box sx={{marginLeft:'25%', mt:4, display:'flex', justifyContent:'space-between'}}>
                <Box sx={{border:'1px solid lightgray'}}>   
                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray' }}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Name Of Current Owner
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, fontSize:12}}>
                                {state.task.currentOwner}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Name of the Registrar
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.task.registrar}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray'}}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Type of Land
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, mr:6}}>
                                {state.task.landType}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Registration Number
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.task.regNo}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray'}}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Property Tax ID
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, mr:4}}>
                                {state.task.propTaxID}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Location
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.task.location}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray'}}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                ZIP/ PIN Code
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, mr:10}}>
                                {state.task.zip}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Registered Address
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.task.address}
                            </Typography>
                        </Box>
                    </Box>

                </Box>

                <Box sx={{display:'flex', flexDirection:'column', minWidth:450}}>
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

            <TaskLocation/>                       
        </Box>

        <Footer />
    </>
    )

}

export default EditTaskData