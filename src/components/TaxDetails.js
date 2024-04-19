import { Box, Typography } from "@mui/material";
import React from "react";

const TaxDetails = (props) => {
    return (
        <Box sx={{display:'flex', flexDirection:'column',border:'2px solid #26a69a', pb:2, boxShadow: '10px 0px 10px rgba(108, 122, 137, 0.5)'}}>
            <Typography sx={{backgroundColor:'#26a69a', color:'white', fontSize:'16px', fontWeight:'bold', py:1.5,px:1}}>
                Tax Details
            </Typography>
            <Box sx={{display:'flex', mt:1}}>
                <Typography sx={{fontSize:'12px', ml:2,fontWeight:'bold'}}>
                    Year
                </Typography>
                <Typography sx={{fontSize:'12px', mx:2, fontWeight:'bold'}}>
                    Property Taxes
                </Typography>
                <Typography sx={{fontSize:'12px', mr:2, fontWeight:'bold'}}>
                    Tax Assessment
                </Typography>
            </Box>

            <Box sx={{display:'flex', mt:1}}>
                <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                    {
                        props.property.taxDetails.year.map( year => <Typography sx={{color:'grey', fontSize:'10px'}}>
                                {year}
                        </Typography>
                            
                        )
                    }
                </Box>

                <Box sx={{display:'flex', mx:2.5,flexDirection:'column'}}>

                    {
                        props.property.taxDetails.propertyTax.map( propTax => 
                        
                        <Typography sx={{color:'grey', fontSize:'10px'}}>
                            {propTax}
                        </Typography>
                    
                        )
                    }
                </Box>
                <Box sx={{display:'flex', ml:7,flexDirection:'column'}}>

                    {
                        props.property.taxDetails.taxAssessment.map( taxAs => 
                        
                        <Typography sx={{color:'grey', fontSize:'10px'}}>
                            {taxAs} <Typography component='span' sx={{color:'#26a69a', fontSize:'10px', fontWeight:'bold'}}>+62.5%</Typography>
                        </Typography>
                    
                        )
                    }
                </Box>
            </Box>        
        </Box>
    )
}

export default TaxDetails