import React from 'react';

import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Footer from '../components/Footer';
import SearchIcon from '@mui/icons-material/Search';
import UserDropDownMenu from '../components/UserDropDownMenu';
import AddNewAssistantCRDsDialog from '../modals/AddNewAssistantCRDsDialog';
import { useAuth } from '../hooks/useAuth';

const ManageAssistantChiefRegistrarDeeds = () => {

    const {user} = useAuth();

    const users =[
        {
            id:1,
            name:'Rajmani Singh',
            email:'rajmani.singh@gmail.com',
            phoneNo:'+234-815-7823023',
            password:'P2323ku1'
        },
        {
            id:2,
            name:'Rajmani Singh',
            email:'rajmani.singh@gmail.com',
            phoneNo:'+234-815-7823023',
            password:'P2323ku1'
        },
        {
            id:3,
            name:'Rajmani Singh',
            email:'rajmani.singh@gmail.com',
            phoneNo:'+234-815-7823023',
            password:'P2323ku1'
        },
        {
            id:4,
            name:'Rajmani Singh',
            email:'rajmani.singh@gmail.com',
            phoneNo:'+234-815-7823023',
            password:'P2323ku1'
        },

    ]


    return (
        <>
            <Box sx={{ minHeight: 500, mb: 10 }}>
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
                        {user.role==='Chief Registrar'? "Manage Assistant Chief Registrar of Deeds" : "Manage Deputy SLTR Officers"}
                    </Typography>

                    <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'grey' }} />
                            </InputAdornment>
                        )
                    }}
                    size="small"
                    placeholder="Search By Name"
                />

                    <AddNewAssistantCRDsDialog/>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', marginLeft: '25%',mt:1, p:1}}>
                    {
                        users.map((user) => (
                            <Box sx={{display:'flex', border: '1px solid lightgray', mt:3, p:2, justifyContent:'space-between'}}>
                                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                                    <Typography sx={{fontSize:11, color:'gray'}}>
                                        Name
                                    </Typography>
                                    <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                        {user.name}
                                    </Typography>
                                </Box>

                                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                                    <Typography sx={{fontSize:11, color:'gray'}}>
                                        E-Mail ID
                                    </Typography>
                                    <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                        {user.email}
                                    </Typography>
                                </Box>

                                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                                    <Typography sx={{fontSize:11, color:'gray'}}>
                                        Phone Number
                                    </Typography>
                                    <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                        {user.phoneNo}
                                    </Typography>
                                </Box>

                                <Box sx={{display:'flex', flexDirection:'column'}}>
                                    <Typography sx={{fontSize:11, color:'gray'}}>
                                        Password
                                    </Typography>
                                    <Typography sx={{fontWeight:'bold', fontSize:12, color: 'orange', textTransform:'capitalize'}}>
                                        {user.password}
                                    </Typography>
                                </Box>

                                <UserDropDownMenu user= {user}/>                                
                            </Box>
                        ))
                    }
                </Box>
                
            </Box>

            <Footer />
        </>
    );
};

export default ManageAssistantChiefRegistrarDeeds;
