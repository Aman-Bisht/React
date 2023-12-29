
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Ecomerce</h1>
//     </div>
//   );
// }

// export default App;


// App.js

/*
import { Route, Routes } from "react-router";
<div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usertable" element={<UserTable />} />
        <Route path="/createuser" element={<CreateUser/>}/>
      </Routes>
    </div>
*/


import React from 'react';
import { Route, Routes } from "react-router";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
