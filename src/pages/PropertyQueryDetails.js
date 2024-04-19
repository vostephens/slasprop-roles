import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import TaxDetails from '../components/TaxDetails';
import Location from '../components/Location';
import RaiseTaxBillsDialog from '../modals/RaiseTaxBillsDialog';

const PropertyQueryDetails = () => {

    const {state} = useLocation();

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
                    Property Details
                </Typography>
                {
                    state.buttonOption && 
                    <RaiseTaxBillsDialog property={state.property}/>      
                }
            </Box>

            <Box sx={{marginLeft:'25%', mt:4, display:'flex', justifyContent:'space-between'}}>
                <Box sx={{border:'1px solid lightgray', maxWidth:500}}>   
                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray' }}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Name Of Current Owner
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, fontSize:12}}>
                                {state.property.currentOwner}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Name of the Registrar
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.property.registrar}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray'}}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Type of Land
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, mr:6}}>
                                {state.property.type}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Registration Number
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.property.regNo}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray'}}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Property Tax ID
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, mr:4}}>
                                {state.property.propTaxID}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Location
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.property.location}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', borderBottom:'1px solid lightgray'}}>
                        <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                ZIP/ PIN Code
                            </Typography>
                            <Typography sx={{color:'black', fontWeight:'bold',fontSize:12, mr:10}}>
                                {state.property.zip}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', px:4,py:1}}>
                            <Typography sx={{color:'gray', fontSize:11}}>
                                Registered Address
                            </Typography>
                            <Typography sx={{color:'black',fontWeight:'bold',fontSize:12}}>
                                {state.property.address}
                            </Typography>
                        </Box>
                    </Box>

                </Box> 
                
                <Box>
                    <TaxDetails property={state.property}/>
                </Box>
            </Box>

            <Location property ={state.property}/>

            <Box sx={{marginLeft:'25%', mt:2, display:'flex', justifyContent:'space-between', mb:4}}>
                <Box sx={{maxWidth:570}}>
                    <ImageGallery/>
                </Box>
                
                <Box sx={{display:'flex', flexDirection:'column', minWidth:270, mt:-6}}>
                    <Typography sx={{border:'1px solid #26a69a', fontWeight:'bold', fontSize:'12px',borderBottom:'3px solid #26a69a', mb:2, ml:2, p:1}}>
                        EMI: $2,109/mo
                    <Typography component='span' sx={{ml:1, fontSize:11, color:'blue', textDecoration:'underline'}}>DETAILS</Typography>
                    </Typography>
                    <Typography sx={{border:'1px solid #26a69a', fontWeight:'bold', fontSize:'12px',borderBottom:'3px solid #26a69a', mb:2, ml:2, p:1}}>
                        Current Valuation
                    <Typography component='span' sx={{ml:1, fontSize:11, color:'#26a69a',}}>$565758</Typography>
                    </Typography>
                </Box>
            </Box>
                       
        </Box>

        <Footer />
    </>
    )

}

export default PropertyQueryDetails