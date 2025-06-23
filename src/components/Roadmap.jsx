import React from 'react';

const Roadmap = () => {
    const totalDays = 33; // Updated from 23 to 33
    const startDate = new Date("2025-06-01T00:00:00Z");
    const today = new Date();

    const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    return (
        <div className="my-4 text-white">
            <h2 className="text-xl font-semibold mb-2">🚀 33-Day Placement Roadmap</h2>
            <div className="grid grid-cols-7 gap-1">
                {[...Array(totalDays)].map((_, index) => (
                    <div
                        key={index}
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold
                            ${index < diff
                                ? 'bg-green-500'
                                : index === diff
                                    ? 'bg-yellow-400 text-black'
                                    : 'bg-gray-700 text-gray-400'}`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
                Day {Math.min(diff + 1, totalDays)} of {totalDays}
            </p>
        </div>
    );
};

export default Roadmap;
