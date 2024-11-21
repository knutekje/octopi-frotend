import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    toggleTheme: () => void;
    darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, darkMode }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to login page
    };

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    My App
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" onClick={() => navigate('/temperature')}>
                        Temperature Reporting
                    </Button>
                    <Button color="inherit" onClick={() => navigate('/safety')}>
                        Safety
                    </Button>
                    {token ? (
                        <>
                            <Button color="inherit" onClick={() => navigate('/profile')}>
                                Profile
                            </Button>
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button color="inherit" onClick={() => navigate('/')}>
                            Login
                        </Button>
                    )}
                    <Button color="inherit" onClick={toggleTheme}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
