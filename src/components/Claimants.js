import { Box, Typography } from "@mui/material";
import React from "react";

const Claimants = (props) => {

    return(
            <Box sx={{display:'flex', flexDirection:'column',border:'2px solid #DF593D', pb:2, ml:4, minWidth:280}}>
                <Typography sx={{backgroundColor:'#DF593D', color:'white', fontSize:'16px', fontWeight:'bold', py:1.5,px:1}}>
                    Adjoining Claimants
                </Typography>
                <Box sx={{display:'flex', mt:1}}>
                    <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                            {
                                props.task?.claimants?.initials?.map( initial => 
                                
                                <Typography sx={{mb:1,color:'#26a69a', fontSize:'12px', fontWeight:'bold'}}>
                                        {initial}
                                </Typography>
                                    
                                )
                            }
                    </Box>

                    <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                        {
                            props.task?.claimants?.name?.map( name => 
                            
                            <Typography sx={{mb:1,color:'gray', fontSize:'12px', fontWeight:'bold'}}>
                                    {name}
                            </Typography>
                                
                            )
                        }
                    </Box>
                </Box>            
            </Box>
    )

}

export default Claimants