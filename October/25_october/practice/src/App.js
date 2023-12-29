import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import {Routes,Route} from "react-router-dom";
import Profile from "./components/Profile";


function App() {
  return (
    <div>
      {/* <h1>Ragister Page</h1> */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
