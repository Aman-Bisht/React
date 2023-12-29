// import {
//   FETCH_USER_FAILURE,
//   FETCH_USER_REQUEST,
//   FETCH_USER_SUCCESS,
// } from "./userType";
// import axios from "axios";

// export const fetchUserRequest = () => {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// };

// export const fetchUserSuccess = (users) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: users,
//   };
// };

// export const fetchUserFailure = (error) => {
//   return {
//     type: FETCH_USER_FAILURE,
//     payload: error,
//   };
// };

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUserRequest());
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users`)
//       .then((resolve) => {
//         users = resolve.data;
//         dispatch(fetchUserSuccess(users));
//       })
//       .catch((error) => {
//         // errorMsg = error.message;
//         dispatch(fetchUserFailure(error.message));
//       });
//   };
// };

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './userType'
import axios from 'axios'


export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
  export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
}