
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

function IceCreamView() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const [val, setVal] = useState(1);
  const dispatch = useDispatch();

  const handleRestockCake = () => {
    setVal(1); // Reset val to 1
    dispatch(restocked(val));
  };

  return (
    <div>
      <h1>Number Of Ice-Cream {numOfIceCreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <br />
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
      />
      <button onClick={handleRestockCake}>Restock Cake</button>
    </div>
  );
}

export default IceCreamView;
