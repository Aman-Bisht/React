import React, { useState } from 'react';
import { useAuth } from './Auth';
import "./Index.css"
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [userData,setUserData] = useState({
        firstName:'',
        lastName:'',
        age:'',
        contactNumber:'',
        email:'',

    })

    const auth = useAuth();
    const navigate = useNavigate()
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.login(userData);
        console.log(userData)
        navigate("/profile")
        
    }
  return (
    <div className="login-form">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={userData.lastName}
            onChange={(e)=>setUserData({...userData,lastName:e.target.value})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            placeholder="Enter user Age"
            value={userData.age}
            onChange={(e)=>setUserData({...userData,age:e.target.value})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="text"
            id="contact"
            placeholder="Enter user contact Number"
            value={userData.contactNumber}
            onChange={(e)=>setUserData({...userData,contactNumber:e.target.value})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter user email address"
            value={userData.email}
            onChange={(e)=>setUserData({...userData,email:e.target.value})}
          />
        </div>

        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
