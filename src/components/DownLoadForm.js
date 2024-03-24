import { Box, IconButton, Typography } from "@mui/material";
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import React from "react";

const DownloadForm = (props) => {

    return(
            <Box sx={{display:'flex', flexDirection:'column',border:'2px solid #26a69a', pb:2, ml:4}}>
                <Typography sx={{backgroundColor:'#26a69a', color:'white', fontSize:'16px', fontWeight:'bold', py:1.5,px:1}}>
                    Download Forms
                </Typography>
                <Box sx={{display:'flex', mt:1}}>
                    <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                            {
                                props.task?.forms?.name?.map( name => 
                                
                                <Typography sx={{mb:1,color:'black', fontSize:11, fontWeight:'bold'}}>
                                        {name}
                                </Typography>
                                    
                                )
                            }
                    </Box>

                    <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                        {
                            props.task?.forms?.type?.map( type => 
                            
                            <Box sx={{display:'flex'}}>
                                <Typography sx={{color:'#DF593D',fontWeight:'bold',fontSize:11,mb:1}}>
                                        {type}
                                </Typography>
                                
                                <DownloadForOfflineOutlinedIcon sx={{color:"#DF593D", fontSize:20, ml:3, mr:2}}/>
                            </Box>
                                
                            )
                        }
                    </Box>
                </Box>            
            </Box>
    )

}

export default DownloadForm