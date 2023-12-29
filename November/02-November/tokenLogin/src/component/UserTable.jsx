import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './styles.css';

function UserTable() {
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    // window.location.href = "login.html";
    navigate("/");
  };

  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(userDataFromStorage);
  }, []);

  const editUser = (index) => {
    if (!token) {
    //   window.location.href = "login.html";
    navigate("/");
      return;
    }

    const userToEdit = userData[index];
    const queryString = `?index=${index}&firstName=${userToEdit.firstName}&lastName=${userToEdit.lastName}&age=${userToEdit.age}&email=${userToEdit.email}&contact=${userToEdit.contact}&gender=${userToEdit.gender}`;
    // window.location.href = `createuser.jsx${queryString}`;
    navigate(`/createuser${queryString}`)
  };

  const deleteUser = (index) => {
    if (!token) {
    //   window.location.href = "login.html";
    navigate("/");
      return;
    }

    const updatedUserData = [...userData];
    if (index >= 0 && index < updatedUserData.length) {
      updatedUserData.splice(index, 1);
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
    }
  };

  const createUser = () => {
    // window.location.href = "createuser.html";
    navigate("/createuser")
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
                <button onClick={() => editUser(index)}>Edit</button>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={createUser}>Create User</button>
    </div>
  );
}

export default UserTable;
