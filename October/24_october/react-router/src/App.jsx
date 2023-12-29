import { useState } from 'react'
import {Routes,Route} from "react-router-dom"

import './App.css'
import About from './components/About'
import Home from './components/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
     </Routes>
   </div>
  )
}

export default App
