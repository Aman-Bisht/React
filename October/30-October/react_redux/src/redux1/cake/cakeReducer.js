import { BUY_CAKE } from "./CakeType";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numberOfCakes-action.payload > 0) {
        return {
          ...state,
          numberOfCakes: state.numberOfCakes - action.payload,
        };
      }else{
        return alert("Out of Stock")
      }
    default:
      return state;
    // return {
    //    ...state
    // }
  }
};
export default cakeReducer;
