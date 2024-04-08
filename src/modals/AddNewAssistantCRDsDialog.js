import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

import { Container, FormLabel,Box, Typography, TextField, FormControlLabel, Checkbox, FormGroup } from '@mui/material';

export default function AddNewAssistantCRDsDialog() {
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
      <Button onClick={handleClickOpen} 
              sx={{
                  "backgroundColor": '#26a69a',
                  "color": 'white',
                  "borderRadius": '0px',
                  "ml": 2,
                  "p": 2,
                  "textTransform": 'capitalize',
                  '&:hover': { backgroundColor: '#26a69a' }
              }}
          >
            <AddIcon /> &nbsp;Add New
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
          <Box sx={{ px: 4, pt: 2, display: 'flex', flexDirection: 'column' }}>
              <FormLabel sx={{ color: 'grey', fontSize: '12px' }}>
                Name
              </FormLabel>
              <TextField
                  placeholder="Enter Name"
                  size="small"
                  sx={{ mt: 1 }}
                  inputProps={{ style: { padding: 4 } }}
              />
              <Box sx={{display:'flex', mt:2, justifyContent:'space-between'}}>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                  <FormLabel sx={{ color: 'grey', fontSize: '12px' }}>
                    Phone Number
                  </FormLabel>
                  <TextField
                      placeholder="Enter Phone Number"
                      size="small"
                      sx={{ mt: 1 }}
                      inputProps={{ style: { padding: 4 } }}
                  />
                </Box>

                <Box sx={{display:'flex', flexDirection:'column'}}>
                  <FormLabel sx={{ color: 'grey', fontSize: '12px', ml:4 }}>
                    Email ID
                  </FormLabel>
                  <TextField
                      placeholder="Enter Email ID"
                      size="small"
                      sx={{ mt: 1, ml:4 }}
                      inputProps={{ style: { padding: 4 } }}
                  />
                </Box>
              </Box>

              <Typography
                    sx={{ color: 'orange', fontSize: '12px', mt: 2, fontWeight: 'bold' }}
                >
          User Can
                </Typography>

                <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="View"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Delete"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Add"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Edit"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Block"
                    />
                </FormGroup>
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
                    Add
                </Button>
            </DialogActions>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}