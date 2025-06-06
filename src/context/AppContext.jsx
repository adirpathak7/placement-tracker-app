import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [tasks, setTasks] = useState({});

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
            const res = await axios.get('https://placement-tracker-app-backend.onrender.com/tasks');
            // console.log("Fetched tasks:", res.data);

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
        }
    };


    const addTask = async (username, newTask) => {
        const taskToSave = {
            ...newTask,
            username
        };

        try {
            const res = await axios.post('https://placement-tracker-app-backend.onrender.com/tasks', taskToSave);
            // console.log("add: " + res);

            const updatedUserTasks = [...(tasks[username] || []), res.data];
            setTasks(prev => ({
                ...prev,
                [username]: updatedUserTasks
            }));
        } catch (err) {
            console.error("Error adding task:", err);
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
                setTasks
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
