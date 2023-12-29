// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function UserTable() {
//   // Implement your user data management logic here (e.g., fetching from an API).
//   // For simplicity, we'll use local state to store user data.
//   const [users, setUsers] = useState([]);

//   const deleteUser = (index) => {
//     const updatedUsers = [...users];
//     updatedUsers.splice(index, 1);
//     setUsers(updatedUsers);
//   }
// /*In a usertable component i have a table that contain userFirst name ,last name, age
// email contact no. gender and action coloumn.
// In action column i have two button of edit and delete and after the table section i have 
// two button create user which direct us to create user page and one is logout buttom
// if user have token than only the action button perform its action. And table data cannot
// vanish when i refresh the page. The data added on the tablle as i created a new user
// */
//   return (
//     <div>
//       <h1>User Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>User First Name</th>
//             <th>User Last Name</th>
//             <th>Age</th>
//             <th>Email</th>
//             <th>Contact Number</th>
//             <th>Gender</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.age}</td>
//               <td>{user.email}</td>
//               <td>{user.contact}</td>
//               <td>{user.gender}</td>
//               <td>
//                 <Link to={`/edit-user/${index}`}>Edit</Link>
//                 <button onClick={() => deleteUser(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Link to="/createuser">Create User</Link>
//     </div>
//   );
// }

// export default UserTable;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from './Auth'; 
function UserTable() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || []);
  
  useEffect(() => {
    if (isAuthenticated()) {
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];
      setUserData(storedData);
    } 
  }, [navigate]);

  const handleDelete = (index) => {
    // Remove a user from the table and update local storage
    const updatedData = [...userData];
    updatedData.splice(index, 1);
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  }

  const handleEditUser = (user,index) => {
    // navigate({
    //   pathname: '/createuser',
    //   state: { userToEdit: user },
    // });
    const userToEdit = userData[index];
    navigate('/createuser', { userToEdit});
  };


  return (
    <div>
      <button onClick={logout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                {isAuthenticated() && (
                  <button onClick={() => handleDelete(index)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/createuser')}>Create User</button>
    </div>
  );
}

export default UserTable;



