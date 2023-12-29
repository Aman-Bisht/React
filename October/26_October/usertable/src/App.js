import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import LoginPage from './components/LoginPage';
import UserTable from './components/UserTable';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/usertable" element={<UserTable/>}/>
        <Route path="/createuser" element={<CreateUser/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
