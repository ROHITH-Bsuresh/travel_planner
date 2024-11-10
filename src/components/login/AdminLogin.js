// src/components/login/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login/login.css';

function AdminLogin() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (id === 'travel' && pass === 'travel_123') {
      navigate('/adminpanel');
    } else {
      alert('Invalid Admin Credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
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
      <button onClick={handleAdminLogin} className="login-button">Login</button>
    </div>
  );
}

export default AdminLogin;
