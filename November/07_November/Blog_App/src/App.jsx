import { useEffect, useState } from 'react'
import './App.css'
import conf from './conf/conf'
import{useDispatch} from "react-redux";
import authService from "./appwrite/auth"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from "react-router-dom"
import {login,logout} from "./store/authSlice"

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  console.log(conf.appwriteBucketId)

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false));
  })
  return !loading ? (
    <div className="min-h-screen flex felx-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          Todo: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
