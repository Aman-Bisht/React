import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset,addByAmount } from "./counterSlice";

function Counter() {
    const [num,setNum] = useState(0)
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const addValue = Number(num)||0
  const resetAll = ()=>{
      setNum(0);
      dispatch(reset());
  }
  const addAmount = ()=>{
      dispatch(addByAmount(addValue))
      setNum(0)
  }

  return (
    <div>
      <h1>Counter Value {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    <input type="number" value = {num} onChange={(e)=>setNum(e.target.value)}/>
    <button onClick={addAmount}>Add Amount</button>
    <button onClick={resetAll}>Reset</button>
    </div>
  );
}

export default Counter;
