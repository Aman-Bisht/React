

// Login.html
// <!DOCTYPE html>
// <html>
// <head>
//   <link rel="stylesheet" type="text/css" href="styles.css">
// </head>
// <body>
//   <form id="loginForm">
//     <input type="text" id="username" placeholder="Username" required>
//     <input type="password" id="password" placeholder="Password" required>
//     <button type="button" onclick="login()">Login</button>
//   </form>
//   <button id="tableButton" onclick="goToTablePage()">Go to Table Page</button>
//   <script src="login.js"></script>
// </body>
// </html>

// login.js
// function login() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Simplified authentication logic, replace with your own
//   if (username === username && password === password) {
//     const token = generateToken();
//     localStorage.setItem("token", token);
//     window.location.href = "usertable.html";
//   } else {
//     alert("Invalid credentials");
//   }
// }

// function generateToken() {
//   return Math.random().toString(36).substr(2, 16); // Generates a random token
// }

// function goToTablePage() {
//   window.location.href = "usertable.html";
// }

// userTable.html
// <!DOCTYPE html>
// <html>
// <head>
//   <link rel="stylesheet" type="text/css" href="styles.css">
// </head>
// <body>
//   <button onclick="logout()">Logout</button>
//   <table>
//     <thead>
//       <tr>
//         <th>User First Name</th>
//         <th>User Last Name</th>
//         <th>Age</th>
//         <th>Email</th>
//         <th>Contact Number</th>
//         <th>Gender</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody id="userTableBody">
//       <!-- User data rows will be added here -->
//     </tbody>
//   </table>
//   <button onclick="goToCreateUserPage()">Create User</button>
//   <script src="usertable.js"></script>
// </body>
// </html>

// userTable.JSONconst token = localStorage.getItem("token");
// // if (!token) {
// //   window.location.href = "login.html";
// // }

// function logout() {
//   localStorage.removeItem("token");
//   window.location.href = "login.html";
// }

// const userTableBody = document.getElementById("userTableBody");

// function refreshUserTable() {
//   const userData = JSON.parse(localStorage.getItem("userData")) || [];

//   userTableBody.innerHTML = "";

//   userData.forEach((user, index) => {
//     const row = userTableBody.insertRow();
//     row.innerHTML = `
//       <td>${user.firstName}</td>
//       <td>${user.lastName}</td>
//       <td>${user.age}</td>
//       <td>${user.email}</td>
//       <td>${user.contact}</td>
//       <td>${user.gender}</td>
//       <td>
//         <button onclick="editUser(${index})">Edit</button>
//         <button onclick="deleteUser(${index})">Delete</button>
//       </td>
//     `;
//   });
// }

// refreshUserTable();

// function editUser(index) {
//   const userData = JSON.parse(localStorage.getItem("userData")) || [];

//   if (!token) {
//     window.location.href = "login.html";
//     return;
//   }

//   const userToEdit = userData[index];
//   const queryString = `?index=${index}&firstName=${userToEdit.firstName}&lastName=${userToEdit.lastName}&age=${userToEdit.age}&email=${userToEdit.email}&contact=${userToEdit.contact}&gender=${userToEdit.gender}`;
//   window.location.href = `createuser.html${queryString}`;
// }

// function deleteUser(index) {
//   if (!token) {
//     window.location.href = "login.html";
//     return;
//   }

//   const userData = JSON.parse(localStorage.getItem("userData")) || [];

//   if (index >= 0 && index < userData.length) {
//     userData.splice(index, 1);
//     localStorage.setItem("userData", JSON.stringify(userData));
//     refreshUserTable();
//   }
// }

// function goToCreateUserPage() {
//   window.location.href = "createuser.html";
// }



// createuser.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <link rel="stylesheet" type="text/css" href="styles.css" />
//   </head>
//   <body>
//     <form id="userForm">
//       <input type="text" id="firstName" placeholder="First Name" required />
//       <input type="text" id="lastName" placeholder="Last Name" required />
//       <input type="number" id="age" placeholder="Age" required />
  
//       <input type="text" id="contact" placeholder="Contact Number" required />
//       <p class="error" id="contactError"></p>
//       <!-- Error message for contact number -->
//       <input type="text" id="email" placeholder="Email" required />
//       <p class="error" id="emailError"></p>
//       <!-- Error message for email -->
   

//       <div>
//         <label>Gender:</label>
//         <input type="radio" name="gender" value="Male" required /> Male
//         <input type="radio" name="gender" value="Female" required /> Female
//         <input type="radio" name="gender" value="Other" required /> Other
//       </div>
//       <button type="button" id="submitButton" onclick="addUserAndUpdateTable()">
//         Submit
//       </button>
//     </form>
//     <script src="createuser.js"></script>
//   </body>
// </html>


// createuser.js
// const token = localStorage.getItem("token");
// document.addEventListener("DOMContentLoaded", function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const firstNameInput = document.getElementById("firstName");
//   const lastNameInput = document.getElementById("lastName");
//   const ageInput = document.getElementById("age");
//   const contactInput = document.getElementById("contact");
//   const emailInput = document.getElementById("email");
//   const genderInputs = document.getElementsByName("gender");

//   if (urlParams.has("index")) {
//     const index = parseInt(urlParams.get("index"), 10);
//     const userData = JSON.parse(localStorage.getItem("userData")) || [];
//     if (index >= 0 && index < userData.length) {
//       const userToEdit = userData[index];
//       firstNameInput.value = userToEdit.firstName;
//       lastNameInput.value = userToEdit.lastName;
//       ageInput.value = userToEdit.age;
//       emailInput.value = userToEdit.email;
//       contactInput.value = userToEdit.contact;

//       for (const genderInput of genderInputs) {
//         if (genderInput.value === userToEdit.gender) {
//           genderInput.checked = true;
//         }
//       }
//     }
//   }
// });

// function addUserAndUpdateTable() {
//   if (!token) {
//     window.location.href = "login.html";
//     return;
//   }
//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const age = document.getElementById("age").value;
//   const email = document.getElementById("email").value;
//   const contact = document.getElementById("contact").value;
//   let selectedGender;
//   const genderInputs = document.getElementsByName("gender");

//   for (const genderInput of genderInputs) {
//     if (genderInput.checked) {
//       selectedGender = genderInput.value;
//       break;
//     }
//   }

//   // Validation for email using a regular expression
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   const isEmailValid = emailPattern.test(email);

//   // Validation for contact number (10 digits)
//   const isContactValid = /^\d{10}$/.test(contact);

//   const emailError = document.getElementById("emailError");
//   const contactError = document.getElementById("contactError");

//   if (!isEmailValid) {
//     emailError.textContent = "Invalid email address";
//   } else {
//     emailError.textContent = "";
//   }

//   if (!isContactValid) {
//     contactError.textContent = "Contact number must be 10 digits";
//   } else {
//     contactError.textContent = "";
//   }

//   if (isEmailValid && isContactValid) {
//     const userData = JSON.parse(localStorage.getItem("userData")) || [];
//     const urlParams = new URLSearchParams(window.location.search);

//     if (urlParams.has("index")) {
//       // Editing an existing user
//       const index = parseInt(urlParams.get("index"), 10);
//       if (index >= 0 && index < userData.length) {
//         userData[index] = {
//           firstName,
//           lastName,
//           age,
//           email,
//           contact,
//           gender: selectedGender,
//         };
//       }
//     } else {
//       // Adding a new user
//       userData.push({
//         firstName,
//         lastName,
//         age,
//         email,
//         contact,
//         gender: selectedGender,
//       });
//     }

//     localStorage.setItem("userData", JSON.stringify(userData));
//     const queryString = "?update=true";
//     window.location.href = `usertable.html${queryString}`;
//   }
// }


// style.css
// /* Reset some default styles */
// body,
// html {
//   margin: 0;
//   padding: 0;
// }

// /* Basic page styling */
// body {
//   font-family: Arial, sans-serif;
//   background-color: #f4f4f4;
//   padding: 20px;
// }

// /* Form styles */
// form {
//   background-color: #fff;
//   border: 1px solid #ccc;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
//   margin: 0 auto;
//   max-width: 400px;
// }

// input[type="text"],
// input[type="password"],
// input[type="number"] {
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// }

// label {
//   font-weight: bold;
// }

// button {
//   display: block;
//   width: 100%;
//   padding: 10px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #0056b3;
// }

// /* Table styles */
// table {
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;
// }

// table,
// th,
// td {
//   border: 1px solid #ccc;
// }

// th,
// td {
//   padding: 8px;
//   text-align: left;
// }

// th {
//   background-color: #007bff;
//   color: #fff;
// }

// /* Buttons */
// button {
//   padding: 5px 10px;
//   margin: 4px 0;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #0056b3;
// }

// /* Logout button */
// button#logoutButton {
//   background-color: #ff6347;
// }

// /* Radio buttons */
// input[type="radio"] {
//   margin-right: 5px;
// }

// /* Error message styles */
// .error {
//   color: #ff0000;
//   font-size: 12px;
// }

// /* Media Query for Responsive Design */
// @media screen and (max-width: 768px) {
//   form {
//     max-width: 100%;
//     /* max-width: auto; */
//   }
//   table {
//     font-size: 12px;
//   }
//   button {
//     width: 50%;
//     /* width: auto; */
//   }
// }
