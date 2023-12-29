// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CreateUser() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [gender, setGender] = useState('Male');
//   const navigate = useNavigate()

//   const createUser = () => {
//     // Implement your user creation logic here.
//     // Save the user data and navigate back to the UserTable page.

//     // For a real application, save the user data to a database.
//     // This is a basic example of saving the user to a state.
//     const newUser = {
//       firstName,
//       lastName,
//       age,
//       email,
//       contact,
//       gender,
//     };

//     // For simplicity, we'll just log the new user.
//     console.log(newUser);

//     navigate('/usertable');
//   }

//   return (
//     <div>
//       <h1>Create User</h1>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Contact Number"
//         value={contact}
//         onChange={(e) => setContact(e.target.value)}
//       />
//       <div>
//         <label>Gender:</label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={gender === 'Male'}
//           onChange={() => setGender('Male')}
//         />
//         Male
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={gender === 'Female'}
//           onChange={() => setGender('Female')}
//         />
//         Female
//         <input
//           type="radio"
//           name="gender"
//           value="Other"
//           checked={gender === 'Other'}
//           onChange={() => setGender('Other')}
//         />
//         Other
//       </div>
//       <button onClick={createUser}>Create User</button>
//     </div>
//   );
// }

// export default CreateUser;
// /*
// Now in my create user page when i fill all detail of user when i click on the add button 
// it will check token it is present or not if token is not there then it show a message of
// please login first. and if the token is authenticated then it will add all the data to the table.
// */

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { isAuthenticated } from './Auth'; // Import your authentication service

// function CreateUser() {
//   const navigate = useNavigate()
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [gender, setGender] = useState('Male');

//   const handleAddUser = () => {
//     if (isAuthenticated()) {
//       // User is authenticated, proceed to add data
//       const newUser = {
//         firstName,
//         lastName,
//         age,
//         email,
//         contact,
//         gender,
//       };

//       // Get existing user data from local storage and append the new user
//       const existingData = JSON.parse(localStorage.getItem('userData')) || [];
//       const updatedData = [...existingData, newUser];

//       localStorage.setItem('userData', JSON.stringify(updatedData));
//       navigate('/usertable'); // Redirect to the user table
//     } else {
//       // User is not authenticated, show a message or redirect to the login page
//       alert('Please log in first');
//       // history.push('/login'); // Redirect to the login page
//     }
//   };

//   return (
//     <div>
//       <form>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Contact Number"
//         value={contact}
//         onChange={(e) => setContact(e.target.value)}
//       />
//       <div>
//         <label>Gender:</label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={gender === 'Male'}
//           onChange={() => setGender('Male')}
//         />
//         Male
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={gender === 'Female'}
//           onChange={() => setGender('Female')}
//         />
//         Female
//         <input
//           type="radio"
//           name="gender"
//           value="Other"
//           checked={gender === 'Other'}
//           onChange={() => setGender('Other')}
//         />
//         Other
//         </div>
//         <button onClick={handleAddUser}>Add User</button>
//       </form>
//     </div>
//   );
// }

// export default CreateUser;


import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { isAuthenticated } from './Auth';

function CreateUser() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('Male');

  // Extract user data to edit from location state
  const userToEdit = location.state?.userToEdit;

  // Populate form fields with user data to edit
  useEffect(() => {
    if (userToEdit) {
      setFirstName(userToEdit.firstName);
      setLastName(userToEdit.lastName);
      setAge(userToEdit.age);
      setEmail(userToEdit.email);
      setContact(userToEdit.contact);
      setGender(userToEdit.gender);
    }
  }, [userToEdit]);

  const handleAddUser = () => {
    if (isAuthenticated()) {
      // User is authenticated, proceed to add data
      const newUser = {
        firstName,
        lastName,
        age,
        email,
        contact,
        gender,
      };

      // Get existing user data from local storage and append the new user
      const existingData = JSON.parse(localStorage.getItem('userData')) || [];
      const updatedData = [...existingData, newUser];

      localStorage.setItem('userData', JSON.stringify(updatedData));
      navigate('/usertable'); // Redirect to the user table
    } else {
      // User is not authenticated, show a message or redirect to the login page
      alert('Please log in first');
      // history.push('/login'); // Redirect to the login page
    }
  };

  return (
    <div>
      <form>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={() => setGender('Male')}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={() => setGender('Female')}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={gender === 'Other'}
          onChange={() => setGender('Other')}
        />
        Other
        </div>
        <button onClick={handleAddUser}>Add User</button>
      </form>
    </div>
  );
}

export default CreateUser;

