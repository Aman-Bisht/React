import React, { useState } from 'react'

function Counter() {
    const [input,setInput] = useState(0);
    const handleIncrement = ()=>{
        setInput((prev)=>prev+1)
    }
    const handleDecremnt = ()=>{
        setInput((prev)=>prev-1)
    }
  return (
    <div>
        <section>
        <h1>Counter Value ={input}</h1>
        </section>
        <div>
            <button onClick={handleIncrement}>+</button>
        </div>
        <div>
            <button onClick={handleDecremnt}>-</button>
        </div>
    </div>
  )
}

export default Counter