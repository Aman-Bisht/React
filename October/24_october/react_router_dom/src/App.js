import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import { AuthProvider } from "./components/Auth";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import Order_Summary from "./components/Order_Summary";
import Products from "./components/Products";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Layout from "./Layout";
function App() {
  return (
    <AuthProvider>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order_summary" element={<Order_Summary />} />
          <Route path="/*" element={<NoMatch />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
