// ✅ src/components/TaskBoard.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TaskBoard = () => {
    const { tasks, currentUser } = useContext(AppContext);

    const users = Object.keys(tasks);

    return (
        <div className="mt-4">
            <h2 className="text-4xl font-semibold mb-2 text-center">📊 Team Progress Board</h2>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div key={user} className="bg-white dark:bg-gray-800 shadow p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 text-center uppercase">{user}</h3>
                            {tasks[user].length === 0 ? (
                                <p className="text-gray-500 text-sm">No entries yet.</p>
                            ) : (
                                tasks[user].map((entry, index) => (
                                    <div key={index} className="border-t pt-2 mt-2">
                                        <p><span className="font-semibold">Date:</span> {entry.date}</p>
                                        <p><span className="font-semibold">Today:</span> {entry.today}</p>
                                        <p><span className="font-semibold">Next:</span> {entry.next}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskBoard;
