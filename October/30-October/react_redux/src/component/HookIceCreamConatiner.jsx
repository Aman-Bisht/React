import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux1';

function HookIceCreamConatiner() {
    const num = useSelector(state=>state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number Of Ice-Creams {num}</h1>
        <button onClick={()=>dispatch(buyIceCream())}>Order</button>
    </div>
  )
}

export default HookIceCreamConatiner