// import React, { useState } from "react";
// import { useAuth } from "./Auth";

// const Login = () => {
//   const [user, setUser] = useState("");
//   const auth = useAuth();
  

//   const handleLogin=(e)=>{
//     e.preventDefault()
//     auth.login(user);
// }


//   return (
//     <div>
//       <h1>Login Page</h1>
//       <label>
//         Username
//         <input
//           type="text"
//           placeholder="Enter name"
//           onChange={(e)=> setUser(e.target.value)}
//         />
//       </label>
//       <button onClick={handleLogin}>Submit</button>
      
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useAuth } from "./Auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(username);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
