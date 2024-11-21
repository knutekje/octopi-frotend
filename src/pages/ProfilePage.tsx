import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, Button, Alert } from '@mui/material';

const ProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/'); // Redirect if no token
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setProfile(data);
            } catch (error: any) {
                console.error('Error fetching profile:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to login page
    };

    if (loading) return <Typography>Loading...</Typography>;

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <Card
            sx={{
                width: '100%', // Make the card take the full width of the parent container
                maxWidth: '600px', // Restrict the card’s maximum width
                padding: 4,
            }}
        >
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    User Profile
                </Typography>
                {profile ? (
                    <>
                        <Typography variant="h6">Name: {profile.name}</Typography>
                        <Typography variant="h6">Email: {profile.email}</Typography>
                    </>
                ) : (
                    <Alert severity="info">No profile data available.</Alert>
                )}
                <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ marginTop: 2 }}>
                    Logout
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProfilePage;
