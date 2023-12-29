import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux1";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number Of Cake - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Order Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
