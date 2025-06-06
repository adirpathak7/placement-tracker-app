import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();         // Clear context and localStorage
        navigate('/');    // Redirect to login page
    };

    return (
        <button
            onClick={handleLogout}
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
