import React from 'react';

import { Box, Typography } from '@mui/material';
import Footer from '../components/Footer';
import DropDownMenu from '../components/DropDownMenu';

const ScheduleFieldTasks = () => {

    const tasks =[
        {
            id: 'TASK36183681',
            scheduledAt:'10-12-2023 | 15:45 PM',
            status:'scheduled',
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
            OwnerDetails:{
                owner:['Indrani Sen', 'Arindam Dutta', 'Chijrant Debnath'],
                totalYears: ['2015-2017','2017-2019','2019-Till Date'],
                initials:['IS','AD', 'CD']
            }
        },

        {
            id: 'TASK36233681',
            scheduledAt:'10-12-2023 | 15:45 PM',
            status:'unscheduled',
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
        unscheduled:'#F19866',
        scheduled:'#09841D',
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
            Scheduled Task List
                    </Typography>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', marginLeft: '25%',mt:1, p:1}}>
                    {
                        tasks.map((task) => (
                            <>
                                <Box sx={{maxWidth:100, mt:3, backgroundColor: statusColors[task.status] ?? 'gray', px:2, textAlign:'center',py:0.5}}>
                                    <Typography sx={{fontSize:14, color:'white', textTransform:'capitalize'}}>
                                        {task.status}
                                    </Typography>
                                </Box>
                                
                                <Box sx={{display:'flex', border: '1px solid gray', px:2, py:4, justifyContent:'space-between'}}>
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
                                            Date & Time
                                        </Typography>
                                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                            {task.scheduledAt}
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:'flex', flexDirection:'column', }}>
                                        <Typography sx={{fontSize:11, color:'gray'}}>
                                            Name of the current owner
                                        </Typography>
                                        <Typography sx={{fontWeight:'bold', fontSize:12, mr:10}}>
                                            {task.currentOwner}
                                        </Typography>
                                    </Box>

                                    <DropDownMenu task= {task}/>                                
                                </Box>
                            </>
                        ))
                    }
                </Box>
                
            </Box>

            <Footer />
        </>
    );
};

export default ScheduleFieldTasks;
