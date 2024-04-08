import React from 'react';
import sampleImage from '../assets/profile-picture.png';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
    Avatar,
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const SideBar = () => {

    const {user} = useAuth();

    const GovernorOptions = [
        {
            id:1,
            name: 'Dashboard',
            address:''
        },
        {
            id:2,
          name: 'Approval Requests',
          address:'governor-approval-requests'
        },
        {
            id:3,
            name: 'Notifications',
            address:'notifications'
        },
        {
            id:4,
            name: 'FAQS',
            address:'faqs'
        },
        {
            id:5,
            name: 'Settings',
            address:'settings'
        },
      ];

    const SensitizationOfficerOptions = [
        {
            id:1,
            name: 'Dashboard',
            address:''
        },
        {
            id:2,
          name: 'Schedule Field Tasks',
          address:'schedule-field-tasks'
        },
        {
            id:3,
            name: 'Notifications',
            address:'notifications'
        },
        {
            id:4,
            name: 'FAQS',
            address:'faqs'
        },
        {
            id:5,
            name: 'Settings',
            address:'settings'
        },
      ];

    const ChiefRegistrarOptions = [
    {
        id:1,
        name: 'Dashboard',
        address:''
    },
    {
        id:2,
        name: 'Requests From The Surveyor General',
        address:'surveyor-general-requests'
    },
    {
        id:3,
        name: 'Requests Sent To The Governor',
        address:'governor-requests-sent'
    },
    {
        id:4,
        name: 'Manage Assistant Chief Registrar of Deeds ',
        address:'manage-assistant-crds'
    },
    
    {
        id:5,
        name: 'Notifications',
        address:'notifications'
    },
    {
        id:6,
        name: 'FAQS',
        address:'faqs'
    },
    {
        id:7,
        name: 'Settings',
        address:'settings'
    },
    ];

    const AssistantChiefRegistrarOptions = [
    {
        id:1,
        name: 'Dashboard',
        address:''
    },
    {
        id:2,
        name: 'Assigned By Chief Registrar of Deeds',
        address:'assigned-cr-requests'
    },
    {
        id:3,
        name: 'Requests Sent To The Governor',
        address:'governor-requests-sent'
    },        
    {
        id:4,
        name: 'Notifications',
        address:'notifications'
    },
    {
        id:5,
        name: 'FAQS',
        address:'faqs'
    },
    {
        id:7,
        name: 'Settings',
        address:'settings'
    },
    ];

    const SLTROfficerOptions = [
    {
        id:1,
        name: 'Dashboard',
        address:''
    },
    {
        id:2,
        name: 'From Registration Officers & GIS Officers',
        address:'registration-gis-requests'
    },
    {
        id:3,
        name: 'Requests Sent To The Land Records Bureau',
        address:'land-bureau-requests-sent'
    },
    {
        id:4,
        name: 'Manage Deputy SLTR Officers ',
        address:'manage-assistant-crds'
    },
    
    {
        id:5,
        name: 'Notifications',
        address:'notifications'
    },
    {
        id:6,
        name: 'FAQS',
        address:'faqs'
    },
    {
        id:7,
        name: 'Settings',
        address:'settings'
    },
    ];

    const DeptSLTROfficerOptions = [
        {
            id:1,
            name: 'Dashboard',
            address:''
        },
        {
            id:2,
            name: 'Assigned By SLTR Officer',
            address:'assigned-sltr-requests'
        },
        {
            id:3,
            name: 'Requests Sent To The Land Records Bureau',
            address:'land-bureau-requests-sent'
        },
        {
            id:4,
            name: 'Notifications',
            address:'notifications'
        },
        {
            id:5,
            name: 'FAQS',
            address:'faqs'
        },
        {
            id:6,
            name: 'Settings',
            address:'settings'
        },
    ];

    const LandBureauRecordsOptions = [
    {
        id:1,
        name: 'Dashboard',
        address:''
    },
    {
        id:2,
        name: 'Requests From The SLTR Officer',
        address:'sltr-officer-requests'
    },
    {
        id:3,
        name: 'Requests Sent To Surveyor General',
        address:'sltr-officer-requests-sent'
    },
    {
        id:4,
        name: 'Notifications',
        address:'notifications'
    },
    {
        id:5,
        name: 'FAQS',
        address:'faqs'
    },
    {
        id:6,
        name: 'Settings',
        address:'settings'
    },
    ];


    const SurveyorGeneralOptions = [
    {
        id:1,
        name: 'Dashboard',
        address:''
    },
    {
        id:2,
        name: 'Requests From The Land Bureau Records',
        address:'land-bureau-requests'
    },
    {
        id:3,
        name: 'Requests Sent',
        address:'land-bureau-requests-sent'
    },
    {
        id:4,
        name: 'Notifications',
        address:'notifications'
    },
    {
        id:5,
        name: 'FAQS',
        address:'faqs'
    },
    {
        id:6,
        name: 'Settings',
        address:'settings'
    },
    ];

    const borderBottoms = {
    Settings:'none'
    };
    

    return (
        <Box
            sx={{
                overflow: 'auto',
                maxWidth: 270,
                boxShadow: '10px 0px 10px rgba(108, 122, 137, 0.5)',
                left: '4%',
                position: 'absolute'
            }}
        >
            <List>
                <Container sx={{ borderBottom: '1px solid grey' }}>
                    <Box
                        sx={{
                            backgroundColor: '#26a69a',
                            minHeight: '80px',
                            ml: -3,
                            mr: -3,
                            mt: -1
                        }}
                    />
                    <Avatar
                        src={sampleImage}
                        sx={{ width: 80, height: 80, marginTop: -6 }}
                    />
                    <Box sx={{ display: 'flex', my: 2 }}>
                        <Box>
                            <Typography
                                sx={{ fontWeight: 'bold', fontSize: '18px', color: 'black' }}
                            >
                Indraniel Sen
                            </Typography>
                            <Typography sx={{ fontSize: '12px' }}>
                User ID :#269d91
                            </Typography>
                        </Box>
                        <Button
                            size="small"
                            sx={{
                                color: '#26a69a',
                                fontSize: '12px',
                                border: '1px solid #26a69a',
                                width: 70,
                                my: 1,
                                ml: 2,
                                borderRadius: 4
                            }}
                        >
                            <EditOutlinedIcon
                                sx={{ mr: 1, color: '#26a69a', fontSize: 'large' }}
                            />
              Edit
                        </Button>
                    </Box>
                </Container>

                {
                    user.role==='Surveyor General' &&
                    SurveyorGeneralOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

                {
                    user.role==='Land Records Officer' &&
                    LandBureauRecordsOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

                
                {
                    user.role==='Governor' &&
                    GovernorOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

                {
                    user.role==='Sensitization Officer' &&
                    SensitizationOfficerOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

                {
                    user.role==='Chief Registrar' &&
                    ChiefRegistrarOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

                {
                    user.role==='Assistant Chief Registrar' &&
                    AssistantChiefRegistrarOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

                {
                    user.role==='SLTR Officer' && SLTROfficerOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }

{
                    user.role==='Deputy SLTR Officer' && DeptSLTROfficerOptions.map((option) => (
                        <ListItem disablePadding key={option.id}>
                          <ListItemButton
                              sx={{ borderBottom: borderBottoms[option.name] ?? '1px solid lightgrey' }}
                              component={Link}
                              to={`/dashboard/${option.address}`}
                          >
                              <ListItemText
                                  sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                                  primaryTypographyProps={{ fontSize: '12px' }}
                                  primary={option.name}
                              />
                          </ListItemButton>                      
                        </ListItem>
                 
                      ))
                }


            </List>
        </Box>
    );
};

export default SideBar;
