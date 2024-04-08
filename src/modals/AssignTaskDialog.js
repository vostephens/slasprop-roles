import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, FormControl, FormLabel, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';

export default function AssignTaskDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [assignTask, setAssignTask] = React.useState('');

  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen} sx={{textTransform:'capitalize', color:'black',ml:-1,fontSize:14}}>
        Assign Task
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
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
                          Assign A Task
                </Typography> 
                <Button onClick={handleClose}>
                  <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                </Button>
        </DialogTitle>
        <DialogContent sx={{mt:2}}>
            <Box sx={{display:'flex', justifyContent:'space-between',borderBottom:'1px solid lightgrey',pb:2}}>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', pr:4}}>
                    <Typography sx={{fontSize:12, color:'lightgray'}}>
                        Name
                    </Typography>
                    <Typography sx={{fontSize:12, fontWeight:'bold'}}>
                        {props.user.name}
                    </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'1px solid lightgray', px:4}}>
                    <Typography sx={{fontSize:12, color:'lightgray'}}>
                        E-Mail ID
                    </Typography>
                    <Typography sx={{fontSize:12, fontWeight:'bold'}}>
                        {props.user.email}
                    </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', px:4}}>
                    <Typography sx={{fontSize:12, color:'lightgray'}}>
                        Phone Number
                    </Typography>
                    <Typography sx={{fontSize:12, fontWeight:'bold'}}>
                        {props.user.phoneNo}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{mt:2, display:'flex', mb:6}}>
                <FormLabel sx={{ color: 'black', mt: 1, fontSize: '12px', mr:4, }}>
                    Select Task
                </FormLabel>
                <FormControl size="small" sx={{ mt: 1 , minWidth: 170}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px' }}>
                        Select
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignTask}
                        label="Assign Task"
                        onChange={(e)=> {setAssignTask(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        <MenuItem value={10}>Task 1</MenuItem>
                        <MenuItem value={20}>Task 2</MenuItem>
                        <MenuItem value={30}>Task 3</MenuItem>
                        <MenuItem value={40}>Task 4</MenuItem>
                    </Select>
                </FormControl>

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
                    Assign Task
                    </Button>
            </DialogActions>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}