// import {
//   FETCH_USER_FAILURE,
//   FETCH_USER_REQUEST,
//   FETCH_USER_SUCCESS,
// } from "./userType";

// const initialState = {
//   loading: false,
//   user: [],
//   error: "",
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         loading: true,
//       };
//     case FETCH_USER_SUCCESS:
//       return {
//         loading: false,
//         user: action.payload,
//         error: "",
//       };
//     case FETCH_USER_FAILURE:
//       return {
//         loading: false,
//         user: [],
//         error: action.payload,
//       };
//   }
// };

// export default reducer;


import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './userType'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer