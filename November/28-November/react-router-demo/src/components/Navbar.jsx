import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Navbar() {
  const auth = useAuth()
  const navLinkStyle = ({isActive})=>{
    return {
      textDecoration:isActive?"none":"outlined",
      fontWeight:isActive?"bold":"normal"
    }
  }
  return (
    <div>
      {/* <nav style={{padding:6, margin:30, display:"flex", justifyContent:"center",}}>
            <Link to="/"style={{padding:30}}>Home</Link>
            <Link to="/about"style={{padding:30}}>About</Link>
        </nav> */}
      <nav className="primary-nav">
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle}>About</NavLink>
        <NavLink to="/products" style={navLinkStyle}>Products</NavLink>
        <NavLink to="/users" style={navLinkStyle}>Users</NavLink>
        <NavLink to="/profile" style={navLinkStyle}>Profile</NavLink>
        {
          !auth.user &&(
            <NavLink to="/login" style={navLinkStyle}>Login</NavLink>
          )
        }
      </nav>
    </div>
  );
}

export default Navbar;
