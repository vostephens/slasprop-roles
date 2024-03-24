import React from 'react';

import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import sampleImage from '../assets/Logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#18784E',
                    color: 'white',
                    display: 'flex',
                    borderBottom: '1px solid #1C8C5B'
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', py: 4, px: 10 }}>
                    <Box
                        component="img"
                        sx={{
                            height: 60,
                            width: 150,
                            borderRadius: 2
                        }}
                        alt="Logo"
                        src={sampleImage}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            py: 2,
                            justifyContent: 'space-between',
                            maxWidth: 120
                        }}
                    >
                        <IconButton
                            sx={{ backgroundColor: 'white', maxHeight: 25, maxWidth: 25 }}
                        >
                            <FacebookIcon sx={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                        <IconButton
                            sx={{ backgroundColor: 'white', maxHeight: 25, maxWidth: 25 }}
                        >
                            <XIcon sx={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                        <IconButton
                            sx={{ backgroundColor: 'white', maxHeight: 25, maxWidth: 25 }}
                        >
                            <InstagramIcon sx={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                        <IconButton
                            sx={{ backgroundColor: 'white', maxHeight: 25, maxWidth: 25 }}
                        >
                            <YouTubeIcon sx={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ py: 4, px: 8 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Get In Touch</Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemIcon sx={{ mr: -3 }}>
                                <LocationOnIcon sx={{ color: '#DF593D' }} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ fontSize: '10px' }}>
                5 Canvavans Rd, Leongatha North VIC 3953, Australia
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemIcon sx={{ mr: -3 }}>
                                <PhoneInTalkIcon sx={{ color: '#DF593D' }} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ fontSize: '10px' }}>
                +61 417 841 278
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding sx={{ mt: 1 }}>
                            <ListItemIcon sx={{ mr: -3 }}>
                                <AlternateEmailIcon sx={{ color: '#DF593D' }} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ fontSize: '10px' }}>
                kppsmash@gmail.com
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ py: 4, px: 10 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Quick Links</Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText
                                primaryTypographyProps={{ fontSize: '10px', mt: -0.5 }}
                            >
                Terms & Conditions
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primaryTypographyProps={{ fontSize: '10px' }}>
                Privacy Policy
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primaryTypographyProps={{ fontSize: '10px' }}>
                Sitemap
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: '#18784E', color: 'white', height: '50px' }}>
                <Box sx={{ pt: 2, px: 10, display: 'flex' }}>
                    <Typography sx={{ fontSize: '12px', flexGrow: 1 }}>
            2023 <CopyrightIcon sx={{ maxHeight: 10, maxWidth: 10 }} />{' '}
                        <span style={{ color: '#DF593D' }}>SlasProp </span> All Rights
            Reserved
                    </Typography>
                    <Typography sx={{ fontSize: '12px' }}>
            SlasProp by Slas Technologies
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
