import React from 'react';

import { Box, Typography } from '@mui/material';
import TransactionTable from '../components/TransactionTable';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <>
            <Box
                sx={{
                    marginLeft: '25%',
                    mt: 4,
                    borderBottom: '1px solid lightgray',
                    pb: 2
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Dashboard
                </Typography>
            </Box>

            <Box
                sx={{
                    marginLeft: '25%',
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        border: '1px solid lightgrey'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
            Total Officers
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: 17, color: 'orange' }}
                    >
            123
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        border: '1px solid lightgrey'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
            Total Users
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: 17, color: 'orange' }}
                    >
            1345
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        border: '1px solid lightgrey'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
            Total Field Tasks
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: 17, color: 'orange' }}
                    >
            768
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        border: '1px solid lightgrey'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
            User Roles
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: 17, color: 'orange' }}
                    >
            15
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ marginLeft: '25%', mt: 2, mb: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Recent Transactions</Typography>
                <TransactionTable />
            </Box>
            <Footer />
        </>
    );
};

export default Dashboard;
