
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <div>
      <h1>Context-API Problem</h1>
      <AuthProvider>
        <Login />
        <Profile />
      </AuthProvider>
    </div>
  );
}

export default App;

