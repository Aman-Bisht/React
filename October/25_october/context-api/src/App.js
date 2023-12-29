import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Context-API</h1>
      <AuthProvider>
        <Login />
        <Profile />
      </AuthProvider>
    </div>
  );
}

export default App;
