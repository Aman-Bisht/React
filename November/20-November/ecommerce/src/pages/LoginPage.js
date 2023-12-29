// pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    // Perform login (you need to implement this)
    console.log('Login:', { username, password });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
