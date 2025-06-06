import React from 'react';
import CountdownTimer from './CountdownTimer';
import AddWorkForm from './AddWorkForm';
import Roadmap from './Roadmap';
import TaskBoard from './TaskBoard';
import Quote from './Quote';
import ThemeToggle from './ThemeToggle';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentUser, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">🚀 Placement Prep Tracker</h1>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      <CountdownTimer />
      <Quote />
      <AddWorkForm />
      <Roadmap />
      <TaskBoard />
    </div>
  );
};

export default Home;
