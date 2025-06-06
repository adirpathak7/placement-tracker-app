import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AddWorkForm = () => {
    const { currentUser, addTask } = useContext(AppContext);
    const [today, setToday] = useState('');
    const [next, setNext] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!today) {
            document.getElementById('todayWorkError').innerHTML = "Please enter the work!"
            document.getElementById('todayWork').focus();
            return;
        }

        if (!next) {
            document.getElementById('nextDayWorkError').innerHTML = "Please enter tomorrow's work!"
            document.getElementById('nextDayWork').focus();
            return;
        }

        const task = {
            date: new Date().toISOString().split('T')[0],
            today,
            next
        };

        addTask(currentUser, task);
        setToday('');
        setNext('');
        document.getElementById('todayWorkError').innerHTML = ""
        document.getElementById('nextDayWorkError').innerHTML = ""
        // alert('Work added successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className="my-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-2">➕ Add Your Work</h2>
            <textarea
                value={today}
                id='todayWork'
                onChange={(e) => setToday(e.target.value)}
                placeholder="What did you do today?"
                className="w-full p-2 mb-2 border rounded"
            />
            <span id='todayWorkError' className='text-red-500'></span>
            <textarea
                value={next}
                id='nextDayWork'
                onChange={(e) => setNext(e.target.value)}
                placeholder="What's your plan for tomorrow?"
                className="w-full p-2 mb-2 border rounded"
            />
            <span id='nextDayWorkError' className='text-red-500'></span>
            <br />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                Save Work
            </button>
        </form>
    );
};

export default AddWorkForm;
