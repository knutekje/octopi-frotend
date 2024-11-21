import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2', // Blue
        },
        secondary: {
            main: '#ff4081', // Pink
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9', // Light Blue
        },
        secondary: {
            main: '#f48fb1', // Pink
        },
        background: {
            default: '#121212', // Dark background
            paper: '#1d1d1d', // Cards or surface background
        },
        text: {
            primary: '#ffffff', // White text
        },
    },
});
