import React from 'react';

const LoadingSpinner: React.FC = () => (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="spinner"></div>
        <p>Loading...</p>
    </div>
);

export default LoadingSpinner;
