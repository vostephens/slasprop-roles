import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, FormControl, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';

export default function AssignRegTaskDialog() {
  const [open, setOpen] = React.useState(false);

  const emails =[ "indrani.sen@gmail.com", "akram.sen@gmail.com", "victor.sen@gmail.com", "indrani.sen@gmail.com", "indrani.sen@gmail.com"]

  const tasks =[ "Assign Camera", "Assign Location", "Assign Tools"];

  const devices =[ "Nikon 360", "Nigeria", "boulder Tool"];


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [assignDemarcEmail, setAssignDemarcEmail] = React.useState('');
  const [assignDemarcTask, setAssignDemarcTask] = React.useState('');

  const [assignRecordingEmail, setAssignRecordingEmail] = React.useState('');
  const [assignRecordingTask, setAssignRecordingTask] = React.useState('');


  const [assignFieldAnalystEmail, setAssignFieldAnalystEmail] = React.useState('');
  const [assignFieldAnalystTask, setAssignFieldAnalystTask] = React.useState('');



  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen} sx={{textTransform:'capitalize', color:'black',ml:-1,fontSize:16}}>
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
                          Assign Task
                </Typography> 
                <Button onClick={handleClose}>
                  <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                </Button>
        </DialogTitle>
        <DialogContent sx={{mt:2}}>

            <Typography sx={{mt:1,color:'#26a69a', fontSize:12}}>Please fill the details to assign task</Typography>
            
            <Box sx={{display:'flex', mt:4}}>
                <Typography sx={{fontSize:12}}>
                    Demarcation Officer
                </Typography>

                <FormControl size="small" sx={{ml:2, minWidth: 200}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '11px' }}>
                        Select Demarcation Officer
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignDemarcEmail}
                        label="Assign Task"
                        onChange={(e)=> {setAssignDemarcEmail(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        {
                            emails.map( email => (
                                <MenuItem value={email}> {email} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ml:2, minWidth: 200}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '11px' }}>
                        Select Demarcation Officer Task
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignDemarcTask}
                        label="Assign Task"
                        onChange={(e)=> {setAssignDemarcTask(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        {
                            tasks.map( task => (
                                <MenuItem value={task}> {task} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{display:'flex', mt:2}}>
                <Typography sx={{fontSize:12, mr:1.5}}>
                    Recording Officer
                </Typography>

                <FormControl size="small" sx={{ml:2, minWidth: 200}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '11px' }}>
                        Select Recording Officer
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignRecordingEmail}
                        label="Assign Task"
                        onChange={(e)=> {setAssignRecordingEmail(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        {
                            emails.map( email => (
                                <MenuItem value={email}> {email} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ml:2, minWidth: 200}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '11px' }}>
                        Select Recording Officer Task
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignRecordingTask}
                        label="Assign Task"
                        onChange={(e)=> {setAssignRecordingTask(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        {
                            devices.map( device => (
                                <MenuItem value={device}> {device} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{display:'flex', mt:2}}>
                <Typography sx={{fontSize:12, mr:4.5}}>
                    Field Analyst
                </Typography>

                <FormControl size="small" sx={{ml:2, minWidth: 200}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '11px' }}>
                        Select Field Analyst
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignFieldAnalystEmail}
                        label="Assign Task"
                        onChange={(e)=> {setAssignFieldAnalystEmail(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        {
                            emails.map( email => (
                                <MenuItem value={email}> {email} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ml:2, minWidth: 200}}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '11px' }}>
                        Select Field Analyst Task
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={assignFieldAnalystTask}
                        label="Assign Task"
                        onChange={(e)=> {setAssignFieldAnalystTask(e.target.value);}}
                        style={{ height: 30 }}
                    >
                        {
                            tasks.map( task => (
                                <MenuItem value={task}> {task} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>

        </DialogContent>

        <Container sx={{display:"flex", justifyContent:"center", mb:2}}>
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