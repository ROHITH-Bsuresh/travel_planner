// src/components/login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/login/login.css';

function Login() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { id, password: pass });
      alert(response.data.message);  // Alert success message
      localStorage.setItem('userId', response.data.user.id);
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const handleAdminLogin = () => {
    navigate('/adminlogin');  // Ensure this matches the route defined in App.js
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">Submit</button>
      {message && <p className="login-message">{message}</p>}
      
      {/* Admin login button */}
      <button onClick={handleAdminLogin} className="login-button admin-button">Login as Admin</button>
    </div>
  );
}

export default Login;
