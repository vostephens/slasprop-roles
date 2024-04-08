import React from 'react';

import { Box, Typography } from '@mui/material';
import Footer from '../components/Footer';
import DropDownMenu from '../components/DropDownMenu';

const ApprovedMapsSLTROfficer = () => {

    const tasks =[
        {
            id: 'TASK36233181',
            createdAt:'10-12-2023 | 15:45 PM',
            sentOn:'10-12-2023 | 15:46 PM',
            status:'pending',
            deniedBy:'Indraniel Sen',
            reason:'Lorem Epsom is simply dummy text of the printing and typesetting industry',
            landType:'Sample Data',
            regNo:'4568023131333',
            propTaxID:'HGTY13797131',
            location:'Sample Data',
            zip:462920,
            address:'1245 Texas Road Texas',
            currentOwner:'Indraniel Sen',
            registrar:'Andraniel Senna',
            taskMembers:{
                name:['Indrani Sen', 'Arindam Dutta', 'Chijrant Debnath'],
                role: ['Demarcation Officer','Recording Officer','Field Assistant'],
                initials:['IS','AD', 'CD']
            },
            claimants:{
                name:['Indrani Sen', 'Arindam Dutta'],
                initials:['IS','AD']
            },
            forms:{
                name:['SLTR Demarcation Form', 'SLTR Rights Claim Form', 'SLTR Receipts Form', 'SLTR Dispute Form'],
                type:['SLTR-F1','SLTR-F2','SLTR-F3','SLTR-F5']
            }

        },

        {
            id: 'TASK36233681',
            createdAt:'10-12-2023 | 15:45 PM',
            sentOn:'10-12-2023 | 15:46 PM',
            status:'approved',
            deniedBy:'Indraniel Sen',
            reason:'Lorem Epsom is simply dummy text of the printing and typesetting industry',
            landType:'Sample Data',
            regNo:'4568023131333',
            propTaxID:'HGTY13797131',
            location:'Sample Data',
            zip:462920,
            address:'1245 Texas Road Texas',
            currentOwner:'Indraniel Sen',
            registrar:'Andraniel Senna',
            taskMembers:{
                name:['Indrani Sen', 'Arindam Dutta', 'Chijrant Debnath'],
                role: ['Demarcation Officer','Recording Officer','Field Assistant'],
                initials:['IS','AD', 'CD']
            },
            claimants:{
                name:['Indrani Sen', 'Arindam Dutta'],
                initials:['IS','AD']
            },
            forms:{
                name:['SLTR Demarcation Form', 'SLTR Rights Claim Form', 'SLTR Receipts Form', 'SLTR Dispute Form'],
                type:['SLTR-F1','SLTR-F2','SLTR-F3','SLTR-F5']
            }

        },
    ]

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
            Approved Maps By SLTR Officer
                    </Typography>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', marginLeft: '25%',mt:1, p:1}}>
                    {
                        tasks.map((task) => (
                        
                            <Box sx={{mt:3}}>
                                <Typography
                                    sx={{
                                        backgroundColor: statusColors[task.status] ?? 'grey',
                                        textTransform: 'capitalize',
                                        color: 'white',
                                        maxWidth: 150,
                                        fontSize: 14,
                                        p: 1
                                    }}
                                >
                                    Status: {task.status}
                                </Typography>
                                <Box sx={{display:'flex', p:2,border: '1px solid gray', justifyContent:'space-between'}}>
                                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                                        <Typography sx={{fontSize:11, color:'gray'}}>
                                            Task ID
                                        </Typography>
                                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                            {task.id}
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                                        <Typography sx={{fontSize:11, color:'gray'}}>
                                            Task date & time
                                        </Typography>
                                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                            {task.createdAt}
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgrey'}}>
                                        <Typography sx={{fontSize:11, color:'gray'}}>
                                            Task Sent on
                                        </Typography>
                                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                            {task.sentOn}
                                        </Typography>
                                    </Box>
                                    <DropDownMenu task= {task}/>                                
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                
            </Box>

            <Footer />
        </>
    );
};

export default ApprovedMapsSLTROfficer;
