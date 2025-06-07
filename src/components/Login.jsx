import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const credentials = {
    adi: 'adirp7',
    akash: 'akash',
    somnath: 'somnath18',
    avnish: 'avi75',
    omgupta: 'omgupta',
    pavan: 'pavan28',
    prince: 'prince123',
};

const Login = () => {
    const { login } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username && !password) {
            setError('Please fill all fields!');
            document.getElementById('username').focus();
            return;
        }

        setError('');

        if (credentials[username] && credentials[username] === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(username));
            await login(username);
        } else {
            setError('Invalid credentials. Try again.');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-sm p-6 bg-gray-800 rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">🔐 Login</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-400 mb-2">{error}</p>}
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
