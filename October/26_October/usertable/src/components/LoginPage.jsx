// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Implement your login logic here (e.g., check username and password).
//     // If login is successful, set a token or user status and redirect to UserTable.
//     // For simplicity, we'll just check for a hard-coded username and password.
//     if (username === 'user' && password === 'password') {
//       // For a real application, set a token or user status.
//       navigate('/usertable');
//     } else {
//       alert('Invalid credentials');
//     }
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "./Auth"; // Import your authentication service

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const authenticated = login(username, password); 
    if (authenticated) {
      navigate('/usertable');
    } else {
      alert('Invalid credentials');
    }
  }
  const handleUser=()=>{
      navigate("/usertable")
  }

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleUser}>UserTable</button>
    </div>
  );
}

export default LoginPage;

