// CountdownTimer.js
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const startDate = new Date("2025-06-01T00:00:00Z");

        const deadline = new Date(startDate.getTime() + 29 * 24 * 60 * 60 * 1000);

        const updateTimer = () => {
            const now = new Date();
            const diff = deadline - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center font-bold text-xl">
            ⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
        </div>
    );
};

export default CountdownTimer;
