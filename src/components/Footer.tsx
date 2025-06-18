import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <>
      <AppBar component="footer" position="static" sx={{ backgroundColor: '#191919'}} >
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center' }}>
                <Box>
                    <Typography variant='caption'>
                        2025 @Ryo Yoshimura
                    </Typography>
                </Box>
            </Box>

        </Container>
      </AppBar>
    </>
  )
};

export default Footer;
