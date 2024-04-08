import { Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const TaskMembers = (props) => {

    const {user} = useAuth();

    return(
            <Box sx={{display:'flex', flexDirection:'column',border:'2px solid #26a69a', pb:2, ml:4}}>
                <Typography sx={{backgroundColor:'#26a69a', color:'white', fontSize:'16px', fontWeight:'bold', py:1.5,px:1}}>
                    { user.role==='GIS Officer'? 'Alloted Field Team': (props.flag===undefined?'Task Members': 'Alloted Field Team') }
                </Typography>
                <Box sx={{display:'flex', mt:1}}>
                    <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                            {
                                props.task?.taskMembers?.initials?.map( initial => 
                                
                                <Typography sx={{mb:1,color:'#26a69a', fontSize:'12px', fontWeight:'bold'}}>
                                        {initial}
                                </Typography>
                                    
                                )
                            }
                    </Box>

                    <Box sx={{display:'flex', ml:2,flexDirection:'column'}}>
                        {
                            props.task?.taskMembers?.name?.map( name => 
                            
                            <Typography sx={{mb:1,color:'gray', fontSize:'12px', fontWeight:'bold'}}>
                                    {name}
                            </Typography>
                                
                            )
                        }
                    </Box>

                    <Box sx={{display:'flex', mx:2.5,flexDirection:'column'}}>

                        {
                            props.task?.taskMembers?.role?.map( role => 
                            
                            <Typography sx={{mb:1.5,color:'#DF593D', fontSize:'10px', display:'flex'}}>
                                {role}
                            </Typography>
                        
                            )
                        }
                    </Box>
                </Box>            
            </Box>
    )

}

export default TaskMembers