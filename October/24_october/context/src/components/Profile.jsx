// import React from 'react'
// import { useAuth } from './Auth'

// function Profile(){
//     const auth = useAuth()
//     return  <h3> Welcome {auth.user} </h3>
// }

// export default Profile

import React from "react";
import { useAuth } from "./Auth";

const Profile = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {auth.user ? (
        <div>
          <h3>Welcome {auth.user}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
