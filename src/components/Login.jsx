// ✅ src/components/Login.jsx
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const credentials = {
    adi: 'adi2147',
    akash: 'akash29',
    somnath: 'somnath15',
    avnish: 'avi75',
    om: 'om18',
    pavan: 'pavan28',
    prince: 'shivu55',
};

const Login = () => {
    const { login } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username) {
            alert('Please enter username!')
            document.getElementById('username').focus()
            return false
        }

        if (!password) {
            alert('Please enter password!')
            document.getElementById('password').focus()
            return false
        }

        
        if (credentials[username] && credentials[username] === password) {
            login(username);
        } else {
            setError('Invalid credentials. Try again.');
            setUsername('')
            setPassword('')
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">🔐 Login</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-600 mb-2">{error}</p>}
                    <input
                        type="text"
                        id='username'
                        placeholder="Username"
                        className="w-full p-2 mb-2 border rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        id='password'
                        placeholder="Password"
                        className="w-full p-2 mb-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white w-full py-2 rounded cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
