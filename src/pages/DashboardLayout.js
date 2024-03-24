import React from 'react';
import { Container } from '@mui/material';
import MainBar from '../components/MainBar';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <Container>
            <MainBar />
            <SideBar />
            <Outlet />
        </Container>
    );
};

export default DashboardLayout;
