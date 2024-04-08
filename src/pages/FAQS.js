import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import Footer from '../components/Footer';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const FAQS = () => {

    const [isFAQ1, setisFAQ1]= React.useState(false);
    const [isFAQ2, setisFAQ2]= React.useState(false);



    return (
        <>
            <Box sx={{ minHeight: 500 , marginLeft:'25%', mb:10}}>
                <Box
                    sx={{
                        mt: 4,
                        borderBottom: '1px solid lightgray',
                        pb: 2,
                        display: 'flex'
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                        FAQs
                    </Typography>
                </Box>

                <Box sx={{mt:4}}>
                    <Button sx={{   mt:2, 
                                        pl:2, 
                                        backgroundColor:'#FEFEF7',
                                        textTransform:'capitalize',
                                        fontWeight:'bold',
                                        color:'black',
                                        justifyContent: "flex-start", 
                                        width:600
                                    }}
                                onClick={()=>{setisFAQ1(!isFAQ1)}} 
                                endIcon={isFAQ1?<KeyboardArrowDown/>:<KeyboardArrowUp/>}
                        >
                            Q1. Lorem ipsum is simple dummy data 
                        </Button>
                        {
                            isFAQ1 && (  <Box sx={{p:2}}>
                                                    <Typography sx={{color:'grey', fontSize:12}}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </Typography>
                                                </Box>
                                            )

                        }
                    
                        <Button sx={{   mt:2, 
                                        pl:2, 
                                        backgroundColor:'#FEFEF7',
                                        textTransform:'capitalize',
                                        fontWeight:'bold',
                                        color:'black',
                                        justifyContent: "flex-start", 
                                        width:600
                                    }}
                                onClick={()=>{setisFAQ2(!isFAQ2)}} 
                                endIcon={isFAQ2?<KeyboardArrowDown/>:<KeyboardArrowUp/>}
                        >
                            Q2. Lorem ipsum is simple dummy data 
                        </Button>
                        {
                            isFAQ2 && (  <Box sx={{p:2}}>
                                                    <Typography sx={{color:'grey', fontSize:12}}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </Typography>
                                                </Box>
                                            )

                        }

                </Box>
            </Box>

            <Footer/>

        </>
    )

}

export default FAQS