import { BUY_ICECREAM } from "./IceCreamType";

const initialState = {
  numberOfIceCreams: 30,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      if (state.numberOfIceCreams > 0) {
        return {
          ...state,
          numberOfIceCreams: state.numberOfIceCreams - 1,
        };
      } else {
        return alert("Out Of Stock");
      }
    default:
      return state;
  }
};

export default iceCreamReducer;
