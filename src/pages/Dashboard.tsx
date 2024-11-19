import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../services/userService';
import LoadingSpinner from '../components/LoadingSpinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//toast.configure();

const Dashboard: React.FC = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserProfile();
                setUserData(data);
                toast.success('Data loaded successfully!');
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to load data. Redirecting to login.');
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {userData ? (
                <div>
                    <p>Welcome, {userData.name}!</p>
                    <p>Email: {userData.email}</p>
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default Dashboard;
