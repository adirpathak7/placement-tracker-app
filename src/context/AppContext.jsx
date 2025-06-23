import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [tasks, setTasks] = useState({});
    const [loading, setLoading] = useState(true);

    const login = (username) => {
        setCurrentUser(username);
        localStorage.setItem('loggedInUser', username);
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('loggedInUser');
    };

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const res = await axios.get('https://placement-tracker-app-backend-1.onrender.com/tasks');
            const rawTasks = res.data.data;

            const grouped = rawTasks.reduce((acc, task) => {
                const user = task.username;
                if (!acc[user]) acc[user] = [];
                acc[user].push(task);
                return acc;
            }, {});

            setTasks(grouped);
        } catch (err) {
            console.error("Error fetching tasks:", err);
        } finally {
            setLoading(false);
        }
    };

    const addTask = async (username, newTask) => {
        const taskToSave = { ...newTask, username };

        try {
            setLoading(true);
            const res = await axios.post('https://placement-tracker-app-backend-1.onrender.com/tasks', taskToSave);
            const savedTask = res.data.data;

            const updatedUserTasks = [...(tasks[username] || []), savedTask];
            setTasks(prev => ({
                ...prev,
                [username]: updatedUserTasks
            }));
        } catch (err) {
            console.error("Error adding task:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) setCurrentUser(savedUser);
        fetchTasks();
    }, []);

    return (
        <AppContext.Provider
            value={{
                currentUser,
                login,
                logout,
                tasks,
                addTask,
                setTasks,
                loading,
            }}
        >
            {loading && <Loader />}
            {children}
        </AppContext.Provider>
    );
};
