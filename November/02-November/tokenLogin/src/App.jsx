import { Route, Routes } from "react-router";
import "./App.css";
import CreateUser from "./component/CreateUser";
import Login from "./component/Login";
import UserTable from "./component/UserTable";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usertable" element={<UserTable />} />
        <Route path="/createuser" element={<CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
