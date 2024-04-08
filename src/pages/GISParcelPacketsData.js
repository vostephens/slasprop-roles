import React from 'react';

import { Box, Typography, IconButton } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ParcelDropDownMenu from '../components/ParcelDropDownMenu';

const GISParcelDataPackets = () => {

    const parcels =[
        {
            id: '36231381',
            createdAt:'10-12-2023 | 15:45 PM',
            sentOn:'10-12-2023 | 15:46 PM',
            status:'new',
            deniedBy:'Indraniel Sen',
            reason:'Lorem Epsom is simply dummy text of the printing and typesetting industry',
            landType:'Sample Data',
            regNo:'4568023131333',
            propTaxID:'HGTY13797131',
            area:'Sample Data',
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
            id: '36233681',
            createdAt:'10-12-2023 | 15:45 PM',
            sentOn:'10-12-2023 | 15:46 PM',
            status:'approved',
            deniedBy:'Indraniel Sen',
            reason:'Lorem Epsom is simply dummy text of the printing and typesetting industry',
            landType:'Sample Data',
            regNo:'4568023131333',
            propTaxID:'HGTY13797131',
            area:'Sample Data',
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
        new:'orange',
        approved:'#09841D',
        denied:'red'
    };

    return (
        <>
            <Box sx={{ minHeight: 500 }}>
                <Box
                    sx={{
                        marginLeft: '27%',
                        mt: 4,
                        borderBottom: '1px solid lightgray',
                        display: 'flex'
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            Parcel Data Packets
                    </Typography>

                    <IconButton 
                            component={Link}
                            to='/dashboard/create-parcel-data-packet'   
                            sx={{
                              backgroundColor: "#DF593D",
                              "&:hover": { backgroundColor: "#DF593D" },
                              borderRadius:"16px",
                              color:'white',
                              fontSize:'12px',
                              p:1.5,
                              mb:1
                            }}>
                    <AddCircleOutlineOutlinedIcon/> &nbsp; Add Parcel Data Packets
                </IconButton>
                </Box>

                <Box sx={{ mt: 4, mb: 3, marginLeft: '27%', maxWidth:600, }}>
                    {parcels.map((packet) => (
                        <Box sx={{ border: '1px solid lightgray', mb: 4 }}>
                            <Box sx={{ display: 'flex',  }}>
                                <Typography
                                    sx={{
                                        borderRight: '1px solid lightgray',
                                        p:1.5,
                                        fontSize: '12px',
                                        color: 'grey'
                                    }}
                                >
                                    Name Of Current The Owner Name
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.currentOwner}
                                    </Typography>
                                </Typography>

                                <Typography
                                    sx={{
                                        borderRight: '1px solid lightgray',
                                        p:1.5,

                                        fontSize: '12px',
                                        color: 'grey'
                                    }}
                                >
                                    Type Of Land
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.landType}
                                    </Typography>
                                </Typography>

                                <Box sx={{display:'flex',p:1.5}}>
                                    <Typography
                                        sx={{
                                            
                                            fontSize: '12px',
                                            color: 'grey'
                                        }}
                                    >
                                        Registration Number
                                        <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                            {packet.regNo}
                                        </Typography>
                                    </Typography>
                                    <ParcelDropDownMenu/>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', border: '1px solid lightgray',  }}>
                                <Typography
                                    sx={{
                                        borderRight: '1px solid lightgray',
                                        p:1.5,
                                        fontSize: '12px',
                                        color: 'grey'
                                    }}
                                >
                    Property Tax ID
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.propTaxID}
                                    </Typography>
                                </Typography>
                                <Typography
                                    sx={{
                                        borderRight: '1px solid lightgray',
                                        p:1.5,
                                        fontSize: '12px',
                                        color: 'grey'
                                    }}
                                >
                    Area Of Land
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.area}
                                    </Typography>
                                </Typography>
                                <Typography sx={{fontSize: '12px', color: 'grey', p:1.5 }}>
                    Location
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.location}
                                    </Typography>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex',  }}>
                                <Typography
                                    sx={{
                                        borderRight: '1px solid lightgray',
                                        p:1.5,
                                        fontSize: '12px',
                                        color: 'grey'
                                    }}
                                >
                    ZIP/ PIN Code
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.zip}
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontSize: '12px', color: 'grey', p:1.5 }}>
                    Registration Address
                                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                        {packet.address}
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                
            </Box>

            <Footer />
        </>
    );
};

export default GISParcelDataPackets;
