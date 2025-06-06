// ✅ src/context/AppContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() =>
        localStorage.getItem('currentUser') || null
    );
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem('tasks');
        return stored ? JSON.parse(stored) : {};
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const login = (username) => {
        setCurrentUser(username);
        localStorage.setItem('currentUser', username);
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
    };


    const addTask = (username, task) => {
        setTasks(prev => {
            const updated = { ...prev, [username]: [...(prev[username] || []), task] };
            return updated;
        });
    };

    return (
        <AppContext.Provider value={{ currentUser, tasks, login, logout, addTask }}>
            {children}
        </AppContext.Provider>
    );
};
