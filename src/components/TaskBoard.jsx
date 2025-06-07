import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TaskBoard = () => {
    const { tasks } = useContext(AppContext);

    const users = Object.keys(tasks || {});

    if (!users.length) {
        return <p className="text-center text-gray-400 mt-4">No task data available yet.</p>;
    }

    return (
        <div className="mt-6 text-white">
            <h2 className="text-4xl font-semibold mb-6 text-center">📊 Team Progress Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div key={user} className="bg-gray-800 shadow p-5 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 text-center uppercase text-blue-300">
                            👤 {user}
                        </h3>

                        {tasks[user] && tasks[user].length > 0 ? (
                            tasks[user]
                                .slice()
                                .reverse()
                                .map((entry, index) => (
                                    <div key={index} className="border-t border-gray-600 pt-3 mt-3 text-sm text-gray-300">
                                        <p><strong>📅 Date:</strong> {new Date(entry.createdAt).toLocaleDateString()}</p>
                                        <p><strong>✅ Today:</strong> {entry.todayWork || 'N/A'}</p>
                                        <p><strong>🔜 Tomorrow:</strong> {entry.nextDayWork || 'N/A'}</p>
                                    </div>
                                ))
                        ) : (
                            <p className="text-gray-500 text-sm">No entries yet.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
