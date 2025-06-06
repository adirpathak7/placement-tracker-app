// ✅ src/components/Roadmap.jsx
import React from 'react';

const Roadmap = () => {
    const totalDays = 29;
    const startDate = new Date(localStorage.getItem("startDate") || new Date().toISOString());
    const today = new Date();
    const diff = Math.floor((today - new Date(startDate)) / (1000 * 60 * 60 * 24));

    if (!localStorage.getItem("startDate")) {
        localStorage.setItem("startDate", startDate.toISOString());
    }

    return (
        <div className="my-4">
            <h2 className="text-xl font-semibold mb-2">🚀 29-Day Placement Roadmap</h2>
            <div className="grid grid-cols-7 gap-1">
                {[...Array(totalDays)].map((_, index) => (
                    <div
                        key={index}
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold text-white ${index < diff ? 'bg-green-500' : index === diff ? 'bg-yellow-400' : 'bg-gray-300'
                            }`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
