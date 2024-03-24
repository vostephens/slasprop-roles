import React, { useState } from 'react';

import {
    Button,
    Container,
    FormLabel,
    InputAdornment,
    TextField,
    IconButton,
    Box,
    Typography,
    Divider
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
    const { login } = useAuth();

    const [flag, setFlag] =useState(false);

    const [formData, setFormData] = useState({
        userID: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        userID: '',
        password: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { userID: '', password: '' };
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!formData.userID) {
            newErrors.userID = 'User ID is required';
            valid = false;
        }
        // Password strength check
        else if (!formData.password || !passwordRegex.test(formData.password)) {
            newErrors.password =
        'Password must be at least 6 characters with at least one uppercase and one lowercase letter';
            valid = false;
        }
        else if (flag===false){
            newErrors.password= 'Username or Password is Incorrect';
        }


        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFlag(await login(formData));
        } 
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Box
            width={500}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 0px 2px 2px lightgrey',
                borderRadius: '16px',
                py: 4,
                mt: 6,
                ml: 3,
                mb: 6
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'monospace',
                    fontSize: 17,
                    fontWeight: 'bold',
                    mb: 1,
                    px: 3
                }}
            >
        Login
            </Typography>

            <Divider sx={{ maxWidth: '100%' }} />

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', px: 4 }}
            >
                <p style={{ color: '#26a69a', fontSize: 15 }}>
          Enter your login details to sign in.
                </p>
                <FormLabel sx={{ fontSize: 13 }}>User ID</FormLabel>
                <TextField
                    name="userID"
                    size="small"
                    onChange={handleChange}
                    error={Boolean(errors.userID)}
                    helperText={errors.userID}
                    margin="normal"
                    sx={{ color: 'grey', mb: 1.5 }}
                />
                <FormLabel sx={{ fontSize: 13 }}>Password</FormLabel>
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    size="small"
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    margin="normal"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <Link
                    href="#"
                    variant="body2"
                    style={{
                        textDecoration: 'none',
                        color: 'red',
                        fontWeight: 'bold',
                        marginLeft: 'auto'
                    }}
                >
          Forgot Password?
                </Link>
                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="medium"
                        sx={{
                            "mt": 2,
                            "backgroundColor": '#26a69a',
                            '&:hover': { backgroundColor: '#26a69a' },
                            "borderRadius": '16px',
                            "boxShadow": '10px 10px 5px #269d91 inset',
                            "width": '150px'
                        }}
                    >
            Login
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default LoginForm;
