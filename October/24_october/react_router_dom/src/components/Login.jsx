import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const Login = () => {
    const [user,setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin=()=>{
        auth.login(user);
        navigate("/profile",{replace:true});
    }
  return (
    <div> 
        <h1>Login Page</h1>
        <label>Username
            <input type="text" placeholder="Enter user name" onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login