import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';

const transactionData = [
    {
        transactionID: '#SLAS789264981',
        userName: 'Indrani Sen',
        emailID: 'indranisen@gmail.com',
        location: 'Kano',
        amount: '$780',
        status: 'success'
    },
    {
        transactionID: '#SLAS719264982',
        userName: 'Indrani Sen',
        emailID: 'indranisen@gmail.com',
        location: 'Kano',
        amount: '$780',
        status: 'success'
    },
    {
        transactionID: '#SLAS789264912',
        userName: 'Indrani Sen',
        emailID: 'indranisen@gmail.com',
        location: 'Kano',
        amount: '$780',
        status: 'pending'
    },
    {
        transactionID: '#SLAS739264982',
        userName: 'Indrani Sen',
        emailID: 'indranisen@gmail.com',
        location: 'Kano',
        amount: '$780',
        status: 'failed'
    }
];

const statusColors = {
    failed: '#E83114',
    success: '#26BC1A',
    pending: '#ECE92E'
};

const TransactionTable = () => {
    return (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#F9765A' }}>
                        <TableCell sx={{ color: 'white' }}>Transaction ID</TableCell>
                        <TableCell sx={{ color: 'white' }}>User Name</TableCell>
                        <TableCell sx={{ color: 'white' }}>Email ID</TableCell>
                        <TableCell sx={{ color: 'white' }}>Location</TableCell>
                        <TableCell sx={{ color: 'white' }}>Amount Paid</TableCell>
                        <TableCell sx={{ color: 'white' }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionData.map((trans) => (
                        <TableRow
                            key={trans.transactionID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ color: 'grey' }}>
                                {trans.transactionID}
                            </TableCell>
                            <TableCell sx={{ color: 'grey' }}>{trans.userName}</TableCell>
                            <TableCell sx={{ color: 'grey' }}>{trans.emailID}</TableCell>
                            <TableCell sx={{ color: 'grey' }}>{trans.location}</TableCell>
                            <TableCell sx={{ color: 'grey' }}>{trans.amount}</TableCell>
                            <TableCell
                                sx={{
                                    color: statusColors[trans.status] ?? 'grey',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <CircleIcon sx={{ fontSize: 12 }} />
                &nbsp;{trans.status}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TransactionTable;
