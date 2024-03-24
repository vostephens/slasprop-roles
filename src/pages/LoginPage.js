import React from 'react';
import Logo from '../assets/Logo.png';
import LoginImage from '../assets/Login Image.png';

import { Container, Box } from '@mui/material';
import LoginForm from '../forms/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <>
            <Container sx={{ display: 'flex' }}>
                <Box
                    component="img"
                    sx={{
                        maxHeight: 50
                    }}
                    alt="Your logo."
                    src={Logo}
                />
            </Container>

            <Box sx={{ display: 'flex', backgroundColor: '#F8F8F8', mt: 2, pl: 4 }}>
                <LoginForm />
                <Box
                    component="img"
                    sx={{
                        ml: 10,
                        maxHeight: 400,
                        mt: 2
                    }}
                    alt="Your logo."
                    src={LoginImage}
                />
            </Box>

            <Footer />
        </>
    );
};

export default Login;
