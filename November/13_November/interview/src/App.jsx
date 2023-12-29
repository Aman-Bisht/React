import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value,setValue] = useState(1);
  console.log(value)
  // const [multiply, setMultiply] = useState(1);
  let multiply = value*5

  const handleClick = ()=>{
    // setMultiply(value*5);
    setValue(value+1);
  }

  return (
    <>
    <h1>Value {value}</h1>
    <button onClick={handleClick}>Multiply by 5</button>
    <h2>Result {multiply}</h2>
    </>
  )
}

export default App
