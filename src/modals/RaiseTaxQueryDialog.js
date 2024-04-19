import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Box, Typography, FormLabel, TextField, Stack, MenuItem, Select, FormControl } from "@mui/material";

export default function RaiseTaxQueryDialog() {
    const [open, setOpen] = React.useState(false);

    const [propertyType,setPropertyType] = React.useState('10');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen}
                    sx={{
                        backgroundColor: "#DF593D",
                        "&:hover": { backgroundColor: "#DF593D" },
                        borderRadius:20,
                        color:'white',
                        fontSize:12,
                        width:150,
                        p:1.5,
                        mb:1
                    }}>
                Raise Tax Query
            </Button>
            
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    handleClose();
                },
                }}
            >
                <DialogTitle sx={{display:'flex', justifyContent:'space-between', borderBottom:1}}>
                    <Typography sx={{
                                    fontFamily:"monospace",
                                    fontSize:16,
                                    fontWeight:"bold",
                                    }}>
                                Raise Tax Query
                        </Typography> 
                        <Button onClick={handleClose}>
                        <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                        </Button>
                </DialogTitle>
                <DialogContent sx={{mt:1}}>

                    <Typography sx={{mt:1,color:'#26a69a', fontSize:12}}>Please fill the details to raise query</Typography>

                    <Box sx={{display:'flex', flexDirection:'column', mt:1, pl:1}}>
                        <Box component='form'>
                            <Stack spacing={16} direction="row" sx={{my:1}}>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Name of Current Owner</FormLabel>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Name of the Registrant</FormLabel>
                            </Stack>
                            <Stack spacing={4} direction="row" sx={{my:1}}>
                                <TextField size="small" label='Enter data'/>
                                <TextField size="small" label='Enter data'/>
                            </Stack>
                            <Stack spacing={23} direction="row" sx={{my:1}}>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Type of Land</FormLabel>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Registration Number</FormLabel>
                            </Stack>
                            <Stack spacing={4} direction="row" sx={{my:1}}>    
                                <FormControl sx={{mx:2, minWidth: 220}} size='small' >
                                    <Select
                                        defaultValue=""
                                        value={propertyType || null}
                                        sx={{fontSize:"12px"}}
                                        name="propertyType"
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" sx={{fontSize:"12px"}}>
                                            <em>Type of Land</em>
                                        </MenuItem>
                                        <MenuItem value={10} sx={{fontSize:"12px"}}>Ten</MenuItem>
                                        <MenuItem value={20} sx={{fontSize:"12px"}}>Twenty</MenuItem>
                                        <MenuItem value={30} sx={{fontSize:"12px"}}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField size="small" label='Enter data'/>
                            </Stack>
                            <Stack spacing={21} direction="row" sx={{my:1}}>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Property Tax ID</FormLabel>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Area of Land</FormLabel>
                            </Stack>
                            <Stack spacing={4} direction="row" sx={{my:1}}>
                                <TextField size="small" label='Enter data'/>
                                <TextField size="small" label='Enter data'/>
                            </Stack>
                            <Stack spacing={26} direction="row" sx={{my:1}}>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>Location</FormLabel>
                                <FormLabel sx={{color:'black', fontSize:'12px'}}>ZIP/PIN Code</FormLabel>
                            </Stack>
                            <Stack spacing={4} direction="row" sx={{my:1}}>
                                <TextField size="small" label='Enter data'/>
                                <TextField size="small" label='Enter data'/>
                            </Stack>
                            <FormLabel sx={{color:'black', fontSize:'12px', my:1}}>Registered Address</FormLabel>
                            <TextField
                                fullWidth 
                                label="Enter Data"
                                multiline
                                maxRows={5}
                                sx={{my:1}}/>                    
                        </Box>   
                    </Box>

                </DialogContent>

                <Container sx={{display:"flex", justifyContent:"center"}}>
                    <DialogActions>
                        <Button type="submit" variant="contained"
                                    size="medium" 
                                    sx={{ mt: 2,
                                        backgroundColor: "#26a69a",
                                        "&:hover": { backgroundColor: "#26a69a" },
                                        borderRadius:"16px",
                                        boxShadow: "10px 10px 5px #269d91 inset",
                                        width: "150px",
                                        }}>
                            Submit Query
                            </Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </React.Fragment>
    );
}