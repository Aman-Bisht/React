import React from "react";
import { useAuth } from "./Auth";

const Profile = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Profile Page</h1>
      {auth.user ? (
        <div>
          <p>Hello, {auth.user}! Here are your latest posts.</p>
          <p>Your age is {auth.age}</p>
        </div>
      ) : (
        <p>Please log in to see your posts.</p>
      )}
    </div>
  );
};

export default Profile;
