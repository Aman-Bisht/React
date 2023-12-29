// src/components/SignIn.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../features/authSlice';
import { selectUsers } from '../features/registerSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Find the user with the entered username
    const user = users.find((u) => u.username === username);

    // Check if the user exists and the password is correct
    if (user && user.password === password) {
      dispatch(signIn(user));
    } else {
      // Handle incorrect username or password (you can show an error message)
      console.log('Incorrect username or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
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
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
