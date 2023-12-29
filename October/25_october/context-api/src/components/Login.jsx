import React, { useState } from 'react'
import { useAuth } from './Auth'

const Login = () => {
    const [user,setUser] = useState("")
    const [age,setAge]=useState(null);
    const auth = useAuth()
    const handleLogin=(e)=>{
        auth.login(user,age)
    }
  return (
    <div>
        <h1>Login Page</h1>
        <label>
            Username
            <input 
            type="text"
            placeholder="Enter user name"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            />
        </label>
        <label>
            Age
            <input 
            type="text"
            placeholder="Enter user age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
        </label>
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login