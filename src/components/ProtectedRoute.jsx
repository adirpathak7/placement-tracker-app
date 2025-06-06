// ✅ src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AppContext);

    if (!currentUser) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
