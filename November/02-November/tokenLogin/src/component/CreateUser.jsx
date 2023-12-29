import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './styles.css';

function CreateUser() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    contact: '',
    email: '',
    gender: 'Male', // Default value
  });
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("index")) {
      const index = parseInt(urlParams.get("index"), 10);
      const userData = JSON.parse(localStorage.getItem("userData")) || [];
      if (index >= 0 && index < userData.length) {
        const userToEdit = userData[index];
        setFormData({
          firstName: userToEdit.firstName,
          lastName: userToEdit.lastName,
          age: userToEdit.age,
          email: userToEdit.email,
          contact: userToEdit.contact,
          gender: userToEdit.gender,
        });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addUserAndUpdateTable = () => {
    if (!token) {
    //   window.location.href = "login.html";
    navigate("/")
      return;
    }

    const { firstName, lastName, age, email, contact, gender } = formData;

    // email verification
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPattern.test(email);

    // phone number verification
    const isContactValid = /^\d{10}$/.test(contact);

    if (!isEmailValid) {
      setEmailError("Invalid email address");
    } else {
      setEmailError('');
    }

    if (!isContactValid) {
      setContactError("Contact number must be 10 digits");
    } else {
      setContactError('');
    }

    if (isEmailValid && isContactValid) {
      const userData = JSON.parse(localStorage.getItem("userData")) || [];
      const urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has("index")) {
        // edit exist user
        const index = parseInt(urlParams.get("index"), 10);
        if (index >= 0 && index < userData.length) {
          userData[index] = {
            firstName,
            lastName,
            age,
            email,
            contact,
            gender,
          };
        }
      } else {
        //  adding mew user
        userData.push({
          firstName,
          lastName,
          age,
          email,
          contact,
          gender,
        });
      }

      localStorage.setItem("userData", JSON.stringify(userData));
      const queryString = "?update=true";
    //   window.location.href = `usertable${queryString}`;
    navigate(`/usertable${queryString}`)
    }
  };

  return (
    <div className="container">
      <form id="userForm">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          value={formData.age}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          required
          value={formData.contact}
          onChange={handleInputChange}
        />
        <p className="error" id="contactError">
          {contactError}
        </p>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <p className="error" id="emailError">
          {emailError}
        </p>

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            required
            checked={formData.gender === 'Male'}
            onChange={handleInputChange}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            required
            checked={formData.gender === 'Female'}
            onChange={handleInputChange}
          />{' '}
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            required
            checked={formData.gender === 'Other'}
            onChange={handleInputChange}
          />{' '}
          Other
        </div>
        <button type="button" id="submitButton" onClick={addUserAndUpdateTable}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
