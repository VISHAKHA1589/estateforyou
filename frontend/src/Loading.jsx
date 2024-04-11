import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
