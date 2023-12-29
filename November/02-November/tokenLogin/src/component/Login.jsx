import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './styles.css';

function Login() {rm -rf .git
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (username === username && password === password) {
      const token = generateToken();
      localStorage.setItem("token", token);
      navigate("/usertable");
    } else {
      alert("Invalid credentials");
    }
  };

  const generateToken = () => {
    return Math.random().toString(36).substr(2, 16); // Generates a random token
  };

  const goToTablePage = () => {
    // window.location.href = "usertable.html";
    navigate("/usertable");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={login}>Login</button>
      </form>
      <button onClick={goToTablePage}>Go to Table Page</button>
    </div>
  );
}

export default Login;
