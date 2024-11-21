import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/'); // Redirect to login if no token
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/User/profile/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
     

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                console.log('Profile data fetched:', data);
                setProfile(data);
            } catch (err: any) {
                console.error('Error fetching profile:', err.message);
                setError(err.message);

            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                </div>
            ) : (
                <p>No profile data available.</p>
            )}
        </div>
    );
};

export default ProfilePage;
