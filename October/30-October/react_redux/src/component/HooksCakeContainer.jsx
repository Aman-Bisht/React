import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { buyCake } from '../redux1';

function HooksCakeContainer() {
    const num = useSelector(state=>state.cake.numberOfCakes)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number Of Cakes {num}</h1>
        <button onClick={()=>dispatch(buyCake())}>Order Cake</button>
    </div>
  )
}

export default HooksCakeContainer