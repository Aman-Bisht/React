import React from 'react';
import { useAuth } from './Auth';
import {useNavigate} from "react-router-dom";
// import './Profile.css'; 

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const handleLogout = ()=>{
      auth.logout();
      navigate("/");
  }
  const handleBack = ()=>{
    navigate("/")
  }

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      {auth.user ? (
        <div className="user-details">
          <h3>Welcome, {auth.user.firstName} {auth.user.lastName}</h3>
          <p>Age: {auth.user.age}</p>
          <p>Contact Number: {auth.user.contact}</p>
          <p>Email: {auth.user.email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <div>
        <p>Please log in to access your profile.</p>
        <button onClick={handleBack}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
