import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Typography } from "@mui/material";
import TaxDetails from '../components/TaxDetails';

export default function RaiseTaxBillsDialog(props) {
    const [open, setOpen] = React.useState(false);

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
                Raise Tax Bills
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
                                Raise Tax Bills
                        </Typography> 
                        <Button onClick={handleClose}>
                        <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                        </Button>
                </DialogTitle>
                <DialogContent sx={{mt:3}}>

                    <TaxDetails property={props.property}/>

                </DialogContent>

                <Container sx={{display:"flex", justifyContent:"center", mb:2}}>
                    <DialogActions>
                        <Button type="submit" variant="contained"
                                    size="medium" 
                                    sx={{ mt: 2,
                                        backgroundColor: "#DF593D",
                                        "&:hover": { backgroundColor: "#DF593D" },
                                        borderRadius:"16px",
                                        boxShadow: "10px 10px 5px #DF593D inset",
                                        fontSize:11,
                                        mr:2
                                        }}>
                            Send Tax Notification
                        </Button>
                        
                        <Button type="submit" variant="contained"
                                    size="medium" 
                                    sx={{ mt: 2,
                                        backgroundColor: "#26a69a",
                                        "&:hover": { backgroundColor: "#26a69a" },
                                        borderRadius:"16px",
                                        boxShadow: "10px 10px 5px #269d91 inset",
                                        width: "150px",
                                        fontSize:11
                                        }}>
                            Collect Tax
                        </Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </React.Fragment>
    );
}