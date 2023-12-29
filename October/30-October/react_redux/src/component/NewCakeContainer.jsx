import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux1";

function NewCakeContainer(props) {
    const[num,setNum] = useState(1);
  return (
    <div>
      <h1>Number Of Cake - {props.numberOfCakes}</h1>
      <input type="text" value={num} onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={()=>props.buyCake(num)}>Order {num} Cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (num) => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
