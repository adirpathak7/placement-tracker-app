// ✅ src/components/Quote.jsx
import React, { useEffect, useState } from 'react';

const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t come to you. You go to it.",
    "The future depends on what you do today.",
    "Do one thing every day that scares you.",
    "Believe you can and you're halfway there.",
    "It always seems impossible until it’s done."
];

const Quote = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(random);
    }, []);

    return (
        <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-800 text-center rounded">
            <p className="italic font-semibold">"{quote}"</p>
        </div>
    );
};

export default Quote;
