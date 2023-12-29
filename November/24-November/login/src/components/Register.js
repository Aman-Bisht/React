// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here (e.g., API call)
    // For simplicity, just set a dummy user for now
    const user = { username };
    dispatch(setUser(user));
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
