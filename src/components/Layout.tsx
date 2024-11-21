import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Navbar />
            <Toolbar /> {/* Spacer for fixed Navbar */}

            <Box

                component="main"
                sx={{

                    flexGrow: 1,
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(to bottom, #e3f2fd, #90caf9)',
                }}
            >
                {children}
            </Box>
            <Footer />

        </Box>
    );
};

export default Layout;
