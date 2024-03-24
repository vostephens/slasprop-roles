import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ClearIcon from '@mui/icons-material/Clear';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Typography } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

export default function ScheduleTaskDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [dateTime, setDateTime ]= React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button  sx={{ml:4}} onClick={handleClickOpen}>
        <CalendarMonthIcon sx={{color:'white', mt:-1}}/>
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            props.setDateAndTime(dateTime);
            handleClose();
          },
          sx:{position:'fixed', top:5, left:'28%'}
        }}
      >
        <DialogTitle sx={{display:'flex', justifyContent:'space-between', borderBottom:1}}>
            <Typography sx={{
                            fontFamily:"monospace",
                            fontSize:16,
                            fontWeight:"bold",
                            }}>
                          Schedule The Task
                </Typography> 
                <Button onClick={handleClose}>
                  <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                </Button>
        </DialogTitle>
        <DialogContent sx={{mt:2}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                    <DesktopDateTimePicker
                    label="Select Date & Time"
                    viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                    }}
                    value={dateTime}
                    onChange={(newValue) => {
                        setDateTime(newValue);
                    }}
                    />
                </DemoContainer>
            </LocalizationProvider>

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
                    Schedule The Task
                    </Button>
            </DialogActions>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}