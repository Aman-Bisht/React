
/*
const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialSate = {
    loading:false,
    user:[],
    error:""
}

const FETCH_USERS_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST,
    }
}

const fetchUserSuccess = (users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users,
    }
}

const fetchUserFailure =(error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error,
    }
}

const reducer = (state=initialSate,action)=>{
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
    }
}

const fetchUsers = ()=>{
    return function (dispatch){
        fetchUserRequest(dispatch)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((resolve)=>{
            users = resolve.data.map(user=>user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch((reject)=>{
            dispatch(fetchUserFailure(reject.message))
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
*/


const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading : false,
    users : [],
    error : "",
}

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = ()=>{
    return {
        type:FETCH_USER_REQUEST,
    }
}

const fetchUserSuccess = (users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload :users,
    }
}

const fetchUserFailure = (error)=>{
    return {
        type:FETCH_USER_FAILURE,
        payload: error,
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case FETCH_USER_SUCCESS:
            return {
                users:action.payload,
                loading:false,
                error:""
            }
        case FETCH_USER_FAILURE:
            return {
                users:[],
                loading:false,
                error:action.payload
            }
    }
}

const fetchUser = ()=>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(resolve=>{
            users = resolve.data.map((user)=>user.name)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            error=error.message;
            dispatch(fetchUserFailure(error));
        })

    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchUser());