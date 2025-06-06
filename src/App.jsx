// ✅ src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Roadmap from './components/Roadmap';
import CountdownTimer from './components/CountdownTimer';
import AddWorkForm from './components/AddWorkForm';
import TaskBoard from './components/TaskBoard';
import Quote from './components/Quote';
import ThemeToggle from './components/ThemeToggle';
import { AppContext } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';

const Dashboard = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Welcome, {currentUser} 👋</h1>
      <CountdownTimer />
      <Roadmap />
      <AddWorkForm />
      <TaskBoard />
      <Quote />
    </>
  );
};

const App = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white px-4 py-6">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? <Navigate to="/dashboard" /> : <Login />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
                <ThemeToggle />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
