import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import TaskMembers from '../components/TaskMembers';
import Location from '../components/Location';
import ImageGallery from '../components/ImageGallery';
import DownloadForm from '../components/DownLoadForm';

const ParcelDetails = () => {

    const {state} = useLocation();

    const statusColors = {
        pending:'#D4601E',
        approved:'#09841D',
        failed:'red'
    };


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
                    Parcel Details
                </Typography>
            </Box>

            <Box sx={{maxWidth:100, marginLeft: '25%', mt:5, backgroundColor: statusColors[state.task.status] ?? 'gray', px:2, textAlign:'center',py:0.5}}>
                <Typography sx={{fontSize:14, color:'white', textTransform:'capitalize'}}>
                    {state.task.status}
                </Typography>
            </Box>

            <Box sx={{display:'flex', border: '1px solid lightgrey', marginLeft: '25%',px:2, py:4, justifyContent:'space-between'}}>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                    <Typography sx={{fontSize:11, color:'gray'}}>
                        Task ID
                    </Typography>
                    <Typography sx={{fontWeight:'bold', fontSize:12, mr:14}}>
                        {state.task.id}
                    </Typography>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                    <Typography sx={{fontSize:11, color:'gray'}}>
                        Date & Time
                    </Typography>
                    <Typography sx={{fontWeight:'bold', fontSize:12, mr:14}}>
                        {state.task.createdAt}
                    </Typography>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', }}>
                    <Typography sx={{fontSize:11, color:'gray'}}>
                        Updated Date & Time
                    </Typography>
                    <Typography sx={{fontWeight:'bold', fontSize:12, mr:14}}>
                        {state.task.sentOn}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{marginLeft:'25%', mt:4, display:'flex', justifyContent:'space-between'}}>
                <Box sx={{border:'1px solid lightgray', maxWidth:500}}>   
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
                
                <Box>
                    <TaskMembers task={state.task}/>
                </Box>
            </Box>

            <Location task ={state.task}/>

            <Box sx={{marginLeft:'25%', mt:2, display:'flex', justifyContent:'space-between', mb:2}}>
                <Box sx={{maxWidth:550}}>
                    <ImageGallery/>
                </Box>
                <Box sx={{mt:-10}}>
                    <DownloadForm task={state.task}/>
                </Box>
            </Box>      
        </Box>

        <Footer />
    </>
    )

}

export default ParcelDetails