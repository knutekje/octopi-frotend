import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

interface ProtectedRouteProps {
    children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Assuming role is stored

    if (!token || (adminOnly && userRole !== 'admin')) {
        return <Navigate to="/" />;
    }
    return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
