import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
// import { Router } from "@reach/router";
import {Route, Router, Routes} from "react-router-dom"

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Footer from "./components/Footer"

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-secondary': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product-details/:productId" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      {/* <Footer/> */}
    </main>
  );
}

export default App;