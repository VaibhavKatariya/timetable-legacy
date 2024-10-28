import React from 'react';
import './not-found.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Page Not Found</p>
        </div>
    );
};

export default NotFound;