// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, signOut } from './features/authSlice';
import SignIn from './components/SignIn';
import Register from './components/Register';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div>
      {!user ? (
        <>
          <SignIn />
          <Register />
        </>
      ) : (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default App;
