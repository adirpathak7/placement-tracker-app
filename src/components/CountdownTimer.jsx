// ✅ src/components/CountdownTimer.jsx
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const start = new Date(localStorage.getItem('startDate') || new Date().toISOString());
    const end = new Date(start);
    end.setDate(start.getDate() + 29);

    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(end));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(end));
        }, 1000);
        return () => clearInterval(interval);
    }, [end]);

    function getTimeLeft(endTime) {
        const now = new Date();
        const diff = endTime - now;
        if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
        return {
            d: Math.floor(diff / (1000 * 60 * 60 * 24)),
            h: Math.floor((diff / (1000 * 60 * 60)) % 24),
            m: Math.floor((diff / 1000 / 60) % 60),
            s: Math.floor((diff / 1000) % 60)
        };
    }

    return (
        <div className="text-center text-2xl font-bold mb-4">
            ⏳ {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s left!
        </div>
    );
};

export default CountdownTimer;
