import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from './Auth'

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const handleLogout = ()=>{
    auth.logout()
    navigate("/")
  }
  return (
    <div>
        <h1>Profile Page</h1>
        <h3> Welcome {auth.user} </h3>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile