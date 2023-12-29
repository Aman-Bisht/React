import React from 'react'
import {Link,NavLink} from "react-router-dom"
import { useAuth } from './Auth'

const navStyle = ({isActive})=>{
    return {
        fontWeight:isActive?"bold":"normal",
        textDecoration:isActive?"none":"underline"
        
    }
}

const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className="primary" style={{ color: 'blue', lineHeight : 5, padding: 5, margin:3 }}>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <NavLink to="/" style={navStyle}>Home</NavLink>
        <NavLink to="/about" style={navStyle}>About</NavLink>
        <NavLink to="/products" style={navStyle}>Products</NavLink>
        <NavLink to="/users" style={navStyle}>User</NavLink>
        <NavLink to="/profile" style={navStyle}>Profile</NavLink>
      
        {
          !auth.user &&  (<NavLink to="/login" style={navStyle}>Login</NavLink>
          )
        }
    </nav>
  )
}

export default Navbar 