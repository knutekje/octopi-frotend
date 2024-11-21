import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Check if the user is logged in

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to login
    };

    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>
                Home
            </Link>
            {token ? (
                <>
                    <Link to="/profile" style={{ marginRight: '1rem' }}>
                        Profile
                    </Link>
                    <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        Logout
                    </button>
                </>
            ) : (
                <Link to="/" style={{ marginRight: '1rem' }}>
                    Login
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
