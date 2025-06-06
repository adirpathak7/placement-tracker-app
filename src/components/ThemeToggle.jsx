// ✅ src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const ThemeToggle = () => {
    const { logout, currentUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // logout ke baad login page pe redirect
    };

    if (!currentUser) return null; // agar user login nahi to button mat dikha

    return (
        <button
            onClick={handleLogout}
            className="absolute top-4 right-4 px-3 py-1 rounded bg-gray-300 dark:bg-gray-800 text-black dark:text-white shadow cursor-pointer"
        >
            🚪 Logout
        </button>
    );
};

export default ThemeToggle;
