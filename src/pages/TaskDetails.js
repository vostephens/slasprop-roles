import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import TaskMembers from '../components/TaskMembers';
import Location from '../components/Location';
import ImageGallery from '../components/ImageGallery';
import DownloadForm from '../components/DownLoadForm';
import CertificateImage from '../assets/certificate.png'
import SignatureImage from '../assets/signature.png'
import { useAuth } from '../hooks/useAuth';

const TaskDetails = () => {

    const {state} = useLocation();
    const [status, setStatus] = React.useState('');
    const {user} = useAuth();

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
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
                    {state.task.status==='new'? "Details" : "Request Details"}
                </Typography>
            </Box>

            <Box sx={{border: '1px solid lightgrey', marginLeft: '25%',p:1, mt:4}}>
                <Box sx={{display:'flex', p:2, justifyContent:'space-between', borderBottom:'1px solid lightgrey'}}>
                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                        <Typography sx={{fontSize:11, color:'gray'}}>
                            Task ID
                        </Typography>
                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:4}}>
                            {state.task.taskID}
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                        <Typography sx={{fontSize:11, color:'gray'}}>
                            Task date & time
                        </Typography>
                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:4}}>
                            {state.task.createdAt}
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                        <Typography sx={{fontSize:11, color:'gray'}}>
                            Task Sent on
                        </Typography>
                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:4}}>
                            {state.task.sentOn}
                        </Typography>
                    </Box>

                    <FormControl size="small" sx={{ mt: 1 , minWidth: 170}}>
                        <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px' }}>
                            Change Status
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Parent Role"
                            onChange={handleStatusChange}
                            style={{ height: 30 }}
                        >
                            <MenuItem value={10}>Denied</MenuItem>
                            <MenuItem value={20}>Pending</MenuItem>
                            <MenuItem value={30}>Completed</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{display:'flex', p:2}}>
                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                        <Typography sx={{fontSize:11, color:'gray'}}>
                            Denied By
                        </Typography>
                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:4}}>
                            {state.task.deniedBy}
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'column', ml:6}}>
                        <Typography sx={{fontSize:11, color:'gray'}}>
                            Reason
                        </Typography>
                        <Typography sx={{fontWeight:'bold', fontSize:12,}}>
                            {state.task.reason}
                        </Typography>
                    </Box>
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

            <Box sx={{marginLeft:'25%', mt:2, display:'flex', justifyContent:'space-between'}}>
                <Box sx={{maxWidth:550}}>
                    <ImageGallery/>
                </Box>
                <Box sx={{mt:-10}}>
                    <DownloadForm task={state.task}/>
                </Box>
            </Box>

            <Box sx={{marginLeft:'25%', mt:2, p:2, border:'1px solid lightgrey', mb:2}}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, mt:1 }}>
                    Certificates
                </Typography>

                <Box sx={{display:'flex', justifyContent:'space-between', mt:2}}>
                    <Box component="img"
                            src={CertificateImage}
                            sx={{
                                height: 100,
                                width: 150,
                            }}
                        />
                     <Box component="img"
                            src={CertificateImage}
                            sx={{
                                height: 100,
                                width: 150,
                            }}
                        />
                     <Box component="img"
                            src={CertificateImage}
                            sx={{
                                height: 100,
                                width: 150,
                            }}
                        />
                     <Box component="img"
                            src={CertificateImage}
                            sx={{
                                height: 100,
                                width: 150,
                            }}
                        />
                </Box>
            </Box>

            {
                user.role==='Governor' && (
                    <Box sx={{marginLeft:'75%', mt:2, p:2, border:'1px solid lightgrey', mb:2,}}>
                        <Typography sx={{ color:'lightgray', fontSize: 12, mt:1 }}>
                            Approved By
                        </Typography>
                        <Typography sx={{ fontSize: 14, mt:1, fontWeight:'bold' }}>
                            John Doe
                        </Typography>
                        <Typography sx={{ fontSize: 12, mt:0.5, color:'#26a69a', fontStyle:'italic' }}>
                            Governor
                        </Typography>
                        <Box component="img"
                            src={SignatureImage}
                            sx={{
                                height: 50,
                                width: 80,
                            }}
                        />
                    </Box>
                )
            }
                       
        </Box>

        <Footer />
    </>
    )

}

export default TaskDetails