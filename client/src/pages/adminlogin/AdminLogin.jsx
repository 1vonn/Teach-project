import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../../Utils/Config';
import useStore from '../../store';

const AdminLogin = () => {
    const setLoggedIn = useStore((state) => state.setLoggedIn);
    const setAdmin = useStore((state) => state.setAdmin);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), 
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('adminToken', data.token); 
                setLoggedIn(true);  // Update login status in Zustand store
                setAdmin(true);    // Set admin status in Zustand store
                navigate('/admin'); // Redirect to admin dashboard
            } else {
                setError(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during admin login:', error);
            setError('An unexpected error occurred. Please try again.');
        }
    };

    // Inline style objects
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        
        backgroundColor: '#f4f4f9',
        padding: '20px'
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    const errorStyle = {
        color: 'red',
        margin: '10px 0',
    };

    return (
        <div style={containerStyle}>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        style={inputStyle}
                    />
                </div>
                {error && <p style={errorStyle}>{error}</p>}
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
