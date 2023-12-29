import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ordered,restocked} from "./cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number Of Cake {numOfCakes}</h1>
      <button onClick={()=>{dispatch(ordered())}}>Order Cake</button>
      <button onClick={()=>{dispatch(restocked(2))}}>Restock Cake</button>
    </div>
  );
}

export default CakeView;
